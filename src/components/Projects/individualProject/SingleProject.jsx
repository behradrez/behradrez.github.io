import React from 'react'
import { getImageUrl } from '../../../utils'
import styles from './singleProject.module.css'


export const SingleProject = ({ name,imageUrl, description, language, tech1, tech2, gitLink}) => {
  console.log(imageUrl);
  return (

    <div className={styles.container}>
      <ul className={styles.content}>
        <img className={styles.projectImage} src={getImageUrl(`${imageUrl}`)}/>
        <h1>{name}</h1>
        <p>{description}</p>

        <ul className={styles.toolsUsed}>
          {language && <li>
            <div>
              {language}
            </div>
          </li>}
          {tech1 && <li>
            {tech1}
          </li>}
          {tech2 && <li>
            {tech2}
          </li>}
        </ul>
        <div className={styles.sourceCodeContainer}>
          <a href={gitLink}>Source Code</a>
        </div>
      </ul>
    </div>
  )
}
