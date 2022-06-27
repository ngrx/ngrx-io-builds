"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_api_api-list_module_ts"],{7629:(N,u,a)=>{a.r(u),a.d(u,{ApiListModule:()=>O});var c=a(2954),h=a(2474),g=a(5349),m=a(849),y=a(3886),S=a(4736),t=a(9609),A=a(7605),f=a(5231),d=a(7724),C=a(8936),T=a(2293);let v=(()=>{class s{constructor(e,i){this.http=e,this.logger=i,this.apiBase=C.Yp+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new A.x,this.sectionsSubject=new m.t(1),this._sections=this.sectionsSubject.pipe((0,f.R)(this.onDestroy))}get sections(){return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(e=>this.logger.log("ApiService got API sections"))),this._sections.pipe((0,d.b)(e=>{e.forEach(i=>{i.deprecated=!!i.items&&i.items.every(n=>"deprecated"===n.stability)})}))}ngOnDestroy(){this.onDestroy.next()}fetchSections(e){const i=this.apiBase+(e||this.apiListJsonDefault);this.http.get(i).pipe((0,f.R)(this.onDestroy),(0,d.b)(()=>this.logger.log(`Got API sections from ${i}`))).subscribe(n=>this.sectionsSubject.next(n),n=>{throw this.logger.error(n),n})}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(h.eN),t.LFG(T.Y))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})();var L=a(7279),Z=a(6649);const x=["filter"];function b(s,l){if(1&s&&(t.TgZ(0,"h2")(1,"a",11),t._uU(2),t.qZA()()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.ekj("deprecated-api-item",e.deprecated),t.Q6J("href",e.path,t.LSH),t.xp6(1),t.hij("@ngrx/",e.title,"")}}function j(s,l){if(1&s&&(t.ynx(0),t.TgZ(1,"li",13)(2,"a",11),t._UZ(3,"span"),t._uU(4),t.qZA()(),t.BQk()),2&s){const e=l.$implicit;t.xp6(2),t.ekj("deprecated-api-item","deprecated"===e.stability),t.Q6J("href",e.path,t.LSH),t.xp6(1),t.Gre("symbol ",e.docType,""),t.xp6(1),t.hij(" ",e.title," ")}}function M(s,l){if(1&s&&(t.TgZ(0,"ul",12),t.YNc(1,j,5,7,"ng-container",8),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.items)}}function J(s,l){if(1&s&&(t.TgZ(0,"div"),t.YNc(1,b,3,4,"h2",9),t.YNc(2,M,2,1,"ul",10),t.qZA()),2&s){const e=l.$implicit;t.xp6(1),t.Q6J("ngIf",e.items),t.xp6(1),t.Q6J("ngIf",null==e.items?null:e.items.length)}}class Q{constructor(){this.query="",this.status="all",this.type="all"}}let F=(()=>{class s{constructor(e,i){this.apiService=e,this.locationService=i,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new m.t(1),this.searchCriteria=new Q,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"stable",title:"Stable"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}ngOnInit(){this.filteredSections=(0,y.a)([this.apiService.sections,this.criteriaSubject]).pipe((0,S.U)(([e,i])=>e.map(n=>({...n,items:this.filterSection(n,i)})))),this.initializeSearchCriteria()}setQuery(e){this.setSearchCriteria({query:(e||"").toLowerCase().trim()})}setStatus(e){this.toggleStatusMenu(),this.status=e,this.setSearchCriteria({status:e.value})}setType(e){this.toggleTypeMenu(),this.type=e,this.setSearchCriteria({type:e.value})}toggleStatusMenu(){this.showStatusMenu=!this.showStatusMenu}toggleTypeMenu(){this.showTypeMenu=!this.showTypeMenu}filterSection(e,{query:i,status:n,type:o}){const r=e.items.filter(p=>function I(){return"all"===o||o===p.docType}()&&function w(){return"all"===n||n===p.stability||"security-risk"===n&&p.securityRisk}()&&function D(){return!i||-1!==e.name.indexOf(i)||-1!==p.name.indexOf(i)}());return r.length?r:"package"!==o||i&&-1===e.name.indexOf(i)?null:[]}initializeSearchCriteria(){const{query:e,status:i,type:n}=this.locationService.search(),o=(e||"").toLowerCase();this.queryEl.nativeElement.value=o,this.status=this.statuses.find(r=>r.value===i)||this.statuses[0],this.type=this.types.find(r=>r.value===n)||this.types[0],this.searchCriteria={query:o,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}setLocationSearch(){const{query:e,status:i,type:n}=this.searchCriteria;this.locationService.setSearch("API Search",{query:e||void 0,status:"all"!==i?i:void 0,type:"all"!==n?n:void 0})}setSearchCriteria(e){this.criteriaSubject.next(Object.assign(this.searchCriteria,e)),this.setLocationSearch()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(v),t.Y36(L.a))},s.\u0275cmp=t.Xpm({type:s,selectors:[["aio-api-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(x,7),2&e){let n;t.iGM(n=t.CRH())&&(i.queryEl=n.first)}},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","Type:",3,"options","selected","showSymbol","change"],["label","Status:",3,"options","selected","disabled","change"],[1,"form-search"],[1,"material-icons"],["placeholder","Filter",3,"input"],["filter",""],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"aio-select",1),t.NdJ("change",function(o){return i.setType(o.option)}),t.qZA(),t.TgZ(2,"aio-select",2),t.NdJ("change",function(o){return i.setStatus(o.option)}),t.qZA(),t.TgZ(3,"div",3)(4,"i",4),t._uU(5,"search"),t.qZA(),t.TgZ(6,"input",5,6),t.NdJ("input",function(o){return i.setQuery(o.target.value)}),t.qZA()()(),t.TgZ(8,"article",7),t.YNc(9,J,3,2,"div",8),t.ALo(10,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("options",i.types)("selected",i.type)("showSymbol",!0),t.xp6(1),t.Q6J("options",i.statuses)("selected",i.status)("disabled","package"===i.type.value),t.xp6(7),t.Q6J("ngForOf",t.lcZ(10,7,i.filteredSections)))},dependencies:[c.sg,c.O5,Z.H,c.Ov],encapsulation:2}),s})(),O=(()=>{class s{constructor(){this.customElementComponent=F}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[v],imports:[c.ez,g.m,h.JF]}),s})()}}]);
//# sourceMappingURL=src_app_custom-elements_api_api-list_module_ts.f4e7cec30d6ed644.js.map