import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/session_api_util.js';


document.addEventListener('DOMContentLoaded', () => {
  window.APIUtil = APIUtil;
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
