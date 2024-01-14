import React from 'react';
// import { BrowserRouter as Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   // document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App/>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
