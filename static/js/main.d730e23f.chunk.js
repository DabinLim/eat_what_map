(this.webpackJsonpwhat_should_we_eat_map=this.webpackJsonpwhat_should_we_eat_map||[]).push([[0],{39:function(A,e,g){},43:function(A,e,g){},63:function(A,e,g){"use strict";g.r(e);var t,a=g(0),o=g.n(a),n=g(13),w=g.n(n),B=(g(39),g(30)),i=g(5),c=g(1),s=g(31),C=g(2),Q={locationState:Object(C.b)({key:"locationState",default:{latitude:37.56080754022743,longitude:126.92737579814681,page:1}}),keywordState:Object(C.b)({key:"keywordState",default:{keyword:void 0}}),paginationState:Object(C.b)({key:"paginationState",default:{page:1}}),overlayState:Object(C.b)({key:"overlayState",default:{id:null}})},D=g(9),E=(g(43),g(10)),r=g.n(E),l=g(4);r.a.defaults.baseURL="https://dapi.kakao.com",r.a.defaults.headers.common.Authorization="KakaoAK ".concat("a1bb21eded32312668a86a08d508c1b4"),r.a.defaults.headers.common["X-Requested-With"]="curl";var d=window.kakao,u=s.a.div(t||(t=Object(B.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),I=function(){var A,e=Object(C.d)(Q.locationState),g=Object(C.d)(Q.keywordState),t=Object(C.c)(Q.overlayState),o=Object(a.useState)(),n=Object(c.a)(o,2),w=n[0],B=n[1],s=Object(a.useState)(),E=Object(c.a)(s,2),I=E[0],h=E[1],p=Object(a.useState)(null),f=Object(c.a)(p,2),j=f[0],v=f[1],O=Object(a.useState)([]),k=Object(c.a)(O,2),M=k[0],Y=k[1],m="\ub9db\uc9d1",F=Object(D.get)(e,"latitude"),b=Object(D.get)(e,"longitude"),J=Object(D.get)(e,"page"),G=[],R=[];Object(a.useEffect)((function(){if(w){d.maps.event.addListener(w,"click",(function(){j&&j.setMap(null),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"selectedPlace",message:null}))}))}}),[w,j]),Object(a.useEffect)((function(){var A=document.getElementById("map");if(d){var e={center:new d.maps.LatLng(F,b),level:3};B(new d.maps.Map(A,e))}}),[d]),Object(a.useEffect)((function(){var e=M.find((function(A){return A.id===t}));if(console.log(M),e){var g='<div class ="label"><span class="left"></span><span class="center">'.concat(e.title,'</span><span class="right"></span></div>'),a=new d.maps.CustomOverlay({position:e.position,content:g});A&&A.setMap(null),a.setMap(w),v(a),A=a}}),[t]),Object(a.useEffect)((function(){console.log(e),console.log(F),console.log(b),console.log(g),console.log(m),console.log(J),1===J&&h([]),w&&P()}),[g,e,w,J]);var P=function(){3===J&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"lastPage"})),r.a.get("/v2/local/search/category.json?query=".concat(m,"&category_group_code=FD6&y=").concat(F,"&x=").concat(b,"&radius=20000&page=").concat(J,"&sort=distance")).then((function(A){var e;A.data.documents.length>0?(e=1===J?Object(i.a)(A.data.documents):[].concat(Object(i.a)(I),Object(i.a)(A.data.documents)),h(e),K(e,A.status),A.data.documents.length<15&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"lastPage"}))):(L(),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:[]})))})).catch((function(A){return console.log(A)}))},K=function(A,e){if(200===e)window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:A})),S(A);else{if(e===d.maps.services.Status.ZERO_RESULT)return void alert("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");if(e===d.maps.services.Status.ERROR)return void alert("\uac80\uc0c9 \uacb0\uacfc \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}},S=function(A){var e=new d.maps.LatLngBounds;L(),console.log(A),console.log(A.length);for(var g=0;g<A.length;g++){var t,a,o=new d.maps.LatLng(A[g].y,A[g].x);y(o,g,null===(t=A[g])||void 0===t?void 0:t.place_name,null===(a=A[g])||void 0===a?void 0:a.id);e.extend(o)}w.setBounds(e)},y=function(g,t,a,o){var n=U(),B=new d.maps.Marker({position:g,image:n});B.setMap(w);var i='<div class ="label"><span class="left"></span><span class="center">'.concat(a,'</span><span class="right"></span></div>'),c=new d.maps.CustomOverlay({position:g,content:i});d.maps.event.addListener(B,"click",(function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"selectedPlace",message:t})),A&&A.setMap(null),c.setMap(w),v(c),A=c}));var s={title:a,location:e,id:o};return R.push(s),Y(R),G.push(B),B},L=function(){for(var A=0;A<G.length;A++)G[A].setMap(null);G=[]},U=function(){var A=new d.maps.Size(32,32),e={offset:new d.maps.Point(16,16)};return new d.maps.MarkerImage("data:image/png;base64,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",A,e)};return Object(l.jsx)(u,{id:"map"})},h=function(A){var e=A.children,g=Object(C.c)(Q.locationState),t=Object(c.a)(g,2),n=(t[0],t[1]),w=Object(C.c)(Q.keywordState),B=Object(c.a)(w,2),i=(B[0],B[1]),s=Object(C.c)(Q.overlayState),D=Object(c.a)(s,2),E=(D[0],D[1]);Object(a.useEffect)((function(){return window.ReactNativeWebView&&(document.addEventListener("message",r),window.addEventListener("message",r)),function(){document.removeEventListener("message",r),window.removeEventListener("message",r)}}),[]);var r=function(A){console.log(JSON.parse(A.data));var e=JSON.parse(A.data),g=e.data,t=e.type;"Location"===t&&n(g),"Keyword"===t&&(console.log(g.keyword),""===g.keyword?i({keyword:"\ub9db\uc9d1"}):i({keyword:"".concat(g.keyword," \ub9db\uc9d1")})),"CardClick"===t&&(console.log(g),E(g.id))};return Object(l.jsx)(o.a.Fragment,{children:e})};var p=function(){return Object(l.jsx)(C.a,{children:Object(l.jsx)(h,{children:Object(l.jsx)(I,{})})})},f=function(A){A&&A instanceof Function&&g.e(3).then(g.bind(null,64)).then((function(e){var g=e.getCLS,t=e.getFID,a=e.getFCP,o=e.getLCP,n=e.getTTFB;g(A),t(A),a(A),o(A),n(A)}))};w.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}},[[63,1,2]]]);
//# sourceMappingURL=main.d730e23f.chunk.js.map