(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9274)}])},9274:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return I}});var s=i(5893),n=i(7294),r=i(9008),a=i(1673),o=i.n(a),c=i(1664),l=i(9899),d=i.n(l),h=i(3493),u=i.n(h),m=function(){var e=(0,n.useState)(0),t=e[0],i=e[1],r=(0,n.useState)(!0),a=r[0],o=r[1],l=(0,n.useState)(!1),h=(l[0],l[1]),m=(0,n.useState)(0),p=(m[0],m[1]),f=function(){if(!document.getElementById("js-menu").classList.contains(d().active)){var e=window.pageYOffset;p(window.scrollY),h(e<140),o(t>e),i(e)}};(0,n.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[t,a,f]),(0,n.useEffect)((function(){var e=document.getElementById("js-header"),t=document.getElementById("js-menu"),i=document.getElementById("js-burger"),s=300;i.addEventListener("click",u()((function(){t.classList.contains(d().active)?setTimeout((function(){return t.classList.toggle(d().active)}),s):t.classList.toggle(d().active),e.classList.toggle(d().height)}),2*s))}),[]);return(0,s.jsxs)("header",{className:d().header+" "+(a?d().sticky:d().hidden),style:{height:"70px"},id:"js-header",children:[(0,s.jsx)("div",{className:d().logo,children:(0,s.jsx)(c.default,{href:"/",passHref:!0,children:(0,s.jsx)("img",{src:"/dp.svg",width:"30",height:"20",alt:""})})}),(0,s.jsx)("div",{className:d().spacer}),(0,s.jsx)("div",{className:d().burger,id:"js-burger",children:(0,s.jsx)("img",{src:"/burger.svg",width:"30",height:"20",alt:""})}),(0,s.jsx)("div",{className:d().links,id:"js-menu",children:[{name:"Sobre mi",id:"about"},{name:"Proyectos",id:"projects"},{name:"Contacto",id:"contact"}].map((function(e,t){var i=e.name,n=e.id;return(0,s.jsx)(c.default,{href:"#"+n,passHref:!0,children:(0,s.jsx)("a",{className:d().link,"data-text":"0".concat(t+1,"."),onClick:function(){document.getElementById("js-burger").dispatchEvent(new Event("click"))},children:i})},t)}))})]})},p=i(3583),f=i.n(p),g=i(7219),j=function(e){var t,i=e.project;e.thumbor;return(0,s.jsxs)("div",{className:f().main,children:[(0,s.jsxs)("div",{className:f().header,children:[(0,s.jsx)("h3",{children:i.title}),(0,s.jsx)("div",{className:f().links,children:(t=i.links.github,(0,s.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,s.jsx)(g.AlO,{})}))})]}),(0,s.jsx)("p",{children:i.desc}),(0,s.jsx)("div",{className:f().techs,children:i.techs.map((function(e){return(0,s.jsx)("span",{children:e},e)}))})]})},_=i(9045),x=i.n(_),b=i(7410),v=i(1327),y=i(4627),w=i(1347),k=i(7637),N=new v.r({cloud:{cloudName:"damiponce"}}),S=function(e){return(0,s.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,s.jsx)(g.AlO,{})})},A=function(e){var t,i=e.project;e.thumbor;return(0,s.jsxs)("div",{className:x().main,children:[(0,s.jsxs)("div",{className:x().data,children:[(0,s.jsx)("h3",{children:i.title})," ",(0,s.jsx)("p",{children:i.desc}),(0,s.jsx)("div",{className:x().techs,children:i.techs.map((function(e){return(0,s.jsx)("span",{children:e},e)}))}),(0,s.jsxs)("div",{className:x().links,children:[(t=i.links.github,(0,s.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,s.jsx)(g.uOf,{})})),"undefined"!==typeof i.links.website?S(i.links.website):null]})]}),(0,s.jsx)("div",{className:x().image,children:(0,s.jsx)(b.pw,{cldImg:N.image(i.img).resize((0,y.hl)().width(500).height(500).gravity("face")).quality(95).delivery((0,w.uN)((0,k.d)()))})})]})};function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var s,n,r=[],a=!0,o=!1;try{for(i=i.call(e);!(a=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(c){o=!0,n=c}finally{try{a||null==i.return||i.return()}finally{if(o)throw n}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return C(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=new v.r({cloud:{cloudName:"damiponce"}}),H=function(e){var t=e.children,i=e.name,n=e.id,r=e.width,a=e.gridCols;return(0,s.jsxs)("section",{className:o().section,id:n,style:{maxWidth:null!==r&&void 0!==r?r:"auto"},children:[(0,s.jsx)("h2",{children:i}),(0,s.jsx)("div",{style:{gridTemplate:a},children:t})]})},I=function(e){e.configs;var t=e.thumbor,n=i(3810),a=[],c=!0,l=!1,d=void 0;try{for(var h,u=Object.entries(n)[Symbol.iterator]();!(c=(h=u.next()).done);c=!0){var p=E(h.value,2),f=(p[0],p[1]);a.push(f)}}catch(_){l=!0,d=_}finally{try{c||null==u.return||u.return()}finally{if(l)throw d}}return(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsx)("div",{className:"bg"}),(0,s.jsxs)(r.default,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),(0,s.jsx)("meta",{name:"theme-color",content:"#04141A"}),(0,s.jsx)("title",{children:"Portfolio v2"}),(0,s.jsx)("meta",{name:"description",content:""})]}),(0,s.jsx)(m,{}),(0,s.jsxs)("main",{className:o().main,children:[(0,s.jsxs)("div",{className:o().intro,children:[(0,s.jsxs)("h1",{className:o().title,children:[(0,s.jsxs)("b",{children:["Hola, soy",(0,s.jsx)("br",{})]}),"Dami\xe1n Ponce."]}),(0,s.jsx)("p",{className:o().description,children:"Soy un desarrollador aficionado, y un dise\xf1ador gr\xe1fico y fot\xf3grafo por diversi\xf3n."})]}),(0,s.jsxs)(H,{name:"Sobre mi",id:"about",width:"800px",gridCols:"auto / 3fr 2fr",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Soy un t\xe9cnico avi\xf3nico con intereses en la programaci\xf3n, el dise\xf1o y la fotograf\xeda. Actualmente estoy estudiando ingenier\xeda electr\xf3nica. Soy una persona autodidacta, y muy atenta a los detalles finos al momento de trabajar en cualquier proyecto.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," Algunos de los lenguajes y frameworks que manejo:"]}),(0,s.jsxs)("div",{className:o().proficiencies,children:[(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(g.Tfp,{})," HTML/CSS/SASS"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(g.Tfp,{})," JavaScript",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(g.w0f,{})," Typescript"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(g.w0f,{})," React"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(g.w0f,{})," React Native"]})]})]})]}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(g.Tfp,{})," LaTeX"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(g.Tfp,{})," Python",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(g.w0f,{})," Pandas"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(g.w0f,{})," Matplotlib"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(g.w0f,{})," Numpy"]})]})]})]})]})]}),(0,s.jsx)(b.pw,{cldImg:T.image("dam-headshot_zs7crm.webp").resize((0,y.hl)().width(300).height(300).gravity("face")).quality(95).delivery((0,w.uN)((0,k.d)()))})]}),(0,s.jsxs)(H,{name:"Proyectos",id:"projects",width:"1000px",children:[a.slice(0,3).map((function(e){return(0,s.jsx)(A,{project:e,thumbor:t},e.title)})),(0,s.jsx)("div",{className:o().projects_grid,children:a.slice(3).map((function(e){return(0,s.jsx)(j,{project:e,thumbor:t},e.title)}))})]}),(0,s.jsx)(H,{name:"Contacto",id:"contact",width:"800px",children:(0,s.jsx)(s.Fragment,{})})]}),(0,s.jsx)("footer",{className:o().footer,children:(0,s.jsxs)("p",{children:["Built from scratch by"," ",(0,s.jsx)("b",{children:(0,s.jsxs)("a",{href:"https://github.com/damiponce/damiponce.github.io",target:"_blank",rel:"noreferrer",children:["Dami\xe1n Ponce ",(0,s.jsx)(g.AlO,{})]})})]})})]})}},1673:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",intro:"Home_intro__TU_Sj",section:"Home_section__EaDnq",contact:"Home_contact__Tvs4T",proficiencies:"Home_proficiencies__4_5TZ",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc",projects_grid:"Home_projects_grid__6P26M"}},9899:function(e){e.exports={header:"navbar_header__BZkF_",sticky:"navbar_sticky__GvEDB",hidden:"navbar_hidden__DRTsv",copy:"navbar_copy__0kxA1",logo:"navbar_logo__rzLNJ",burger:"navbar_burger__jqXYs",links:"navbar_links__vPx8p",link:"navbar_link__VX3DS",height:"navbar_height__mxYvC",active:"navbar_active__vSOgC",spacer:"navbar_spacer__Eo1zi"}},9045:function(e){e.exports={main:"projectCard_main__51T6c",data:"projectCard_data__8npLV",techs:"projectCard_techs__jQCuG",links:"projectCard_links__yxoVs",image:"projectCard_image__LYkgk"}},3583:function(e){e.exports={main:"projectCardSmall_main__OLAnf",header:"projectCardSmall_header__hWCEe",techs:"projectCardSmall_techs__mbiAe",links:"projectCardSmall_links__bDUkg",data:"projectCardSmall_data__or0lS"}},3810:function(e){"use strict";e.exports=JSON.parse('{"wppstats":{"title":"WhatsApp Stats","desc":"A purely frontend web app that calculates and displays various statistics from an imported WhatsApp chat history. Designed with user trust in mind, it does all of the processing in the browser so no amount of the (very personal) data is transferred outside of the user\'s computer.","img":"sth.png","techs":["React (Next.js)","Python (Pandas)"],"links":{"github":"https://github.com/damiponce/chat-analyser","website":"https://damiponce.github.io/chat-analyser/"}},"notes":{"title":"Notee","desc":"A note-taking app for Android and iOS built with React Native and Firebase. It\'s a simple way to keep your notes in one place. It\'s free and open source.\\n A note-taking app for Android and iOS built with React Native and Firebase. It\'s a simple way to keep your notes in one place. It\'s free and open source.","img":"dam-headshot_zs7crm.webp","techs":["React Native","Firebase","Android Studio","Xcode"],"links":{"github":"https://github.com/damiponce/notee"}},"penpal":{"title":"PenWorld","desc":"","img":"sth.png","techs":["React Native","Firebase","Android Studio","Xcode"],"links":{"github":"https://github.com/damiponce/penworld"}},"weather":{"title":"Weather App","desc":"A website that displays the weather with data from a variety of weather APIs that the user can select.","img":"sth.png","techs":["React (Next.js)"],"links":{"github":"https://github.com/damiponce/weather-web"}},"v1":{"title":"Portfolio v1","desc":"My first try at making a personal website to show off my capabilities and skills. It\'s a bit of a mess, but it\'s a start.","img":"dam-headshot.jpeg","techs":["React (Next.js)"],"links":{"github":"https://github.com/damiponce/v1","website":"https://damiponce.github.io/v1/"}},"books":{"title":"Book sorting","desc":"A small and simple web app I created in high school to sort my notebooks most efficiently for daily use.","img":"dam-headshot.jpeg","techs":["Javascript","p5.js"],"links":{"github":"https://github.com/damiponce/book-sorting"}},"morse":{"title":"Morse code generator","desc":"Made for a school fair project, it uses an text input to trigger a relay connected to a strobe light, made to show morse code at an airfield tower.","img":"sth.png","techs":["Processing","Arduino"],"links":{"github":"https://github.com/damiponce/"}},"calculator":{"title":"Simple calculator","desc":"A very basic (pun intended) and rudimentary calculator. It was a school assignment so it\'s not very polished but some stuff works.","img":"sth.png","techs":["Visual Basic"],"links":{"github":"https://github.com/damiponce/"}},"minesweeper":{"title":"Minesweeper","desc":"Tiny implementation of the classic Minesweeper game.","img":"sth.png","techs":["C"],"links":{"github":"https://github.com/damiponce/"}},"pendulum":{"title":"Double pendulum","desc":"","img":"sth.png","techs":["Processing"],"links":{"github":"https://github.com/damiponce/"}}}')}},function(e){e.O(0,[789,81,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);