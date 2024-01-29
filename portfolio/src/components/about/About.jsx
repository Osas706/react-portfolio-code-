import React from 'react';

import { getImageUrl } from '../../utils';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>

        <div className={styles.content}>
            <img 
             src={getImageUrl('about/aboutImage.jpg')} 
             alt='Me' 
             className={styles.aboutImage}
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
