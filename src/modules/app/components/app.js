import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import * as auth from './../../auth';
import {compoments as Bills} from './../../bills';
import {compoments as Category} from './../../category';
import {compoments as Add} from './../../add';

import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
import Home from './home'

//const { SignupForm, LoginForm } = auth.components;


const App = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/bills" component={Bills} />
            <Route path="/category" component={Category} />
            <Footer />
        </div>
    </BrowserRouter>

);

export default App
