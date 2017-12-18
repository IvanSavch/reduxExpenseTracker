import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Expense Tracker</a>
            </div>
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/home">Home</Link></li>
                <li><Link to="/bills">Bills</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>
            <button className="btn btn-danger navbar-btn"><Link to="/add">Add new expenses</Link></button>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </nav>
	);

export default Navbar
