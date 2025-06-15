import React from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function Card() {
  return (
    <div className='w-[344px] h-[420px] bg-gray-800 rounded-lg overflow-hidden'>
      {/* Image Container */}
      <div className='relative'>
        <Image
          src='/twoman1.jpg'
          alt='Migrating to Linear 101 cover image'
          width={344}
          height={244}
          className='w-full h-[244px] object-cover'
        />
      </div>

      {/* Content Container */}
      <div className='p-4 space-y-3'>
        {/* Title and Arrow */}
        <div className='flex items-start justify-between'>
          <h3 className='text-white text-lg font-semibold leading-tight flex-1 pr-2'>
            Migrating to Linear 101
          </h3>
          <ArrowUpRightIcon className='w-5 h-5 text-gray-400 hover:text-white cursor-pointer flex-shrink-0 mt-0.5' />
        </div>

        {/* Description */}
        <p className='text-gray-400 text-sm leading-relaxed'>
          Linear helps streamline software projects, sprints, tasks, and bug
          tracking. Here's how to get started.
        </p>

        {/* Tags */}
        <div className='flex gap-2'>
          <span className='px-2 py-1 rounded text-xs font-medium bg-green-600 text-white'>
            AI tag A
          </span>
          <span className='px-2 py-1 rounded text-xs font-medium bg-red-600 text-white'>
            AI tag B
          </span>
          <span className='px-2 py-1 rounded text-xs font-medium bg-purple-600 text-white'>
            AI tag C
          </span>
        </div>
      </div>
    </div>
  );
}
