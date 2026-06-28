import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Sofa, Bed, ChefHat, Briefcase, Bath, 
  Ruler, Palette, Layout, DollarSign, Lightbulb, Hammer 
} from 'lucide-react';

export default function RoomPlanner({ onOpenConsultation }) {
  const [loading, setLoading] = useState(false);
  const [planGenerated, setPlanGenerated] = useState(false);
  const [inputs, setInputs] = useState({
    roomType: 'Living Room',
    length: 16,
    width: 12,
    budget: 'Mid/Premium',
    style: 'Japandi',
    colorTheme: 'Earthy Warm (Beige, Terracotta, Soft Sage)',
    lighting: 'Cozy Warm (Recessed coves + statement pendant)',
    furniture: 'Low-slung modular sofa and walnut shelving'
  });

  const [generatedData, setGeneratedData] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    setLoading(true);
    setPlanGenerated(false);

    // Simulate luxury calculation delay
    setTimeout(() => {
      // Calculate room specs
      const area = inputs.length * inputs.width;
      let costMultiplier = 1;
      let currencyPrefix = '$';
      if (inputs.budget === 'Low/Economy') costMultiplier = 0.5;
      if (inputs.budget === 'High/Luxury') costMultiplier = 2.2;

      const baseCost = area * 85 * costMultiplier;

      // Construct dynamic plan recommendations based on input
      const items = [
        { name: 'Custom Flooring & Rug', cost: Math.floor(area * 12 * costMultiplier) },
        { name: 'Core Furniture Set', cost: Math.floor(baseCost * 0.4) },
        { name: 'Layered Smart Lighting', cost: Math.floor(baseCost * 0.15) },
        { name: 'Wall Finishes & Custom Paint', cost: Math.floor(baseCost * 0.12) },
        { name: 'Styling, Curtains & Decor', cost: Math.floor(baseCost * 0.13) },
      ];
      
      const totalCost = items.reduce((sum, item) => sum + item.cost, 0);

      setGeneratedData({
        area,
        totalCost,
        items,
        advice: getPlannerAdvice(inputs.roomType, inputs.style, inputs.colorTheme, inputs.lighting),
        floorPlanLayout: getFloorPlanLayout(inputs.roomType)
      });

      setLoading(false);
      setPlanGenerated(true);
    }, 1800);
  };

  const getPlannerAdvice = (room, style, colors, lighting) => {
    return `For a ${inputs.length}x${inputs.width} ft ${room} in the ${style} aesthetic, balance is key. We suggest using a primary backdrop in ${colors}. Layer this with ${lighting} to create visual height. Keep circulation pathways clear—specifically, allow at least 3 feet of space between core furniture elements. Place your statement piece (the ${inputs.furniture}) on the longest wall to serve as the rooms design anchor.`;
  };

  const getFloorPlanLayout = (room) => {
    switch(room) {
      case 'Living Room':
        return [
          { name: 'Window Area', grid: 'col-span-3 row-span-1 bg-sky-200/40 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300' },
          { name: 'Focal TV Console', grid: 'col-span-1 row-span-2 bg-neutral-200 dark:bg-slate-700' },
          { name: 'L-Shaped Sofa', grid: 'col-span-2 row-span-2 bg-gold/10 dark:bg-gold/20 text-gold-dark dark:text-gold-light border-2 border-gold/45' },
          { name: 'Plush Rug Area', grid: 'col-span-3 row-span-2 bg-neutral-100 dark:bg-slate-800/80 border border-dashed border-primary/20' },
          { name: 'Entrance/Doorway', grid: 'col-span-1 row-span-1 bg-amber-100 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300' },
        ];
      case 'Bedroom':
        return [
          { name: 'Large Window', grid: 'col-span-3 row-span-1 bg-sky-200/40 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300' },
          { name: 'King/Queen Bed', grid: 'col-span-2 row-span-2 bg-gold/10 dark:bg-gold/20 text-gold-dark dark:text-gold-light border-2 border-gold/45' },
          { name: 'Bedside Sconces', grid: 'col-span-1 row-span-1 bg-neutral-100 dark:bg-slate-700' },
          { name: 'Built-in Wardrobe', grid: 'col-span-1 row-span-3 bg-neutral-200 dark:bg-slate-800' },
          { name: 'Entrance Door', grid: 'col-span-2 row-span-1 bg-amber-100 dark:bg-amber-950/20' },
        ];
      default:
        return [
          { name: 'Utility Counter', grid: 'col-span-2 row-span-2 bg-neutral-200 dark:bg-slate-800' },
          { name: 'Dining Table / Desk', grid: 'col-span-2 row-span-2 bg-gold/10 dark:bg-gold/20 border-2 border-gold/45 text-gold' },
          { name: 'Storage / Pantry', grid: 'col-span-1 row-span-3 bg-neutral-100 dark:bg-slate-700' },
          { name: 'Window Slits', grid: 'col-span-3 row-span-1 bg-sky-200/40' },
        ];
    }
  };

  return (
    <section id="planner" className="py-24 bg-background-light dark:bg-background-dark/95 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Space Simulator</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Interactive Room Planner
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Planner Form */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-primary/5 shadow-md">
            <h3 className="font-serif text-xl font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
              <Layout className="w-5 h-5 text-gold" /> Step-by-Step Settings
            </h3>
            
            <form onSubmit={handleGenerate} className="space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40">Room Type</label>
                  <select
                    value={inputs.roomType}
                    onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
                    className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-primary dark:text-white focus:outline-none focus:border-gold"
                  >
                    <option>Living Room</option>
                    <option>Bedroom</option>
                    <option>Kitchen</option>
                    <option>Office</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40">Design Style</label>
                  <select
                    value={inputs.style}
                    onChange={(e) => setInputs({ ...inputs, style: e.target.value })}
                    className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-primary dark:text-white focus:outline-none focus:border-gold"
                  >
                    <option>Japandi</option>
                    <option>Modern</option>
                    <option>Minimalist</option>
                    <option>Scandinavian</option>
                    <option>Industrial</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-gold" /> Length (ft)
                  </label>
                  <input
                    type="number"
                    min="6"
                    max="50"
                    value={inputs.length}
                    onChange={(e) => setInputs({ ...inputs, length: parseInt(e.target.value) || 10 })}
                    className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-primary dark:text-white focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-gold" /> Width (ft)
                  </label>
                  <input
                    type="number"
                    min="6"
                    max="50"
                    value={inputs.width}
                    onChange={(e) => setInputs({ ...inputs, width: parseInt(e.target.value) || 10 })}
                    className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-primary dark:text-white focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 col-span-1">
                  <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-gold" /> Budget Tier
                  </label>
                  <select
                    value={inputs.budget}
                    onChange={(e) => setInputs({ ...inputs, budget: e.target.value })}
                    className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-primary dark:text-white focus:outline-none focus:border-gold"
                  >
                    <option>Low/Economy</option>
                    <option>Mid/Premium</option>
                    <option>High/Luxury</option>
                  </select>
                </div>
                
                <div className="space-y-1 col-span-1">
                  <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                    <Palette className="w-3 h-3 text-gold" /> Colors
                  </label>
                  <input
                    type="text"
                    value={inputs.colorTheme}
                    onChange={(e) => setInputs({ ...inputs, colorTheme: e.target.value })}
                    className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-primary dark:text-white focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                  <Lightbulb className="w-3 h-3 text-gold" /> Lighting Preference
                </label>
                <input
                  type="text"
                  value={inputs.lighting}
                  onChange={(e) => setInputs({ ...inputs, lighting: e.target.value })}
                  className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-primary dark:text-white focus:outline-none focus:border-gold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-semibold text-text-light dark:text-white/40 flex items-center gap-1">
                  <Hammer className="w-3 h-3 text-gold" /> Furniture Detail
                </label>
                <input
                  type="text"
                  value={inputs.furniture}
                  onChange={(e) => setInputs({ ...inputs, furniture: e.target.value })}
                  className="w-full bg-background-light dark:bg-slate-700 border border-primary/10 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-primary dark:text-white focus:outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-light dark:bg-gold dark:hover:bg-gold-dark text-white text-xs font-semibold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Simulating space layouts...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Generate Design Recommendation
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-7 h-full min-h-[500px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {!planGenerated && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 px-6 border-2 border-dashed border-primary/10 dark:border-white/10 rounded-3xl w-full flex flex-col items-center justify-center"
                >
                  <Layout className="w-12 h-12 text-gold/30 mb-4" />
                  <h4 className="font-serif text-lg font-bold text-primary dark:text-white mb-2">
                    Awaiting Custom Inputs
                  </h4>
                  <p className="text-xs text-text-light dark:text-white/40 max-w-sm">
                    Adjust the room specifications on the left and click Generate to see your 2D furniture floor plan mockup and cost calculations.
                  </p>
                </motion.div>
              )}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 w-full flex flex-col items-center justify-center"
                >
                  <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-gold/10 rounded-full" />
                    <div className="absolute inset-0 border-4 border-gold border-t-transparent rounded-full animate-spin" />
                    <Sparkles className="w-8 h-8 text-gold animate-pulse" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-primary dark:text-white animate-pulse">
                    Computing Dimensions...
                  </h4>
                  <p className="text-xs text-text-light dark:text-white/40 mt-2">
                    Drafting CAD mock grid & calculating material pricing sheets.
                  </p>
                </motion.div>
              )}

              {planGenerated && generatedData && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full bg-white dark:bg-slate-800 p-8 rounded-3xl border border-primary/5 shadow-lg space-y-8"
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-primary/5 dark:border-white/5 pb-4 gap-2">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-primary dark:text-white flex items-center gap-1.5">
                        {inputs.roomType} Custom Plan
                      </h4>
                      <p className="text-[10px] text-text-light dark:text-white/40 uppercase tracking-widest font-semibold mt-1">
                        Dimensions: {inputs.length}x{inputs.width} ft ({generatedData.area} sq.ft) • {inputs.style} Style
                      </p>
                    </div>
                    <div className="bg-gold/10 text-gold-dark dark:text-gold-light px-4 py-2 rounded-xl text-center">
                      <span className="text-[9px] uppercase font-bold tracking-wider block">Estimated Total</span>
                      <span className="font-serif font-bold text-lg">${generatedData.totalCost.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* 2D CSS Layout Grid */}
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-primary dark:text-white mb-3">
                      2D Furniture Placement Simulation (Bird's Eye View)
                    </h5>
                    <div className="grid grid-cols-3 gap-3 h-48 border-2 border-primary/10 dark:border-white/10 p-3 rounded-2xl bg-background-light dark:bg-slate-900/60 font-medium text-[9px] uppercase tracking-wider text-center">
                      {generatedData.floorPlanLayout.map((layout, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center justify-center p-2 rounded-lg text-center leading-tight shadow-sm font-semibold transition-colors ${layout.grid}`}
                        >
                          {layout.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Breakdown & Advice */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Costing */}
                    <div className="space-y-3">
                      <h5 className="text-[10px] uppercase font-bold text-primary dark:text-white">Costing Breakdowns</h5>
                      <div className="space-y-2 text-xs">
                        {generatedData.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between border-b border-primary/5 pb-1">
                            <span className="text-text-light dark:text-white/60">{item.name}</span>
                            <span className="font-bold text-primary dark:text-white">${item.cost.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Advisor Comments */}
                    <div className="bg-[#F1EFEA] dark:bg-slate-700/40 p-5 rounded-2xl space-y-2 border border-primary/5">
                      <h5 className="text-[10px] uppercase font-bold text-gold-dark dark:text-gold-light flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-gold" /> Designer Layout Advice
                      </h5>
                      <p className="text-xs text-text-light dark:text-white/70 leading-relaxed font-light">
                        {generatedData.advice}
                      </p>
                    </div>
                  </div>

                  {/* Consultation CTA */}
                  <div className="border-t border-primary/5 pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <p className="text-[10px] text-text-light dark:text-white/40 max-w-sm text-center sm:text-left">
                      Like this initial simulation? Submit this concept block directly to our layout team for a full custom blueprint review.
                    </p>
                    <button
                      onClick={onOpenConsultation}
                      className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-colors"
                    >
                      Book Team Review With Plan
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
