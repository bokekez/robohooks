(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var a=r(1),l=r(0),n=r.n(l),c=r(9),i=r.n(c),s=(r(22),r(3)),o=function(e,t){var r=e.name,l=e.email,n=e.website,c=e.id;return"light"===e.theme?Object(a.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 black",children:[Object(a.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"f5",children:r}),Object(a.jsx)("p",{className:"f6",children:l}),Object(a.jsx)("p2",{className:"f6",children:n})]})]}):"dark"===e.theme?Object(a.jsxs)("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 black",children:[Object(a.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"f5",children:r}),Object(a.jsx)("p",{className:"f6",children:l}),Object(a.jsx)("p2",{className:"f6",children:n})]})]}):"gray"===e.theme?Object(a.jsxs)("div",{className:"tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 black",children:[Object(a.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"f5",children:r}),Object(a.jsx)("p",{className:"f6",children:l}),Object(a.jsx)("p2",{className:"f6",children:n})]})]}):Object(a.jsxs)("div",{className:"tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"f5",children:r}),Object(a.jsx)("p",{className:"f6",children:l}),Object(a.jsx)("p2",{className:"f6",children:n})]})]})},h=function(e){var t=e.robots,r=e.theme,l=t.map((function(e,l){return Object(a.jsx)(o,{theme:r,id:t[l].id,name:t[l].name,email:t[l].email,website:t[l].website},l)}));return Object(a.jsx)("div",{theme:r,children:l})},m=function(e){var t=e.searchfield,r=e.searchChange,l=e.theme;return"light"===l?Object(a.jsxs)("div",{className:"tc pa2",children:[Object(a.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:r,value:t}),Object(a.jsx)("p",{class:"tc pa1 f7 near-white",children:" search robots by name, email or website "})]}):"dark"===l?Object(a.jsxs)("div",{className:"tc pa2",children:[Object(a.jsx)("input",{className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"search robots",onChange:r,value:t}),Object(a.jsx)("p",{class:"tc pa1 f7 near-white",children:" search robots by name, email or website "})]}):"gray"===l?Object(a.jsxs)("div",{className:"tc pa2",children:[Object(a.jsx)("input",{className:"pa3 ba b--green bg-light-gray",type:"search",placeholder:"search robots",onChange:r,value:t}),Object(a.jsx)("p",{class:"tc pa1 f7 near-white",children:" search robots by name, email or website "})]}):void 0},d=(r(23),r(10)),f=r(11),b=r(16),p=r(15),g=function(e){Object(b.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(d.a)(this,r),(a=t.call(this,e)).state={hasError:!1},a}return Object(f.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Ooooops. That is not good"}):this.props.children}}]),r}(l.Component),u=r(2),j={body:"linear-gradient(to left, rgba(7,27,82,1)0%, rgba(0,128,128,1) 100%)",text:"#0ccac4",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},x={body:"linear-gradient(90deg, rgba(15,48,164,1) 5%, rgba(14,137,232,1) 40%, rgba(0,212,255,1) 100%);",text:"blue",toggleBorder:"#FFF",gradient:"linear-gradient(90deg, rgba(110,175,214,1) 11%, rgba(91,127,254,1) 100%);"},v={body:"linear-gradient(90deg, rgba(77,73,74,1) 11%, rgba(162,164,172,1) 100%);",text:"darkgray",toggleBorder:"#FFF",gradient:"linear-gradient(90deg, rgba(77,73,74,1) 11%, rgba(135,161,146,1) 100%);"},O=r(4);function E(){var e=Object(O.a)(["\n  // *,\n  // *::after,\n  // *::before {\n  //   box-sizing: border-box;\n  // }\n\n  body {\n    align-items: center;\n    background: ",";\n    color: ",";\n    //display: flex;\n    // flex-direction: column;\n    // justify-content: center;\n    // height: 100vh;\n    // margin: 0;\n    // padding: 0;\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    transition: all 1s linear;\n }\n}\n"]);return E=function(){return e},e}var y=Object(u.b)(E(),(function(e){return e.theme.body}),(function(e){return e.theme.text}));function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var _=l.createElement("path",{d:"m203.039062 388.414062h105.929688v78.71875h-105.929688zm0 0",fill:"#2c2f38"}),S=l.createElement("path",{d:"m356.878906 423.726562h-201.746094c-14.257812 0-27.632812 1.941407-35.921874-9.65625l-30.929688-43.308593h335.445312l-30.894531 43.308593c-8.324219 11.597657-21.699219 9.65625-35.953125 9.65625zm0 0",fill:"#4c8056"}),G=l.createElement("path",{d:"m172.140625 459.035156h167.726563c12.1875 0 22.066406 9.882813 22.066406 22.070313s-9.878906 22.070312-22.066406 22.070312h-167.726563c-12.1875 0-22.066406-9.882812-22.066406-22.070312s9.878906-22.070313 22.066406-22.070313zm0 0",fill:"#4c8056"}),k=l.createElement("g",{fill:"#a5a5a4"},l.createElement("path",{d:"m26.488281 286.898438c-4.875 0-8.828125-3.953126-8.828125-8.828126v-17.65625c0-19.5 15.808594-35.308593 35.308594-35.308593h8.828125c4.875 0 8.828125 3.953125 8.828125 8.828125s-3.953125 8.828125-8.828125 8.828125h-8.828125c-9.75 0-17.652344 7.902343-17.652344 17.652343v17.65625c0 4.875-3.953125 8.828126-8.828125 8.828126zm0 0"}),l.createElement("path",{d:"m26.488281 392.828125c-4.875 0-8.828125-3.949219-8.828125-8.824219v-52.96875c0-4.875 3.953125-8.824218 8.828125-8.824218s8.828125 3.949218 8.828125 8.824218v52.96875c0 4.875-3.953125 8.824219-8.828125 8.824219zm0 0"}),l.createElement("path",{d:"m44.140625 445.796875c-4.875 0-8.824219-3.953125-8.824219-8.828125v-17.65625h-17.65625v17.65625c0 4.875-3.953125 8.828125-8.828125 8.828125s-8.82812475-3.953125-8.82812475-8.828125v-17.65625c0-9.75 7.90624975-17.65625 17.65624975-17.65625h17.65625c9.75 0 17.652344 7.90625 17.652344 17.65625v17.65625c0 4.875-3.953125 8.828125-8.828125 8.828125zm0 0"})),I=l.createElement("path",{d:"m1.574219 419.542969c-1.558594-4.367188-1.96875-9.058594-1.191407-13.628907 2.324219-13.582031 14.671876-23.113281 28.398438-21.917968 13.726562 1.191406 24.242188 12.710937 24.1875 26.488281.003906 2.785156-.429688 5.550781-1.277344 8.203125-2.480468 6.996094-9.160156 11.617188-16.578125 11.472656h-17.339843c-7.085938.1875-13.542969-4.042968-16.199219-10.617187zm0 0",fill:"#4fba6f"}),D=l.createElement("path",{d:"m52.96875 304.554688c0 14.625-11.855469 26.480468-26.480469 26.480468-14.628906 0-26.48437475-11.855468-26.48437475-26.480468s11.85546875-26.484376 26.48437475-26.484376c14.625 0 26.480469 11.859376 26.480469 26.484376zm0 0",fill:"#4fba6f"}),N=l.createElement("path",{d:"m485.519531 286.898438c-4.875 0-8.824219-3.953126-8.824219-8.828126v-17.65625c0-9.75-7.90625-17.652343-17.65625-17.652343h-8.828124c-4.875 0-8.828126-3.953125-8.828126-8.828125s3.953126-8.828125 8.828126-8.828125h8.828124c19.5 0 35.308594 15.808593 35.308594 35.308593v17.65625c0 4.875-3.949218 8.828126-8.828125 8.828126zm0 0",fill:"#a5a5a4"}),U=l.createElement("path",{d:"m485.519531 392.828125c-4.875 0-8.824219-3.949219-8.824219-8.824219v-52.96875c0-4.875 3.949219-8.824218 8.824219-8.824218 4.878907 0 8.828125 3.949218 8.828125 8.824218v52.96875c0 4.875-3.949218 8.824219-8.828125 8.824219zm0 0",fill:"#a5a5a4"}),V=l.createElement("path",{d:"m503.175781 445.796875c-4.875 0-8.828125-3.953125-8.828125-8.828125v-17.65625h-17.652344v17.65625c0 4.875-3.953124 8.828125-8.828124 8.828125s-8.828126-3.953125-8.828126-8.828125v-17.65625c0-9.75 7.902344-17.65625 17.65625-17.65625h17.652344c9.753906 0 17.65625 7.90625 17.65625 17.65625v17.65625c0 4.875-3.953125 8.828125-8.828125 8.828125zm0 0",fill:"#a5a5a4"}),C=l.createElement("path",{d:"m460.609375 419.542969c-1.558594-4.367188-1.96875-9.058594-1.191406-13.628907 2.324219-13.582031 14.671875-23.113281 28.398437-21.917968 13.726563 1.191406 24.242188 12.710937 24.1875 26.488281.003906 2.785156-.429687 5.550781-1.28125 8.203125-2.476562 6.996094-9.15625 11.617188-16.578125 11.472656h-17.335937c-7.085938.1875-13.542969-4.042968-16.199219-10.617187zm0 0",fill:"#4fba6f"}),H=l.createElement("path",{d:"m512.003906 304.554688c0 14.625-11.855468 26.480468-26.484375 26.480468-14.625 0-26.480469-11.855468-26.480469-26.480468s11.855469-26.484376 26.480469-26.484376c14.628907 0 26.484375 11.859376 26.484375 26.484376zm0 0",fill:"#4fba6f"}),F=l.createElement("path",{d:"m185.382812 169.058594h141.242188v73.703125h-141.242188zm0 0",fill:"#4c8056"}),B=l.createElement("path",{d:"m149.277344 69.828125c-2.339844.007813-4.589844-.925781-6.238282-2.585937l-30.898437-30.898438c-3.453125-3.445312-3.460937-9.039062-.011719-12.492188 3.445313-3.457031 9.039063-3.460937 12.496094-.015624l30.894531 30.898437c2.542969 2.519531 3.308594 6.328125 1.941407 9.640625-1.367188 3.308594-4.601563 5.464844-8.183594 5.453125zm0 0",fill:"#a5a5a4"}),T=l.createElement("path",{d:"m123.589844 17.65625c0 9.75-7.902344 17.65625-17.65625 17.65625-9.75 0-17.652344-7.90625-17.652344-17.65625s7.902344-17.65234375 17.652344-17.65234375c9.753906 0 17.65625 7.90234375 17.65625 17.65234375zm0 0",fill:"#f3d55b"}),P=l.createElement("path",{d:"m362.730469 69.828125c-3.582031.011719-6.816407-2.144531-8.183594-5.453125-1.367187-3.3125-.601563-7.121094 1.941406-9.640625l30.898438-30.898437c2.234375-2.234376 5.488281-3.105469 8.542969-2.289063 3.050781.820313 5.433593 3.203125 6.253906 6.253906.816406 3.054688-.054688 6.308594-2.289063 8.542969l-30.898437 30.898438c-1.65625 1.667968-3.914063 2.601562-6.265625 2.585937zm0 0",fill:"#a5a5a4"}),L=l.createElement("path",{d:"m423.726562 17.65625c0 9.75-7.902343 17.65625-17.652343 17.65625s-17.65625-7.90625-17.65625-17.65625 7.90625-17.65234375 17.65625-17.65234375 17.652343 7.90234375 17.652343 17.65234375zm0 0",fill:"#f3d55b"}),R=l.createElement("path",{d:"m88.28125 260.414062c-12.964844-.007812-24.015625-9.398437-26.117188-22.191406-2.097656-12.792968 5.371094-25.226562 17.652344-29.378906 12.28125-4.148438 25.761719 1.199219 31.855469 12.644531zm0 0",fill:"#4fba6f"}),Y=l.createElement("path",{d:"m400.335938 221.488281c6.09375-11.445312 19.574218-16.792969 31.855468-12.644531 12.28125 4.152344 19.75 16.585938 17.652344 29.378906-2.097656 12.792969-13.152344 22.183594-26.117188 22.191406zm0 0",fill:"#4fba6f"}),A=l.createElement("path",{d:"m247.175781 17.65625h17.65625c73.128907 0 132.414063 59.285156 132.414063 132.414062h-282.484375c0-73.128906 59.285156-132.414062 132.414062-132.414062zm0 0",fill:"#7ed09e"}),J=l.createElement("path",{d:"m114.761719 145.65625h282.484375c9.75 0 17.65625 7.90625 17.65625 17.65625s-7.90625 17.65625-17.65625 17.65625h-282.484375c-9.75 0-17.652344-7.90625-17.652344-17.65625s7.902344-17.65625 17.652344-17.65625zm0 0",fill:"#4fba6f"}),M=l.createElement("path",{d:"m203.039062 114.761719c-4.875 0-8.828124-3.953125-8.828124-8.828125v-26.484375c0-4.875 3.953124-8.828125 8.828124-8.828125s8.828126 3.953125 8.828126 8.828125v26.484375c0 4.875-3.953126 8.828125-8.828126 8.828125zm0 0",fill:"#2c2f38"}),W=l.createElement("path",{d:"m308.96875 114.761719c-4.875 0-8.828125-3.953125-8.828125-8.828125v-26.484375c0-4.875 3.953125-8.828125 8.828125-8.828125s8.828125 3.953125 8.828125 8.828125v26.484375c0 4.875-3.953125 8.828125-8.828125 8.828125zm0 0",fill:"#2c2f38"}),X=l.createElement("path",{d:"m88.28125 344.277344v-83.863282c0-24.375 19.761719-44.136718 44.136719-44.136718h247.171875c24.378906 0 44.136718 19.761718 44.136718 44.136718v83.863282zm0 0",fill:"#7ed09e"}),$=l.createElement("path",{d:"m88.28125 339.863281h335.445312c9.753907 0 17.65625 7.90625 17.65625 17.65625s-7.902343 17.65625-17.65625 17.65625h-335.445312c-9.75 0-17.65625-7.90625-17.65625-17.65625s7.90625-17.65625 17.65625-17.65625zm0 0",fill:"#4fba6f"}),q=l.createElement("path",{d:"m185.382812 251.589844h141.242188c14.625 0 26.484375 11.855468 26.484375 26.480468s-11.859375 26.484376-26.484375 26.484376h-141.242188c-14.625 0-26.480468-11.859376-26.480468-26.484376s11.855468-26.480468 26.480468-26.480468zm0 0",fill:"#e6e7e8"}),K=l.createElement("path",{d:"m132.417969 278.070312c0 4.875-3.953125 8.828126-8.828125 8.828126s-8.828125-3.953126-8.828125-8.828126 3.953125-8.828124 8.828125-8.828124 8.828125 3.953124 8.828125 8.828124zm0 0",fill:"#2c2f38"}),Q=l.createElement("path",{d:"m397.246094 278.070312c0 4.875-3.953125 8.828126-8.828125 8.828126s-8.828125-3.953126-8.828125-8.828126 3.953125-8.828124 8.828125-8.828124 8.828125 3.953124 8.828125 8.828124zm0 0",fill:"#2c2f38"}),Z=l.createElement("path",{d:"m211.867188 313.382812c-4.875 0-8.828126-3.953124-8.828126-8.828124v-52.964844c0-4.875 3.953126-8.828125 8.828126-8.828125s8.828124 3.953125 8.828124 8.828125v52.964844c0 4.875-3.953124 8.828124-8.828124 8.828124zm0 0",fill:"#ff5364"});function ee(e,t){var r=e.title,a=e.titleId,n=z(e,["title","titleId"]);return l.createElement("svg",w({height:"512pt",viewBox:"0 -4 512.00441 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,_,S,G,k,I,D,N,U,V,C,H,F,B,T,P,L,R,Y,A,J,M,W,X,$,q,K,Q,Z)}var te=l.forwardRef(ee);r.p;function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var le=l.createElement("g",null,l.createElement("path",{d:"m120 180h-30l-10-16.167 10-13.833h30l10 14z",fill:"#4b5586"}),l.createElement("path",{d:"m60 287.58v-32.58l-15-10-15 10v32.58l-30 42.42v30h30v-30l15-15 15 15v30h30v-30z",fill:"#4b5586"}),l.createElement("path",{d:"m90 255h-90v-135h90z",fill:"#fc6363"}),l.createElement("path",{d:"m390 180h30l10-15-10-15h-30l-10 15z",fill:"#4b5586"}),l.createElement("path",{d:"m480 287.58v-32.58l-15-10-15 10v32.58l-30 42.42v30h30v-30l15-15 15 15v30h30v-30z",fill:"#4b5586"}),l.createElement("path",{d:"m420 120h90v135h-90z",fill:"#e63950"}),l.createElement("path",{d:"m240 435-47.499 10-42.501-10v-75l45-10 45 10z",fill:"#4b5586"}),l.createElement("path",{d:"m240 510h-120v-75h120z",fill:"#fcbf00"}),l.createElement("path",{d:"m270 435 45 10 45-10v-75l-45-10-45 10z",fill:"#4b5586"}),l.createElement("path",{d:"m270 435h120v75h-120z",fill:"#ff9200"}),l.createElement("path",{d:"m180 75h-30v-30h30l10 15z",fill:"#293e65"}),l.createElement("path",{d:"m330 75h30v-30h-30l-10 15z",fill:"#293e65"}),l.createElement("path",{d:"m180 0v120l37.5 10 37.5-10 10-60-10-60z",fill:"#fcbf00"}),l.createElement("path",{d:"m330 0h-75v120l37.5 10 37.5-10z",fill:"#ff9200"}),l.createElement("path",{d:"m120 120v120l37.001 9 37.999-9 60-60 10-30-10-30z",fill:"#25d9f8"}),l.createElement("path",{d:"m390 120h-135v60l60 60 37.333 10 37.667-10z",fill:"#00bdef"}),l.createElement("path",{d:"m120 240v120h135l10-28.333-10-31.667-60-60z",fill:"#00bdef"}),l.createElement("path",{d:"m390 240h-75l-60 60v60h135z",fill:"#009ae4"}),l.createElement("path",{d:"m195 240c0 33.083 26.915 60 60 60l10-60-10-60c-33.083 0-60 26.915-60 60z",fill:"#ecf2ff"}),l.createElement("path",{d:"m315 240c0-33.083-26.915-60-60-60v120c33.083 0 60-26.915 60-60z",fill:"#d9e5ff"}));function ne(e,t){var r=e.title,a=e.titleId,n=ae(e,["title","titleId"]);return l.createElement("svg",re({id:"Layer_1",enableBackground:"new 0 0 510 510",height:512,viewBox:"0 0 510 510",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,le)}var ce=l.forwardRef(ne);r.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var oe=l.createElement("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:251,x2:251,y1:502,y2:332.247},l.createElement("stop",{offset:0,stopColor:"#8d889d"}),l.createElement("stop",{offset:.9777,stopColor:"#c1bfc5"})),he=l.createElement("linearGradient",{id:"lg1"},l.createElement("stop",{offset:0,stopColor:"#78c5e6"}),l.createElement("stop",{offset:.9788,stopColor:"#bbe3f4"})),me=l.createElement("linearGradient",{id:"SVGID_2_",gradientUnits:"userSpaceOnUse",x1:76.396,x2:76.396,xlinkHref:"#lg1",y1:184.312,y2:45.82}),de=l.createElement("linearGradient",{id:"SVGID_3_",gradientUnits:"userSpaceOnUse",x1:425.604,x2:425.604,xlinkHref:"#lg1",y1:184.312,y2:45.82}),fe=l.createElement("linearGradient",{id:"lg2"},l.createElement("stop",{offset:.0212,stopColor:"#f3385d"}),l.createElement("stop",{offset:1,stopColor:"#fd869c"})),be=l.createElement("linearGradient",{id:"SVGID_4_",gradientUnits:"userSpaceOnUse",x1:63.552,x2:63.552,xlinkHref:"#lg2",y1:274.537,y2:162.473}),pe=l.createElement("linearGradient",{id:"SVGID_5_",gradientUnits:"userSpaceOnUse",x1:438.448,x2:438.448,xlinkHref:"#lg2",y1:274.537,y2:162.473}),ge=l.createElement("linearGradient",{id:"SVGID_6_",gradientUnits:"userSpaceOnUse",x1:251,x2:251,y1:336.256,y2:69.369},l.createElement("stop",{offset:.0223,stopColor:"#c1bfc5"}),l.createElement("stop",{offset:1,stopColor:"#8d889d"})),ue=l.createElement("linearGradient",{id:"lg3"},l.createElement("stop",{offset:0,stopColor:"#fd869c"}),l.createElement("stop",{offset:.9788,stopColor:"#f3385d"})),je=l.createElement("radialGradient",{id:"SVGID_7_",cx:71.385,cy:27.921,gradientUnits:"userSpaceOnUse",r:27.921,xlinkHref:"#lg3"}),xe=l.createElement("radialGradient",{id:"SVGID_8_",cx:430.615,cy:27.921,gradientUnits:"userSpaceOnUse",r:27.921,xlinkHref:"#lg3"}),ve=l.createElement("linearGradient",{id:"SVGID_9_",gradientUnits:"userSpaceOnUse",x1:251,x2:251,xlinkHref:"#lg3",y1:477.741,y2:262.745}),Oe=l.createElement("linearGradient",{id:"lg4"},l.createElement("stop",{offset:.0005580357,stopColor:"#f4e46a"}),l.createElement("stop",{offset:.9777,stopColor:"#f7f0a9"})),Ee=l.createElement("linearGradient",{id:"SVGID_10_",gradientUnits:"userSpaceOnUse",x1:94.698,x2:94.698,xlinkHref:"#lg4",y1:454.777,y2:379.462}),ye=l.createElement("linearGradient",{id:"SVGID_11_",gradientUnits:"userSpaceOnUse",x1:171.125,x2:171.125,xlinkHref:"#lg4",y1:454.777,y2:379.462}),we=l.createElement("linearGradient",{id:"SVGID_12_",gradientUnits:"userSpaceOnUse",x1:132.911,x2:132.911,xlinkHref:"#lg1",y1:454.777,y2:379.462}),ze=l.createElement("linearGradient",{id:"SVGID_13_",gradientUnits:"userSpaceOnUse",x1:407.303,x2:407.303,xlinkHref:"#lg4",y1:454.777,y2:379.462}),_e=l.createElement("linearGradient",{id:"SVGID_14_",gradientUnits:"userSpaceOnUse",x1:330.875,x2:330.875,xlinkHref:"#lg4",y1:454.777,y2:379.462}),Se=l.createElement("linearGradient",{id:"SVGID_15_",gradientUnits:"userSpaceOnUse",x1:369.089,x2:369.089,xlinkHref:"#lg1",y1:454.777,y2:379.462}),Ge=l.createElement("g",null,l.createElement("path",{d:"m377.227 332.247h-252.454c-19.6 0-35.489 15.889-35.489 35.489v98.776c0 19.6 15.889 35.489 35.489 35.489h252.454c19.6 0 35.489-15.889 35.489-35.489v-98.776c0-19.6-15.889-35.489-35.489-35.489z",fill:"url(#SVGID_1_)"}),l.createElement("path",{d:"m53.486 184.312h35.798l10.022-21.839-10.022-31.385v-85.268h-35.798z",fill:"url(#SVGID_2_)"}),l.createElement("path",{d:"m53.486 83.068c5.641 1.836 11.654 2.84 17.899 2.84s12.258-1.005 17.899-2.84v-37.248h-35.798z",fill:"#59c2e7"}),l.createElement("path",{d:"m448.514 184.312h-35.798l-10.022-21.839 10.022-31.385v-85.268h35.798z",fill:"url(#SVGID_3_)"}),l.createElement("path",{d:"m448.514 83.068c-5.641 1.836-11.654 2.84-17.899 2.84s-12.258-1.005-17.899-2.84v-37.248h35.798z",fill:"#59c2e7"}),l.createElement("path",{d:"m83.83 162.473c-30.946 0-56.032 25.086-56.032 56.032 0 30.946 25.086 56.032 56.032 56.032h15.476v-112.064z",fill:"url(#SVGID_4_)"}),l.createElement("path",{d:"m418.17 162.473c30.946 0 56.032 25.086 56.032 56.032 0 30.946-25.086 56.032-56.032 56.032h-15.476v-112.064z",fill:"url(#SVGID_5_)"}),l.createElement("path",{d:"m350.997 69.369h-199.994c-34.086 0-61.719 27.633-61.719 61.719v143.449c0 34.086 27.632 61.719 61.719 61.719h199.994c34.086 0 61.719-27.633 61.719-61.719v-143.449c0-34.087-27.633-61.719-61.719-61.719z",fill:"url(#SVGID_6_)"}),l.createElement("circle",{cx:71.385,cy:27.921,fill:"url(#SVGID_7_)",r:27.921}),l.createElement("circle",{cx:430.615,cy:27.921,fill:"url(#SVGID_8_)",r:27.921}),l.createElement("g",null,l.createElement("ellipse",{cx:138.889,cy:231.607,fill:"#fb99ac",rx:19.054,ry:15.312}),l.createElement("ellipse",{cx:363.111,cy:231.607,fill:"#fb99ac",rx:19.054,ry:15.312}),l.createElement("circle",{cx:171.555,cy:193.825,fill:"#fff",r:37.782}),l.createElement("circle",{cx:330.445,cy:193.825,fill:"#fff",r:37.782}),l.createElement("g",{fill:"#383842"},l.createElement("g",null,l.createElement("circle",{cx:171.555,cy:193.825,r:22.518}),l.createElement("circle",{cx:330.445,cy:193.825,r:22.518})),l.createElement("path",{d:"m251 231.42c-6.361 0-12.722-2.405-17.912-7.216-2.025-1.878-2.145-5.041-.267-7.066 1.877-2.025 5.042-2.144 7.066-.268 6.542 6.065 15.681 6.067 22.225 0 2.023-1.875 5.188-1.757 7.066.268 1.877 2.025 1.758 5.188-.268 7.066-5.188 4.811-11.55 7.216-17.91 7.216z"}))),l.createElement("path",{d:"m251 289.003c-88.663-86.65-234.229 58.496-19.737 183.404 12.212 7.112 27.262 7.112 39.474 0 214.492-124.908 68.926-270.054-19.737-183.404z",fill:"url(#SVGID_9_)"}),l.createElement("g",null,l.createElement("path",{d:"m354.604 347.434c-5.529-.265-9.795-4.962-9.53-10.491.254-5.295-1.269-10.941-4.29-15.897-2.88-4.727-1.384-10.894 3.342-13.773 4.727-2.882 10.893-1.383 13.773 3.342 5.158 8.464 7.646 17.901 7.194 27.289-.263 5.524-4.957 9.795-10.489 9.53z",fill:"#fdb0bf"})),l.createElement("g",null,l.createElement("path",{d:"m318.938 303.591c-2.18-.624-4.413-.988-6.638-1.081-5.53-.232-9.825-4.902-9.593-10.433.232-5.53 4.907-9.822 10.433-9.593 3.806.16 7.614.778 11.318 1.839 5.32 1.524 8.398 7.073 6.874 12.394-1.522 5.317-7.068 8.398-12.394 6.874z",fill:"#fdb0bf"})),l.createElement("path",{d:"m194.049 353.162c-7.096-2.477-14.636-3.766-22.373-3.766h-50.454c3.224 17.881 12.258 37.457 28.877 57.65l43.698-15.002c2.965-1.018 5.659-2.7 7.876-4.917 10.69-10.689 6.648-28.983-7.624-33.965z",fill:"#f3385d"}),l.createElement("path",{d:"m105.19 379.461 27.721 37.662-27.721 37.653h-11.054c-10.403 0-19.813-4.209-26.628-11.024-6.805-6.815-11.024-16.236-11.024-26.628 0-20.796 16.857-37.663 37.653-37.663z",fill:"url(#SVGID_10_)"}),l.createElement("path",{d:"m209.339 417.124c0 20.796-16.867 37.652-37.663 37.652h-11.044l-27.721-37.653 27.721-37.662h11.044c10.393 0 19.813 4.219 26.628 11.034 6.815 6.816 11.035 16.236 11.035 26.629z",fill:"url(#SVGID_11_)"}),l.createElement("path",{d:"m105.19 379.461h55.441v75.315h-55.441z",fill:"url(#SVGID_12_)"}),l.createElement("path",{d:"m396.81 379.461-27.721 37.662 27.721 37.653h11.054c10.403 0 19.813-4.209 26.628-11.024 6.805-6.815 11.024-16.236 11.024-26.628 0-20.796-16.857-37.663-37.653-37.663z",fill:"url(#SVGID_13_)"}),l.createElement("path",{d:"m292.661 417.124c0 20.796 16.867 37.652 37.663 37.652h11.044l27.721-37.653-27.721-37.662h-11.044c-10.393 0-19.813 4.219-26.628 11.034-6.815 6.816-11.035 16.236-11.035 26.629z",fill:"url(#SVGID_14_)"}),l.createElement("path",{d:"m341.368 379.461h55.441v75.315h-55.441z",fill:"url(#SVGID_15_)"}));function ke(e,t){var r=e.title,a=e.titleId,n=se(e,["title","titleId"]);return l.createElement("svg",ie({id:"Capa_1",enableBackground:"new 0 0 502 502",height:512,viewBox:"0 0 502 502",width:512,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,oe,he,me,de,fe,be,pe,ge,ue,je,xe,ve,Oe,Ee,ye,we,ze,_e,Se,Ge)}var Ie=l.forwardRef(ke);r.p;function De(){var e=Object(O.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  // justify-content: space-between;\n  margin: auto;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n  width: 6rem;\n  height: 3rem;\n  top: 1.2rem;\n\n  svg {\n    height: 2rem;\n    width: 1.5rem;\n    transition: all 1s linear;\n    \n\n    &:first-child {\n      transform: ",";\n    }\n    \n    &:nth-child(2) {\n      transform: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return De=function(){return e},e}var Ne=u.c.button(De(),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.lightTheme?"translateY(0)":"translateY(70px)"}),(function(e){return e.darkTheme?"translateY(0)":"translateY(70px)"}),(function(e){return e.grayTheme?"translateY(0)":"translateY(70px)"})),Ue=function(e){var t=e.theme,r=e.toggleTheme,l="light"===t,n="gray"===t,c="dark"===t;return Object(a.jsxs)(Ne,{lightTheme:l,grayTheme:n,darkTheme:c,onClick:r,children:[Object(a.jsx)(te,{}),Object(a.jsx)(ce,{}),Object(a.jsx)(Ie,{})]})};var Ve=function(){document.title="Robohooks";var e=Object(l.useState)("light"),t=Object(s.a)(e,2),r=t[0],n=t[1],c=Object(l.useState)("initial"),i=Object(s.a)(c,2),o=i[0],d=i[1],f=Object(l.useState)([]),b=Object(s.a)(f,2),p=b[0],O=b[1],E=Object(l.useState)(""),w=Object(s.a)(E,2),z=w[0],_=w[1],S=function(){console.log(r),n("light"===r?"dark":"dark"===r?"gray":"light")};Object(l.useEffect)((function(){"loaded"!==d&&fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){O(e)})).then(d("loaded"))}),[]);var G=function(e){_(e.target.value)},k=p.filter((function(e){return e.name.toLowerCase().includes(z.toLowerCase())?e.name:e.email.toLowerCase().includes(z.toLowerCase())?e.email:e.website.toLowerCase().includes(z.toLowerCase())?e.website:""}));return"initial"===o?Object(a.jsxs)(u.a,{theme:"light"===r?j:"dark"===r?x:"gray"===r?v:r,children:[Object(a.jsx)(y,{}),Object(a.jsxs)("div",{className:"tc #0ccac4 top:1rem",children:[Object(a.jsx)(Ue,{className:"tc",theme:r,toggleTheme:S}),Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)(m,{theme:r,searchChange:G}),Object(a.jsx)("h1",{className:"tc",children:"Loading"})]}),Object(a.jsx)("footer",{})]}):"loaded"===o?""==k?Object(a.jsxs)(u.a,{theme:"light"===r?j:"dark"===r?x:"gray"===r?v:r,children:[Object(a.jsx)(y,{}),Object(a.jsxs)("div",{className:"tc #0ccac4 top:1rem",children:[Object(a.jsx)(Ue,{className:"tc",theme:r,toggleTheme:S}),Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)(m,{theme:r,searchChange:G}),Object(a.jsx)("p",{class:"p1",children:"Search found no robots"})]}),Object(a.jsx)("footer",{})]}):Object(a.jsxs)(u.a,{theme:"light"===r?j:"dark"===r?x:"gray"===r?v:r,children:[Object(a.jsx)(y,{}),Object(a.jsxs)("div",{className:"tc top:1rem",children:[Object(a.jsx)(Ue,{className:"tc",theme:r,toggleTheme:S}),Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)(m,{theme:r,searchChange:G}),Object(a.jsx)(g,{children:Object(a.jsx)(h,{theme:r,robots:k})})]}),Object(a.jsx)("footer",{})]}):void 0};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(26);i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(Ve,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.1408a552.chunk.js.map