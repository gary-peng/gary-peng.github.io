(self.webpackChunkgary_peng_github_io=self.webpackChunkgary_peng_github_io||[]).push([[293],{2808:function(e){var A="undefined"!=typeof Element,t="function"==typeof Map,r="function"==typeof Set,n="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var o,s,c,l;if(Array.isArray(e)){if((o=e.length)!=i.length)return!1;for(s=o;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(t&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((o=e.length)!=i.length)return!1;for(s=o;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((o=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=o;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,c[s]))return!1;if(A&&e instanceof Element)return!1;for(s=o;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!a(e[c[s]],i[c[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,A){try{return a(e,A)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}},6643:function(e,A,t){"use strict";var r,n=t(6540),a=(r=n)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,A,t){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof A)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function l(){s=e(c.map((function(e){return e.props}))),u.canUseDOM?A(s):t&&(s=t(s))}var u=function(e){var A,t;function n(){return e.apply(this,arguments)||this}t=e,(A=n).prototype=Object.create(t.prototype),A.prototype.constructor=A,A.__proto__=t,n.peek=function(){return s},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var i=n.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},i.render=function(){return a.createElement(r,this.props)},n}(n.PureComponent);return i(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(u,"canUseDOM",o),u}}},9788:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return kA}});var r,n,a,i,o=t(6540),s=t(5556),c=t.n(s),l=t(6643),u=t.n(l),g=t(2808),f=t.n(g),d=t(7325),p=t.n(d),m="bodyAttributes",C="htmlAttributes",h="titleAttributes",B={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},y=(Object.keys(B).map((function(e){return B[e]})),"charset"),w="cssText",v="href",E="http-equiv",b="innerHTML",I="itemprop",Q="name",T="property",L="rel",k="src",x="target",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",Y="defer",F="encodeSpecialCharacters",O="onChangeClientState",j="titleTemplate",M=Object.keys(S).reduce((function(e,A){return e[S[A]]=A,e}),{}),W=[B.NOSCRIPT,B.SCRIPT,B.STYLE],R="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(){function e(e,A){for(var t=0;t<A.length;t++){var r=A[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(A,t,r){return t&&e(A.prototype,t),r&&e(A,r),A}}(),G=Object.assign||function(e){for(var A=1;A<arguments.length;A++){var t=arguments[A];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H=function(e,A){var t={};for(var r in e)A.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},P=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var A=Z(e,B.TITLE),t=Z(e,j);if(t&&A)return t.replace(/%s/g,(function(){return Array.isArray(A)?A.join(""):A}));var r=Z(e,N);return A||r||void 0},z=function(e){return Z(e,O)||function(){}},V=function(e,A){return A.filter((function(A){return void 0!==A[e]})).map((function(A){return A[e]})).reduce((function(e,A){return G({},e,A)}),{})},q=function(e,A){return A.filter((function(e){return void 0!==e[B.BASE]})).map((function(e){return e[B.BASE]})).reverse().reduce((function(A,t){if(!A.length)for(var r=Object.keys(t),n=0;n<r.length;n++){var a=r[n].toLowerCase();if(-1!==e.indexOf(a)&&t[a])return A.concat(t)}return A}),[])},X=function(e,A,t){var r={};return t.filter((function(A){return!!Array.isArray(A[e])||(void 0!==A[e]&&Ae("Helmet: "+e+' should be of type "Array". Instead found type "'+U(A[e])+'"'),!1)})).map((function(A){return A[e]})).reverse().reduce((function(e,t){var n={};t.filter((function(e){for(var t=void 0,a=Object.keys(e),i=0;i<a.length;i++){var o=a[i],s=o.toLowerCase();-1===A.indexOf(s)||t===L&&"canonical"===e[t].toLowerCase()||s===L&&"stylesheet"===e[s].toLowerCase()||(t=s),-1===A.indexOf(o)||o!==b&&o!==w&&o!==I||(t=o)}if(!t||!e[t])return!1;var c=e[t].toLowerCase();return r[t]||(r[t]={}),n[t]||(n[t]={}),!r[t][c]&&(n[t][c]=!0,!0)})).reverse().forEach((function(A){return e.push(A)}));for(var a=Object.keys(n),i=0;i<a.length;i++){var o=a[i],s=p()({},r[o],n[o]);r[o]=s}return e}),[]).reverse()},Z=function(e,A){for(var t=e.length-1;t>=0;t--){var r=e[t];if(r.hasOwnProperty(A))return r[A]}return null},K=(r=Date.now(),function(e){var A=Date.now();A-r>16?(r=A,e(A)):setTimeout((function(){K(e)}),0)}),J=function(e){return clearTimeout(e)},$="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||K:t.g.requestAnimationFrame||K,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||J:t.g.cancelAnimationFrame||J,Ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},te=null,re=function(e,A){var t=e.baseTag,r=e.bodyAttributes,n=e.htmlAttributes,a=e.linkTags,i=e.metaTags,o=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,u=e.title,g=e.titleAttributes;ie(B.BODY,r),ie(B.HTML,n),ae(u,g);var f={baseTag:oe(B.BASE,t),linkTags:oe(B.LINK,a),metaTags:oe(B.META,i),noscriptTags:oe(B.NOSCRIPT,o),scriptTags:oe(B.SCRIPT,c),styleTags:oe(B.STYLE,l)},d={},p={};Object.keys(f).forEach((function(e){var A=f[e],t=A.newTags,r=A.oldTags;t.length&&(d[e]=t),r.length&&(p[e]=f[e].oldTags)})),A&&A(),s(e,d,p)},ne=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,A){void 0!==e&&document.title!==e&&(document.title=ne(e)),ie(B.TITLE,A)},ie=function(e,A){var t=document.getElementsByTagName(e)[0];if(t){for(var r=t.getAttribute(R),n=r?r.split(","):[],a=[].concat(n),i=Object.keys(A),o=0;o<i.length;o++){var s=i[o],c=A[s]||"";t.getAttribute(s)!==c&&t.setAttribute(s,c),-1===n.indexOf(s)&&n.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var u=a.length-1;u>=0;u--)t.removeAttribute(a[u]);n.length===a.length?t.removeAttribute(R):t.getAttribute(R)!==i.join(",")&&t.setAttribute(R,i.join(","))}},oe=function(e,A){var t=document.head||document.querySelector(B.HEAD),r=t.querySelectorAll(e+"["+R+"]"),n=Array.prototype.slice.call(r),a=[],i=void 0;return A&&A.length&&A.forEach((function(A){var t=document.createElement(e);for(var r in A)if(A.hasOwnProperty(r))if(r===b)t.innerHTML=A.innerHTML;else if(r===w)t.styleSheet?t.styleSheet.cssText=A.cssText:t.appendChild(document.createTextNode(A.cssText));else{var o=void 0===A[r]?"":A[r];t.setAttribute(r,o)}t.setAttribute(R,"true"),n.some((function(e,A){return i=A,t.isEqualNode(e)}))?n.splice(i,1):a.push(t)})),n.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return t.appendChild(e)})),{oldTags:n,newTags:a}},se=function(e){return Object.keys(e).reduce((function(A,t){var r=void 0!==e[t]?t+'="'+e[t]+'"':""+t;return A?A+" "+r:r}),"")},ce=function(e){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(A,t){return A[S[t]||t]=e[t],A}),A)},le=function(e,A,t){switch(e){case B.TITLE:return{toComponent:function(){return e=A.title,t=A.titleAttributes,(r={key:e})[R]=!0,n=ce(t,r),[o.createElement(B.TITLE,n,e)];var e,t,r,n},toString:function(){return function(e,A,t,r){var n=se(t),a=ne(A);return n?"<"+e+" "+R+'="true" '+n+">"+P(a,r)+"</"+e+">":"<"+e+" "+R+'="true">'+P(a,r)+"</"+e+">"}(e,A.title,A.titleAttributes,t)}};case m:case C:return{toComponent:function(){return ce(A)},toString:function(){return se(A)}};default:return{toComponent:function(){return function(e,A){return A.map((function(A,t){var r,n=((r={key:t})[R]=!0,r);return Object.keys(A).forEach((function(e){var t=S[e]||e;if(t===b||t===w){var r=A.innerHTML||A.cssText;n.dangerouslySetInnerHTML={__html:r}}else n[t]=A[e]})),o.createElement(e,n)}))}(e,A)},toString:function(){return function(e,A,t){return A.reduce((function(A,r){var n=Object.keys(r).filter((function(e){return!(e===b||e===w)})).reduce((function(e,A){var n=void 0===r[A]?A:A+'="'+P(r[A],t)+'"';return e?e+" "+n:n}),""),a=r.innerHTML||r.cssText||"",i=-1===W.indexOf(e);return A+"<"+e+" "+R+'="true" '+n+(i?"/>":">"+a+"</"+e+">")}),"")}(e,A,t)}}}},ue=function(e){var A=e.baseTag,t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,a=e.linkTags,i=e.metaTags,o=e.noscriptTags,s=e.scriptTags,c=e.styleTags,l=e.title,u=void 0===l?"":l,g=e.titleAttributes;return{base:le(B.BASE,A,r),bodyAttributes:le(m,t,r),htmlAttributes:le(C,n,r),link:le(B.LINK,a,r),meta:le(B.META,i,r),noscript:le(B.NOSCRIPT,o,r),script:le(B.SCRIPT,s,r),style:le(B.STYLE,c,r),title:le(B.TITLE,{title:u,titleAttributes:g},r)}},ge=u()((function(e){return{baseTag:q([v,x],e),bodyAttributes:V(m,e),defer:Z(e,Y),encode:Z(e,F),htmlAttributes:V(C,e),linkTags:X(B.LINK,[L,v],e),metaTags:X(B.META,[Q,y,E,T,I],e),noscriptTags:X(B.NOSCRIPT,[b],e),onChangeClientState:z(e),scriptTags:X(B.SCRIPT,[k,b],e),styleTags:X(B.STYLE,[w],e),title:_(e),titleAttributes:V(h,e)}}),(function(e){te&&ee(te),e.defer?te=$((function(){re(e,(function(){te=null}))})):(re(e),te=null)}),ue)((function(){return null})),fe=(n=ge,i=a=function(e){function A(){return function(e,A){if(!(e instanceof A))throw new TypeError("Cannot call a class as a function")}(this,A),function(e,A){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!A||"object"!=typeof A&&"function"!=typeof A?e:A}(this,e.apply(this,arguments))}return function(e,A){if("function"!=typeof A&&null!==A)throw new TypeError("Super expression must either be null or a function, not "+typeof A);e.prototype=Object.create(A&&A.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(e,A):e.__proto__=A)}(A,e),A.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},A.prototype.mapNestedChildrenToProps=function(e,A){if(!A)return null;switch(e.type){case B.SCRIPT:case B.NOSCRIPT:return{innerHTML:A};case B.STYLE:return{cssText:A}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},A.prototype.flattenArrayTypeChildren=function(e){var A,t=e.child,r=e.arrayTypeChildren,n=e.newChildProps,a=e.nestedChildren;return G({},r,((A={})[t.type]=[].concat(r[t.type]||[],[G({},n,this.mapNestedChildrenToProps(t,a))]),A))},A.prototype.mapObjectTypeChildren=function(e){var A,t,r=e.child,n=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case B.TITLE:return G({},n,((A={})[r.type]=i,A.titleAttributes=G({},a),A));case B.BODY:return G({},n,{bodyAttributes:G({},a)});case B.HTML:return G({},n,{htmlAttributes:G({},a)})}return G({},n,((t={})[r.type]=G({},a),t))},A.prototype.mapArrayTypeChildrenToProps=function(e,A){var t=G({},A);return Object.keys(e).forEach((function(A){var r;t=G({},t,((r={})[A]=e[A],r))})),t},A.prototype.warnOnInvalidChildren=function(e,A){return!0},A.prototype.mapChildrenToProps=function(e,A){var t=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,a=n.children,i=function(e){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(A,t){return A[M[t]||t]=e[t],A}),A)}(H(n,["children"]));switch(t.warnOnInvalidChildren(e,a),e.type){case B.LINK:case B.META:case B.NOSCRIPT:case B.SCRIPT:case B.STYLE:r=t.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:A=t.mapObjectTypeChildren({child:e,newProps:A,newChildProps:i,nestedChildren:a})}}})),A=this.mapArrayTypeChildrenToProps(r,A)},A.prototype.render=function(){var e=this.props,A=e.children,t=H(e,["children"]),r=G({},t);return A&&(r=this.mapChildrenToProps(A,r)),o.createElement(n,r)},D(A,null,[{key:"canUseDOM",set:function(e){n.canUseDOM=e}}]),A}(o.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=n.peek,a.rewind=function(){var e=n.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);fe.renderStatic=fe.rewind;var de=t(2922);var pe=(0,t(3046).oYE)({fonts:{heading:"Menlo",body:"Menlo"}}),me=t(865),Ce=t(2002),he=t(9256);function Be(){return Be=Object.assign||function(e){for(var A=1;A<arguments.length;A++){var t=arguments[A];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Be.apply(this,arguments)}var ye=["as","viewBox","color","focusable","children","className","__css"],we={path:o.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},o.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),o.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),o.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},ve=(0,me.Rf)((function(e,A){var t=e.as,r=e.viewBox,n=e.color,a=void 0===n?"currentColor":n,i=e.focusable,s=void 0!==i&&i,c=e.children,l=e.className,u=e.__css,g=function(e,A){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,ye),f={ref:A,focusable:s,className:(0,he.cx)("chakra-icon",l),__css:Be({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:a},u)},d=null!=r?r:we.viewBox;if(t&&"string"!=typeof t)return o.createElement(me.Bv.svg,Be({as:t},f,g));var p=null!=c?c:we.path;return o.createElement(me.Bv.svg,Be({verticalAlign:"middle",viewBox:d},f,g),p)}));he.gt&&(ve.displayName="Icon");var Ee=t(7766);function be(){return be=Object.assign||function(e){for(var A=1;A<arguments.length;A++){var t=arguments[A];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},be.apply(this,arguments)}function Ie(e,A){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||(n[t]=e[t]);return n}var Qe=["ratio","children","className"],Te=(0,me.Rf)((function(e,A){var t=e.ratio,r=void 0===t?4/3:t,n=e.children,a=e.className,i=Ie(e,Qe),s=o.Children.only(n),c=(0,he.cx)("chakra-aspect-ratio",a);return o.createElement(me.Bv.div,be({ref:A,position:"relative",className:c,_before:{height:0,content:'""',display:"block",paddingBottom:(0,he.bk)(r,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},i),s)}));he.gt&&(Te.displayName="AspectRatio");var Le=["className"],ke=(0,me.Rf)((function(e,A){var t=(0,me.Vl)("Badge",e),r=(0,me.MN)(e);r.className;var n=Ie(r,Le);return o.createElement(me.Bv.span,be({ref:A,className:(0,he.cx)("chakra-badge",e.className)},n,{__css:be({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));he.gt&&(ke.displayName="Badge");var xe=["size","centerContent"],Se=["size"],Ne=(0,me.Bv)("div");he.gt&&(Ne.displayName="Box");var Ye=(0,me.Rf)((function(e,A){var t=e.size,r=e.centerContent,n=void 0===r||r,a=Ie(e,xe),i=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(Ne,be({ref:A,boxSize:t,__css:be({},i,{flexShrink:0,flexGrow:0})},a))}));he.gt&&(Ye.displayName="Square");var Fe=(0,me.Rf)((function(e,A){var t=e.size,r=Ie(e,Se);return o.createElement(Ye,be({size:t,ref:A,borderRadius:"9999px"},r))}));he.gt&&(Fe.displayName="Circle");var Oe=(0,me.Bv)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});he.gt&&(Oe.displayName="Center");var je=["className"],Me=(0,me.Rf)((function(e,A){var t=(0,me.Vl)("Code",e),r=(0,me.MN)(e);r.className;var n=Ie(r,je);return o.createElement(me.Bv.code,be({ref:A,className:(0,he.cx)("chakra-code",e.className)},n,{__css:be({display:"inline-block"},t)}))}));he.gt&&(Me.displayName="Code");var We=["className","centerContent"],Re=(0,me.Rf)((function(e,A){var t=(0,me.MN)(e),r=t.className,n=t.centerContent,a=Ie(t,We),i=(0,me.Vl)("Container",e);return o.createElement(me.Bv.div,be({ref:A,className:(0,he.cx)("chakra-container",r)},a,{__css:be({},i,n&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));he.gt&&(Re.displayName="Container");var Ue=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],De=["className","orientation","__css"],Ge=(0,me.Rf)((function(e,A){var t=(0,me.Vl)("Divider",e),r=t.borderLeftWidth,n=t.borderBottomWidth,a=t.borderTopWidth,i=t.borderRightWidth,s=t.borderWidth,c=t.borderStyle,l=t.borderColor,u=Ie(t,Ue),g=(0,me.MN)(e),f=g.className,d=g.orientation,p=void 0===d?"horizontal":d,m=g.__css,C=Ie(g,De),h={vertical:{borderLeftWidth:r||i||s||"1px",height:"100%"},horizontal:{borderBottomWidth:n||a||s||"1px",width:"100%"}};return o.createElement(me.Bv.hr,be({ref:A,"aria-orientation":p},C,{__css:be({},u,{border:"0",borderColor:l,borderStyle:c},h[p],m),className:(0,he.cx)("chakra-divider",f)}))}));he.gt&&(Ge.displayName="Divider");var He=["direction","align","justify","wrap","basis","grow","shrink"],Pe=(0,me.Rf)((function(e,A){var t=e.direction,r=e.align,n=e.justify,a=e.wrap,i=e.basis,s=e.grow,c=e.shrink,l=Ie(e,He),u={display:"flex",flexDirection:t,alignItems:r,justifyContent:n,flexWrap:a,flexBasis:i,flexGrow:s,flexShrink:c};return o.createElement(me.Bv.div,be({ref:A,__css:u},l))}));he.gt&&(Pe.displayName="Flex");var _e=["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],ze=(0,me.Rf)((function(e,A){var t=e.area,r=e.templateAreas,n=e.gap,a=e.rowGap,i=e.columnGap,s=e.column,c=e.row,l=e.autoFlow,u=e.autoRows,g=e.templateRows,f=e.autoColumns,d=e.templateColumns,p=Ie(e,_e),m={display:"grid",gridArea:t,gridTemplateAreas:r,gridGap:n,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:c,gridAutoFlow:l,gridAutoRows:u,gridTemplateRows:g,gridTemplateColumns:d};return o.createElement(me.Bv.div,be({ref:A,__css:m},p))}));he.gt&&(ze.displayName="Grid");var Ve=["className"],qe=(0,me.Rf)((function(e,A){var t=(0,me.Vl)("Heading",e),r=(0,me.MN)(e);r.className;var n=Ie(r,Ve);return o.createElement(me.Bv.h2,be({ref:A,className:(0,he.cx)("chakra-heading",e.className)},n,{__css:t}))}));he.gt&&(qe.displayName="Heading");var Xe=["className"],Ze=(0,me.Rf)((function(e,A){var t=(0,me.Vl)("Kbd",e),r=(0,me.MN)(e),n=r.className,a=Ie(r,Xe);return o.createElement(me.Bv.kbd,be({ref:A,className:(0,he.cx)("chakra-kbd",n)},a,{__css:be({fontFamily:"mono"},t)}))}));he.gt&&(Ze.displayName="Kbd");var Ke=["className","isExternal"],Je=(0,me.Rf)((function(e,A){var t=(0,me.Vl)("Link",e),r=(0,me.MN)(e),n=r.className,a=r.isExternal,i=Ie(r,Ke);return o.createElement(me.Bv.a,be({target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:A,className:(0,he.cx)("chakra-link",n)},i,{__css:t}))}));he.gt&&(Je.displayName="Link");var $e=["children","styleType","stylePosition","spacing"],eA=["as"],AA=["as"],tA=(0,Ee.q6)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "}),rA=tA[0],nA=tA[1],aA=(0,me.Rf)((function(e,A){var t,r=(0,me.o5)("List",e),n=(0,me.MN)(e),a=n.children,i=n.styleType,s=void 0===i?"none":i,c=n.stylePosition,l=n.spacing,u=Ie(n,$e),g=(0,Ee.ag)(a),f=l?((t={})["& > *:not(style) ~ *:not(style)"]={mt:l},t):{};return o.createElement(rA,{value:r},o.createElement(me.Bv.ul,be({ref:A,listStyleType:s,listStylePosition:c,role:"list",__css:be({},r.container,f)},u),g))}));he.gt&&(aA.displayName="List");var iA=(0,me.Rf)((function(e,A){e.as;var t=Ie(e,eA);return o.createElement(aA,be({ref:A,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));he.gt&&(iA.displayName="OrderedList");var oA=(0,me.Rf)((function(e,A){e.as;var t=Ie(e,AA);return o.createElement(aA,be({ref:A,as:"ul",styleType:"initial",marginStart:"1em"},t))}));he.gt&&(oA.displayName="UnorderedList");var sA=(0,me.Rf)((function(e,A){var t=nA();return o.createElement(me.Bv.li,be({ref:A},e,{__css:t.item}))}));he.gt&&(sA.displayName="ListItem");var cA=(0,me.Rf)((function(e,A){var t=nA();return o.createElement(ve,be({ref:A,role:"presentation"},e,{__css:t.icon}))}));he.gt&&(cA.displayName="ListIcon");var lA=["columns","spacingX","spacingY","spacing","minChildWidth"],uA=(0,me.Rf)((function(e,A){var t,r,n=e.columns,a=e.spacingX,i=e.spacingY,s=e.spacing,c=e.minChildWidth,l=Ie(e,lA),u=c?(r=c,(0,he.bk)(r,(function(e){return(0,he.kZ)(e)?null:"repeat(auto-fit, minmax("+(A=e,((0,he.Et)(A)?A+"px":A)+", 1fr))");var A}))):(t=n,(0,he.bk)(t,(function(e){return(0,he.kZ)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return o.createElement(ze,be({ref:A,gap:s,columnGap:a,rowGap:i,templateColumns:u},l))}));he.gt&&(uA.displayName="SimpleGrid");var gA=(0,me.Bv)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});he.gt&&(gA.displayName="Spacer");var fA="& > *:not(style) ~ *:not(style)";var dA=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],pA=function(e){return o.createElement(me.Bv.div,be({className:"chakra-stack__item"},e,{__css:be({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},mA=(0,me.Rf)((function(e,A){var t,r=e.isInline,n=e.direction,a=e.align,i=e.justify,s=e.spacing,c=void 0===s?"0.5rem":s,l=e.wrap,u=e.children,g=e.divider,f=e.className,d=e.shouldWrapChildren,p=Ie(e,dA),m=r?"row":null!=n?n:"column",C=o.useMemo((function(){return function(e){var A,t=e.spacing,r=e.direction,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return(A={flexDirection:r})[fA]=(0,he.bk)(r,(function(e){return n[e]})),A}({direction:m,spacing:c})}),[m,c]),h=o.useMemo((function(){return function(e){var A=e.spacing,t=e.direction,r={column:{my:A,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:A,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:A,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:A,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,he.bk)(t,(function(e){return r[e]}))}}({spacing:c,direction:m})}),[c,m]),B=!!g,y=!d&&!B,w=(0,Ee.ag)(u),v=y?w:w.map((function(e,A){var t=void 0!==e.key?e.key:A,r=A+1===w.length,n=d?o.createElement(pA,{key:t},e):e;if(!B)return n;var a=r?null:o.cloneElement(g,{__css:h});return o.createElement(o.Fragment,{key:t},n,a)})),E=(0,he.cx)("chakra-stack",f);return o.createElement(me.Bv.div,be({ref:A,display:"flex",alignItems:a,justifyContent:i,flexDirection:C.flexDirection,flexWrap:l,className:E,__css:B?{}:(t={},t[fA]=C[fA],t)},p),v)}));he.gt&&(mA.displayName="Stack");var CA=(0,me.Rf)((function(e,A){return o.createElement(mA,be({align:"center"},e,{direction:"row",ref:A}))}));he.gt&&(CA.displayName="HStack");var hA=(0,me.Rf)((function(e,A){return o.createElement(mA,be({align:"center"},e,{direction:"column",ref:A}))}));he.gt&&(hA.displayName="VStack");var BA=["className","align","decoration","casing"],yA=(0,me.Rf)((function(e,A){var t=(0,me.Vl)("Text",e),r=(0,me.MN)(e);r.className,r.align,r.decoration,r.casing;var n=Ie(r,BA),a=(0,he.TB)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(me.Bv.p,be({ref:A,className:(0,he.cx)("chakra-text",e.className)},a,n,{__css:t}))}));he.gt&&(yA.displayName="Text");var wA=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],vA=["className"],EA=(0,me.Rf)((function(e,A){var t=e.spacing,r=void 0===t?"0.5rem":t,n=e.spacingX,a=e.spacingY,i=e.children,s=e.justify,c=e.direction,l=e.align,u=e.className,g=e.shouldWrapChildren,f=Ie(e,wA),d=o.useMemo((function(){var e={spacingX:n,spacingY:a},A=e.spacingX,t=void 0===A?r:A,i=e.spacingY,o=void 0===i?r:i;return{"--chakra-wrap-x-spacing":function(e){return(0,he.bk)(t,(function(A){return(0,Ce.D8)("space",A)(e)}))},"--chakra-wrap-y-spacing":function(e){return(0,he.bk)(o,(function(A){return(0,Ce.D8)("space",A)(e)}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:l,flexDirection:c,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[r,n,a,s,l,c]),p=g?o.Children.map(i,(function(e,A){return o.createElement(bA,{key:A},e)})):i;return o.createElement(me.Bv.div,be({ref:A,className:(0,he.cx)("chakra-wrap",u)},f),o.createElement(me.Bv.ul,{className:"chakra-wrap__list",__css:d},p))}));he.gt&&(EA.displayName="Wrap");var bA=(0,me.Rf)((function(e,A){var t=e.className,r=Ie(e,vA);return o.createElement(me.Bv.li,be({ref:A,__css:{display:"flex",alignItems:"flex-start"},className:(0,he.cx)("chakra-wrap__listitem",t)},r))}));he.gt&&(bA.displayName="WrapItem");function IA(e){const{0:A,1:t}=(0,o.useState)(e),{0:r,1:n}=(0,o.useState)(!1),a=(0,o.useRef)(null),i=()=>n(!0),s=()=>{n(!1),t(e)};return(0,o.useEffect)((()=>{const e=a.current;if(e)return e.addEventListener("mouseover",i),e.addEventListener("mouseout",s),()=>{e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",s)}}),[a.current]),(0,o.useEffect)((()=>{let A;return r&&(A=setInterval((()=>{var A="";for(let t=0;t<e.length;t++){A+="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".charAt(Math.floor(36*Math.random()))}t(A)}),25)),()=>clearInterval(A)}),[r]),(0,o.useEffect)((()=>{let A;return n(!0),setTimeout((()=>{n(!1),t(e)}),1e3),A=setInterval((()=>{1==Math.floor(2*Math.random())&&(n(!0),setTimeout((()=>{n(!1),t(e)}),1e3))}),5e3),()=>clearInterval(A)}),[]),[a,A]}function QA(e){const[A,t]=IA(e.children);return o.createElement(yA,{fontWeight:"normal",fontSize:"10pt",ref:A},t)}function TA(e){const[A,t]=IA(e.children);return o.createElement(Je,{fontSize:"10pt",_hover:{textDecoration:"none",color:"white"},_focus:{},_active:{},isExternal:e.url,href:e.href,ref:A},t)}function LA(){return o.createElement(Pe,{h:"100vh",w:"100vw",flexDir:"column",justifyContent:"space-between",alignItems:"start"},o.createElement(Pe,{h:"50%",w:"100%",justifyContent:"space-between",alignItems:"start",p:"20px"},o.createElement("img",{src:"data:image/png;base64,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AIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAMwcE8BubWsF4F8kyYZz+MECABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAMDtjgkAfitJrHCHtrUCT/CDBQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAGAmGw7Rtq4SABaESbKiTfxgAQAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwDgdjEB7Na2Vrjs4U28vbCcHywAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA630BtkUYuuE7pR0AAAAASUVORK5CYII=",width:"20pt",height:"auto",loading:"lazy"}),o.createElement(QA,null,"© gary peng 2024")),o.createElement(Pe,{h:"50%",w:"100%",justifyContent:"space-between",alignItems:"end",alignContent:"flex-end",p:"20px",wrap:"wrap"},o.createElement(Ne,null,o.createElement(QA,null,"+ software engineer"),o.createElement(QA,null,"+ based in new york city"),o.createElement(QA,null,"+ b.s. and m.s. in computer science from georgia tech"),o.createElement(QA,null,"+ interested large-scale distributed systems and data infrastructures"),o.createElement(QA,null,"+ also likes clothes and rock climbing")),o.createElement(yA,{pt:"5%",fontSize:"10pt"},o.createElement(TA,{href:"https://www.linkedin.com/in/garyhpeng",url:!0},"linkedin")," | ",o.createElement(TA,{href:"https://github.com/gary-peng",url:!0},"github"))))}var kA=()=>o.createElement("div",{id:"index"},o.createElement(fe,null,o.createElement("title",null,"gary peng")),o.createElement(de.s,{theme:pe},o.createElement(LA,null)))}}]);
//# sourceMappingURL=component---src-pages-index-js-d0d3cee45d60e0cd1aea.js.map