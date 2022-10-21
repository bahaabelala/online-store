"use strict";(self.webpackChunkonline_store=self.webpackChunkonline_store||[]).push([[432],{8408:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var r="Button_Button__Ip4AH",a=t(184),i=function(e){var n={fontWeight:e.fontWeight,padding:e.padding,fontSize:e.fontSize,backgroundColor:e.backgroundColor};return(0,a.jsx)("button",{type:"submit",className:r,style:n,onClick:e.clicked,children:e.children})}},9929:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(4942),a=t(1413),i=t(885),u=t(2791),l="Form_Form__ZktGn",o=t(626),s=t(8408),c=t(184),p=function(e){var n=(0,u.useState)((0,a.Z)({},e.form)),t=(0,i.Z)(n,2),p=t[0],d=t[1],h=[];for(var m in p)h.push({id:m,config:p[m]});return(0,c.jsxs)("form",{className:l,onSubmit:function(n){n.preventDefault();var t={};for(var r in p)if("radioInput"===p[r].elementType){var a=p[r].elementConfig.findIndex((function(e){return e.checked})),i=p[r].value[a];t[r]=i}else t[r]=p[r].value;e.dataProcessed(t)},children:[h.map((function(e){return(0,c.jsx)(o.Z,{elementType:e.config.elementType,elementConfig:e.config.elementConfig,name:e.id,value:e.config.value,changed:function(n){!function(e,n){var t=(0,a.Z)((0,a.Z)({},p),{},(0,r.Z)({},n,(0,a.Z)((0,a.Z)({},p[n]),{},{value:e.target.value})));d(t)}(n,e.id)}},e.id)})),(0,c.jsx)(s.Z,{fontWeight:"400",fontSize:"1.1rem",children:e.buttonText}),e.children]})}},626:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(1413),a=t(4165),i=t(5861),u=t(885),l=t(2791),o={Input:"Input_Input__vjpSZ",SelectInput:"Input_SelectInput__rnzqj",Textarea:"Input_Textarea__R5rtu",FileInputContainer:"Input_FileInputContainer__hBKVf",FileURLInput:"Input_FileURLInput__8VW7i",FileInput:"Input_FileInput__EyR8R",FileInputLabel:"Input_FileInputLabel__76CSO",loaderContainer:"Input_loaderContainer__J3EUt",RadioInputContainer:"Input_RadioInputContainer__4ICrx",RadioInput:"Input_RadioInput__pkzl2",RadioInputLabel:"Input_RadioInputLabel__VZaSW"},s=t(1586),c=t(4569),p=t.n(c)().create({baseURL:"https://amh-store.herokuapp.com/api/v1/upload/"}),d=t(4282),h=t(184),m=function(e){var n=null,t=(0,l.useState)(!1),c=(0,u.Z)(t,2),m=c[0],f=c[1],g=(0,l.useState)(""),v=(0,u.Z)(g,2),x=v[0],_=v[1],I=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=new FormData).append("image",n.target.files[0]),f(!0),e.next=6,p.post("",t);case 6:r=e.sent,i=r.data.path,_(i),f(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}();switch(e.elementType){case"input":n=(0,h.jsx)("input",(0,r.Z)((0,r.Z)({className:o.Input},e.elementConfig),{},{name:e.name,value:e.value,onChange:e.changed,required:!0}));break;case"fileInput":n=(0,h.jsxs)("div",{className:o.FileInputContainer,children:[(0,h.jsx)("input",{className:o.FileURLInput,type:"url",placeholder:e.elementConfig.placeholder,name:e.name,value:x||e.value,onChange:e.changed,required:!0}),(0,h.jsx)("input",{className:o.FileInput,type:e.elementConfig.type,accept:e.elementConfig.accept,onChange:I,id:e.name}),(0,h.jsx)("div",{className:o.loaderContainer,children:m?(0,h.jsx)(d.Z,{size:"small"}):null}),(0,h.jsx)("label",{className:o.FileInputLabel,htmlFor:e.name,children:"Upload"})]});break;case"select":n=(0,h.jsx)("select",{className:o.SelectInput,name:e.name,value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return(0,h.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;case"radioInput":n=(0,h.jsx)("div",{className:o.RadioInputContainer,children:e.elementConfig.map((function(n,t){return(0,h.jsxs)(s.Z,{children:[(0,h.jsx)("input",(0,r.Z)((0,r.Z)({className:o.RadioInput},n),{},{name:e.name[t],value:e.value[t],id:e.value[t]})),(0,h.jsx)("label",{className:o.RadioInputLabel,htmlFor:e.value[t],children:e.value[t]})]},e.value[t])}))});break;case"textarea":n=(0,h.jsx)("textarea",(0,r.Z)((0,r.Z)({className:[o.Input,o.Textarea].join(" ")},e.elementConfig),{},{name:e.value,value:e.value,onChange:e.changed,required:!0}))}return(0,h.jsx)(s.Z,{children:n})}},4282:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var r="Loader_loaderContainer__pwLPQ",a="Loader_loader__ZEPsn",i=t(184),u=function(e){var n="small"===e.size?{width:"40px",height:"40px"}:{width:"80px",height:"80px"},t="small"===e.size?{borderWidth:"20px"}:{borderWidth:"40px"};return(0,i.jsx)("div",{className:r,style:n,children:(0,i.jsx)("span",{className:a,style:t})})}},2790:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var r="SectionTitle_SectionTitle__k-YvA",a=t(184),i=function(e){return(0,a.jsx)("h1",{className:r,children:e.children})}},9432:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(5671),a=t(3144),i=t(9340),u=t(2882),l=t(2791),o=t(6871),s=t(8687),c=t(7840),p=t(4270),d=t(1586),h=t(885),m={newCustomer:"SignIn_newCustomer__yI+pA"},f=t(3504),g=t(2790),v=t(9929),x=t(184),_=function(e){var n=(0,l.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"Enter your email"},value:""},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Enter your password"},value:""}}),t=(0,h.Z)(n,1)[0];return(0,x.jsxs)("section",{className:m.SignIn,children:[(0,x.jsx)(g.Z,{children:"Sign in"}),(0,x.jsx)(v.Z,{form:t,buttonText:"Sign in",dataProcessed:function(n){return e.onSignIn(n,!1)},children:(0,x.jsxs)("p",{className:m.newCustomer,children:["New customer? \xa0",(0,x.jsx)(f.rU,{to:"/register/signup",children:"Sign up"})]})})]})},I={existedCustomer:"SignUp_existedCustomer__UE9B-"},C=function(e){var n=(0,l.useState)({username:{elementType:"input",elementConfig:{type:"text",placeholder:"Enter your name"},value:""},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Enter your email"},value:""},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Enter your password"},value:""},passwordConfirm:{elementType:"input",elementConfig:{type:"password",placeholder:"Confirm your password"},value:""}}),t=(0,h.Z)(n,1)[0];return(0,x.jsxs)("section",{className:I.SignUp,children:[(0,x.jsx)(g.Z,{children:"Sign up"}),(0,x.jsx)(v.Z,{form:t,buttonText:"Sign up",dataProcessed:function(n){return e.onSignUp(n,!0)},children:(0,x.jsxs)("p",{className:I.existedCustomer,children:["Already a customer? \xa0",(0,x.jsx)(f.rU,{to:"/register/signin",children:"Sign in"})]})})]})},j=function(e){(0,i.Z)(t,e);var n=(0,u.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(e=n.call.apply(n,[this].concat(i))).registerHandler=function(n,t){e.props.onRegister(n,t)},e}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){this.props.isOrdering||"/"===this.props.authRedirectPath||this.props.onChangeAuthRedirectPath("/")}},{key:"render",value:function(){return this.props.isAuthenticated?(0,x.jsx)(o.Fg,{to:this.props.authRedirectPath}):(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(p.q,{children:(0,x.jsx)("title",{children:"Online Store | Register"})}),(0,x.jsxs)(o.Z5,{children:[(0,x.jsx)(o.AW,{path:"signin",element:(0,x.jsx)(_,{onSignIn:this.registerHandler})}),(0,x.jsx)(o.AW,{path:"signup",element:(0,x.jsx)(C,{onSignUp:this.registerHandler})})]})]})}}]),t}(l.Component),Z=(0,s.$j)((function(e){return{authRedirectPath:e.register.authRedirectPath,isAuthenticated:null!==e.register.token,isOrdering:e.cart.ordering}}),(function(e){return{onRegister:function(n,t){return e(c.z2(n,t))},onChangeAuthRedirectPath:function(n){return e(c.PL(n))}}}))(j)}}]);
//# sourceMappingURL=432.a052c1f3.chunk.js.map