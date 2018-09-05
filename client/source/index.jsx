import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as req from './services/request';

const x= req.createCollection();
console.log(x);
ReactDOM.render((
  <BrowserRouter>
    <h1>Hello, Cryptomoji!</h1>
  </BrowserRouter>
), document.getElementById('app'));

