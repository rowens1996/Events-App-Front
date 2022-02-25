(this.webpackJsonpadvertapp=this.webpackJsonpadvertapp||[]).push([[0],{105:function(e,t,a){e.exports=a(175)},110:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(19),c=a.n(r),o=(a(110),a(10)),i=a(100),u=a(190),s=a(185),m=a(184),d=(a(75),a(98)),v=a.n(d),E=(a(111),a(189)),h=a(96),p=a(187);var f=function(e){var t,a,r,c,i=Object(n.useState)(!1),u=Object(o.a)(i,2),d=u[0],f=u[1],g=Object(n.useState)(new Date),b=Object(o.a)(g,2),y=b[0],w=b[1];return l.a.createElement(E.a,{size:"xl",show:e.show,onHide:e.handleClose},l.a.createElement(E.a.Header,{closeButton:!0},l.a.createElement(h.a,null,e.formTitle," Event")),l.a.createElement(p.a,{onSubmit:function(t){return function(t){t.preventDefault(),t.persist(),console.log(t.target.date.value),f(!0),(e.currentEvent?e.client.updateEvent(e.currentEvent._id,t.target.name.value,t.target.location.value,t.target.date.value,t.target.price.value,t.target.info.value):e.client.addEvent(t.target.name.value,t.target.location.value,t.target.date.value,t.target.price.value,t.target.info.value)).then((function(){f(!1),t.target.reset(),e.refreshList()})).catch((function(){alert("an error occured, please try again"),f(!1)}))}(t)},id:"addForm"},l.a.createElement(E.a.Body,null,l.a.createElement(m.a,{id:"formContainer"},l.a.createElement(p.a.Group,{controlId:"eventName"},l.a.createElement(p.a.Label,null,"Event Name"),l.a.createElement(p.a.Control,{type:"text",defaultValue:null===(t=e.currentEvent)||void 0===t?void 0:t.name,name:"name",disabled:d})),l.a.createElement(p.a.Group,{controlId:"eventLocation"},l.a.createElement(p.a.Label,null,"Location"),l.a.createElement(p.a.Control,{type:"text",defaultValue:null===(a=e.currentEvent)||void 0===a?void 0:a.location,name:"location",disabled:d})),l.a.createElement(p.a.Group,{controlId:"eventDate"},l.a.createElement(p.a.Label,null,"Date"),l.a.createElement(v.a,{name:"date",placeholderText:"Click to select a date",dateFormat:"dd-MM-yyyy",closeOnScroll:!0,selected:y,showPopperArrow:!1,onChange:function(e){return w(e)}})),l.a.createElement(p.a.Group,{controlId:"eventPrice"},l.a.createElement(p.a.Label,null,"Ticket Price (\xa3)"),l.a.createElement(p.a.Control,{type:"text",defaultValue:null===(r=e.currentEvent)||void 0===r?void 0:r.price,name:"price",disabled:d})),l.a.createElement(p.a.Group,{controlId:"textInput"},l.a.createElement(p.a.Label,null,"Info"),l.a.createElement(p.a.Control,{name:"info",as:"textarea",rows:5,defaultValue:null===(c=e.currentEvent)||void 0===c?void 0:c.info,disabled:d})),l.a.createElement(s.a,{variant:"primary",type:"submit",onClick:e.handleClose},"Submit")))))};var g=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1],d=Object(n.useState)(void 0),v=Object(o.a)(d,2),E=v[0],h=v[1],p=Object(n.useState)(!1),g=Object(o.a)(p,2),b=g[0],y=g[1],w=function(e){!0===e&&h(void 0),y(!0)},k=function(){e.client.getAllEvents().then((function(e){return c(e.data)}))};return Object(n.useEffect)((function(){k()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"otherCard",style:{width:"100%"}},l.a.createElement(u.a.Header,{as:"h5",className:"card-header"},l.a.createElement(u.a.Title,null,"Add Your Event Here",l.a.createElement("span",{className:"float-right"},"When is it?",l.a.createElement("br",null),"Price: ",l.a.createElement("span",{className:"bold"},"\xa3"))),l.a.createElement(u.a.Subtitle,{className:"text-muted"},"Where is it?")),l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Text,{className:"mb-1"},"Tells us more about your event..."),l.a.createElement("span",{className:"card-trash"},l.a.createElement(s.a,{onClick:function(){return w(!0)},variant:"primary"},"Add Event"))))),l.a.createElement("br",null),l.a.createElement(m.a,null,r.map((function(t){return l.a.createElement("div",{key:t.id},l.a.createElement(u.a,{className:"otherCard",style:{width:"100%"}},l.a.createElement(u.a.Header,{as:"h5",className:"card-header"},l.a.createElement(u.a.Title,null,t.name,l.a.createElement("span",{className:"float-right"},t.date,l.a.createElement("br",null),"Price: ",l.a.createElement("span",{className:"bold"},"\xa3",t.price))),l.a.createElement(u.a.Subtitle,{className:"text-muted"},t.location)),l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Text,{className:"mb-1"},t.info),l.a.createElement("span",{className:"card-trash"},l.a.createElement(s.a,{onClick:function(){return h(t),void w()},variant:"primary"},"Update"),"\xa0\xa0",l.a.createElement(s.a,{onClick:function(){return a=t._id,void e.client.removeEvent(a).then((function(){return k()}));var a},variant:"danger"},l.a.createElement(i.a,null))))),l.a.createElement("br",null))}))),l.a.createElement("br",null),l.a.createElement(f,{client:e.client,show:b,handleClose:function(){return y(!1)},handleShow:w,refreshList:function(){k(),h(void 0)},currentEvent:E}))},b=a(36),y=a(37),w=a(84),k=a.n(w),C="https://rowens96-events-app.herokuapp.com/",N=function(){function e(t,a){Object(b.a)(this,e),this.token=t,this.logoutHandler=a}return Object(y.a)(e,[{key:"apiCall",value:function(e,t,a){return console.log(t),k()({method:e,url:t,data:a}).catch((function(e){throw e}))}},{key:"authenticatedCall",value:function(e,t,a){var n=this;return k()({method:e,url:t,headers:{authorization:this.token},data:a}).catch((function(e){if(403==e.response.status)return n.logoutHandler(),Promise.reject;throw e}))}},{key:"login",value:function(e,t){return this.apiCall("post","".concat(C,"auth"),{userName:e,password:t})}},{key:"addNewUser",value:function(e,t){return this.authenticatedCall("post","".concat(C,"signup"),{username:e,password:t})}},{key:"getAllEvents",value:function(){return this.authenticatedCall("get","".concat(C,"event"))}},{key:"getEventById",value:function(e){return this.authenticatedCall("get","".concat(C,"search/id/").concat(e))}},{key:"getEventByName",value:function(e){return this.authenticatedCall("get","".concat(C,"search/name/").concat(e))}},{key:"getEventsByLocation",value:function(e){return this.authenticatedCall("get","".concat(C,"search/location/").concat(e))}},{key:"getEventsByDate",value:function(e){return this.authenticatedCall("get","".concat(C,"search/date/").concat(e))}},{key:"addEvent",value:function(e,t,a,n,l){return this.authenticatedCall("post","".concat(C,"event"),{name:e,location:t,date:a,price:n,info:l})}},{key:"removeEvent",value:function(e){return this.authenticatedCall("delete","".concat(C,"event/").concat(e))}},{key:"updateEvent",value:function(e,t,a,n,l,r){return this.authenticatedCall("put","".concat(C,"event/").concat(e),{name:t,location:a,date:n,price:l,info:r})}}]),e}();a(95);var S=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:"login-child"},l.a.createElement("span",{className:"login-header"},"Hello"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),c(!0),e.client.login(t.target.username.value,t.target.password.value).then((function(t){c(!1),e.loggedIn(t.data.token)})).catch((function(e){alert("Invalid username and password"),console.log(e),c(!1)}))}(t)}},"username",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"username",disabled:r}),l.a.createElement("br",null),"password",l.a.createElement("br",null),l.a.createElement("input",{type:"password",name:"password",disabled:r}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.a,{variant:"outline-success",type:"submit",disabled:r}," ","Login"," "),"\xa0\xa0\xa0",l.a.createElement(s.a,{variant:"outline-primary",onClick:function(t){return function(t){t.preventDefault(),console.log(e),console.log(t),e.client.addNewUser(t.target.username.value,t.target.password.value).then((function(e){c(!1)})).catch((function(e){alert("an error has occurred"),console.log(e),c(!1)}))}(t)},type:"",disabled:r}," ","Sign Up"," ")))},j=a(102),O=a(188),x=a(186),I=a(97);var L=function(){var e=Object(n.useState)(window.localStorage.getItem("token")),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(){window.localStorage.removeItem("token"),r("")},i=new N(a,c);return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{bg:"light",expand:"lg"},l.a.createElement(m.a,{fluid:!0},l.a.createElement(O.a.Brand,null,"Events App"),l.a.createElement(O.a.Toggle,{"aria-controls":"navbarScroll"}),l.a.createElement(O.a.Collapse,{id:"navbarScroll"},l.a.createElement(x.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0}),l.a.createElement(x.a.Link,{href:"#",onClick:c,style:{color:"rgba(0,0,0,.9)"}},"Logout ",l.a.createElement(j.a,null)),l.a.createElement(p.a,{className:"d-flex"},l.a.createElement(I.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),l.a.createElement(s.a,{variant:"outline-success"},"Search"))))),a?l.a.createElement(g,{client:i}):l.a.createElement("div",{className:"login-parent"},l.a.createElement("div",{className:"login-form"},l.a.createElement(S,{client:i,loggedIn:function(e){window.localStorage.setItem("token",e),r(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.a71abbc3.chunk.js.map