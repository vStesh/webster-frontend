(this.webpackJsonpwebster_front=this.webpackJsonpwebster_front||[]).push([[0],{162:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(40),i=n.n(c),s=n(35),o=n(116),j=n(15),l=n(14),d=n(230),u=n(229),b=n(231),h=n(225),x=n(222),O=n(8),p=n(217),m=n(233),g=n(218),f=n(234),v=n(232),w=n(224),y=n(114),k=n.n(y),S=n(203),C=Object(S.a)("div")({width:"350px",textAlign:"center"}),A=Object(S.a)(j.b)({textDecoration:"none",color:"black"}),B=n(0),D=function(){var e=a.useState(!1),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(B.jsxs)("div",{children:[Object(B.jsx)(w.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){return r(!0)},children:Object(B.jsx)(k.a,{})}),Object(B.jsx)(p.a,{anchor:"left",open:n,onClose:function(){r(!1)},onOpen:function(){},children:Object(B.jsxs)(C,{children:[Object(B.jsx)(u.a,{textAlign:"center",p:2,children:"\u041c\u0435\u043d\u044e"}),Object(B.jsx)(v.a,{}),Object(B.jsxs)(m.a,{children:[Object(B.jsx)(A,{to:"/repository",children:Object(B.jsx)(g.a,{button:!0,children:Object(B.jsx)(f.a,{primary:"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430"})})}),Object(B.jsx)(A,{to:"/orders",children:Object(B.jsx)(g.a,{button:!0,children:Object(B.jsx)(f.a,{primary:"\u0417\u0430\u043a\u0430\u0437\u044b"})})}),Object(B.jsx)(A,{to:"/templates",children:Object(B.jsx)(g.a,{button:!0,children:Object(B.jsx)(f.a,{primary:"\u0428\u0430\u0431\u043b\u043e\u043d\u044b"})})}),Object(B.jsx)(A,{to:"/history",children:Object(B.jsx)(g.a,{button:!0,children:Object(B.jsx)(f.a,{primary:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"})})}),Object(B.jsx)(A,{to:"/map",children:Object(B.jsx)(g.a,{button:!0,children:Object(B.jsx)(f.a,{primary:"\u041a\u0430\u0440\u0442\u0430"})})}),Object(B.jsx)(A,{to:"/users-images",children:Object(B.jsx)(g.a,{button:!0,children:Object(B.jsx)(f.a,{primary:"\u0412\u0430\u0448\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})})}),Object(B.jsx)(A,{to:"/settings",children:Object(B.jsx)(g.a,{button:!0,children:Object(B.jsx)(f.a,{primary:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})})]})]})})]})},R=Object(S.a)(j.b)({textDecoration:"none",color:"white"}),T=n(36),I=n(21),F=n.n(I),L=n(48),P=n(115),U=n.n(P).a.create({withCredentials:!0,baseURL:"http://api.printapp.store/"});U.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e})),U.interceptors.response.use((function(e){return console.log("config",e),e}),function(){var e=Object(L.a)(F.a.mark((function e(t){var n,a,r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,console.log(t.config),401!==t.response.status||!t.config||t.config._isRetry){e.next=17;break}return n._isRetry=!0,e.prev=4,e.next=7,U.get("/api/auth/refresh");case 7:return c=e.sent,console.log("response",c),localStorage.setItem("token",null===(a=c.data)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.accessToken),e.abrupt("return",U.request(n));case 13:e.prev=13,e.t0=e.catch(4),console.log("not permission",e.t0);case 16:case 17:throw t;case 18:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}());var z=function(){var e=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.post("api/auth/register",t).then((function(e){var t,n;return localStorage.setItem("token",null===(t=e.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.accessToken),e.data})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.post("api/auth/login",t).then((function(e){var t,n;return localStorage.setItem("token",null===(t=e.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.accessToken),e.data})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(L.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U.post("api/auth/logout"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=Object(T.b)("photo/updatePhoto",function(){var e=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U.put("api/user/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(T.b)("user/userDataRequest",Object(L.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U.get("api/auth/user").then((function(e){return e.data.data})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))),E=(Object(T.b)("users/usersRequest",Object(L.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U.get("/api/auth/users").then((function(e){return e.data})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))),function(){var e=Object(L.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t.name),console.log(t),console.log(n),e.abrupt("return",U.post("/api/photo/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=Object(T.c)({name:"user",initialState:{userData:{},status:"",isUser:!1},reducers:{logOutAction:function(e){localStorage.removeItem("token"),e.userData={},e.isUser=!1}},extraReducers:function(e){e.addCase(q.pending,(function(e){e.status="pending"})),e.addCase(q.fulfilled,(function(e,t){var n=t.payload;e.status="fulfilled",e.userData=n,e.isUser=!0})),e.addCase(q.rejected,(function(e){e.status="some error ocurred",e.isUser=!1}))}}),M=G.actions.logOutAction,Y=G.reducer,$=function(e){var t=e.loginButton,n=e.signUpButton,a=e.drawer,r=e.logOut,c=Object(s.b)(),i=t&&Object(B.jsx)(R,{to:"/login",children:Object(B.jsx)(x.a,{color:"inherit",variant:"outlined",children:"Log In"})}),o=n&&Object(B.jsx)(R,{to:"/sign-up",children:Object(B.jsx)(x.a,{color:"secondary",variant:"contained",children:"Sign Up"})}),j=r&&Object(B.jsx)(R,{to:"/welcome",children:Object(B.jsx)(x.a,{color:"inherit",variant:"contained",onClick:function(){_(),c(M())},children:"Log Out"})});return Object(B.jsx)(u.a,{children:Object(B.jsx)(d.a,{position:"static",children:Object(B.jsxs)(b.a,{children:[a&&Object(B.jsx)(D,{}),Object(B.jsx)(h.a,{variant:"h6",sx:{flexGrow:1},children:Object(B.jsx)(R,{to:"/",children:"Webster"})}),Object(B.jsx)(u.a,{mr:3,children:i}),o,j]})})})};$.defaultProps={loginButton:!1,signUpButton:!1};var W=$,J=Object(S.a)("section")({position:"relative",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}),V=Object(S.a)("img")({width:"500px",height:"350px",borderRadius:"10px"}),N=Object(S.a)("div")({cursor:"pointer",userSelect:"none"}),Q=Object(S.a)("div")({cursor:"pointer",userSelect:"none"}),X=function(e){var t=e.slides,n=a.useState(0),r=Object(O.a)(n,2),c=r[0],i=r[1],s=t.length;return!Array.isArray(t)||t.length<=0?null:Object(B.jsxs)(J,{children:[Object(B.jsx)(N,{onClick:function(){i(0===c?s-1:c-1)},children:"prev"}),Object(B.jsx)(Q,{onClick:function(){i(c===s-1?0:c+1)},children:"next"}),t.map((function(e,t){return Object(B.jsx)("div",{children:t===c&&Object(B.jsx)(V,{style:{width:"250px"},src:e.img,alt:"img"})},t)}))]})},K=n(226),ee=n(223),te=Object(S.a)("footer")({marginTop:"auto"}),ne=Object(S.a)(j.b)({textDecoration:"none",color:"white"}),ae=function(){return Object(B.jsx)(te,{children:Object(B.jsx)(u.a,{px:{xs:3,sm:10},py:{xs:5,sm:1},bgcolor:"text.secondary",color:"white",children:Object(B.jsxs)(K.a,{maxWidth:"lg",children:[Object(B.jsxs)(ee.a,{container:!0,spacing:5,children:[Object(B.jsxs)(ee.a,{item:!0,xs:12,sm:4,children:[Object(B.jsx)(u.a,{borderBottom:1,mt:{xs:10,sm:5},children:"Help"}),Object(B.jsx)(u.a,{children:Object(B.jsx)(ne,{to:"/",color:"inherit",children:"Contact"})}),Object(B.jsx)(u.a,{children:Object(B.jsx)(ne,{to:"/",color:"inherit",children:"Support"})}),Object(B.jsx)(u.a,{children:Object(B.jsx)(ne,{to:"/",color:"inherit",children:"Privacy Policy"})})]}),Object(B.jsxs)(ee.a,{item:!0,xs:12,sm:4,children:[Object(B.jsx)(u.a,{borderBottom:1,mt:{xs:10,sm:5},children:"Account"}),Object(B.jsx)(u.a,{children:Object(B.jsx)(ne,{to:"/login",color:"inherit",children:"Login"})}),Object(B.jsx)(u.a,{children:Object(B.jsx)(ne,{to:"/sign-up",color:"inherit",children:"Register"})})]}),Object(B.jsxs)(ee.a,{item:!0,xs:12,sm:4,children:[Object(B.jsx)(u.a,{borderBottom:1,mt:{xs:10,sm:5},children:"Help"}),Object(B.jsx)(u.a,{children:Object(B.jsx)(ne,{to:"/",color:"inherit",children:"Backup"})}),Object(B.jsx)(u.a,{children:Object(B.jsx)(ne,{to:"/",color:"inherit",children:"History"})}),Object(B.jsx)(u.a,{children:Object(B.jsx)(ne,{to:"/",color:"inherit",children:"Roll"})})]})]}),Object(B.jsxs)(u.a,{textAlign:"center",pt:{xs:5,sm:10},pb:{xs:5,sm:0},children:["Webster \xae ",(new Date).getFullYear()]})]})})})},re=[{img:"https://image.karabas.com/w/350/h/496/f/files/import/1755536841_ImageBig637727029565826171.jpeg"},{img:"https://image.karabas.com/w/350/h/496/f/files/import/1901210572_ImageBig637585785934416968.jpeg"},{img:"https://image.karabas.com/w/350/h/496/f/files/import/1755536841_ImageBig637727029565826171.jpeg"},{img:"https://image.karabas.com/w/350/h/496/f/files/import/1951698576_ImageBig637661237985929983.jpeg"},{img:"https://image.karabas.com/w/350/h/496/f/files/import/1901210572_ImageBig637585785934416968.jpeg"}],ce=Object(S.a)("div")({margin:"0px",display:"flex",flexDirection:"column",minHeight:"100vh"}),ie=function(){var e=Object(l.f)(),t=Object(s.c)((function(e){return e.user.isUser}));return Object(a.useEffect)((function(){localStorage.getItem("token")||t?e("/"):e("/welcome")}),[t,e]),Object(B.jsxs)(ce,{children:[Object(B.jsx)(W,{loginButton:!0,signUpButton:!0}),Object(B.jsx)("h1",{style:{textAlign:"center"},children:"Welcome page"}),Object(B.jsx)(X,{slides:re}),Object(B.jsx)(ae,{})]})},se=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(h.a,{variant:"h2",children:"about"}),Object(B.jsx)(j.b,{to:"/",children:"home"})]})},oe=n(4),je=Object(S.a)("div")({minHeight:"100vh"}),le=Object(S.a)("div")({margin:"0px auto",minHeight:"calc(100vh - 240px)",display:"flex",position:"relative",paddingTop:80}),de=Object(S.a)("div")((function(e){var t=e.theme;return Object(oe.a)({background:"white",boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",borderRadius:8,width:608,margin:"auto",paddingTop:64,paddingBottom:64,paddingLeft:32,paddingRight:32,display:"flex",flexDirection:"column",alignItems:"center"},t.breakpoints.down("sm"),{width:288})})),ue=Object(S.a)(h.a)({textAlign:"center"}),be=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(je,{children:[Object(B.jsx)(W,{loginButton:!0,signUpButton:!0}),Object(B.jsx)(le,{children:Object(B.jsx)(de,{children:Object(B.jsx)(ue,{children:"404 Page not found"})})})]})})},he=n(235),xe=n(236),Oe=n(237),pe=n(238),me=function(){return Object(B.jsx)(ee.a,{item:!0,xs:12,md:4,sx:{textAlign:"center"},children:Object(B.jsxs)(he.a,{sx:{maxWidth:300,height:300},children:[Object(B.jsx)("div",{children:Object(B.jsx)(xe.a,{component:"img",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRme26WOvMv0m1Iu462Md2Y1rSXZoAPrVUB7oAaJ6lHSm6MgLRLPC7sAlvBYYeziSVQkLU&usqp=CAU",alt:"blabla"})}),Object(B.jsxs)(Oe.a,{children:[Object(B.jsx)(h.a,{variant:"h5",children:"title"}),Object(B.jsx)(h.a,{variant:"body1",children:"price: 100$"})]}),Object(B.jsx)(pe.a,{children:Object(B.jsx)(x.a,{variant:"text",children:"Buy"})})]})})},ge=function(){return Object(B.jsxs)(ee.a,{container:!0,spacing:2,children:[Object(B.jsx)(me,{}),Object(B.jsx)(me,{}),Object(B.jsx)(me,{}),Object(B.jsx)(me,{}),Object(B.jsx)(me,{})]})},fe=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(W,{}),Object(B.jsx)(K.a,{sx:{mt:"1rem"},children:Object(B.jsx)(ge,{})}),Object(B.jsx)(j.b,{to:"/",children:"home"})]})},ve=n(228),we=n(227),ye=n(219),ke=n(221),Se=n(65),Ce=n.n(Se),Ae=n(66),Be=n.n(Ae),De=n(214),Re=Object(S.a)("div")({minHeight:"100vh"}),Te=Object(S.a)(De.a)({width:"350px",marginTop:"50px"}),Ie=Object(S.a)(x.a)({width:"280px",marginTop:"50px",height:"50px"}),Fe=(Object(S.a)(j.b)({textDecoration:"none",color:"white"}),Object(S.a)("div")({margin:"0px auto",minHeight:"calc(100vh - 240px)",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",paddingTop:80})),Le=Object(S.a)("div")((function(e){var t=e.theme;return Object(oe.a)({background:"white",boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",borderRadius:8,width:608,margin:"auto",paddingTop:64,paddingBottom:64,paddingLeft:32,paddingRight:32,display:"flex",flexDirection:"column",alignItems:"center"},t.breakpoints.down("sm"),{width:288})})),Pe=function(){var e=a.useState(""),t=Object(O.a)(e,2),n=t[0],r=t[1],c=a.useState(!1),i=Object(O.a)(c,2),s=i[0],o=i[1],j=a.useState(""),d=Object(O.a)(j,2),u=d[0],b=d[1],x=a.useState(!1),p=Object(O.a)(x,2),m=p[0],g=p[1],f=a.useState(!1),v=Object(O.a)(f,2),y=v[0],k=v[1],S=a.useState(""),C=Object(O.a)(S,2),A=C[0],D=C[1],R=a.useState(!1),T=Object(O.a)(R,2),I=T[0],F=T[1],L=a.useState(!1),P=Object(O.a)(L,2),U=P[0],H=P[1],_=a.useState(!1),Z=Object(O.a)(_,2),q=Z[0],E=Z[1],G=a.useState(""),M=Object(O.a)(G,2),Y=M[0],$=M[1],J=a.useState(!1),V=Object(O.a)(J,2),N=V[0],Q=V[1],X=a.useState(!1),K=Object(O.a)(X,2),ee=K[0],te=K[1],ne=a.useState(!1),re=Object(O.a)(ne,2),ce=re[0],ie=re[1],se=a.useState(""),oe=Object(O.a)(se,2),je=oe[0],le=oe[1];document.title="Sign Up";var de=Object(l.f)(),ue=function(e,t){e?(k(!1),t(!1)):(t(!0),k(!0))},be=function(e){e.preventDefault()};return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(Re,{children:[Object(B.jsx)(W,{loginButton:!0}),Object(B.jsx)(Fe,{children:Object(B.jsxs)(Le,{children:[Object(B.jsx)(h.a,{variant:"h5",children:"Get started with your account"}),Object(B.jsx)(Te,{id:"outlined-basic",label:"Your name",variant:"outlined",value:n,onChange:function(e){var t=e.target.value;le(""),r(t),o(!1),n.length<2&&o(!0)},error:s,helperText:s&&"Please enter your name."}),Object(B.jsx)(Te,{id:"outlined-basic",label:"Email",variant:"outlined",value:u,error:m,helperText:m&&"Please enter a valid email address.",onChange:function(e){var t=e.target.value;le(""),b(t),g(!1),!new RegExp("^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$").test(t)||t.length<4||t.length>40?(g(!0),k(!0)):(k(!1),g(!1))}}),Object(B.jsxs)(we.a,{sx:{m:1,width:"43.5ch"},variant:"outlined",children:[Object(B.jsx)(ye.a,{htmlFor:"outlined-adornment-password",error:U,children:"Password"}),Object(B.jsx)(ke.a,{label:"Password",id:"outlined-adornment-password",type:I?"text":"password",value:A,error:q,onChange:function(e){var t=e.target.value;le(""),D(t),H(!1),t.length<6?(H(!0),E(!0),k(!0)):(k(!1),E(!1))},endAdornment:Object(B.jsx)(ve.a,{position:"end",children:Object(B.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){F(!I)},onMouseDown:be,edge:"end",children:I?Object(B.jsx)(Ce.a,{}):Object(B.jsx)(Be.a,{})})})}),q?Object(B.jsx)("div",{style:{color:"#f44336",marginLeft:15,fontSize:13},children:"Looks like your password doesn\u2019t match requirements."}):null]}),Object(B.jsxs)(we.a,{sx:{m:1,width:"43.5ch"},variant:"outlined",children:[Object(B.jsx)(ye.a,{htmlFor:"outlined-adornment-password",error:ee,children:"Password"}),Object(B.jsx)(ke.a,{label:"Confirm Password",id:"outlined-adornment-password",type:N?"text":"password",value:Y,error:ce,onChange:function(e){var t=e.target.value;le(""),$(t),te(!1),t.length<6?(te(!0),ie(!0),k(!0)):(k(!1),ie(!1))},endAdornment:Object(B.jsx)(ve.a,{position:"end",children:Object(B.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){Q(!N)},onMouseDown:be,edge:"end",children:N?Object(B.jsx)(Ce.a,{}):Object(B.jsx)(Be.a,{})})})}),ce?Object(B.jsx)("div",{style:{color:"#f44336",marginLeft:15,fontSize:13},children:"Looks like your password doesn\u2019t match requirements."}):null]}),Object(B.jsx)("div",{style:{color:"red"},children:je}),Object(B.jsx)(Ie,{variant:"contained",disabled:y,onClick:function(){ue(u,g),ue(A,E),ue(Y,ie),ue(n,o),z({email:u,password:A,confirm:Y,name:n}).then((function(e){20===e.status?(le(e.message[0]),b(""),r(""),D(""),$("")):21===e.status&&(le(e.message[0]),D(""),$("")),0===e.status&&de("/")})).catch((function(e){return e}))},children:"Get Started"})]})}),Object(B.jsx)(ae,{})]})})},Ue=Object(S.a)("div")({minHeight:"100vh"}),ze=Object(S.a)(De.a)({width:"350px",marginTop:"50px"}),He=Object(S.a)(x.a)({width:"280px",marginTop:"50px",height:"50px"}),_e=(Object(S.a)(j.b)({textDecoration:"none",color:"white"}),Object(S.a)("div")({margin:"0px auto",minHeight:"calc(100vh - 240px)",display:"flex",position:"relative",paddingTop:80})),Ze=Object(S.a)("div")((function(e){var t=e.theme;return Object(oe.a)({background:"white",boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",borderRadius:8,width:608,margin:"auto",paddingTop:64,paddingBottom:64,paddingLeft:32,paddingRight:32,display:"flex",flexDirection:"column",alignItems:"center"},t.breakpoints.down("sm"),{width:288})})),qe=Object(S.a)(j.b)({textDecoration:"none",color:"black",opacity:.5,"&:hover":{opacity:1}}),Ee=function(){var e=a.useState(!1),t=Object(O.a)(e,2),n=t[0],r=t[1],c=a.useState(),i=Object(O.a)(c,2),s=i[0],o=i[1],j=a.useState(!1),d=Object(O.a)(j,2),u=d[0],b=d[1],x=a.useState(""),p=Object(O.a)(x,2),m=p[0],g=p[1],f=a.useState(""),v=Object(O.a)(f,2),y=v[0],k=v[1],S=a.useState(!1),C=Object(O.a)(S,2),A=C[0],D=C[1],R=a.useState(!1),T=Object(O.a)(R,2),I=T[0],F=T[1],L=a.useState(""),P=Object(O.a)(L,2),U=P[0],z=P[1],_=Object(l.f)();return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(Ue,{children:[Object(B.jsx)(W,{signUpButton:!0}),Object(B.jsx)(_e,{children:Object(B.jsxs)(Ze,{children:[Object(B.jsx)(h.a,{variant:"h5",children:"Get started with your account"}),Object(B.jsx)(ze,{id:"outlined-basic",label:"Email",variant:"outlined",value:m,error:!!(null===s||void 0===s?void 0:s.email),helperText:null===s||void 0===s?void 0:s.email,onChange:function(e){var t=e.target.value;z(""),g(t),!new RegExp("^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$").test(t)||t.length<4||t.length>40?(o({email:"Please enter a valid email address."}),r(!0)):(r(!1),o({email:""}))}}),Object(B.jsxs)(we.a,{sx:{m:1,width:"43.5ch"},variant:"outlined",children:[Object(B.jsx)(ye.a,{htmlFor:"outlined-adornment-password",error:I,children:"Password"}),Object(B.jsx)(ke.a,{label:"Password",id:"outlined-adornment-password",type:A?"text":"password",value:y,error:u,onChange:function(e){var t=e.target.value;z(""),k(t),F(!1),t.length<6?(F(!0),b(!0),r(!0)):(r(!1),b(!1))},endAdornment:Object(B.jsx)(ve.a,{position:"end",children:Object(B.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){D(!A)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:A?Object(B.jsx)(Ce.a,{}):Object(B.jsx)(Be.a,{})})})}),u?Object(B.jsx)("div",{style:{color:"#f44336",marginLeft:15,fontSize:13},children:"Looks like your password doesn\u2019t match requirements."}):null]}),Object(B.jsx)(qe,{to:"/forget-password",children:Object(B.jsx)(h.a,{variant:"subtitle1",children:"don't remember password"})}),Object(B.jsx)("div",{style:{color:"red"},children:U}),Object(B.jsx)(He,{type:"submit",onClick:function(e){e.preventDefault(),m?(r(!1),o({email:""})):(r(!0),o({email:"please write valid email."})),y?(r(!1),b(!1),F(!1)):(F(!0),r(!0),b(!0)),H({email:m,password:y}).then((function(e){20===e.status?z(e.message[0]):(3===e.status||2===e.status)&&(z(e.message[0]),g(""),k("")),0===e.status&&_("/")}))},variant:"contained",disabled:n,children:"Get Started"})]})}),Object(B.jsx)(ae,{})]})})},Ge=Object(S.a)("div")({minHeight:"100vh"}),Me=Object(S.a)("div")({margin:"0px auto",minHeight:"calc(100vh - 240px)",display:"flex",position:"relative",paddingTop:80}),Ye=Object(S.a)("div")((function(e){var t=e.theme;return Object(oe.a)({background:"white",boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",borderRadius:8,width:608,margin:"auto",paddingTop:64,paddingBottom:64,paddingLeft:32,paddingRight:32,display:"flex",flexDirection:"column",alignItems:"center"},t.breakpoints.down("sm"),{width:288})})),$e=Object(S.a)(h.a)({textAlign:"center"}),We=Object(S.a)(De.a)({width:"350px",marginTop:"50px"}),Je=Object(S.a)(x.a)({width:"280px",marginTop:"50px",height:"50px"}),Ve=function(){var e=r.a.useState(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],c=r.a.useState(!1),i=Object(O.a)(c,2),s=i[0],o=i[1],j=r.a.useState(""),l=Object(O.a)(j,2),d=l[0],u=l[1];return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(Ge,{children:[Object(B.jsx)(W,{loginButton:!0}),Object(B.jsx)(Me,{children:Object(B.jsxs)(Ye,{children:[Object(B.jsx)($e,{variant:"h5",children:"Please type your email address and we will send you reset password by email."}),Object(B.jsx)(We,{id:"outlined-basic",label:"Email",variant:"outlined",value:d,error:s,helperText:s&&"Please enter a valid email address.",onChange:function(e){var t=e.target.value;u(t),o(!1),!new RegExp("^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$").test(t)||t.length<4||t.length>40?(o(!0),a(!0)):(a(!1),o(!1))}}),Object(B.jsx)(Je,{type:"submit",onClick:function(e){e.preventDefault(),d?(a(!1),o(!1)):(a(!0),o(!0))},variant:"contained",disabled:n,children:"Get Started"})]})})]})})},Ne=Object(S.a)("div")({margin:"0px",display:"flex",flexDirection:"column",minHeight:"100vh"});document.title="Main Page";var Qe=function(){var e=Object(s.b)(),t=Object(l.f)(),n=Object(s.c)((function(e){return e.user.isUser}));return Object(a.useEffect)((function(){localStorage.getItem("token")||n?(e(q()),t("/")):t("/welcome")}),[t,e]),Object(B.jsxs)(Ne,{children:[Object(B.jsx)(W,{drawer:!0,logOut:!0}),Object(B.jsx)("h1",{style:{textAlign:"center"},children:"you are logged"}),Object(B.jsx)(ae,{})]})},Xe=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(h.a,{variant:"h2",children:"\u0428\u0430\u0431\u043b\u043e\u043d\u044b"}),Object(B.jsx)(j.b,{to:"/",children:"home"})]})},Ke=function(){var e=Object(s.c)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.userData}));return Object(B.jsxs)(ce,{children:[Object(B.jsx)(W,{logOut:!0,drawer:!0}),Object(B.jsx)(h.a,{variant:"h2",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(B.jsxs)("div",{children:["Your name: ",e?e.name:"please login"]}),Object(B.jsxs)("div",{children:["Your email: ",e?e.email:"please login"]}),Object(B.jsx)(j.b,{to:"/",children:"home"}),Object(B.jsx)(ae,{})]})},et=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(h.a,{variant:"h2",children:"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"}),Object(B.jsx)(j.b,{to:"/",children:"home"})]})},tt=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(h.a,{variant:"h2",children:"\u0417\u0430\u043a\u0430\u0437\u044b"}),Object(B.jsx)(j.b,{to:"/",children:"home"})]})},nt=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(h.a,{variant:"h2",children:"\u043a\u0430\u0440\u0442\u0430"}),Object(B.jsx)(j.b,{to:"/",children:"home"})]})},at=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(h.a,{variant:"h2",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"}),Object(B.jsx)(j.b,{to:"/",children:"home"})]})},rt=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(W,{drawer:!0,logOut:!0}),Object(B.jsx)(h.a,{variant:"h2",children:"Images"}),Object(B.jsx)("input",{type:"file",name:"picture",onChange:function(e){e.target.files.length&&(console.log(e.target.files[0]),E(e.target.files[0]))}}),Object(B.jsx)(j.b,{to:"/",children:"home"})]})},ct=function(e){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(j.a,{basename:"/",children:Object(B.jsxs)(l.c,{children:[Object(B.jsx)(l.a,{path:"/",element:Object(B.jsx)(Qe,{})}),Object(B.jsx)(l.a,{path:"/about",element:Object(B.jsx)(se,{})}),Object(B.jsx)(l.a,{path:"/list-items",element:Object(B.jsx)(fe,{})}),Object(B.jsx)(l.a,{path:"/sign-up",element:Object(B.jsx)(Pe,{})}),Object(B.jsx)(l.a,{path:"/login",element:Object(B.jsx)(Ee,{})}),Object(B.jsx)(l.a,{path:"/forget-password",element:Object(B.jsx)(Ve,{})}),Object(B.jsx)(l.a,{path:"/welcome",element:Object(B.jsx)(ie,{})}),Object(B.jsx)(l.a,{path:"/templates",element:Object(B.jsx)(Xe,{})}),Object(B.jsx)(l.a,{path:"/settings",element:Object(B.jsx)(Ke,{})}),Object(B.jsx)(l.a,{path:"/repository",element:Object(B.jsx)(et,{})}),Object(B.jsx)(l.a,{path:"/orders",element:Object(B.jsx)(tt,{})}),Object(B.jsx)(l.a,{path:"/map",element:Object(B.jsx)(nt,{})}),Object(B.jsx)(l.a,{path:"/history",element:Object(B.jsx)(at,{})}),Object(B.jsx)(l.a,{path:"/users-images",element:Object(B.jsx)(rt,{})}),Object(B.jsx)(l.a,{path:"*",element:Object(B.jsx)(be,{})})]})})})},it=Object(o.hot)((function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(ct,{})})})),st=n(117),ot=n.n(st),jt=n(45),lt=Object(T.c)({name:"photo",initialState:{photoURL:{},status:""},reducers:{},extraReducers:function(e){e.addCase(Z.pending,(function(e){e.status="pending"})),e.addCase(Z.fulfilled,(function(e,t){var n=t.payload;e.status="fulfilled",e.photoURL=n})),e.addCase(Z.rejected,(function(e){e.status="some error ocurred"}))}}).reducer,dt=Object(jt.b)({photo:lt,user:Y}),ut=Object(T.a)({reducer:dt,middleware:function(e){return e({serializableCheck:!1}).concat(ot.a)},devTools:!1});n(162),n(163);i.a.render(Object(B.jsx)(s.a,{store:ut,children:Object(B.jsx)(it,{})}),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.4b62742c.chunk.js.map