import React from 'react';
import './ContactForm.css';

const ContactForm = () => {

    return (
        <div className='form'>
            <form action="https://formcarry.com/s/UxhZ_W5p0" method="POST" accept-charset="UTF-8">
                <label>Your Name</label>
                <input type='text' name='name' required></input>
                <label>Your Email</label>
                <input type='email' name='email' required></input>
                <label>Subject</label>
                <input type='text' name='subject'></input>
                <label>Message</label>
                <textarea rows='6' placeholder='Type your message here' name='message' required />
                <button type='submit' class="button-57"><span class="text">Submit</span><span>Send</span></button>
            </form>

        </div>
    );
};

export default ContactForm;