import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

// Fontes auto-hospedadas como arquivos estáticos (ver src/styles/fonts.css)
// — sem depender de fonts.googleapis.com nem de pacotes npm externos.
import './styles/fonts.css';

import App from './App.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { theme } from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
