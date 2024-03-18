/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ButtonsLink from './Buttons.jsx';
import logo from '../logo.png';

const HeaderComponent = () => (
  <>
    <nav className="navbar navbar-expand-lg border-bottom border-dark bg-dark bg-opacity-50" role="navigation">
      <div className="container">
        <div className="row" style={{ width: '100%', marginLeft: '0rem' }}>
          <div className="col-lg-3 logo col-md-10 col-sm-11">
            <img src={logo} width="200" alt="Войти" />
          </div>
          <button className="navbar-toggler col-md-2 col-sm-1 butttoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="col-lg-8 d-flex col-sm-12">
            <ButtonsLink nameButton="collapse navbar-collapse" nameId="nothing" />
          </div>
          <div className="col-lg-1 d-flex author col-md-0">
            <text className="collapse navbar-collapse justify-content-end">1PersonStudio</text>
          </div>
        </div>
      </div>
    </nav>
    <section className="collapse navbar-expand-lg border-bottom border-dark bg-dark bg-opacity-50" id="navbarNav" aria-controls="navbarNav">
      <ButtonsLink nameButton="1" nameId="1" />
    </section>
  </>

);

export default HeaderComponent;
