import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css';

const Navbar = () => {

    const [cliked, setClicked] = useState(false)
    const handleClicked = () => setClicked(!cliked)

    return (
        <header className='header'>
            <Link to='/'>
                <h1>Parvez</h1>
            </Link>
            <ul className={cliked ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClicked}>
                {
                    cliked ? (
                        <FaTimes size={20} style={{ color: 'white' }} />
                    ) : (
                        <FaBars size={20} style={{ color: 'white' }} />
                    )
                }

            </div>
        </header>
    );
};

export default Navbar;