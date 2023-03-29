import{A as U,b as K,C as J,o as $,e as q}from"./vendor.b99b632f.js";import{C as H,g as Q,c as C,b as B,d as R,S as Z,a as tt,L as at}from"./Vector.c1a6c122.js";import{T as et}from"./TileImage.0ebee0ae.js";import{bJ as it,s as j,bK as rt,_ as G,f as nt,bL as Y,bM as st,b2 as ot,a$ as lt,bN as ht,i as _t,q as mt,bO as Lt,J as k,a4 as ft,B as O,bc as W,u as I,H as dt,ae as N,S as b,ai as A,P as F,bh as X,M as pt,V as ct}from"./ol.bb58850a.js";import{L as V}from"./LineString.191ddcd6.js";import{T as z}from"./Text.cc0ffa7e.js";import{B as vt}from"./BingMaps.5a522d6d.js";import{_ as ut}from"./index.8bb5b140.js";import"./net.a0d7cd86.js";function gt(g){var o=g.inversePixelTransform[0],i=g.frameState,t=it(g.inversePixelTransform.slice(),i.coordinateToPixelTransform),e=Q(i.viewState.resolution,o),a;return new H(g.context,o,i.extent,t,i.viewState.rotation,e,a)}function D(g,o,i){for(var t=[],e=g(0),a=g(1),n=o(e),r=o(a),s=[a,e],m=[r,n],d=[1,0],L={},l=1e5,_,v,f,h,u,c;--l>0&&d.length>0;)f=d.pop(),e=s.pop(),n=m.pop(),c=f.toString(),c in L||(t.push(n[0],n[1]),L[c]=!0),h=d.pop(),a=s.pop(),r=m.pop(),u=(f+h)/2,_=g(u),v=o(_),rt(v[0],v[1],n[0],n[1],r[0],r[1])<i?(t.push(r[0],r[1]),c=h.toString(),L[c]=!0):(d.push(h,u,u,f),m.push(r,v,v,n),s.push(a,_,_,e));return t}function bt(g,o,i,t,e){var a=G("EPSG:4326");return D(function(n){return[g,o+(i-o)*n]},j(a,t),e)}function yt(g,o,i,t,e){var a=G("EPSG:4326");return D(function(n){return[o+(i-o)*n,g]},j(a,t),e)}var St=globalThis&&globalThis.__extends||function(){var g=function(o,i){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])},g(o,i)};return function(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");g(o,i);function t(){this.constructor=o}o.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}}(),xt=new C({color:"rgba(0,0,0,0.2)"}),wt=[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001],Mt=function(g){St(o,g);function o(i){var t=this,e=i||{},a=nt({updateWhileAnimating:!0,updateWhileInteracting:!0,renderBuffer:0},e);return delete a.maxLines,delete a.strokeStyle,delete a.targetSize,delete a.showLabels,delete a.lonLabelFormatter,delete a.latLabelFormatter,delete a.lonLabelPosition,delete a.latLabelPosition,delete a.lonLabelStyle,delete a.latLabelStyle,delete a.intervals,t=g.call(this,a)||this,t.projection_=null,t.maxLat_=1/0,t.maxLon_=1/0,t.minLat_=-1/0,t.minLon_=-1/0,t.maxX_=1/0,t.maxY_=1/0,t.minX_=-1/0,t.minY_=-1/0,t.targetSize_=e.targetSize!==void 0?e.targetSize:100,t.maxLines_=e.maxLines!==void 0?e.maxLines:100,t.meridians_=[],t.parallels_=[],t.strokeStyle_=e.strokeStyle!==void 0?e.strokeStyle:xt,t.fromLonLatTransform_=void 0,t.toLonLatTransform_=void 0,t.projectionCenterLonLat_=null,t.bottomLeft_=null,t.bottomRight_=null,t.topLeft_=null,t.topRight_=null,t.meridiansLabels_=null,t.parallelsLabels_=null,e.showLabels&&(t.lonLabelFormatter_=e.lonLabelFormatter==null?Y.bind(t,"EW"):e.lonLabelFormatter,t.latLabelFormatter_=e.latLabelFormatter==null?Y.bind(t,"NS"):e.latLabelFormatter,t.lonLabelPosition_=e.lonLabelPosition==null?0:e.lonLabelPosition,t.latLabelPosition_=e.latLabelPosition==null?1:e.latLabelPosition,t.lonLabelStyleBase_=new B({text:e.lonLabelStyle!==void 0?e.lonLabelStyle.clone():new z({font:"12px Calibri,sans-serif",textBaseline:"bottom",fill:new R({color:"rgba(0,0,0,1)"}),stroke:new C({color:"rgba(255,255,255,1)",width:3})})}),t.lonLabelStyle_=function(n){var r=n.get("graticule_label");return this.lonLabelStyleBase_.getText().setText(r),this.lonLabelStyleBase_}.bind(t),t.latLabelStyleBase_=new B({text:e.latLabelStyle!==void 0?e.latLabelStyle.clone():new z({font:"12px Calibri,sans-serif",textAlign:"right",fill:new R({color:"rgba(0,0,0,1)"}),stroke:new C({color:"rgba(255,255,255,1)",width:3})})}),t.latLabelStyle_=function(n){var r=n.get("graticule_label");return this.latLabelStyleBase_.getText().setText(r),this.latLabelStyleBase_}.bind(t),t.meridiansLabels_=[],t.parallelsLabels_=[],t.addEventListener(st.POSTRENDER,t.drawLabels_.bind(t))),t.intervals_=e.intervals!==void 0?e.intervals:wt,t.setSource(new Z({loader:t.loaderFunction.bind(t),strategy:t.strategyFunction.bind(t),features:new ot,overlaps:!1,useSpatialIndex:!1,wrapX:e.wrapX})),t.featurePool_=[],t.lineStyle_=new B({stroke:t.strokeStyle_}),t.loadedExtent_=null,t.renderedExtent_=null,t.setRenderOrder(null),t}return o.prototype.strategyFunction=function(i,t){var e=i.slice();return this.projection_&&this.getSource().getWrapX()&&lt(e,this.projection_),this.loadedExtent_&&(ht(this.loadedExtent_,e,t)?e=this.loadedExtent_.slice():this.getSource().removeLoadedExtent(this.loadedExtent_)),[e]},o.prototype.loaderFunction=function(i,t,e){this.loadedExtent_=i;var a=this.getSource(),n=this.getExtent()||[-1/0,-1/0,1/0,1/0],r=_t(n,i);if(!(this.renderedExtent_&&mt(this.renderedExtent_,r))&&(this.renderedExtent_=r,!Lt(r))){var s=k(r),m=t*t/4,d=!this.projection_||!ft(this.projection_,e);d&&this.updateProjectionInfo_(e),this.createGraticule_(r,s,t,m);var L=this.meridians_.length+this.parallels_.length;this.meridiansLabels_&&(L+=this.meridians_.length),this.parallelsLabels_&&(L+=this.parallels_.length);for(var l;L>this.featurePool_.length;)l=new tt,this.featurePool_.push(l);var _=a.getFeaturesCollection();_.clear();var v=0,f,h;for(f=0,h=this.meridians_.length;f<h;++f)l=this.featurePool_[v++],l.setGeometry(this.meridians_[f]),l.setStyle(this.lineStyle_),_.push(l);for(f=0,h=this.parallels_.length;f<h;++f)l=this.featurePool_[v++],l.setGeometry(this.parallels_[f]),l.setStyle(this.lineStyle_),_.push(l)}},o.prototype.addMeridian_=function(i,t,e,a,n,r){var s=this.getMeridian_(i,t,e,a,r);if(O(s.getExtent(),n)){if(this.meridiansLabels_){var m=this.lonLabelFormatter_(i);r in this.meridiansLabels_?this.meridiansLabels_[r].text=m:this.meridiansLabels_[r]={geom:new W([]),text:m}}this.meridians_[r++]=s}return r},o.prototype.addParallel_=function(i,t,e,a,n,r){var s=this.getParallel_(i,t,e,a,r);if(O(s.getExtent(),n)){if(this.parallelsLabels_){var m=this.latLabelFormatter_(i);r in this.parallelsLabels_?this.parallelsLabels_[r].text=m:this.parallelsLabels_[r]={geom:new W([]),text:m}}this.parallels_[r++]=s}return r},o.prototype.drawLabels_=function(i){var t=i.frameState.viewState.rotation,e=i.frameState.extent,a=k(e),n=e;if(t){var r=I(e),s=dt(e),m=Math.abs(Math.cos(t)),d=Math.abs(Math.sin(t)),L=(d*s-m*r)/(d*d-m*m),l=(d*r-m*s)/(d*d-m*m);n=[a[0]-L/2,a[1]-l/2,a[0]+L/2,a[1]+l/2]}var _=0,v=0,f=this.latLabelPosition_<.5,h=this.projection_.getExtent(),u=I(h);if(this.getSource().getWrapX()&&this.projection_.canWrapX()&&!N(h,e)){_=Math.floor((e[0]-h[0])/u),v=Math.ceil((e[2]-h[2])/u);var c=Math.abs(t)>Math.PI/2;f=f!==c}for(var M=gt(i),S=_;S<=v;++S){var w=this.meridians_.length+this.parallels_.length,y=void 0,p=void 0,x=void 0,P=void 0;if(this.meridiansLabels_)for(p=0,x=this.meridiansLabels_.length;p<x;++p){var T=this.meridians_[p];if(!t&&S===0)P=this.getMeridianPoint_(T,e,p);else{var E=T.clone();E.translate(S*u,0),E.rotate(-t,a),P=this.getMeridianPoint_(E,n,p),P.rotate(t,a)}y=this.featurePool_[w++],y.setGeometry(P),y.set("graticule_label",this.meridiansLabels_[p].text),M.drawFeature(y,this.lonLabelStyle_(y))}if(this.parallelsLabels_&&(S===_&&f||S===v&&!f))for(p=0,x=this.parallels_.length;p<x;++p){var T=this.parallels_[p];if(!t&&S===0)P=this.getParallelPoint_(T,e,p);else{var E=T.clone();E.translate(S*u,0),E.rotate(-t,a),P=this.getParallelPoint_(E,n,p),P.rotate(t,a)}y=this.featurePool_[w++],y.setGeometry(P),y.set("graticule_label",this.parallelsLabels_[p].text),M.drawFeature(y,this.latLabelStyle_(y))}}},o.prototype.createGraticule_=function(i,t,e,a){var n=this.getInterval_(e);if(n==-1){this.meridians_.length=0,this.parallels_.length=0,this.meridiansLabels_&&(this.meridiansLabels_.length=0),this.parallelsLabels_&&(this.parallelsLabels_.length=0);return}var r=!1,s=this.projection_.getExtent(),m=I(s);this.getSource().getWrapX()&&this.projection_.canWrapX()&&!N(s,i)&&(I(i)>=m?(i[0]=s[0],i[2]=s[2]):r=!0);var d=[b(t[0],this.minX_,this.maxX_),b(t[1],this.minY_,this.maxY_)],L=this.toLonLatTransform_(d);isNaN(L[1])&&(L[1]=Math.abs(this.maxLat_)>=Math.abs(this.minLat_)?this.maxLat_:this.minLat_);var l=b(L[0],this.minLon_,this.maxLon_),_=b(L[1],this.minLat_,this.maxLat_),v=this.maxLines_,f,h,u,c,M=i;r||(M=[b(i[0],this.minX_,this.maxX_),b(i[1],this.minY_,this.maxY_),b(i[2],this.minX_,this.maxX_),b(i[3],this.minY_,this.maxY_)]);var S=A(M,this.toLonLatTransform_,void 0,8),w=S[3],y=S[2],p=S[1],x=S[0];if(r||(F(M,this.bottomLeft_)&&(x=this.minLon_,p=this.minLat_),F(M,this.bottomRight_)&&(y=this.maxLon_,p=this.minLat_),F(M,this.topLeft_)&&(x=this.minLon_,w=this.maxLat_),F(M,this.topRight_)&&(y=this.maxLon_,w=this.maxLat_),w=b(w,_,this.maxLat_),y=b(y,l,this.maxLon_),p=b(p,this.minLat_,_),x=b(x,this.minLon_,l)),l=Math.floor(l/n)*n,c=b(l,this.minLon_,this.maxLon_),h=this.addMeridian_(c,p,w,a,i,0),f=0,r)for(;(c-=n)>=x&&f++<v;)h=this.addMeridian_(c,p,w,a,i,h);else for(;c!=this.minLon_&&f++<v;)c=Math.max(c-n,this.minLon_),h=this.addMeridian_(c,p,w,a,i,h);if(c=b(l,this.minLon_,this.maxLon_),f=0,r)for(;(c+=n)<=y&&f++<v;)h=this.addMeridian_(c,p,w,a,i,h);else for(;c!=this.maxLon_&&f++<v;)c=Math.min(c+n,this.maxLon_),h=this.addMeridian_(c,p,w,a,i,h);for(this.meridians_.length=h,this.meridiansLabels_&&(this.meridiansLabels_.length=h),_=Math.floor(_/n)*n,u=b(_,this.minLat_,this.maxLat_),h=this.addParallel_(u,x,y,a,i,0),f=0;u!=this.minLat_&&f++<v;)u=Math.max(u-n,this.minLat_),h=this.addParallel_(u,x,y,a,i,h);for(u=b(_,this.minLat_,this.maxLat_),f=0;u!=this.maxLat_&&f++<v;)u=Math.min(u+n,this.maxLat_),h=this.addParallel_(u,x,y,a,i,h);this.parallels_.length=h,this.parallelsLabels_&&(this.parallelsLabels_.length=h)},o.prototype.getInterval_=function(i){for(var t=this.projectionCenterLonLat_[0],e=this.projectionCenterLonLat_[1],a=-1,n=Math.pow(this.targetSize_*i,2),r=[],s=[],m=0,d=this.intervals_.length;m<d;++m){var L=b(this.intervals_[m]/2,0,90),l=b(e,-90+L,90-L);r[0]=t-L,r[1]=l-L,s[0]=t+L,s[1]=l+L,this.fromLonLatTransform_(r,r),this.fromLonLatTransform_(s,s);var _=Math.pow(s[0]-r[0],2)+Math.pow(s[1]-r[1],2);if(_<=n)break;a=this.intervals_[m]}return a},o.prototype.getMeridian_=function(i,t,e,a,n){var r=bt(i,t,e,this.projection_,a),s=this.meridians_[n];return s?(s.setFlatCoordinates(X.XY,r),s.changed()):(s=new V(r,X.XY),this.meridians_[n]=s),s},o.prototype.getMeridianPoint_=function(i,t,e){var a=i.getFlatCoordinates(),n=1,r=a.length-1;a[n]>a[r]&&(n=r,r=1);var s=Math.max(t[1],a[n]),m=Math.min(t[3],a[r]),d=b(t[1]+Math.abs(t[1]-t[3])*this.lonLabelPosition_,s,m),L=a[n-1]+(a[r-1]-a[n-1])*(d-a[n])/(a[r]-a[n]),l=[L,d],_=this.meridiansLabels_[e].geom;return _.setCoordinates(l),_},o.prototype.getMeridians=function(){return this.meridians_},o.prototype.getParallel_=function(i,t,e,a,n){var r=yt(i,t,e,this.projection_,a),s=this.parallels_[n];return s?(s.setFlatCoordinates(X.XY,r),s.changed()):s=new V(r,X.XY),s},o.prototype.getParallelPoint_=function(i,t,e){var a=i.getFlatCoordinates(),n=0,r=a.length-2;a[n]>a[r]&&(n=r,r=0);var s=Math.max(t[0],a[n]),m=Math.min(t[2],a[r]),d=b(t[0]+Math.abs(t[0]-t[2])*this.latLabelPosition_,s,m),L=a[n+1]+(a[r+1]-a[n+1])*(d-a[n])/(a[r]-a[n]),l=[d,L],_=this.parallelsLabels_[e].geom;return _.setCoordinates(l),_},o.prototype.getParallels=function(){return this.parallels_},o.prototype.updateProjectionInfo_=function(i){var t=G("EPSG:4326"),e=i.getWorldExtent();this.maxLat_=e[3],this.maxLon_=e[2],this.minLat_=e[1],this.minLon_=e[0];var a=j(i,t);if(this.minLon_<this.maxLon_)this.toLonLatTransform_=a;else{var n=this.minLon_+this.maxLon_/2;this.maxLon_+=360,this.toLonLatTransform_=function(s,m,d){for(var L=d||2,l=a(s,m,L),_=0,v=l.length;_<v;_+=L)l[_]<n&&(l[_]+=360);return l}}this.fromLonLatTransform_=j(t,i);var r=A([this.minLon_,this.minLat_,this.maxLon_,this.maxLat_],this.fromLonLatTransform_,void 0,8);this.minX_=r[0],this.maxX_=r[2],this.minY_=r[1],this.maxY_=r[3],this.bottomLeft_=this.fromLonLatTransform_([this.minLon_,this.minLat_]),this.bottomRight_=this.fromLonLatTransform_([this.maxLon_,this.minLat_]),this.topLeft_=this.fromLonLatTransform_([this.minLon_,this.maxLat_]),this.topRight_=this.fromLonLatTransform_([this.maxLon_,this.maxLat_]),this.projectionCenterLonLat_=this.toLonLatTransform_(k(i.getExtent())),isNaN(this.projectionCenterLonLat_[1])&&(this.projectionCenterLonLat_[1]=Math.abs(this.maxLat_)>=Math.abs(this.minLat_)?this.maxLat_:this.minLat_),this.projection_=i},o}(at),Pt=Mt;const Et={id:"map",class:"map__x"},Tt={setup(g){const o=U(),i=K(null);function t(){i.value=new pt({target:"map",layers:[new et({source:new vt({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Road"})})],view:new ct({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:6})}),new Pt({strokeStyle:new C({color:"rgba(255, 120, 0, .5)",width:2,lineDash:[4]}),showLabels:!0}).setMap(i.value)}return J(()=>{o.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Graticule/Graticule.vue"),t()}),(e,a)=>($(),q("div",Et))}};var Yt=ut(Tt,[["__scopeId","data-v-5f1add08"]]);export{Yt as default};
