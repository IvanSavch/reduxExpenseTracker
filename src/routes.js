import React from 'react'
import { Route } from 'react-router-dom'

import * as auth from './modules/auth';
import Home from './modules/app/components/home';
import {containers as BillContainers} from './modules/bills';
import {containers as CategoryContainers} from './modules/category';

const {Bills} = BillContainers;
const {CategoryList} = CategoryContainers;
//const { SignupForm, LoginForm } = auth.components;


const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/bills" component={Bills} />
        <Route path="/category" component={CategoryList} />
    </div>
);

export default Routes
