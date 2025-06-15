import React from 'react';
import {
  ClockIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
  MapIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  Cog6ToothIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';
import FreeCredit from '../FreeCredit';

export default function Sidebar() {
  return (
    <div className='flex flex-col w-[280px] h-screen justify-between bg-gray-800 overflow-hidden'>
      {/* Top Section */}
      <div className='flex flex-col'>
        {/* Navigation Header */}
        <div className='p-6 pb-4'>
          <div className='flex items-center gap-3'>
            <div className='flex w-9 h-9 border border-gray-600 rounded-lg items-center justify-center bg-gray-800'>
              <ClockIcon className='w-5 h-5 text-white' />
            </div>
            <div className='flex gap-2'>
              <button className='p-1 hover:bg-gray-800 rounded transition-colors'>
                <ArrowLeftIcon className='w-5 h-5 text-gray-400 hover:text-white' />
              </button>
              <button className='p-1 hover:bg-gray-800 rounded transition-colors'>
                <ArrowRightIcon className='w-5 h-5 text-gray-400 hover:text-white' />
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className='px-6 space-y-1'>
          <div className='flex items-center p-3 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors'>
            <HomeIconSolid className='w-5 h-5 text-white' />
            <span className='text-white ml-3 font-medium text-sm'>Home</span>
          </div>
          <div className='flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors group'>
            <BookOpenIcon className='w-5 h-5 text-gray-400 group-hover:text-white' />
            <span className='text-gray-300 group-hover:text-white ml-3 font-medium text-sm'>
              Library
            </span>
          </div>
          <div className='flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors group'>
            <MapIcon className='w-5 h-5 text-gray-400 group-hover:text-white' />
            <span className='text-gray-300 group-hover:text-white ml-3 font-medium text-sm'>
              Context map
            </span>
          </div>
          <div className='flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors group'>
            <UserIcon className='w-5 h-5 text-gray-400 group-hover:text-white' />
            <span className='text-gray-300 group-hover:text-white ml-3 font-medium text-sm'>
              AI persona
            </span>
          </div>
          <div className='flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors group'>
            <ChatBubbleLeftRightIcon className='w-5 h-5 text-gray-400 group-hover:text-white' />
            <span className='text-gray-300 group-hover:text-white ml-3 font-medium text-sm'>
              Conversations
            </span>
          </div>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className='p-6 pt-4'>
        {/* Support & Settings */}
        <div className='space-y-1 mb-6'>
          <div className='flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors group'>
            <CogIcon className='w-5 h-5 text-gray-400 group-hover:text-white' />
            <span className='text-gray-300 group-hover:text-white ml-3 font-medium text-sm'>
              Support
            </span>
          </div>
          <div className='flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors group'>
            <Cog6ToothIcon className='w-5 h-5 text-gray-400 group-hover:text-white' />
            <span className='text-gray-300 group-hover:text-white ml-3 font-medium text-sm'>
              Settings
            </span>
          </div>
        </div>

        {/* Free Credit Component */}
        <div className='mb-6'>
          <FreeCredit />
        </div>

        {/* Profile Section */}
        <div className='border-t border-gray-700 pt-4'>
          <div className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group'>
            <div className='flex items-center min-w-0'>
              <Image
                src='/twoman1.jpg'
                height={40}
                width={40}
                alt='User Avatar'
                className='rounded-full object-cover flex-shrink-0'
              />
              <div className='ml-3 min-w-0'>
                <h4 className='text-white font-medium text-sm truncate'>
                  Olivia Rhye
                </h4>
                <p className='text-gray-400 text-xs truncate'>
                  olivia@untitled.com
                </p>
              </div>
            </div>
            <ArrowLongRightIcon className='w-5 h-5 text-gray-400 group-hover:text-white flex-shrink-0 ml-2' />
          </div>
        </div>
      </div>
    </div>
  );
}
