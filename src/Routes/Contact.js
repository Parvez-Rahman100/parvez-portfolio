import React from 'react';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
    return (
        <div>
            <div className='hero-section'>
                <div className='heading'>
                    <h1>CONTACT</h1>
                    <p>Let's have Contact between us</p>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;