import React from 'react'
import styles from "./Projects.module.css";
import { SingleProject } from './individualProject/SingleProject';


export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
    <h2 className={styles.title}>Projects</h2>

    <ul className={styles.projectsList}>
      <li className={styles.specificProject}>
      <SingleProject name="SportsCenter App" language="Java+Spring" tech1="ReactJS" tech2="PostgreSQL"imageUrl={"projects/sportscenter.png"} description="Full-stack web appp" gitLink="https://github.com/behradrez/" />
      </li>
      <li className={styles.specificProject}>
      <SingleProject name="Hotel Management System" language="Java" tech1="UML" tech2="TDD & BDD"imageUrl={"projects/assetplus.png"} description="Full-stack Java Application" gitLink="https://github.com/behradrez/AssetPlus" />
      </li>
      <li className={styles.specificProject}>
      <SingleProject name="Online Portfolio" language="ReactJS" tech1="Vite" tech2="CSS" imageUrl={"projects/portfolio.png"} description="Portfolio" gitLink="https://github.com/behradrez/behradrez.github.io"  />
      </li>
      <li className={styles.specificProject}>
      <SingleProject name="PyChess" language="Python"  tech2="PyGame" imageUrl={"projects/pychess.png"} description="Chess in Python" gitLink="https://github.com/behradrez/PyChess" />
      </li>
      <li className={styles.specificProject}>
      <SingleProject name="RamQ Detector" language="Python" tech1="OpenPyXL" tech2="OCR" imageUrl={"projects/ramqdetector.png"} description="RamQ detector" gitLink="https://github.com/behradrez/RamQDetector"  />
      </li>
    </ul>
    
    </section>
    
    )
}
