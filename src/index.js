import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { ProfileDataProvider } from './contexts/ProfileDataContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <CurrentUserProvider>
        <ProfileDataProvider>
          <App />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
