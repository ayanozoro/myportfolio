import React, { useState } from 'react'
import './contact.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framer/variant'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }
        setError('');
        setSuccess(true);
        
    }

    return (
        <>
          <motion.h1 
          variants={fadeIn('down', 0.5)}
          initial={"hidden"}
          transition={{scale:0.9}}
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className='contact'>Contact</motion.h1>
          
            <div id='contact' className='contact-left'>
              <motion.div
                variants={fadeIn('left', 0.5)}
                initial={"hidden"}
                transition={{scale:0.9}}
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className='contact-detail'>
                <h2 className='cont-tk'>Get in touch with me</h2>
                <div className='contact-typ'>
                  <img src='soft.png' className='img-cnt' />
                <p className='cnt-typ' style={{fontFamily:'monospace'}}>Feel free to reach out to me via email or phone.</p>
                </div>
                <div className='contact-typ'>
                  <img src='phone-call.png' className='img-cnt' />
                <p className='cnt-typ' style={{fontFamily:'monospace'}}>6395466456</p>
                </div>
                <div className='contact-typ'>
                  <img src='email.png' className='img-cnt' />
                <p className='cnt-typ' style={{fontFamily:'monospace'}}>mohituniyal925@gmail.com</p>
                </div>
                <div className='contact-typ'>
                  <img src='pin.png' className='img-cnt' />
                <p className='cnt-typ' style={{fontFamily:'monospace'}}>India</p>
                </div>
              </motion.div>
                <motion.div 
                  variants={fadeIn('right', 0.5)}
                  initial={"hidden"}
                  transition={{scale:0.9}}
                  whileInView="show"
                  viewport={{ once: false, amount: 0 }}
                  className='contact-form'>
                  <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                      <label for='name'>Name:</label>
                      <input type='text' id='name' name='name' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />

                    </div>
                    <div className='form-group'>
                      <label for='email'>Email:</label>
                      <input type='email' id='email' name='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className='form-group'>
                      <label for='message'>Message:</label>
                      <textarea id='message' name='message' placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)} />

                    </div>
                    <button type='submit'>Send</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}

                  </form>
                </motion.div>
            </div>
          
        </>
    )
}

export default Contact
