(this.webpackJsonpwhat_should_we_eat_map=this.webpackJsonpwhat_should_we_eat_map||[]).push([[0],{37:function(e,t,a){},41:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n,o=a(0),c=a.n(o),s=a(11),i=a.n(s),r=(a(37),a(28)),d=a(1),l=a(29),u=a(2),p={locationState:Object(u.b)({key:"locationState",default:{latitude:37.56080754022743,longitude:126.92737579814681}}),keywordState:Object(u.b)({key:"keywordState",default:{keyword:void 0}}),paginationState:Object(u.b)({key:"paginationState",default:{page:1}})},w=a(15),g=(a(41),a(8)),f=a.n(g),m=a(4);f.a.defaults.baseURL="https://dapi.kakao.com",f.a.defaults.headers.common.Authorization="KakaoAK ".concat("a1bb21eded32312668a86a08d508c1b4"),f.a.defaults.headers.common["X-Requested-With"]="curl";var v=window.kakao,b=l.a.div(n||(n=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),O=function(){var e,t=Object(u.d)(p.locationState),a=Object(u.d)(p.keywordState),n=Object(u.c)(p.paginationState),c=Object(o.useState)(),s=Object(d.a)(c,2),i=s[0],r=s[1],l="\ub9db\uc9d1",g=Object(w.get)(t,"latitude"),O=Object(w.get)(t,"longitude"),j=Object(w.get)(n,"page"),h=[],y=new v.maps.Size(36,37);Object(o.useEffect)((function(){if(i){return v.maps.event.addListener(i,"click",(function(){e&&e.setMap(null),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"selectedPlace",message:null}))})),function(){v.maps.event.remove()}}}),[i,e]),Object(o.useEffect)((function(){var e=document.getElementById("map");if(v){var t={center:new v.maps.LatLng(g,O),level:3};r(new v.maps.Map(e,t))}}),[v]),Object(o.useEffect)((function(){console.log(t),console.log(g),console.log(O),console.log(a),console.log(l),console.log(j),i&&S()}),[a,t,i]);var S=function(){f.a.get("/v2/local/search/keyword.json?query=".concat(l,"&y=").concat(g,"&x=").concat(O,"&radius=20000&").concat(j)).then((function(e){if(e.data.documents.length>0){var t=e.data.documents.sort((function(e,t){return e.distance-t.distance}));console.log(t),k(e.data.documents,e.status)}else N(),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:[]}))})).catch((function(e){return console.log(e)}))},k=function(e,t){if(200===t)window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:e})),L(e);else{if(t===v.maps.services.Status.ZERO_RESULT)return void alert("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");if(t===v.maps.services.Status.ERROR)return void alert("\uac80\uc0c9 \uacb0\uacfc \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}},L=function(e){var t=new v.maps.LatLngBounds;N();for(var a=0;a<e.length;a++){var n,o=new v.maps.LatLng(e[a].y,e[a].x);R(o,a,null===(n=e[a])||void 0===n?void 0:n.place_name);t.extend(o)}i.setBounds(t)},R=function(t,a,n){var o={spriteSize:new v.maps.Size(36,691),spriteOrigin:new v.maps.Point(0,46*a+10),offset:new v.maps.Point(13,37)},c=E(y,"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",o),s=new v.maps.Marker({position:t,image:c});s.setMap(i);var r='<div class ="label"><span class="left"></span><span class="center">'.concat(n,'</span><span class="right"></span></div>'),d=new v.maps.CustomOverlay({position:t,content:r});return v.maps.event.addListener(s,"click",(function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"selectedPlace",message:a})),e&&e.setMap(null),d.setMap(i),e=d})),h.push(s),s},N=function(){for(var e=0;e<h.length;e++)h[e].setMap(null);h=[]},E=function(e,t,a){return new v.maps.MarkerImage(t,e,a)};return Object(m.jsx)(b,{id:"map"})},j=function(e){var t=e.children,a=Object(u.c)(p.locationState),n=Object(d.a)(a,2),s=(n[0],n[1]),i=Object(u.c)(p.keywordState),r=Object(d.a)(i,2),l=(r[0],r[1]),w=Object(u.c)(p.paginationState),g=Object(d.a)(w,2),f=(g[0],g[1]);Object(o.useEffect)((function(){return window.ReactNativeWebView&&(document.addEventListener("message",v),window.addEventListener("message",v)),function(){document.removeEventListener("message",v),window.removeEventListener("message",v)}}),[]);var v=function(e){console.log(JSON.parse(e.data));var t=JSON.parse(e.data),a=t.data,n=t.type;"Location"===n&&(f({page:1}),s(a)),"Keyword"===n&&(console.log(a.keyword),""===a.keyword?l({keyword:"\ub9db\uc9d1"}):l({keyword:"".concat(a.keyword," \ub9db\uc9d1")})),"Page"===n&&f(a)};return Object(m.jsx)(c.a.Fragment,{children:t})};var h=function(){return Object(m.jsx)(u.a,{children:Object(m.jsx)(j,{children:Object(m.jsx)(O,{})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),c(e),s(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),y()}},[[61,1,2]]]);
//# sourceMappingURL=main.bd67c109.chunk.js.map