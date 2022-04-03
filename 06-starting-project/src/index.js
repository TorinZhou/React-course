import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {LoginComponent} from "./components/Context/login_context.js"

ReactDOM.render(
  <LoginComponent>
    <App />
  </LoginComponent>,
  document.getElementById("root")
);
