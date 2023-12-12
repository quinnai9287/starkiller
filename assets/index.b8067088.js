import{_ as H}from"./SectionScene.vue.16b213aa.js";import{r as v,o as K,t as l,v as r,x as n,C as E,D as I,B as S,d as u,a4 as i,P as t,a3 as b,y as g,a6 as y,a9 as T,Y as M,g as Y,c as z,L as k,A as m,a5 as G,z as d,a2 as L,ay as R,az as D,ar as F,aa as O,aA as X,i as q,q as J}from"./entry.f04e0043.js";import{_ as w}from"./_plugin-vue_export-helper.c27b6911.js";import{a as N,d as Z,e as $,_ as A,w as P,E as C,g as Q}from"./base.8bed00a9.js";import{i as W,d as ee,u as se}from"./use-form-common-props.4dc4e29f.js";const te=a=>(E("data-v-e30b2515"),a=a(),I(),a),ae={class:"massive-title"},oe=te(()=>n("span",null,[S("Shall we tailor "),n("br"),S("something interesting?")],-1)),le={__name:"Landing",setup(a){const o=v(null);return v(0),v(0),v(0),v(0),K(()=>{}),(e,f)=>(l(),r("div",null,[n("h1",ae,[n("div",{ref_key:"massiveTitle",ref:o,class:"massive-title-text-clip"},"Hey!,",512),oe])]))}},ne=w(le,[["__scopeId","data-v-e30b2515"]]),ie=""+globalThis.__publicAssetsURL("me.jpg"),ce=N({header:{type:String,default:""},bodyStyle:{type:Z([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),re=u({name:"ElCard"}),pe=u({...re,props:ce,setup(a){const o=$("card");return(e,f)=>(l(),r("div",{class:i([t(o).b(),t(o).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(l(),r("div",{key:0,class:i(t(o).e("header"))},[b(e.$slots,"header",{},()=>[S(g(e.header),1)])],2)):y("v-if",!0),n("div",{class:i([t(o).e("body"),e.bodyClass]),style:T(e.bodyStyle)},[b(e.$slots,"default")],6)],2))}});var de=A(pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const me=P(de),_e=u({name:"ElTimeline",setup(a,{slots:o}){const e=$("timeline");return M("timeline",o),()=>Y("ul",{class:[e.b()]},[b(o,"default")])}}),ue=N({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:W},hollow:{type:Boolean,default:!1}}),fe=u({name:"ElTimelineItem"}),ve=u({...fe,props:ue,setup(a){const o=a,e=$("timeline-item"),f=z(()=>[e.e("node"),e.em("node",o.size||""),e.em("node",o.type||""),e.is("hollow",o.hollow)]);return(s,p)=>(l(),r("li",{class:i([t(e).b(),{[t(e).e("center")]:s.center}])},[n("div",{class:i(t(e).e("tail"))},null,2),s.$slots.dot?y("v-if",!0):(l(),r("div",{key:0,class:i(t(f)),style:T({backgroundColor:s.color})},[s.icon?(l(),k(t(C),{key:0,class:i(t(e).e("icon"))},{default:m(()=>[(l(),k(G(s.icon)))]),_:1},8,["class"])):y("v-if",!0)],6)),s.$slots.dot?(l(),r("div",{key:1,class:i(t(e).e("dot"))},[b(s.$slots,"dot")],2)):y("v-if",!0),n("div",{class:i(t(e).e("wrapper"))},[!s.hideTimestamp&&s.placement==="top"?(l(),r("div",{key:0,class:i([t(e).e("timestamp"),t(e).is("top")])},g(s.timestamp),3)):y("v-if",!0),n("div",{class:i(t(e).e("content"))},[b(s.$slots,"default")],2),!s.hideTimestamp&&s.placement==="bottom"?(l(),r("div",{key:1,class:i([t(e).e("timestamp"),t(e).is("bottom")])},g(s.timestamp),3)):y("v-if",!0)],2)],2))}});var j=A(ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);const ye=P(_e,{TimelineItem:j}),he=Q(j);const ge=a=>(E("data-v-26e61058"),a=a(),I(),a),be={class:"experience-wrap"},ke=ge(()=>n("h3",{class:"font-bold mb-4"},"EXPERIENCE",-1)),Se={class:"title"},Te={class:"font-Podkova"},we={class:"mt-4"},$e=u({__name:"Timeline",setup(a){const o=[{title:"Front-end Developer",company:"Freelancing w/ Alion Tech.",timestamp:"2023-09",period:"2023年9月 - present",present:!0},{title:"Front-end Developer",company:"TG3D Studio",timestamp:"2022-05",period:"2022年5月 - 2023年9月・1 年 5 個月"},{title:"Front-end Developer",company:"Freelancing w/ Alion Tech., Blockcode Inc.",timestamp:"2020-01",period:"2020年1月 - 2022年2月・2 年 2 個月"},{title:"Front-end Developer",company:"Albert Lan Creative 歐拔藍數位創意",timestamp:"2016-08",period:"2016年8月 - 2019年11月・3 年 4 個月"}];return(e,f)=>{const s=me,p=he,h=ye;return l(),r("div",be,[ke,d(h,null,{default:m(()=>[(l(),r(L,null,R(o,(_,c)=>d(p,{key:c,timestamp:_.timestamp,placement:"top"},{default:m(()=>[d(s,{class:i(["experience-card",{present:_.present}]),"body-class":"experience-card-body"},{default:m(()=>[n("h3",Se,g(_.title),1),n("h4",Te,g(_.company),1),n("p",we,g(_.period),1)]),_:2},1032,["class"])]),_:2},1032,["timestamp"])),64))]),_:1})])}}});const Ce=w($e,[["__scopeId","data-v-26e61058"]]),Ee=N({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:ee,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Ie={close:a=>a instanceof MouseEvent,click:a=>a instanceof MouseEvent},Ne=u({name:"ElTag"}),Ae=u({...Ne,props:Ee,emits:Ie,setup(a,{emit:o}){const e=a,f=se(),s=$("tag"),p=z(()=>{const{type:c,hit:B,effect:U,closable:V,round:x}=e;return[s.b(),s.is("closable",V),s.m(c),s.m(f.value),s.m(U),s.is("hit",B),s.is("round",x)]}),h=c=>{o("close",c)},_=c=>{o("click",c)};return(c,B)=>c.disableTransitions?(l(),r("span",{key:0,class:i(t(p)),style:T({backgroundColor:c.color}),onClick:_},[n("span",{class:i(t(s).e("content"))},[b(c.$slots,"default")],2),c.closable?(l(),k(t(C),{key:0,class:i(t(s).e("close")),onClick:F(h,["stop"])},{default:m(()=>[d(t(D))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(l(),k(O,{key:1,name:`${t(s).namespace.value}-zoom-in-center`,appear:""},{default:m(()=>[n("span",{class:i(t(p)),style:T({backgroundColor:c.color}),onClick:_},[n("span",{class:i(t(s).e("content"))},[b(c.$slots,"default")],2),c.closable?(l(),k(t(C),{key:0,class:i(t(s).e("close")),onClick:F(h,["stop"])},{default:m(()=>[d(t(D))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)]),_:3},8,["name"]))}});var Pe=A(Ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const Be=P(Pe);const De=a=>(E("data-v-6499a120"),a=a(),I(),a),Fe={class:"skils-wrap"},ze=De(()=>n("h3",{class:"font-bold mb-4"},"SKILLS",-1)),Le=u({__name:"Skills",setup(a){const o=v([{type:"warning",label:"Javascript/CSS/HTML5"},{type:"success",label:"Vue.js"},{type:"success",label:"Nuxt.js"},{type:"success",label:"Typescript"},{type:"",label:"React.js"},{type:"",label:"React-Native"},{type:"",label:"Tailwind CSS"},{type:"warning",label:"Three.js"},{type:"warning",label:"Git"},{type:"",label:"Photoshop"},{type:"warning",label:"Illustrator"}]);return(e,f)=>{const s=Be;return l(),r("div",Fe,[ze,(l(!0),r(L,null,R(t(o),p=>(l(),k(s,{key:p.label,class:"mx-1",type:p.type,effect:"plain"},{default:m(()=>[S(g(p.label),1)]),_:2},1032,["type"]))),128))])}}});const Re=w(Le,[["__scopeId","data-v-6499a120"]]),je={class:"flex h-[80%]"},Ue=X('<div class="profile-image w-[100px] h-[100px] rounded-full overflow-hidden" data-v-a3366e0e><img src="'+ie+'" class="w-full h-full" alt="profile image" data-v-a3366e0e></div><h2 class="font-Podkova leading-none mb-8 mt-6" data-v-a3366e0e>AUTHOR</h2><h2 class="massive-title" data-v-a3366e0e>STEPHANI<br data-v-a3366e0e>YANG</h2><ul class="title-list font-Podkova" data-v-a3366e0e><li class="now" data-v-a3366e0e>Front-end Developer</li><li data-v-a3366e0e>Former UI/UX Designer</li><li data-v-a3366e0e>Former Graphic Designer</li></ul><p class="font-Podkova text-xs mt-8" data-v-a3366e0e> Department of Information and Communication,<br data-v-a3366e0e>Yuan-Ze University, Taiwan </p>',5),Ve={class:"flex justify-center ml-10"},xe=u({__name:"index",setup(a){return(o,e)=>(l(),r("div",je,[n("div",null,[Ue,d(Re)]),n("div",Ve,[d(Ce)])]))}});const He=w(xe,[["__scopeId","data-v-a3366e0e"]]),Ke={class:"section"},Me={class:"section"},Je={__name:"index",setup(a){const{$listen:o}=J(),e=v(null);o("page:slider",s=>{var p;console.log("A user was registered!",s),(p=e.value)==null||p.api.moveTo(s,0)});const f=v({licenseKey:"YOUR_KEY_HEERE",menu:"#menu"});return(s,p)=>{const h=H,_=q("full-page");return l(),r("div",null,[d(_,{id:"fullpage",ref_key:"fullpage",ref:e,options:t(f)},{default:m(()=>[n("div",Ke,[d(h,{label:"FRONTEND"},{default:m(()=>[d(ne)]),_:1})]),n("div",Me,[d(h,{label:"Author"},{default:m(()=>[d(He)]),_:1})])]),_:1},8,["options"])])}}};export{Je as default};