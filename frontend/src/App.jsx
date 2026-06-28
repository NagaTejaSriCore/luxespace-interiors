import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import DesignStyles from './components/DesignStyles';
import RoomPlanner from './components/RoomPlanner';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text dark:text-text-dark transition-colors duration-300 antialiased selection:bg-gold/20 selection:text-gold-dark">
        {/* Navigation Bar */}
        <Navbar onOpenConsultation={openConsultation} />

        {/* Hero Section & Booking Modal */}
        <Hero isModalOpen={isConsultationOpen} setIsModalOpen={setIsConsultationOpen} />

        {/* Elite Services Grid */}
        <Services />

        {/* Masonry Project Gallery */}
        <Portfolio onOpenConsultation={openConsultation} />

        {/* Before & After Interactive Slider */}
        <BeforeAfter />

        {/* Design Styles Showcase */}
        <DesignStyles />

        {/* Interactive Room Planner Simulator */}
        <RoomPlanner onOpenConsultation={openConsultation} />

        {/* About Company narrative & Viewport Counter Stats */}
        <About />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* FAQ Accordion block */}
        <FAQ />

        {/* Contact Coordinates, Hours, Map, Form, WhatsApp */}
        <Contact />

        {/* Luxury Sitemap Footer */}
        <Footer />

        {/* Persistent Floating AI Chatbot Assistant */}
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}
