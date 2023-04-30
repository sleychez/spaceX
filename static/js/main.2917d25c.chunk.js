(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/logo.d5ab31ce.svg"},27:function(e,a,t){e.exports=t(64)},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(20),r=t.n(l),m=t(8),s=t(1),o=(t(32),t(33),t(11)),i=t.n(o),u=t(7),E=t(9),d=t.n(E),f=t(12),h=t(21),p=function e(){var a=this;Object(h.a)(this,e),this.startURL="https://api.spacexdata.com/v4/",this.getResource=function(){var e=Object(f.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Error: ".concat(t.body));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.postResource=function(e){fetch(e,{method:"POST",headers:{"Content-type":""}})},this.getRocket=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getResource(a.startURL+"rockets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getLaunches=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getResource(a.startURL+"launches/past");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getCompany=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getResource(a.startURL+"company");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},b=new p,N=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){b.getRocket().then((function(e){return c(e)}))}),[]);return{data:t,getRocket:function(e){return t.find((function(a){return a.name===e}))}}},v=function(e){var a=N().data;return c.a.createElement("header",{className:"header"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{src:i.a,alt:"Logo Space X",className:"logo"})),c.a.createElement("nav",{className:"main-nav nav"},c.a.createElement("ul",{className:"list"},a.map((function(e,a){return c.a.createElement("li",{key:a,className:"item"},c.a.createElement(m.b,{to:"/rocket/".concat(e.name.replace(/ /g,"_")),className:"item-link"},e.name))})))),c.a.createElement("nav",{className:"secondary-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement(m.c,{exact:!0,to:"/",className:"item-link"},"Home")),c.a.createElement("li",{className:"item"},c.a.createElement(m.c,{to:"/calendar",className:"item-link",activeClassName:"active"},"Calendar")))))},g=(t(39),t(23)),k=t.n(g),w=(t(47),{"Falcon 1":"moon","Falcon 9":"earth","Falcon Heavy":"mars",other:"space"}),O=function(e){var a=e.rocket,t=e.title;return c.a.createElement("section",{className:"main"},c.a.createElement("h1",{className:"title"},t||a),a&&c.a.createElement("div",{className:"video-container"},c.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,src:"/video/".concat(w.hasOwnProperty(a)?w[a]:w.other,".mp4")})))},_={"Falcon 1":"falcon-1","Falcon 9":"falcon-9","Falcon Heavy":"falcon-heavy",Starship:"starship"},y=function(e){var a=Object(n.useState)(null),t=Object(u.a)(a,2),l=t[0],r=t[1],m=N().getRocket;if(Object(n.useEffect)((function(){r(m(e.match.params.rocket.replace(/_/g," ")))}),[m,e.match.params.rocket]),!l)return c.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...");var s=l.name,o=l.height,i=l.diameter,E=l.description,d=l.mass,f=l.payload_weights;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{rocket:s}),c.a.createElement("section",{className:"features"},c.a.createElement("h2",{className:"features-title"},s," ",c.a.createElement("br",null),"Overview"),c.a.createElement("div",{className:"overview"},c.a.createElement("table",{className:"table"},c.a.createElement("caption",{className:"table-title"},"Size"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"HEIGHT"),c.a.createElement("td",{className:"table-column"},o.meters," m / ",o.feet," f")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"DIAMETER"),c.a.createElement("td",{className:"table-column"}," ",i.meters," m / ",i.feet," f")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"MASS"),c.a.createElement("td",{className:"table-column"},d.kg," kg / ",d.lb," lb")),f.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"table-column"},"PAYLOAD TO ",e.id.toUpperCase()),c.a.createElement("td",{className:"table-column"},e.kg," kg / ",e.lb," lb"))})))),c.a.createElement(k.a,{speed:14},c.a.createElement("img",{src:"/img/".concat(_[s],".png"),alt:"rocket",className:"rocket"})),c.a.createElement("article",null,c.a.createElement("h3",{className:"features-subtitle"},"DESCRIPTION"),c.a.createElement("p",{className:"features-text"},E)))))},x=(t(48),new p),j=function(){var e=Object(n.useState)(null),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){x.getCompany().then((function(e){return c(e)}))}),[x]),{company:t}},S=function(e){var a=j().company;if(!a)return c.a.createElement("div",null,"Loading...");var t=a.links,n=t.elon_twitter,l=t.twitter,r=t.flickr,m=t.website;return c.a.createElement("footer",{className:"footer"},c.a.createElement("img",{src:i.a,alt:"logo Space X",className:"logo"}),c.a.createElement("nav",{className:"footer-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Elon Musk Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:l,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:r,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Flickr")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:m,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Website")))),c.a.createElement("p",{className:"footer-text"},"For additional questions, contact",c.a.createElement("a",{className:"footer-link",href:"mailto:rideshare@spacex.com"},"rideshare@spacex.com")))},R=(t(49),function(e){var a=j().company;return a?c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("hgroup",{className:"title"},c.a.createElement("h1",null,c.a.createElement("img",{className:"logo-title",src:i.a,alt:a.name})),c.a.createElement("h2",{className:"subtitle"},a.summary)),c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"home_table home_table-manager"},c.a.createElement("caption",{className:"home_table-title"},"Manager"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CEO"),c.a.createElement("td",{className:"home_table-column"},a.ceo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"COO"),c.a.createElement("td",{className:"home_table-column"},a.coo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO"),c.a.createElement("td",{className:"home_table-column"},a.cto)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO PROPULSION"),c.a.createElement("td",{className:"home_table-column"},a.cto_propulsion)))),c.a.createElement("table",{className:"home_table home_table-location"},c.a.createElement("caption",{className:"home_table-title"},"Location"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"State"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.state)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"City"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.city)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"Address"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.address)))),c.a.createElement("video",{id:"video",autoPlay:!0,loop:!0,muted:!0,className:"responsive-video",width:"100%",height:"100%",preload:"auto"},c.a.createElement("source",{type:"video/mp4",src:"https://www.spacex.com/media/mission_reusability.mp4"}),c.a.createElement("source",{type:"video/webm",src:"https://www.spacex.com/media/mission_reusability.webm"}))))):c.a.createElement("div",null,"Loading...")}),C=(t(50),new p),L=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){C.getLaunches().then((function(e){return c(e)}))}),[]);return{data:t,getLaunch:function(e){return t.find((function(a){return a.id===e}))}}},F=function(){var e=L().data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{title:"Calendar SpaceX"}),c.a.createElement("section",{className:"calendar"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"calendar-list"},e.map((function(e){return c.a.createElement("li",{key:e.id,className:"calendar-item"},c.a.createElement("article",{className:"launches"},c.a.createElement("div",{className:"launches-image"},c.a.createElement("img",{src:e.links.patch.small,alt:""})),c.a.createElement("div",{className:"launches-content"},c.a.createElement("h2",{className:"launches-title"},e.name),c.a.createElement(m.b,{to:"/details/".concat(e.id),className:"button launches-details"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))}))))))},T=(t(51),t(24)),P=function(e){var a=Object(n.useState)(null),t=Object(u.a)(a,2),l=t[0],r=t[1],m=L().getLaunch,o=Object(s.e)();if(Object(n.useEffect)((function(){r(m(e.match.params.id))}),[m,e.match.params.id]),!l)return c.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...");var i=l.name,E=l.links,d=l.details;return c.a.createElement("div",null,c.a.createElement(O,{title:i}),c.a.createElement("main",{className:"details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-image"},c.a.createElement("img",{src:E.patch.small,alt:i})),c.a.createElement("div",{className:"details-content"},c.a.createElement("p",{className:"details-description"},d))),c.a.createElement(T.a,{className:"details-youtube",videoId:E.youtube_id})),c.a.createElement("div",{onClick:o.goBack,className:"button button-back"},"GO BACK")))},I=function(){return c.a.createElement(m.a,null,c.a.createElement(v,null),c.a.createElement(s.a,{exact:!0,path:"/",component:R}),c.a.createElement(s.a,{path:"/rocket/:rocket",component:y}),c.a.createElement(s.a,{path:"/calendar",component:F}),c.a.createElement(s.a,{path:"/details/:id",component:P}),c.a.createElement(S,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2917d25c.chunk.js.map