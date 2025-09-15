// Frontend/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import SolutionsSection from './components/sections/SolutionsSection.jsx';
import AegisSecuritySection from './components/sections/AegisSecuritySection.jsx';
import EntitySection from './components/sections/EntitySection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.9 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Create a component for the home page content
const HomePage = () => (
  <>
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
  </>
);

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;