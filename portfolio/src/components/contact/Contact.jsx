import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} />
                <a href="mailto:omoregiewinn706@gmail.com">Omoregiewinn706@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} />
                <a href="#">linkedin.com/omoregiewinn</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} />
                <a href="https://github.com/Osas706">github.com/Osas706</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
