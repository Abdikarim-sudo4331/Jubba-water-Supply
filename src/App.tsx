import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <TrustBadges />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;