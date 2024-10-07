import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="803944821484-61deii8all0leodinam1rkao7ebg5dos.apps.googleusercontent.com">; */}

    <App />
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);


reportWebVitals();
