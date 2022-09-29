import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [navIsOpen, setNavIsOpen] = useState(false);

    return (
        <nav className='navbar' style={{ transform: navIsOpen ? "translatex(0%)" : "translatex(-100%)" }}>
            <ul>
                <li>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} end onClick={() => setNavIsOpen(false)}>General</NavLink>
                </li>
                <li>
                <NavLink to="/batteries" className={(nav) => (nav.isActive ? "nav-active" : "")} onClick={() => setNavIsOpen(false)}>Batteries</NavLink>
                </li>
                <li>
                <NavLink to="/propulsion" className={(nav) => (nav.isActive ? "nav-active" : "")} onClick={() => setNavIsOpen(false)}>Propulsion</NavLink>
                </li>
            </ul>
            <div className='arrow-handler' onClick={() => setNavIsOpen(!navIsOpen)}>&#8227;</div>
        </nav>
    );
};

export default Navbar;