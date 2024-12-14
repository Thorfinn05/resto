import React from 'react';
import MenuSection from './menu/MenuSection';
import { BENGALI_DISHES } from '../utils/menuData';

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#FCD34D] font-serif text-xl mb-4">Our Specialties</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Authentic Bengali Cuisine
          </h2>
        </div>

        <MenuSection
          title="Starters"
          items={BENGALI_DISHES.starters}
          className="text-gray-400"
        />
        <MenuSection
          title="Main Course"
          items={BENGALI_DISHES.mainCourse}
          className="text-gray-400"
        />
        <MenuSection
          title="Desserts"
          items={BENGALI_DISHES.desserts}
          className="text-gray-400"
        />
        <MenuSection
          title="Seasonals/Specials"
          items={BENGALI_DISHES.seasonals}
          className="text-gray-400"
        />
      </div>
    </section>
  );
}
