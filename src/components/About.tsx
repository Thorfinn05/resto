import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-600 font-serif text-2xl mb-4">Our Story</p>
            <h2 className="text-4xl font-serif font-bold mb-6">A New Chapter in Bengali Cuisine</h2>
            <p className="text-gray-600 mb-6">
              Welcome to <span className="text-amber-700 text-semibold">Rojjo's</span>, where we're writing a fresh chapter in the story of Bengali cuisine. 
              As a new establishment, we bring together time-honored recipes and modern culinary expertise 
              to create an exceptional dining experience.
            </p>
            <p className="text-gray-600 mb-8">
              Our chefs, trained in both traditional Bengali cooking methods and contemporary techniques, 
              craft each dish with passion and precision. We source our ingredients from trusted local 
              suppliers, ensuring that every meal reflects the authentic flavors of Bengal while meeting 
              the highest standards of quality.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-serif font-bold text-red-600">50+</p>
                <p className="text-gray-600">Authentic Dishes</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-red-600">20+</p>
                <p className="text-gray-600">Expert Staff</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-red-600">100%</p>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://miro.medium.com/v2/resize:fit:624/0*SjWuyUt7Q6iDjDhc.png"
              alt="Restaurant interior"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-red-600 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}