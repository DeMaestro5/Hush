import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Main from '../components/layout/Main';

export default function page() {
  return (
    <main className='flex min-h-screen bg-gray-800'>
      <Sidebar />
      <Main />
    </main>
  );
}
