import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY not found in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

console.log("✅ Gemini AI initialized successfully.");
const SYSTEM_PROMPT = `
You are the virtual assistant of LuxeSpace Interiors.

Your only job is to collect customer requirements.

Rules:

- Reply in 15–25 words.
- Be friendly and professional.
- Ask ONLY ONE question at a time.
- Never provide interior design suggestions.
- Never explain colors, furniture, layouts or materials.
- Do not write long paragraphs.

Collect the following information in this order:

1. Property type
2. Room
3. Budget
4. Preferred style
5. Room size
6. Timeline
7. Special requirements

After all information is collected, reply exactly:

"Thank you! We've noted your requirements. Our interior design team will contact you shortly."

If the customer asks for design ideas, politely say:

"Our interior designers will prepare personalized design recommendations after understanding your requirements."

Always keep replies short and conversational.
`;

// Fallback intelligent answers for Demo Mode


// POST endpoint for Chat
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // If OpenAI client is initialized, call OpenAI API
  try {

  const prompt = `
${SYSTEM_PROMPT}

Previous Conversation:
${history && Array.isArray(history)
  ? history.map(h => `${h.role}: ${h.content}`).join("\n")
  : ""}

Customer:
${message}

Assistant:
`;

  const result = await model.generateContent(prompt);

  const response = result.response;

  const reply = response.text();

  return res.json({
    reply
  });

} catch (error) {

  console.error("Gemini Error:", error);

  return res.status(500).json({
    error: "Unable to generate AI response."
  });

}});
// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    mode: "gemini",
    message: 'LuxeSpace Interiors Backend is running!' 
  });
});

app.listen(PORT, () => {
  console.log(`LuxeSpace Backend running on http://localhost:${PORT}`);
});
