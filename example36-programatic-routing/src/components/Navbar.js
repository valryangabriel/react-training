import React from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/about');
    
    }, 5000);

    return (
        <nav className='nav-wrapper red darken-3'>
            <Link className="brand-logo" to="/"> Great Roblox</Link>
            <ul className='right'>
                <li> <NavLink exact to ="/"> Home </NavLink></li>
                <li> <NavLink exact to ="/about"> About </NavLink></li>
                <li> <NavLink exact to ="/contact"> Contact </NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;