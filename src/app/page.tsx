import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Main from '../components/layout/Main';

export default function page() {
  return (
    <main className='flex h-screen bg-gray-800 overflow-hidden'>
      <Sidebar />
      <Main />
    </main>
  );
}
