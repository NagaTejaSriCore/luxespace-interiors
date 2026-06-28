import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What is your typical interior design process?',
      a: 'We work in 4 phases: (1) Discovery Call & Site Assessment, where we align on scope and style; (2) Concept Planning & 3D Renderings, to visualize floorplans and materials; (3) Curation & Sourcing, where we select furniture and fabrics; and (4) Execution & Turnkey handover, where our engineering experts handle everything on-site.'
    },
    {
      q: 'How do you charge for your design services?',
      a: 'We offer flexible packages depending on your needs. For full layouts, we charge a design consultancy fee per square foot, or a fixed-tier package. For turnkey projects where we manage both design and contracting, the fees are integrated into the total material procurement and labor quotes.'
    },
    {
      q: 'Do you provide end-to-end turnkey execution?',
      a: 'Yes, we are a full-service design-and-build firm. We do not just hand over drawings; we have our own in-house carpentry workshops, electrical contractors, false ceiling technicians, and painters to ensure that what we render is exactly what gets built.'
    },
    {
      q: 'Can I request specific premium brands or import materials?',
      a: 'Absolutely. We have established accounts with top Italian, Scandinavian, and local custom furniture brands. We regularly import premium stone (like Carrara marble), custom cabinetry fittings, and luxury designer lighting based on project requirements.'
    },
    {
      q: 'What is the average timeline for a residential project?',
      a: 'A single room (like a kitchen or living room) typically takes 4 to 6 weeks. A complete apartment design and fit-out ranges from 8 to 12 weeks, while large-scale luxury villas require 4 to 6 months depending on structural custom works.'
    },
    {
      q: 'How does the AI Designer chatbot help me?',
      a: 'Our AI Designer chatbot is trained to answer immediate styling questions, recommend furniture layouts, suggest color codes, and estimate material costs. It helps you clarify your thoughts before booking a formal call with our expert team.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F1EFEA] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Questions</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Frequently Asked
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-primary/5 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-primary dark:text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 text-sm text-text-light dark:text-white/60 leading-relaxed font-light border-t border-primary/5 dark:border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
