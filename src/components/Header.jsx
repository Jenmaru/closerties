/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import ButtonsLink from './Buttons.jsx';
import UseResize from './use-resize.jsx';
import logo from '../logo.png';

const HeaderComponent = () => {
  const [value, setValue] = useState(false);
  const [name, setName] = useState('');
  const { width } = UseResize();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setValue(Number(width) <= 991 ? value : false);
    const showNav = cn('collapse navbar-expand-lg border-bottom border-dark bg-dark bg-opacity-50', `${value === false ? '' : 'show'}`);
    setName(showNav);
    console.log(width);
  }, [value, width]);

  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom border-dark bg-dark bg-opacity-50" role="navigation">
        <div className="container">
          <div className="row w-100 ms-1">
            <div className="col-lg-3 logo col-md-10 col-sm-11">
              <img src={logo} width="200" alt="Войти" />
            </div>
            <button onClick={(e) => setValue(e.target.value)} className="navbar-toggler col-md-2 col-sm-1 butttoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={value} aria-label="Переключатель навигации">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="col-lg-7 d-flex">
              <ButtonsLink nameButton="collapse navbar-collapse" nameId="nothing" varik="transparent" />
            </div>
            <div className="col-lg-2 d-flex author col-md-0 ms-3">
              <text className="collapse navbar-collapse justify-content-end">1PersonStudio</text>
            </div>
          </div>
        </div>
      </nav>
      <section className={name} id="navbarNav" aria-controls="navbarNav">
        <ButtonsLink nameButton="1" nameId="1" varik="danger text-dark" />
      </section>
    </>
  );
};

export default HeaderComponent;
