"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_live-example_live-example_module_ts"],{3267:(y,u,l)=>{l.r(u),l.d(u,{LiveExampleModule:()=>d});var c=l(2954),f=l(8936),t=l(9609);function a(o,n){const e="string"==typeof n?n:n.find(i=>o.hasOwnProperty(i.toLowerCase()));return void 0===e?void 0:o[e.toLowerCase()]}function p(o,n=!1){return void 0===o?n:"false"!==o.trim()}const g=["content"];function w(o,n){if(1&o&&(t.TgZ(0,"p"),t._uU(1," You can also "),t.TgZ(2,"a",8),t._uU(3,"download this example"),t.qZA(),t._uU(4,". "),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("href",e.zip,t.LSH)}}function _(o,n){if(1&o&&(t.TgZ(0,"span")(1,"div",5),t._UZ(2,"aio-embedded-stackblitz",6),t.qZA(),t.YNc(3,w,5,1,"p",7),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.s9C("title",e.title),t.xp6(1),t.Q6J("src",e.stackblitz),t.xp6(1),t.Q6J("ngIf",e.enableDownload)}}function b(o,n){if(1&o&&(t.TgZ(0,"span")(1,"a",9),t._uU(2),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.s9C("title",e.title),t.Q6J("href",e.zip,t.LSH),t.xp6(1),t.Oqu(e.title)}}function C(o,n){if(1&o&&(t.TgZ(0,"span"),t._uU(1," / "),t.TgZ(2,"a",8),t._uU(3,"download example"),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("href",e.zip,t.LSH)}}function v(o,n){if(1&o&&(t.TgZ(0,"span")(1,"a",10),t._uU(2),t.qZA(),t.YNc(3,C,4,1,"span",7),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.s9C("title",e.title),t.Q6J("href",e.stackblitz,t.LSH),t.xp6(1),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",e.enableDownload)}}const E=["*"],Z=["iframe"],z=f.bL+"live-examples/",S=f.bL+"zips/";class r{constructor(n,e){const i=function h(o){const n=o instanceof t.SBq?o.nativeElement.attributes:o.attributes,e={};for(const i of n)e[i.name.toLowerCase()]=i.value;return e}(n),s=this.getExampleDir(i,e.path(!1)),x=this.getStackblitzName(i);this.mode=this.getMode(i),this.enableDownload=this.getEnableDownload(i),this.stackblitz=this.getStackblitz(s,x,"embedded"===this.mode),this.zip=this.getZip(s,x),this.title=this.getTitle(i)}ngAfterContentInit(){const n=this.content.nativeElement.textContent.trim();n&&(this.title=n)}getEnableDownload(n){return!p(a(n,"noDownload"))}getExampleDir(n,e){let i=a(n,"name");if(!i){const s=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);i=s?s[0]:"index"}return i.trim()}getMode(n){const e=p(a(n,"downloadOnly")),i=p(a(n,"embedded"));return e?"downloadOnly":i?"embedded":"default"}getStackblitz(n,e,i){return`${z}${n}/${e}stackblitz.html${i?"?ctl=1":""}`}getStackblitzName(n){const e=(a(n,"stackblitz")||"").trim();return e&&`${e}.`}getTitle(n){return(a(n,"title")||"live example").trim()}getZip(n,e){const i=n.split("/")[0];return`${S}${n}/${e}${i}.zip`}static#t=this.\u0275fac=function(e){return new(e||r)(t.Y36(t.SBq),t.Y36(c.Ye))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["live-example"]],viewQuery:function(e,i){if(1&e&&t.Gf(g,7),2&e){let s;t.iGM(s=t.CRH())&&(i.content=s.first)}},ngContentSelectors:E,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","Download example",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(e,i){1&e&&(t.F$t(),t.TgZ(0,"span",0,1),t.Hsn(2),t.qZA(),t.TgZ(3,"span",2),t.YNc(4,_,4,3,"span",3),t.YNc(5,b,3,3,"span",3),t.YNc(6,v,4,4,"span",4),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngSwitch",i.mode),t.xp6(1),t.Q6J("ngSwitchCase","embedded"),t.xp6(1),t.Q6J("ngSwitchCase","downloadOnly"))},dependencies:function(){return[c.O5,c.RF,c.n9,c.ED,m]},encapsulation:2})}class m{ngAfterViewInit(){this.iframe&&(this.iframe.nativeElement.src=this.src)}static#t=this.\u0275fac=function(e){return new(e||m)};static#e=this.\u0275cmp=t.Xpm({type:m,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(e,i){if(1&e&&t.Gf(Z,7),2&e){let s;t.iGM(s=t.CRH())&&(i.iframe=s.first)}},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(e,i){1&e&&t._UZ(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%]{min-height:400px}\n/*# sourceMappingURL=live-example.component.ts-angular-inline--1.css.map*/"]})}class d{constructor(){this.customElementComponent=r}static#t=this.\u0275fac=function(e){return new(e||d)};static#e=this.\u0275mod=t.oAB({type:d});static#n=this.\u0275inj=t.cJS({imports:[c.ez]})}}}]);
//# sourceMappingURL=src_app_custom-elements_live-example_live-example_module_ts.a400a74a58e0236d.js.map