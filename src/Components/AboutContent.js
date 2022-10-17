import React from 'react';
import { Link } from 'react-router-dom';
import react1 from '../Assests/react1.png';
import react2 from '../Assests/react2.png';
import './AboutContent.css';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <h1>Who am I?</h1>
                <p>I am a react frontend web developer. I create responsive secure websites. </p>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
            <div className='about-right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img className='img' src={react1} alt='react pic' />
                    </div>
                    <div className='img-stack bottom'>
                        <img className='img' src={react2} alt='react pic' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;