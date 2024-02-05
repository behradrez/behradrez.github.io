import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img id='cursor' className={styles.itemImage} src={getImageUrl("about/cursorIcon.svg")}/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>Experienced with various modern frontend languages and frameworks, I have brought
                        several apps to life with smooth, intuitive, and seamless interfaces.   
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img className={styles.itemImage} src={getImageUrl("about/serverIcon.svg")}/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>As a full-stack developer, I have deep knowledge of API design and 
                        database management with a variety of tools and services.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img className={styles.itemImage} src={getImageUrl("about/overcome.svg")}/>
                <div className={styles.aboutItemText}>
                    <h3>Leader & Team Player</h3>
                    <p>Through my unique academic and extracurricular background, 
                        I have developed strong leadership and teamworking skills. 
                        With great communication and a challenge embracing mindset, any and all problems are surmountable.
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
    )
}
