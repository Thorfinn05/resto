import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const UPCOMING_EVENTS = [
  // {
  //   title: "Winter Food Festival",
  //   date: "December 20-25, 2024",
  //   time: "12:00 PM - 10:00 PM",
  //   description: "Experience the warmth of Bengali winter delicacies.",
  //   image: "https://pikturenama.com/wp-content/uploads/2019/09/DP-2019-Marriott-Kolkata-2.jpg"
  // },
  {
    title: "Pithe Utsob",
    date: "January 14-16, 2024",
    time: "11:00 AM - 9:00 PM",
    description: "Experience the warmth of Traditional Bengali winter delicacies featuring various types of Pithe, Puli and special Nolen Gurer treats.",
    image: "https://cookwithbisht.com/wp-content/uploads/2024/06/Famous-Bengali-Dudh-Puli-Pitha-Recipe.jpg"
  }
];

const PAST_EVENTS = [
  {
    title: "Bengali New Year Celebration",
    date: "April 14, 2023",
    time: "6:00 PM - 10:00 PM",
    description: "A grand celebration of Pohela Boishakh with traditional Bengali cuisine and cultural performances.",
    image: "https://pikturenama.com/wp-content/uploads/2019/09/DP-2019-Marriott-Kolkata-2.jpg"
  },
  {
    title: "Durga Puja Food Festival",
    date: "October 15-24, 2023",
    time: "11:00 AM - 11:00 PM",
    description: "A celebration of Bengali cuisine during the auspicious days of Durga Puja.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Kolkata_Biryani.jpg/1200px-Kolkata_Biryani.jpg"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-red-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-600 font-serif text-xl mb-4">Cultural Celebrations</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Experience Bengali Traditions
          </h2>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {UPCOMING_EVENTS.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 p-6 text-white">
                    <h4 className="text-2xl font-serif font-bold mb-2">{event.title}</h4>
                    <div className="flex items-center gap-4 text-amber-300">
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="mr-2" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{event.description}</p>
                  <button className="mt-4 text-red-600 font-semibold hover:text-red-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Past Events</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {PAST_EVENTS.map((event, index) => (
              <div key={index} className="bg-white/80 rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-48 overflow-hidden grayscale">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-serif font-bold mb-2">{event.title}</h4>
                  <div className="flex items-center gap-4 text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}