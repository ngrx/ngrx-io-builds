"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_announcement-bar_announcement-bar_module_ts"],{941:function(Z,m,o){o.r(m),o.d(m,{AnnouncementBarModule:function(){return B}});var i=o(942),s=o(9004),l=o(8143),f=o(8336),d=o(5349),v=o(1325),g=o(9258),h=o(8936),n=o(1109),p=o(2293);function A(e,c){if(1&e&&(n.TgZ(0,"div",1),n.TgZ(1,"div",2),n._UZ(2,"img",3),n._UZ(3,"p",4),n.TgZ(4,"a",5),n._uU(5,"Learn More"),n.qZA(),n.qZA(),n.qZA()),2&e){var t=n.oxw();n.xp6(2),n.Q6J("src",t.announcement.imageUrl,n.LSH),n.xp6(1),n.Q6J("innerHTML",t.announcement.message,n.oJD),n.xp6(1),n.Q6J("href",t.announcement.linkUrl,n.LSH)}}var u=h.bL+"announcements.json",C=function(){var e=function(){function c(t,a){(0,s.Z)(this,c),this.http=t,this.logger=a}return(0,i.Z)(c,[{key:"ngOnInit",value:function(){var a=this;this.http.get(u).pipe((0,v.K)(function(r){return a.logger.error(new Error("".concat(u," request failed: ").concat(r.message))),[]}),(0,g.U)(function(r){return a.findCurrentAnnouncement(r)}),(0,v.K)(function(r){return a.logger.error(new Error("".concat(u," contains invalid data: ").concat(r.message))),[]})).subscribe(function(r){return a.announcement=r})}},{key:"findCurrentAnnouncement",value:function(a){return a.filter(function(r){return new Date(r.startDate).valueOf()<Date.now()}).filter(function(r){return new Date(r.endDate).valueOf()>Date.now()})[0]}}]),c}();return e.\u0275fac=function(t){return new(t||e)(n.Y36(f.eN),n.Y36(p.Y))},e.\u0275cmp=n.Xpm({type:e,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],[3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(t,a){1&t&&n.YNc(0,A,6,3,"div",0),2&t&&n.Q6J("ngIf",a.announcement)},directives:[l.O5],encapsulation:2}),e}(),B=function(){var e=(0,i.Z)(function c(){(0,s.Z)(this,c),this.customElementComponent=C});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[l.ez,d.m,f.JF]]}),e}()}}]);
//# sourceMappingURL=src_app_custom-elements_announcement-bar_announcement-bar_module_ts.9817df5b2ff0187e.js.map