import React from 'react';
import { Star } from 'lucide-react';
import { COLORS } from '../utils/constants';

const REVIEWS = [
  {
    name: "Aitijhya Roy",
    rating: 5,
    comment: "The most authentic Bengali cuisine I've had in Kolkata. The Kosha Mangsho and Firni was perfect!",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHVGzsRpbdTWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725171022287?e=1739404800&v=beta&t=oHb43A1eohFYHh1W8DNge_uOT2X7WFOdtbQIbLboUvU"
  },
  {
    name: "Rajdeep Chatterjee",
    rating: 5,
    comment: "Incredible ambiance and the Ilish preparation took me back to my grandmother's kitchen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Mitali Das",
    rating: 5,
    comment: "Their Mishti Doi and Nolen Gurer desserts are heavenly. A must-visit for Bengali food lovers!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-600 font-serif text-2xl mb-4">Guest Reviews</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-red-300 bg-opacity-30 border-2 border-lightText md:border-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-red-600">{review.name}</h4>
                  <div className="flex text-gray-900">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-yellow-900 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}