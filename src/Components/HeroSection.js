import React from 'react';
import { Link } from 'react-router-dom';
import heroBG from '../Assests/hero-bg.jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero'>
            <div className=' mask'>
                <img className='hero-bg' src={heroBG} alt='heroBG' />
            </div>
            <div className=' content'>
                <h1>Hi, I am Frontend Developer</h1>
                <div>
                    <Link to='/projects' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn'>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;