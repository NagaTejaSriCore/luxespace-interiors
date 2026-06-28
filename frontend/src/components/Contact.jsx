import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Get In Touch</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Connect With Our Team
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Info (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-primary dark:text-white">
                Contact Details
              </h3>
              <p className="text-sm text-text-light dark:text-white/60 leading-relaxed font-light">
                Have an upcoming custom home, villa, or restaurant build? Reach out to schedule a consultation with our senior designers. We are excited to collaborate.
              </p>
            </div>

            {/* Icons Stack */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-primary dark:text-white mb-1">Office Location</h4>
                  <p className="text-sm text-text-light dark:text-white/65">
                    452 Luxe Avenue, Suite 10, Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-primary dark:text-white mb-1">Phone Enquiries</h4>
                  <p className="text-sm text-text-light dark:text-white/65">+1 (310) 555-0190</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-primary dark:text-white mb-1">Email Coordinates</h4>
                  <p className="text-sm text-text-light dark:text-white/65">design@luxespaceinteriors.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-primary dark:text-white mb-1">Business Hours</h4>
                  <p className="text-xs text-text-light dark:text-white/65">
                    Mon - Fri: 9:00 AM - 6:00 PM <br />
                    Saturday: 10:00 AM - 4:00 PM <br />
                    Sunday: Closed (By Appointment Only)
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Chat */}
            <div className="pt-4">
              <a
                href="https://wa.me/13105550190?text=Hi%20LuxeSpace%2520Interiors,%20I'd%2520like%252520to%2520book%2520a%2520design%2520consultation."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3.5 rounded-full shadow-lg hover:shadow-emerald-600/20 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 fill-current" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form & Map (Right) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-primary/5 shadow-md">
              <h3 className="font-serif text-xl font-bold text-primary dark:text-white mb-6">
                Send Message
              </h3>

              {submitted ? (
                <div className="bg-gold/10 border border-gold/25 p-6 rounded-2xl flex items-center gap-3 text-gold-dark dark:text-gold-light animate-fade-in">
                  <Sparkles className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs mt-0.5 opacity-90">Our client coordinator will reach out to you within 24 business hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/45">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-gold transition-colors text-primary dark:text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/45">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-gold transition-colors text-primary dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/45">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-gold transition-colors text-primary dark:text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/45">Message Description</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-gold transition-colors text-primary dark:text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-light dark:bg-gold dark:hover:bg-gold-dark text-white font-medium py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4" /> Send Enquiries
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Mockup */}
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-primary/5 dark:border-white/5 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-center px-4">
              {/* Map visual styling */}
              <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              <div className="relative z-10 flex flex-col items-center max-w-sm">
                <MapPin className="w-8 h-8 text-gold mb-2 animate-bounce" />
                <h4 className="font-serif text-sm font-bold text-primary dark:text-white">LuxeSpace Studio Beverly Hills</h4>
                <p className="text-[10px] text-text-light dark:text-white/45 mt-1">452 Luxe Avenue, Suite 10, CA 90210</p>
                <div className="mt-3 bg-white dark:bg-slate-900 border border-primary/5 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-semibold text-gold shadow-sm cursor-pointer hover:bg-gold hover:text-white transition-colors duration-300">
                  Open in Google Maps
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
