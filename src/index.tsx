import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Animation1';
import reportWebVitals from './reportWebVitals';
import Animation1 from './Animation1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Animation1/>
  //<Animation2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
