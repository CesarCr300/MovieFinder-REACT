import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import {MovieFinder} from './components/MovieFinder'

ReactDOM.render(
  <React.StrictMode>
    <MovieFinder />
  </React.StrictMode>,
  document.getElementById('root')
);