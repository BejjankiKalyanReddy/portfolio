import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Initialize Google Analytics
// REPLACE 'G-XXXXXXXXXX' with your actual Measurement ID
const GA_MEASUREMENT_ID = 'G-5NJ25Q1FBV'; 
ReactGA.initialize(GA_MEASUREMENT_ID);

function App() {
  useEffect(() => {
    // Track page view on mount
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Section Tracking
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id') || 'Hero'; // Default to Hero if no ID (Hero usually doesn't have one in some templates)
          
          // Send event to GA
          ReactGA.event({
            category: 'Section',
            action: 'Viewed',
            label: sectionId,
          });
          
          // Optional: Log to console for verification
          console.log(`GA Event: Viewed ${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all sections to observe
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        {/* Ensure Hero has an ID for tracking if it doesn't already */}
        <div id="hero"> 
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
