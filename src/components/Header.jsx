/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ButtonsLink from './Buttons.jsx';
import logo from '../logo.png';

const HeaderComponent = () => (
  <nav className="navbar navbar-expand-lg border-bottom border-dark bg-dark bg-opacity-50" role="navigation">
    <div className="container">
      <div className="col">
        <img src={logo} width="200" alt="Войти" />
      </div>
      <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <ButtonsLink />
      <text className="collapse navbar-collapse col-md-1">1PersonStudio</text>
  </nav>
);

export default HeaderComponent;
