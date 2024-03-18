/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../logo.png';
import qr from '../qr.png';

const classs = 'd-flex justify-content-center align-items-center';

const Build = () => (
  <>
    <div className={classs} style={{ marginTop: '10rem' }}>
      <a href="https://disk.yandex.ru/i/gi72i3iHleq-3g">
        <img src={logo} alt="download" style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div className={classs}>
      <img src={qr} alt="qr" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  </>
);

export default Build;
