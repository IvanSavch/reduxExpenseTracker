import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Routes from './../../../routes';

import './app.scss';

const App = () => (
    <Router>
        <div>
            <Header />
            <main>
                <Routes/>
            </main>
            <Footer />
        </div>
    </Router>

);

export default App
