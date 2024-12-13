import React from 'react';
import { COLORS } from '../utils/constants';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-t-[${COLORS.accent}] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-[${COLORS.primary}] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
        </div>
        <h2 className="mt-4 text-2xl font-serif text-white">Rojjo's</h2>
        <p className="text-[${COLORS.accent}]">Loading culinary excellence...</p>
      </div>
    </div>
  );
}