"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_toc_toc_module_ts"],{8679:(k,m,c)=>{c.r(m),c.d(m,{TocModule:()=>d});var p=c(2954),u=c(6323),h=c(7605),g=c(3886),x=c(4408),f=c(5231),v=c(8736),b=c(2733),t=c(9609),y=c(3962),T=c(7981);const C=["tocItem"];function E(i,o){1&i&&(t.TgZ(0,"div",7),t._uU(1," Contents "),t.qZA())}function I(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.toggle(!1))}),t._uU(1," Contents "),t._UZ(2,"mat-icon",9),t.qZA()}if(2&i){const e=t.oxw(2);t.uIk("aria-pressed",!e.isCollapsed),t.xp6(2),t.ekj("collapsed",e.isCollapsed)}}function _(i,o){if(1&i&&(t.TgZ(0,"li",11,12),t._UZ(2,"a",13),t.qZA()),2&i){const e=t.oxw(),n=e.$implicit,s=e.index,l=t.oxw(2);t.Tol(n.level),t.ekj("secondary","EmbeddedExpandable"===l.type&&s>=l.primaryMax)("active",s===l.activeIndex),t.s9C("title",n.title),t.xp6(2),t.Q6J("href",n.href,t.LSH)("innerHTML",n.content,t.oJD)}}function Z(i,o){if(1&i&&(t.ynx(0),t.YNc(1,_,3,10,"li",10),t.BQk()),2&i){const e=o.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf","Floating"===n.type||"h1"!==e.level)}}function N(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.toggle())}),t.qZA()}if(2&i){const e=t.oxw(2);t.ekj("collapsed",e.isCollapsed),t.uIk("aria-pressed",!e.isCollapsed)}}function J(i,o){if(1&i&&(t.TgZ(0,"div",1),t.YNc(1,E,2,0,"div",2),t.YNc(2,I,3,3,"button",3),t.TgZ(3,"ul",4),t.YNc(4,Z,2,1,"ng-container",5),t.qZA(),t.YNc(5,N,1,3,"button",6),t.qZA()),2&i){const e=t.oxw();t.ekj("collapsed",e.isCollapsed),t.xp6(1),t.Q6J("ngIf","EmbeddedSimple"===e.type),t.xp6(1),t.Q6J("ngIf","EmbeddedExpandable"===e.type),t.xp6(1),t.ekj("embedded","Floating"!==e.type),t.xp6(1),t.Q6J("ngForOf",e.tocList),t.xp6(1),t.Q6J("ngIf","EmbeddedExpandable"===e.type)}}class a{constructor(o,e,n){this.scrollService=o,this.tocService=n,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new h.x,this.primaryMax=4,this.isEmbedded=-1!==e.nativeElement.className.indexOf("embedded")}ngOnInit(){this.tocService.tocList.pipe((0,f.R)(this.onDestroy)).subscribe(o=>{this.tocList=o;const e=function S(i,o){return i.reduce((e,n)=>o(n)?e+1:e,0)}(this.tocList,n=>"h1"!==n.level);this.type=e>0?this.isEmbedded?e>this.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"})}ngAfterViewInit(){this.isEmbedded||(0,g.a)([this.tocService.activeItemIndex.pipe((0,v.R)(x.E)),this.items.changes.pipe((0,b.O)(this.items))]).pipe((0,f.R)(this.onDestroy)).subscribe(([o,e])=>{if(this.activeIndex=o,null===o||o>=e.length)return;const n=e.toArray()[o].nativeElement,s=n.offsetParent,l=n.getBoundingClientRect(),r=s.getBoundingClientRect();l.top>=r.top&&l.bottom<=r.bottom||(s.scrollTop+=l.top-r.top-s.clientHeight/2)})}ngOnDestroy(){this.onDestroy.next()}toggle(o=!0){this.isCollapsed=!this.isCollapsed,o&&this.isCollapsed&&this.toTop()}toTop(){this.scrollService.scrollToTop()}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(y.a),t.Y36(t.SBq),t.Y36(T.I))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["aio-toc"]],viewQuery:function(e,n){if(1&e&&t.Gf(C,5),2&e){let s;t.iGM(s=t.CRH())&&(n.items=s)}},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,n){1&e&&t.YNc(0,J,6,8,"div",0),2&e&&t.Q6J("ngIf","None"!==n.type)},dependencies:[p.sg,p.O5,u.Hw],encapsulation:2})}class d{constructor(){this.customElementComponent=a}static#t=this.\u0275fac=function(e){return new(e||d)};static#e=this.\u0275mod=t.oAB({type:d});static#o=this.\u0275inj=t.cJS({imports:[p.ez,u.Ps]})}}}]);
//# sourceMappingURL=src_app_custom-elements_toc_toc_module_ts.5244ba3d4201e0ab.js.map