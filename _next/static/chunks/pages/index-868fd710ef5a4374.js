(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9274)}])},7850:function(e,t,i){"use strict";var a={translations:{en:i(6992),es:i(3682)},defaultLang:"en",useBrowserDefault:!0};e.exports=a},9274:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return z}});var a=i(5893),n=i(7294),r=i(9008),s=i(1673),o=i.n(s),c=i(1664),l=i(9899),d=i.n(l),u=i(3493),p=i.n(u),h=i(7039),m=i(5434),f=function(){var e=(0,n.useState)(0),t=e[0],i=e[1],r=(0,n.useState)(!0),s=r[0],o=r[1],l=(0,n.useState)(!1),u=(l[0],l[1]),f=(0,n.useState)(0),g=(f[0],f[1]),j=function(){if(!document.getElementById("js-menu").classList.contains(d().active)){var e=window.pageYOffset;g(window.scrollY),u(e<140),o(t>e),i(e)}};(0,n.useEffect)((function(){return window.addEventListener("scroll",j),function(){return window.removeEventListener("scroll",j)}}),[t,s,j]),(0,n.useEffect)((function(){var e=document.getElementById("js-header"),t=document.getElementById("js-menu"),i=document.getElementById("js-burger"),a=300;i.addEventListener("click",p()((function(){t.classList.contains(d().active)?setTimeout((function(){return t.classList.toggle(d().active)}),a):t.classList.toggle(d().active),e.classList.toggle(d().height)}),2*a))}),[]);var b=(0,h.$G)().t,_=[{name:b("navbar.about"),id:"about"},{name:b("navbar.projects"),id:"projects"},{name:b("navbar.contact"),id:"contact"}];return(0,a.jsxs)("header",{className:d().header+" "+(s?d().sticky:d().hidden),style:{height:"".concat(70,"px")},id:"js-header",children:[(0,a.jsx)("div",{className:d().logo,children:(0,a.jsx)(c.default,{href:"/",passHref:!0,children:(0,a.jsx)("img",{src:"/dp.svg",width:"30",height:"20",alt:""})})}),(0,a.jsx)("div",{className:d().spacer}),(0,a.jsx)("div",{className:d().burger,id:"js-burger",children:(0,a.jsx)("img",{src:"/burger.svg",width:"30",height:"20",alt:""})}),(0,a.jsxs)("div",{className:d().links,id:"js-menu",children:[_.map((function(e,t){var i=e.name,n=e.id;return(0,a.jsx)(c.default,{href:"#"+n,passHref:!0,children:(0,a.jsx)("a",{className:d().link,"data-text":"0".concat(t+1,"."),onClick:function(){document.getElementById("js-burger").dispatchEvent(new Event("click"))},children:i})},n)})),(0,a.jsx)(c.default,{href:"./".concat(b("resume")),passHref:!0,children:(0,a.jsx)("a",{className:d().link+" "+d().resume,target:"_blank",rel:"noopener noreferrer",children:b("navbar.resume")})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(h.Ww,{lang:"en",children:[(0,a.jsx)(m.$lZ,{size:22})," ",(0,a.jsx)("span",{children:"EN"})]}),(0,a.jsxs)(h.Ww,{lang:"es",children:[(0,a.jsx)(m.$lZ,{size:22}),(0,a.jsx)("span",{children:"ES"})]})]})]})]})},g=i(3583),j=i.n(g),b=i(6893),_=function(e){var t,i=e.project,n=(0,h.$G)().t;return(0,a.jsxs)("div",{className:j().main,children:[(0,a.jsxs)("div",{className:j().header,children:[(0,a.jsx)("h3",{children:n(i.i18n+".title")}),(0,a.jsx)("div",{className:j().links,children:(t=i.links.github,(0,a.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,a.jsx)(b.AlO,{})}))})]}),(0,a.jsx)("p",{children:n(i.i18n+".description")}),(0,a.jsx)("div",{className:j().techs,children:i.techs.map((function(e){return(0,a.jsx)("span",{children:e},e)}))})]})},x=i(9045),v=i.n(x),y=i(7410),w=i(1327),k=i(4627),N=i(1347),A=i(7637),S=new w.r({cloud:{cloudName:"damiponce"}}),I=function(e){return(0,a.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,a.jsx)(b.AlO,{})})},C=function(e){var t,i=e.project,n=(0,h.$G)().t;return(0,a.jsxs)("div",{className:v().main,children:[(0,a.jsxs)("div",{className:v().data,children:[(0,a.jsx)("h3",{children:n(i.i18n+".title")})," ",(0,a.jsx)("p",{children:n(i.i18n+".description")}),(0,a.jsx)("div",{className:v().techs,children:i.techs.map((function(e){return(0,a.jsx)("span",{children:e},e)}))}),(0,a.jsxs)("div",{className:v().links,children:[(t=i.links.github,(0,a.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,a.jsx)(b.uOf,{})})),"undefined"!==typeof i.links.website?I(i.links.website):null]})]}),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(y.pw,{className:v().image,cldImg:S.image(i.img).resize((0,k.hl)().width(600).gravity("face")).quality(95).delivery((0,N.uN)((0,A.d)()))})})]})},P=i(9583);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,n,r=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);s=!0);}catch(c){o=!0,n=c}finally{try{s||null==i.return||i.return()}finally{if(o)throw n}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=new w.r({cloud:{cloudName:"damiponce"}}),T=function(e){var t=e.children,i=e.name,n=e.id,r=e.width,s=e.gridCols;return(0,a.jsxs)("section",{className:o().section,id:n,style:{maxWidth:null!==r&&void 0!==r?r:"auto"},children:[(0,a.jsx)("h2",{children:i}),(0,a.jsx)("div",{style:{gridTemplate:s},children:t})]})},z=function(e){e.configs;var t=i(3810),n=[],s=!0,l=!1,d=void 0;try{for(var u,p=Object.entries(t)[Symbol.iterator]();!(s=(u=p.next()).done);s=!0){var m=O(u.value,2),g=(m[0],m[1]);n.push(g)}}catch(x){l=!0,d=x}finally{try{s||null==p.return||p.return()}finally{if(l)throw d}}var j=(0,h.$G)().t;return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsx)("div",{className:"bg"}),(0,a.jsxs)(r.default,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),(0,a.jsx)("meta",{name:"theme-color",content:"#04141A"}),(0,a.jsx)("title",{children:"Portfolio v2"}),(0,a.jsx)("meta",{name:"description",content:""})]}),(0,a.jsx)(f,{}),(0,a.jsxs)("main",{className:o().main,children:[(0,a.jsxs)("div",{className:o().intro,children:[(0,a.jsx)("h1",{className:o().title,children:j("intro.title")}),(0,a.jsx)("p",{className:o().description,children:j("intro.biography")})]}),(0,a.jsxs)(T,{name:j("about.title"),id:"about",width:"800px",gridCols:"auto / 3fr 2fr",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:j("about.description")}),(0,a.jsxs)("div",{className:o().proficiencies,children:[(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(b.Tfp,{})," HTML/CSS/SASS"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(b.Tfp,{})," JavaScript",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(b.w0f,{})," Typescript"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(b.w0f,{})," React"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(b.w0f,{})," React Native"]})]})]})]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(b.Tfp,{})," LaTeX"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(b.Tfp,{})," Python",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(b.w0f,{})," Pandas"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(b.w0f,{})," Matplotlib"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(b.w0f,{})," Numpy"]})]})]})]})]})]}),(0,a.jsx)(y.pw,{cldImg:H.image("dam-headshot_zs7crm.webp").resize((0,k.hl)().width(300).height(300).gravity("face")).quality(95).delivery((0,N.uN)((0,A.d)()))})]}),(0,a.jsxs)(T,{name:j("projects.title"),id:"projects",width:"1000px",children:[n.slice(0,2).map((function(e){return(0,a.jsx)(C,{project:e},e.title)})),(0,a.jsx)("div",{className:o().projects_grid,children:n.slice(2).map((function(e){return(0,a.jsx)(_,{project:e},e.title)}))})]}),(0,a.jsx)(T,{name:j("contact.title"),id:"contact",width:"600px",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:j("contact.description")}),(0,a.jsxs)("div",{className:o().contact_button_list,children:[(0,a.jsx)(c.default,{href:"mailto:dami.ponce8@gmail.com",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("button",{className:o().contact_button,children:(0,a.jsx)(b.Imn,{size:22})})})}),(0,a.jsx)(c.default,{href:"https://wa.me/5491134290789",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("button",{className:o().contact_button,children:(0,a.jsx)(P.xpo,{size:22})})})}),(0,a.jsx)(c.default,{href:"https://github.com/damiponce",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("button",{className:o().contact_button,children:(0,a.jsx)(b.uOf,{size:22})})})}),(0,a.jsx)(c.default,{href:"https://www.linkedin.com/in/damianponce",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("button",{className:o().contact_button,children:(0,a.jsx)(b.qOw,{size:22})})})})]})]})})]}),(0,a.jsx)("footer",{className:o().footer,children:(0,a.jsxs)("p",{children:[j("footer.built")," ",(0,a.jsx)("b",{children:(0,a.jsxs)("a",{href:"https://github.com/damiponce/damiponce.github.io",target:"_blank",rel:"noreferrer",children:["Dami\xe1n Ponce ",(0,a.jsx)(b.AlO,{})]})})]})})]})}},1673:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",intro:"Home_intro__TU_Sj",section:"Home_section__EaDnq",contact:"Home_contact__Tvs4T",proficiencies:"Home_proficiencies__4_5TZ",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc",projects_grid:"Home_projects_grid__6P26M",contact_button_list:"Home_contact_button_list__Zdx_K",contact_button:"Home_contact_button__Ojfo1"}},9899:function(e){e.exports={header:"navbar_header__BZkF_",sticky:"navbar_sticky__GvEDB",hidden:"navbar_hidden__DRTsv",copy:"navbar_copy__0kxA1",logo:"navbar_logo__rzLNJ",burger:"navbar_burger__jqXYs",links:"navbar_links__vPx8p",link:"navbar_link__VX3DS",resume:"navbar_resume__VS8Rj",height:"navbar_height__mxYvC",active:"navbar_active__vSOgC",spacer:"navbar_spacer__Eo1zi"}},9045:function(e){e.exports={main:"projectCard_main__51T6c",data:"projectCard_data__8npLV",techs:"projectCard_techs__jQCuG",links:"projectCard_links__yxoVs",image:"projectCard_image__LYkgk",blur:"projectCard_blur___1Y74"}},3583:function(e){e.exports={main:"projectCardSmall_main__OLAnf",header:"projectCardSmall_header__hWCEe",techs:"projectCardSmall_techs__mbiAe",links:"projectCardSmall_links__bDUkg",data:"projectCardSmall_data__or0lS"}},3810:function(e){"use strict";e.exports=JSON.parse('{"wppstats":{"title":"WhatsApp Stats","desc":"A purely frontend web app that calculates and displays various statistics from an imported WhatsApp chat history. Designed with user trust in mind, it does all of the processing in the browser so no amount of the (very personal) data is transferred outside of the user\'s computer.","i18n":"projects.wpp","img":"analyser_i6nf3f.webp","techs":["React (Next.js)","Python (Pandas)"],"links":{"github":"https://github.com/damiponce/chat-analyser","website":"https://damiponce.github.io/chat-analyser/"}},"v1":{"title":"Portfolio v1","desc":"My first try at making a personal website to show off my capabilities and skills. It\'s a bit of a mess, but it\'s a start.","i18n":"projects.portfolio","img":"v1_tjdpcv.png","techs":["React (Next.js)"],"links":{"github":"https://github.com/damiponce/v1","website":"https://damiponce.github.io/v1/"}},"notes":{"title":"Notee","desc":"A note-taking app for Android and iOS built with React Native and Firebase. It\'s a simple way to keep your notes in one place. It\'s free and open source.\\n A note-taking app for Android and iOS built with React Native and Firebase. It\'s a simple way to keep your notes in one place. It\'s free and open source.","i18n":"projects.notee","img":"dam-headshot_zs7crm.webp","techs":["React Native","Firebase","Android Studio","Xcode"],"links":{"github":"https://github.com/damiponce/notee"}},"weather":{"title":"Weather App","desc":"A website that displays the weather with data from a variety of weather APIs that the user can select.","i18n":"projects.weather","img":"sth.png","techs":["React (Next.js)"],"links":{"github":"https://github.com/damiponce/weather-web"}},"books":{"title":"Book sorting","desc":"A small and simple web app I created in high school to sort my notebooks most efficiently for daily use.","i18n":"projects.books","img":"dam-headshot.jpeg","techs":["Javascript","p5.js"],"links":{"github":"https://github.com/damiponce/book-sorting"}},"penpal":{"title":"PenWorld","desc":"","i18n":"projects.penworld","img":"sth.png","techs":["React Native","Firebase","Android Studio","Xcode"],"links":{"github":"https://github.com/damiponce/penworld"}},"morse":{"title":"Morse code generator","desc":"Made for a school fair project, it uses an text input to trigger a relay connected to a strobe light, made to show morse code at an airfield tower.","i18n":"projects.morse","img":"sth.png","techs":["Processing","Arduino"],"links":{"github":"https://github.com/damiponce/"}},"calculator":{"title":"Simple calculator","desc":"A very basic (pun intended) and rudimentary calculator. It was a school assignment so it\'s not very polished but some stuff works.","i18n":"projects.calc","img":"sth.png","techs":["Visual Basic"],"links":{"github":"https://github.com/damiponce/"}},"minesweeper":{"title":"Minesweeper","desc":"Tiny implementation of the classic Minesweeper game.","i18n":"projects.minesweeper","img":"sth.png","techs":["C"],"links":{"github":"https://github.com/damiponce/"}},"pendulum":{"title":"Double pendulum","desc":"","i18n":"projects.pendulum","img":"sth.png","techs":["Processing"],"links":{"github":"https://github.com/damiponce/"}}}')},6992:function(e){"use strict";e.exports=JSON.parse('{"resume":"cv_en.pdf","navbar":{"about":"About me","projects":"Projects","contact":"Contact","resume":"Resume"},"intro":{"title":"Hi, I am Dami\xe1n Ponce","biography":"I\'m an amateur developer, and a graphic designer and photographer for fun."},"about":{"title":"About me","description":"I\'m an avionics technician with interests in coding, design, and photography. I\'m currently studying electronical engineering. I am a very big self-learner, and tend to give attention to detail when working on something.\\n\\nSome of the languages and frameworks that I use:"},"projects":{"title":"Projects","wpp":{"title":"WhatsApp Stats","description":"A purely front-end web app that calculates and displays various statistics from an imported WhatsApp chat history. Designed with user trust in mind, it does all of the processing in the browser so no amount of the (very personal) data is transferred outside of the user\'s computer."},"notee":{"title":"Notee","description":"A note-taking app for Android and iOS built with React Native and Firebase. It\'s a simple way to keep your notes in one place. It\'s free and open source."},"penworld":{"title":"PenWorld","description":" "},"weather":{"title":"Weather App","description":"A website that displays the weather with data from a variety of weather APIs the user can select."},"portfolio":{"title":"Portfolio v1","description":"My first try at making a personal website to show off my capabilities and skills."},"books":{"title":"Book sorting","description":"A small and simple web app I created in high school to sort my notebooks most efficiently for daily use."},"morse":{"title":"Morse code generator","description":"Made for a school fair project, it uses an text input to trigger a relay connected to a strobe light, made to show morse code at an airfield tower."},"calc":{"title":"Simple calculator","description":"A very basic (pun intended) and rudimentary calculator. It was a school assignment so it\'s not very polished but some stuff works."},"minesweeper":{"title":"Minesweeper","description":"Tiny implementation of the classic Minesweeper game."},"pendulum":{"title":"Double pendulum","description":" "}},"contact":{"title":"Contact","description":"If you wish to contact me for hire or to work on a project, you can send an e-mail or a message through any of my socials:"},"footer":{"built":"Built from scratch by"}}')},3682:function(e){"use strict";e.exports=JSON.parse('{"resume":"cv.pdf","projects":{"notee":{"description":"Una aplicaci\xf3n para tomar notas para Android y iOS creada con React Native y Firebase. Es una manera simple de mantener tus notas en un solo lugar. Es gratis y open-source-","title":"Notee"},"morse":{"description":"Hecho para un proyecto de feria escolar, utiliza una entrada de texto para activar un rel\xe9 conectado a una luz estrobosc\xf3pica, hecho para mostrar el c\xf3digo morse en una torre de aer\xf3dromo.","title":"Generador de codigo morse"},"books":{"description":"Una aplicaci\xf3n web peque\xf1a y simple que cre\xe9 en la escuela secundaria para ordenar mis cuadernos de la manera m\xe1s eficiente para el uso diario.","title":"Ordena-cuadernos"},"calc":{"description":"Una calculadora muy b\xe1sica y rudimentaria. Era una tarea de la escuela, por lo que no est\xe1 muy pulida, pero algunas cosas funcionan.","title":"Calculadora sencilla"},"minesweeper":{"description":"Peque\xf1a implementaci\xf3n del cl\xe1sico juego Buscaminas.","title":"Buscaminas"},"pendulum":{"title":"P\xe9ndulo doble","description":" "},"penworld":{"title":"PenWorld","description":" "},"portfolio":{"description":"Mi primer intento de hacer un sitio web personal para mostrar mis capacidades y habilidades.","title":"Portfolio v1"},"title":"Proyectos","weather":{"title":"Aplicaci\xf3n del tiempo","description":"Un sitio web que muestra el clima con datos de una variedad de APIs meteorol\xf3gicas que el usuario puede seleccionar."},"wpp":{"title":"Estad\xedsticas de WhatsApp","description":"Una aplicaci\xf3n web front-end que calcula y muestra varias estad\xedsticas de un historial de chat de WhatsApp importado. Dise\xf1ado pensando en la confianza del usuario, realiza todo el procesamiento en el navegador, por lo que ninguna cantidad de los datos (muy personales) se transfiere fuera de la computadora del usuario."}},"about":{"title":"Sobre m\xed","description":"Soy un t\xe9cnico avi\xf3nico con intereses en la programaci\xf3n, el dise\xf1o y la fotograf\xeda. Actualmente estoy estudiando ingenier\xeda electr\xf3nica. Soy una persona autodidacta, y muy atenta a los detalles finos al momento de trabajar en cualquier proyecto.\\n\\nAlgunos de los lenguajes y frameworks que manejo:"},"contact":{"description":"Si deseas contactarte conmigo para contratarme o trabajar en alg\xfan proyecto, puedes enviarme un correo electr\xf3nico o un mensaje por alguna de mis redes:","title":"Contacto"},"footer":{"built":"Construido desde cero por"},"intro":{"title":"Hola, soy Dami\xe1n Ponce","biography":"Soy un desarrollador aficionado, y un dise\xf1ador gr\xe1fico y fot\xf3grafo por diversi\xf3n."},"navbar":{"about":"Sobre m\xed","contact":"Contacto","projects":"Proyectos","resume":"Curriculum"}}')}},function(e){e.O(0,[228,445,789,513,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);