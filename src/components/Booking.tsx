import React from 'react';
import ReservationForm from './booking/ReservationForm';

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#DC2626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#FCD34D] font-serif text-xl mb-4">Reservations</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Book Your Royal Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Reserve your table now
            and let us create magical moments for you and your loved ones.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}