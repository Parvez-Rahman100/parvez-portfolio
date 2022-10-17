import React from 'react';
import AboutContent from '../Components/AboutContent';

const About = () => {
    return (
        <div>
            <div className='hero-section'>
                <div className='heading'>
                    <h1>ABOUT</h1>
                    <p>I am a friendly frontend web developer</p>
                </div>
            </div>
            <AboutContent />
        </div>
    );
};

export default About;