(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{61:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(26),c=a.n(r),s=a(5),o=a(20),i=a(49),u=a(6),l={authLogin:"[auth] Auth login",authLogout:"[auth] Auth logout",authChecking:"[auth] Checking login state",authCheckingFinish:"[auth] Finish checking login state",uiHideAsideBar:"[ui] Hidde/show aside",uiSetLouding:"[ui] Ui set louding",uiSetUndisabledUpdataButton:"[ui] Ui set undisable update button",uiSetdisabledUpdataButton:"[ui] Ui set disable update button",uiEditStateButton:"[ui] Ui editStateButton",postSetActive:"[post] Set active post",postSetActiveNew:"[post] Set active new post",postGetPost:"[post] Post get post",postCreatePost:"[post] Post create post",postSave:"[post] Post save",postDelete:"[post] Post delete",postUpdate:"[post] Post update",postLogoutCleanPosts:"[post] Post logout cleaning"},d={checking:!0},b=a(11),j={posts:[],activePost:null},f={asideHidden:!1,loading:!1,disableUpdate:!0},p=Object(o.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.uiHideAsideBar:return Object(u.a)(Object(u.a)({},e),{},{asideHidden:!e.asideHidden});case l.uiSetLouding:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case l.uiSetFinishLouding:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case l.uiSetdisabledUpdataButton:return Object(u.a)(Object(u.a)({},e),{},{disableUpdate:!0});case l.uiSetUndisabledUpdataButton:return Object(u.a)(Object(u.a)({},e),{},{disableUpdate:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.authLogin:return Object(u.a)(Object(u.a)({},e),{},{checking:!1},t.payload);case l.authCheckingFinish:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case l.authLogout:return{checking:!1};default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.postGetPost:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload.map((function(e){return e}))});case l.postSetActive:return Object(u.a)(Object(u.a)({},e),{},{activePost:Object(u.a)({},t.payload)});case l.postSave:return Object(u.a)(Object(u.a)({},e),{},{posts:[t.payload].concat(Object(b.a)(e.posts))});case l.postUpdate:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.payload.id?t.payload:e}))});case l.postDelete:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload})),activePost:null});case l.postLogoutCleanPosts:return{posts:[],activePost:null};default:return e}}}),m="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,O=Object(o.d)(p,m(Object(o.a)(i.a))),h=(a(61),a(14)),x=a(4),v=a(3),g=a.n(v),_=a(7),N=a(8),y=a.n(N),k=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="http://167.71.17.236:3000/api/".concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},w=function(){var e=Object(_.a)(g.a.mark((function e(t,a){var n,r,c=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.length>2&&void 0!==c[2]?c[2]:"GET",r="http://167.71.17.236:3000/api/".concat(t),"GET"!==n){e.next=6;break}return e.abrupt("return",fetch(r));case 6:return e.abrupt("return",fetch(r,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(a)}));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(_.a)(g.a.mark((function e(t,a){var n,r,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token")||"",(r=new FormData).append("imageUrl",t),a&&r.append("prevImg",a),e.prev=4,e.next=7,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Escritor_de_blogs_frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/post/updateImg"),{method:"POST",headers:{"x-token":n},body:r});case 7:return c=e.sent,e.next=10,c.json();case 10:if(!(s=e.sent).ok){e.next=15;break}return e.abrupt("return",s.imgUrl);case 15:return console.log(s),e.abrupt("return",null);case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0),y.a.fire("Error","Hubo un error al subir la imagen","error");case 23:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){return{type:l.uiSetdisabledUpdataButton}},E=function(){return{type:l.uiSetUndisabledUpdataButton}},P=function(e){return function(){var t=Object(_.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k("post/".concat(e.id),e,"PUT");case 3:return n=t.sent,t.next=6,n.json();case 6:(r=t.sent).ok?(a(T(e)),a(S()),y.a.fire("Guardado!","","success")):(console.log(r),y.a.fire("Error","Ocurrio un error con el servidor, intentelo de nuevo m\xe1s tarde","error")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),y.a.fire("Error","Ocurrio un error con el servidor, intentelo de nuevo m\xe1s tarde","error");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var a=Object(_.a)(g.a.mark((function a(n,r){var c,s;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=r().post.activePost.post,a.prev=1,y.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,didOpen:function(){y.a.showLoading()}}),a.next=5,C(e,t);case 5:s=a.sent,c.imageUrl=s,c.id?n(P(c)):localStorage.setItem("url_img",s),y.a.close(),y.a.fire("Imagen subida","La Imagen se cargo correctamente!","success"),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),console.log(a.t0),y.a.fire("Error","Ocurrio un error con el servidor, intentelo de nuevo m\xe1s tarde","error");case 16:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e,t){return a.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(_.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k("post/".concat(e),{},"DELETE");case 3:return n=t.sent,t.next=6,n.json();case 6:(r=t.sent).ok?(a(I(e)),y.a.fire("Borrado!","","success")):(console.log(r),y.a.fire("Error","Ocurrio un error con el servidor, intentelo de nuevo m\xe1s tarde","error")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),y.a.fire("Error","Ocurrio un error con el servidor, intentelo de nuevo m\xe1s tarde","error");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return{type:l.postUpdate,payload:e}},D=function(e){return{type:l.postSave,payload:e}},I=function(e){return{type:l.postDelete,payload:e}},A=function(e,t){return{type:l.postSetActive,payload:{isNew:e,post:t}}},L=function(e){return{type:l.postGetPost,payload:e}},H=function(e){return function(){var t=Object(_.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w("auth/create",Object(u.a)({},e),"POST");case 3:return n=t.sent,t.next=6,n.json();case 6:(r=t.sent).ok?(a(F({uid:r.uid,name:r.name})),localStorage.setItem("token",r.token)):(y.a.fire({icon:"error",title:"Oops...",text:r.msg}),console.log(r)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),y.a.fire({icon:"error",title:"Oops...",text:t.t0.msg});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},G=function(){return function(e){localStorage.clear(),e(q()),e({type:l.postLogoutCleanPosts})}},R=function(){return{type:l.authCheckingFinish}},F=function(e){return{type:l.authLogin,payload:e}},q=function(){return{type:l.authLogout}},J=a(50),K=a.n(J),W=a(1),z=function(){return Object(W.jsx)("div",{className:"loading__load-container",children:Object(W.jsx)(K.a,{size:60,color:"#2D95EB"})})},M=a(10),V=a(9),X=function(){var e=Object(s.b)(),t=Object(n.useState)({email:"",password:""}),a=Object(V.a)(t,2),r=a[0],c=a[1],o=r.email,i=r.password,l=Object(n.useState)(!1),d=Object(V.a)(l,2),b=d[0],j=d[1],f=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(M.a)({},t.name,t.value)))},p=function(){j(!b)};return Object(W.jsx)("div",{className:"auth__auth-container",children:Object(W.jsxs)("div",{className:"auth__auth-content",children:[Object(W.jsx)("div",{className:"auth__auth-header",children:Object(W.jsx)("h2",{children:"Iniciar sesi\xf3n"})}),Object(W.jsx)("div",{className:"auth__auth-body",children:Object(W.jsxs)("form",{className:"form__form-group",onSubmit:function(t){if(t.preventDefault(),o.length<2||i.length<7)return y.a.fire("Error","Asegurate de llenar todos los espacios","error");e(function(e,t){return function(){var a=Object(_.a)(g.a.mark((function a(n){var r,c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w("auth",{email:e,password:t},"POST");case 3:return r=a.sent,a.next=6,r.json();case 6:(c=a.sent).ok?(n(F({uid:c.uid,name:c.name})),localStorage.setItem("token",c.token)):y.a.fire({icon:"error",title:"Oops...",text:"El correo o la contrase\xf1a son incorrectos"}),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0),y.a.fire({icon:"error",title:"Oops...",text:"Ocurrio un error con el servicio, intentelo m\xe1s tarde"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(o,i))},children:[Object(W.jsx)("label",{className:"form__form-label",children:"Correo:"}),Object(W.jsxs)("div",{className:"form__form-group-icon",children:[Object(W.jsx)("input",{className:"form__form-control",type:"email",autoComplete:"false",name:"email",placeholder:"",value:o,onChange:f}),Object(W.jsx)("i",{className:"fas fa-envelope form-icon"})]}),Object(W.jsx)("label",{className:"form__form-label",children:"Contrase\xf1a:"}),Object(W.jsxs)("div",{className:"form__form-group-icon",children:[Object(W.jsx)("input",{className:"form__form-control",autoComplete:"false",type:"".concat(b?"text":"password"),name:"password",placeholder:"",value:i,onChange:f}),Object(W.jsx)("i",{className:"fas fa-lock form-icon"}),b?Object(W.jsx)("div",{className:"form-icon-eye",children:Object(W.jsx)("i",{onClick:p,className:"fas fa-eye-slash"})}):Object(W.jsx)("div",{className:"form-icon-eye",children:Object(W.jsx)("i",{onClick:p,className:"fas fa-eye"})})]}),Object(W.jsx)(h.b,{to:"/auth/register",className:"form__form-link",children:Object(W.jsx)("span",{children:"\xbfNo tienes una cuenta? Registrate"})}),Object(W.jsx)("button",{className:"btn btn-primary btn-block",children:"Iniciar sesi\xf3n"})]})})]})})},Y=function(e){return e.uid?Object(W.jsx)(x.a,{to:"/"}):Object(W.jsx)(X,{})},$=function(e){return e.name.length<2||e.lastName.length<2||e.email.length<2||e.password.length<2||e.confirmPassword.length<2?{ok:!1,msg:"Asegurate de llenar todos los espacios."}:(t=e.email,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?e.password!==e.confirmPassword?{ok:!1,msg:"Las constrase\xf1as deben coincidir."}:e.password.length<7?{ok:!1,msg:"La constrase\xf1a debe tener al menos 7 caracteres ."}:{ok:!0}:{ok:!1,msg:"El correo electronico no es valido."});var t},Q=function(){var e=Object(s.b)(),t=Object(n.useState)({name:"",lastName:"",email:"",password:"",confirmPassword:""}),a=Object(V.a)(t,2),r=a[0],c=a[1],o=r.name,i=r.lastName,l=r.email,d=r.password,b=r.confirmPassword,j=Object(n.useState)(!1),f=Object(V.a)(j,2),p=f[0],m=f[1],O=Object(n.useState)(!1),x=Object(V.a)(O,2),v=x[0],N=x[1],k=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(M.a)({},t.name,t.value)))},w=function(){var t=Object(_.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,$(r);case 3:if((n=t.sent).ok){t.next=6;break}return t.abrupt("return",y.a.fire("Error",n.msg,"error"));case 6:e(H({username:o,last_name:i,email:l,password:d}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){m(!p)},S=function(){N(!v)};return Object(W.jsx)("div",{className:"auth__auth-container",children:Object(W.jsxs)("div",{className:"auth__auth-content",children:[Object(W.jsx)("div",{className:"auth__auth-header",children:Object(W.jsx)("h2",{children:"Registrarse"})}),Object(W.jsx)("div",{className:"auth__auth-body",children:Object(W.jsxs)("form",{className:"form__form-group",onSubmit:w,children:[Object(W.jsx)("label",{className:"form__form-label",children:"Nombre:"}),Object(W.jsxs)("div",{className:"form__form-group-icon",children:[Object(W.jsx)("input",{className:"form__form-control",type:"text",autoComplete:"false",name:"name",placeholder:"",value:o,onChange:k}),Object(W.jsx)("i",{className:"fas fa-user form-icon"})]}),Object(W.jsx)("label",{className:"form__form-label",children:"Apellido:"}),Object(W.jsxs)("div",{className:"form__form-group-icon",children:[Object(W.jsx)("input",{className:"form__form-control",type:"text",autoComplete:"false",name:"lastName",placeholder:"",value:i,onChange:k}),Object(W.jsx)("i",{className:"fas fa-user form-icon"})]}),Object(W.jsx)("label",{className:"form__form-label",children:"Correo:"}),Object(W.jsxs)("div",{className:"form__form-group-icon",children:[Object(W.jsx)("input",{className:"form__form-control",type:"email",autoComplete:"false",name:"email",placeholder:"",value:l,onChange:k}),Object(W.jsx)("i",{className:"fas fa-envelope form-icon"})]}),Object(W.jsx)("label",{className:"form__form-label",children:"Contrase\xf1a:"}),Object(W.jsxs)("div",{className:"form__form-group-icon",children:[Object(W.jsx)("input",{className:"form__form-control",autoComplete:"false",type:"".concat(p?"text":"password"),name:"password",placeholder:"",value:d,onChange:k}),Object(W.jsx)("i",{className:"fas fa-lock form-icon"}),p?Object(W.jsx)("div",{className:"form-icon-eye",children:Object(W.jsx)("i",{onClick:C,className:"fas fa-eye-slash"})}):Object(W.jsx)("div",{className:"form-icon-eye",children:Object(W.jsx)("i",{onClick:C,className:"fas fa-eye"})})]}),Object(W.jsx)("label",{className:"form__form-label",children:"Confirmar contrase\xf1a:"}),Object(W.jsxs)("div",{className:"form__form-group-icon",children:[Object(W.jsx)("input",{className:"form__form-control",autoComplete:"false",type:"".concat(v?"text":"password"),name:"confirmPassword",placeholder:"",value:b,onChange:k}),Object(W.jsx)("i",{className:"fas fa-lock form-icon"}),v?Object(W.jsx)("i",{onClick:S,className:"fas fa-eye-slash form-icon-eye"}):Object(W.jsx)("i",{onClick:S,className:"fas fa-eye form-icon-eye"})]}),Object(W.jsx)(h.b,{to:"/auth/login",className:"form__form-link",children:Object(W.jsx)("span",{children:"\xbfYa tienes una cuenta? Inicia sesi\xf3n"})}),Object(W.jsx)("button",{className:"btn btn-primary btn-block",children:"Registrarse"})]})})]})})},Z=function(e){return e.uid?Object(W.jsx)(x.a,{to:"/"}):Object(W.jsx)(Q,{})},ee={title:"",body:""},te=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.post})).activePost,a=Object(s.c)((function(e){return e.ui})).disableUpdate,n=function(){var n=Object(_.a)(g.a.mark((function n(){var r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a){n.next=8;break}return n.next=3,y.a.fire({icon:"warning",title:"\xbfSeguro que quieres cambiar de documento?",text:"S\xed cambias de documento sin guardar se perder\xe1n los cambios",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Guardar",denyButtonText:"No guardar",cancelButtonText:"cancelar"});case 3:r=n.sent,console.log(r),r.isConfirmed?(e(P(t.post)),e(A(!0,ee))):r.isDenied&&e(A(!0,ee)),n.next=9;break;case 8:e(A(!0,ee));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(W.jsxs)("div",{className:"aside__aside-add-post",onClick:n,children:[Object(W.jsx)("i",{className:"fas fa-plus-circle fa-7x"}),Object(W.jsx)("span",{children:"Crear publicaci\xf3n"})]})},ae=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).disableUpdate,a=Object(s.c)((function(e){return e.post})).activePost,n=function(){var n=Object(_.a)(g.a.mark((function n(){var r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=7;break}return n.next=3,y.a.fire({icon:"warning",title:"\xbfSeguro que quieres salir?",text:"S\xed sales sin guardar se perder\xe1n los cambios",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Guardar",denyButtonText:"No guardar",cancelButtonText:"cancelar"});case 3:(r=n.sent).isConfirmed?e(P(a.post)):r.isDenied&&e(G()),n.next=8;break;case 7:e(G());case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(W.jsx)("button",{onClick:n,className:"btn btn-danger",children:Object(W.jsxs)("span",{children:["Salir ",Object(W.jsx)("i",{className:"fas fa-sign-out-alt"})]})})},ne=a(31),re=a.n(ne);a(72);re.a.locale("es-mx");var ce=function(e){var t=e.id,a=e.title,n=e.date,r=e.body,c=e.imageUrl,o=e.user_id,i=Object(s.b)(),u=Object(s.c)((function(e){return e.ui})).disableUpdate,l=Object(s.c)((function(e){return e.post})).activePost,d=function(){var e=Object(_.a)(g.a.mark((function e(){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=9;break}if(t===l.post.id){e.next=7;break}return e.next=4,y.a.fire({icon:"warning",title:"\xbfSeguro que quieres cambiar de documento?",text:"S\xed cambias de documento sin guardar se perder\xe1n los cambios",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Guardar",denyButtonText:"No guardar",cancelButtonText:"cancelar"});case 4:s=e.sent,console.log(s),s.isConfirmed?i(P(l.post)):s.isDenied&&i(A(!1,{id:t,title:a,date:n,body:r,imageUrl:c,user_id:o}));case 7:e.next=10;break;case 9:i(A(!1,{id:t,title:a,date:n,body:r,imageUrl:c,user_id:o}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(W.jsxs)("div",{className:"aside__post-container",onClick:d,children:[Object(W.jsx)("div",{className:"aside__post-title",children:Object(W.jsx)("span",{children:a})}),Object(W.jsx)("div",{className:"aside__post-date",children:Object(W.jsx)("span",{children:re()(Number(n)).format("llll")})})]})},se=function(){var e=Object(s.c)((function(e){return e.post})).posts;return Object(W.jsx)("div",{className:"aside__aside-myPosts",children:e.map((function(e){return Object(W.jsx)(ce,Object(u.a)({},e),e.id)}))})},oe=function(){var e=Object(s.c)((function(e){return e.ui})).asideHidden,t=Object(s.c)((function(e){return e.auth})).name,a=Object(s.b)();Object(n.useEffect)((function(){a(function(){var e=Object(_.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k("post");case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok?t(L(n.resp)):console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),y.a.fire("Error","Ocurrio un error con el servidor, intentelo de nuevo m\xe1s tarde","error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[a]);return Object(W.jsxs)("aside",{className:"aside__aside-container ".concat(e&&"asideHidden"),children:[Object(W.jsx)("div",{className:"aside__aside-toggle-container",children:Object(W.jsx)("div",{className:"aside__toggle ".concat(e&&"asideHiddenToggle"),onClick:function(){a({type:l.uiHideAsideBar})},children:e?Object(W.jsx)("i",{className:"fas fa-arrow-right"}):Object(W.jsx)("i",{className:"fas fa-arrow-left"})})}),Object(W.jsxs)("div",{className:"aside__aside-user",children:[Object(W.jsxs)("span",{children:[Object(W.jsx)("i",{className:"fas fa-user"})," "," ".concat(t)]}),Object(W.jsx)(ae,{})]}),Object(W.jsx)(te,{}),Object(W.jsx)("div",{className:"aside__aside-myPosts-span",children:Object(W.jsx)("span",{children:"Mis publicaciones"})}),Object(W.jsx)(se,{})]})},ie=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.post})).activePost,a=function(){var a=Object(_.a)(g.a.mark((function a(){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.fire({icon:"warning",title:"\xbfSeguro que quieres borrar el documento?",text:"Si borras el documento no se podr\xe1 recuperar",showCancelButton:!0,confirmButtonText:"Borrar",cancelButtonText:"cancelar"});case 2:a.sent.isConfirmed&&e(B(t.post.id));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("button",{className:"btn btn-danger blogCreator-blog-fab-delete",onClick:a,children:Object(W.jsxs)("span",{children:["Eliminar ",Object(W.jsx)("i",{className:"fas fa-trash"})]})})})},ue=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).disableUpdate,a=Object(s.c)((function(e){return e.post})).activePost;return Object(W.jsxs)("button",{className:"navbar__nav-button",disabled:t,onClick:function(){var t;e((t=a.post,function(){var e=Object(_.a)(g.a.mark((function e(a){var n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("url_img")||null,e.prev=1,e.next=4,k("post",Object(u.a)(Object(u.a)({},t),{},{imageUrl:n}),"POST");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?(a(D(c.post)),a(S()),a(A(!1,c.post)),localStorage.removeItem("url_img"),y.a.fire("Guardado!","","success")):(console.log(c),y.a.fire("Error","Ocurrio un error con el servidor, intentelo de nuevo m\xe1s tarde","error")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),y.a.fire("Error","Ocurrio un error con el servidor, intentelo de nuevo m\xe1s tarde","error");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(W.jsx)("i",{className:"fas fa-save fa-2x"}),Object(W.jsx)("span",{children:"Guardar post"})]})},le=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.post})).activePost;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("input",{id:"fileSelector",type:"file",name:"image",style:{display:"none"},onChange:function(a){var n=a.target.files[0];if(t.isNew){var r=localStorage.getItem("url_img")||null;e(U(n,r))}else e(U(n))}}),Object(W.jsxs)("button",{className:"navbar__nav-button",onClick:function(){document.querySelector("#fileSelector").click()},children:[Object(W.jsx)("i",{className:"fas fa-upload fa-2x"}),Object(W.jsx)("span",{children:"Subir imagen"})]})]})},de=function(){var e=Object(s.c)((function(e){return e.post})).activePost,t=Object(s.c)((function(e){return e.ui})).disableUpdate,a=Object(s.b)();return Object(W.jsxs)("button",{className:"navbar__nav-button",onClick:function(){a(P(e.post))},disabled:t,children:[Object(W.jsx)("i",{className:"fas fa-pen-fancy fa-2x"}),Object(W.jsx)("span",{children:"Actualizar post"})]})},be=a(51),je=a(52),fe=a.n(je),pe=function(){var e=Object(s.c)((function(e){return e.post})).activePost;return Object(W.jsx)("button",{className:"btn btn-primary btn-circle",onClick:function(){y.a.fire({imageUrl:e.post.imageUrl,imageWidth:"90%",showConfirmButton:!1,imageAlt:"Custom image"})},children:Object(W.jsx)("i",{className:"fas fa-image fa-2x"})})},me=function(){var e=Object(s.c)((function(e){return e.post})).activePost;return Object(W.jsx)("button",{className:"btn btn-primary btn-circle",onClick:function(){y.a.fire({imageUrl:e.post.imageUrl,width:800,showConfirmButton:!1,html:' <div class="modal-html"> <h1>'.concat(e.post.title,"</h1> ").concat(e.post.body," </div> "),imageAlt:"A tall image"})},children:Object(W.jsx)("i",{className:"fas fa-eye fa-2x"})})},Oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).asideHidden,a=Object(s.c)((function(e){return e.post})).activePost,r=a.post,c=Object(n.useState)(r),o=Object(V.a)(c,2),i=o[0],l=o[1],d=i.title,b=i.body,j=i.imageUrl,f=Object(n.useRef)(r.id),p=Object(n.useRef)(a.isNew);Object(n.useEffect)((function(){r.id!==f.current&&(l(r),f.current=r.id,e(S()))}),[r,f,l,e]),Object(n.useEffect)((function(){a.isNew===p.current&&e(A(a.isNew,Object(u.a)({},i))),p.current=a.isNew}),[e,i,a.isNew]);return Object(W.jsxs)("div",{className:"blogEditor__blog-container ".concat(!t&&"asideHide"),children:[Object(W.jsx)("div",{className:"blogEditor__blog-navEditor",children:Object(W.jsxs)("div",{className:"blogCreator-blog-nav-buttons",children:[Object(W.jsx)(le,{}),a.isNew?Object(W.jsx)(ue,{}):Object(W.jsx)(de,{})]})}),Object(W.jsxs)("div",{className:"blogEditor__blog-fab",children:[Object(W.jsx)("div",{className:"blogEditor__blog-img",children:!!j&&Object(W.jsx)(pe,{})}),Object(W.jsx)("div",{className:"blogEditor__blog-preview",children:!a.isNew&&Object(W.jsx)(me,{})})]}),Object(W.jsx)("div",{className:"blogEditor__blog-editor",children:Object(W.jsxs)("div",{className:"blogEditor__blog-editor-container",children:[Object(W.jsx)("div",{className:"blogEditor__blog-editor-title",children:Object(W.jsx)("input",{type:"text",placeholder:"Some awesome title!",value:d,name:"title",onChange:function(t){var a=t.target;l(Object(u.a)(Object(u.a)({},i),{},Object(M.a)({},a.name,a.value))),e(E())}})}),Object(W.jsx)("div",{className:"blogEditor__blog-editor-body",children:Object(W.jsx)(be.CKEditor,{editor:fe.a,className:"editor",data:b,onChange:function(t,a){JSON.stringify(r.body)!==JSON.stringify(a.getData())&&(l(Object(u.a)(Object(u.a)({},i),{},{body:a.getData()})),e(E()))}})}),!a.isNew&&Object(W.jsx)(ie,{})]})})]})},he=function(){var e=Object(s.c)((function(e){return e.ui})).asideHidden;return Object(W.jsxs)("div",{className:"blogCreator__blog-no-content-container ".concat(!e&&"asideIsHidden"),children:[Object(W.jsx)("i",{className:"fas fa-pencil-alt fa-7x"}),Object(W.jsx)("span",{className:"blogCreator__blog-no-content-title",children:"Selecciona o crea un post!"})]})},xe=function(){var e=Object(s.c)((function(e){return e.post})).activePost;return Object(W.jsxs)("div",{className:"blogCreatpr__blog",children:[Object(W.jsx)(oe,{}),e?Object(W.jsx)(Oe,{}):Object(W.jsx)(he,{})]})},ve=function(e){return e.uid?Object(W.jsx)(xe,{}):Object(W.jsx)(x.a,{to:"/auth/login"})},ge=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),a=t.checking,r=t.uid;return Object(n.useEffect)((function(){var t=localStorage.getItem("token")||null;e(t?function(){var e=Object(_.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k("auth/renew");case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok?(t(F({uid:n.uid,name:n.name})),localStorage.setItem("token",n.token)):t(R()),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),t(R());case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}():R())}),[e,r]),a?Object(W.jsx)(z,{}):Object(W.jsx)(h.a,{children:Object(W.jsx)("main",{children:Object(W.jsxs)(x.d,{children:[Object(W.jsx)(x.b,{path:"auth/login",element:Object(W.jsx)(Y,{uid:r})}),Object(W.jsx)(x.b,{path:"auth/register",element:Object(W.jsx)(Z,{uid:r})}),Object(W.jsx)(x.b,{path:"blog",element:Object(W.jsx)(ve,{uid:r})}),Object(W.jsx)(x.b,{path:"*",element:Object(W.jsx)(x.a,{to:"/blog"})})]})})})},_e=function(){return Object(W.jsx)(s.a,{store:O,children:Object(W.jsx)(ge,{})})};c.a.render(Object(W.jsx)(_e,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.058d88ab.chunk.js.map