import{A as p,C as w,r as k,o as m,e as g,f as r,a as o,w as n,k as a}from"./vendor.b99b632f.js";import{f as i}from"./fabric.49791ffe.js";const C={class:"btn-x"},T=a("\u77E9\u5F62\u79FB\u5230\u9876\u5C42"),B=a("\u77E9\u5F62\u79FB\u5230\u5E95\u5C42\u5C42"),x=a("\u4E09\u89D2\u5F62\u5F80\u4E0A\u8D70\u4E00\u5C42"),F=a("\u5706\u5F62\u5F80\u4E0B\u8D70\u4E00\u5C42"),M=a("\u5C06\u4E09\u89D2\u5F62\u79FB\u52300\u5C42"),y=r("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),E={setup(N){const d=p();let e=null,c=null,l=null,s=null;function _(){e=new i.fabric.Canvas("canvas"),c=new i.fabric.Rect({top:30,left:30,fill:"orange",width:100,height:100}),l=new i.fabric.Circle({top:50,left:60,fill:"hotpink",radius:50}),s=new i.fabric.Triangle({top:80,left:30,width:80,height:100,fill:"blue"}),e.add(c,l,s)}function f(){e.bringToFront(c)}function u(){e.sendToBack(c)}function h(){e.bringForward(s)}function v(){e.sendBackwards(l)}function b(){s.moveTo(0)}return w(()=>{d.commit("setComponentPath","src/views/FabricJS/Basic/pages/MoveTo/MoveTo.vue"),_()}),(V,j)=>{const t=k("el-button");return m(),g("div",null,[r("div",C,[o(t,{onClick:f},{default:n(()=>[T]),_:1}),o(t,{onClick:u},{default:n(()=>[B]),_:1}),o(t,{onClick:h},{default:n(()=>[x]),_:1}),o(t,{onClick:v},{default:n(()=>[F]),_:1}),o(t,{onClick:b},{default:n(()=>[M]),_:1})]),y])}}};export{E as default};
