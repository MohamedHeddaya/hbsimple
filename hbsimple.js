hbsmpl={};
hbsmplv={};
hbsmpld={

hbsmpldgn:null,
hbsmpldgbl:false,
hbslmelf:null,
hbslmelfps:null,
hbslmelfbl:false,
hbslmelfpsbl:false,
hbslmx:null,
hbslmy:null,
hbslmel:null,
hbslrls:{},
// hbsmplnelf:null,
// hbsmplneln:null,
// hbsmplnelr:null,
// hbsmplnele:null,
hbsmplnelfps:null,
hbsmplalawhmd:"ot",
hbsmplalhwhmd:"ac",
hbsmplalhxymd:"ac",

};
hbsmpls={};
// hbsmpls["hbroot"]={};
// hbsmpls["hbroot"].hbsmpln="hbroot";
// hbsmpls["hbroot"].hbsmplp=document.body;
// hbsmpls["hbroot"].hbsmple=hbroot;
// hbsmpls["hbroot"].hbsmplt="hb";
// hbsmpls["hbroot"].hbsmplx=0;
// hbsmpls["hbroot"].hbsmply=0;
hbsmpls["hbbody"]={};
hbsmpls["hbbody"].hbsmpln="hbbody";
hbsmpls["hbbody"].hbsmplp=document.body.parentElement;
hbsmpls["hbbody"].hbsmple=document.body;
hbsmpls["hbbody"].hbsmple.style.top="0px";
hbsmpls["hbbody"].hbsmple.style.left="0px";
hbsmpls["hbbody"].hbsmple.style.width="100%";
hbsmpls["hbbody"].hbsmple.style.height="100%";
hbsmpls["hbbody"].hbsmple.style.position="fixed";
hbsmpls["hbbody"].hbsmple.style.margin="0px";
hbsmpls["hbbody"].hbsmple.style.padding="0px";
hbsmpls["hbbody"].hbsmplt="body";
hbsmpls["hbbody"].hbsmply=document.body.offsetTop;
hbsmpls["hbbody"].hbsmplx=document.body.offsetLeft;
hbsmpls["hbbody"].hbsmplw=document.body.offsetWidth;
hbsmpls["hbbody"].hbsmplh=document.body.offsetHeight;
hbsmpldl=function(hbsmplpap0){

hbsmplv.vaa15={};
hbsmplv.vaa15.hbsmpln=hbsmplpap0;
hbsmplv.vaa15.hbsmpl=hbsmpls[hbsmplv.vaa15.hbsmpln];
hbsmplv.vaa15.hbsmple=hbsmplv.vaa15.hbsmpl.hbsmple;
hbsmplv.vaa15.hbsmple.remove();
delete hbsmpls[hbsmplv.vaa15.hbsmpln];

};
hbsmpltri=function(hbsmplpaq0,hbsmplpaq1,hbsmplpaq2,hbsmplpaq3){

hbsmplv.vaa16={};
if(typeof hbsmplpaq3=="undefined"){hbsmplpaq3={};};
hbsmplv.vaa16.hbsmpln=hbsmplpaq0;
hbsmplv.vaa16.hbsmpltrimd=hbsmplpaq1;
hbsmplv.vaa16.hbsmpltricl=hbsmplpaq2;
hbsmplv.vaa16.hbsmplwha=hbsmplpaq3;
if(typeof hbsmplv.vaa16.hbsmplwha.hbw=="undefined"){hbsmplv.vaa16.hbsmplwha.hbw=30;};
if(typeof hbsmplv.vaa16.hbsmplwha.hbh=="undefined"){hbsmplv.vaa16.hbsmplwha.hbh=30;};
if(hbsmplv.vaa16.hbsmpltrimd=="rangle"){
if(typeof hbsmplv.vaa16.hbsmplwha.hba=="undefined"){hbsmplv.vaa16.hbsmplwha.hba="tprt";};
}
if(hbsmplv.vaa16.hbsmpltrimd=="iso"){
if(typeof hbsmplv.vaa16.hbsmplwha.hba=="undefined"){hbsmplv.vaa16.hbsmplwha.hba="rt";};
}
hbsmplv.vaa16.hbsmplw=hbsmplv.vaa16.hbsmplwha.hbw;
hbsmplv.vaa16.hbsmplh=hbsmplv.vaa16.hbsmplwha.hbh;
hbsmplv.vaa16.hbsmplhw=hbsmplv.vaa16.hbsmplw/2;
hbsmplv.vaa16.hbsmplhh=hbsmplv.vaa16.hbsmplh/2;
hbsmplv.vaa16.hbsmpltria=hbsmplv.vaa16.hbsmplwha.hba;
if(hbsmplv.vaa16.hbsmpltrimd=="rangle"){
if(hbsmplv.vaa16.hbsmpltria=="tplt"){
hbsmplr(hbsmplv.vaa16.hbsmpln,
{
hbw:0,hbh:0,
hbbc:"transparent",hbbdtc:hbsmplv.vaa16.hbsmpltricl,hbbdlc:"transparent",hbbdrc:"transparent",hbbdbc:"transparent",
hbbdt:hbsmplv.vaa16.hbsmplh,hbbdl:0,hbbdb:0,hbbdr:hbsmplv.vaa16.hbsmplw,
});
}
if(hbsmplv.vaa16.hbsmpltria=="tprt"){
hbsmplr(hbsmplv.vaa16.hbsmpln,
{
hbw:0,hbh:0,
hbbc:"transparent",hbbdtc:"transparent",hbbdlc:"transparent",hbbdrc:hbsmplv.vaa16.hbsmpltricl,hbbdbc:"transparent",
hbbdt:0,hbbdl:0,hbbdb:hbsmplv.vaa16.hbsmplh,hbbdr:hbsmplv.vaa16.hbsmplw,
});
}
if(hbsmplv.vaa16.hbsmpltria=="bmlt"){
hbsmplr(hbsmplv.vaa16.hbsmpln,
{
hbw:0,hbh:0,
hbbc:"transparent",hbbdtc:"transparent",hbbdlc:hbsmplv.vaa16.hbsmpltricl,hbbdrc:"transparent",hbbdbc:"transparent",
hbbdt:hbsmplv.vaa16.hbsmplh,hbbdl:hbsmplv.vaa16.hbsmplw,hbbdb:0,hbbdr:0,
});
}
if(hbsmplv.vaa16.hbsmpltria=="bmrt"){
hbsmplr(hbsmplv.vaa16.hbsmpln,
{
hbw:0,hbh:0,
hbbc:"transparent",hbbdtc:"transparent",hbbdlc:"transparent",hbbdrc:"transparent",hbbdbc:hbsmplv.vaa16.hbsmpltricl,
hbbdt:0,hbbdl:hbsmplv.vaa16.hbsmplw,hbbdb:hbsmplv.vaa16.hbsmplh,hbbdr:0,
});
}
// if(hbsmplv.vaa16.hbsmpltria=="mss"){
// hbsmplr(hbsmplv.vaa16.hbsmpln,
// {
// hbw:0,hbh:0,
// hbbc:"transparent",hbbdtc:"transparent",hbbdlc:"red",hbbdrc:"red",hbbdbc:"red",
// hbbdt:30,hbbdl:30,hbbdb:30,hbbdr:30,
// });
// }
}
if(hbsmplv.vaa16.hbsmpltrimd=="iso"){
if(hbsmplv.vaa16.hbsmpltria=="tp"){
hbsmplr(hbsmplv.vaa16.hbsmpln,
{
hbw:0,hbh:0,
hbbc:"transparent",
hbbdtc:"transparent",hbbdlc:"transparent",hbbdrc:"transparent",hbbdbc:hbsmplv.vaa16.hbsmpltricl,
hbbdt:0,hbbdl:hbsmplv.vaa16.hbsmplhw,hbbdb:hbsmplv.vaa16.hbsmplh,hbbdr:hbsmplv.vaa16.hbsmplhw,
});
}
if(hbsmplv.vaa16.hbsmpltria=="bm"){
hbsmplr(hbsmplv.vaa16.hbsmpln,
{
hbw:0,hbh:0,
hbbc:"transparent",
hbbdtc:hbsmplv.vaa16.hbsmpltricl,hbbdlc:"transparent",hbbdrc:"transparent",hbbdbc:"transparent",
hbbdt:hbsmplv.vaa16.hbsmplh,hbbdl:hbsmplv.vaa16.hbsmplhw,hbbdb:0,hbbdr:hbsmplv.vaa16.hbsmplhw,
});
}
if(hbsmplv.vaa16.hbsmpltria=="lt"){
hbsmplr(hbsmplv.vaa16.hbsmpln,
{
hbw:0,hbh:0,
hbbc:"transparent",
hbbdtc:"transparent",hbbdlc:"transparent",hbbdrc:hbsmplv.vaa16.hbsmpltricl,hbbdbc:"transparent",
hbbdt:hbsmplv.vaa16.hbsmplhh,hbbdl:0,hbbdb:hbsmplv.vaa16.hbsmplhh,hbbdr:hbsmplv.vaa16.hbsmplw,
});
}
if(hbsmplv.vaa16.hbsmpltria=="rt"){
hbsmplr(hbsmplv.vaa16.hbsmpln,
{
hbw:0,hbh:0,
hbbc:"transparent",
hbbdtc:"transparent",hbbdlc:hbsmplv.vaa16.hbsmpltricl,hbbdrc:"transparent",hbbdbc:"transparent",
hbbdt:hbsmplv.vaa16.hbsmplhh,hbbdl:hbsmplv.vaa16.hbsmplw,hbbdb:hbsmplv.vaa16.hbsmplhh,hbbdr:0,
});
}
}

};
hbsmplbding=function(hbsmplpan0,hbsmplpan1,hbsmplpan2){

hbsmplv.vaa13={};
hbsmplv.vaa13.hbbsmpln=hbsmplpan0;
hbsmplv.vaa13.hbhsmpln=hbsmplpan1;
hbsmplv.vaa13.hbbdgmd=hbsmplpan2;
hbsmplv.vaa13.hbbsmpl=hbsmpls[hbsmplv.vaa13.hbbsmpln];
hbsmplv.vaa13.hbhsmpl=hbsmpls[hbsmplv.vaa13.hbhsmpln];
hbsmplv.vaa13.hbbsmplwh=hbsmplwh(hbsmplv.vaa13.hbbsmpln,"ac");
hbsmplv.vaa13.hbbsmplw=hbsmplv.vaa13.hbbsmplwh.hbw;
hbsmplv.vaa13.hbbsmplh=hbsmplv.vaa13.hbbsmplwh.hbh;
if(hbsmplv.vaa13.hbbdgmd=="tp"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"tplt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hby:-(hbsmplv.vaa13.hbbsmplh)});
}
if(hbsmplv.vaa13.hbbdgmd=="ctp"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"ctp");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hby:-(hbsmplv.vaa13.hbbsmplh)});
}
if(hbsmplv.vaa13.hbbdgmd=="lt"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"tplt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hbx:-(hbsmplv.vaa13.hbbsmplw)});
}
if(hbsmplv.vaa13.hbbdgmd=="clt"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"clt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hbx:-(hbsmplv.vaa13.hbbsmplw)});
}
if(hbsmplv.vaa13.hbbdgmd=="bm"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"bmlt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hby:(hbsmplv.vaa13.hbbsmplh)});
}
if(hbsmplv.vaa13.hbbdgmd=="cbm"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"cbm");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hby:(hbsmplv.vaa13.hbbsmplh)});
}
if(hbsmplv.vaa13.hbbdgmd=="rt"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"bmrt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hbx:(hbsmplv.vaa13.hbbsmplw)});
}
if(hbsmplv.vaa13.hbbdgmd=="crt"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"crt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hbx:(hbsmplv.vaa13.hbbsmplw)});
}
if(hbsmplv.vaa13.hbbdgmd=="tplt"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"tplt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hbx:-(hbsmplv.vaa13.hbbsmplw),hby:-(hbsmplv.vaa13.hbbsmplh)});
}
if(hbsmplv.vaa13.hbbdgmd=="tprt"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"tprt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hbx:(hbsmplv.vaa13.hbbsmplw),hby:-(hbsmplv.vaa13.hbbsmplh)});
}
if(hbsmplv.vaa13.hbbdgmd=="bmlt"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"bmlt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hbx:-(hbsmplv.vaa13.hbbsmplw),hby:(hbsmplv.vaa13.hbbsmplh)});
}
if(hbsmplv.vaa13.hbbdgmd=="bmrt"){
hbsmplal(hbsmplv.vaa13.hbbsmpln,hbsmplv.vaa13.hbhsmpln,"bmrt");
hbsmplrl(hbsmplv.vaa13.hbbsmpln,{hbx:(hbsmplv.vaa13.hbbsmplw),hby:(hbsmplv.vaa13.hbbsmplh)});
}

};
hbsmplcr=function(hbsmplpaj0,hbsmplpaj1,hbsmplpaj2,hbsmplpaj3){

hbsmplv.vaa9={};
hbsmplv.vaa9.hbcsmpln=hbsmplpaj0;
hbsmplv.vaa9.hbhsmpln=hbsmplpaj1;
hbsmplv.vaa9.hbcsmpl=hbsmpls[hbsmplv.vaa9.hbcsmpln];
hbsmplv.vaa9.hbhsmpl=hbsmpls[hbsmplv.vaa9.hbhsmpln];
if(typeof hbsmplpaj3=="undefined"){hbsmplpaj3="ot";};
hbsmplv.vaa9.hbcrmd=hbsmplpaj2;
hbsmplv.vaa9.hbxymd=hbsmplpaj3;
hbsmplv.vaa9.hbcsmplwh=hbsmplwh(hbsmplv.vaa9.hbcsmpln,"ac");
if(hbsmplv.vaa9.hbxymd=="ot"){
hbsmplv.vaa9.hbhsmplwh=hbsmplwh(hbsmplv.vaa9.hbhsmpln,"ot");
}
if(hbsmplv.vaa9.hbxymd=="in"){
hbsmplv.vaa9.hbhsmplwh=hbsmplwh(hbsmplv.vaa9.hbhsmpln,"in");
}
hbsmplv.vaa9.hbcsmplw=hbsmplv.vaa9.hbcsmplwh.hbw;
hbsmplv.vaa9.hbhsmplw=hbsmplv.vaa9.hbhsmplwh.hbw;
hbsmplv.vaa9.hbcsmplh=hbsmplv.vaa9.hbcsmplwh.hbh;
hbsmplv.vaa9.hbhsmplh=hbsmplv.vaa9.hbhsmplwh.hbh;
hbsmplv.vaa9.hbcsmplhw=hbsmplv.vaa9.hbcsmplw/2;
hbsmplv.vaa9.hbcsmplhh=hbsmplv.vaa9.hbcsmplh/2;
hbsmplv.vaa9.hbhsmplhw=hbsmplv.vaa9.hbhsmplw/2;
hbsmplv.vaa9.hbhsmplhh=hbsmplv.vaa9.hbhsmplh/2;
hbsmplv.vaa9.hbcsmplx=null;
hbsmplv.vaa9.hbcsmply=null;
if(hbsmplv.vaa9.hbxymd=="ot"){
hbsmplv.vaa9.hbhsmplxy=hbsmplxy(hbsmplv.vaa9.hbhsmpln,"ot");
hbsmplv.vaa9.hbhsmplx=hbsmplv.vaa9.hbhsmplxy.hbx;
hbsmplv.vaa9.hbhsmply=hbsmplv.vaa9.hbhsmplxy.hby;
}
if(hbsmplv.vaa9.hbxymd=="in"){
hbsmplv.vaa9.hbhsmplx=0;
hbsmplv.vaa9.hbhsmply=0;
}
if(hbsmplv.vaa9.hbcrmd=="x"){
hbsmplv.vaa9.hbcsmplx=(hbsmplv.vaa9.hbhsmplhw-hbsmplv.vaa9.hbcsmplhw)+hbsmplv.vaa9.hbhsmplx;
hbsmplr(hbsmplv.vaa9.hbcsmpln,{hbx:hbsmplv.vaa9.hbcsmplx});
}
if(hbsmplv.vaa9.hbcrmd=="y"){
hbsmplv.vaa9.hbcsmply=(hbsmplv.vaa9.hbhsmplhh-hbsmplv.vaa9.hbcsmplhh)+hbsmplv.vaa9.hbhsmply;
hbsmplr(hbsmplv.vaa9.hbcsmpln,{hby:hbsmplv.vaa9.hbcsmply});
}
if(hbsmplv.vaa9.hbcrmd=="xy"){
hbsmplv.vaa9.hbcsmplx=(hbsmplv.vaa9.hbhsmplhw-hbsmplv.vaa9.hbcsmplhw)+hbsmplv.vaa9.hbhsmplx;
hbsmplv.vaa9.hbcsmply=(hbsmplv.vaa9.hbhsmplhh-hbsmplv.vaa9.hbcsmplhh)+hbsmplv.vaa9.hbhsmply;
hbsmplr(hbsmplv.vaa9.hbcsmpln,{hbx:hbsmplv.vaa9.hbcsmplx,hby:hbsmplv.vaa9.hbcsmply});
}

};
hbsmplxy=function(hbsmplpam0,hbsmplpam1){

hbsmplv.vaa12={};
hbsmplv.vaa12.hbsmpln=hbsmplpam0;
hbsmplv.vaa12.hbsmplxymd=hbsmplpam1;
hbsmplv.vaa12.hbsmpl=hbsmpls[hbsmplv.vaa12.hbsmpln];
hbsmplv.vaa12.hbsmple=hbsmplv.vaa12.hbsmpl.hbsmple;
hbsmplv.vaa12.hbsmplox=hbsmplv.vaa12.hbsmpl.hbsmplx;
hbsmplv.vaa12.hbsmploy=hbsmplv.vaa12.hbsmpl.hbsmply;
hbsmplv.vaa12.hbsmploxp=hbsmplv.vaa12.hbsmpl.hbsmplxp;
hbsmplv.vaa12.hbsmployp=hbsmplv.vaa12.hbsmpl.hbsmplyp;

hbsmplv.vaa12.hbsmplbdl=hbsmplv.vaa12.hbsmpl.hbsmplbdl;
hbsmplv.vaa12.hbsmplbdt=hbsmplv.vaa12.hbsmpl.hbsmplbdt;
// console.log(hbsmplv.vaa12.hbsmploy);
hbsmplv.vaa12.hbsmplbdlp=hbsmplv.vaa12.hbsmpl.hbsmplbdlp;
hbsmplv.vaa12.hbsmplbdtp=hbsmplv.vaa12.hbsmpl.hbsmplbdtp;

hbsmplv.vaa12.hbsmplx=null;
hbsmplv.vaa12.hbsmply=null;
hbsmplv.vaa12.hbsmplxp=null;
hbsmplv.vaa12.hbsmplyp=null;

if(hbsmplv.vaa12.hbsmplxymd=="in"){
hbsmplv.vaa12.hbsmplx=hbsmplv.vaa12.hbsmplox+hbsmplv.vaa12.hbsmplbdl;
hbsmplv.vaa12.hbsmply=hbsmplv.vaa12.hbsmploy+hbsmplv.vaa12.hbsmplbdt;
hbsmplv.vaa12.hbsmplxp=hbsmplv.vaa12.hbsmploxp+hbsmplv.vaa12.hbsmplbdlp;
hbsmplv.vaa12.hbsmplyp=hbsmplv.vaa12.hbsmployp+hbsmplv.vaa12.hbsmplbdtp;
return {hbx:hbsmplv.vaa12.hbsmplx,hby:hbsmplv.vaa12.hbsmply,
hbxp:hbsmplv.vaa12.hbsmplxp,hbyp:hbsmplv.vaa12.hbsmplyp};
}
if(hbsmplv.vaa12.hbsmplxymd=="ot"){
hbsmplv.vaa12.hbsmplx=hbsmplv.vaa12.hbsmplox;
hbsmplv.vaa12.hbsmply=hbsmplv.vaa12.hbsmploy;
hbsmplv.vaa12.hbsmplxp=hbsmplv.vaa12.hbsmploxp;
hbsmplv.vaa12.hbsmplyp=hbsmplv.vaa12.hbsmployp;
return {hbx:hbsmplv.vaa12.hbsmplx,hby:hbsmplv.vaa12.hbsmply,
hbxp:hbsmplv.vaa12.hbsmplxp,hbyp:hbsmplv.vaa12.hbsmplyp};
}
if(hbsmplv.vaa12.hbsmplxymd=="ac"){
hbsmplv.vaa12.hbsmplxy=hbsmplv.vaa12.hbsmple.getBoundingClientRect();
hbsmplv.vaa12.hbsmplx=hbsmplv.vaa12.hbsmplxy.x;
hbsmplv.vaa12.hbsmply=hbsmplv.vaa12.hbsmplxy.y;
hbsmplv.vaa12.hbsmplpn=hbsmplv.vaa12.hbsmpl.hbsmplpn;
hbsmplv.vaa12.hbsmplp=hbsmpls[hbsmplv.vaa12.hbsmplpn];
hbsmplv.vaa12.hbsmplpe=hbsmplv.vaa12.hbsmplp.hbsmple;
hbsmplv.vaa12.hbsmplpwh=hbsmplv.vaa12.hbsmplpe.getBoundingClientRect();
hbsmplv.vaa12.hbsmplpw=hbsmplv.vaa12.hbsmplpwh.width;
hbsmplv.vaa12.hbsmplph=hbsmplv.vaa12.hbsmplpwh.height;
hbsmplv.vaa12.hbsmplxp=(hbsmplv.vaa12.hbsmplx/hbsmplv.vaa12.hbsmplpw)*100;
hbsmplv.vaa12.hbsmplyp=(hbsmplv.vaa12.hbsmply/hbsmplv.vaa12.hbsmplph)*100;
return {hbx:hbsmplv.vaa12.hbsmplx,hby:hbsmplv.vaa12.hbsmply,
hbxp:hbsmplv.vaa12.hbsmplxp,hbyp:hbsmplv.vaa12.hbsmplyp,
hbpw:hbsmplv.vaa12.hbsmplpw,hbph:hbsmplv.vaa12.hbsmplph};
}

};
hbsmplwh=function(hbsmplpal0,hbsmplpal1){

hbsmplv.vaa11={};
hbsmplv.vaa11.hbsmpln=hbsmplpal0;
hbsmplv.vaa11.hbsmplwhmd=hbsmplpal1;
hbsmplv.vaa11.hbsmpl=hbsmpls[hbsmplv.vaa11.hbsmpln];
hbsmplv.vaa11.hbsmple=hbsmplv.vaa11.hbsmpl.hbsmple;
hbsmplv.vaa11.hbsmplow=hbsmplv.vaa11.hbsmpl.hbsmplw;
hbsmplv.vaa11.hbsmploh=hbsmplv.vaa11.hbsmpl.hbsmplh;
hbsmplv.vaa11.hbsmplowp=hbsmplv.vaa11.hbsmpl.hbsmplwp;
hbsmplv.vaa11.hbsmplohp=hbsmplv.vaa11.hbsmpl.hbsmplhp;

hbsmplv.vaa11.hbsmplpgl=hbsmplv.vaa11.hbsmpl.hbsmplpgl;
hbsmplv.vaa11.hbsmplpgr=hbsmplv.vaa11.hbsmpl.hbsmplpgr;
hbsmplv.vaa11.hbsmplpgb=hbsmplv.vaa11.hbsmpl.hbsmplpgb;
hbsmplv.vaa11.hbsmplpgt=hbsmplv.vaa11.hbsmpl.hbsmplpgt;
hbsmplv.vaa11.hbsmplpglp=hbsmplv.vaa11.hbsmpl.hbsmplpglp;
hbsmplv.vaa11.hbsmplpgrp=hbsmplv.vaa11.hbsmpl.hbsmplpgrp;
hbsmplv.vaa11.hbsmplpgbp=hbsmplv.vaa11.hbsmpl.hbsmplpgbp;
hbsmplv.vaa11.hbsmplpgtp=hbsmplv.vaa11.hbsmpl.hbsmplpgtp;

hbsmplv.vaa11.hbsmplmgl=hbsmplv.vaa11.hbsmpl.hbsmplmgl;
hbsmplv.vaa11.hbsmplmgr=hbsmplv.vaa11.hbsmpl.hbsmplmgr;
hbsmplv.vaa11.hbsmplmgb=hbsmplv.vaa11.hbsmpl.hbsmplmgb;
hbsmplv.vaa11.hbsmplmgt=hbsmplv.vaa11.hbsmpl.hbsmplmgt;
hbsmplv.vaa11.hbsmplmglp=hbsmplv.vaa11.hbsmpl.hbsmplmglp;
hbsmplv.vaa11.hbsmplmgrp=hbsmplv.vaa11.hbsmpl.hbsmplmgrp;
hbsmplv.vaa11.hbsmplmgbp=hbsmplv.vaa11.hbsmpl.hbsmplmgbp;
hbsmplv.vaa11.hbsmplmgtp=hbsmplv.vaa11.hbsmpl.hbsmplmgtp;

hbsmplv.vaa11.hbsmplbdl=hbsmplv.vaa11.hbsmpl.hbsmplbdl;
hbsmplv.vaa11.hbsmplbdr=hbsmplv.vaa11.hbsmpl.hbsmplbdr;
hbsmplv.vaa11.hbsmplbdb=hbsmplv.vaa11.hbsmpl.hbsmplbdb;
hbsmplv.vaa11.hbsmplbdt=hbsmplv.vaa11.hbsmpl.hbsmplbdt;
hbsmplv.vaa11.hbsmplbdlp=hbsmplv.vaa11.hbsmpl.hbsmplbdlp;
hbsmplv.vaa11.hbsmplbdrp=hbsmplv.vaa11.hbsmpl.hbsmplbdrp;
hbsmplv.vaa11.hbsmplbdbp=hbsmplv.vaa11.hbsmpl.hbsmplbdbp;
hbsmplv.vaa11.hbsmplbdtp=hbsmplv.vaa11.hbsmpl.hbsmplbdtp;
hbsmplv.vaa11.hbsmplw=null;
hbsmplv.vaa11.hbsmplh=null;
hbsmplv.vaa11.hbsmplwp=null;
hbsmplv.vaa11.hbsmplhp=null;
if(hbsmplv.vaa11.hbsmplwhmd=="in"){
hbsmplv.vaa11.hbsmplw=hbsmplv.vaa11.hbsmplow;
hbsmplv.vaa11.hbsmplh=hbsmplv.vaa11.hbsmploh;
hbsmplv.vaa11.hbsmplwp=hbsmplv.vaa11.hbsmplowp;
hbsmplv.vaa11.hbsmplhp=hbsmplv.vaa11.hbsmplohp;
return {hbw:hbsmplv.vaa11.hbsmplw,hbh:hbsmplv.vaa11.hbsmplh,
hbwp:hbsmplv.vaa11.hbsmplwp,hbhp:hbsmplv.vaa11.hbsmplhp};
// only wh
}
if(hbsmplv.vaa11.hbsmplwhmd=="inmx"){
hbsmplv.vaa11.hbsmplw=hbsmplv.vaa11.hbsmplow+hbsmplv.vaa11.hbsmplpgl+hbsmplv.vaa11.hbsmplpgr;
hbsmplv.vaa11.hbsmplh=hbsmplv.vaa11.hbsmploh+hbsmplv.vaa11.hbsmplpgb+hbsmplv.vaa11.hbsmplpgt;
hbsmplv.vaa11.hbsmplwp=hbsmplv.vaa11.hbsmplowp+hbsmplv.vaa11.hbsmplpglp+hbsmplv.vaa11.hbsmplpgrp;
hbsmplv.vaa11.hbsmplhp=hbsmplv.vaa11.hbsmplohp+hbsmplv.vaa11.hbsmplpgbp+hbsmplv.vaa11.hbsmplpgtp;
return {hbw:hbsmplv.vaa11.hbsmplw,hbh:hbsmplv.vaa11.hbsmplh,
hbwp:hbsmplv.vaa11.hbsmplwp,hbhp:hbsmplv.vaa11.hbsmplhp};
// wh+padding
}
if(hbsmplv.vaa11.hbsmplwhmd=="otmn"){
hbsmplv.vaa11.hbsmplw=hbsmplv.vaa11.hbsmplow+hbsmplv.vaa11.hbsmplbdl+hbsmplv.vaa11.hbsmplbdr;
hbsmplv.vaa11.hbsmplh=hbsmplv.vaa11.hbsmploh+hbsmplv.vaa11.hbsmplbdb+hbsmplv.vaa11.hbsmplbdt;
hbsmplv.vaa11.hbsmplwp=hbsmplv.vaa11.hbsmplowp+hbsmplv.vaa11.hbsmplbdlp+hbsmplv.vaa11.hbsmplbdrp;
hbsmplv.vaa11.hbsmplhp=hbsmplv.vaa11.hbsmplohp+hbsmplv.vaa11.hbsmplbdbp+hbsmplv.vaa11.hbsmplbdtp;
return {hbw:hbsmplv.vaa11.hbsmplw,hbh:hbsmplv.vaa11.hbsmplh,
hbwp:hbsmplv.vaa11.hbsmplwp,hbhp:hbsmplv.vaa11.hbsmplhp};
// wh+border
}
if(hbsmplv.vaa11.hbsmplwhmd=="ot"){
hbsmplv.vaa11.hbsmplw=hbsmplv.vaa11.hbsmplow+hbsmplv.vaa11.hbsmplbdl+hbsmplv.vaa11.hbsmplbdr+hbsmplv.vaa11.hbsmplpgl+hbsmplv.vaa11.hbsmplpgr;
hbsmplv.vaa11.hbsmplh=hbsmplv.vaa11.hbsmploh+hbsmplv.vaa11.hbsmplbdb+hbsmplv.vaa11.hbsmplbdt+hbsmplv.vaa11.hbsmplpgb+hbsmplv.vaa11.hbsmplpgt;
hbsmplv.vaa11.hbsmplwp=hbsmplv.vaa11.hbsmplowp+hbsmplv.vaa11.hbsmplbdlp+hbsmplv.vaa11.hbsmplbdrp+hbsmplv.vaa11.hbsmplpglp+hbsmplv.vaa11.hbsmplpgrp;
hbsmplv.vaa11.hbsmplhp=hbsmplv.vaa11.hbsmplohp+hbsmplv.vaa11.hbsmplbdbp+hbsmplv.vaa11.hbsmplbdtp+hbsmplv.vaa11.hbsmplpgbp+hbsmplv.vaa11.hbsmplpgtp;
return {hbw:hbsmplv.vaa11.hbsmplw,hbh:hbsmplv.vaa11.hbsmplh,
hbwp:hbsmplv.vaa11.hbsmplwp,hbhp:hbsmplv.vaa11.hbsmplhp};
// wh+padding+border
}
if(hbsmplv.vaa11.hbsmplwhmd=="ac"){
hbsmplv.vaa11.hbsmplwh=hbsmplv.vaa11.hbsmple.getBoundingClientRect();
hbsmplv.vaa11.hbsmplw=hbsmplv.vaa11.hbsmplwh.width;
hbsmplv.vaa11.hbsmplh=hbsmplv.vaa11.hbsmplwh.height;
hbsmplv.vaa11.hbsmplpn=hbsmplv.vaa11.hbsmpl.hbsmplpn;
hbsmplv.vaa11.hbsmplp=hbsmpls[hbsmplv.vaa11.hbsmplpn];
hbsmplv.vaa11.hbsmplpe=hbsmplv.vaa11.hbsmplp.hbsmple;
hbsmplv.vaa11.hbsmplpwh=hbsmplv.vaa11.hbsmplpe.getBoundingClientRect();
hbsmplv.vaa11.hbsmplpw=hbsmplv.vaa11.hbsmplpwh.width;
hbsmplv.vaa11.hbsmplph=hbsmplv.vaa11.hbsmplpwh.height;
hbsmplv.vaa11.hbsmplwp=(hbsmplv.vaa11.hbsmplw/hbsmplv.vaa11.hbsmplpw)*100;
hbsmplv.vaa11.hbsmplhp=(hbsmplv.vaa11.hbsmplh/hbsmplv.vaa11.hbsmplph)*100;
return {hbw:hbsmplv.vaa11.hbsmplw,hbh:hbsmplv.vaa11.hbsmplh,
hbwp:hbsmplv.vaa11.hbsmplwp,hbhp:hbsmplv.vaa11.hbsmplhp,
hbpw:hbsmplv.vaa11.hbsmplpw,hbph:hbsmplv.vaa11.hbsmplph};
}
if(hbsmplv.vaa11.hbsmplwhmd=="otmx"){
hbsmplv.vaa11.hbsmplw=hbsmplv.vaa11.hbsmplow+hbsmplv.vaa11.hbsmplbdl+hbsmplv.vaa11.hbsmplbdr+hbsmplv.vaa11.hbsmplpgl+hbsmplv.vaa11.hbsmplpgr+hbsmplv.vaa11.hbsmplmgl+hbsmplv.vaa11.hbsmplmgr;
hbsmplv.vaa11.hbsmplh=hbsmplv.vaa11.hbsmploh+hbsmplv.vaa11.hbsmplbdb+hbsmplv.vaa11.hbsmplbdt+hbsmplv.vaa11.hbsmplpgb+hbsmplv.vaa11.hbsmplpgt+hbsmplv.vaa11.hbsmplmgb+hbsmplv.vaa11.hbsmplmgt;
hbsmplv.vaa11.hbsmplwp=hbsmplv.vaa11.hbsmplowp+hbsmplv.vaa11.hbsmplbdlp+hbsmplv.vaa11.hbsmplbdrp+hbsmplv.vaa11.hbsmplpglp+hbsmplv.vaa11.hbsmplpgrp+hbsmplv.vaa11.hbsmplmglp+hbsmplv.vaa11.hbsmplmgrp;
hbsmplv.vaa11.hbsmplhp=hbsmplv.vaa11.hbsmplohp+hbsmplv.vaa11.hbsmplbdbp+hbsmplv.vaa11.hbsmplbdtp+hbsmplv.vaa11.hbsmplpgbp+hbsmplv.vaa11.hbsmplpgtp+hbsmplv.vaa11.hbsmplmgbp+hbsmplv.vaa11.hbsmplmgtp;
return {hbw:hbsmplv.vaa11.hbsmplw,hbh:hbsmplv.vaa11.hbsmplh,
hbwp:hbsmplv.vaa11.hbsmplwp,hbhp:hbsmplv.vaa11.hbsmplhp};
// wh+padding+border+margin
}

};
hbsmplal=function(hbsmplpak0,hbsmplpak1,hbsmplpak2,hbsmplpak3){

hbsmplv.vaa10={};
hbsmplv.vaa10.hbasmpln=hbsmplpak0;
hbsmplv.vaa10.hbhsmpln=hbsmplpak1;
hbsmplv.vaa10.hbasmpl=hbsmpls[hbsmplv.vaa10.hbasmpln];
hbsmplv.vaa10.hbhsmpl=hbsmpls[hbsmplv.vaa10.hbhsmpln];
if(typeof hbsmplpak3=="undefined"){hbsmplpak3="ot";};
hbsmplv.vaa10.hbalmd=hbsmplpak2;
hbsmplv.vaa10.hbxymd=hbsmplpak3;
hbsmplv.vaa10.hbasmplwh=hbsmplwh(hbsmplv.vaa10.hbasmpln,hbsmpld.hbsmplalawhmd);
hbsmplv.vaa10.hbhsmplwh=hbsmplwh(hbsmplv.vaa10.hbhsmpln,hbsmpld.hbsmplalhwhmd);
// console.log(hbsmplv.vaa10.hbasmplwh,hbsmplv.vaa10.hbhsmplwh);
hbsmplv.vaa10.hbasmplw=hbsmplv.vaa10.hbasmplwh.hbw;
hbsmplv.vaa10.hbhsmplw=hbsmplv.vaa10.hbhsmplwh.hbw;
hbsmplv.vaa10.hbasmplh=hbsmplv.vaa10.hbasmplwh.hbh;
hbsmplv.vaa10.hbhsmplh=hbsmplv.vaa10.hbhsmplwh.hbh;

hbsmplv.vaa10.hbasmplhw=hbsmplv.vaa10.hbasmplw/2;
hbsmplv.vaa10.hbhsmplhw=hbsmplv.vaa10.hbhsmplw/2;
hbsmplv.vaa10.hbasmplhh=hbsmplv.vaa10.hbasmplh/2;
hbsmplv.vaa10.hbhsmplhh=hbsmplv.vaa10.hbhsmplh/2;

hbsmplv.vaa10.hbasmplx=null;
hbsmplv.vaa10.hbasmply=null;

if(hbsmplv.vaa10.hbxymd=="ot"){
hbsmplv.vaa10.hbhsmplxy=hbsmplxy(hbsmplv.vaa10.hbhsmpln,hbsmpld.hbsmplalhxymd);
hbsmplv.vaa10.hbhsmplx=hbsmplv.vaa10.hbhsmplxy.hbx;
hbsmplv.vaa10.hbhsmply=hbsmplv.vaa10.hbhsmplxy.hby;
}
if(hbsmplv.vaa10.hbxymd=="in"){
hbsmplv.vaa10.hbhsmplx=0;
hbsmplv.vaa10.hbhsmply=0;
}
if(hbsmplv.vaa10.hbalmd=="tp"){
hbsmplv.vaa10.hbasmply=hbsmplv.vaa10.hbhsmply;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hby:hbsmplv.vaa10.hbasmply});
}
if(hbsmplv.vaa10.hbalmd=="tplt"){
hbsmplv.vaa10.hbasmplx=hbsmplv.vaa10.hbhsmplx;
hbsmplv.vaa10.hbasmply=hbsmplv.vaa10.hbhsmply;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hbx:hbsmplv.vaa10.hbasmplx,hby:hbsmplv.vaa10.hbasmply});
}
if(hbsmplv.vaa10.hbalmd=="tprt"){
hbsmplv.vaa10.hbasmplx=(hbsmplv.vaa10.hbhsmplw-hbsmplv.vaa10.hbasmplw)+hbsmplv.vaa10.hbhsmplx;
hbsmplv.vaa10.hbasmply=hbsmplv.vaa10.hbhsmply;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hbx:hbsmplv.vaa10.hbasmplx,hby:hbsmplv.vaa10.hbasmply});
}
if(hbsmplv.vaa10.hbalmd=="bmlt"){
hbsmplv.vaa10.hbasmplx=hbsmplv.vaa10.hbhsmplx;
hbsmplv.vaa10.hbasmply=(hbsmplv.vaa10.hbhsmplh-hbsmplv.vaa10.hbasmplh)+hbsmplv.vaa10.hbhsmply;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hbx:hbsmplv.vaa10.hbasmplx,hby:hbsmplv.vaa10.hbasmply});
}
if(hbsmplv.vaa10.hbalmd=="bmrt"){
hbsmplv.vaa10.hbasmplx=(hbsmplv.vaa10.hbhsmplw-hbsmplv.vaa10.hbasmplw)+hbsmplv.vaa10.hbhsmplx;
hbsmplv.vaa10.hbasmply=(hbsmplv.vaa10.hbhsmplh-hbsmplv.vaa10.hbasmplh)+hbsmplv.vaa10.hbhsmply;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hbx:hbsmplv.vaa10.hbasmplx,hby:hbsmplv.vaa10.hbasmply});
}
if(hbsmplv.vaa10.hbalmd=="ctp"){
hbsmplv.vaa10.hbasmply=hbsmplv.vaa10.hbhsmply;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hby:hbsmplv.vaa10.hbasmply});
hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"x",hbsmplv.vaa10.hbxymd);
}
if(hbsmplv.vaa10.hbalmd=="lt"){
hbsmplv.vaa10.hbasmplx=hbsmplv.vaa10.hbhsmplx;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hbx:hbsmplv.vaa10.hbasmplx});
}
if(hbsmplv.vaa10.hbalmd=="clt"){
hbsmplv.vaa10.hbasmplx=hbsmplv.vaa10.hbhsmplx;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hbx:hbsmplv.vaa10.hbasmplx});
hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"y",hbsmplv.vaa10.hbxymd);
}
if(hbsmplv.vaa10.hbalmd=="bm"){
hbsmplv.vaa10.hbasmply=(hbsmplv.vaa10.hbhsmplh-hbsmplv.vaa10.hbasmplh)+hbsmplv.vaa10.hbhsmply;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hby:hbsmplv.vaa10.hbasmply});
}
if(hbsmplv.vaa10.hbalmd=="cbm"){
hbsmplv.vaa10.hbasmply=(hbsmplv.vaa10.hbhsmplh-hbsmplv.vaa10.hbasmplh)+hbsmplv.vaa10.hbhsmply;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hby:hbsmplv.vaa10.hbasmply});
hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"x",hbsmplv.vaa10.hbxymd);
}
if(hbsmplv.vaa10.hbalmd=="rt"){
hbsmplv.vaa10.hbasmplx=(hbsmplv.vaa10.hbhsmplw-hbsmplv.vaa10.hbasmplw)+hbsmplv.vaa10.hbhsmplx;
hbsmplr(hbsmplv.vaa10.hbasmpln,{hbx:hbsmplv.vaa10.hbasmplx});
}
if(hbsmplv.vaa10.hbalmd=="crt"){
hbsmplv.vaa10.hbasmplx=(hbsmplv.vaa10.hbhsmplw-hbsmplv.vaa10.hbasmplw)+hbsmplv.vaa10.hbhsmplx;
// console.log(hbsmplv.vaa10.hbhsmplx);
hbsmplr(hbsmplv.vaa10.hbasmpln,{hbx:hbsmplv.vaa10.hbasmplx});
hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"y",hbsmplv.vaa10.hbxymd);
}
if(hbsmplv.vaa10.hbalmd=="cxy"){
hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"x",hbsmplv.vaa10.hbxymd);
hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"y",hbsmplv.vaa10.hbxymd);
}
if(hbsmplv.vaa10.hbalmd=="cx"){
hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"x",hbsmplv.vaa10.hbxymd);
// hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"y",hbsmplv.vaa10.hbxymd);
}
if(hbsmplv.vaa10.hbalmd=="cy"){
// hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"x",hbsmplv.vaa10.hbxymd);
hbsmplcr(hbsmplv.vaa10.hbasmpln,hbsmplv.vaa10.hbhsmpln,"y",hbsmplv.vaa10.hbxymd);
}

};
hbsmplrl=function(hbsmplpai0,hbsmplpai1){

hbsmplv.vaa8={};
hbsmplv.vaa8.hbsmpln=hbsmplpai0;
hbsmplv.vaa8.hbsmpl=hbsmpls[hbsmplv.vaa8.hbsmpln];
hbsmplv.vaa8.hbsmplrl=hbsmplpai1;
if(typeof hbsmplv.vaa8.hbsmplrl.hbx!="undefined"){
hbsmplv.vaa8.hbsmplrlx=hbsmplv.vaa8.hbsmplrl.hbx;
hbsmplv.vaa8.hbsmplx=hbsmplv.vaa8.hbsmpl.hbsmplx;
hbsmplv.vaa8.hbsmplnx=hbsmplv.vaa8.hbsmplx+hbsmplv.vaa8.hbsmplrlx;
hbsmplr(hbsmplv.vaa8.hbsmpln,{hbx:hbsmplv.vaa8.hbsmplnx});
}
if(typeof hbsmplv.vaa8.hbsmplrl.hby!="undefined"){
hbsmplv.vaa8.hbsmplrly=hbsmplv.vaa8.hbsmplrl.hby;
hbsmplv.vaa8.hbsmply=hbsmplv.vaa8.hbsmpl.hbsmply;
hbsmplv.vaa8.hbsmplny=hbsmplv.vaa8.hbsmply+hbsmplv.vaa8.hbsmplrly;
hbsmplr(hbsmplv.vaa8.hbsmpln,{hby:hbsmplv.vaa8.hbsmplny});
}

};
hbsmplsr=function(hbsmplpag0,hbsmplpag1,hbsmplpag2,hbsmplpag3){

hbsmplv.vaa6={};
hbsmplv.vaa6.hbsmplsrn=hbsmplpag0;
if(typeof hbsmplpag3=="undefined"){hbsmplpag3="xy";};
hbsmplv.vaa6.hbsmplsraxs=hbsmplpag3;
hbsmplv.vaa6.hbosmpln=hbsmplpag1;
hbsmplv.vaa6.hbrsmpln=hbsmplpag2;
hbsmplv.vaa6.hbosmpl=hbsmpls[hbsmplv.vaa6.hbosmpln];
hbsmplv.vaa6.hbrsmpl=hbsmpls[hbsmplv.vaa6.hbrsmpln];
if(hbsmplv.vaa6.hbsmplsraxs=="xy"){
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn]={};
hbsmplv.vaa6.hbosmplxy=hbsmplxy(hbsmplv.vaa6.hbosmpln,"ot");
hbsmplv.vaa6.hbrsmplxy=hbsmplxy(hbsmplv.vaa6.hbrsmpln,"ot");
hbsmplv.vaa6.hbosmplx=hbsmplv.vaa6.hbosmplxy.hbx;
hbsmplv.vaa6.hbrsmplx=hbsmplv.vaa6.hbrsmplxy.hbx;
hbsmplv.vaa6.hbosmply=hbsmplv.vaa6.hbosmplxy.hby;
hbsmplv.vaa6.hbrsmply=hbsmplv.vaa6.hbrsmplxy.hby;
hbsmplv.vaa6.hbrxbl=true;
hbsmplv.vaa6.hbrybl=true;
hbsmplv.vaa6.hbosmplrx=hbsmplv.vaa6.hbosmplx-hbsmplv.vaa6.hbrsmplx;
hbsmplv.vaa6.hbrsmplrx=hbsmplv.vaa6.hbrsmplx-hbsmplv.vaa6.hbosmplx;
hbsmplv.vaa6.hbosmplry=hbsmplv.vaa6.hbosmply-hbsmplv.vaa6.hbrsmply;
hbsmplv.vaa6.hbrsmplry=hbsmplv.vaa6.hbrsmply-hbsmplv.vaa6.hbosmply;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbosmpln=hbsmplv.vaa6.hbosmpln;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbrsmpln=hbsmplv.vaa6.hbrsmpln;
// hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbosmplx=hbsmplv.vaa6.hbosmplx;
// hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbrsmplx=hbsmplv.vaa6.hbrsmplx;
// hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbosmply=hbsmplv.vaa6.hbosmply;
// hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbrsmply=hbsmplv.vaa6.hbrsmply;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbosmplrx=hbsmplv.vaa6.hbosmplrx;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbrsmplrx=hbsmplv.vaa6.hbrsmplrx;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbosmplry=hbsmplv.vaa6.hbosmplry;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbrsmplry=hbsmplv.vaa6.hbrsmplry;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbrxbl=hbsmplv.vaa6.hbrxbl;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbrybl=hbsmplv.vaa6.hbrybl;
hbsmpld.hbslrls[hbsmplv.vaa6.hbsmplsrn].hbraxs=hbsmplv.vaa6.hbsmplsraxs;

}

};
hbsmpler=function(hbsmplpah0,hbsmplpah1){

hbsmplv.vaa7={};
hbsmplv.vaa7.hbsmplern=hbsmplpah0;
hbsmplv.vaa7.hbsmplerm=hbsmplpah1;
hbsmplv.vaa7.hbsmpler=hbsmpld.hbslrls[hbsmplv.vaa7.hbsmplern];
hbsmplv.vaa7.hbsmplerxbl=hbsmplv.vaa7.hbsmpler.hbrxbl;
hbsmplv.vaa7.hbsmplerybl=hbsmplv.vaa7.hbsmpler.hbrybl;
hbsmplv.vaa7.hbosmpln=hbsmplv.vaa7.hbsmpler.hbosmpln;
hbsmplv.vaa7.hbrsmpln=hbsmplv.vaa7.hbsmpler.hbrsmpln;
hbsmplv.vaa7.hbosmpl=hbsmpls[hbsmplv.vaa7.hbosmpln];
hbsmplv.vaa7.hbrsmpl=hbsmpls[hbsmplv.vaa7.hbrsmpln];
hbsmplv.vaa7.hbsmplxoybl=false;
hbsmplv.vaa7.hbosmplxy=hbsmplxy(hbsmplv.vaa7.hbosmpln,"ot");
hbsmplv.vaa7.hbrsmplxy=hbsmplxy(hbsmplv.vaa7.hbrsmpln,"ot");
hbsmplv.vaa7.hbosmplx=hbsmplv.vaa7.hbosmplxy.hbx;
hbsmplv.vaa7.hbrsmplx=hbsmplv.vaa7.hbrsmplxy.hbx;
hbsmplv.vaa7.hbosmply=hbsmplv.vaa7.hbosmplxy.hby;
hbsmplv.vaa7.hbrsmply=hbsmplv.vaa7.hbrsmplxy.hby;
if(hbsmplv.vaa7.hbsmplerxbl==true&&hbsmplv.vaa7.hbsmplerybl==false){
// hbsmplv.vaa7.hbosmplx=hbsmplv.vaa7.hbosmpl.hbsmplx;
// hbsmplv.vaa7.hbrsmplx=hbsmplv.vaa7.hbrsmpl.hbsmplx;
hbsmplv.vaa7.hbosmplrx=hbsmplv.vaa7.hbsmpler.hbosmplrx;
hbsmplv.vaa7.hbrsmplrx=hbsmplv.vaa7.hbsmpler.hbrsmplrx;
if(hbsmplv.vaa7.hbsmplerm=="exec-r"){
hbsmplv.vaa7.hbsmplerx=hbsmplv.vaa7.hbosmplx+hbsmplv.vaa7.hbrsmplrx;
hbsmplr(hbsmplv.vaa7.hbrsmpln,{hbx:hbsmplv.vaa7.hbsmplerx});
}
if(hbsmplv.vaa7.hbsmplerm=="exec-o"){
hbsmplv.vaa7.hbsmplerx=hbsmplv.vaa7.hbrsmplx+hbsmplv.vaa7.hbosmplrx;
hbsmplr(hbsmplv.vaa7.hbosmpln,{hbx:hbsmplv.vaa7.hbsmplerx});
}
}
if(hbsmplv.vaa7.hbsmplerybl==true&&hbsmplv.vaa7.hbsmplerxbl==false){
// hbsmplv.vaa7.hbosmply=hbsmplv.vaa7.hbosmpl.hbsmply;
// hbsmplv.vaa7.hbrsmply=hbsmplv.vaa7.hbrsmpl.hbsmply;
hbsmplv.vaa7.hbosmplry=hbsmplv.vaa7.hbsmpler.hbosmplry;
hbsmplv.vaa7.hbrsmplry=hbsmplv.vaa7.hbsmpler.hbrsmplry;
if(hbsmplv.vaa7.hbsmplerm=="exec-r"){
hbsmplv.vaa7.hbsmplery=hbsmplv.vaa7.hbosmply+hbsmplv.vaa7.hbrsmplry;
hbsmplr(hbsmplv.vaa7.hbrsmpln,{hby:hbsmplv.vaa7.hbsmplery});
}
if(hbsmplv.vaa7.hbsmplerm=="exec-o"){
hbsmplv.vaa7.hbsmplery=hbsmplv.vaa7.hbrsmply+hbsmplv.vaa7.hbosmplry;
hbsmplr(hbsmplv.vaa7.hbosmpln,{hbx:hbsmplv.vaa7.hbsmplery});
}
}
if(hbsmplv.vaa7.hbsmplerxbl==true&&hbsmplv.vaa7.hbsmplerybl==true){
// hbsmplv.vaa7.hbosmplx=hbsmplv.vaa7.hbosmpl.hbsmplx;
// hbsmplv.vaa7.hbrsmplx=hbsmplv.vaa7.hbrsmpl.hbsmplx;
hbsmplv.vaa7.hbosmplrx=hbsmplv.vaa7.hbsmpler.hbosmplrx;
hbsmplv.vaa7.hbrsmplrx=hbsmplv.vaa7.hbsmpler.hbrsmplrx;
// hbsmplv.vaa7.hbosmply=hbsmplv.vaa7.hbosmpl.hbsmply;
// hbsmplv.vaa7.hbrsmply=hbsmplv.vaa7.hbrsmpl.hbsmply;
hbsmplv.vaa7.hbosmplry=hbsmplv.vaa7.hbsmpler.hbosmplry;
hbsmplv.vaa7.hbrsmplry=hbsmplv.vaa7.hbsmpler.hbrsmplry;
if(hbsmplv.vaa7.hbsmplerm=="exec-r"){
hbsmplv.vaa7.hbsmplerx=hbsmplv.vaa7.hbosmplx+hbsmplv.vaa7.hbrsmplrx;
hbsmplv.vaa7.hbsmplery=hbsmplv.vaa7.hbosmply+hbsmplv.vaa7.hbrsmplry;
// console.log(hbsmplv.vaa7.hbrsmpln);
hbsmplr(hbsmplv.vaa7.hbrsmpln,{hbx:hbsmplv.vaa7.hbsmplerx,hby:hbsmplv.vaa7.hbsmplery});
}
if(hbsmplv.vaa7.hbsmplerm=="exec-o"){
hbsmplv.vaa7.hbsmplerx=hbsmplv.vaa7.hbrsmplx+hbsmplv.vaa7.hbosmplrx;
hbsmplv.vaa7.hbsmplery=hbsmplv.vaa7.hbrsmply+hbsmplv.vaa7.hbosmplry;
hbsmplr(hbsmplv.vaa7.hbosmpln,{hbx:hbsmplv.vaa7.hbsmplerx,hby:hbsmplv.vaa7.hbsmplery});
}
}


};
hbsmpldg=function(hbsmplpad0,hbsmplpad1,hbsmplpad2,hbsmplpad3,...hbsmplpad4){

hbsmplv.vaa3={};
hbsmplv.vaa3.hbsmpln=hbsmplpad0;
hbsmplv.vaa3.hbsmpl=hbsmpls[hbsmplv.vaa3.hbsmpln];
hbsmplv.vaa3.hbdgbl=hbsmplpad1;
hbsmplv.vaa3.hbdgaxs=null;
hbsmplv.vaa3.hbdgaxsbl=false;
hbsmplv.vaa3.hbsmpldgxl=null;
hbsmplv.vaa3.hbsmpldgyl=null;
hbsmplv.vaa3.hbsmplwh=hbsmplwh(hbsmplv.vaa3.hbsmpln,"ot");
hbsmplv.vaa3.hbsmplw=hbsmplv.vaa3.hbsmplwh.hbw;
hbsmplv.vaa3.hbsmplh=hbsmplv.vaa3.hbsmplwh.hbh;
if(hbsmplv.vaa3.hbdgbl==false){
hbsmpld.hbsmpldgbl=false;
hbsmpld.hbslmelfbl=false;
hbsmpld.hbslmelfpsbl=false;
}
if(hbsmplv.vaa3.hbdgbl==true){
if(typeof hbsmplpad2=="undefined"){
hbsmplpad2="xy";
}
if(typeof hbsmplpad2=="string"){
hbsmplv.vaa3.hbdgaxs=hbsmplpad2;
}
if(hbsmpld.hbsmpldgbl==false){
hbsmpld.hbsmpldgbl=true;
hbsmpld.hbsmpldgn=hbsmplv.vaa3.hbsmpln;
hbsmpld.hbslmelf=hbsmpldg;
hbsmpld.hbslmelfps=arguments;
hbsmpld.hbslmelfbl=true;
hbsmpld.hbslmelfpsbl=true;
}
if(hbsmpld.hbsmpldgbl==true){
if(hbsmplv.vaa3.hbdgaxs=="x"){
hbsmplv.vaa3.hbsmpldgxl=hbsmpld.hbslmx-(hbsmplv.vaa3.hbsmplw/2);
hbsmplr(hbsmplv.vaa3.hbsmpln,{hbx:hbsmplv.vaa3.hbsmpldgxl});
}
if(hbsmplv.vaa3.hbdgaxs=="y"){
hbsmplv.vaa3.hbsmpldgyl=hbsmpld.hbslmy-(hbsmplv.vaa3.hbsmplh/2);
hbsmplr(hbsmplv.vaa3.hbsmpln,{hby:hbsmplv.vaa3.hbsmpldgyl});
}
if(hbsmplv.vaa3.hbdgaxs=="xy"){
hbsmplv.vaa3.hbsmpldgxl=hbsmpld.hbslmx-(hbsmplv.vaa3.hbsmplw/2);
hbsmplv.vaa3.hbsmpldgyl=hbsmpld.hbslmy-(hbsmplv.vaa3.hbsmplh/2);
hbsmplr(hbsmplv.vaa3.hbsmpln,{hbx:hbsmplv.vaa3.hbsmpldgxl,hby:hbsmplv.vaa3.hbsmpldgyl});
}
if(typeof hbsmplpad3=="function"){
if(typeof hbsmplpad4!="undefined"){
hbsmplpad3(...hbsmplpad4);
}
if(typeof hbsmplpad4=="undefined"){
hbsmplpad3();
}
}

}

}

};
hbsmplr=function(hbsmplpab0,hbsmplpab1){

hbsmplv.vaa1={};
hbsmplv.vaa1.hbsmpln=hbsmplpab0;
hbsmplv.vaa1.hbsmpl=hbsmpls[hbsmplv.vaa1.hbsmpln];
hbsmplv.vaa1.hbsmplr=hbsmplpab1;
hbsmplv.vaa1.hbsmple=hbsmplv.vaa1.hbsmpl.hbsmple;
if(typeof hbsmplv.vaa1.hbsmplr["bcolor"]!="undefined"){
hbsmplv.vaa1.hbsmplr["backgroundColor"]=hbsmplv.vaa1.hbsmplr["bcolor"];
delete hbsmplv.vaa1.hbsmplr["bcolor"];
}
if(typeof hbsmplv.vaa1.hbsmplr["hbin"]!="undefined"){
hbsmplv.vaa1.hbsmple.innerHTML=hbsmplv.vaa1.hbsmplr["hbin"];
delete hbsmplv.vaa1.hbsmplr["hbin"];
}
if(typeof hbsmplv.vaa1.hbsmplr["hbbc"]!="undefined"){
hbsmplv.vaa1.hbsmplr["backgroundColor"]=hbsmplv.vaa1.hbsmplr["hbbc"];
delete hbsmplv.vaa1.hbsmplr["hbbc"];
}
if(typeof hbsmplv.vaa1.hbsmplr["hbbdrd"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderRadius"]=`${hbsmplv.vaa1.hbsmplr["hbbdrd"]}px`;
delete hbsmplv.vaa1.hbsmplr["hbbdrd"];
}
if(typeof hbsmplv.vaa1.hbsmplr["hbbdrdp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderRadius"]=`${hbsmplv.vaa1.hbsmplr["hbbdrdp"]}%`;
delete hbsmplv.vaa1.hbsmplr["hbbdrdp"];
}
if(typeof hbsmplv.vaa1.hbsmplr["hbx"]!="undefined"){
hbsmplv.vaa1.hbsmplr["left"]=`${hbsmplv.vaa1.hbsmplr["hbx"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplx=hbsmplv.vaa1.hbsmplr["hbx"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplxp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplx/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)*100;
delete hbsmplv.vaa1.hbsmplr["hbx"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hby"]!="undefined"){
hbsmplv.vaa1.hbsmplr["top"]=`${hbsmplv.vaa1.hbsmplr["hby"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmply=hbsmplv.vaa1.hbsmplr["hby"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplyp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmply/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)*100;
delete hbsmplv.vaa1.hbsmplr["hby"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbw"]!="undefined"){
hbsmplv.vaa1.hbsmplr["width"]=`${hbsmplv.vaa1.hbsmplr["hbw"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplw=hbsmplv.vaa1.hbsmplr["hbw"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplwp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplw/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)*100;
delete hbsmplv.vaa1.hbsmplr["hbw"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbh"]!="undefined"){
hbsmplv.vaa1.hbsmplr["height"]=`${hbsmplv.vaa1.hbsmplr["hbh"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplh=hbsmplv.vaa1.hbsmplr["hbh"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplhp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplh/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)*100;
delete hbsmplv.vaa1.hbsmplr["hbh"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbwp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["width"]=`${hbsmplv.vaa1.hbsmplr["hbwp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplwp=hbsmplv.vaa1.hbsmplr["hbwp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbw;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplw=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplwp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)/100;
delete hbsmplv.vaa1.hbsmplr["hbwp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbhp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["height"]=`${hbsmplv.vaa1.hbsmplr["hbhp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplhp=hbsmplv.vaa1.hbsmplr["hbhp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbh;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplh=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplhp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)/100;
delete hbsmplv.vaa1.hbsmplr["hbhp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbxp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["left"]=`${hbsmplv.vaa1.hbsmplr["hbxp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplxp=hbsmplv.vaa1.hbsmplr["hbxp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbw;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplx=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplxp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)/100;
delete hbsmplv.vaa1.hbsmplr["hbxp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbyp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["top"]=`${hbsmplv.vaa1.hbsmplr["hbyp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplyp=hbsmplv.vaa1.hbsmplr["hbyp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbh;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmply=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplyp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)/100;
delete hbsmplv.vaa1.hbsmplr["hbyp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
// if(typeof hbsmplv.vaa1.hbsmplr["hby"]!="undefined"){
// hbsmplv.vaa1.hbsmplr["top"]=`${hbsmplv.vaa1.hbsmplr["hby"]}px`;
// delete hbsmplv.vaa1.hbsmplr["hby"];
// };
if(typeof hbsmplv.vaa1.hbsmplr["hbpg"]!="undefined"){
hbsmplv.vaa1.hbsmplr["hbpgt"]=hbsmplv.vaa1.hbsmplr["hbpg"];
hbsmplv.vaa1.hbsmplr["hbpgb"]=hbsmplv.vaa1.hbsmplr["hbpg"];
hbsmplv.vaa1.hbsmplr["hbpgl"]=hbsmplv.vaa1.hbsmplr["hbpg"];
hbsmplv.vaa1.hbsmplr["hbpgr"]=hbsmplv.vaa1.hbsmplr["hbpg"];
delete hbsmplv.vaa1.hbsmplr["hbpg"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmg"]!="undefined"){
hbsmplv.vaa1.hbsmplr["hbmgt"]=hbsmplv.vaa1.hbsmplr["hbmg"];
hbsmplv.vaa1.hbsmplr["hbmgb"]=hbsmplv.vaa1.hbsmplr["hbmg"];
hbsmplv.vaa1.hbsmplr["hbmgl"]=hbsmplv.vaa1.hbsmplr["hbmg"];
hbsmplv.vaa1.hbsmplr["hbmgr"]=hbsmplv.vaa1.hbsmplr["hbmg"];
delete hbsmplv.vaa1.hbsmplr["hbmg"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbd"]!="undefined"){
hbsmplv.vaa1.hbsmplr["hbbdt"]=hbsmplv.vaa1.hbsmplr["hbbd"];
hbsmplv.vaa1.hbsmplr["hbbdb"]=hbsmplv.vaa1.hbsmplr["hbbd"];
hbsmplv.vaa1.hbsmplr["hbbdl"]=hbsmplv.vaa1.hbsmplr["hbbd"];
hbsmplv.vaa1.hbsmplr["hbbdr"]=hbsmplv.vaa1.hbsmplr["hbbd"];
delete hbsmplv.vaa1.hbsmplr["hbbd"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpgp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["hbpgtp"]=hbsmplv.vaa1.hbsmplr["hbpgp"];
hbsmplv.vaa1.hbsmplr["hbpgbp"]=hbsmplv.vaa1.hbsmplr["hbpgp"];
hbsmplv.vaa1.hbsmplr["hbpglp"]=hbsmplv.vaa1.hbsmplr["hbpgp"];
hbsmplv.vaa1.hbsmplr["hbpgrp"]=hbsmplv.vaa1.hbsmplr["hbpgp"];
delete hbsmplv.vaa1.hbsmplr["hbpgp"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmgp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["hbmgtp"]=hbsmplv.vaa1.hbsmplr["hbmgp"];
hbsmplv.vaa1.hbsmplr["hbmgbp"]=hbsmplv.vaa1.hbsmplr["hbmgp"];
hbsmplv.vaa1.hbsmplr["hbmglp"]=hbsmplv.vaa1.hbsmplr["hbmgp"];
hbsmplv.vaa1.hbsmplr["hbmgrp"]=hbsmplv.vaa1.hbsmplr["hbmgp"];
delete hbsmplv.vaa1.hbsmplr["hbmgp"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["hbbdtp"]=hbsmplv.vaa1.hbsmplr["hbbdp"];
hbsmplv.vaa1.hbsmplr["hbbdbp"]=hbsmplv.vaa1.hbsmplr["hbbdp"];
hbsmplv.vaa1.hbsmplr["hbbdlp"]=hbsmplv.vaa1.hbsmplr["hbbdp"];
hbsmplv.vaa1.hbsmplr["hbbdrp"]=hbsmplv.vaa1.hbsmplr["hbbdp"];
delete hbsmplv.vaa1.hbsmplr["hbbdp"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpgt"]!="undefined"){
hbsmplv.vaa1.hbsmplr["paddingTop"]=`${hbsmplv.vaa1.hbsmplr["hbpgt"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgt=hbsmplv.vaa1.hbsmplr["hbpgt"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgtp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgt/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)*100;
delete hbsmplv.vaa1.hbsmplr["hbpgt"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpgtp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["paddingTop"]=`${hbsmplv.vaa1.hbsmplr["hbpgtp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgtp=hbsmplv.vaa1.hbsmplr["hbpgtp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbh;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgt=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgtp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)/100;
delete hbsmplv.vaa1.hbsmplr["hbpgtp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpgl"]!="undefined"){
hbsmplv.vaa1.hbsmplr["paddingLeft"]=`${hbsmplv.vaa1.hbsmplr["hbpgl"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgl=hbsmplv.vaa1.hbsmplr["hbpgl"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpglp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgl/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)*100;
delete hbsmplv.vaa1.hbsmplr["hbpgl"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpglp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["paddingLeft"]=`${hbsmplv.vaa1.hbsmplr["hbpglp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpglp=hbsmplv.vaa1.hbsmplr["hbpglp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbw;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgl=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpglp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)/100;
delete hbsmplv.vaa1.hbsmplr["hbpglp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpgb"]!="undefined"){
hbsmplv.vaa1.hbsmplr["paddingBottom"]=`${hbsmplv.vaa1.hbsmplr["hbpgb"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgb=hbsmplv.vaa1.hbsmplr["hbpgb"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgbp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgb/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)*100;
delete hbsmplv.vaa1.hbsmplr["hbpgb"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpgbp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["paddingBottom"]=`${hbsmplv.vaa1.hbsmplr["hbpgbp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgbp=hbsmplv.vaa1.hbsmplr["hbpgbp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbh;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgb=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgbp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)/100;
delete hbsmplv.vaa1.hbsmplr["hbpgbp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpgr"]!="undefined"){
hbsmplv.vaa1.hbsmplr["paddingRight"]=`${hbsmplv.vaa1.hbsmplr["hbpgr"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgr=hbsmplv.vaa1.hbsmplr["hbpgr"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgrp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgr/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)*100;
delete hbsmplv.vaa1.hbsmplr["hbpgr"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbpgrp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["paddingRight"]=`${hbsmplv.vaa1.hbsmplr["hbpgrp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgrp=hbsmplv.vaa1.hbsmplr["hbpgrp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbw;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgr=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpgrp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)/100;
delete hbsmplv.vaa1.hbsmplr["hbpgrp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
// -------------------------------------
if(typeof hbsmplv.vaa1.hbsmplr["hbmgt"]!="undefined"){
hbsmplv.vaa1.hbsmplr["marginTop"]=`${hbsmplv.vaa1.hbsmplr["hbmgt"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgt=hbsmplv.vaa1.hbsmplr["hbmgt"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgtp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgt/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)*100;
delete hbsmplv.vaa1.hbsmplr["hbmgt"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmgtp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["marginTop"]=`${hbsmplv.vaa1.hbsmplr["hbmgtp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgtp=hbsmplv.vaa1.hbsmplr["hbmgtp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbh;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgt=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgtp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)/100;
delete hbsmplv.vaa1.hbsmplr["hbmgtp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmgl"]!="undefined"){
hbsmplv.vaa1.hbsmplr["marginLeft"]=`${hbsmplv.vaa1.hbsmplr["hbmgl"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgl=hbsmplv.vaa1.hbsmplr["hbmgl"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmglp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgl/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)*100;
delete hbsmplv.vaa1.hbsmplr["hbmgl"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmglp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["marginLeft"]=`${hbsmplv.vaa1.hbsmplr["hbmglp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmglp=hbsmplv.vaa1.hbsmplr["hbmglp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbw;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgl=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmglp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)/100;
delete hbsmplv.vaa1.hbsmplr["hbmglp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmgb"]!="undefined"){
hbsmplv.vaa1.hbsmplr["marginBottom"]=`${hbsmplv.vaa1.hbsmplr["hbmgb"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgb=hbsmplv.vaa1.hbsmplr["hbmgb"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgbp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgb/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)*100;
delete hbsmplv.vaa1.hbsmplr["hbmgb"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmgbp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["marginBottom"]=`${hbsmplv.vaa1.hbsmplr["hbmgbp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgbp=hbsmplv.vaa1.hbsmplr["hbmgbp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbh;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgb=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgbp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)/100;
delete hbsmplv.vaa1.hbsmplr["hbmgbp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmgr"]!="undefined"){
hbsmplv.vaa1.hbsmplr["marginRight"]=`${hbsmplv.vaa1.hbsmplr["hbmgr"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgr=hbsmplv.vaa1.hbsmplr["hbmgr"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgrp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgr/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)*100;
delete hbsmplv.vaa1.hbsmplr["hbmgr"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
if(typeof hbsmplv.vaa1.hbsmplr["hbmgrp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["marginRight"]=`${hbsmplv.vaa1.hbsmplr["hbmgrp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgrp=hbsmplv.vaa1.hbsmplr["hbmgrp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbw;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgr=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplmgrp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)/100;
delete hbsmplv.vaa1.hbsmplr["hbmgrp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
};
// ------------------------
// ))))))))))))))))))))))))
if(typeof hbsmplv.vaa1.hbsmplr["hbbdt"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderTop"]=`${hbsmplv.vaa1.hbsmplr["hbbdt"]}px`;
// console.log(hbsmplv.vaa1.hbsmplr["borderTop"]);
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdt=hbsmplv.vaa1.hbsmplr["hbbdt"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdtp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdt/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)*100;
delete hbsmplv.vaa1.hbsmplr["hbbdt"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
// hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdtp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderTop"]=`${hbsmplv.vaa1.hbsmplr["hbbdtp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdtp=hbsmplv.vaa1.hbsmplr["hbbdtp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbh;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdt=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdtp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)/100;
delete hbsmplv.vaa1.hbsmplr["hbbdtp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
// hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdl"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderLeft"]=`${hbsmplv.vaa1.hbsmplr["hbbdl"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdl=hbsmplv.vaa1.hbsmplr["hbbdl"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdlp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdl/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)*100;
delete hbsmplv.vaa1.hbsmplr["hbbdl"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
// hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdlp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderLeft"]=`${hbsmplv.vaa1.hbsmplr["hbbdlp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdlp=hbsmplv.vaa1.hbsmplr["hbbdlp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbw;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdl=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdlp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)/100;
delete hbsmplv.vaa1.hbsmplr["hbbdlp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
// hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdb"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderBottom"]=`${hbsmplv.vaa1.hbsmplr["hbbdb"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdb=hbsmplv.vaa1.hbsmplr["hbbdb"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdbp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdb/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)*100;
delete hbsmplv.vaa1.hbsmplr["hbbdb"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
// hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdbp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderBottom"]=`${hbsmplv.vaa1.hbsmplr["hbbdbp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdbp=hbsmplv.vaa1.hbsmplr["hbbdbp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbh;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdb=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdbp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplph)/100;
delete hbsmplv.vaa1.hbsmplr["hbbdbp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
// hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdr"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderRight"]=`${hbsmplv.vaa1.hbsmplr["hbbdr"]}px`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdr=hbsmplv.vaa1.hbsmplr["hbbdr"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdrp=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdr/hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)*100;
delete hbsmplv.vaa1.hbsmplr["hbbdr"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
// hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdrp"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderRight"]=`${hbsmplv.vaa1.hbsmplr["hbbdrp"]}%`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdrp=hbsmplv.vaa1.hbsmplr["hbbdrp"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw=hbsmplxywh(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpn).hbw;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdr=(hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdrp*hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpw)/100;
delete hbsmplv.vaa1.hbsmplr["hbbdrp"];
hbsmplraxywh(hbsmplv.vaa1.hbsmpln);
// hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdtc"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderTopColor"]=hbsmplv.vaa1.hbsmplr["hbbdtc"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdtc=hbsmplv.vaa1.hbsmplr["hbbdtc"];
delete hbsmplv.vaa1.hbsmplr["hbbdtc"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdlc"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderLeftColor"]=hbsmplv.vaa1.hbsmplr["hbbdlc"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdlc=hbsmplv.vaa1.hbsmplr["hbbdlc"];
delete hbsmplv.vaa1.hbsmplr["hbbdlc"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdbc"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderBottomColor"]=hbsmplv.vaa1.hbsmplr["hbbdbc"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdbc=hbsmplv.vaa1.hbsmplr["hbbdbc"];
delete hbsmplv.vaa1.hbsmplr["hbbdbc"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdrc"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderRightColor"]=hbsmplv.vaa1.hbsmplr["hbbdrc"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdrc=hbsmplv.vaa1.hbsmplr["hbbdrc"];
delete hbsmplv.vaa1.hbsmplr["hbbdrc"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbdc"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderColor"]=hbsmplv.vaa1.hbsmplr["hbbdc"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbdc=hbsmplv.vaa1.hbsmplr["hbbdc"];
delete hbsmplv.vaa1.hbsmplr["hbbdc"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbbds"]!="undefined"){
hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmplv.vaa1.hbsmplr["hbbds"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds=hbsmplv.vaa1.hbsmplr["hbbds"];
delete hbsmplv.vaa1.hbsmplr["hbbds"];
};
// ))))))))))))))))))))))))
// ------------------------
if(typeof hbsmplv.vaa1.hbsmplr["hbpos"]!="undefined"){
hbsmplv.vaa1.hbsmplr["position"]=hbsmplv.vaa1.hbsmplr["hbpos"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplpos=hbsmplv.vaa1.hbsmplr["hbpos"];
delete hbsmplv.vaa1.hbsmplr["hbpos"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbrttx"]!="undefined"){
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm=``;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrttx=hbsmplv.vaa1.hbsmplr["hbrttx"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateX(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrttx}deg)`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateY(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrtty}deg)`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateZ(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrttz}deg)`;
hbsmplv.vaa1.hbsmplr["hbtm"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm;
// console.log(hbsmplv.vaa1.hbsmplr["hbtm"]);
delete hbsmplv.vaa1.hbsmplr["hbrttx"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbrtty"]!="undefined"){
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm=``;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrtty=hbsmplv.vaa1.hbsmplr["hbrtty"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateX(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrttx}deg)`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateY(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrtty}deg)`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateZ(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrttz}deg)`;
hbsmplv.vaa1.hbsmplr["hbtm"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm;
delete hbsmplv.vaa1.hbsmplr["hbrtty"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbrttz"]!="undefined"){
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm=``;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrttz=hbsmplv.vaa1.hbsmplr["hbrttz"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateX(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrttx}deg)`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateY(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrtty}deg)`;
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm+=`rotateZ(${hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplrttz}deg)`;
hbsmplv.vaa1.hbsmplr["hbtm"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm;
delete hbsmplv.vaa1.hbsmplr["hbrttz"];
};
if(typeof hbsmplv.vaa1.hbsmplr["hbtm"]!="undefined"){
hbsmplv.vaa1.hbsmplr["transform"]=hbsmplv.vaa1.hbsmplr["hbtm"];
hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmpltm=hbsmplv.vaa1.hbsmplr["hbtm"];
// console.log(hbsmplv.vaa1.hbsmplr["transform"]);
delete hbsmplv.vaa1.hbsmplr["hbtm"];
};
hbsmplv.vaa1.hbsmplr["borderStyle"]=hbsmpls[hbsmplv.vaa1.hbsmpln].hbsmplbds;
Object.assign(hbsmplv.vaa1.hbsmple.style,hbsmplv.vaa1.hbsmplr);

};
hbsmplxywh=function(hbsmplpac0){

hbsmplv.vaa2={};
hbsmplv.vaa2.hbsmpln=hbsmplpac0;
hbsmplv.vaa2.hbsmpl=hbsmpls[hbsmplv.vaa2.hbsmpln];
// hbsmplv.vaa2.hbsmple=hbsmplv.vaa2.hbsmpl.hbsmple;
// hbsmplv.vaa2.hbsmplx=hbsmplv.vaa2.hbsmple.getBoundingClientRect().x;
// hbsmplv.vaa2.hbsmply=hbsmplv.vaa2.hbsmple.getBoundingClientRect().y;
// hbsmplv.vaa2.hbsmplw=hbsmplv.vaa2.hbsmple.getBoundingClientRect().width;
// hbsmplv.vaa2.hbsmplh=hbsmplv.vaa2.hbsmple.getBoundingClientRect().height;
hbsmplv.vaa2.hbsmplx=hbsmplv.vaa2.hbsmpl.hbsmplx;
hbsmplv.vaa2.hbsmply=hbsmplv.vaa2.hbsmpl.hbsmply;
hbsmplv.vaa2.hbsmplw=hbsmplv.vaa2.hbsmpl.hbsmplw;
hbsmplv.vaa2.hbsmplh=hbsmplv.vaa2.hbsmpl.hbsmplh;
return {hbx:hbsmplv.vaa2.hbsmplx,hby:hbsmplv.vaa2.hbsmply,
hbw:hbsmplv.vaa2.hbsmplw,hbh:hbsmplv.vaa2.hbsmplh};

};
hbsmplraxywh=function(hbsmplpao0){

hbsmplv.vaa14={};
hbsmplv.vaa14.hbsmpln=hbsmplpao0;
hbsmplv.vaa14.hbsmplawh=hbsmplwh(hbsmplv.vaa14.hbsmpln,"ac");
hbsmplv.vaa14.hbsmplaxy=hbsmplxy(hbsmplv.vaa14.hbsmpln,"ac");
hbsmplv.vaa14.hbsmplaw=hbsmplv.vaa14.hbsmplawh.hbw;
hbsmplv.vaa14.hbsmplah=hbsmplv.vaa14.hbsmplawh.hbh;
hbsmplv.vaa14.hbsmplax=hbsmplv.vaa14.hbsmplaxy.hbx;
hbsmplv.vaa14.hbsmplay=hbsmplv.vaa14.hbsmplaxy.hby;
hbsmplv.vaa14.hbsmplawp=hbsmplv.vaa14.hbsmplawh.hbwp;
hbsmplv.vaa14.hbsmplahp=hbsmplv.vaa14.hbsmplawh.hbhp;
hbsmplv.vaa14.hbsmplaxp=hbsmplv.vaa14.hbsmplaxy.hbxp;
hbsmplv.vaa14.hbsmplayp=hbsmplv.vaa14.hbsmplaxy.hbyp;
hbsmplv.vaa14.hbsmplapw=hbsmplv.vaa14.hbsmplawh.hbpw;
hbsmplv.vaa14.hbsmplaph=hbsmplv.vaa14.hbsmplawh.hbph;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplaw=hbsmplv.vaa14.hbsmplaw;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplah=hbsmplv.vaa14.hbsmplah;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplax=hbsmplv.vaa14.hbsmplax;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplay=hbsmplv.vaa14.hbsmplay;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplawp=hbsmplv.vaa14.hbsmplawp;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplahp=hbsmplv.vaa14.hbsmplahp;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplaxp=hbsmplv.vaa14.hbsmplaxp;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplayp=hbsmplv.vaa14.hbsmplayp;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplapw=hbsmplv.vaa14.hbsmplapw;
hbsmpls[hbsmplv.vaa14.hbsmpln].hbsmplaph=hbsmplv.vaa14.hbsmplaph;

};
hbsmpl=function(hbsmplpaa0,hbsmplpaa1,hbsmplpaa2){

hbsmplv.vaa0={};
hbsmplv.vaa0.hbsmpln=hbsmplpaa0;
hbsmplv.vaa0.hbsmpld=hbsmplpaa1;
hbsmplv.vaa0.hbsmplr=hbsmplpaa2;
hbsmplv.vaa0.hbsrcbl=false;
if(typeof hbsmplv.vaa0.hbsmplr=="undefined"){hbsmplv.vaa0.hbsmplr={};};
if(typeof hbsmplv.vaa0.hbsmpld.hblnbl=="undefined"){hbsmplv.vaa0.hbsmpld.hblnbl=false;};
if(typeof hbsmplv.vaa0.hbsmpld.hbtag=="undefined"){hbsmplv.vaa0.hbsmpld.hbtag="hbsmpl";};
if(typeof hbsmplv.vaa0.hbsmpld.hbw=="undefined"){hbsmplv.vaa0.hbsmpld.hbw=30;};
if(typeof hbsmplv.vaa0.hbsmpld.hbh=="undefined"){hbsmplv.vaa0.hbsmpld.hbh=30;};
if(typeof hbsmplv.vaa0.hbsmpld.hbx=="undefined"){hbsmplv.vaa0.hbsmpld.hbx=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hby=="undefined"){hbsmplv.vaa0.hbsmpld.hby=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbpgt=="undefined"){hbsmplv.vaa0.hbsmpld.hbpgt=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbpgb=="undefined"){hbsmplv.vaa0.hbsmpld.hbpgb=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbpgl=="undefined"){hbsmplv.vaa0.hbsmpld.hbpgl=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbpgr=="undefined"){hbsmplv.vaa0.hbsmpld.hbpgr=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbmgt=="undefined"){hbsmplv.vaa0.hbsmpld.hbmgt=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbmgb=="undefined"){hbsmplv.vaa0.hbsmpld.hbmgb=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbmgl=="undefined"){hbsmplv.vaa0.hbsmpld.hbmgl=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbmgr=="undefined"){hbsmplv.vaa0.hbsmpld.hbmgr=0;};

if(typeof hbsmplv.vaa0.hbsmpld.hbbdt=="undefined"){hbsmplv.vaa0.hbsmpld.hbbdt=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbbdb=="undefined"){hbsmplv.vaa0.hbsmpld.hbbdb=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbbdl=="undefined"){hbsmplv.vaa0.hbsmpld.hbbdl=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbbdr=="undefined"){hbsmplv.vaa0.hbsmpld.hbbdr=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbbdc=="undefined"){hbsmplv.vaa0.hbsmpld.hbbdc="black";};
if(typeof hbsmplv.vaa0.hbsmpld.hbbds=="undefined"){hbsmplv.vaa0.hbsmpld.hbbds="solid";};

if(typeof hbsmplv.vaa0.hbsmpld.hbpos=="undefined"){hbsmplv.vaa0.hbsmpld.hbpos="absolute";};
if(typeof hbsmplv.vaa0.hbsmpld.hbp=="undefined"){hbsmplv.vaa0.hbsmpld.hbp="hbroot"};
if(typeof hbsmplv.vaa0.hbsmpld.hbrttx=="undefined"){hbsmplv.vaa0.hbsmpld.hbrttx=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbrtty=="undefined"){hbsmplv.vaa0.hbsmpld.hbrtty=0;};
if(typeof hbsmplv.vaa0.hbsmpld.hbrttz=="undefined"){hbsmplv.vaa0.hbsmpld.hbrttz=0;};

if(typeof hbsmplv.vaa0.hbsmpld.hbsrc!="undefined"){hbsmplv.vaa0.hbsrcbl=true;};

hbsmplv.vaa0.hbsmplt=hbsmplv.vaa0.hbsmpld.hbtag;
hbsmplv.vaa0.hblnbl=hbsmplv.vaa0.hbsmpld.hblnbl;
hbsmplv.vaa0.hbsmplw=hbsmplv.vaa0.hbsmpld.hbw;
hbsmplv.vaa0.hbsmplh=hbsmplv.vaa0.hbsmpld.hbh;
hbsmplv.vaa0.hbsmplx=hbsmplv.vaa0.hbsmpld.hbx;
hbsmplv.vaa0.hbsmply=hbsmplv.vaa0.hbsmpld.hby;
hbsmplv.vaa0.hbsmplpgt=hbsmplv.vaa0.hbsmpld.hbpgt;
hbsmplv.vaa0.hbsmplpgb=hbsmplv.vaa0.hbsmpld.hbpgb;
hbsmplv.vaa0.hbsmplpgl=hbsmplv.vaa0.hbsmpld.hbpgl;
hbsmplv.vaa0.hbsmplpgr=hbsmplv.vaa0.hbsmpld.hbpgr;
hbsmplv.vaa0.hbsmplmgt=hbsmplv.vaa0.hbsmpld.hbmgt;
hbsmplv.vaa0.hbsmplmgb=hbsmplv.vaa0.hbsmpld.hbmgb;
hbsmplv.vaa0.hbsmplmgl=hbsmplv.vaa0.hbsmpld.hbmgl;
hbsmplv.vaa0.hbsmplmgr=hbsmplv.vaa0.hbsmpld.hbmgr;

hbsmplv.vaa0.hbsmplbdt=hbsmplv.vaa0.hbsmpld.hbbdt;
hbsmplv.vaa0.hbsmplbdb=hbsmplv.vaa0.hbsmpld.hbbdb;
hbsmplv.vaa0.hbsmplbdl=hbsmplv.vaa0.hbsmpld.hbbdl;
hbsmplv.vaa0.hbsmplbdr=hbsmplv.vaa0.hbsmpld.hbbdr;
hbsmplv.vaa0.hbsmplbdc=hbsmplv.vaa0.hbsmpld.hbbdc;
hbsmplv.vaa0.hbsmplbds=hbsmplv.vaa0.hbsmpld.hbbds;

hbsmplv.vaa0.hbsmplpos=hbsmplv.vaa0.hbsmpld.hbpos;
hbsmplv.vaa0.hbsmplpn=hbsmplv.vaa0.hbsmpld.hbp;
hbsmplv.vaa0.hbsmplpd=hbsmpls[hbsmplv.vaa0.hbsmplpn];
hbsmplv.vaa0.hbsmplp=hbsmplv.vaa0.hbsmplpd.hbsmple;
if(hbsmplv.vaa0.hblnbl==false){
hbsmplv.vaa0.hbsmple=document.createElement(hbsmplv.vaa0.hbsmplt);
}
if(hbsmplv.vaa0.hblnbl==true){
hbsmplv.vaa0.hbsmple=document.createElementNS("http://www.w3.org/2000/svg",hbsmplv.vaa0.hbsmplt);
}
hbsmplv.vaa0.hbsmplp.appendChild(hbsmplv.vaa0.hbsmple);
if(hbsmplv.vaa0.hbsrcbl==true){hbsmplv.vaa0.hbsmple.src=hbsmplv.vaa0.hbsmpld.hbsrc;};
hbsmplv.vaa0.hbsmplpwh=hbsmplxywh(hbsmplv.vaa0.hbsmplpn);
hbsmplv.vaa0.hbsmplpw=hbsmplv.vaa0.hbsmplpwh.hbw;
hbsmplv.vaa0.hbsmplph=hbsmplv.vaa0.hbsmplpwh.hbh;
// ---------------
hbsmplv.vaa0.hbsmplwp=(hbsmplv.vaa0.hbsmplw/hbsmplv.vaa0.hbsmplpw)*100;
hbsmplv.vaa0.hbsmplhp=(hbsmplv.vaa0.hbsmplh/hbsmplv.vaa0.hbsmplph)*100;
hbsmplv.vaa0.hbsmplxp=(hbsmplv.vaa0.hbsmplx/hbsmplv.vaa0.hbsmplpw)*100;
hbsmplv.vaa0.hbsmplyp=(hbsmplv.vaa0.hbsmply/hbsmplv.vaa0.hbsmplph)*100;
hbsmplv.vaa0.hbsmplpgtp=(hbsmplv.vaa0.hbsmplpgt/hbsmplv.vaa0.hbsmplph)*100;
hbsmplv.vaa0.hbsmplpgbp=(hbsmplv.vaa0.hbsmplpgb/hbsmplv.vaa0.hbsmplph)*100;
hbsmplv.vaa0.hbsmplpglp=(hbsmplv.vaa0.hbsmplpgl/hbsmplv.vaa0.hbsmplpw)*100;
hbsmplv.vaa0.hbsmplpgrp=(hbsmplv.vaa0.hbsmplpgr/hbsmplv.vaa0.hbsmplpw)*100;
hbsmplv.vaa0.hbsmplmgtp=(hbsmplv.vaa0.hbsmplmgt/hbsmplv.vaa0.hbsmplph)*100;
hbsmplv.vaa0.hbsmplmgbp=(hbsmplv.vaa0.hbsmplmgb/hbsmplv.vaa0.hbsmplph)*100;
hbsmplv.vaa0.hbsmplmglp=(hbsmplv.vaa0.hbsmplmgl/hbsmplv.vaa0.hbsmplpw)*100;
hbsmplv.vaa0.hbsmplmgrp=(hbsmplv.vaa0.hbsmplmgr/hbsmplv.vaa0.hbsmplpw)*100;

hbsmplv.vaa0.hbsmplbdtp=(hbsmplv.vaa0.hbsmplbdt/hbsmplv.vaa0.hbsmplph)*100;
hbsmplv.vaa0.hbsmplbdbp=(hbsmplv.vaa0.hbsmplbdb/hbsmplv.vaa0.hbsmplph)*100;
hbsmplv.vaa0.hbsmplbdlp=(hbsmplv.vaa0.hbsmplbdl/hbsmplv.vaa0.hbsmplpw)*100;
hbsmplv.vaa0.hbsmplbdrp=(hbsmplv.vaa0.hbsmplbdr/hbsmplv.vaa0.hbsmplpw)*100;

// ------------------
hbsmplv.vaa0.hbsmplrttx=hbsmplv.vaa0.hbsmpld.hbrttx;
hbsmplv.vaa0.hbsmplrtty=hbsmplv.vaa0.hbsmpld.hbrtty;
hbsmplv.vaa0.hbsmplrttz=hbsmplv.vaa0.hbsmpld.hbrttz;
hbsmplv.vaa0.hbsmpltm=``;
hbsmplv.vaa0.hbsmpltm+=`rotateX(${hbsmplv.vaa0.hbsmplrttx}deg)`;
hbsmplv.vaa0.hbsmpltm+=`rotateY(${hbsmplv.vaa0.hbsmplrtty}deg)`;
hbsmplv.vaa0.hbsmpltm+=`rotateZ(${hbsmplv.vaa0.hbsmplrttz}deg)`;
hbsmpls[hbsmplv.vaa0.hbsmpln]={};
hbsmpls[hbsmplv.vaa0.hbsmpln].hbslels={};
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmpln=hbsmplv.vaa0.hbsmpln;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmple=hbsmplv.vaa0.hbsmple;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplp=hbsmplv.vaa0.hbsmplp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplt=hbsmplv.vaa0.hbsmplt;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplr=hbsmplv.vaa0.hbsmplr;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplw=hbsmplv.vaa0.hbsmplw;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplh=hbsmplv.vaa0.hbsmplh;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpw=hbsmplv.vaa0.hbsmplpw;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplph=hbsmplv.vaa0.hbsmplph;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplwp=hbsmplv.vaa0.hbsmplwp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplhp=hbsmplv.vaa0.hbsmplhp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplxp=hbsmplv.vaa0.hbsmplxp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplyp=hbsmplv.vaa0.hbsmplyp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplx=hbsmplv.vaa0.hbsmplx;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmply=hbsmplv.vaa0.hbsmply;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpgt=hbsmplv.vaa0.hbsmplpgt;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpgb=hbsmplv.vaa0.hbsmplpgb;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpgl=hbsmplv.vaa0.hbsmplpgl;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpgr=hbsmplv.vaa0.hbsmplpgr;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplmgt=hbsmplv.vaa0.hbsmplmgt;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplmgb=hbsmplv.vaa0.hbsmplmgb;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplmgl=hbsmplv.vaa0.hbsmplmgl;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplmgr=hbsmplv.vaa0.hbsmplmgr;

hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdt=hbsmplv.vaa0.hbsmplbdt;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdb=hbsmplv.vaa0.hbsmplbdb;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdl=hbsmplv.vaa0.hbsmplbdl;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdr=hbsmplv.vaa0.hbsmplbdr;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdc=hbsmplv.vaa0.hbsmplbdc;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdtc=hbsmplv.vaa0.hbsmplbdc;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdlc=hbsmplv.vaa0.hbsmplbdc;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdbc=hbsmplv.vaa0.hbsmplbdc;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdrc=hbsmplv.vaa0.hbsmplbdc;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbds=hbsmplv.vaa0.hbsmplbds;

hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpgtp=hbsmplv.vaa0.hbsmplpgtp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpgbp=hbsmplv.vaa0.hbsmplpgbp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpglp=hbsmplv.vaa0.hbsmplpglp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpgrp=hbsmplv.vaa0.hbsmplpgrp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplmgtp=hbsmplv.vaa0.hbsmplmgtp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplmgbp=hbsmplv.vaa0.hbsmplmgbp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplmglp=hbsmplv.vaa0.hbsmplmglp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplmgrp=hbsmplv.vaa0.hbsmplmgrp;

hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdtp=hbsmplv.vaa0.hbsmplbdtp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdbp=hbsmplv.vaa0.hbsmplbdbp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdlp=hbsmplv.vaa0.hbsmplbdlp;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplbdrp=hbsmplv.vaa0.hbsmplbdrp;

hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpos=hbsmplv.vaa0.hbsmplpos;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpn=hbsmplv.vaa0.hbsmplpn;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplpd=hbsmplv.vaa0.hbsmplpd;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplrttx=hbsmplv.vaa0.hbsmplrttx;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplrtty=hbsmplv.vaa0.hbsmplrtty;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmplrttz=hbsmplv.vaa0.hbsmplrttz;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsmpltm=hbsmplv.vaa0.hbsmpltm;
hbsmpls[hbsmplv.vaa0.hbsmpln].hblnbl=hbsmplv.vaa0.hblnbl;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsrc=hbsmplv.vaa0.hbsmpld.hbsrc;
hbsmpls[hbsmplv.vaa0.hbsmpln].hbsrcbl=hbsmplv.vaa0.hbsrcbl;

hbsmplr(hbsmplv.vaa0.hbsmpln,{
hbx:hbsmplv.vaa0.hbsmplx,
hby:hbsmplv.vaa0.hbsmply,
hbw:hbsmplv.vaa0.hbsmplw,
hbh:hbsmplv.vaa0.hbsmplh,
hbpgt:hbsmplv.vaa0.hbsmplpgt,
hbpgb:hbsmplv.vaa0.hbsmplpgb,
hbpgl:hbsmplv.vaa0.hbsmplpgl,
hbpgr:hbsmplv.vaa0.hbsmplpgr,
hbmgt:hbsmplv.vaa0.hbsmplmgt,
hbmgb:hbsmplv.vaa0.hbsmplmgb,
hbmgl:hbsmplv.vaa0.hbsmplmgl,
hbmgr:hbsmplv.vaa0.hbsmplmgr,

hbbdt:hbsmplv.vaa0.hbsmplbdt,
hbbdb:hbsmplv.vaa0.hbsmplbdb,
hbbdl:hbsmplv.vaa0.hbsmplbdl,
hbbdr:hbsmplv.vaa0.hbsmplbdr,
hbbdc:hbsmplv.vaa0.hbsmplbdc,
hbbds:hbsmplv.vaa0.hbsmplbds,

hbpos:hbsmplv.vaa0.hbsmplpos,
hbtm:hbsmplv.vaa0.hbsmpltm,
});
hbsmplr(hbsmplv.vaa0.hbsmpln,hbsmplv.vaa0.hbsmplr);
hbsmplraxywh(hbsmplv.vaa0.hbsmpln);

};
// hbsmplr("hbbody",{hbwp:100,hbhp:100});
hbsmpl("hbroot",{hbtag:"hbroot",hbpos:"fixed",hbx:0,hby:0,hbp:"hbbody"},{hbwp:100,hbhp:100,hbbc:"white"});
hbsmplnel=function(hbsmplpae0,hbsmplpae1,hbsmplpae2,...hbsmplpae3){

hbsmplv.vaa4={};
hbsmplv.vaa4.hbsmpln=hbsmplpae0;
hbsmplv.vaa4.hbsmpl=hbsmpls[hbsmplv.vaa4.hbsmpln];
hbsmplv.vaa4.hbsmple=hbsmplv.vaa4.hbsmpl.hbsmple;
hbsmplv.vaa4.hbslele=hbsmplpae1;
hbsmplv.vaa4.hbslelf=hbsmplpae2;
hbsmplv.vaa4.hbslelfps=hbsmplpae3;
hbsmplv.vaa4.hbslelrf=()=>{
if(typeof hbsmplv.vaa4.hbslelfps!="undefined"){
hbsmplv.vaa4.hbslelf(...hbsmplv.vaa4.hbslelfps);
}
if(typeof hbsmplv.vaa4.hbslelfps=="undefined"){
hbsmplv.vaa4.hbslelf();
}
};
hbsmpls[hbsmplv.vaa4.hbsmpln].hbslels[hbsmplv.vaa4.hbslele]={};
hbsmpls[hbsmplv.vaa4.hbsmpln].hbslels[hbsmplv.vaa4.hbslele].hbslele=hbsmplv.vaa4.hbslele;
hbsmpls[hbsmplv.vaa4.hbsmpln].hbslels[hbsmplv.vaa4.hbslele].hbslelf=hbsmplv.vaa4.hbslelf;
hbsmpls[hbsmplv.vaa4.hbsmpln].hbslels[hbsmplv.vaa4.hbslele].hbslelfps=hbsmplv.vaa4.hbslelfps;
hbsmpls[hbsmplv.vaa4.hbsmpln].hbslels[hbsmplv.vaa4.hbslele].hbslelp=hbsmplv.vaa4.hbsmpln;
hbsmpls[hbsmplv.vaa4.hbsmpln].hbslels[hbsmplv.vaa4.hbslele].hbslelrf=hbsmplv.vaa4.hbslelrf;
hbsmpls[hbsmplv.vaa4.hbsmpln].hbsmple.addEventListener(hbsmplv.vaa4.hbslele,hbsmplv.vaa4.hbslelrf);

};
hbsmplrel=function(hbsmplpaf0,hbsmplpaf1){

hbsmplv.vaa5={};
hbsmplv.vaa5.hbsmpln=hbsmplpaf0;
hbsmplv.vaa5.hbsmpl=hbsmpls[hbsmplv.vaa5.hbsmpln];
hbsmplv.vaa5.hbsmple=hbsmplv.vaa5.hbsmpl.hbsmple;
hbsmplv.vaa5.hbslele=hbsmplpaf1;
hbsmplv.vaa5.hbslels=hbsmplv.vaa5.hbsmpl.hbslels;
hbsmplv.vaa5.hbslel=hbsmplv.vaa5.hbslels[hbsmplv.vaa5.hbslele];
hbsmplv.vaa5.hbslelrf=hbsmplv.vaa5.hbslel.hbslelrf;
hbsmplv.vaa5.hbsmple.removeEventListener(hbsmplv.vaa5.hbslele,hbsmplv.vaa5.hbslelrf);
delete hbsmpls[hbsmplv.vaa5.hbsmpln].hbslels[hbsmplv.vaa5.hbslele];

};
hbsmpld.hbslmel=hbsmpls["hbroot"].hbsmple.addEventListener("mouseover",(event)=>{

hbsmpld.hbslmx=event.clientX;
hbsmpld.hbslmy=event.clientY;

});
hbsmpld.hbslmel=hbsmpls["hbroot"].hbsmple.addEventListener("mousemove",(event)=>{

hbsmpld.hbslmx=event.clientX;
hbsmpld.hbslmy=event.clientY;
if(hbsmpld.hbslmelfbl==true){
if(hbsmpld.hbslmelfpsbl==false){
hbsmpld.hbslmelf();
}
if(hbsmpld.hbslmelfpsbl==true){
hbsmpld.hbslmelf(...hbsmpld.hbslmelfps);
}
}

});


// hbsmpl("hello",{hbtag:"hello",hbw:100},{borderRadius:"15px",bcolor:"red"});
// hbsmpl("hello2",{hbtag:"hello",hbw:100,hby:50},{borderRadius:"15px",bcolor:"blue"});
// hbsmplsr("one","hello","hello2");
// hbsmpldg("hello2",true,"xy",()=>{
// hbsmpler("one","exec-o");
// });
// hbsmplnel("hello","click",(paa0)=>{

// console.log(paa0);

// },"good");