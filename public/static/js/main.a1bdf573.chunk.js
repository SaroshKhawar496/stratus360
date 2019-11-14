(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){e.exports=a(79)},50:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),i=(a(50),a(9)),l=a(10),m=a(12),s=a(11),u=a(13),p=a(18),y=a(14),f=a(21),d=a(19),h=a.n(d);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={found:!1,comic:{title:"",img:"",transcript:null,day:"",month:"",year:""}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;this.props.latest?h.a.get("/api/comic/latest").then((function(e){var a=e.data;t.setState({found:!0,comic:{title:a.title,img:a.img,transcript:a.transcript,day:a.day,month:a.month,year:a.year}})})):(console.log("Comic.js props comicNum:",this.props.comicNum),e=this.props.match.params.comicId,Number(e)&&e>0&&h.a.get("/api/comic/".concat(e)).then((function(e){var a=e.data;200===e.status?t.setState({found:!0,comic:{title:a.title,img:a.img,transcript:a.transcript,day:a.day,month:a.month,year:a.year}}):404===e.status&&t.setState((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{found:!1})}))})))}},{key:"render",value:function(){var e;if(this.state.found){var t,a=this.state.comic,n=a.title,r=a.img,o=a.transcript,i=a.day,l=a.month,m=a.year;t=""!==o?(t=o.replace(/[{()}]/g,"")).replace(/[\[\]']+/g,""):c.a.createElement(c.a.Fragment,null,"None Available"),e=c.a.createElement("div",{className:"mt-3"},c.a.createElement("h2",null,"Comic Book: ",n),c.a.createElement("img",{src:r}),c.a.createElement("p",{className:"mt-2"},c.a.createElement("span",{className:"title"},"Details: "),c.a.createElement("span",{className:"details"},t)),c.a.createElement("p",null,c.a.createElement("span",{className:"title"},"Release Date (dd-mm-yyyy): "),c.a.createElement("span",{className:"details"},i,"-",l,"-",m)))}else e=c.a.createElement("p",null,"Comic Book Not Found. Try something else");return c.a.createElement("div",null,e)}}]),t}(n.Component),O=a(83);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={comicNum:1,comic:{title:"",img:"",transcript:"",day:"",month:"",year:""}},a.nextComicNumHandler=function(){console.log("Next Comic"),a.setState((function(e){return v({},e,{comicNum:e.comicNum+1})}),(function(){return a.getNewComic()}))},a.prevComicNumHandler=function(){console.log("Prev Comic"),a.state.comicNum>1&&a.setState((function(e){return v({},e,{comicNum:e.comicNum-1})}),(function(){return a.getNewComic()}))},a.randomComicHandler=function(){var e=Math.floor(900*Math.random())+1;a.setState((function(t){return v({},t,{comicNum:e})}),(function(){return a.getNewComic()}))},a.getNewComic=function(){h.a.get("/api/comic/".concat(a.state.comicNum)).then((function(e){var t=e.data;a.setState((function(e){return v({},e,{comic:{title:t.title,img:t.img,transcript:t.transcript,day:t.day,month:t.month,year:t.year}})}))}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getNewComic()}},{key:"render",value:function(){console.log("comicNum: ".concat(this.state.comicNum));var e,t=this.state.comic,a=t.title,n=t.img,r=t.transcript,o=t.day,i=t.month,l=t.year;return e=""!=r?(e=r.replace(/[{()}]/g,"")).replace(/[\[\]']+/g,""):c.a.createElement(c.a.Fragment,null,"None Available"),c.a.createElement("div",null,c.a.createElement("div",{className:"mt-2"},c.a.createElement(O.a,{variant:"warning mr-2",onClick:this.prevComicNumHandler},"Previous Commic"),c.a.createElement(O.a,{variant:"success mr-2",onClick:this.nextComicNumHandler},"Next Comic"),c.a.createElement(O.a,{variant:"danger",onClick:this.randomComicHandler},"Random Comic")),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h2",null,"Comic Book: ",a),c.a.createElement("img",{src:n}),c.a.createElement("p",{className:"mt-2"},c.a.createElement("span",{className:"title"},"Details: "),c.a.createElement("span",{className:"details"},e)),c.a.createElement("p",null,c.a.createElement("span",{className:"title"},"Release Date (dd-mm-yyyy): "),c.a.createElement("span",{className:"details"},o,"-",i,"-",l))))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{latest:!0}),c.a.createElement(p.b,{style:{textDecoration:"none"},className:"text-white link",to:"/comics"},c.a.createElement(O.a,{variant:"secondary"},"See Other Comics")))}}]),t}(n.Component),C=a(82),w=function(){return c.a.createElement(C.a,{bg:"dark",variant:"dark"},c.a.createElement(C.a.Brand,null,c.a.createElement(p.c,{className:"d-inline p-2  text-white",to:"/"},"Cyber City Comics")))},k=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Page Not Found"),c.a.createElement("p",null,"Page you are looking for, doesn't exist."))},P=a(81),D=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(w,null),c.a.createElement(P.a,null,c.a.createElement(y.c,null,c.a.createElement(y.a,{exact:!0,path:"/",component:j}),c.a.createElement(y.a,{exact:!0,path:"/comics",component:N}),c.a.createElement(y.a,{path:"/comics/:comicId",component:g}),c.a.createElement(y.a,{component:k}))))}}]),t}(n.Component);o.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a1bdf573.chunk.js.map