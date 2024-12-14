import React from 'react';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  title: string;
  items: Array<{
    name: string;
    price: string;
    description: string;
    image: string;
  }>;
  className?: string;
}

export default function MenuSection({ title, items, className }: MenuSectionProps) {
  return (
    <div className="mb-16 bg-gradient-to-br from-[#DC2626] via-[#1A1A1A] to-black p-8 rounded-lg shadow-lg">
      <h3
        className={`text-3xl font-serif font-bold mb-8 text-center text-[#FCD34D] ${className}`}
      >
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
