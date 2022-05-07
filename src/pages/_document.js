import Document, { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '../next-i18next.config';

class Doc extends Document {
   render() {
      const currentLocale =
         this.props.__NEXT_DATA__.query.locale ||
         i18nextConfig.i18n.defaultLocale;
      return (
         <Html lang={currentLocale} dir="ltr">
            <Head>
               {/* <link rel="alternate" href="https://es.example.com/" hrefLang="es" />
            <link rel="alternate" href="https://example.com/" hrefLang="x-default" /> */}
               <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default Doc;
