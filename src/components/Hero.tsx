import React from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1601050690597-df0568f70950"
          alt="Bengali cuisine"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <p className="text-amber-300 font-serif text-xl mb-4">Welcome to Rojjo's</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Experience Authentic<br />Bengali Cuisine
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Embark on a culinary journey through the rich flavors of Bengal. 
            Our restaurant brings you the finest traditional dishes with a modern twist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              Explore Menu
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-red-600 transition-colors"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}