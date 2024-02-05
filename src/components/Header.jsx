/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ButtonsLink from './Buttons.jsx';
import logo from '../logo.png';

const HeaderComponent = () => (
  <nav className="navbar navbar-expand-lg border-bottom border-dark bg-dark bg-opacity-50" role="navigation">
    <div className="container-fluid p-0 d-flex">
      <img src={logo} width="200" alt="Войти" />
      <div className="container-fluid" id="navbar" aria-expanded="false">
        <ButtonsLink />
      </div>
      <div className="container-fluid p-2 d-flex align-items-end justify-content-end fw-weight-bolder">
        <text className="fs-4 fw-weight-bolder">1PersonStudio</text>
      </div>
    </div>
  </nav>
);

export default HeaderComponent;
