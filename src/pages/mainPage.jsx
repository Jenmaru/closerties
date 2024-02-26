import React from 'react';
import HeaderComponent from '../components/Header.jsx';
import Pages from '../components/PagesSelector.jsx';
import ModalComponent from '../components/Modal.jsx';

const MainPage = () => (
        <>
          <HeaderComponent />
          <Pages />
          <ModalComponent />
        </>
);

export default MainPage;
