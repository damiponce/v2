(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9274)}])},9274:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=n(5893),s=n(7294),r=n(9008),a=n(1673),o=n.n(a),c=n(1664),l=n(9899),d=n.n(l),h=n(3493),u=n.n(h),m=function(){var e=(0,s.useState)(0),t=e[0],n=e[1],r=(0,s.useState)(!0),a=r[0],o=r[1],l=(0,s.useState)(!1),h=(l[0],l[1]),m=(0,s.useState)(0),p=(m[0],m[1]),f=function(){if(!document.getElementById("js-menu").classList.contains(d().active)){var e=window.pageYOffset;p(window.scrollY),h(e<140),o(t>e),n(e)}};(0,s.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[t,a,f]),(0,s.useEffect)((function(){var e=document.getElementById("js-header"),t=document.getElementById("js-menu"),n=document.getElementById("js-burger"),i=300;n.addEventListener("click",u()((function(){t.classList.contains(d().active)?setTimeout((function(){return t.classList.toggle(d().active)}),i):t.classList.toggle(d().active),e.classList.toggle(d().height)}),2*i))}),[]);return(0,i.jsxs)("header",{className:d().header+" "+(a?d().sticky:d().hidden),style:{height:"70px"},id:"js-header",children:[(0,i.jsx)("div",{className:d().logo,children:(0,i.jsx)(c.default,{href:"/",passHref:!0,children:(0,i.jsx)("img",{src:"/dp.svg",width:"30",height:"20",alt:""})})}),(0,i.jsx)("div",{className:d().spacer}),(0,i.jsx)("div",{className:d().burger,id:"js-burger",children:(0,i.jsx)("img",{src:"/burger.svg",width:"30",height:"20",alt:""})}),(0,i.jsxs)("div",{className:d().links,id:"js-menu",children:[[{name:"Sobre mi",id:"about"},{name:"Proyectos",id:"projects"},{name:"Contacto",id:"contact"}].map((function(e,t){var n=e.name,s=e.id;return(0,i.jsx)(c.default,{href:"#"+s,passHref:!0,children:(0,i.jsx)("a",{className:d().link,"data-text":"0".concat(t+1,"."),onClick:function(){document.getElementById("js-burger").dispatchEvent(new Event("click"))},children:n})},t)})),(0,i.jsx)(c.default,{href:"https://github.com/damiponce/cv/raw/main/cv.pdf",passHref:!0,children:(0,i.jsx)("a",{className:d().link+" "+d().resume,children:"Curriculum"})})]})]})},p=n(3583),f=n.n(p),j=n(6893),_=function(e){var t,n=e.project;e.thumbor;return(0,i.jsxs)("div",{className:f().main,children:[(0,i.jsxs)("div",{className:f().header,children:[(0,i.jsx)("h3",{children:n.title}),(0,i.jsx)("div",{className:f().links,children:(t=n.links.github,(0,i.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(j.AlO,{})}))})]}),(0,i.jsx)("p",{children:n.desc}),(0,i.jsx)("div",{className:f().techs,children:n.techs.map((function(e){return(0,i.jsx)("span",{children:e},e)}))})]})},g=n(9045),x=n.n(g),b=n(7410),v=n(1327),y=n(4627),w=n(1347),k=n(7637),N=(new v.r({cloud:{cloudName:"damiponce"}}),function(e){return(0,i.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(j.AlO,{})})}),S=function(e){var t,n=e.project;e.thumbor;return(0,i.jsxs)("div",{className:x().main,children:[(0,i.jsxs)("div",{className:x().data,children:[(0,i.jsx)("h3",{children:n.title})," ",(0,i.jsx)("p",{children:n.desc}),(0,i.jsx)("div",{className:x().techs,children:n.techs.map((function(e){return(0,i.jsx)("span",{children:e},e)}))}),(0,i.jsxs)("div",{className:x().links,children:[(t=n.links.github,(0,i.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(j.uOf,{})})),"undefined"!==typeof n.links.website?N(n.links.website):null]})]}),(0,i.jsx)("div",{className:x().image,children:(0,i.jsx)("div",{children:" "})})]})},A=n(9583);function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,s,r=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(c){o=!0,s=c}finally{try{a||null==n.return||n.return()}finally{if(o)throw s}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=new v.r({cloud:{cloudName:"damiponce"}}),O=function(e){var t=e.children,n=e.name,s=e.id,r=e.width,a=e.gridCols;return(0,i.jsxs)("section",{className:o().section,id:s,style:{maxWidth:null!==r&&void 0!==r?r:"auto"},children:[(0,i.jsx)("h2",{children:n}),(0,i.jsx)("div",{style:{gridTemplate:a},children:t})]})},T=function(e){e.configs;var t=e.thumbor,s=n(3810),a=[],l=!0,d=!1,h=void 0;try{for(var u,p=Object.entries(s)[Symbol.iterator]();!(l=(u=p.next()).done);l=!0){var f=E(u.value,2),g=(f[0],f[1]);a.push(g)}}catch(x){d=!0,h=x}finally{try{l||null==p.return||p.return()}finally{if(d)throw h}}return(0,i.jsxs)("div",{className:o().container,children:[(0,i.jsx)("div",{className:"bg"}),(0,i.jsxs)(r.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),(0,i.jsx)("meta",{name:"theme-color",content:"#04141A"}),(0,i.jsx)("title",{children:"Portfolio v2"}),(0,i.jsx)("meta",{name:"description",content:""})]}),(0,i.jsx)(m,{}),(0,i.jsxs)("main",{className:o().main,children:[(0,i.jsxs)("div",{className:o().intro,children:[(0,i.jsxs)("h1",{className:o().title,children:[(0,i.jsxs)("b",{children:["Hola, soy",(0,i.jsx)("br",{})]}),"Dami\xe1n Ponce."]}),(0,i.jsx)("p",{className:o().description,children:"Soy un desarrollador aficionado, y un dise\xf1ador gr\xe1fico y fot\xf3grafo por diversi\xf3n."})]}),(0,i.jsxs)(O,{name:"Sobre mi",id:"about",width:"800px",gridCols:"auto / 3fr 2fr",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["Soy un t\xe9cnico avi\xf3nico con intereses en la programaci\xf3n, el dise\xf1o y la fotograf\xeda. Actualmente estoy estudiando ingenier\xeda electr\xf3nica. Soy una persona autodidacta, y muy atenta a los detalles finos al momento de trabajar en cualquier proyecto.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," Algunos de los lenguajes y frameworks que manejo:"]}),(0,i.jsxs)("div",{className:o().proficiencies,children:[(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(j.Tfp,{})," HTML/CSS/SASS"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(j.Tfp,{})," JavaScript",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(j.w0f,{})," Typescript"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(j.w0f,{})," React"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(j.w0f,{})," React Native"]})]})]})]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(j.Tfp,{})," LaTeX"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(j.Tfp,{})," Python",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(j.w0f,{})," Pandas"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(j.w0f,{})," Matplotlib"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(j.w0f,{})," Numpy"]})]})]})]})]})]}),(0,i.jsx)(b.pw,{cldImg:H.image("dam-headshot_zs7crm.webp").resize((0,y.hl)().width(300).height(300).gravity("face")).quality(95).delivery((0,w.uN)((0,k.d)()))})]}),(0,i.jsxs)(O,{name:"Proyectos",id:"projects",width:"1000px",children:[a.slice(0,3).map((function(e){return(0,i.jsx)(S,{project:e,thumbor:t},e.title)})),(0,i.jsx)("div",{className:o().projects_grid,children:a.slice(3).map((function(e){return(0,i.jsx)(_,{project:e,thumbor:t},e.title)}))})]}),(0,i.jsx)(O,{name:"Contacto",id:"contact",width:"600px",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Si deseas contactarte conmigo para contratarme o trabajar en alg\xfan proyecto, puedes enviarme un correo electr\xf3nico o un mensaje por alguna de mis redes:"}),(0,i.jsxs)("div",{className:o().contact_button_list,children:[(0,i.jsx)(c.default,{href:"mailto:dami.ponce8@gmail.com",children:(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("button",{className:o().contact_button,children:(0,i.jsx)(j.Imn,{size:22})})})}),(0,i.jsx)(c.default,{href:"https://wa.me/5491134290789",children:(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("button",{className:o().contact_button,children:(0,i.jsx)(A.xpo,{size:22})})})}),(0,i.jsx)(c.default,{href:"https://github.com/damiponce",children:(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("button",{className:o().contact_button,children:(0,i.jsx)(j.uOf,{size:22})})})}),(0,i.jsx)(c.default,{href:"https://www.linkedin.com/in/damianponce",children:(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("button",{className:o().contact_button,children:(0,i.jsx)(j.qOw,{size:22})})})})]})]})})]}),(0,i.jsx)("footer",{className:o().footer,children:(0,i.jsxs)("p",{children:["Built from scratch by"," ",(0,i.jsx)("b",{children:(0,i.jsxs)("a",{href:"https://github.com/damiponce/damiponce.github.io",target:"_blank",rel:"noreferrer",children:["Dami\xe1n Ponce ",(0,i.jsx)(j.AlO,{})]})})]})})]})}},1673:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",intro:"Home_intro__TU_Sj",section:"Home_section__EaDnq",contact:"Home_contact__Tvs4T",proficiencies:"Home_proficiencies__4_5TZ",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc",projects_grid:"Home_projects_grid__6P26M",contact_button_list:"Home_contact_button_list__Zdx_K",contact_button:"Home_contact_button__Ojfo1"}},9899:function(e){e.exports={header:"navbar_header__BZkF_",sticky:"navbar_sticky__GvEDB",hidden:"navbar_hidden__DRTsv",copy:"navbar_copy__0kxA1",logo:"navbar_logo__rzLNJ",burger:"navbar_burger__jqXYs",links:"navbar_links__vPx8p",link:"navbar_link__VX3DS",resume:"navbar_resume__VS8Rj",height:"navbar_height__mxYvC",active:"navbar_active__vSOgC",spacer:"navbar_spacer__Eo1zi"}},9045:function(e){e.exports={main:"projectCard_main__51T6c",data:"projectCard_data__8npLV",techs:"projectCard_techs__jQCuG",links:"projectCard_links__yxoVs",image:"projectCard_image__LYkgk"}},3583:function(e){e.exports={main:"projectCardSmall_main__OLAnf",header:"projectCardSmall_header__hWCEe",techs:"projectCardSmall_techs__mbiAe",links:"projectCardSmall_links__bDUkg",data:"projectCardSmall_data__or0lS"}},3810:function(e){"use strict";e.exports=JSON.parse('{"wppstats":{"title":"WhatsApp Stats","desc":"A purely frontend web app that calculates and displays various statistics from an imported WhatsApp chat history. Designed with user trust in mind, it does all of the processing in the browser so no amount of the (very personal) data is transferred outside of the user\'s computer.","img":"sth.png","techs":["React (Next.js)","Python (Pandas)"],"links":{"github":"https://github.com/damiponce/chat-analyser","website":"https://damiponce.github.io/chat-analyser/"}},"notes":{"title":"Notee","desc":"A note-taking app for Android and iOS built with React Native and Firebase. It\'s a simple way to keep your notes in one place. It\'s free and open source.\\n A note-taking app for Android and iOS built with React Native and Firebase. It\'s a simple way to keep your notes in one place. It\'s free and open source.","img":"dam-headshot_zs7crm.webp","techs":["React Native","Firebase","Android Studio","Xcode"],"links":{"github":"https://github.com/damiponce/notee"}},"penpal":{"title":"PenWorld","desc":"","img":"sth.png","techs":["React Native","Firebase","Android Studio","Xcode"],"links":{"github":"https://github.com/damiponce/penworld"}},"weather":{"title":"Weather App","desc":"A website that displays the weather with data from a variety of weather APIs that the user can select.","img":"sth.png","techs":["React (Next.js)"],"links":{"github":"https://github.com/damiponce/weather-web"}},"v1":{"title":"Portfolio v1","desc":"My first try at making a personal website to show off my capabilities and skills. It\'s a bit of a mess, but it\'s a start.","img":"dam-headshot.jpeg","techs":["React (Next.js)"],"links":{"github":"https://github.com/damiponce/v1","website":"https://damiponce.github.io/v1/"}},"books":{"title":"Book sorting","desc":"A small and simple web app I created in high school to sort my notebooks most efficiently for daily use.","img":"dam-headshot.jpeg","techs":["Javascript","p5.js"],"links":{"github":"https://github.com/damiponce/book-sorting"}},"morse":{"title":"Morse code generator","desc":"Made for a school fair project, it uses an text input to trigger a relay connected to a strobe light, made to show morse code at an airfield tower.","img":"sth.png","techs":["Processing","Arduino"],"links":{"github":"https://github.com/damiponce/"}},"calculator":{"title":"Simple calculator","desc":"A very basic (pun intended) and rudimentary calculator. It was a school assignment so it\'s not very polished but some stuff works.","img":"sth.png","techs":["Visual Basic"],"links":{"github":"https://github.com/damiponce/"}},"minesweeper":{"title":"Minesweeper","desc":"Tiny implementation of the classic Minesweeper game.","img":"sth.png","techs":["C"],"links":{"github":"https://github.com/damiponce/"}},"pendulum":{"title":"Double pendulum","desc":"","img":"sth.png","techs":["Processing"],"links":{"github":"https://github.com/damiponce/"}}}')}},function(e){e.O(0,[445,789,805,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);