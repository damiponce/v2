import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/navbar';
import { Project } from '../components/projectCard.d';
import ProjectCardSmall from '../components/projectCardSmall';
import ProjectCard from '../components/projectCard';
import Link from 'next/link';
import {
   FiChevronRight,
   FiExternalLink,
   FiCornerDownRight,
   FiMail,
   FiGithub,
   FiLinkedin,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { dpr } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/dpr';

const myCld = new Cloudinary({ cloud: { cloudName: 'damiponce' } });

import { useTranslation } from 'next-export-i18n';

const Section = ({
   children,
   name,
   id,
   width,
   gridCols,
}: {
   children: any;
   name: string;
   id: string;
   width?: string; // DON'T set with "px"
   gridCols?: string;
}) => {
   return (
      <section
         className={styles.section}
         id={id}
         style={{ maxWidth: width ?? 'auto' }}
      >
         <h2>{name}</h2>
         <div style={{ gridTemplate: gridCols }}>{children}</div>
      </section>
   );
};

interface HomeTypes {
   configs: any;
}

const Home: NextPage<HomeTypes> = ({ configs }) => {
   let testConfig = require('../components/configs/projects.json');
   let projects: Project[] = [];
   for (const [key, value] of Object.entries(testConfig)) {
      //@ts-ignore
      projects.push(value);
   }

   const { t } = useTranslation();

   return (
      <div className={styles.container}>
         <div className="bg" />
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1, viewport-fit=cover"
            />
            <meta name="theme-color" content="#04141A" />

            <title>Portfolio v2</title>
            <meta name="description" content="" />
         </Head>
         <Navbar />

         <main className={styles.main}>
            <div className={styles.intro}>
               <h1 className={styles.title}>{t('intro.title')}</h1>
               <p className={styles.description}>{t('intro.biography')}</p>
            </div>
            <Section
               name={t('about.title')}
               id="about"
               width="800px"
               gridCols="auto / 3fr 2fr"
            >
               <div>
                  <p>{t('about.description')}</p>
                  <div className={styles.proficiencies}>
                     <ul>
                        <li>
                           <FiChevronRight /> HTML/CSS/SASS
                        </li>
                        <li>
                           <FiChevronRight /> JavaScript
                           <ul>
                              <li>
                                 <FiCornerDownRight /> Typescript
                              </li>
                              <li>
                                 <FiCornerDownRight /> React
                              </li>
                              <li>
                                 <FiCornerDownRight /> React Native
                              </li>
                           </ul>
                        </li>
                     </ul>
                     <ul>
                        <li>
                           <FiChevronRight /> LaTeX
                        </li>
                        <li>
                           <FiChevronRight /> Python
                           <ul>
                              <li>
                                 <FiCornerDownRight /> Pandas
                              </li>
                              <li>
                                 <FiCornerDownRight /> Matplotlib
                              </li>
                              <li>
                                 <FiCornerDownRight /> Numpy
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
               <AdvancedImage
                  cldImg={myCld
                     .image('dam-headshot_zs7crm.webp')
                     .resize(fill().width(300).height(300).gravity('face'))
                     .quality(95)
                     .delivery(dpr(auto()))}
               />
            </Section>

            <Section name={t('projects.title')} id="projects" width="1000px">
               {projects.slice(0, 2).map((project) => {
                  return <ProjectCard key={project.title} project={project} />;
               })}
               <div className={styles.projects_grid}>
                  {projects.slice(2).map((project) => {
                     return (
                        <ProjectCardSmall
                           key={project.title}
                           project={project}
                        />
                     );
                  })}
               </div>
            </Section>

            <Section name={t('contact.title')} id="contact" width="600px">
               <div>
                  <p>{t('contact.description')}</p>
                  <div className={styles.contact_button_list}>
                     <Link href="mailto:dami.ponce8@gmail.com">
                        <a target="_blank" rel="noopener noreferrer">
                           <button className={styles.contact_button}>
                              <FiMail size={22} />
                           </button>
                        </a>
                     </Link>
                     <Link href="https://wa.me/5491134290789">
                        <a target="_blank" rel="noopener noreferrer">
                           <button className={styles.contact_button}>
                              <FaWhatsapp size={22} />
                           </button>
                        </a>
                     </Link>
                     <Link href="https://github.com/damiponce">
                        <a target="_blank" rel="noopener noreferrer">
                           <button className={styles.contact_button}>
                              <FiGithub size={22} />
                           </button>
                        </a>
                     </Link>
                     <Link href="https://www.linkedin.com/in/damianponce">
                        <a target="_blank" rel="noopener noreferrer">
                           <button className={styles.contact_button}>
                              <FiLinkedin size={22} />
                           </button>
                        </a>
                     </Link>
                  </div>
               </div>
            </Section>
         </main>

         <footer className={styles.footer}>
            <p>
               {t('footer.built')}{' '}
               <b>
                  <a
                     href="https://github.com/damiponce/damiponce.github.io"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Damián Ponce <FiExternalLink />
                  </a>
               </b>
            </p>
         </footer>
      </div>
   );
};

export default Home;
