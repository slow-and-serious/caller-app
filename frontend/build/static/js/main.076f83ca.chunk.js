(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,t,a){e.exports=a(137)},115:function(e,t,a){e.exports=a.p+"static/media/factory.bddf2578.jpg"},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),c=a(21),l=a(30),s=a(11),m=a(169),u=a(170),p=a(17),g=a(93),f=a(61),d=a(62),h=a(60),b=Object(g.a)({palette:{primary:{light:"#69696a",main:"#28282a",dark:"#1e1e1f"},secondary:{light:"#fff5f8",main:"#ff3366",dark:"#e62958"},warning:{main:"#ffc071",dark:"#ffb25e"},error:{xLight:f.a[50],main:f.a[500],dark:f.a[700]},success:{xLight:d.a[50],main:d.a[500],dark:d.a[700]}},typography:{fontFamily:"'Work Sans', sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:700,fontFamilySecondary:"'Roboto Condensed', sans-serif"}}),y={color:b.palette.text.primary,fontWeight:b.typography.fontWeightMedium,fontFamily:b.typography.fontFamilySecondary,textTransform:"uppercase"},E=Object(p.a)({},b,{palette:Object(p.a)({},b.palette,{background:Object(p.a)({},b.palette.background,{default:b.palette.common.white,placeholder:h.a[200]})}),typography:Object(p.a)({},b.typography,{fontHeader:y,h1:Object(p.a)({},b.typography.h1,{},y,{letterSpacing:0,fontSize:60}),h2:Object(p.a)({},b.typography.h2,{},y,{fontSize:48}),h3:Object(p.a)({},b.typography.h3,{},y,{fontSize:42}),h4:Object(p.a)({},b.typography.h4,{},y,{fontSize:36}),h5:Object(p.a)({},b.typography.h5,{fontSize:20,fontWeight:b.typography.fontWeightLight}),h6:Object(p.a)({},b.typography.h6,{},y,{fontSize:18}),subtitle1:Object(p.a)({},b.typography.subtitle1,{fontSize:18}),body1:Object(p.a)({},b.typography.body2,{fontWeight:b.typography.fontWeightRegular,fontSize:16}),body2:Object(p.a)({},b.typography.body1,{fontSize:14})})});var v=a(40),k=a(3),j=a(4),w=a(173);var x=Object(j.a)((function(e){return{root:Object(v.a)({color:e.palette.common.white,position:"relative",display:"flex",alignItems:"center"},e.breakpoints.up("sm"),{height:"80vh",minHeight:500,maxHeight:1300}),container:{marginTop:e.spacing(3),marginBottom:e.spacing(14),display:"flex",flexDirection:"column",alignItems:"center"},backdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.5,zIndex:-1},background:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundRepeat:"no-repeat",zIndex:-2},arrowDown:{position:"absolute",bottom:e.spacing(4)}}}))((function(e){var t=e.backgroundClassName,n=e.children,o=e.classes;return r.a.createElement("section",{className:o.root},r.a.createElement(w.a,{className:o.container},r.a.createElement("img",{src:a(115),alt:"hello",width:"650px",height:"650px"}),n,r.a.createElement("div",{className:o.backdrop}),r.a.createElement("div",{className:Object(k.a)(o.background,t)}),r.a.createElement("img",{className:o.arrowDown,src:"/static/themes/onepirate/productHeroArrowDown.png",height:"16",width:"12",alt:"arrow down"})))}));var O,S=(O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null))},function(e){return r.a.createElement(m.a,{theme:E},r.a.createElement(u.a,null),r.a.createElement(O,e))}),I=a(50),N=a(175),T=a(176),W=a(191),L=a(174),_=Object(L.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},footer:Object(v.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function z(){return r.a.createElement(I.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(N.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var D=[{title:"Company",description:["Team","History","Contact us","Locations"]},{title:"Features",description:["Cool stuff","Random feature","Team feature","Developer stuff","Another one"]},{title:"Resources",description:["Resource","Resource name","Another resource","Final resource"]},{title:"Legal",description:["Privacy policy","Terms of use"]}];var R=function(){var e=_();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{maxWidth:"md",component:"footer",className:e.footer},r.a.createElement(T.a,{container:!0,spacing:4,justify:"space-evenly"},D.map((function(e){return r.a.createElement(T.a,{item:!0,xs:6,sm:3,key:e.title},r.a.createElement(I.a,{variant:"h6",color:"textPrimary",gutterBottom:!0},e.title),r.a.createElement("ul",null,e.description.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(N.a,{href:"#",variant:"subtitle1",color:"textSecondary"},e))}))))}))),r.a.createElement(W.a,{mt:5},r.a.createElement(z,null))))},F=a(177),B=a(178),C=a(179),M=a(180),A=a(181),P=a(182),H=Object(L.a)((function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},link:{margin:e.spacing(1,1.5)},toolbarTitle:{flexGrow:1},navDisplayFlex:{display:"flex",justifyContent:"space-between"},linkText:{textDecoration:"none",textTransform:"uppercase",color:"black"}}}));function J(e){var t=e.classes;return e.loggedIn?r.a.createElement(F.a,{href:"#",color:"primary",variant:"outlined",className:t.link,component:l.b,to:"/logout"},"Logout"):r.a.createElement(F.a,{href:"#",color:"primary",variant:"outlined",className:t.link,component:l.b,to:"/login"},"Login")}var q=function(e){var t=H();return Object(n.useEffect)((function(){e.loggedIn||function(e){var t=sessionStorage.getItem("refresh_token");if(t){var a=JSON.parse(atob(t.split(".")[1])),n=Math.ceil(Date.now()/1e3);console.log(t),a.exp>n&&e(!0)}}(e.setLoggedIn)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(B.a,{position:"static",color:"default",elevation:0,className:t.appBar},r.a.createElement(C.a,{className:t.toolbar},r.a.createElement(I.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.toolbarTitle},r.a.createElement(N.a,{component:l.b,to:"/",underline:"none",color:"textPrimary"},"Caller App")),r.a.createElement(M.a,{component:"nav","aria-labelledby":"main navigation",className:t.navDisplayFlex},e.loggedIn?[{title:"Notification History",path:"/notification-history",viewableByManager:"False"},{title:"Rotation History",path:"/rotation",viewableByManager:"True"}].map((function(a){var n=a.title,o=a.path,i=a.viewableByManager;return"all"===i||i===e.profile.is_manager?r.a.createElement(N.a,{component:l.b,to:o,underline:"none",key:n,className:t.linkText},r.a.createElement(A.a,{button:!0},r.a.createElement(P.a,{primary:n}))):null})):null),r.a.createElement(J,{classes:t,loggedIn:e.loggedIn}))))},U=a(193),Y=a(184),Z=a(192),$=a(26),G=a(69),V=a(68),K=a.n(V),Q=a(91),X=a(92),ee="http://64.227.53.237/api/v1/",te=a.n(X).a.create({baseURL:ee,timeout:15e3,headers:{authorization:sessionStorage.getItem("access_token")?"JWT "+sessionStorage.getItem("access_token"):null,"Content-Type":"application/json",accept:"application/json"}});te.interceptors.response.use((function(e){return e}),function(){var e=Object(Q.a)(K.a.mark((function e(t){var a,n,r,o;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.log("Unknown error"),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||a.url!==ee+"user/token/refresh"){e.next=7;break}return window.location.href="/login/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=23;break}if(!(n=sessionStorage.getItem("refresh_token"))){e.next=21;break}if(r=JSON.parse(atob(n.split(".")[1])),o=Math.ceil(Date.now()/1e3),console.log(n),!(r.exp>o)){e.next=17;break}return e.abrupt("return",te.post("user/token/refresh",{refresh:n}).then((function(e){return sessionStorage.setItem("access_token",e.data.access),sessionStorage.setItem("refresh_token",e.data.refresh),te.defaults.headers.authorization="JWT "+e.data.access,a.headers.authorization="JWT "+e.data.access,te(a)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",r.exp,o),window.location.href="/login";case 19:e.next=23;break;case 21:console.log("Refresh token not available."),window.location.href="/login";case 23:return e.abrupt("return",Promise.reject(t));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var ae=te,ne=Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function re(e){var t=ne(),a=Object(s.f)(),o=Object(n.useState)(""),i=Object(c.a)(o,2),l=i[0],m=i[1];return r.a.createElement($.c,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<4&&(t.password="Password length must be greater than 4 characters"):t.password="Required",t},onSubmit:function(t,n){var r=n.setSubmitting;m(""),ae.post("user/login",{email:t.email,password:t.password}).then((function(t){sessionStorage.setItem("access_token",t.data.access),sessionStorage.setItem("refresh_token",t.data.refresh),ae.defaults.headers.authorization="JWT "+sessionStorage.getItem("access_token"),e.setLoggedIn(!0)})).then((function(){ae.get("user/profile").then((function(t){e.setProfile(t.data)}))})).then((function(){a.push("/")})).catch((function(e){m("The email and password do not match our records")})),setTimeout((function(){r(!1)}),800)}},(function(e){var a=e.submitForm,n=e.isSubmitting;return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(U.a,{className:t.avatar}),r.a.createElement(I.a,{component:"h1",variant:"h5"},"Sign in"),l&&r.a.createElement(Z.a,{severity:"error"},l),r.a.createElement($.b,{className:t.form},r.a.createElement($.a,{component:G.a,name:"email",type:"email",label:"Email Address",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0}),r.a.createElement("br",null),r.a.createElement($.a,{component:G.a,type:"password",label:"Password",name:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),n&&r.a.createElement(Y.a,null),r.a.createElement("br",null),r.a.createElement(F.a,{variant:"contained",fullWidth:!0,color:"primary",className:t.submit,disabled:n,onClick:a},"Submit"))))}))}function oe(e){var t=Object(s.f)();return Object(n.useEffect)((function(){e.setLoggedIn(!1),ae.post("user/logout/blacklist",{refresh_token:sessionStorage.getItem("refresh_token")}),sessionStorage.removeItem("access_token"),sessionStorage.removeItem("refresh_token"),ae.defaults.headers.authorization=null,t.push("/login")})),r.a.createElement("div",null,"Logout")}var ie=a(94);var ce=function(e){return function(t){var a=t.isLoading,n=Object(ie.a)(t,["isLoading"]);return a?r.a.createElement(Y.a,null):r.a.createElement(e,n)}},le=a(185),se=a(139),me=a(186),ue=a(187),pe=a(188),ge=a(189),fe=a(190),de=Object(L.a)({table:{minWidth:650}});function he(e){var t=de(),a=e.rows,n=e.headers,o=Object.keys(a[0]);return r.a.createElement(le.a,{component:se.a},r.a.createElement(me.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(ue.a,null,r.a.createElement(pe.a,null,n.map((function(e,t){return r.a.createElement(ge.a,{align:"left",key:t},e)})))),r.a.createElement(fe.a,null,a.map((function(e){return r.a.createElement(pe.a,{key:e.id},o.map((function(t){return r.a.createElement(ge.a,{align:"left"},e[t])})))})))))}var be=Object(L.a)({header:{textAlign:"center",padding:"1rem",marginBottom:"1rem"}});function ye(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!0),l=Object(c.a)(i,2),s=l[0],m=l[1],u=be(),p=ce(he);return Object(n.useEffect)((function(){ae.get("notification/notification-history").then((function(e){var t=e.data.filter((function(e){return e.completed}));o(t),m(!1)}))}),[]),r.a.createElement(w.a,null,r.a.createElement(I.a,{variant:"h3",className:u.header},"Notification History"),r.a.createElement(p,{isLoading:s,rows:a,headers:["ID","Start Date","End Date","Your name","Manager","Notification Type","Message","Response"]}))}var Ee=Object(L.a)({header:{textAlign:"center",padding:"1rem",marginBottom:"1rem"}});function ve(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!0),l=Object(c.a)(i,2),s=l[0],m=l[1],u=Ee(),p=ce(he);return Object(n.useEffect)((function(){ae.get("notification/rotation-history").then((function(e){o(e.data),m(!1)}))}),[]),r.a.createElement(w.a,null,r.a.createElement(I.a,{variant:"h3",className:u.header},"Rotation History"),r.a.createElement(p,{isLoading:s,rows:a,headers:["ID","Date","Message","Manager","Number of calls"]}))}var ke=function(){var e=Object(n.useState)({allow_notifications:"",is_manager:"",phone_number:""}),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!1),m=Object(c.a)(i,2),u=m[0],p=m[1];return r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,{profile:a,loggedIn:u,setLoggedIn:p}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:function(){return r.a.createElement(S,{loggedIn:u})}}),r.a.createElement(s.a,{exact:!0,path:"/notification-history",component:ye}),r.a.createElement(s.a,{exact:!0,path:"/login",component:function(){return r.a.createElement(re,{setLoggedIn:p,setProfile:o})}}),r.a.createElement(s.a,{exact:!0,path:"/logout",component:function(){return r.a.createElement(oe,{setLoggedIn:p})}}),r.a.createElement(s.a,{exact:!0,path:"/rotation",component:function(){return r.a.createElement(ve,{loggedIn:u,profile:a})}})),r.a.createElement(R,null)))};a(136),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.076f83ca.chunk.js.map