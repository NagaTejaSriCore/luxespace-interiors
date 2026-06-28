# LuxeSpace Interiors 🌟

LuxeSpace Interiors is a premium, production-quality, fully responsive website for a luxury interior design agency. It includes a modern aesthetic styling layout, multiple interactive components, and a **fully functional AI chatbot** integrated with Node/Express and the OpenAI Chat Completions API.

---

## Technical Stack

* **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide Icons, Canvas Confetti
* **Backend**: Node.js, Express, CORS, Dotenv, OpenAI SDK
* **AI Model**: GPT-4o-Mini (with intelligent fallback responding simulation for offline/unkeyed runs)

---

## Features

1. **AI Interior Designer Chatbot**: Glassmorphic floating chat widget featuring recommended questions, typing indicators, conversation history, and API error retry triggers.
2. **Interactive Before & After Slider**: Side-by-side comparative viewport dragging comparing a raw room under construction with a finished luxury parlor (supports touch dragging for mobile).
3. **Room Planner Simulator**: Input width, length, budget, style, lighting, and color scheme to generate itemized costs, design layout suggestions, and a bird's-eye 2D layout.
4. **Custom Portfolio Gallery**: Masonry grid with category filtering and interactive modal popups containing location, styles, budgets, timelines, and raw material palletes.
5. **Theme Engine**: Complete global light/dark mode styling persistent in localStorage and pre-linked to matching system colors.
6. **Consultation Scheduler**: Custom calendar appointment form with automated layout response verification and a confetti visual payoff on success.
7. **SEO Optimization**: Title metrics, description meta tags, custom SVG favicon, and semantic tags.

---

## Getting Started

Since we have already initialized the folder and completed installation of all dependencies, you can start using it immediately!

### 1. Set up your OpenAI API Key (Optional but recommended)
Open the file [backend/.env](file:///C:/Users/tejas/.gemini/antigravity/scratch/luxespace-interiors/backend/.env) and replace the placeholder value with your actual OpenAI key:
```env
OPENAI_API_KEY=sk-proj-yourActualKeyHere...
PORT=5000
```
*Note: If no key is configured, the chatbot automatically falls back to an intelligent local designer response engine so that the website remains fully interactive and testable immediately.*

### 2. Start the Development Server
In your terminal, navigate to the project directory and run the concurrent command:
```bash
cd C:\Users\tejas\.gemini\antigravity\scratch\luxespace-interiors
npm run dev
```

This single command will concurrently start:
* The **Express backend** on [http://localhost:5000](http://localhost:5000)
* The **Vite React frontend** on [http://localhost:5173](http://localhost:5173)

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## Directory Structure

```
luxespace-interiors/
├── README.md
├── package.json
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── index.html
    └── src/
        ├── index.css
        ├── main.jsx
        ├── App.jsx
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── About.jsx
        │   ├── Services.jsx
        │   ├── Portfolio.jsx
        │   ├── BeforeAfter.jsx
        │   ├── DesignStyles.jsx
        │   ├── RoomPlanner.jsx
        │   ├── Testimonials.jsx
        │   ├── FAQ.jsx
        │   ├── Contact.jsx
        │   ├── Footer.jsx
        │   └── Chatbot.jsx
        └── context/
            └── ThemeContext.jsx
```
