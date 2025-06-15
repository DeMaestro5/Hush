import React from 'react';
import Card from './Card';

export default function CardGrid() {
  return (
    <div className='grid grid-cols-3 w-[1160px] h-[420px]'>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
