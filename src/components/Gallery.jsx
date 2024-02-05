import React, { useState } from 'react';
import CarouselItem from '../useless/screenshots/screenShots.jsx';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      className="card container shadow-sm bg-transparent"
      style={{ marginTop: '1rem' }}
    >
      <CarouselItem index={index} handleSelect={handleSelect} />
    </div>
  );
};

export default Gallery;
