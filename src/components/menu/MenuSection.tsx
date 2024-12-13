import React from 'react';
import MenuItem from './MenuItem';
import { COLORS } from '../../utils/constants';

interface MenuSectionProps {
  title: string;
  items: Array<{
    name: string;
    price: string;
    description: string;
    image: string;
  }>;
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-serif font-bold text-[${COLORS.accent}] mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}