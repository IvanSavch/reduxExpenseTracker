import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Expense Tracker</a>
            </div>
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </nav>
	);

export default Navbar
