/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ButtonsLink from './Buttons.jsx';
import logo from '../logo.png';

const HeaderComponent = () => (
  <nav className="navbar navbar-expand-lg border-bottom border-dark bg-dark bg-opacity-50 mx-auto" role="navigation">
    <div className="container-fluid">
      <img src={logo} width="200" alt="Войти" />
      <div className="d-grid" id="navbar" aria-expanded="false">
        <ButtonsLink />
      </div>
      <text className="align-items-end justify-content-end collapse navbar-collapse">1PersonStudio</text>
    </div>
  </nav>
);

export default HeaderComponent;
