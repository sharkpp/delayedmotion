(window.webpackJsonpdelayedmotion=window.webpackJsonpdelayedmotion||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(57),a(58);var s=a(7),u=(a(59),a(109)),m=a(104),d=a(42),p=a.n(d),h=a(9),g=a(11),f=a(43),E=a(106),v=a(103),b=a(47),w=a(105),y=a(108),j=a(51),k=(a(84),0),O=1,S={UploadImage:0,SelectArea:1,DownloadImage:2},C=(a(85),function(e){var t=e.onNextStep,a=Object(n.useState)(k),r=Object(s.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),p=d[0],f=d[1],S=Object(n.useState)(!1),C=Object(s.a)(S,2),N=C[0],x=C[1],I=Object(n.useState)(!1),R=Object(s.a)(I,2),A=R[0],F=R[1],U=Object(j.a)({accept:"image/jpeg, image/png",onDrop:function(e){if(e[0]){var a=new FileReader;a.onload=function(){var e=new Image;e.src=a.result,e.onload=function(){t(e)}},a.readAsDataURL(e[0])}},disabled:A}),L=U.rejectedFiles,G=U.getRootProps,B=U.getInputProps,M=L.map((function(e){return l.a.createElement("li",{key:e.path},e.path," \u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002")})),W=Object(n.useCallback)((function(){F(!0),x(!1);var e=new Image;e.crossOrigin="anonymous",e.src="https://api-gw98.herokuapp.com/"+p,e.onload=function(a){F(!1),t(e)},e.onerror=function(e){F(!1),x(!0)}}),[t,p]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a.Header,null,l.a.createElement(E.a,{variant:"tabs",activeKey:c,onSelect:function(e){return o(e)}},l.a.createElement(E.a.Item,null,l.a.createElement(E.a.Link,{eventKey:k},"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9")),l.a.createElement(E.a.Item,null,l.a.createElement(E.a.Link,{eventKey:O},"URL\u3092\u6307\u5b9a")))),k===+c&&l.a.createElement(u.a.Body,null,l.a.createElement("div",G({className:"dropzone"+(A?" disabled":"")}),l.a.createElement("input",B()),l.a.createElement(h.a,{icon:g.c,size:"4x"}),l.a.createElement("p",null,"\u753b\u50cf\u3092\u3053\u3053\u306b\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u304b\u3001\u30af\u30ea\u30c3\u30af\u3057\u3066\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"),l.a.createElement("em",null,"jpeg \u3082\u3057\u304f\u306f png \u306e\u307f\u6307\u5b9a\u53ef\u80fd)")),l.a.createElement("ol",null,M)),O===+c&&l.a.createElement(u.a.Body,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(b.a,{placeholder:"\u753b\u50cf\u306eURL",value:p,onChange:function(e){x(!1),f(e.target.value)},isInvalid:N,readOnly:A}),l.a.createElement(v.a.Append,null,l.a.createElement(m.a,{variant:"outline-primary",onClick:W,disabled:!p||A},A&&l.a.createElement(w.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"btn-inner-spinner"}),"\u753b\u50cf\u3092\u9078\u629e")),l.a.createElement(y.a.Control.Feedback,{type:"invalid"},"\u6307\u5b9a\u3057\u305fURL\u306f\u753b\u50cf\u3068\u3057\u3066\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f"))))}),N=a(107),x=a(49),I=a.n(x),R=(a(88),a(89),function(e){var t=e.onNextStep,a=e.image,r=Object(n.useState)(Object(n.createRef)()),c=Object(s.a)(r,1)[0],o=Object(n.useState)(Object(n.createRef)()),i=Object(s.a)(o,1)[0],d=Object(n.useState)(Object(n.createRef)()),p=Object(s.a)(d,1)[0],h=Object(n.useState)({}),g=Object(s.a)(h,2),f=g[0],E=g[1];Object(n.useEffect)((function(){var e=c.current;e.width=a.width,e.height=a.height,e.getContext("2d").drawImage(a,0,0,a.width,a.height);var t=p.current;t.width=a.width,t.height=a.height}),[a,c,p]);var v=Object(n.useCallback)((function(){var e=Object.assign({},f,{width:5*Math.floor(f.width/5)+1,height:5*Math.floor(f.height/5)+1}),t=c.current,n=t.getContext("2d"),l=a.width/t.clientWidth,r=p.current,o=r.getContext("2d");o.drawImage(a,0,0,a.width,a.height);var s=Math.floor(e.width/5),u=Math.floor(e.height/5),m=i.current;m.width=s,m.height=u;var d=m.getContext("2d");if(m.width<1||m.height<1)n.drawImage(r,0,0);else{d.fillStyle="#000000",d.fillRect(0,0,m.width,m.height),d.fillStyle="#FF0000",d.beginPath(),d.ellipse(m.width/2,m.height/2,m.width/2*.9,m.height/2*.9,0,0,2*Math.PI),d.fill();var h=d.getImageData(0,0,m.width,m.height).data,g=5*l,v=e.x*l,b=e.y*l;o.fillStyle="rgb(0,0,0,0.5)",o.fillRect(e.x*l,e.y*l,Math.floor((e.width+1)/5)*g,Math.floor((e.height+1)/5)*g);for(var w=b,y=0;y<u;w+=g,++y)for(var j=v,k=0;k<s;j+=g,++k)0===h[4*(k+y*s)+0]&&Math.random()<.3&&(o.fillStyle="#FFFFFF",o.fillRect(j,w,g+l,g+l));n.drawImage(r,0,0),E(e)}}),[a,c,p,i,f]),b=Object(n.useCallback)((function(){c.current.toBlob((function(e){t(e)}),"image/jpeg",.9)}),[c,t]),w=f.width&&f.height;return l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Text,null,l.a.createElement(y.a.Group,null,!!w&&l.a.createElement(m.a,{onClick:b},"\u9078\u629e\u5b8c\u4e86"),!w&&l.a.createElement(N.a,{variant:"info"},"\u63fa\u3089\u3059\u7bc4\u56f2\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044")),l.a.createElement(I.a,{renderComponent:l.a.createElement("canvas",{ref:c,style:{width:"100%"}}),crop:f,onChange:function(e){return E(e)},onComplete:function(){return v()}})),l.a.createElement("canvas",{ref:p,style:{width:"100%",display:"none"}}),l.a.createElement("canvas",{ref:i,style:{display:"none"}}))}),A=a(48),F=(a(97),a(98)),U=function(e){var t=e.image,a=e.onNextStep,r=Object(n.useState)(""),c=Object(s.a)(r,2),o=c[0],i=c[1];Object(n.useEffect)((function(){var e=new FileReader;e.onload=function(e){i(e.target.result)},e.readAsDataURL(t)}),[t]);var d=Object(n.useCallback)((function(){F(t,"sample.jpg","image/jpeg")}),[t]),p=Object(n.useCallback)((function(){a()}),[a]);return l.a.createElement(u.a.Body,null,l.a.createElement(y.a.Row,null,l.a.createElement(y.a.Group,{as:A.a},l.a.createElement(m.a,{onClick:d},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),l.a.createElement(y.a.Group,{as:A.a},l.a.createElement(m.a,{variant:"link",onClick:p},"\u65b0\u898f\u4f5c\u6210"))),l.a.createElement("div",{className:"image-preview"},l.a.createElement("img",{src:o,className:"layout",alt:"layout"}),l.a.createElement("img",{src:o,className:"main",alt:"\u751f\u6210\u753b\u50cf",style:{left:0,top:0}})))},L=(a(99),function(e){var t=e.open,a=e.caption,n=e.title,r=e.onClose,c=e.children;return l.a.createElement("div",{className:"simple-popup ".concat(t?"open":"close")},l.a.createElement("div",{className:"background"}),l.a.createElement("div",null,l.a.createElement(u.a,null,!!a&&l.a.createElement(u.a.Header,null,a),l.a.createElement(u.a.Body,null,!!n&&l.a.createElement(u.a.Title,null,n),l.a.createElement("div",{className:"card-text",style:{height:"calc(100% - 1rem".concat(n?" - 2rem":""," - 2.5rem)")}},c),l.a.createElement(m.a,{variant:"primary",onClick:function(){r&&r()}},"\u9589\u3058\u308b")))))}),G=(a(100),/(\[(.+?)\]\((.+?)\))/g),B=/^[\uff10-\uff19]/,M=function(){return l.a.createElement("div",{className:"privacy-policy"},"\n\uff11\uff0e\u57fa\u672c\u7684\u8003\u3048\u65b9\n\u63fa\u308c\u308b\u203b\u203b\u753b\u50cf\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\uff08\u4ee5\u4e0b\u300c\u5f53\u30b5\u30a4\u30c8\u300d\u3068\u3044\u3046\u3002\uff09\u306b\u304a\u3044\u3066\u3001\u63d0\u4f9b\u3059\u308b\u30b5\u30fc\u30d3\u30b9\uff08\u5f53\u30b5\u30a4\u30c8\u306b\u3088\u308b\u60c5\u5831\u63d0\u4f9b\u3001\u5404\u7a2e\u610f\u898b\u306e\u53d7\u4ed8\u7b49\uff09\u306e\u5186\u6ed1\u306a\u904b\u55b6\u306b\u5fc5\u8981\u306a\u7bc4\u56f2\u3067\u3001\u5f53\u30b5\u30a4\u30c8\u3092\u5229\u7528\u3055\u308c\u308b\u7686\u69d8\u306e\u60c5\u5831\u3092\u53ce\u96c6\u3057\u3066\u3044\u307e\u3059\u3002\u53ce\u96c6\u3057\u305f\u60c5\u5831\u306f\u5229\u7528\u76ee\u7684\u306e\u7bc4\u56f2\u5185\u3067\u9069\u5207\u306b\u53d6\u308a\u6271\u3044\u307e\u3059\u3002\n\n\uff12\uff0e\u53ce\u96c6\u3059\u308b\u60c5\u5831\u306e\u7bc4\u56f2\n\uff08\uff11\uff09 \u5f53\u30b5\u30a4\u30c8\u3067\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30c9\u30e1\u30a4\u30f3\u540d\u3001\uff29\uff30\u30a2\u30c9\u30ec\u30b9\u3001\u5f53\u30b5\u30a4\u30c8\u306e\u95b2\u89a7\u7b49\u306e\u60c5\u5831\uff08\u4ee5\u4e0b\u300c\u5229\u7528\u8005\u306e\u60c5\u5831\u300d\u3068\u3044\u3046\u3002\uff09\u3092\u81ea\u52d5\u7684\u306b\u53ce\u96c6\u3057\u307e\u3059\u3002\u306a\u304a\u3001\u30af\u30c3\u30ad\u30fc\uff08\u30b5\u30fc\u30d0\u5074\u3067\u5229\u7528\u8005\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b\u3001\u30b5\u30fc\u30d0\u304b\u3089\u5229\u7528\u8005\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u9001\u4fe1\u3055\u308c\u3001\u5229\u7528\u8005\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306b\u84c4\u7a4d\u3055\u308c\u308b\u60c5\u5831\uff09\u306f\u3001\u30e6\u30fc\u30b6\u30d3\u30ea\u30c6\u30a3\u30fc\u306e\u5411\u4e0a\u3092\u76ee\u7684\u3068\u3059\u308b\u5185\u5bb9\u306b\u9650\u5b9a\u3059\u308b\u3082\u306e\u3067\u3042\u308a\u3001\u500b\u4eba\u60c5\u5831\u306f\u4e00\u5207\u542b\u307f\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u5229\u7528\u8005\u306e\u30d6\u30e9\u30a6\u30b6\u306e\u8a2d\u5b9a\u306b\u3088\u308a\u30af\u30c3\u30ad\u30fc\u306e\u6a5f\u80fd\u3092\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\n\uff13\uff0e\u5229\u7528\u76ee\u7684\n\uff08\uff11\uff09 \uff12\uff0e\uff08\uff11\uff09\u306b\u304a\u3044\u3066\u53ce\u96c6\u3057\u305f\u60c5\u5831\u306f\u3001\u5f53\u30b5\u30a4\u30c8\u304c\u63d0\u4f9b\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u3092\u5186\u6ed1\u306b\u904b\u55b6\u3059\u308b\u305f\u3081\u306e\u53c2\u8003\u3068\u3057\u3066\u5229\u7528\u3057\u307e\u3059\u3002\n\n\uff08\uff12\uff09 \u5f53\u30b5\u30a4\u30c8\u3067\u306f\u3001\u30b5\u30a4\u30c8\u306e\u5229\u7528\u72b6\u6cc1\u3092\u628a\u63e1\u3059\u308b\u305f\u3081\u306b[Google Analytics](https://developers.google.com/analytics/?hl=ja)\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002Google Analytics \u306f\u3001\u30af\u30c3\u30ad\u30fc\u3092\u5229\u7528\u3057\u3066\u5229\u7528\u8005\u306e\u60c5\u5831\u3092\u53ce\u96c6\u3057\u307e\u3059\u3002[Google Analytics \u5229\u7528\u898f\u7d04\u306f\u3001\u3053\u3061\u3089](https://www.google.com/analytics/terms/jp.html)\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\n\n\uff14\uff0e\u5229\u7528\u53ca\u3073\u63d0\u4f9b\u306e\u5236\u9650\n\u5f53\u30b5\u30a4\u30c8\u3067\u306f\u3001\u6cd5\u4ee4\u306b\u57fa\u3065\u304f\u958b\u793a\u8acb\u6c42\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u4e0d\u6b63\u30a2\u30af\u30bb\u30b9\u3001\u8105\u8feb\u7b49\u306e\u9055\u6cd5\u884c\u70ba\u304c\u3042\u3063\u305f\u5834\u5408\u305d\u306e\u4ed6\u7279\u5225\u306e\u7406\u7531\u306e\u3042\u308b\u5834\u5408\u3092\u9664\u304d\u3001\u53ce\u96c6\u3057\u305f\u60c5\u5831\u3092\u300c\uff13\uff0e\u5229\u7528\u76ee\u7684\u300d\u4ee5\u5916\u306e\u76ee\u7684\u306e\u305f\u3081\u306b\u81ea\u3089\u5229\u7528\u3057\u3001\u53c8\u306f\u7b2c\u4e09\u8005\u306b\u63d0\u4f9b\u3044\u305f\u3057\u307e\u305b\u3093\u3002\u305f\u3060\u3057\u3001\u7d71\u8a08\u7684\u306b\u51e6\u7406\u3055\u308c\u305f\u5f53\u30b5\u30a4\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u60c5\u5831\u3001\u5229\u7528\u8005\u5c5e\u6027\u7b49\u306e\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u516c\u8868\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\n\uff15\uff0e\u5b89\u5168\u78ba\u4fdd\u306e\u63aa\u7f6e\n\uff08\uff11\uff09 \u5f53\u30b5\u30a4\u30c8\u306f\u3001\u53ce\u96c6\u3057\u305f\u60c5\u5831\u306e\u6f0f\u3048\u3044\u3001\u6ec5\u5931\u53c8\u306f\u304d\u640d\u306e\u9632\u6b62\u305d\u306e\u4ed6\u53ce\u96c6\u3057\u305f\u60c5\u5831\u306e\u9069\u5207\u306a\u7ba1\u7406\u306e\u305f\u3081\u306b\u5fc5\u8981\u306a\u63aa\u7f6e\u3092\u8b1b\u3058\u307e\u3059\u3002 \n\n\uff08\uff12\uff09 Google Analytics\u306b\u3088\u308a\u53ce\u96c6\u3055\u308c\u305f\u5229\u7528\u8005\u306e\u60c5\u5831\u306f\u3001Google\u793e\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306b\u57fa\u3065\u3044\u3066\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002[Google\u793e\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306f\u3001\u3053\u3061\u3089](http://www.google.com/intl/ja/policies/privacy/)\u3092\u3054\u89a7\u4e0b\u3055\u3044\u3002\u306a\u304a\u3001Google Analytics\u306e\u30b5\u30fc\u30d3\u30b9\u5229\u7528\u306b\u3088\u308b\u640d\u5bb3\u306b\u3064\u3044\u3066\u306f\u3001[@sharkpp](https://twitter.com/sharkpp)\u306f\u8cac\u4efb\u3092\u8ca0\u308f\u306a\u3044\u3082\u306e\u3068\u3057\u307e\u3059\u3002\n\n\uff16\uff0e\u81ea\u5df1\u306b\u95a2\u3059\u308b\u60c5\u5831\u306e\u958b\u793a\n\u5f53\u30b5\u30a4\u30c8\u306b\u304a\u3044\u3066\u306f\u3001\u6c0f\u540d\u3001\u751f\u5e74\u6708\u65e5\u305d\u306e\u4ed6\u4e00\u822c\u7684\u306b\u500b\u4eba\u3092\u8b58\u5225\u3067\u304d\u308b\u60c5\u5831\u3092\u53ce\u96c6\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\n\n\uff17\uff0e\u9069\u7528\u7bc4\u56f2\n\u672c\u65b9\u91dd\u306f\u3001\u5f53\u30b5\u30a4\u30c8\u306b\u304a\u3044\u3066\u306e\u307f\u9069\u7528\u3055\u308c\u3001\u5f53\u30b5\u30a4\u30c8\u306b\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u5916\u90e8\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066\u306f\u9069\u7528\u3055\u308c\u307e\u305b\u3093\u3002\n\n\uff18\uff0e\u305d\u306e\u4ed6\n\u5f53\u30b5\u30a4\u30c8\u306f\u3001\u672c\u65b9\u91dd\u3092\u6539\u5b9a\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u6539\u5b9a\u3059\u308b\u5834\u5408\u306f\u3001\u5f53\u30b5\u30a4\u30c8\u3067\u304a\u77e5\u3089\u305b\u3057\u307e\u3059\u3002\n\n\u5f53\u30b5\u30a4\u30c8\u306e\u5229\u7528\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u3001[@sharkpp](https://twitter.com/sharkpp)\u307e\u3067\u304a\u9858\u3044\u3057\u307e\u3059\u3002\n".split("\n").map((function(e,t){if(B.test(e))return l.a.createElement("h2",{key:"L".concat(t)},e);var a=e.replace(G,"\x7f$1\x7f").split("\x7f").map((function(e,t){var a=G.exec(e);return a?l.a.createElement(m.a,{key:"link".concat(t),variant:"link",target:"_blank",href:a[3]},a[2]," ",l.a.createElement(h.a,{icon:g.b})):e}));return l.a.createElement("p",{key:"L".concat(t)},a)})))},W=[{title:"\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"},{title:"\u63fa\u3089\u3059\u7bc4\u56f2\u3092\u8a2d\u5b9a"},{title:"\u5b8c\u6210"}];var z=function(){var e=Object(n.useState)(S.UploadImage),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),i=o[0],d=o[1],E=Object(n.useState)(null),v=Object(s.a)(E,2),b=v[0],w=v[1],y=Object(n.useState)(!1),j=Object(s.a)(y,2),k=j[0],O=j[1];return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"\u63fa\u308c\u308b",l.a.createElement("ruby",null,"\u203b",l.a.createElement("rp",null,"("),l.a.createElement("rt",null,"\u3061\u3087\u3081"),l.a.createElement("rp",null,")"),"\u203b",l.a.createElement("rp",null,"("),l.a.createElement("rt",null,"\u3061\u3087\u3081"),l.a.createElement("rp",null,")")),"\u753b\u50cf\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf"),l.a.createElement("div",{className:"stepper"},l.a.createElement(p.a,{steps:W,activeStep:a})),l.a.createElement(u.a,null,[l.a.createElement(C,{onNextStep:function(e){d(e),r(S.SelectArea)}}),l.a.createElement(R,{onNextStep:function(e){w(e),r(S.DownloadImage)},image:i}),l.a.createElement(U,{onNextStep:function(){r(S.UploadImage)},image:b})][a]),l.a.createElement("div",{className:"footer"},l.a.createElement(m.a,{variant:"link",size:"sm",onClick:function(){return O(!0)}},l.a.createElement(h.a,{icon:g.d})," \u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc"),l.a.createElement(m.a,{variant:"link",size:"sm",target:"_blank",href:"https://twitter.com/sharkpp"},l.a.createElement(h.a,{icon:f.a})," @sharkpp"),l.a.createElement(m.a,{variant:"link",size:"sm",target:"_blank",href:"https://github.com/sharkpp/delayedmotion/issues/new"},l.a.createElement(h.a,{icon:g.a})," \u4e0d\u5177\u5408\u5831\u544a")),l.a.createElement(L,{open:k,onClose:function(){return O(!1)},caption:"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc"},l.a.createElement(M,null)))};c.a.render(l.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://sharkpp.github.io/delayedmotion",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("https://sharkpp.github.io/delayedmotion","/service-worker.js");o?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}({onUpdate:function(e){console.log("onUpdate",e)},onSuccess:function(e){console.log("onSuccess",e)}})},52:function(e,t,a){e.exports=a(101)},58:function(e,t,a){},59:function(e,t,a){},85:function(e,t,a){},89:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.24ccbb12.chunk.js.map