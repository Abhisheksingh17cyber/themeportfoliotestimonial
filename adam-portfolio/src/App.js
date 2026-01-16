import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import SkillsChart from './components/SkillsChart/SkillsChart';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import CodeEditor from './components/CodeEditor/CodeEditor';
import WorkStation from './components/WorkStation/WorkStation';
import ParallaxSection from './components/ParallaxSection/ParallaxSection';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="App">
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" setLoading={setLoading} />
          ) : (
            <>
              <Navbar />
              <main>
                <Hero />
                <About />
                <Services />
                <SkillsChart />
                <Skills />
                <WorkStation />
                <Experience />
                <CodeEditor />
                <Projects />
                <ParallaxSection />
                <Testimonials />
                <CTA />
                <Contact />
              </main>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
