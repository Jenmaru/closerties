import ReactDOM from 'react-dom/client';
import React from 'react';
import init from './init.jsx';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('chat'));
  const vdom = await init();
  root.render(<React.StrictMode>{vdom}</React.StrictMode>);
};

app();
