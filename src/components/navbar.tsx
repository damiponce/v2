import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.scss';
import throttle from 'lodash/throttle';

import {
   useTranslation,
   useLanguageQuery,
   LanguageSwitcher,
} from 'next-export-i18n';
import { MdLanguage } from 'react-icons/md';

const Navbar = () => {
   const NAVBAR_HEIGHT = 70;
   const [prevScrollPos, setPrevScrollPos] = useState(0);
   const [scrolled, setScrolled] = useState(true);
   const [atTop, setAtTop] = useState(false);
   const [scrollY, setScrollY] = useState(0);

   const handleScroll = () => {
      let mainNav = document.getElementById('js-menu')!;
      if (mainNav.classList.contains(styles.active)) return;
      // mainNav.classList.contains(styles.active)
      //    ? mainNav.classList.toggle(styles.active)
      //    : null;

      const currentScrollPos = window.pageYOffset;
      setScrollY(window.scrollY);
      // console.log('~~~~~~~~');
      // console.log('Current pos: ' + currentScrollPos);
      // console.log('Previous pos: ' + prevScrollPos);
      // console.log('Is visible: ' + scrolled);

      setAtTop(currentScrollPos < 2 * NAVBAR_HEIGHT);
      setScrolled(
         prevScrollPos > currentScrollPos
         // || currentScrollPos < NAVBAR_HEIGHT
      );
      setPrevScrollPos(currentScrollPos);
   };

   useEffect(() => {
      // console.log(prevScrollPos, scrolled);

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [prevScrollPos, scrolled, handleScroll]);

   useEffect(() => {
      let header = document.getElementById('js-header')!;
      let mainNav = document.getElementById('js-menu')!;
      let navBarToggle = document.getElementById('js-burger')!;

      const TIMEOUT = 300; // change (in ms) with .header <navbar.module.scss> transition

      function clicked() {
         mainNav.classList.contains(styles.active)
            ? setTimeout(() => mainNav.classList.toggle(styles.active), TIMEOUT)
            : mainNav.classList.toggle(styles.active);
         header.classList.toggle(styles.height);
      }

      navBarToggle.addEventListener('click', throttle(clicked, TIMEOUT * 2));
   }, []);

   const { t } = useTranslation();
   const [query] = useLanguageQuery();

   const links = [
      { name: t('navbar.about'), id: 'about' },
      { name: t('navbar.projects'), id: 'projects' },
      { name: t('navbar.contact'), id: 'contact' },
   ];

   return (
      <header
         className={
            styles.header + ' ' + (scrolled ? styles.sticky : styles.hidden)
         }
         style={{
            // // top: visible ? '0' : '-60px',
            // top: 0,
            // transform: `translate3d(0, ${
            //    visible ? 0 : -1 * NAVBAR_HEIGHT
            // }px, 0)`,
            height: NAVBAR_HEIGHT + 'px',
         }}
         id="js-header"
      >
         <div className={styles.logo}>
            <Link href="/" passHref>
               <img src="/dp.svg" width="30" height="20" alt="" />
            </Link>
         </div>
         <div className={styles.spacer}></div>
         <div className={styles.burger} id="js-burger">
            <img src="/burger.svg" width="30" height="20" alt="" />
         </div>
         <div className={styles.links} id="js-menu">
            {links.map(({ name, id }, index) => {
               return (
                  <Link href={'#' + id} passHref key={index}>
                     <a
                        className={styles.link}
                        data-text={`0${index + 1}.`}
                        onClick={() => {
                           document
                              .getElementById('js-burger')!
                              .dispatchEvent(new Event('click'));
                        }}
                     >
                        {name}
                     </a>
                  </Link>
               );
            })}
            <Link
               href={'https://github.com/damiponce/cv/raw/main/cv.pdf'}
               passHref
            >
               <a className={styles.link + ' ' + styles.resume}>
                  {t('navbar.resume')}
               </a>
            </Link>
            <div>
               <LanguageSwitcher lang={'en'}>
                  <MdLanguage size={22} /> <span>EN</span>
               </LanguageSwitcher>
               <LanguageSwitcher lang={'es'}>
                  <MdLanguage size={22} />
                  <span>ES</span>
               </LanguageSwitcher>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
