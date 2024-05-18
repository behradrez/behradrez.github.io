import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';


export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.textContainer}>
            <h1>Contact Me!</h1>
            <p>Reach out on LinkedIn for more information, or check out my projects on Github!</p>
        </div>
        <ul className={styles.links}> 
            <a href="https://www.linkedin.com/in/behradrez">
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")}></img>
                <p>View my LinkedIn</p>
            </li>

            </a>
            <a href='href="https://github.com/behradrez'>

            <li className={styles.link} href="https://github.com/behradrez">
                <img src={getImageUrl("contact/githubIcon.png")}></img>
                <p >View my GitHub</p>
            </li>
            </a>
        </ul>
    </footer>
  
  )
}
