import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black rounded-t-3xl text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Rojjo's</h3>
            <p className="text-gray-400">
              Experience the perfect blend of flavors and ambiance at Kolkata's finest dining destination.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-yellow-500">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-500">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>221/B Bakshi Street</li>
              <li>Kolkata-700032, West Bengal, India</li>
              <li>+91 98765 43210</li>
              <li>booking@rojjos.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rojjo's. All rights reserved. | Crafted by <a href="https://github.com/Thorfinn05"
            target="_blank">Rudranil Das</a></p>
        </div>
      </div>
    </footer>
  );
}