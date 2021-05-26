import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import { MenuProvider } from './store/MenuProvider';
import { LoginProvider } from './store/LoginProvider'
import { UrlProvider } from './store/UrlProvider'
import { UserProvider } from './store/UserProvider'
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <UrlProvider>
        <LoginProvider>
          <MenuProvider>
            <Router>
              <App />
            </Router>
          </MenuProvider>
        </LoginProvider>
      </UrlProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
