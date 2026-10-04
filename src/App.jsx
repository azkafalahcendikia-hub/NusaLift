import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FleetSection from './components/FleetSection';
import EquipmentDetailModal from './components/EquipmentDetailModal';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import RentalProcessSection from './components/RentalProcessSection';
import AboutSection from './components/AboutSection';
import ServiceAreasSection from './components/ServiceAreasSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedEquipmentForModal, setSelectedEquipmentForModal] = useState(null);
  const [preselectedEquipmentForQuote, setPreselectedEquipmentForQuote] = useState('');
  const [preselectedLocationForQuote, setPreselectedLocationForQuote] = useState('');

  const scrollToQuote = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFleet = () => {
    const fleetElement = document.getElementById('fleet');
    if (fleetElement) {
      fleetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRentEquipment = (equipmentName) => {
    setPreselectedEquipmentForQuote(equipmentName);
    scrollToQuote();
  };

  const handleSelectLocation = (cityName) => {
    setPreselectedLocationForQuote(cityName);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      {/* 1. Sticky Navbar */}
      <Navbar onQuoteClick={scrollToQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={scrollToFleet}
          onQuoteClick={scrollToQuote}
        />

        {/* 3. Equipment / Fleet Section */}
        <FleetSection
          onSelectDetail={(equipment) => setSelectedEquipmentForModal(equipment)}
          onRentEquipment={handleRentEquipment}
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 5. Rental Process Section */}
        <RentalProcessSection onStartProcess={scrollToQuote} />

        {/* 6. About / Company Section */}
        <AboutSection />

        {/* 7. Service Areas Section */}
        <ServiceAreasSection onSelectLocation={handleSelectLocation} />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Contact / Request Quote Section */}
        <ContactSection
          preselectedEquipment={preselectedEquipmentForQuote}
          preselectedLocation={preselectedLocationForQuote}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Equipment Detail Modal */}
      {selectedEquipmentForModal && (
        <EquipmentDetailModal
          equipment={selectedEquipmentForModal}
          onClose={() => setSelectedEquipmentForModal(null)}
          onRentNow={handleRentEquipment}
        />
      )}
    </div>
  );
}
