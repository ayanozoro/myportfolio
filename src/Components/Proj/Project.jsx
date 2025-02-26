import React from 'react';
import './Proj.css'; 
import { motion } from 'framer-motion'
import { fadeIn } from '../../Framer/variant'

function Project() {
    const projects = [
        { id: 1, image: 'https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg', title: 'Ecommerce Website', imgs: ['html.png', 'css.png', 'js.png','atom.png'] },
        { id: 2, image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44f38293168233.5e5e2974b43e4.jpg', title: 'Movies Watch', imgs: ['html.png', 'css.png', 'js.png','atom.png'] },
        { id: 3, image: 'https://i.ytimg.com/vi/ZwFA3YMfkoc/maxresdefault.jpg', title: 'Chat Application', imgs: ['html.png', 'css.png', 'js.png','atom.png'] },
    ];

    return (
        <>
            <motion.h1 
            variants={fadeIn('up', 0.5)}
            initial={"hidden"}
            transition={{scale:0.9}}
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            id='project' className='head'>Projects</motion.h1>
            <div className='proj-container'>
                {projects.map(project => (
                    <motion.div 
                    variants={fadeIn('left', 0.5)}
                    initial={"hidden"}
                    transition={{scale:0.9}}
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    className='proj-card' key={project.id}>
                        <img src={project.image} alt={`Project ${project.id}`} className='proj-image' />
                        <h3>{project.title}</h3>
                        <h2>TechUse</h2>
                        <div className="tech-icons">
                            {project.imgs.map((img, index) => (
                                <div className='tech-imgs'>
                                    <img
                                    key={index}
                                    src={img}
                                    alt={img}
                                    className='img-skill'
                                    id='tech-img'
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='proj-buttons'>
                            <button className='proj-btn'>View Project</button>
                            <button className='proj-btn'><a href='https://github.com/ayanozoro?tab=repositories' style={{ textDecoration: 'none' }}>Git Repo</a></button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default Project;