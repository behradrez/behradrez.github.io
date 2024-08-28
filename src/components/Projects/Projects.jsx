import React from 'react'
import styles from "./Projects.module.css";
import { SingleProject } from './individualProject/SingleProject';

import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <h3>These are a few of my projects. View all my projects on my
    <a href='https://github.com/behradrez'> github!</a>
    </h3>

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
