import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Compass, Sparkles } from 'lucide-react';

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { value: 500, suffix: '+', label: 'Luxury Projects' },
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 98, suffix: '%', label: 'Happy Clients' },
    { value: 50, suffix: '+', label: 'Design Experts' },
  ];

  return (
    <section id="about" className="py-24 bg-background-light dark:bg-background-dark/95 border-b border-primary/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Our Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Curating Spaces of Distinction
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
        </div>

        {/* Brand Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary dark:text-white">
              The LuxeSpace Narrative
            </h3>
            <p className="text-text-light dark:text-white/60 leading-relaxed font-light">
              Founded over a decade ago, LuxeSpace Interiors was born out of a desire to redefine luxury. We believe a home or office is not just a structural layout, but a canvas where dreams, functional flow, and high-end materials blend.
            </p>
            <p className="text-text-light dark:text-white/60 leading-relaxed font-light">
              Our designs are marked by minimal elegance, custom-crafted furniture, layered smart lighting systems, and materials sourced from premium global partners. We collaborate deeply with clients to deliver turnkey solutions that stand the test of time.
            </p>
            <div className="flex items-center space-x-3 text-gold">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-serif italic font-medium">Elevating spaces, enrichings lives.</span>
            </div>
          </motion.div>

          {/* Stats Cards Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-slate-800/80 p-8 rounded-3xl border border-primary/5 dark:border-white/5 shadow-md flex flex-col items-center justify-center text-center hover-premium"
              >
                <div className="font-serif text-3xl sm:text-5xl font-bold text-gold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest font-semibold text-primary/75 dark:text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-slate-800/60 p-8 rounded-3xl border border-primary/5 dark:border-white/5 shadow-sm space-y-4 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-primary dark:text-white">Our Vision</h4>
            <p className="text-sm text-text-light dark:text-white/60 leading-relaxed font-light">
              To be globally recognized as a premier luxury interior studio, setting benchmarks in sustainable modern elegance and state-of-the-art interactive smart spaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800/60 p-8 rounded-3xl border border-primary/5 dark:border-white/5 shadow-sm space-y-4 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-primary dark:text-white">Our Mission</h4>
            <p className="text-sm text-text-light dark:text-white/60 leading-relaxed font-light">
              To design architectural interiors that reflect our clients' unique identities, prioritizing smart layout flow, premium craftsmanship, and unparalleled luxury comfort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-slate-800/60 p-8 rounded-3xl border border-primary/5 dark:border-white/5 shadow-sm space-y-4 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-primary dark:text-white">Our Values</h4>
            <p className="text-sm text-text-light dark:text-white/60 leading-relaxed font-light">
              Uncompromising quality, environmental responsibility, client transparency, and creative audacity form the foundations of every single design stroke.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
