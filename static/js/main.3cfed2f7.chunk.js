(this.webpackJsonpwhat_should_we_eat_map=this.webpackJsonpwhat_should_we_eat_map||[]).push([[0],{23:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a,s=n(0),i=n.n(s),o=n(7),c=n.n(o),r=(n(23),n(14)),d=n(1),u=n(15),l=n(3),m={locationState:Object(l.b)({key:"locationState",default:{latitude:37.56080754022743,longitude:126.92737579814681}}),keywordState:Object(l.b)({key:"keywordState",default:{keyword:"\ub9db\uc9d1"}})},p=(n(25),n(28),n(2)),v=window.kakao,f=u.a.div(a||(a=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),h=function(){var e=Object(l.d)(m.locationState),t=Object(l.d)(m.keywordState),n=Object(s.useState)(),a=Object(d.a)(n,2),i=a[0],o=a[1],c=Object(s.useState)(),r=Object(d.a)(c,2),u=r[0],h=r[1],j=[];Object(s.useEffect)((function(){var t=document.getElementById("map");if(v){var n={center:new v.maps.LatLng(e.latitude,e.longitude),level:1};o(new v.maps.Map(t,n)),h(new v.maps.InfoWindow({zIndex:1}))}}),[v]),Object(s.useEffect)((function(){var e=new v.maps.services.Places;w(e)}),[t]);var w=function(e){var n=t;console.log(n),e.keywordSearch(n,b)},b=function(e,t,n,a){if(t===v.maps.services.Status.OK)window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"placeData",message:e})),g(e),function(e){var t,n=document.getElementById("pagination"),a=document.createDocumentFragment();for(;n.hasChildNodes();)n.removeChild(n.lastChild);for(t=1;t<=e.last;t++){var s=document.createElement("a");s.href="#",s.innerHTML=t,t===e.current?s.className="on":s.onclick=function(t){return function(){e.gotoPage(t)}}(t),a.appendChild(s)}n.appendChild(a)}(n);else{if(t===v.maps.services.Status.ZERO_RESULT)return void alert("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");if(t===v.maps.services.Status.ERROR)return void alert("\uac80\uc0c9 \uacb0\uacfc \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}},g=function(e){var t=document.getElementById("placesList"),n=document.getElementById("menu_wrap"),a=document.createDocumentFragment(),s=new v.maps.LatLngBounds;!function(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}(t),function(){for(var e=0;e<j.length;e++)j[e].setMap(null);j=[]}();for(var o=function(t){var n=new v.maps.LatLng(e[t].y,e[t].x),i=y(n,t),o=O(t,e[t]);s.extend(n),function(e,t){v.maps.event.addListener(e,"mouseover",(function(){x(e,t)})),v.maps.event.addListener(e,"mouseout",(function(){u.close()})),o.onmouseover=function(){x(e,t)},o.onmouseout=function(){u.close()}}(i,e[t].place_name),a.appendChild(o)},c=0;c<e.length;c++)o(c);t.appendChild(a),n.scrollTop=0,i.setBounds(s)},O=function(e,t){var n=document.createElement("li"),a='<span class="markerbg marker_'+(e+1)+'"></span><div class="info">   <h5>'+t.place_name+"</h5>";return t.road_address_name?a+="    <span>"+t.road_address_name+'</span>   <span class="jibun gray">'+t.address_name+"</span>":a+="    <span>"+t.address_name+"</span>",a+='  <span class="tel">'+t.phone+"</span></div>",n.innerHTML=a,n.className="item",n},y=function(e,t,n){var a=new v.maps.Size(36,37),s={spriteSize:new v.maps.Size(36,691),spriteOrigin:new v.maps.Point(0,46*t+10),offset:new v.maps.Point(13,37)},o=new v.maps.MarkerImage("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",a,s),c=new v.maps.Marker({position:e,image:o});return c.setMap(i),j.push(c),c};var x=function(e,t){var n='<div style="padding:5px;z-index:1;">'+t+"</div>";u.setContent(n),u.open(i,e)};return Object(p.jsx)(f,{id:"map",children:Object(p.jsxs)("div",{className:"map_wrap",children:[Object(p.jsx)("div",{id:"map",style:{height:"100%",width:"100%",position:"relative",overflow:"hidden"}}),Object(p.jsxs)("div",{id:"menu_wrap",className:"bg_white",style:{zIndex:20},children:[Object(p.jsx)("div",{className:"option",children:Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:"searchPlaces(); return false;",children:["\ud0a4\uc6cc\ub4dc : ",Object(p.jsx)("input",{type:"text",value:t,id:"keyword",size:"15"}),Object(p.jsx)("button",{type:"submit",children:"\uac80\uc0c9\ud558\uae30"})]})})}),Object(p.jsx)("hr",{}),Object(p.jsx)("ul",{id:"placesList"}),Object(p.jsx)("div",{id:"pagination"})]})]})})},j=function(e){var t=e.children,n=Object(l.c)(m.locationState),a=Object(d.a)(n,2),o=(a[0],a[1]),c=Object(l.c)(m.keywordState),r=Object(d.a)(c,2),u=(r[0],r[1]);Object(s.useEffect)((function(){return window.ReactNativeWebView&&(document.addEventListener("message",v),window.addEventListener("message",v)),function(){document.removeEventListener("message",v),window.removeEventListener("message",v)}}),[]);var v=function(e){console.log(JSON.parse(e.data));var t=JSON.parse(e.data),n=t.data,a=t.type;"Location"===a&&o((function(){return n})),"Keyword"===a&&(console.log(n.keyword),u((function(){return"".concat(n.keyword," \ub9db\uc9d1")})))};return Object(p.jsx)(i.a.Fragment,{children:t})};var w=function(){return Object(p.jsx)(l.a,{children:Object(p.jsx)(j,{children:Object(p.jsx)(h,{})})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),b()}},[[32,1,2]]]);
//# sourceMappingURL=main.3cfed2f7.chunk.js.map