"use strict";(self.webpackChunkcomponents_collection=self.webpackChunkcomponents_collection||[]).push([[652],{1652:(T,p,r)=>{r.r(p),r.d(p,{ToggleSampleModule:()=>M});var g=r(9808),m=r(4177),e=r(4893);const _=function(l,s,o,n){return{font:l,"max-height":s,padding:o,width:n}},u=function(l,s,o,n,t,d,c,i){return{keyboard_tab:l,left_tg:s,right_tg:o,idle:n,normal_tg:t,disable_tg:d,left_toggle:c,right_toggle:i}};function b(l,s){if(1&l){const o=e.EpF();e.TgZ(0,"button",1),e.NdJ("click",function(){const t=e.CHM(o),d=t.$implicit,c=t.index,i=e.oxw();return e.KtG(i.select_toggle(d,c,i.disable))})("mouseover",function(){const t=e.CHM(o),d=t.$implicit,c=t.index,i=e.oxw();return e.KtG(i.hover_on(d,c))})("mouseout",function(){const t=e.CHM(o),d=t.$implicit,c=t.index,i=e.oxw();return e.KtG(i.hover_out(d,c))}),e.qZA()}if(2&l){const o=s.$implicit,n=s.index,t=e.oxw();e.Tol(t.random_cl(n)),e.Q6J("innerHTML",o,e.oJD)("tabindex",t.disable?-1:1)("ngStyle",e.l5B(6,_,t.size_data[t.size].font,t.size_data[t.size].height,t.size_data[t.size].padding,t.size_data[t.width].width))("ngClass",e.qlk(11,u,t.key_state&&0==t.disable,0==n,n>0,!t.disable&&o!=t.selected&&t.selected.length>0,!t.disable,t.disable&&o!=t.selected,0==n,n==t.toggle_option.length-1))}}let f=(()=>{class l{constructor(o){this.el=o,this.width="limited",this.toggle_option=["First Options","Second Options","Second1 Options"],this.selected="First Options",this.disable=!1,this.size="small",this.background="#fff",this.size_data={default:{font:"normal normal normal 16px opensans",height:"40px",padding:"7px 18px"},small:{font:"normal normal normal 12px opensans",height:"32px",padding:"6px 14px"},full:{width:"100%"},limited:{width:"none"}},this.clicked=new e.vpe,this.rnd_nm=this.random_no(),this.key_state=!0}ngOnInit(){this.width=this.width.toLowerCase(),"full"==this.width&&(this.size_data.full.width=Math.floor(100/this.toggle_option.length)+"%"),this.selected=""==this.selected?this.toggle_option[0]:this.selected}ngAfterViewInit(){this.select_toggle(this.selected,this.toggle_option.indexOf(this.selected),!1)}random_no(o=11){return"abc"}rmv_all_slt(o="s"){var n=this.el.nativeElement.getElementsByClassName("all_toggle");for(let t=0;t<n.length;t++)"s"==o?n[t].classList.remove("selected","selected1","selected2"):n[t].classList.remove("hovered","hovered1","hovered2","hovered3","hovered4")}select_toggle(o,n,t){if(!t)if(this.selected=o,this.clicked.emit(o),this.rmv_all_slt("h"),this.rmv_all_slt("s"),0==n){let a=this.el.nativeElement.getElementsByClassName(this.rnd_nm+n)[0];a.classList.add("selected"),a.blur()}else{var c=this.rnd_nm+(n-1);let i=this.el.nativeElement.getElementsByClassName(this.rnd_nm+n)[0],a=this.el.nativeElement.getElementsByClassName(c)[0];i.classList.add("selected1"),a.classList.add("selected2")}}random_cl(o){return"abc"+o}hover_on(o,n){if(this.disable)return;this.key_state=!1;let t=this.toggle_option.indexOf(this.selected);if(t==n)return;let c=this.el.nativeElement.getElementsByClassName(this.rnd_nm+n)[0];Math.abs(n-t)>1?0==n?c.classList.add("hovered"):(this.el.nativeElement.getElementsByClassName(this.rnd_nm+(n-1))[0].classList.add("hovered3"),c.classList.add("hovered1")):n>t?c.classList.add("hovered1"):n>0?(c.classList.add("hovered2"),this.el.nativeElement.getElementsByClassName(this.rnd_nm+(n-1))[0].classList.add("hovered3")):c.classList.add("hovered4")}hover_out(o,n){this.disable||(this.el.nativeElement.getElementsByClassName(this.rnd_nm+n)[0].blur(),this.key_state=!0,this.rmv_all_slt("h"))}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(e.SBq))},l.\u0275cmp=e.Xpm({type:l,selectors:[["apx-toggle"]],inputs:{width:"width",toggle_option:"toggle_option",selected:"selected",disable:"disable",size:"size",background:"background"},outputs:{clicked:"clicked"},decls:1,vars:1,consts:[["class","all_toggle",3,"innerHTML","tabindex","class","ngStyle","ngClass","click","mouseover","mouseout",4,"ngFor","ngForOf"],[1,"all_toggle",3,"innerHTML","tabindex","ngStyle","ngClass","click","mouseover","mouseout"]],template:function(o,n){1&o&&e.YNc(0,b,1,20,"button",0),2&o&&e.Q6J("ngForOf",n.toggle_option)},dependencies:[g.mk,g.sg,g.PC],styles:["button[_ngcontent-%COMP%]{border:none;outline:none;background:white;position:relative}.normal_tg[_ngcontent-%COMP%]{color:#111;letter-spacing:0}.disable_tg[_ngcontent-%COMP%]{color:#ccc;letter-spacing:0}.idle[_ngcontent-%COMP%]{opacity:1}.disabled[_ngcontent-%COMP%]{border:1px solid #ccc}.left_toggle[_ngcontent-%COMP%]{border-radius:26px 0 0 26px}.right_toggle[_ngcontent-%COMP%]{border-radius:0 26px 26px 0}.left_tg[_ngcontent-%COMP%]{border:1px solid #ccc}.right_tg[_ngcontent-%COMP%]{border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc}.selected[_ngcontent-%COMP%]{border:1px solid #111;background:#145da0;color:#fff}.selected1[_ngcontent-%COMP%]{border-top:1px solid #111;border-bottom:1px solid #111;border-right:1px solid #111;opacity:1;background:#145da0;color:#fff}.selected2[_ngcontent-%COMP%]{border-right:1px solid #111;opacity:1}.hovered[_ngcontent-%COMP%]{border:1px solid #e6ebf0;background:#eee}.hovered1[_ngcontent-%COMP%]{border-top:1px solid #ccc;border-bottom:1px solid #ccc;border-right:1px solid #ccc;background:#e6ebf0}.hovered2[_ngcontent-%COMP%]{border-top:1px solid #ccc;border-bottom:1px solid #ccc;background:#e6ebf0}.hovered3[_ngcontent-%COMP%]{border-right:1px solid #ccc}.hovered4[_ngcontent-%COMP%]{border-top:1px solid #ccc;background:#e6ebf0;border-bottom:1px solid #ccc;border-left:1px solid #ccc}.keyboard_tab[_ngcontent-%COMP%]:focus{opacity:1;outline-offset:2px;outline:2px solid #111;z-index:10}"]}),l})();const h=function(){return["Physics","Chemistry","Math"]},x=function(){return["Physics","Chemistry"]},C=[{path:"",component:(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-toggle-sample"]],decls:6,vars:11,consts:[[3,"toggle_option","selected"],[1,"margin-top"],[3,"toggle_option","selected","disable"],[3,"toggle_option","selected","size"]],template:function(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"apx-toggle",0),e.qZA(),e.TgZ(2,"div",1),e._UZ(3,"apx-toggle",2),e.qZA(),e.TgZ(4,"div",1),e._UZ(5,"apx-toggle",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("toggle_option",e.DdM(8,h))("selected","Physics"),e.xp6(2),e.Q6J("toggle_option",e.DdM(9,h))("selected","Physics")("disable",!0),e.xp6(2),e.Q6J("toggle_option",e.DdM(10,x))("selected","Physics")("size","default"))},dependencies:[f]}),l})()}];let v=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[m.Bz.forChild(C),m.Bz]}),l})();var y=r(9909);let M=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[g.ez,y.v,v]}),l})()}}]);