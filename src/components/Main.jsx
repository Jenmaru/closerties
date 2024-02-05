import React from 'react';
import { Player } from 'video-react';
import trailer from '../useless/Trailer.mp4';
import poster from '../useless/screenshots/7.png';

const Gallery = () => (
  <div
    className="container shadow-sm bg-transparent"
    style={{ width: '100', heigth: '100', marginTop: '1rem' }}
  >
    <Player
      playsInline
      poster={poster}
      src={trailer}
    />
  </div>
);

export default Gallery;
