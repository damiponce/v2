import React from 'react';
import styles from '../styles/projectCard.module.scss';
import { Project } from './projectCard.d';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { dpr } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/dpr';

import { useTranslation } from 'next-export-i18n';

const myCld = new Cloudinary({ cloud: { cloudName: 'damiponce' } });
const GH = (url: string) => {
   return (
      <a href={url} target="_blank" rel="noreferrer">
         <FiGithub />
      </a>
   );
};
const EL = (url: string) => {
   return (
      <a href={url} target="_blank" rel="noreferrer">
         <FiExternalLink />
      </a>
   );
};

const USE_IMAGES = true;

const ProjectCard = ({ project }: { project: Project }) => {
   const { t } = useTranslation();

   return (
      <div className={styles.main}>
         <div className={styles.data}>
            <h3>{t(project.i18n + '.title')}</h3>{' '}
            <p>{t(project.i18n + '.description')}</p>
            <div className={styles.techs}>
               {project.techs.map((tech) => (
                  <span key={tech}>{tech}</span>
               ))}
            </div>
            <div className={styles.links}>
               {GH(project.links.github)}
               {typeof project.links.website !== 'undefined'
                  ? EL(project.links.website!)
                  : null}
            </div>
         </div>
         {/* <div className={styles.image}> */}
         {USE_IMAGES ? (
            <>
               {/* <div className={styles.blur} /> */}
               <AdvancedImage
                  className={styles.image}
                  cldImg={myCld
                     .image(project.img)
                     .resize(fill().width(600).gravity('face'))
                     .quality(95)
                     .delivery(dpr(auto()))}
               />
            </>
         ) : (
            <div> </div>
         )}
         {/* </div> */}
      </div>
   );
};

export default ProjectCard;
