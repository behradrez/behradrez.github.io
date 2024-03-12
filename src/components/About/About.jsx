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
                    <h3>Full-stack Developer</h3>
                    <p>Experienced with various modern frameworks and libraries, I've developed several full-stack applications
                        through personal, academic, and professional projects. I am experienced in everything from front-end design, to backend and database management.   
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img className={styles.itemImage} src={getImageUrl("about/serverIcon.svg")}/>
                <div className={styles.aboutItemText}>
                    <h3>Driven & Self-learning</h3>
                    <p>As a passionate student in my senior year, I am constantly learning and improving my skillset, fueling my self-learning habits and applying new concepts as I go.   
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img className={styles.itemImage} src={getImageUrl("about/overcome.svg")}/>
                <div className={styles.aboutItemText}>
                    <h3>Leader & Team Player</h3>
                    <p>Through my unique academic background and involvement in various committees, 
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
