import React from 'react';
import { Link } from 'react-router-dom';
import parvez from '../Assests/parvez.jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero'>
            <div className=' mask'>
                <img className='hero-bg' src={parvez} alt='heroBG' />
            </div>
            <div className=' content'>
                <h1>I am a <span className='typewriter'>Front-end Web Developer .</span> </h1>
                <div>
                    <Link to='/projects' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn'>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;