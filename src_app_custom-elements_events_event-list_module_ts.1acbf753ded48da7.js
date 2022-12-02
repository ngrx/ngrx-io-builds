"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_events_event-list_module_ts"],{8184:(q,f,r)=>{r.r(f),r.d(f,{EventListModule:()=>m});var v=r(2954),t=r(9609),d=r(4736),Z=r(219),A=r(8936),T=r(2474);const y=A.bL+"events.json";class o{constructor(s){this.http=s;const e=new Date;this.currentDate=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),this.events$=this.getEvents(),this.upcomingEvents$=this.events$.pipe((0,d.U)(n=>n.filter(i=>i.endDate>=this.currentDate))),this.pastEvents$=this.events$.pipe((0,d.U)(n=>n.filter(i=>i.endDate<this.currentDate)))}getEvents(){const s=this.http.get(y).pipe((0,d.U)(e=>e.map(n=>({...n,startDate:n.startDate?new Date(n.startDate):void 0,endDate:new Date(n.endDate)}))),(0,Z.C)());return s.connect(),s}static#t=this.\u0275fac=function(e){return new(e||o)(t.LFG(T.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}class h{transform(s){const e=s.startDate,n=s.endDate;return e&&e.getTime()!==n.getTime()?u(e)===u(n)&&c(e)===c(n)?u(e)+" "+p(e)+" - "+p(n)+", "+c(e):c(e)===c(n)?u(e)+" "+p(e)+" - "+u(n)+" "+p(n)+", "+c(e):D(e)+" - "+D(n):D(n)}static#t=this.\u0275fac=function(e){return new(e||h)};static#e=this.\u0275pipe=t.Yjl({name:"eventDateRange",type:h,pure:!0})}const p=a=>a.getUTCDate(),u=a=>U[a.getUTCMonth()],c=a=>a.getUTCFullYear(),D=a=>u(a)+" "+p(a)+", "+c(a),U=["January","February","March","April","May","June","July","August","September","October","November","December"];class l{transform(s,e){if(null===s)return[];switch(e){case"ascending":return s.sort((n,i)=>+(n.startDate||n.endDate)-+(i.startDate||i.endDate));case"descending":return s.sort((n,i)=>+(i.startDate||i.endDate)-+(n.startDate||n.endDate))}}static#t=this.\u0275fac=function(e){return new(e||l)};static#e=this.\u0275pipe=t.Yjl({name:"eventOrderBy",type:l,pure:!0})}function E(a,s){if(1&a&&(t.TgZ(0,"tr")(1,"th")(2,"a",2),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"eventDateRange"),t.qZA()()),2&a){const e=s.$implicit;t.xp6(2),t.Q6J("href",e.url,t.LSH)("title",e.name),t.xp6(1),t.Oqu(e.name),t.xp6(2),t.Oqu(e.location),t.xp6(2),t.Oqu(t.lcZ(8,5,e))}}function L(a,s){if(1&a&&(t.TgZ(0,"tr")(1,"th")(2,"a",2),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"eventDateRange"),t.qZA()()),2&a){const e=s.$implicit;t.xp6(2),t.Q6J("href",e.url,t.LSH)("title",e.name),t.xp6(1),t.Oqu(e.name),t.xp6(2),t.Oqu(e.location),t.xp6(2),t.Oqu(t.lcZ(8,5,e))}}class g{constructor(s){this.eventService=s,this.upcomingEvents$=this.eventService.upcomingEvents$,this.pastEvents$=this.eventService.pastEvents$}static#t=this.\u0275fac=function(e){return new(e||g)(t.Y36(o))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["aio-event-list"]],decls:30,vars:12,consts:[[1,"is-full-width"],[4,"ngFor","ngForOf"],[3,"href","title"]],template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"Upcoming Events presenting about NgRx:"),t.qZA(),t.TgZ(2,"table",0)(3,"thead")(4,"tr")(5,"th"),t._uU(6,"Event"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Location"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Date"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,E,9,7,"tr",1),t.ALo(13,"eventOrderBy"),t.ALo(14,"async"),t.qZA()(),t.TgZ(15,"p"),t._uU(16,"Past Events:"),t.qZA(),t.TgZ(17,"table",0)(18,"thead")(19,"tr")(20,"th"),t._uU(21,"Event"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Location"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Date"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,L,9,7,"tr",1),t.ALo(28,"eventOrderBy"),t.ALo(29,"async"),t.qZA()()),2&e&&(t.xp6(12),t.Q6J("ngForOf",t.xi3(13,2,t.lcZ(14,5,n.upcomingEvents$),"ascending")),t.xp6(15),t.Q6J("ngForOf",t.xi3(28,7,t.lcZ(29,10,n.pastEvents$),"descending")))},dependencies:[v.sg,v.Ov,h,l],encapsulation:2})}class m{constructor(){this.customElementComponent=g}static#t=this.\u0275fac=function(e){return new(e||m)};static#e=this.\u0275mod=t.oAB({type:m});static#n=this.\u0275inj=t.cJS({providers:[o],imports:[v.ez]})}}}]);
//# sourceMappingURL=src_app_custom-elements_events_event-list_module_ts.1acbf753ded48da7.js.map