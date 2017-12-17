import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as app from './modules/app';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const { Root } = app.containers;

ReactDOM.render(<Root />, document.getElementById('root'));
