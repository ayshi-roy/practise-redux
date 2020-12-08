import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <h4 className="nav_nam text-white">Pioneer alph@ </h4>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/home" style={{textDecoration: "none"}}>
                                <a className="nav-link text-white mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                            </Link>                            
                        </li>
                        <li className="nav-item">
                            <Link to="/list" style={{textDecoration: "none"}}>
                                <a className="nav-link text-white mr-5" href="#">User Lists</a>
                            </Link>                                                        
                        </li>
                        <li className="nav-item">                            
                            <a className="nav-link text-white mr-5" href="#about">About Us</a>                                                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white mr-5" href="#contact">Contact Us</a>                            
                        </li>
                    </ul>                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;