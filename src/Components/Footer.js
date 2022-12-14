import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
                        <div>
                            <p>Uttarpara, Khilkhet,Dahaka 1229</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />
                            +8801686172299</h4>
                    </div>
                    <div className='email'>
                        <h4><MdAlternateEmail size={20} style={{ color: 'white', marginRight: '2rem' }} />
                            iamparvezrahman@gmail.com</h4>
                    </div>
                </div>
                <div className='footer-right'>
                    <h4>This is Parvez Miah</h4>
                    <p>I am a frontend developer. I am looking forward to join job as junior web developer.</p>
                    <div className='social'>
                        <a href='https://www.facebook.com/parvez.rahman.144' target='_blank' rel="noreferrer"><FaFacebook size={30} style={{ color: 'white', marginRight: '1rem' }} /></a>
                        <a href='https://twitter.com/' target='_blank' rel='noreferrer'><FaTwitter size={30} style={{ color: 'white', marginRight: '1rem' }} /></a>
                        <a href='https://www.linkedin.com/in/parvez-miah-945910229/' target='_blank' rel='noreferrer'><FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem' }} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;