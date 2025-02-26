import React from 'react';
import './About.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer/variant'

function About() {
    return (
        <>
            <motion.div 
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              id="about" className="about" style={{ textAlign: 'center' }}>
                <h1>About Me</h1>
            </motion.div>
            <div className="about-main">
                <motion.div 
                   variants={fadeIn('left', 0.5)}
                   initial="hidden"
                   whileInView="show"
                   viewport={{ once: false, amount: 0 }}
                   className="about-img">
                    <img src="https://img.freepik.com/premium-vector/free-vector-software-development-art-illustration_889056-107554.jpg" className="profile-image" alt="Profile" />
                </motion.div>
                <motion.div 
                    variants={fadeIn('right', 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    className="about-container">
                    <div className="about-text">
                        <div className='about-imgs'>
                            <div className="experience-box">
                                <img src="quality.png" alt="Quality" className="quality-image" />
                                <h3>Education</h3>
                                <p>B.Tech</p>
                                <h3>I am a BTech student at Shivalik College of Engineering, where I am building a strong foundation in technology and innovation. My journey here is not just about acquiring knowledge, but also about applying it through hands-on projects and collaborative learning. With a passion for problem-solving and a drive to create real-world solutions, I am excited to explore the ever-evolving field of engineering and contribute to a future shaped by cutting-edge technology.</h3>
                            </div>
                            <div className="experience-box">
                                <img src="mortarboard.png" alt="Education" className="quality-image" />
                                <h3>Expreience</h3>
                                <h3>Web Development</h3>
                                <h3>I am a web developer passionate about creating innovative and user-friendly web applications. I have developed several projects to gain hands-on experience and to understand real industry requirements. Each project has been a valuable learning opportunity, allowing me to apply theoretical knowledge in a practical setting, enhance my skills, and stay updated with the latest technologies. Through these projects, I am committed to bridging the gap between academic learning and industry standards, ensuring that my work is both practical and forward-thinking.</h3>
                            </div>
                        </div>
                        <div className="about-para">
                            <p className="about-para">I am Mohit Uniyal from Uttarakhand, currently pursuing my BTech degree at Shivalik College of Engineering. I have a deep passion for coding and a keen interest in exploring new technologies. Through various projects and hands-on experiences, I strive to bridge the gap between academic learning and real industry requirements. My goal is to continually expand my skill set and contribute innovative solutions in the tech world.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default About;

