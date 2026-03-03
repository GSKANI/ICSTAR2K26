import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import InfoSection from './components/InfoSection';
import Registration from './components/Registration';
import Documents from './components/Documents';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <InfoSection />
      <Registration />
      <Documents />
      <Footer />
    </div>
  );
}

export default App;
