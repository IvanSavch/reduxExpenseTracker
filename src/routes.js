import React from 'react'
import { Route } from 'react-router-dom'

import * as auth from './modules/auth';
import {compoments as Bills} from './modules/bills';
import {compoments as Category} from './modules/category';

import Home from './modules/app/components/home'

//const { SignupForm, LoginForm } = auth.components;


const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/bills" component={Bills} />
        <Route path="/category" component={Category} />
    </div>
);

export default Routes
