import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Events from './components/Events';
import Reviews from './components/Reviews';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Events />
      <Reviews />
      <About />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;