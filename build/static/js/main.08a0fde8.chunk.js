(this.webpackJsonpwhat_should_we_eat_map=this.webpackJsonpwhat_should_we_eat_map||[]).push([[0],{39:function(e,t,a){},43:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n,o=a(0),c=a.n(o),s=a(12),i=a.n(s),r=(a(39),a(30)),d=a(7),l=a(1),u=a(31),p=a(2),w={locationState:Object(p.b)({key:"locationState",default:{latitude:37.56080754022743,longitude:126.92737579814681}}),keywordState:Object(p.b)({key:"keywordState",default:{keyword:void 0}}),paginationState:Object(p.b)({key:"paginationState",default:{page:1}})},g=a(17),m=(a(43),a(9)),b=a.n(m),f=a(4);b.a.defaults.baseURL="https://dapi.kakao.com",b.a.defaults.headers.common.Authorization="KakaoAK ".concat("a1bb21eded32312668a86a08d508c1b4"),b.a.defaults.headers.common["X-Requested-With"]="curl";var v=window.kakao,O=u.a.div(n||(n=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),j=function(){var e,t=Object(p.d)(w.locationState),a=Object(p.d)(w.keywordState),n=Object(p.d)(w.paginationState),c=Object(o.useState)(),s=Object(l.a)(c,2),i=s[0],r=s[1],u=Object(o.useState)(),m=Object(l.a)(u,2),j=m[0],h=m[1],y="\ub9db\uc9d1",S=Object(g.get)(t,"latitude"),k=Object(g.get)(t,"longitude"),L=Object(g.get)(n,"page"),R=[],N=new v.maps.Size(36,37);Object(o.useEffect)((function(){if(i){return v.maps.event.addListener(i,"click",(function(){e&&e.setMap(null),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"selectedPlace",message:null}))})),function(){v.maps.event.remove()}}}),[i,e]),Object(o.useEffect)((function(){var e=document.getElementById("map");if(v){var t={center:new v.maps.LatLng(S,k),level:3};r(new v.maps.Map(e,t))}}),[v]),Object(o.useEffect)((function(){console.log(t),console.log(S),console.log(k),console.log(a),console.log(y),console.log(L),1===L&&h([]),i&&E()}),[a,t,i,L]);var E=function(){b.a.get("/v2/local/search/keyword.json?query=".concat(y,"&y=").concat(S,"&x=").concat(k,"&radius=20000&").concat(L)).then((function(e){if(e.data.documents.length>0){var t=[].concat(Object(d.a)(j),Object(d.a)(e.data.documents));h(t),M(e.data.documents,e.status)}else W(),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:[]}))})).catch((function(e){return console.log(e)}))},M=function(e,t){if(200===t)window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:e})),_(e);else{if(t===v.maps.services.Status.ZERO_RESULT)return void alert("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");if(t===v.maps.services.Status.ERROR)return void alert("\uac80\uc0c9 \uacb0\uacfc \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}},_=function(e){var t=new v.maps.LatLngBounds;W();for(var a=0;a<e.length;a++){var n,o=new v.maps.LatLng(e[a].y,e[a].x);x(o,a,null===(n=e[a])||void 0===n?void 0:n.place_name);t.extend(o)}i.setBounds(t)},x=function(t,a,n){var o={spriteSize:new v.maps.Size(36,691),spriteOrigin:new v.maps.Point(0,46*a+10),offset:new v.maps.Point(13,37)},c=V(N,"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",o),s=new v.maps.Marker({position:t,image:c});s.setMap(i);var r='<div class ="label"><span class="left"></span><span class="center">'.concat(n,'</span><span class="right"></span></div>'),d=new v.maps.CustomOverlay({position:t,content:r});return v.maps.event.addListener(s,"click",(function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"selectedPlace",message:a})),e&&e.setMap(null),d.setMap(i),e=d})),R.push(s),s},W=function(){for(var e=0;e<R.length;e++)R[e].setMap(null);R=[]},V=function(e,t,a){return new v.maps.MarkerImage(t,e,a)};return Object(f.jsx)(O,{id:"map"})},h=function(e){var t=e.children,a=Object(p.c)(w.locationState),n=Object(l.a)(a,2),s=(n[0],n[1]),i=Object(p.c)(w.keywordState),r=Object(l.a)(i,2),d=(r[0],r[1]),u=Object(p.c)(w.paginationState),g=Object(l.a)(u,2),m=(g[0],g[1]);Object(o.useEffect)((function(){return window.ReactNativeWebView&&(document.addEventListener("message",b),window.addEventListener("message",b)),function(){document.removeEventListener("message",b),window.removeEventListener("message",b)}}),[]);var b=function(e){console.log(JSON.parse(e.data));var t=JSON.parse(e.data),a=t.data,n=t.type;"Location"===n&&(m({page:1}),s(a)),"Keyword"===n&&(console.log(a.keyword),""===a.keyword?d({keyword:"\ub9db\uc9d1"}):d({keyword:"".concat(a.keyword," \ub9db\uc9d1")})),"Page"===n&&m(a)};return Object(f.jsx)(c.a.Fragment,{children:t})};var y=function(){return Object(f.jsx)(p.a,{children:Object(f.jsx)(h,{children:Object(f.jsx)(j,{})})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),c(e),s(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.08a0fde8.chunk.js.map