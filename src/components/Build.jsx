/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../logo.png';
import qr from '../qr.png';

const Build = () => (
  <div className="d-flex container col-12 col-md-1" style={{ width: '800px', marginTop: '10rem' }}>
    <a href="https://disk.yandex.ru/i/gi72i3iHleq-3g">
      <img src={logo} alt="download" />
    </a>
    <div className="d-flex container align-items-center col-12 col-md-3">
      <img src={qr} alt="qr" />
    </div>
  </div>
);

export default Build;
