(window.webpackJsonpdelayedmotion=window.webpackJsonpdelayedmotion||[]).push([[0],{52:function(e,t,a){e.exports=a(99)},58:function(e,t,a){},59:function(e,t,a){},85:function(e,t,a){},89:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(57),a(58);var i=a(7),o=(a(59),a(107)),m=a(102),u=a(42),s=a.n(u),d=a(14),h=a(18),p=a(43),g=a(104),b=a(101),f=a(47),E=a(103),v=a(105),w=a(51),j=(a(84),0),O=1,y={UploadImage:0,SelectArea:1,DownloadImage:2},k=(a(85),function(e){var t=e.onNextStep,a=Object(n.useState)(j),r=Object(i.a)(a,2),c=r[0],u=r[1],s=Object(n.useState)(""),p=Object(i.a)(s,2),y=p[0],k=p[1],S=Object(n.useState)(!1),C=Object(i.a)(S,2),I=C[0],x=C[1],N=Object(n.useState)(!1),R=Object(i.a)(N,2),F=R[0],M=R[1],U=Object(w.a)({accept:"image/jpeg, image/png",onDrop:function(e){if(e[0]){var a=new FileReader;a.onload=function(){var e=new Image;e.src=a.result,e.onload=function(){t(e)}},a.readAsDataURL(e[0])}},disabled:F}),B=U.rejectedFiles,L=U.getRootProps,A=U.getInputProps,D=B.map((function(e){return l.a.createElement("li",{key:e.path},e.path," \u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002")})),z=Object(n.useCallback)((function(e){x(!1),k(e.target.value)})),P=Object(n.useCallback)((function(){M(!0),x(!1);var e=new Image;e.crossOrigin="anonymous",e.src="https://api-gw98.herokuapp.com/"+y,e.onload=function(a){M(!1),t(e)},e.onerror=function(e){M(!1),x(!0)}}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a.Header,null,l.a.createElement(g.a,{variant:"tabs",activeKey:c,onSelect:function(e){return u(e)}},l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{eventKey:j},"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9")),l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{eventKey:O},"URL\u3092\u6307\u5b9a")))),j==c&&l.a.createElement(o.a.Body,null,l.a.createElement("div",L({className:"dropzone"+(F?" disabled":"")}),l.a.createElement("input",A()),l.a.createElement(d.a,{icon:h.b,size:"4x"}),l.a.createElement("p",null,"\u753b\u50cf\u3092\u3053\u3053\u306b\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u304b\u3001\u30af\u30ea\u30c3\u30af\u3057\u3066\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"),l.a.createElement("em",null,"jpeg \u3082\u3057\u304f\u306f png \u306e\u307f\u6307\u5b9a\u53ef\u80fd)")),l.a.createElement("ol",null,D)),O==c&&l.a.createElement(o.a.Body,null,l.a.createElement(b.a,{className:"mb-3"},l.a.createElement(f.a,{placeholder:"\u753b\u50cf\u306eURL",value:y,onChange:z,isInvalid:I,readOnly:F}),l.a.createElement(b.a.Append,null,l.a.createElement(m.a,{variant:"outline-primary",onClick:P,disabled:!y||F},F&&l.a.createElement(E.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"btn-inner-spinner"}),"\u753b\u50cf\u3092\u9078\u629e")),l.a.createElement(v.a.Control.Feedback,{type:"invalid"},"\u6307\u5b9a\u3057\u305fURL\u306f\u753b\u50cf\u3068\u3057\u3066\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f"))))}),S=a(106),C=a(49),I=a.n(C),x=(a(88),a(89),function(e){var t=e.onNextStep,a=e.image,r=Object(n.useState)(Object(n.createRef)()),c=Object(i.a)(r,2),u=c[0],s=(c[1],Object(n.useState)(Object(n.createRef)())),d=Object(i.a)(s,2),h=d[0],p=(d[1],Object(n.useState)(Object(n.createRef)())),g=Object(i.a)(p,2),b=g[0],f=(g[1],Object(n.useState)({})),E=Object(i.a)(f,2),w=E[0],j=E[1];Object(n.useEffect)((function(){var e=u.current;e.width=a.width,e.height=a.height,e.getContext("2d").drawImage(a,0,0,a.width,a.height);var t=b.current;t.width=a.width,t.height=a.height}),[a]);var O=Object(n.useCallback)((function(){var e=Object.assign({},w,{width:5*Math.floor(w.width/5)+1,height:5*Math.floor(w.height/5)+1}),t=u.current,n=t.getContext("2d"),l=a.width/t.clientWidth,r=b.current,c=r.getContext("2d");c.drawImage(a,0,0,a.width,a.height);var i=Math.floor(e.width/5),o=Math.floor(e.height/5),m=h.current;m.width=i,m.height=o;var s=m.getContext("2d");if(m.width<1||m.height<1)n.drawImage(r,0,0);else{s.fillStyle="#000000",s.fillRect(0,0,m.width,m.height),s.fillStyle="#FF0000",s.beginPath(),s.ellipse(m.width/2,m.height/2,m.width/2*.9,m.height/2*.9,0,0,2*Math.PI),s.fill();var d=s.getImageData(0,0,m.width,m.height).data,p=5*l,g=e.x*l,f=(e.width,e.y*l);e.height;c.fillStyle="rgb(0,0,0,0.5)",c.fillRect(e.x*l,e.y*l,Math.floor((e.width+1)/5)*p,Math.floor((e.height+1)/5)*p);for(var E=f,v=0;v<o;E+=p,++v)for(var O=g,y=0;y<i;O+=p,++y)0==d[4*(y+v*i)+0]&&Math.random()<.3&&(c.fillStyle="#FFFFFF",c.fillRect(O,E,p+l,p+l));n.drawImage(r,0,0),j(e)}}),[u,b,h,w]),y=Object(n.useCallback)((function(){u.current.toBlob((function(e){t(e)}),"image/jpeg",.9)}),[a,w]),k=w.width&&w.height;return l.a.createElement(o.a.Body,null,l.a.createElement(o.a.Text,null,l.a.createElement(v.a.Group,null,!!k&&l.a.createElement(m.a,{onClick:y},"\u9078\u629e\u5b8c\u4e86"),!k&&l.a.createElement(S.a,{variant:"info"},"\u63fa\u3089\u3059\u7bc4\u56f2\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044")),l.a.createElement(I.a,{renderComponent:l.a.createElement("canvas",{ref:u,style:{width:"100%"}}),crop:w,onChange:function(e){return j(e)},onComplete:function(){return O()}})),l.a.createElement("canvas",{ref:b,style:{width:"100%",display:"none"}}),l.a.createElement("canvas",{ref:h,style:{display:"none"}}))}),N=a(48),R=(a(97),a(98)),F=function(e){var t=e.image,a=e.onNextStep,r=Object(n.useState)(""),c=Object(i.a)(r,2),u=c[0],s=c[1];Object(n.useEffect)((function(){var e=new FileReader;e.onload=function(e){s(e.target.result)},e.readAsDataURL(t)}),[t]);var d=Object(n.useCallback)((function(){R(t,"sample.jpg","image/jpeg")}),[t]),h=Object(n.useCallback)((function(){a()}),[a]);return l.a.createElement(o.a.Body,null,l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Group,{as:N.a},l.a.createElement(m.a,{onClick:d},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),l.a.createElement(v.a.Group,{as:N.a},l.a.createElement(m.a,{variant:"secondary",onClick:h},"\u65b0\u898f\u4f5c\u6210"))),l.a.createElement("div",{className:"image-preview"},l.a.createElement("img",{src:u,className:"layout"}),l.a.createElement("img",{src:u,className:"main",style:{left:0,top:0}})))},M=[{title:"\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"},{title:"\u63fa\u3089\u3059\u7bc4\u56f2\u3092\u8a2d\u5b9a"},{title:"\u5b8c\u6210"}];var U=function(){var e=Object(n.useState)(y.UploadImage),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(i.a)(c,2),g=u[0],b=u[1],f=Object(n.useState)(null),E=Object(i.a)(f,2),v=E[0],w=E[1],j=Object(n.useCallback)((function(e){b(e),r(y.SelectArea)})),O=Object(n.useCallback)((function(e){w(e),r(y.DownloadImage)})),S=Object(n.useCallback)((function(){r(y.UploadImage)}));return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"\u63fa\u308c\u308b",l.a.createElement("ruby",null,"\u203b",l.a.createElement("rp",null,"("),l.a.createElement("rt",null,"\u3061\u3087\u3081"),l.a.createElement("rp",null,")"),"\u203b",l.a.createElement("rp",null,"("),l.a.createElement("rt",null,"\u3061\u3087\u3081"),l.a.createElement("rp",null,")")),"\u753b\u50cf\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf"),l.a.createElement("div",{className:"stepper"},l.a.createElement(s.a,{steps:M,activeStep:a})),l.a.createElement(o.a,null,[l.a.createElement(k,{onNextStep:j}),l.a.createElement(x,{onNextStep:O,image:g}),l.a.createElement(F,{onNextStep:S,image:v})][a]),l.a.createElement("div",{className:"footer"},l.a.createElement(m.a,{variant:"link",size:"sm",target:"_blank",href:"https://twitter.com/sharkpp"},l.a.createElement(d.a,{icon:p.a})," @sharkpp"),l.a.createElement(m.a,{variant:"link",size:"sm",target:"_blank",href:"https://github.com/sharkpp/delayedmotion/issues/new"},l.a.createElement(d.a,{icon:h.a})," \u4e0d\u5177\u5408\u5831\u544a")))};c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.25db35a0.chunk.js.map