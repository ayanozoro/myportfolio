import React from 'react';
import './Skill.css';
import { motion, transform } from 'framer-motion'
import { fadeIn } from '../../Framer/variant'

function Skills() {

    return (
        <>
            <motion.h1 
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              id='skill' className='head-skill'>SKILLS</motion.h1>
            <motion.div 
                variants={fadeIn('down', 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className='skills'>
                <motion.div 
                    variants={fadeIn('left', 0.5)}
                    initial={"hidden"}
                    transition={{scale:0.9}}
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    whileHover={
                        {scale:0.9}
                    }
                    className='skill'>
                    <h3>Fronted Skill</h3>
                    <div className='skill-img'>
                        <p className='skill-para'>
                            HTML
                            <img src="html.png" className='img-skill' alt="React" />
                            <span className='skill-level'>Advanced</span>
                        </p>
                        <p className='skill-para'>
                            CSS
                            <img src="css.png" className='img-skill' alt="Node.js" />
                            <span className='skill-level'>Advanced</span>
                        </p>
                        <p className='skill-para'>
                            Matrial.UI
                            <img src="frontend.png" className='img-skill' alt="Express.js" />
                            <span className='skill-level'>Beginner</span>
                        </p>
                        <p className='skill-para'>
                            Javascript
                            <img src="js.png" className='img-skill' alt="Express.js" />
                            <span className='skill-level'>Intermediate</span>
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    variants={fadeIn('right', 0.5)}
                    initial={"hidden"}
                    transition={{scale:0.9}}
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    whileHover={
                        {scale:0.9}
                    }
                    className='skill'>
                    <h3>Backend Skill</h3>
                    <div className='skill-img'>
                        <p className='skill-para'>
                            React
                            <img src="atom.png" className='img-skill' alt="React" />
                            <span className='skill-level'>Intermediate</span>
                        </p>
                        <p className='skill-para'>
                            Node.js
                            <img src="nodejs.png" className='img-skill' alt="Node.js" />
                            <span className='skill-level'>Advanced</span>
                        </p>
                        <p className='skill-para'>
                            Express.js
                            <img src="backend.png" className='img-skill' alt="Express.js" />
                            <span className='skill-level'>Beginner</span>
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    variants={fadeIn('left', 0.5)}
                    initial={"hidden"}
                    transition={{scale:0.9}}
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    whileHover={
                        {scale:0.9}
                    }
                    className='skill'>
                    <h3>Programming Skill</h3>
                    <div className='skill-img'>
                        <p className='skill-para'>
                            JavaScript
                            <img src="js.png" className='img-skill' alt="JavaScript" />
                            <span className='skill-level'>Intermediate</span>
                        </p>
                        <p className='skill-para'>
                            Python
                            <img src="python.png" className='img-skill' alt="Python" />
                            <span className='skill-level'>Intermediate</span>
                        </p>
                        <p className='skill-para'>
                            C++
                            <img src="cpp.png" className='img-skill' alt="C++" />
                            <span className='skill-level'>Advance</span>
                        </p>
                        <p className='skill-para'>
                            C
                            <img src="c.png" className='img-skill' alt="Python" />
                            <span className='skill-level'>Intermediate</span>
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    variants={fadeIn('right', 0.5)}
                    initial={"hidden"}
                    transition={{scale:0.9}}
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    whileHover={
                        {scale:0.9}
                    }
                    className='skill'>
                    <h3>Soft Skill</h3>
                    <div className='skill-img'>
                        <p className='skill-para'>
                            Communication
                            <img src="chat.png" className='img-skill' alt="Communication" />
                            <span className='skill-level'>Intermediate</span>
                        </p>
                        <p className='skill-para'>
                            Teamwork
                            <img src="group.png" className='img-skill' alt="Teamwork" />
                            <span className='skill-level'>Advanced</span>
                        </p>
                        <p className='skill-para'>
                            Problem Solving
                            <img src="problem-solving.png" className='img-skill' alt="Problem Solving" />
                            <span className='skill-level'>Advanced</span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Skills;
