"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './components/MyComponent';


let titleOfTable= require('./titleOfTable.json');
let infoForTable= require('./infoForTable.json');

ReactDOM.render(
  <MyComponent 
    titleOfTable={titleOfTable}
    infoForTable={infoForTable}
  />
  , document.getElementById('container') 
);

