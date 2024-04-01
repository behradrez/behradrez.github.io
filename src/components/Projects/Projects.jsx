import React from 'react'
import styles from "./Projects.module.css";
import { SingleProject } from './individualProject/SingleProject';

import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
    <h2 className={styles.title}>Projects</h2>


    <ul className={styles.projectsList}>
      {projects.map((project) =>  {
        return (
          <li className={styles.specificProject}>
            <SingleProject name={project.name} language={project.language}
             tech1={project.tech1} tech2={project.tech2} 
             imageUrl={project.imageUrl} description={project.description}
             gitLink={project.gitLink}></SingleProject>
          </li>
        )
      })}
      </ul>
    
    </section>
    
    )
}
