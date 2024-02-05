import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Nick
            </h1>
            <p className={styles.description}>
                I am a passionate computer engineering student at McGill University. Scroll down to learn more about me!
            </p>
            <a className={styles.contactBtn} href='mailto:behrad.rezaie07@gmail.com'>Contact Me!</a>
        </div>
        <img className={styles.heroImage} src={getImageUrl("hero/heroImage.jpg")} alt="image of me"/>
        <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
  )
}
