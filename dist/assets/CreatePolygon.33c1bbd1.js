import{A as x,b as C,C as _,r as u,o as k,e as w,a as r,u as B,S as M,w as V,f as A}from"./vendor.b99b632f.js";import{f as c}from"./fabric.49791ffe.js";const R=A("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),D={setup(T){const p=x();let e=null,l=null,a=C("default");function f(o){switch(o){case"default":e.selection=!0,e.selectionColor="rgba(100, 100, 255, 0.3)",e.selectionBorderColor="rgba(255, 255, 255, 0.3)",e.skipTargetFind=!1;break;case"polygon":e.selectionColor="transparent",e.selectionBorderColor="transparent",e.skipTargetFind=!0;break}}function d(){e=new c.fabric.Canvas("canvas"),e.on("mouse:down",v),e.on("mouse:move",h),e.on("mouse:dblclick",P)}function g(o){const t=o.absolutePointer;l=new c.fabric.Polygon([{x:t.x,y:t.y},{x:t.x,y:t.y}],{fill:"transparent",stroke:"rgba(0, 0, 0, 0.2)",objectCaching:!1}),e.add(l)}function y(o){const t=o.absolutePointer;l.points.push({x:t.x,y:t.y}),e.requestRenderAll()}function b(o){const t=o.absolutePointer;let n=l.points;n[n.length-1].x=t.x,n[n.length-1].y=t.y,e.requestRenderAll()}function m(o){const t=o.absolutePointer;let n=l.points;if(n[n.length-1].x=t.x,n[n.length-1].y=t.y,n.pop(),n.pop(),e.remove(l),n.length>1){let s=new c.fabric.Polygon(n,{stroke:"#000",fill:"transparent"});e.add(s)}l=null,e.requestRenderAll()}function v(o){a.value==="polygon"&&(l===null?g(o):y(o))}function h(o){a.value==="polygon"&&l&&b(o)}function P(o){a.value==="polygon"&&m(o)}return _(()=>{p.commit("setComponentPath","src/views/FabricJS/Demo/pages/CreatePolygon/CreatePolygon.vue"),d()}),(o,t)=>{const n=u("el-option"),s=u("el-select");return k(),w("div",null,[r(s,{modelValue:B(a),"onUpdate:modelValue":t[0]||(t[0]=i=>M(a)?a.value=i:a=i),onChange:f},{default:V(()=>[r(n,{label:"\u9ED8\u8BA4(\u6846\u9009)",value:"default"}),r(n,{label:"\u591A\u8FB9\u5F62",value:"polygon"})]),_:1},8,["modelValue"]),R])}}};export{D as default};