import React from 'react';
import { WalletIcon } from '@heroicons/react/24/outline';

export default function Gamification() {
  return (
    <div className='flex items-center w-full h-24 bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors'>
      {/* Icon Container */}
      <div className='flex justify-center items-center w-12 h-12 bg-blue-600 rounded-full mr-4 flex-shrink-0'>
        <WalletIcon className='w-6 h-6 text-white' />
      </div>

      {/* Content */}
      <div className='flex-1'>
        <h3 className='text-white font-semibold text-base mb-1'>
          Gamification
        </h3>
        <p className='text-gray-400 text-sm leading-relaxed'>
          What actions do you want your users to perform?
        </p>
      </div>
    </div>
  );
}
