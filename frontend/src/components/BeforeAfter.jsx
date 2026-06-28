import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const beforeImage = 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80';
  const afterImage = 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80';

  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current || containerWidth === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-[#F1EFEA] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Transformations</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-primary dark:text-white">
            Before & After
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-4" />
          <p className="text-xs text-text-light dark:text-white/40 mt-4">
            Drag the gold handle slider to see the architectural reconstruction.
          </p>
        </div>

        {/* Slider Box */}
        <div 
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 select-none cursor-ew-resize"
        >
          {/* AFTER IMAGE (Underlay) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={afterImage} 
              alt="Luxury After" 
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Label After */}
            <span className="absolute bottom-6 right-6 z-20 bg-primary/80 dark:bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 flex items-center gap-1 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-gold" /> Luxe Finished
            </span>
          </div>

          {/* BEFORE IMAGE (Overlay clipped) */}
          <div 
            style={{ width: `${sliderPosition}%` }}
            className="absolute inset-y-0 left-0 overflow-hidden z-10 pointer-events-none"
          >
            <img 
              src={beforeImage} 
              alt="Raw Before" 
              style={{ width: containerWidth }}
              className="absolute top-0 left-0 h-full max-w-none object-cover pointer-events-none"
            />
            {/* Label Before */}
            <span className="absolute bottom-6 left-6 z-20 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 shadow-md">
              Under Construction
            </span>
          </div>

          {/* SLIDER BAR / HANDLE */}
          <div 
            style={{ left: `${sliderPosition}%` }}
            className="absolute inset-y-0 w-1 bg-gold z-20 pointer-events-none shadow-lg"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white flex items-center justify-center shadow-xl cursor-ew-resize border-2 border-white pointer-events-auto transition-colors">
              <ChevronsLeftRight className="w-5 h-5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
