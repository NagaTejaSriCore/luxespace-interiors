import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  const reviews = [
    {
      name: 'Beatrice Vance',
      role: 'Penthouse Owner, Manhattan',
      quote: 'LuxeSpace transformed our empty penthouse into a breathtaking masterwork of warm minimalist design. Their attention to lighting coves, hidden storage panels, and custom furniture curation is simply unmatched.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5
    },
    {
      name: 'Marcus Sterling',
      role: 'CEO, Sterling Creative Agency',
      quote: 'We hired the studio for our workspace remodel. The modern industrial layouts they produced are highly functional, and our clients constantly praise the slate finishes, custom steel frameworks, and natural greenery.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5
    },
    {
      name: 'Dr. Sophia Chen',
      role: 'Chef & Culinary Blogger, Boston',
      quote: 'Their contemporary kitchen design was exactly what we envisioned. Clean lines, hidden pantry spaces, quartzite counters, and highly ergonomic placements. An exceptional end-to-end service.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5
    }
  ];

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark border-b border-primary/5 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Client Love</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Testimonials
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white dark:bg-slate-800 p-8 sm:p-16 rounded-[40px] shadow-xl border border-primary/5 min-h-[320px] flex flex-col justify-between overflow-hidden">
          {/* Decorative quote mark */}
          <div className="absolute top-8 right-12 text-gold/10 dark:text-white/5">
            <Quote className="w-24 h-24 transform rotate-180" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="space-y-8 relative z-10 flex flex-col justify-between h-full"
            >
              {/* Rating stars */}
              <div className="flex space-x-1.5 text-gold">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg sm:text-2xl font-light text-primary dark:text-white italic leading-relaxed">
                "{reviews[activeIndex].quote}"
              </blockquote>

              {/* Reviewer Details */}
              <div className="flex items-center space-x-4">
                <img
                  src={reviews[activeIndex].img}
                  alt={reviews[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold shadow-md"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-primary dark:text-white">
                    {reviews[activeIndex].name}
                  </h4>
                  <p className="text-xs text-text-light dark:text-white/55">
                    {reviews[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-12 flex space-x-3 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-background-light dark:bg-slate-700 hover:bg-gold hover:text-white dark:hover:bg-gold dark:text-white transition-all duration-300 shadow-md border border-primary/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-background-light dark:bg-slate-700 hover:bg-gold hover:text-white dark:hover:bg-gold dark:text-white transition-all duration-300 shadow-md border border-primary/5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
