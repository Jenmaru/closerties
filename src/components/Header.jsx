/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ButtonsLink from './Buttons.jsx';
import logo from '../logo.png';

const HeaderComponent = () => (
  <nav className="navbar navbar-expand-lg border-bottom border-dark bg-dark bg-opacity-50" role="navigation">
    <div className="container">
      <div className="d-flex justify-content-between align-items-start">
        <img src={logo} width="200" alt="Войти" />
      </div>
      <div className="d-flex justify-content-between">
        <ButtonsLink />
      </div>
      <div className="d-flex justify-content-between">
        <text className="collapse navbar-collapse">1PersonStudio</text>
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>
);

export default HeaderComponent;
