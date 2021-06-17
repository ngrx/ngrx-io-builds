(self.webpackChunkngrx_io=self.webpackChunkngrx_io||[]).push([["src_app_custom-elements_expandable-section_expandable-section_module_ts"],{8445:function(e,n,t){"use strict";t.r(n),t.d(n,{ExpandableSectionModule:function(){return X}});var i=t(744),a=t(1254),o=t(1751),s=t(2558),d=t(9843),r=t(3753),p=t(1680),c=t(8081),l=t(8707),u=t(7395),h=t(7429),g=new i.OlP("CdkAccordion"),m=0,x=function(){var e=function(){function e(n,t,a){var o=this;(0,p.Z)(this,e),this.accordion=n,this._changeDetectorRef=t,this._expansionDispatcher=a,this._openCloseAllSubscription=u.w.EMPTY,this.closed=new i.vpe,this.opened=new i.vpe,this.destroyed=new i.vpe,this.expandedChange=new i.vpe,this.id="cdk-accordion-child-".concat(m++),this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=function(){},this._removeUniqueSelectionListener=a.listen(function(e,n){o.accordion&&!o.accordion.multi&&o.accordion.id===n&&o.id!==e&&(o.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}return(0,a.Z)(e,[{key:"expanded",get:function(){return this._expanded},set:function(e){e=(0,c.Ig)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=(0,c.Ig)(e)}},{key:"ngOnDestroy",value:function(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}},{key:"toggle",value:function(){this.disabled||(this.expanded=!this.expanded)}},{key:"close",value:function(){this.disabled||(this.expanded=!1)}},{key:"open",value:function(){this.disabled||(this.expanded=!0)}},{key:"_subscribeToOpenCloseAllActions",value:function(){var e=this;return this.accordion._openCloseAllActions.subscribe(function(n){e.disabled||(e.expanded=n)})}}]),e}();return e.\u0275fac=function(n){return new(n||e)(i.Y36(g,12),i.Y36(i.sBO),i.Y36(h.A8))},e.\u0275dir=i.lG2({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[i._Bn([{provide:g,useValue:void 0}])]}),e}(),f=function(){var e=function e(){(0,p.Z)(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),e}(),b=t(785),_=t(98),v=t(9412),y=t(6517),k=t(6161),w=t(7682),C=t(8780),A=t(8344),S=t(2819),E=t(3636),T=t(3487),H=t(5371),P=t(739),Z=["body"];function O(e,n){}var Y=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],B=["mat-expansion-panel-header","*","mat-action-row"];function D(e,n){if(1&e&&i._UZ(0,"span",2),2&e){var t=i.oxw();i.Q6J("@indicatorRotate",t._getExpandedState())}}var I=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],M=["mat-panel-title","mat-panel-description","*"],R=new i.OlP("MAT_ACCORDION"),q="225ms cubic-bezier(0.4,0.0,0.2,1)",N={indicatorRotate:(0,P.X$)("indicatorRotate",[(0,P.SB)("collapsed, void",(0,P.oB)({transform:"rotate(0deg)"})),(0,P.SB)("expanded",(0,P.oB)({transform:"rotate(180deg)"})),(0,P.eR)("expanded <=> collapsed, void => collapsed",(0,P.jt)(q))]),bodyExpansion:(0,P.X$)("bodyExpansion",[(0,P.SB)("collapsed, void",(0,P.oB)({height:"0px",visibility:"hidden"})),(0,P.SB)("expanded",(0,P.oB)({height:"*",visibility:"visible"})),(0,P.eR)("expanded <=> collapsed, void => collapsed",(0,P.jt)(q))])},Q=function(){var e=function e(n){(0,p.Z)(this,e),this._template=n};return e.\u0275fac=function(n){return new(n||e)(i.Y36(i.Rgc))},e.\u0275dir=i.lG2({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]}),e}(),j=0,z=new i.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),F=function(){var e=function(e){(0,d.Z)(t,e);var n=(0,r.Z)(t);function t(e,a,o,s,d,r,c){var u;return(0,p.Z)(this,t),(u=n.call(this,e,a,o))._viewContainerRef=s,u._animationMode=r,u._hideToggle=!1,u.afterExpand=new i.vpe,u.afterCollapse=new i.vpe,u._inputChanges=new l.xQ,u._headerId="mat-expansion-panel-header-".concat(j++),u._bodyAnimationDone=new l.xQ,u.accordion=e,u._document=d,u._bodyAnimationDone.pipe((0,k.x)(function(e,n){return e.fromState===n.fromState&&e.toState===n.toState})).subscribe(function(e){"void"!==e.fromState&&("expanded"===e.toState?u.afterExpand.emit():"collapsed"===e.toState&&u.afterCollapse.emit())}),c&&(u.hideToggle=c.hideToggle),u}return(0,a.Z)(t,[{key:"hideToggle",get:function(){return this._hideToggle||this.accordion&&this.accordion.hideToggle},set:function(e){this._hideToggle=(0,c.Ig)(e)}},{key:"togglePosition",get:function(){return this._togglePosition||this.accordion&&this.accordion.togglePosition},set:function(e){this._togglePosition=e}},{key:"_hasSpacing",value:function(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}},{key:"_getExpandedState",value:function(){return this.expanded?"expanded":"collapsed"}},{key:"toggle",value:function(){this.expanded=!this.expanded}},{key:"close",value:function(){this.expanded=!1}},{key:"open",value:function(){this.expanded=!0}},{key:"ngAfterContentInit",value:function(){var e=this;this._lazyContent&&this.opened.pipe((0,w.O)(null),(0,C.h)(function(){return e.expanded&&!e._portal}),(0,A.q)(1)).subscribe(function(){e._portal=new b.UE(e._lazyContent._template,e._viewContainerRef)})}},{key:"ngOnChanges",value:function(e){this._inputChanges.next(e)}},{key:"ngOnDestroy",value:function(){(0,o.Z)((0,s.Z)(t.prototype),"ngOnDestroy",this).call(this),this._bodyAnimationDone.complete(),this._inputChanges.complete()}},{key:"_containsFocus",value:function(){if(this._body){var e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}}]),t}(x);return e.\u0275fac=function(n){return new(n||e)(i.Y36(R,12),i.Y36(i.sBO),i.Y36(h.A8),i.Y36(i.s_b),i.Y36(_.K0),i.Y36(E.Qb,8),i.Y36(z,8))},e.\u0275cmp=i.Xpm({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(e,n,t){var a;1&e&&i.Suo(t,Q,5),2&e&&i.iGM(a=i.CRH())&&(n._lazyContent=a.first)},viewQuery:function(e,n){var t;1&e&&i.Gf(Z,5),2&e&&i.iGM(t=i.CRH())&&(n._body=t.first)},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,n){2&e&&i.ekj("mat-expanded",n.expanded)("_mat-animation-noopable","NoopAnimations"===n._animationMode)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[i._Bn([{provide:R,useValue:void 0}]),i.qOj,i.TTD],ngContentSelectors:B,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,n){1&e&&(i.F$t(Y),i.Hsn(0),i.TgZ(1,"div",0,1),i.NdJ("@bodyExpansion.done",function(e){return n._bodyAnimationDone.next(e)}),i.TgZ(3,"div",2),i.Hsn(4,1),i.YNc(5,O,0,0,"ng-template",3),i.qZA(),i.Hsn(6,2),i.qZA()),2&e&&(i.xp6(1),i.Q6J("@bodyExpansion",n._getExpandedState())("id",n.id),i.uIk("aria-labelledby",n._headerId),i.xp6(4),i.Q6J("cdkPortalOutlet",n._portal))},directives:[b.Pl],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[N.bodyExpansion]},changeDetection:0}),e}(),J=function(){var e=function(){function e(n,t,i,a,o,s){var d=this;(0,p.Z)(this,e),this.panel=n,this._element=t,this._focusMonitor=i,this._changeDetectorRef=a,this._animationMode=s,this._parentChangeSubscription=u.w.EMPTY;var r=n.accordion?n.accordion._stateChanges.pipe((0,C.h)(function(e){return!(!e.hideToggle&&!e.togglePosition)})):T.E;this._parentChangeSubscription=(0,H.T)(n.opened,n.closed,r,n._inputChanges.pipe((0,C.h)(function(e){return!!(e.hideToggle||e.disabled||e.togglePosition)}))).subscribe(function(){return d._changeDetectorRef.markForCheck()}),n.closed.pipe((0,C.h)(function(){return n._containsFocus()})).subscribe(function(){return i.focusVia(t,"program")}),o&&(this.expandedHeight=o.expandedHeight,this.collapsedHeight=o.collapsedHeight)}return(0,a.Z)(e,[{key:"disabled",get:function(){return this.panel.disabled}},{key:"_toggle",value:function(){this.disabled||this.panel.toggle()}},{key:"_isExpanded",value:function(){return this.panel.expanded}},{key:"_getExpandedState",value:function(){return this.panel._getExpandedState()}},{key:"_getPanelId",value:function(){return this.panel.id}},{key:"_getTogglePosition",value:function(){return this.panel.togglePosition}},{key:"_showToggle",value:function(){return!this.panel.hideToggle&&!this.panel.disabled}},{key:"_getHeaderHeight",value:function(){var e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}},{key:"_keydown",value:function(e){switch(e.keyCode){case S.L_:case S.K5:(0,S.Vb)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}},{key:"focus",value:function(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}},{key:"ngAfterViewInit",value:function(){var e=this;this._focusMonitor.monitor(this._element).subscribe(function(n){n&&e.panel.accordion&&e.panel.accordion._handleHeaderFocus(e)})}},{key:"ngOnDestroy",value:function(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(i.Y36(F,1),i.Y36(i.SBq),i.Y36(y.tE),i.Y36(i.sBO),i.Y36(z,8),i.Y36(E.Qb,8))},e.\u0275cmp=i.Xpm({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,n){1&e&&i.NdJ("click",function(){return n._toggle()})("keydown",function(e){return n._keydown(e)}),2&e&&(i.uIk("id",n.panel._headerId)("tabindex",n.disabled?-1:0)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),i.Udp("height",n._getHeaderHeight()),i.ekj("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after","after"===n._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===n._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===n._animationMode))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},ngContentSelectors:M,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,n){1&e&&(i.F$t(I),i.TgZ(0,"span",0),i.Hsn(1),i.Hsn(2,1),i.Hsn(3,2),i.qZA(),i.YNc(4,D,1,1,"span",1)),2&e&&(i.xp6(4),i.Q6J("ngIf",n._showToggle()))},directives:[_.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}\n'],encapsulation:2,data:{animation:[N.indicatorRotate]},changeDetection:0}),e}(),U=function(){var e=function e(){(0,p.Z)(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[_.ez,v.BQ,f,b.eL]]}),e}(),V=["*"],L=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["aio-expandable-section"]],inputs:{title:"title"},ngContentSelectors:V,decls:4,vars:1,consts:[[2,"background","inherit"]],template:function(e,n){1&e&&(i.F$t(),i.TgZ(0,"mat-expansion-panel",0),i.TgZ(1,"mat-expansion-panel-header"),i._uU(2),i.qZA(),i.Hsn(3),i.qZA()),2&e&&(i.xp6(2),i.hij(" ",n.title," "))},directives:[F,J],encapsulation:2}),e}(),X=function(){function e(){this.customElementComponent=L}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[U]]}),e}()}}]);
//# sourceMappingURL=src_app_custom-elements_expandable-section_expandable-section_module_ts.9a3c1ff05c4b2fb67a7d.js.map