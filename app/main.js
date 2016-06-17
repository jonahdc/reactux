import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Bootstrap from './libs/bootstrap/bootstrap';

import Header from './components/header/Header';
import Body from './components/body/Body';

const app = document.getElementById('app');

require('./styles/base.scss');


ReactDOM.render(
  <div>
  <Header />
  <Body />
  </div>
  ,app
);
