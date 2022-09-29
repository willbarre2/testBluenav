import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} end>Accueil</NavLink>
                </li>
                <li>
                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>A propos</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;