import React from 'react';
import { motion } from 'framer-motion';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import SolutionsSection from './components/sections/SolutionsSection.jsx';
import AegisSecuritySection from './components/sections/AegisSecuritySection.jsx';
import EntitySection from './components/sections/EntitySection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

// A wrapper component to apply the same animation to all sections
const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.9 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: false, amount: 0.2 }} // animation replays
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AnimatedSection>
          <SolutionsSection />
        </AnimatedSection>
        <AnimatedSection>
          <AegisSecuritySection />
        </AnimatedSection>
        <AnimatedSection>
          <EntitySection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;

