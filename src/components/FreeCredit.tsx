import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function FreeCredit() {
  return (
    <div className='relative w-full bg-gray-800 rounded-lg p-4 border border-gray-700'>
      {/* Close X button */}
      <button className='absolute top-3 right-3 text-gray-400 hover:text-white'>
        <XMarkIcon className='w-4 h-4' />
      </button>

      {/* Progress Circle */}
      <div className='flex justify-start mb-4'>
        <div className='relative w-12 h-12'>
          {/* SVG Progress Circle */}
          <svg className='w-12 h-12 transform -rotate-90' viewBox='0 0 48 48'>
            {/* Background circle */}
            <circle
              cx='24'
              cy='24'
              r='20'
              stroke='#4B5563'
              strokeWidth='3'
              fill='transparent'
            />
            {/* Progress arc */}
            <circle
              cx='24'
              cy='24'
              r='20'
              stroke='white'
              strokeWidth='3'
              fill='transparent'
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - 0.8)}`}
              strokeLinecap='round'
            />
          </svg>
          {/* Center text */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-white font-medium text-xs'>80%</span>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className='mb-4'>
        <h4 className='text-white font-medium text-sm mb-2'>
          Free trial credit
        </h4>
        <p className='text-gray-300 text-xs leading-relaxed'>
          Your team has used 80% of your available credit. Need more?
        </p>
      </div>

      {/* Buttons */}
      <div className='flex gap-3'>
        <button className='text-xs text-gray-400 hover:text-white transition-colors underline'>
          Dismiss
        </button>
        <button className='px-3 py-1.5 text-xs bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors'>
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
