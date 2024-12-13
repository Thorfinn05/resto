import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed w-full bg-black/90 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-serif font-bold">Rojjo's</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => handleNavClick('home')} className="hover:text-yellow-500 transition-colors">Home</button>
              <button onClick={() => handleNavClick('menu')} className="hover:text-yellow-500 transition-colors">Menu</button>
              <button onClick={() => handleNavClick('events')} className="hover:text-yellow-500 transition-colors">Events</button>
              <button onClick={() => handleNavClick('reviews')} className="hover:text-yellow-500 transition-colors">Reviews</button>
              <button onClick={() => handleNavClick('about')} className="hover:text-yellow-500 transition-colors">About Us</button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-yellow-500 transition-colors">Contact Us</button>
              <button 
                onClick={() => handleNavClick('booking')} 
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <Phone size={18} />
                <span>Book a Table</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left px-3 py-2 hover:text-yellow-500">Home</button>
            <button onClick={() => handleNavClick('menu')} className="block w-full text-left px-3 py-2 hover:text-yellow-500">Menu</button>
            <button onClick={() => handleNavClick('events')} className="block w-full text-left px-3 py-2 hover:text-yellow-500">Events</button>
            <button onClick={() => handleNavClick('reviews')} className="block w-full text-left px-3 py-2 hover:text-yellow-500">Reviews</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left px-3 py-2 hover:text-yellow-500">About Us</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-3 py-2 hover:text-yellow-500">Contact Us</button>
            <button onClick={() => handleNavClick('booking')} className="block w-full text-left px-3 py-2 text-red-500">Book a Table</button>
          </div>
        </div>
      )}
    </nav>
  );
}