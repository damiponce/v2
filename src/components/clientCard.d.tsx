export interface Client {
   title: string;
   desc: string;
   i18n: string;
   img: string;
   techs: string[];
   links: {
      github: string;
      website?: string;
   };
}
