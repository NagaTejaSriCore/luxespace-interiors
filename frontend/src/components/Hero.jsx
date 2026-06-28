import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, X, Calendar, User, Mail, Phone, Clock, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ isModalOpen, setIsModalOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'Residential Interiors',
    notes: ''
  });
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#C89B3C', '#1E293B', '#F8F7F5']
    });
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: 'Residential Interiors',
        notes: ''
      });
    }, 3000);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-primary/45 dark:bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Living Room Design" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center space-x-2 border border-gold/45 bg-gold/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs uppercase tracking-widest text-gold-light font-medium">
            Exquisite Design Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Design Spaces <br />
          <span className="italic font-light text-gold-light">That Inspire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 text-base sm:text-xl font-light tracking-wide max-w-2xl mb-10 leading-relaxed"
        >
          Premium interior solutions for homes, luxury villas, offices, commercial spaces, and custom furniture curation.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto text-center bg-gold hover:bg-gold-dark text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-gold/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Projects
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-md"
          >
            Book Consultation
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => {
            const el = document.getElementById('services');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-widest text-white/55 mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-gold-light animate-bounce" />
        </motion.div>
      </div>

      {/* Consultation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-background-light dark:bg-background-dark rounded-3xl shadow-2xl p-8 overflow-hidden z-10 border border-primary/5 dark:border-white/5 max-h-[90vh] overflow-y-auto"
            >
              {/* Decorative background */}
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-primary/5 dark:hover:bg-white/5 text-primary dark:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {booked ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 animate-pulse">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-primary dark:text-white mb-3">Consultation Requested!</h3>
                  <p className="text-text-light dark:text-white/60 max-w-md">
                    Thank you, <strong className="text-gold">{formData.name}</strong>. Our premium design consultant will contact you at <strong className="text-primary dark:text-white">{formData.email}</strong> or by phone shortly to confirm your booking for {formData.date} at {formData.time}.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-serif text-3xl font-bold text-primary dark:text-white mb-2">Book a Premium Consultation</h3>
                    <p className="text-sm text-text-light dark:text-white/60">
                      Take the first step toward your dream space. Share your details and schedule.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-text-light dark:text-white/60 flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-gold" /> Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-text-light dark:text-white/60 flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-gold" /> Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. eleanor@example.com"
                          className="w-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-text-light dark:text-white/60 flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-gold" /> Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +1 (555) 019-2834"
                          className="w-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-text-light dark:text-white/60">
                          Interior Project Type
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        >
                          <option>Residential Interiors</option>
                          <option>Commercial Office Space</option>
                          <option>Luxury Villa Design</option>
                          <option>Kitchen Modern Renovation</option>
                          <option>Lighting & Furniture curation</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-text-light dark:text-white/60 flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-gold" /> Preferred Date
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-text-light dark:text-white/60 flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-gold" /> Preferred Time
                        </label>
                        <input
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-light dark:text-white/60 flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-gold" /> Brief Project Notes
                      </label>
                      <textarea
                        rows="3"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Describe your design aspirations..."
                        className="w-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-4 rounded-xl transition-all duration-300 shadow-lg"
                    >
                      Schedule Consultation Call
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
