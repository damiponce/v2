import React from 'react';
import styles from '../styles/bigCard.module.scss';
import TOML from '@ltd/j-toml';
import fs from 'fs';
import path from 'path';
import ThumborImage from './thumborImage';

interface BigCardType {
   config: { name: string; config: string };
   thumbor: string;
}

const CONFIGS_PATH = './configs/';

const BigCard: React.FC<BigCardType> = ({ config: cfg, thumbor }) => {
   const config = JSON.parse(cfg.config);
   console.log(config);

   let arrayCfg = [];
   for (const [key, value] of Object.entries(config.cards)) {
      arrayCfg.push({ area: key, data: value });
   }

   return (
      <div
         className={styles.main}
         // style={{ gridTemplateAreas: `"a a a" "b b b" "c c c"` }}
      >
         {arrayCfg.map(({ area, data }: { area: any; data: any }) => {
            switch (data.type) {
               case 'main':
                  return (
                     <div
                        className={styles.card + ' ' + styles.text}
                        style={{ gridArea: area }}
                     >
                        <h3>{data.title}</h3>
                        <p>{data.bio}</p>
                     </div>
                  );
               case 'image':
                  return (
                     <div
                        className={styles.card + ' ' + styles.image}
                        style={{ gridArea: area }}
                     >
                        <ThumborImage
                           width={400}
                           height={400}
                           src={data.image}
                           layout="fill"
                           sizes="(max-height: 1500px) 500px"
                           objectFit="cover"
                           thumborKey={thumbor}
                           // style={{ width: '100%', height: '100%' }}
                        />
                     </div>
                  );
            }
         })}
      </div>
   );
};

export default BigCard;
