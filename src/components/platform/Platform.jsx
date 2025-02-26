import React from 'react';
import { useState, useEffect } from 'react';
import { Circle } from 'rc-progress';
import './Platform.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer/variant'

function Platform() {
  const [percentage, setPercentage] = useState(30);
  const [percentages, setPercentages] = useState(40);
  const [percentagess, setPercentagess] = useState(50);
  useEffect(() => {
    const timeouts = [];

    for (let i = 0; i <= percentage; i++) {
      const timeoutId = setTimeout(() => {
        setPercentage(i);
      }, i * 30);

      timeouts.push(timeoutId);
    }
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);
  useEffect(() => {
    const timeouts = [];

    for (let i = 0; i <= percentages; i++) {
      const timeoutId = setTimeout(() => {
        setPercentages(i);
      }, i * 30);

      timeouts.push(timeoutId);
    }
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);
  useEffect(() => {
    const timeouts = [];

    for (let i = 0; i <= percentagess; i++) {
      const timeoutId = setTimeout(() => {
        setPercentagess(i);
      }, i * 30);

      timeouts.push(timeoutId);
    }
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);
  return (
    <>
      <motion.h1
        variants={fadeIn('down', 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        id='platform' className='platform'>Platforms Use</motion.h1>
      <motion.div 
        variants={fadeIn('up' , 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false , amount:0}}
        className='progress-container'>
        <div className='progress-item'>
          <a href='https://leetcode.com/u/anonymous_code_ole/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <h3 className='plat-name' style={{ color: 'orange' }}>Leetcode</h3>
            <div className='progress' >
              <Circle percent={percentage} strokeWidth={4} strokeColor="#30FD25FF" className='circle' id='leetcode' />
              <div>
                <span className='circle-text'>613/2345</span>
                <h3 className='cir-txt' style={{ color: 'lightgreen' }}>Easy:300</h3>
                <h3 className='cir-txt' style={{ color: 'orange' }}>Medium:260</h3>
                <h3 className='cir-txt' style={{ color: 'red' }}>Hard:20</h3>
              </div>
            </div>
          </a>
        </div>
        <div className='progress-item'>
          <a href='https://www.geeksforgeeks.org/user/mohituniyaatya/?ref=header_profile' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <h3 className='plat-name' style={{ color: 'green' }}>GeeksforGeeks</h3>
            <div className='progress'>
              <Circle percent={percentages} strokeWidth={4} strokeColor="#1abc9c" className='circle' id='gfg' />
              <div>
                <span className='circle-text'>334/2345</span>
                <h3 className='cir-txt' style={{ color: 'lightgreen' }}>Easy:250</h3>
                <h3 className='cir-txt' style={{ color: 'orange' }}>Medium:160</h3>
                <h3 className='cir-txt' style={{ color: 'red' }}>Hard:15</h3>
              </div>
            </div>
          </a>
        </div>
        <div className='progress-item'>
          <a href='https://tryhackme.com/p/ole1' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <h3 className='plat-name' style={{ color: 'blue' }}>TryHackMe</h3>
            <div className='progress' >
              <Circle percent={percentagess} text={`${percentagess}%`} strokeWidth={4} strokeColor="#3498db" className='circle' id='try' />
              <div>
                <span className='circle-text'>52/500</span>
                <h3 className='cir-txt' style={{ color: 'lightgreen' }}>Easy:30</h3>
                <h3 className='cir-txt' style={{ color: 'orange' }}>Medium:20</h3>
                <h3 className='cir-txt' style={{ color: 'red' }}>Hard:2</h3>
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default Platform;