import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang="es" dir="ltr">
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
