import React from 'react';
import { COLORS } from '../../utils/constants';

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function MenuItem({ name, price, description, image }: MenuItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 p-6 text-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-serif font-bold">{name}</h3>
            <span className={`font-serif text-${COLORS.accent}`}>{price}</span>
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
