import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as app from './modules/app';

const { Root } = app.containers;

ReactDOM.render(<Root />, document.getElementById('root'));
