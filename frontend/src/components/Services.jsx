import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sofa, Bed, ChefHat, Briefcase, Utensils, Crown, 
  Lightbulb, Layers, Grid, Palette, Paintbrush, Ruler 
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: Sofa,
      title: 'Living Room Design',
      desc: 'Creating inviting focal points, warm layouts, and luxury comfort seating arrangements.'
    },
    {
      icon: Bed,
      title: 'Serene Bedrooms',
      desc: 'Sanctuary rooms crafted with high-end fabrics, custom headboards, and soothing tones.'
    },
    {
      icon: ChefHat,
      title: 'Gourmet Kitchens',
      desc: 'Seamless kitchen triangles, quartz counters, and smart built-in appliances.'
    },
    {
      icon: Briefcase,
      title: 'Executive Offices',
      desc: 'Ergonomic layouts meeting high productivity, custom wood tables, and media walls.'
    },
    {
      icon: Utensils,
      title: 'Restaurant Concepts',
      desc: 'Atmospheric dining halls designed for guest experience, lighting, and cozy partitions.'
    },
    {
      icon: Crown,
      title: 'Luxury Villa Styling',
      desc: 'Grand staircases, double-height ceilings, marble floorings, and landscape transitions.'
    },
    {
      icon: Lightbulb,
      title: 'Layered Lighting',
      desc: 'Custom fixtures, accent ceiling tracks, under-cabinet strips, and smart automation.'
    },
    {
      icon: Layers,
      title: 'Bespoke Furniture',
      desc: 'Individually tailored sofas, marble coffee tables, and premium leather seating.'
    },
    {
      icon: Grid,
      title: 'False Ceiling Layouts',
      desc: 'Gypsum board ceilings with cove lighting, wooden rafters, and hidden HVAC vents.'
    },
    {
      icon: Palette,
      title: '3D Design Rendering',
      desc: 'High-definition photo-realistic walkthroughs and floor layouts before execution.'
    },
    {
      icon: Paintbrush,
      title: 'Complete Renovation',
      desc: 'End-to-end refurbishment, stripping old layouts, tiling, and fresh custom styling.'
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      desc: 'Optimizing wall layouts to double flow efficiency, natural light, and storage volume.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F1EFEA] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Custom Solutions</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Our Elite Services
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-primary/5 dark:border-white/5 shadow-md flex flex-col justify-between hover-premium group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-light dark:text-white/60 leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-semibold text-gold cursor-pointer group-hover:underline">
                  Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
