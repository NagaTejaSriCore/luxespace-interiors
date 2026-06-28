import React, { useState } from 'react';
import { Sparkles, Send, Instagram, Facebook, Linkedin, Pin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-primary dark:bg-black text-white/70 border-t border-white/5 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <a href="#home" className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-gold" />
            <span className="font-serif text-2xl font-bold tracking-wide text-white">
              LuxeSpace<span className="text-gold font-sans font-light">.</span>
            </span>
          </a>
          <p className="text-sm leading-relaxed text-white/55">
            Creating highly personalized, premium design experiences for homes, offices, and villas worldwide. Excellence in every corner.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all duration-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-serif text-white font-semibold text-lg mb-6">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#services" className="hover:text-gold transition-colors duration-300">Residential Interiors</a></li>
            <li><a href="#services" className="hover:text-gold transition-colors duration-300">Commercial & Office</a></li>
            <li><a href="#services" className="hover:text-gold transition-colors duration-300">Villa Custom Design</a></li>
            <li><a href="#services" className="hover:text-gold transition-colors duration-300">Lighting & Furniture Plan</a></li>
            <li><a href="#services" className="hover:text-gold transition-colors duration-300">3D Design Rendering</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-serif text-white font-semibold text-lg mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-gold transition-colors duration-300">About Us</a></li>
            <li><a href="#portfolio" className="hover:text-gold transition-colors duration-300">Our Portfolio</a></li>
            <li><a href="#styles" className="hover:text-gold transition-colors duration-300">Design Styles</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors duration-300">Contact Us</a></li>
            <li><a href="#faq" className="hover:text-gold transition-colors duration-300">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-6">
          <h3 className="font-serif text-white font-semibold text-lg mb-6">Newsletter</h3>
          <p className="text-sm text-white/55">
            Subscribe to receive premium styling tips, trends, and early access to our projects.
          </p>
          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 placeholder:text-white/30"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bg-gold hover:bg-gold-dark text-white p-2 rounded-full transition-all duration-300"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-gold animate-fade-in">
              Thank you! You are now subscribed to our luxury journal.
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
        <p>© {new Date().getFullYear()} LuxeSpace Interiors. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
