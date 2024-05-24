import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import './index.css';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));

window.addEventListener('scroll', function () {
  let elements = document.getElementsByClassName('animated');
  console.log(elements);
  Array.from(elements).map((elem) => {
    let position = elem.getBoundingClientRect();

    if (position.top < window.innerHeight - 100 && !elem.classList.contains('visible')) {
      setTimeout(() => {
        elem.classList.add('visible');
      }, 200);
    }
  });
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
