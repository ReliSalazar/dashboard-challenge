import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faChartLine,
  faUsers,
  faGaugeHigh,
  faMagnifyingGlass,
  faGlobe,
  faBell,
  faMessage,
  faList,
  faAngleUp,
  faAngleDown,
  faDollarSign,
  faCommentDollar,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faChartLine,
  faUsers,
  faGaugeHigh,
  faMagnifyingGlass,
  faGithub,
  faGlobe,
  faBell,
  faMessage,
  faList,
  faAngleUp,
  faAngleDown,
  faDollarSign,
  faCommentDollar,
  faClipboardCheck,
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
