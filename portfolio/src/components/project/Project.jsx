import React from 'react';
import projects from '../../data/projects.json';

import ProjectCard from './ProjectCard';
import styles from './Project.module.css';


const Project = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Project</h2>

        <div className={styles.projects}>
            {
              projects.map((project, id) => (
              <ProjectCard key={id} project={project}/>
              ))
            }
        </div>
    </section>
  )
}

export default Project
