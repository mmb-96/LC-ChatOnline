(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),c=u("SVse"),b=u("mrSG"),a=u("FHRc"),s=u("Emxi"),h=u("cgWr");class p{constructor(l,n,u,t){this.authSer=l,this.chatSer=n,this.modal=u,this.actionSheetController=t,this.chatRooms=[]}onLogout(){this.authSer.logout()}ngOnInit(){this.chatSer.getChatRooms().subscribe(l=>this.chatRooms=l)}openChat(l){this.modal.create({component:h.a,componentProps:{chat:l}}).then(l=>l.present())}presentActionSheet(){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.actionSheetController.create({header:"Opciones",buttons:[{text:"Desconectarse",role:"destructive",icon:"log-out",handler:()=>{this.onLogout()}}]});yield l.present()}))}}var m=t.pb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,10,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openChat(l.context.$implicit)&&t),t}),i.E,i.m)),t.qb(1,49152,null,0,r.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,i.t,i.b)),t.qb(3,49152,null,0,r.e,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,1,"ion-img",[],null,null,null,i.C,i.k)),t.qb(5,49152,null,0,r.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.rb(6,0,null,0,4,"ion-label",[],null,null,null,i.F,i.n)),t.qb(7,49152,null,0,r.L,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,0,"b",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.rb(10,0,null,0,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){l(n,5,0,n.context.$implicit.img)}),(function(l,n){l(n,9,0,n.context.$implicit.name),l(n,10,0,n.context.$implicit.description)}))}function d(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,10,"ion-header",[],null,null,null,i.A,i.i)),t.qb(1,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,8,"ion-toolbar",[["color","tertiary"]],null,null,null,i.J,i.r)),t.qb(3,49152,null,0,r.Ab,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,3,"ion-button",[["fill","clear"],["slot","end"],["style","color: #fff; font-size: 25px"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.presentActionSheet()&&t),t}),i.u,i.c)),t.qb(5,49152,null,0,r.i,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(l()(),t.rb(6,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,i.B,i.j)),t.qb(7,49152,null,0,r.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(8,0,null,0,2,"ion-title",[["class","ion-text-center"]],null,null,null,i.I,i.q)),t.qb(9,49152,null,0,r.yb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,[" Mi chat App "])),(l()(),t.rb(11,0,null,null,5,"ion-content",[["class","ion-padding"]],null,null,null,i.y,i.g)),t.qb(12,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.rb(13,0,null,0,3,"ion-list",[],null,null,null,i.G,i.o)),t.qb(14,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,f)),t.qb(16,278528,null,0,c.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"tertiary"),l(n,5,0,"clear"),l(n,7,0,"menu"),l(n,16,0,u.chatRooms)}),null)}function k(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"app-home",[],null,null,null,d,m)),t.qb(1,114688,null,0,p,[a.a,s.a,r.Eb,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.nb("app-home",p,k,{},{},[]),A=u("s7LF"),g=u("iInd");u.d(n,"HomePageModuleNgFactory",(function(){return q}));var q=t.ob(o,[],(function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[e.a,x]],[3,t.j],t.v]),t.Ab(4608,c.k,c.j,[t.s,[2,c.q]]),t.Ab(4608,A.i,A.i,[]),t.Ab(4608,r.b,r.b,[t.x,t.g]),t.Ab(4608,r.Eb,r.Eb,[r.b,t.j,t.p]),t.Ab(4608,r.Ib,r.Ib,[r.b,t.j,t.p]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,A.h,A.h,[]),t.Ab(1073742336,A.a,A.a,[]),t.Ab(1073742336,r.Cb,r.Cb,[]),t.Ab(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.Ab(1073742336,o,o,[]),t.Ab(1024,g.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);