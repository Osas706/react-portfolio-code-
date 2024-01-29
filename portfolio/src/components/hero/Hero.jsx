import React from 'react';

import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Winner</h1>
            <p className={styles.desc}>
                I'm a frontend web developer with experience using React and Vue.js. Reach out if you'd like to learn more.
            </p>
            <a href="mailto:omoregiewinn706@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>

        <img src={getImageUrl('hero/heroImage.jpg')} alt="Image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />  
    </section>
  )
}

export default Hero
