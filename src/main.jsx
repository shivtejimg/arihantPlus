import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <GoogleOAuthProvider clientId='654276629013-1glmb3krqo5t67861vlkcgri3qi960sn.apps.googleusercontent.com' >
    <BrowserRouter basename="/arihant/" >
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
  // </StrictMode>,
)
