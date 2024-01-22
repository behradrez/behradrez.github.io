import React from 'react'
import styles from "./Projects.module.css";
import { SingleProject } from './individualProject/singleProject';


export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
    <h2 className={styles.title}>Projects</h2>

    <ul className={styles.projectsList}>
      <li className={styles.specificProject}>
      <SingleProject name="AssetPlus" imageUrl={"projects/assetplus.png"} description="Hotel employee & asset management system" gitLink="https://github.com/behradrez/AssetPlus" />
      </li>
      <li className={styles.specificProject}>
      <SingleProject name="PyChess" imageUrl={"projects/pychess.png"} description="Chess in Python" gitLink="https://github.com/behradrez/PyChess" />
      </li>
      <li className={styles.specificProject}>
      <SingleProject name="RamQ Detector" imageUrl={"projects/ramqdetector.png"} description="RamQ detector" gitLink="https://github.com/behradrez/RamQDetector"  />
      </li>
      <li className={styles.specificProject}>
      <SingleProject name="harrypotter"description="placeholder project" />
      </li>
    </ul>
    
    </section>
    
    )
}
