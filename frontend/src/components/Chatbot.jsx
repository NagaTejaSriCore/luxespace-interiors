import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

export default function Chatbot() {
  const wizardSteps = [
  {
    question: "What type of property would you like us to design?",
    options: [
      "🏠 Residence",
      "🏡 Villa",
      "🏢 Office",
      "🏫 School",
      "🏬 Commercial",
      "🏢 Apartment",
      "Other"
    ]
  },
  {
    question: "What is the size of your property?",
    options: [
      "1 BHK",
      "2 BHK",
      "3 BHK",
      "4 BHK",
      "5+ BHK",
      "Custom"
    ]
  },
  {
    question: "Which theme do you prefer?",
    options: [
      "Minimalist",
      "Luxury",
      "Modern",
      "Contemporary",
      "Traditional",
      "Industrial",
      "Custom"
    ]
  },
  {
    question: "What's your budget?",
    options: [
      "₹5 Lakhs",
      "₹10 Lakhs",
      "₹15 Lakhs",
      "₹20 Lakhs",
      "₹25 Lakhs",
      "Custom"
    ]
  },{
  question: "Please enter your details to book a consultation.",
  options: []
}
];
const [consultationCompleted, setConsultationCompleted] = useState(false);

  const [step, setStep] = useState(0);

  const [options, setOptions] = useState(wizardSteps[0].options);

  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Welcome to LuxeSpace Interiors! Let's understand your project. What type of property would you like us to design?"
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  
  // Auto-scroll logic
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input field on open
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen, loading]);

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    // Add user message to state
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInputMessage('');
    setLoading(true);
    setErrorState(false);

    try {
      // Send chat request to proxy endpoint /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          history: newMessages.slice(1).map(msg => ({ role: msg.role, content: msg.content }))
        })
      });

      if (!response.ok) {
        throw new Error('API server returned an error');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error('Chatbot fetch error:', err);
      setErrorState(true);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
    if (lastUserMessage) {
      handleSendMessage(lastUserMessage.content);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-gold hover:bg-gold-dark text-white rounded-full p-4.5 shadow-2xl hover:scale-105 transition-all duration-300 border border-white/25 flex items-center justify-center"
        aria-label="Open AI designer chat"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 fill-current" />}
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 w-full max-w-sm sm:max-w-md h-[560px] glass-effect rounded-[32px] shadow-2xl z-50 flex flex-col overflow-hidden border border-primary/5 dark:border-white/5"
          >
            {/* Header bar */}
            <div className="bg-primary/95 dark:bg-black/95 px-6 py-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold tracking-wide">LuxeSpace Assistant</h4>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">Interior Consultation</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Hide chat window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-background-light/40 dark:bg-background-dark/30 scroll-smooth">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-gold text-white rounded-tr-sm shadow-md' 
                        : 'bg-white dark:bg-slate-800 text-primary dark:text-white rounded-tl-sm border border-primary/5 shadow-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing simulation */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 border border-primary/5 rounded-2xl rounded-tl-sm px-4 py-3 text-xs flex space-x-1.5 items-center shadow-sm">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {/* Error boundary retry */}
              {errorState && (
                <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-250 p-4 rounded-xl space-y-2 flex flex-col items-center text-center text-rose-800 dark:text-rose-300">
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <AlertCircle className="w-4 h-4 shrink-0" /> Connection Interrupted
                  </div>
                  <p className="text-[10px] leading-normal opacity-90">
                    Unable to connect to the consultation assistant.
                  </p>
                  <button
                    onClick={handleRetry}
                    className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-semibold uppercase px-4 py-2 rounded-full transition-colors shadow-sm cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Retry Request
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions list slider */}

            <div className="px-6 py-2 border-t border-primary/5 dark:border-white/5 flex gap-2 overflow-x-auto scrollbar-none shrink-0 bg-background-light/20">
              
              {!consultationCompleted && options.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {

  // Show the selected option in chat
  setMessages(prev => [
    ...prev,
    {
      role: "user",
      content: q
    }
  ]);

  // Save the answer
  setAnswers(prev => ({
    ...prev,
    [wizardSteps[step].question]: q
  }));

  // Move to next step
  if (step < wizardSteps.length - 1) {

    const nextStep = step + 1;

    setStep(nextStep);

    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: wizardSteps[nextStep].question
      }
    ]);

    setOptions(wizardSteps[nextStep].options);

  } else {

    // Wizard finished
    setOptions([]);

    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content:
          "Great! Please enter your Name, Mobile Number and Email below to book your consultation."
      }
    ]);

  }

}}
                  disabled={loading}
                  className="bg-white dark:bg-slate-800 text-primary/75 dark:text-white/60 text-[10px] px-3.5 py-1.5 rounded-full border border-primary/5 hover:border-gold hover:text-gold dark:hover:text-gold shrink-0 transition-colors cursor-pointer disabled:opacity-50 font-semibold"
                >
                  {q}
                </button>
              ))}
            </div>
            {step === 4 && !consultationCompleted && (

<div className="p-4 space-y-3">

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border rounded-lg p-2 text-black placeholder:text-gray-500"
/>

<input
placeholder="Mobile Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full border rounded-lg p-2 text-black placeholder:text-gray-500"
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border rounded-lg p-2 text-black placeholder:text-gray-500"
/>

<button

onClick={()=>{

setConsultationCompleted(true);

setMessages(prev=>[
...prev,
{
role:"assistant",
content:
"✅ Thank you! Your consultation has been booked successfully. Our interior design team will contact you shortly."
}
]);

}}

className="w-full bg-gold text-white rounded-lg p-3"

>

Book Consultation

</button>

</div>

)}
            {/* Input Bar */}
            <div className="p-4 border-t border-primary/5 dark:border-white/5 bg-white dark:bg-slate-800 shrink-0 flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
consultationCompleted
? "Ask our AI Assistant..."
: "Complete the consultation first..."
}
                disabled={loading || !consultationCompleted}
                className="flex-1 bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-gold transition-colors text-primary dark:text-white disabled:opacity-50 placeholder:text-primary/45 dark:placeholder:text-white/30"
              />
              <button
                onClick={() => {

if(consultationCompleted){

handleSendMessage();

}

}}
                disabled={loading || !inputMessage.trim()}
                className="bg-gold hover:bg-gold-dark text-white rounded-full p-2.5 transition-all duration-300 shadow-md disabled:opacity-50 flex items-center justify-center cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
