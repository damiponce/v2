import React from 'react';
import styles from '../styles/clientCard.module.scss';
import { Client } from './clientCard.d';
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

const ClientCard = ({ client }: { client: Client }) => {
   const { t } = useTranslation();

   return (
      <div className={styles.main}>
         <div className={styles.data}>
            <h3>{t(client.i18n + '.title')}</h3>{' '}
            <p>{t(client.i18n + '.description')}</p>
            <div className={styles.techs}>
               {client.techs.map((tech) => (
                  <span key={tech}>{tech}</span>
               ))}
            </div>
            <div className={styles.links}>
               {/* {GH(client.links.github)} */}
               {typeof client.links.website !== 'undefined'
                  ? EL(client.links.website!)
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
                     .image(client.img)
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

export default ClientCard;
