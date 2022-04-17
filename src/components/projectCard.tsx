import React from 'react';
import styles from '../styles/projectCard.module.scss';
import { Project } from './projectCard.d';
import ThumborImage from './thumborImage';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const GH = (url: string) => {
   return (
      <a href={url} target="_blank" rel="noreferrer">
         <FiGithub />
      </a>
   );
};

const ProjectCard = ({
   project,
   thumbor,
}: {
   project: Project;
   thumbor: string;
}) => {
   return (
      <div className={styles.main}>
         <div className={styles.data}>
            <h3>{project.title}</h3> <p>{project.desc}</p>
            <div className={styles.techs}>
               {project.techs.map((tech) => (
                  <span key={tech}>{tech}</span>
               ))}
            </div>
            {GH(project.links.github)}
         </div>
         <div className={styles.image}>
            <ThumborImage
               width={500}
               height={500}
               src={project.img}
               layout="fill"
               sizes="(max-width: 1500px) 500px"
               objectFit="cover"
               style={{ width: '100%', height: '100%' }}
               thumborKey={thumbor}
            />
         </div>
      </div>
   );
};

export default ProjectCard;
