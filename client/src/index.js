import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core';


ReactDOM.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{
        colorScheme: 'dark',
        defaultRadius: 'md',
        colors: {
          'gray': ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#868e96', '#adb5bd', '#495057', '#343a40', '#212529'],
          'red': ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#f03e3e', '#c92a2a', '#fa5252', '#e03131'],
        },
        primaryColor: 'gray',
        // primaryShade: 3
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
      >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
