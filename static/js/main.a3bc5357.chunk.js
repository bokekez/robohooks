(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(4),o=n.n(a),i=(n(14),n(2)),h=function(e){var t=e.name,n=e.email,s=e.desc,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"f5",children:t}),Object(c.jsx)("p",{className:"f6",children:n}),Object(c.jsx)("p",{className:"f6",children:s})]})]})},l=function(e){var t=e.robots,n=t.map((function(e,n){return Object(c.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(c.jsx)("div",{children:n})},j=function(e){e.searchfield;var t=e.searchChange;return Object(c.jsx)("div",{className:"tc pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},b=(n(15),n(5)),d=n(6),u=n(8),m=n(7),O=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{children:"Ooooops. That is not good"}):this.props.children}}]),n}(s.Component);var f=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),o=Object(i.a)(a,2),h=o[0],b=o[1];Object(s.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e)})),console.log(n,h)}),[]);var d=function(e){b(e.target.value)},u=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())?e.name:e.email.toLowerCase().includes(h.toLowerCase())?e.email:""}));return 0===n.lenght?Object(c.jsx)("h1",{children:"Loading"}):""==u?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(c.jsx)(j,{searchChange:d}),Object(c.jsx)("p1",{children:"Search found no robots"})]}):Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(c.jsx)(j,{searchChange:d}),Object(c.jsx)(O,{children:Object(c.jsx)(l,{robots:u})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a3bc5357.chunk.js.map