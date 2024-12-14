import React from 'react';
import { Star } from 'lucide-react';
import { COLORS } from '../utils/constants';

const REVIEWS = [
  {
    name: "Aitijhya Roy",
    rating: 5,
    comment: "The most authentic Bengali cuisine I've had in Kolkata. The Kosha Mangsho and Phirni was perfect! The Kacha Aamer Chutney made me feel like I'm eating in my home. Loved it!",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHVGzsRpbdTWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725171022287?e=1739404800&v=beta&t=oHb43A1eohFYHh1W8DNge_uOT2X7WFOdtbQIbLboUvU"
  },
  {
    name: "Mitali Das",
    rating: 4,
    comment: "Incredible ambiance and the Ilish preparation took me back to my grandmother's kitchen.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgIak8b3ax3PzAo-PYwOVeuiSPcQmSB7gZw&s"
  },
  {
    name: "Rajdeep Chatterjee",
    rating: 5,
    comment: "Their Mishti Doi and Nolen Gurer desserts are heavenly. A must-visit for Bengali food lovers!",
    image: "data:image/jpeg;base64,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"
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