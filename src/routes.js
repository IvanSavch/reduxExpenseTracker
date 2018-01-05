import React from 'react'
import { Route } from 'react-router-dom'

import * as auth from './modules/auth';
import Dashboard from './modules/dashboard';
import {containers as TransactionContainers} from './modules/transactions';
import {containers as CategoryContainers} from './modules/category';

const { Transactions } = TransactionContainers;
const {CategoryList} = CategoryContainers;
//const { SignupForm, LoginForm } = auth.components;


const Routes = () => (
    <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/category" component={CategoryList} />
    </div>
);

export default Routes
