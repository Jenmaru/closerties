import React from 'react';
import HeaderComponent from '../components/Header.jsx';
import Pages from '../components/PagesSelector.jsx';

const MainPage = () => (
  <div className="d-flex flex-column h-100">
    <div className="h-100">
      <div className="row justify-content-center h-100">
        <div className="container-fluid" style={{ height: '1000' }}>
          <HeaderComponent />
          <Pages />
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
