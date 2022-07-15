import React from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/navbar';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import { ParallaxBanner } from 'react-scroll-parallax';
import ThumborImage from '../components/thumborImage';
import BigCard from '../components/bigCard';
import { Project } from '../components/projectCard.d';
// var Thumbor = require('thumbor');
// var thumbor = new Thumbor(
//    '4d7cccbd17064a12dd43021668679f7b488afd55aab1502e0ca8a55f5a8e2c0b',
//    'http://localhost:8888'
// );
import ProjectCardSmall from '../components/projectCardSmall';
import TOML from '@ltd/j-toml';
import fs from 'fs';
import ProjectCard from '../components/projectCard';
import Link from 'next/link';
import {
   FiChevronRight,
   FiChevronsRight,
   FiExternalLink,
   FiCornerDownRight,
} from 'react-icons/fi';

import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage, Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { dpr } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/dpr';

const myCld = new Cloudinary({ cloud: { cloudName: 'damiponce' } });

// export const getStaticProps: GetStaticProps = async (context) => {
//    let configs: { name: string; config: string }[] = [];

//    fs.readdirSync('./components/configs/').forEach((file) => {
//       configs.push({
//          name: file.replace('.toml', ''),
//          config: JSON.stringify(
//             TOML.parse(
//                fs.readFileSync(`./components/configs/${file}`, 'utf8'),
//                { joiner: '\n', bigint: false }
//             )
//          ),
//       });
//    });

//    var thumbor = process.env.THUMBOR_KEY;

//    return {
//       props: {
//          configs,
//          thumbor,
//       },
//    };
// };

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
   thumbor: any;
}

const Home: NextPage<HomeTypes> = ({ configs, thumbor }) => {
   // const headline: BannerLayer = {
   //    translateY: [0, 30],
   //    // scale: [1, 1.05, 'easeOutCubic'],
   //    shouldAlwaysCompleteAnimation: true,
   //    expanded: false,
   //    children: (
   //       <>
   //          {/* <div className="bg_blur" /> */}
   //          <div className="bg" />
   //       </>
   //    ),
   // };
   // console.log(JSON.parse(configs[2].config));

   let testConfig = require('../components/configs/projects.json');
   let projects: Project[] = [];
   for (const [key, value] of Object.entries(testConfig)) {
      //@ts-ignore
      projects.push(value);
   }

   // for (const [key, value] of Object.entries(
   //    JSON.parse(
   //       configs.find((cfg: any) => {
   //          return cfg.name === 'projects';
   //       }).config
   //    )
   // )) {
   //    //@ts-ignore
   //    projects.push(value);
   // }

   return (
      <div className={styles.container}>
         {/* <ParallaxBanner
            layers={[headline]}
            style={{
               position: 'absolute',
               top: 0,
               bottom: 0,
               left: 0,
               right: 0,
            }}
         /> */}
         {/* <div className="bg_blur" /> */}
         <div className="bg" />
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1, viewport-fit=cover"
            />
            <meta name="theme-color" content="#04141A"></meta>

            {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
            {/* <meta name="theme-color" content="#319197" /> */}
            <title>Portfolio v2</title>
            <meta name="description" content="" />
         </Head>
         <Navbar />

         <main className={styles.main}>
            <div className={styles.intro}>
               <h1 className={styles.title}>
                  <b>
                     Hola, soy
                     <br />
                  </b>
                  Damián Ponce.
               </h1>
               <p className={styles.description}>
                  Soy un desarrollador aficionado, y un diseñador gráfico y
                  fotógrafo por diversión.
                  {/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA. */}
               </p>
            </div>
            <Section
               name="Sobre mi"
               id="about"
               width="800px"
               gridCols="auto / 3fr 2fr"
            >
               <div>
                  <p>
                     Soy un técnico aviónico con intereses en la programación,
                     el diseño y la fotografía. Actualmente estoy estudiando
                     ingeniería electrónica. Soy una persona autodidacta, y muy
                     atenta a los detalles finos al momento de trabajar en
                     cualquier proyecto.
                     <br />
                     <br /> Algunos de los lenguajes y frameworks que manejo:
                  </p>
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
               {/* <ThumborImage
                  width={300}
                  height={300}
                  src={'dam-headshot.jpeg'}
                  style={{
                     borderRadius: '7%',
                  }}
                  thumborKey={thumbor}
               /> */}
            </Section>

            {/* <Section name="Diseño" id="design" width="1100px">
               <BigCard
                  config={configs.find((cfg: any) => {
                     return cfg.name === 'design';
                  })}
               />
            </Section> */}

            <Section name="Proyectos" id="projects" width="1000px">
               {projects.slice(0, 3).map((project) => {
                  return (
                     <ProjectCard
                        key={project.title}
                        project={project}
                        thumbor={thumbor}
                     />
                  );
               })}
               <div className={styles.projects_grid}>
                  {projects.slice(3).map((project) => {
                     return (
                        <ProjectCardSmall
                           key={project.title}
                           project={project}
                           thumbor={thumbor}
                        />
                     );
                  })}
               </div>
            </Section>

            <Section name="Contacto" id="contact" width="800px">
               <></>
            </Section>
         </main>

         <footer className={styles.footer}>
            {/* <p>
               Design heavily inspired by{' '}
               <b>
                  <a
                     href="https://brittanychiang.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Brittany Chiang <FiExternalLink />
                  </a>
               </b>
            </p> */}
            <p>
               Built from scratch by{' '}
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
