(this.webpackJsonpwhat_should_we_eat_map=this.webpackJsonpwhat_should_we_eat_map||[]).push([[0],{39:function(A,e,t){},43:function(A,e,t){},63:function(A,e,t){"use strict";t.r(e);var g,a=t(0),o=t.n(a),n=t(13),w=t.n(n),i=(t(39),t(30)),c=t(5),B=t(1),s=t(31),C=t(2),Q={locationState:Object(C.b)({key:"locationState",default:{latitude:37.56080754022743,longitude:126.92737579814681,page:1}}),keywordState:Object(C.b)({key:"keywordState",default:{keyword:void 0}}),paginationState:Object(C.b)({key:"paginationState",default:{page:1}}),overlayState:Object(C.b)({key:"overlayState",default:{id:null}}),eventState:Object(C.b)({key:"eventState",default:{event:null}})},D=t(9),E=(t(43),t(10)),r=t.n(E),l=t(4);r.a.defaults.baseURL="https://dapi.kakao.com",r.a.defaults.headers.common.Authorization="KakaoAK ".concat("a1bb21eded32312668a86a08d508c1b4"),r.a.defaults.headers.common["X-Requested-With"]="curl";var u=window.kakao,d=s.a.div(g||(g=Object(i.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),I=function(){var A=Object(C.d)(Q.locationState),e=Object(C.d)(Q.keywordState),t=Object(C.c)(Q.overlayState),g=Object(B.a)(t,2),o=g[0],n=g[1],w=Object(a.useState)(),i=Object(B.a)(w,2),s=i[0],E=i[1],I=Object(a.useState)(),p=Object(B.a)(I,2),v=p[0],h=p[1],f=null,j=Object(a.useState)([]),O=Object(B.a)(j,2),k=O[0],M=O[1],Y="\ub9db\uc9d1",m=Object(D.get)(A,"latitude"),b=Object(D.get)(A,"longitude"),F=Object(D.get)(A,"page"),J=[],G=[];Object(a.useEffect)((function(){if(s){var A=function(){f&&f.setMap(null),n(null),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"selectedPlace",message:null}))};return u.maps.event.addListener(s,"click",A),function(){u.maps.event.removeListener(s,"click",A)}}}),[s,f]),Object(a.useEffect)((function(){var A=document.getElementById("map");if(u){var e={center:new u.maps.LatLng(m,b),level:3};E(new u.maps.Map(A,e))}}),[u]),Object(a.useEffect)((function(){var A=k.find((function(A){return A.id===o}));if(console.log(A),A){var e='<div class ="label"><span class="left"></span><span class="center">'.concat(A.title,'</span><span class="right"></span></div>'),t=new u.maps.CustomOverlay({position:A.position,content:e});console.log(t),f&&f.setMap(null),t.setMap(s),f=t}}),[o,s,f]),Object(a.useEffect)((function(){console.log(A),console.log(m),console.log(b),console.log(e),console.log(Y),console.log(F),1===F&&h([]),s&&R()}),[e,A,s,F]);var R=function(){3===F&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"lastPage"})),r.a.get("/v2/local/search/category.json?query=".concat(Y,"&category_group_code=FD6&y=").concat(m,"&x=").concat(b,"&radius=20000&page=").concat(F,"&sort=distance")).then((function(A){var e;A.data.documents.length>0?(e=1===F?Object(c.a)(A.data.documents):[].concat(Object(c.a)(v),Object(c.a)(A.data.documents)),h(e),P(e,A.status),A.data.documents.length<15&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"lastPage"}))):(y(),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:[]})))})).catch((function(A){return console.log(A)}))},P=function(A,e){if(200===e)window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:A})),S(A);else{if(e===u.maps.services.Status.ZERO_RESULT)return void alert("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");if(e===u.maps.services.Status.ERROR)return void alert("\uac80\uc0c9 \uacb0\uacfc \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}},S=function(A){var e=new u.maps.LatLngBounds;y(),console.log(A),console.log(A.length);for(var t=0;t<A.length;t++){var g,a,o=new u.maps.LatLng(A[t].y,A[t].x);K(o,t,null===(g=A[t])||void 0===g?void 0:g.place_name,null===(a=A[t])||void 0===a?void 0:a.id);e.extend(o)}s.setBounds(e)},K=function(A,e,t,g){var a=L(),o=new u.maps.Marker({position:A,image:a});o.setMap(s);var n='<div class ="label"><span class="left"></span><span class="center">'.concat(t,'</span><span class="right"></span></div>'),w=new u.maps.CustomOverlay({position:A,content:n});u.maps.event.addListener(o,"click",(function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"selectedPlace",message:e})),f&&f.setMap(null),w.setMap(s),f=w}));var i={title:t,position:A,id:g};return G.push(i),M(G),J.push(o),o},y=function(){for(var A=0;A<J.length;A++)J[A].setMap(null);J=[]},L=function(){var A=new u.maps.Size(32,32),e={offset:new u.maps.Point(16,16)};return new u.maps.MarkerImage("data:image/png;base64,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",A,e)};return Object(l.jsx)(d,{id:"map"})},p=function(A){var e=A.children,t=Object(C.c)(Q.locationState),g=Object(B.a)(t,2),n=(g[0],g[1]),w=Object(C.c)(Q.keywordState),i=Object(B.a)(w,2),c=(i[0],i[1]),s=Object(C.c)(Q.overlayState),D=Object(B.a)(s,2),E=(D[0],D[1]),r=Object(C.c)(Q.eventState),u=Object(B.a)(r,2);u[0],u[1];Object(a.useEffect)((function(){return window.ReactNativeWebView&&(document.addEventListener("message",d),window.addEventListener("message",d)),function(){document.removeEventListener("message",d),window.removeEventListener("message",d)}}),[]);var d=function(A){console.log(JSON.parse(A.data));var e=JSON.parse(A.data),t=e.data,g=e.type;"Location"===g&&n(t),"Keyword"===g&&(console.log(t.keyword),""===t.keyword?c({keyword:"\ub9db\uc9d1"}):c({keyword:"".concat(t.keyword," \ub9db\uc9d1")})),"CardClick"===g&&(console.log(t),E(t.id))};return Object(l.jsx)(o.a.Fragment,{children:e})};var v=function(){return Object(l.jsx)(C.a,{children:Object(l.jsx)(p,{children:Object(l.jsx)(I,{})})})},h=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(e){var t=e.getCLS,g=e.getFID,a=e.getFCP,o=e.getLCP,n=e.getTTFB;t(A),g(A),a(A),o(A),n(A)}))};w.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),h()}},[[63,1,2]]]);
//# sourceMappingURL=main.330ccb96.chunk.js.map