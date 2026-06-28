import React from 'react';
import { motion } from 'framer-motion';

export default function DesignStyles() {
  const stylesList = [
    {
      title: 'Modern Elegance',
      subtitle: 'Sleek lines & neutral palettes',
      desc: 'Emphasizes clean geometric shapes, open-plan spaces, and a balanced mix of wood, metal, and glass.',
      colors: ['Charcoal', 'Warm White', 'Satin Brass'],
      img: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Warm Minimalist',
      subtitle: 'Simplicity & functional ease',
      desc: 'Focuses on the essence of comfort. Strip away visual noise, keeping only highly useful, artistic elements.',
      colors: ['Alabaster', 'Taupe', 'Warm Oak'],
      img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Art Deco Luxury',
      subtitle: 'Opulence & bold detailing',
      desc: 'Incorporates rich velvet upholstery, book-matched marble cladding, and geometric gold metal frames.',
      colors: ['Emerald Green', 'Deep Navy', 'Polished Gold'],
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Modern Industrial',
      subtitle: 'Raw textures & metal framing',
      desc: 'Blends exposed bricks, steel framing structure, polished concrete floorings, and soft distressed leather cushions.',
      colors: ['Matte Black', 'Rust Iron', 'Distressed Grey'],
      img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Scandinavian Cozy',
      subtitle: 'Hygee comfort & bright woods',
      desc: 'Features light-toned ash woods, chunky wool rugs, natural ventilation, and organic curved sofas.',
      colors: ['Soft Cream', 'Sage Green', 'White Ash'],
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Zen Japandi',
      subtitle: 'East meets West harmony',
      desc: 'The perfect merger of Japanese minimalism and Scandinavian warmth. Low height beds, paper lamps, and bamboo fibers.',
      colors: ['Charcoal Slate', 'Wheat Straw', 'Sand beige'],
      img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Bohemian Chic',
      subtitle: 'Eclectic colors & plant life',
      desc: 'A spirited space with layers of woven rattan furniture, Persian rugs, hanging macramé, and abundant green plants.',
      colors: ['Terracotta', 'Mustard Gold', 'Olive Sage'],
      img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Neoclassic Traditional',
      subtitle: 'Timeless crown moldings',
      desc: 'Symmetrical room layouts, decorative ceiling cornices, wingback armchairs, and fine dark walnut dining sets.',
      colors: ['Warm Ivory', 'Crimson Velvet', 'Walnut Brown'],
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="styles" className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Inspirations</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Curated Design Styles
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
        </div>

        {/* Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stylesList.map((style, i) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative h-96 overflow-hidden rounded-3xl shadow-lg border border-primary/5 bg-white dark:bg-slate-800"
            >
              {/* Image background */}
              <img
                src={style.img}
                alt={style.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Text gradient fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent dark:from-black/95 dark:via-black/40 z-10" />

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end h-full text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1">
                  {style.subtitle}
                </span>
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-gold-light transition-colors">
                  {style.title}
                </h3>
                
                {/* Expand on hover */}
                <p className="text-xs text-white/70 leading-relaxed font-light h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out mt-1">
                  {style.desc}
                </p>

                {/* Color Palette Pill Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {style.colors.map(col => (
                    <span 
                      key={col}
                      className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 px-2.5 py-0.5 rounded-full text-[9px] font-medium tracking-wide uppercase"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
