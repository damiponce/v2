import React from 'react';
import styles from '../styles/projectCardSmall.module.scss';
import { Project } from './projectCard.d';
import ThumborImage from './thumborImage';
import { FiExternalLink } from 'react-icons/fi';

import {
   useTranslation,
   useLanguageQuery,
   LanguageSwitcher,
} from 'next-export-i18n';

const Link = (url: string) => {
   return (
      <a href={url} target="_blank" rel="noreferrer">
         <FiExternalLink />
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
   const { t } = useTranslation();
   const [query] = useLanguageQuery();
   return (
      <div className={styles.main}>
         <div className={styles.header}>
            <h3>{t(project.i18n + '.title')}</h3>
            <div className={styles.links}>{Link(project.links.github)}</div>
         </div>
         <p>{t(project.i18n + '.description')}</p>
         <div className={styles.techs}>
            {project.techs.map((tech) => (
               <span key={tech}>{tech}</span>
            ))}
         </div>
      </div>
   );
};

export default ProjectCard;
