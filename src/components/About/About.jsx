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
                    <p>Frontend dev with experience in plenty of stuff</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img className={styles.itemImage} src={getImageUrl("about/serverIcon.svg")}/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>backend dev with experience in plenty of othr stuff</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img className={styles.itemImage} src={getImageUrl("about/serverIcon.svg")}/>
                <div className={styles.aboutItemText}>
                    <h3>UI Design</h3>
                    <p>no idea what third thing to add here</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
    )
}
