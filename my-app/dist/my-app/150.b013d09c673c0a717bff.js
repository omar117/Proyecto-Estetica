(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[150],{3150:(e,o,n)=>{"use strict";n.r(o),n.d(o,{LoginModule:()=>h});var t=n(1116),r=n(4174),i=n(6304),a=n(1462),s=n(5842),c=n(1858),l=n(7368),u=n(6581);function g(e,o){if(1&e&&(l.TgZ(0,"div",23),l.TgZ(1,"strong"),l._uU(2,"Ups Error:"),l.qZA(),l._uU(3),l.qZA()),2&e){const e=l.oxw();l.xp6(3),l.hij(" ",e.mensajeError," ")}}const d=function(){return["/register"]},p=[{path:"",component:(()=>{class e{constructor(e,o,n){this.authSvc=e,this.router=o,this.win=n,this.loginForm=new a.cw({email:new a.NI(""),password:new a.NI("")}),this.deshabilitarButton=!1,this.phone="",this.error=!1,this.mensajeError=""}ngOnInit(){this.windowRef=this.win.windowRef,this.windowRef.recaptchaVerifier=new c.Z.auth.RecaptchaVerifier("recaptcha-container",{size:"normal",callback:e=>{}}),this.windowRef.recaptchaVerifier.render()}onLogin(){var e=this;return(0,i.Z)(function*(){const{email:o,password:n}=e.loginForm.value;try{(yield e.authSvc.login(o,n))&&e.router.navigate(["/home"])}catch(t){console.log(t)}})()}sendLoginCode(){if(this.phone.trim(),""!=this.phone&&" "!=this.phone){const e=this.windowRef.recaptchaVerifier;c.Z.auth().signInWithPhoneNumber(this.phone,e).then(e=>{console.log(e),this.deshabilitarButton=!0,this.windowRef.confirmationResult=e}).catch(e=>console.log(e))}else this.error=!0,this.mensajeError="Ingrese numero"}verifyLoginCode(){this.windowRef.confirmationResult.confirm(this.otp).then(e=>this.router.navigate(["/home"])).catch(e=>console.log(e,"Incorrect code entered?"))}}return e.\u0275fac=function(o){return new(o||e)(l.Y36(s.e),l.Y36(r.F0),l.Y36(u.u))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-login"]],features:[l._Bn([s.e])],decls:46,vars:9,consts:[[1,"row"],[1,"col-md-6","mx-auto","mt-5"],[1,"card"],[1,"card-body"],[1,"text-center"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","formControlName","email",1,"form-control"],["for","password"],["type","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block","mt-5"],[1,"form-group","mt-3"],[3,"routerLink"],[1,"form-group","mt-2"],["for","phone"],["name","phone","type","text","placeholder","+52NumeroTelefono",1,"form-control",3,"ngModel","ngModelChange"],["id","recaptcha-container"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block","mt-5",3,"disabled","click"],["for","otp",1,"mt-5"],["name","otp","type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block","mt-5",3,"click"],["class","alert alert-danger","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger"]],template:function(e,o){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"h1",4),l._uU(5,"Iniciar Sesion"),l.qZA(),l.TgZ(6,"form",5),l.NdJ("ngSubmit",function(){return o.onLogin()}),l.TgZ(7,"div",6),l.TgZ(8,"label",7),l._uU(9,"Correo"),l.qZA(),l._UZ(10,"input",8),l.qZA(),l.TgZ(11,"div",6),l.TgZ(12,"label",9),l._uU(13,"Contrase\xf1a"),l.qZA(),l._UZ(14,"input",10),l.qZA(),l.TgZ(15,"button",11),l._uU(16,"Iniciar Sesion"),l.qZA(),l.qZA(),l.TgZ(17,"div",12),l.TgZ(18,"p"),l.TgZ(19,"a",13),l._uU(20,"Registrar"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(21,"div",0),l.TgZ(22,"div",1),l.TgZ(23,"div",2),l.TgZ(24,"div",3),l.TgZ(25,"h1",4),l._uU(26,"Iniciar Sesion Telefono"),l.qZA(),l.TgZ(27,"div",14),l.TgZ(28,"label",15),l._uU(29,"Telefono"),l.qZA(),l.TgZ(30,"input",16),l.NdJ("ngModelChange",function(e){return o.phone=e}),l.qZA(),l.qZA(),l._UZ(31,"br"),l._UZ(32,"div",17),l.TgZ(33,"button",18),l.NdJ("click",function(){return o.sendLoginCode()}),l._uU(34,"Enviar Codigo"),l.qZA(),l.TgZ(35,"div",14),l.TgZ(36,"label",19),l._uU(37,"Confirmar Codigo"),l.qZA(),l.TgZ(38,"input",20),l.NdJ("ngModelChange",function(e){return o.otp=e}),l.qZA(),l.qZA(),l.TgZ(39,"button",21),l.NdJ("click",function(){return o.verifyLoginCode()}),l._uU(40,"Iniciar Sesion"),l.qZA(),l.TgZ(41,"div",12),l.TgZ(42,"p"),l.TgZ(43,"a",13),l._uU(44,"Registrar"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.YNc(45,g,4,1,"div",22),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(6),l.Q6J("formGroup",o.loginForm),l.xp6(13),l.Q6J("routerLink",l.DdM(7,d)),l.xp6(11),l.Q6J("ngModel",o.phone),l.xp6(3),l.Q6J("disabled",o.deshabilitarButton),l.xp6(5),l.Q6J("ngModel",o.otp),l.xp6(5),l.Q6J("routerLink",l.DdM(8,d)),l.xp6(2),l.Q6J("ngIf",o.error))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,r.yS,a.On,t.O5],styles:[""]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[t.ez,Z,a.UX,a.u5]]}),e})()}}]);