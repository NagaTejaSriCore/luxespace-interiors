import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, DollarSign, Calendar, Compass, Layers, PhoneCall } from 'lucide-react';

export default function Portfolio({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Villa', 'Restaurant'];

  const projects = [
    {
      id: 1,
      title: 'The Grand Zenith Villa',
      category: 'Villa',
      location: 'Beverly Hills, CA',
      style: 'Modern Luxury',
      budget: '$320,000',
      timeline: '5 Months',
      materials: 'Calacatta Marble, Brushed Brass, White Oak, Silk Drapery',
      desc: 'A full-scale villa redesign focusing on double-height ceilings, floor-to-ceiling glass connections, and integrated smart ambient lighting tracks.',
      img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Nordic Calm Living Space',
      category: 'Living Room',
      location: 'Seattle, WA',
      style: 'Japandi Minimalist',
      budget: '$45,000',
      timeline: '6 Weeks',
      materials: 'Bleached Ash Wood, Bouclé Fabric, Linen curtains, Textured Plaster',
      desc: 'Created an airy, warm living environment highlighting natural light, low-slung oak furniture, and clutter-free hidden storage panels.',
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Elysian Suite Sanctuary',
      category: 'Bedroom',
      location: 'Manhattan, NY',
      style: 'Minimalist Elegant',
      budget: '$60,000',
      timeline: '7 Weeks',
      materials: 'Suede Panels, Warm LED strip lights, Velvet Bedding, Brass Sconces',
      desc: 'Designed as a serene high-rise oasis. Features custom sound-absorbing wall panelings, smart automated blackout shades, and custom built-in closets.',
      img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Urban Loft Workspace',
      category: 'Office',
      location: 'Chicago, IL',
      style: 'Modern Industrial',
      budget: '$75,000',
      timeline: '8 Weeks',
      materials: 'Polished Concrete, Black Steel frames, Walnut Desks, Leather chairs',
      desc: 'An inspiring creative agency office featuring modular workspaces, open-ceiling cable layouts, and soundproof glass meeting rooms.',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'The Emerald Bistro',
      category: 'Restaurant',
      location: 'Soho, London',
      style: 'Art Deco Luxury',
      budget: '$150,000',
      timeline: '3 Months',
      materials: 'Emerald Velvet, Ribbed glass, Gold leafing, Terrazzo flooring',
      desc: 'A premium restaurant fit-out designed to maximize dining capacity while maintaining a moody, intimate dining layout with statement coves.',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Metropolitan Culinary Kitchen',
      category: 'Kitchen',
      location: 'Boston, MA',
      style: 'Contemporary Luxury',
      budget: '$90,000',
      timeline: '10 Weeks',
      materials: 'Quartzite Countertops, Dark stained Oak cabinetry, Smart brass fixtures',
      desc: 'A state-of-the-art chef\'s kitchen integrating hidden walk-in pantry, marble backsplash slabs, and multi-functional center breakfast island.',
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Masterpieces</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Our Portfolio
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-primary/70 dark:text-white/60 border border-primary/5 hover:border-gold/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg border border-primary/5 bg-white dark:bg-slate-800"
              >
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white/95 dark:bg-slate-900/95 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-gold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View details
                    </div>
                  </div>
                </div>

                {/* Short Specs Footer */}
                <div className="p-6">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-text-light dark:text-white/60 gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                className="relative w-full max-w-3xl bg-background-light dark:bg-background-dark rounded-3xl shadow-2xl overflow-hidden z-10 border border-primary/5 dark:border-white/5 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white z-20 transition-colors"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Image */}
                <div className="h-72 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-10" />
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-xs uppercase font-bold tracking-widest text-gold bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary dark:text-white mt-3">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-8 space-y-6">
                  {/* Grid Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-primary/5 shadow-sm">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold" /> Location
                      </div>
                      <div className="text-xs font-bold text-primary dark:text-white">{selectedProject.location}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                        <Compass className="w-3 h-3 text-gold" /> Style
                      </div>
                      <div className="text-xs font-bold text-primary dark:text-white">{selectedProject.style}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-gold" /> Budget
                      </div>
                      <div className="text-xs font-bold text-primary dark:text-white">{selectedProject.budget}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gold" /> Timeline
                      </div>
                      <div className="text-xs font-bold text-primary dark:text-white">{selectedProject.timeline}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-primary dark:text-white">Project Description</h4>
                    <p className="text-sm text-text-light dark:text-white/60 leading-relaxed font-light">
                      {selectedProject.desc}
                    </p>
                  </div>

                  {/* Materials Tag */}
                  <div className="space-y-2">
                    <h4 className="font-serif text-sm font-bold text-primary dark:text-white flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-gold" /> Premium Material Palette
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProject.materials.split(', ').map((mat) => (
                        <span
                          key={mat}
                          className="bg-gold/5 dark:bg-gold/10 border border-gold/10 text-gold-dark dark:text-gold-light px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking Trigger Footer */}
                  <div className="border-t border-primary/5 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-text-light dark:text-white/40 text-center sm:text-left">
                      Like this layout style? Book a design team review call to adapt it to your space.
                    </div>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenConsultation();
                      }}
                      className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <PhoneCall className="w-4 h-4" /> Consult on similar design
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
