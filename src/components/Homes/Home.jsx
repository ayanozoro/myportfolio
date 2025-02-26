import React, { useState, useEffect } from 'react';
import './Home.css';
import Platform from '../Platform/Platform.jsx';
import { motion } from "motion/react";

const Home = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const roles = ['Developer', 'Coder', 'Cybersecurity'];
    let index = 0;

    const interval = setInterval(() => {
      setName(roles[index]);
      index = (index + 1) % roles.length;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div 
        initial={{x:-1500}}
        transition={{
          duration:1,
          delay:1
        }}
        animate={{x:0}}
        id="home" className="home-container  ">
        <motion.div 
        initial={{x:1000}}
        animate={{ x:0 }} 
        whileHover={{scale:1.1}}
        className="image-container">
          <motion.img
            src="https://as2.ftcdn.net/v2/jpg/05/68/98/15/1000_F_568981524_2irG4VUSs06xbahAihTpkuSfxKkw8FqX.jpg"
            alt="Profile"
            className="profile-image"
          />
        </motion.div>
        <div className='home-about'>
          <h1 className="hom1-h1">Hello I'm <span>Mohit Uniyal</span></h1>
          <h1 className='hom1-h1'>I'm a <span>{name}</span></h1>
          <p className='home-para flex '>As a developer and coder, I thrive on solving problems through technology. I focus on writing clean, efficient code to build innovative applications and systems. Whether it's working with front-end frameworks, back-end languages, or diving into data structures and algorithms, I constantly aim to improve my skills and create software that makes a difference.</p>
          <div className='home-tec'>
            <h3 className='curr'>Currentely Working on</h3>
            <img src='js.png' className='tech' />
            <img src='nodejs.png' className='tech' />
            <img src='atom.png' className='tech' />
          </div>
          <div className='hom-tech'>
          <button className='btn'>Hire Me</button>
        </div>
        </div>
        <motion.div 
          initial={{opacity:0}}
          transition={{
            duration:1,
            delay:2
          }}
          animate={{opacity:1}}
          className='hom-social'>
            <a href='' target='_blank'><button className='home-social'><img src="github.png" className='img-skill'/></button></a>
            <a href='' target='_blank'><button className='home-social'><img src="instagram.png" className='img-skill'/></button></a>
            <a href='' target='_blank'><button className='home-social'><img src="facebook.png" className='img-skill'/></button></a>
            <a href='' target='_blank'><button className='home-social'><img src="linkedin.png" className='img-skill'/></button></a>
          </motion.div>
      </motion.div>

      <Platform />
    </>
  );
};

export default Home;