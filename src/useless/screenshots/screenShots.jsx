import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import f1 from './1.png';
import f2 from './2.jpg';
import f3 from './3.jpg';
import f4 from './4.jpg';
import f5 from './5.jpg';
import f6 from './6.png';
import f7 from './7.png';

const CarouselItem = ({ index, handleSelect }) => {
  const screen = [f1, f2, f3, f4, f5, f6, f7];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {screen.map((el) => (<Carousel.Item key={el}><img src={el} key={el} alt="" className="container-fluid mx-auto" /></Carousel.Item>))}
    </Carousel>
  );
};

export default CarouselItem;
