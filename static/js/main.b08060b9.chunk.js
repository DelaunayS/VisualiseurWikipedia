(this.webpackJsonpwikipedia=this.webpackJsonpwikipedia||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(5),a=n.n(i),s=(n(11),n(3)),o=n.n(s),u=n(6),l=n(4),d=n(0);var h=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),a=Object(l.a)(i,2),s=a[0],h=a[1],j=function(e){var t=e.replace(/<[^>]+>/g,"");return t[0].toUpperCase()+t.slice(1)+"..."};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"container-fluid m-4 text-center searchBoxInput",children:Object(d.jsx)("input",{id:"search",onKeyPress:function(e){13===e.charCode&&fetch("".concat("https://fr.wikipedia.org/w/api.php?&origin=*&action=query&limit=5&list=search&exsentences=1&format=json&srsearch=").concat(n)).then((function(e){return e.json()})).then(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,t.query.search;case 3:e.t1=e.sent,(0,e.t0)(e.t1),c("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(console.error)},value:n,onChange:function(e){return c(e.target.value)},placeholder:"Recherche..."})}),""!==s&&Object(d.jsx)("div",{id:"resultBox",className:"container mx-2",children:s.map((function(e,t){return Object(d.jsx)("ul",{children:Object(d.jsx)("div",{className:"resultArea m-1",children:Object(d.jsxs)("a",{className:"result_a",href:"https://en.wikipedia.org/?curid=".concat(e.pageid),children:[Object(d.jsx)("h3",{className:"resultTitle mx-4",children:e.title}),Object(d.jsx)("p",{className:"resultText mx-4",children:j(e.snippet)})]})})},t)}))})]})};var j=function(){return Object(d.jsx)("div",{className:"container-fluid m-2 text-center",children:Object(d.jsx)("a",{className:"randomLink p-1",href:"https://en.wikipedia.org/wiki/Special:Random",target:"_blank",rel:"noopener noreferrer",children:"Cliquer ici pour obtenir un article au hasard sur Wikip\xe9dia"})})};var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsx)(h,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.b08060b9.chunk.js.map