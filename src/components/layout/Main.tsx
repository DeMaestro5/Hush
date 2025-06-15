import React from 'react';
import {
  PauseIcon,
  CogIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import Gamification from '../Gamification';
import Card from '../Card';
import CardGrid from '../CardGrid';

export default function Main() {
  // Create array for the circles to avoid repetition
  const circleCount = 10;
  const circles = Array.from({ length: circleCount }, (_, index) => (
    <div
      key={index}
      className='flex justify-center items-center border-2 border-gray-400 rounded-full bg-gray-500 w-16 h-16 hover:bg-gray-400 cursor-pointer transition-colors'
    >
      <PhotoIcon className='w-8 h-8 text-gray-300' />
    </div>
  ));

  return (
    <div className='w-full h-[948px] bg-gray-900 rounded-tl-4xl mt-2'>
      <div className='w-full p-6 space-y-8'>
        {/* Header Section */}
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-white text-3xl font-semibold mb-2'>
              Welcome back, Olivia
            </h1>
            <p className='text-gray-400 text-sm'>
              Stories of your uploads we think you'll find interesting
            </p>
          </div>

          <div className='flex items-center gap-3'>
            {/* Action Buttons */}
            <div className='flex gap-2'>
              <button className='flex w-9 h-9 border border-gray-600 rounded-lg justify-center items-center bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors'>
                <PauseIcon className='w-5 h-5 text-gray-300' />
              </button>
              <button className='flex w-9 h-9 border border-gray-600 rounded-lg justify-center items-center bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors'>
                <CogIcon className='w-5 h-5 text-gray-300' />
              </button>
            </div>

            {/* Search Bar */}
            <div className='w-80 h-10 border border-gray-600 rounded-lg bg-gray-800'>
              <div className='flex items-center h-full px-3'>
                <MagnifyingGlassIcon className='w-5 h-5 text-gray-400 mr-3 flex-shrink-0' />
                <input
                  type='text'
                  className='flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm'
                  placeholder='Start talking to your AI persona'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Circles Section */}
        <div className='flex gap-6 items-center'>{circles}</div>
        <Gamification />
        <div>
          <h3 className='font-semibold'>Save for later</h3>
          <p className='text-sm text-gray-500'>
            Quickly go through the summary of all your saved online contents
          </p>
        </div>
        <CardGrid />
      </div>
    </div>
  );
}
