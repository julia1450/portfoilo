(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(s=!1)}s&&(a.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},i={app:0},a=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"13fd":function(t,e,r){"use strict";r("76e0")},"2fda":function(t,e,r){},3047:function(t,e,r){},"4ab8":function(t,e,r){},"4ee2":function(t,e,r){},"4ffd":function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},"536d":function(t,e,r){"use strict";r("e877")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4ee2");var s=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("AppHeader",{on:{scroll:t.scrollPage}}),r("router-view"),r("AppFooter",{on:{scroll:t.scrollPage}})],1)},a=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"section section--header"},[r("div",{staticClass:"inner"},[r("div",{staticClass:"logo"}),r("ul",{staticClass:"menu"},[r("li",{staticClass:"active"},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.scrollPage("page-about")}}},[t._v("about")])]),r("li",{},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.scrollPage("page-skill")}}},[t._v("skill")])]),r("li",{},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.scrollPage("page-works")}}},[t._v("works")])]),r("li",{},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.scrollPage("page-contact")}}},[t._v("contact")])])])])])},o=[],l={name:"AppHeader",methods:{scrollPage:function(t){this.$emit("scroll",t)}}},c=l,u=(r("536d"),r("2877")),d=Object(u["a"])(c,n,o,!1,null,"be85a3a4",null),f=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section section--footer"},[r("ul",{staticClass:"menu"},[r("li",{staticClass:"active"},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.scrollPage("page-about")}}},[t._v("about")])]),r("li",{},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.scrollPage("page-skill")}}},[t._v("skill")])]),r("li",{},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.scrollPage("page-works")}}},[t._v("works")])]),r("li",{},[r("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.scrollPage("page-contact")}}},[t._v("contact")])])])])},m=[],k={name:"AppFooter",methods:{scrollPage:function(t){this.$emit("scroll",t)}}},v=k,h=(r("9e4d"),Object(u["a"])(v,p,m,!1,null,"0ff45eb4",null)),g=h.exports,w={name:"App",components:{AppHeader:f,AppFooter:g},methods:{scrollPage:function(t){var e=document.getElementById(t).offsetTop-60;document.body.scrollTo(0,e)}}},P=w,_=(r("034f"),Object(u["a"])(P,i,a,!1,null,null,null)),y=_.exports,C=r("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Introduce",{attrs:{id:"page-about"}}),r("Skill",{attrs:{id:"page-skill"}}),r("Works",{attrs:{id:"page-works"}}),r("Contact",{attrs:{id:"page-contact"}})],1)},W=[],I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section section--introduce"},[r("div",{staticClass:"profil-image"}),r("div",{staticClass:"inner"},[r("div",{staticClass:"common-introduce"},[r("div",{staticClass:"name-area"},[t._v(" Yun HyeWon ")]),r("ul",{staticClass:"contact"},[r("li",[r("a",{attrs:{href:"#"}},[t._v("email")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("phone")])])])]),r("div",{staticClass:"detail-introduce"},[r("h1",[t._v("introduce")]),r("p",{staticClass:"introduce-title"},[t._v("Frontend Developer")]),r("p",{staticClass:"introduce-description"},[t._v("프론트엔드 개발자입니다아알어ㅏ러아ㅗ나로낟롼ㅇ란ㅇ혼이ㅏ혼이ㅏ혼아러나ㅣ돌도라ㅣㄴ도롸도")])])])])}],S={name:"Introduce"},j=S,E=(r("c0f3"),Object(u["a"])(j,I,x,!1,null,"1005a44d",null)),D=E.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section section--skills"},[r("div",{staticClass:"inner"},[r("h1",{staticClass:"section-title"},[t._v("Skill")]),r("ul",{staticClass:"skills-wrap"},t._l(t.skills,(function(e,s){return r("li",{key:e.skillId,staticClass:"skill-item"},[r("div",[r("div",{staticClass:"skill-name-wrap"},[r("img",{attrs:{src:e.skillImgPath,alt:"",width:"50",height:"50"}}),r("p",{staticClass:"skill-name"},[t._v(t._s(e.skillName))])]),r("div",{staticClass:"circle-progress-wrap"},[r("svg",{staticClass:"circle-progress",attrs:{width:"140",height:"140",viewBox:"0 0 140 140"}},[r("circle",{staticClass:"frame",attrs:{cx:"70",cy:"70",r:t.progressRadius,"stroke-width":"12"}}),r("circle",{staticClass:"bar",style:{"stroke-dasharray":t.calculateDasharray(),"stroke-dashoffset":t.calculateDashoffset(e.skillPer),stroke:t.progressColorList[s]},attrs:{cx:"70",cy:"70",r:t.progressRadius,"stroke-width":"12"}})]),r("strong",{staticClass:"value"},[t._v(t._s(e.skillPer)+"%")])])]),r("div",[t._v(t._s(e.skillDescription))])])})),0)])])},O=[],N={name:"Skill",data:function(){return{progressRadius:60,progressColorList:["#ccbae2","#f0a9a7","#d9bbc7","#b1cfeb","#a9d6a3","#e1c2c0","#d8cab0","#d5adcf"],skills:[{skillId:1,skillPer:80,skillName:"HTML5",skillImgPath:r("4ffd"),skillDescription:"마크업 구조를 시맨틱하게 설계 가능"},{skillId:2,skillPer:50,skillName:"CSS",skillImgPath:r("4ffd"),skillDescription:""},{skillId:3,skillPer:80,skillName:"JavaScript + JQuery",skillImgPath:r("4ffd"),skillDescription:""},{skillId:4,skillPer:20,skillName:"TypeScript",skillImgPath:r("4ffd"),skillDescription:""},{skillId:5,skillPer:50,skillName:"MySQL",skillImgPath:r("4ffd"),skillDescription:""},{skillId:6,skillPer:70,skillName:"Spring + SpringBoot",skillImgPath:r("4ffd"),skillDescription:""},{skillId:7,skillPer:70,skillName:"VueJS",skillImgPath:r("4ffd"),skillDescription:""},{skillId:8,skillPer:10,skillName:"ReactJS",skillImgPath:r("4ffd"),skillDescription:""}]}},methods:{calculateDasharray:function(){var t=2*Math.PI*this.progressRadius;return t},calculateDashoffset:function(t){var e=2*Math.PI*this.progressRadius;return e*(1-t/100)}}},$=N,A=(r("13fd"),Object(u["a"])($,T,O,!1,null,"0758a6d8",null)),z=A.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section section--work"},[r("div",{staticClass:"inner"},[r("h1",{staticClass:"section-title"},[t._v("works")]),t.maxWorkPage>0?r("div",{staticClass:"slider-control"},[r("div",{staticClass:"arrow-wrap"},[r("div",{staticClass:"arrow arrow-left",style:t.leftArrowStyle,on:{click:t.moveLeftPage}},[t._v("left")]),r("div",{staticClass:"arrow arrow-right",style:t.rightArrowStyle,on:{click:t.moveRightPage}},[t._v("right")])]),r("div",{staticClass:"select-work-wrap"},t._l(t.maxWorkPage,(function(e){return r("label",{key:e,class:{active:t.currentWorkPage==e-1}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentWorkPage,expression:"currentWorkPage"}],attrs:{id:"page",type:"radio",name:"select-work"},domProps:{value:e-1,checked:t._q(t.currentWorkPage,e-1)},on:{change:[function(r){t.currentWorkPage=e-1},t.movePage]}})])})),0)]):t._e(),r("ul",{staticClass:"slider works-wrap"},t._l(t.works,(function(e){return r("li",{key:e.workId,staticClass:"slider-item work-item"},[r("div",{staticClass:"card"},[r("img",{attrs:{src:e.workImgPath,alt:""}}),r("div",{staticClass:"work-title"},[t._v(t._s(e.workTitle))]),r("div",{staticClass:"work-description"},[t._v(t._s(e.workDescription))])])])})),0)])])},R=[],M={name:"Works",mounted:function(){window.addEventListener("resize",this.handleResize),this.resizeWorksWrap(),this.addSliderEvent()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},data:function(){return{resizeTimer:null,resizeDelay:30,barColorList:["#ccbae2","#f0a9a7","#d9bbc7","#b1cfeb","#a9d6a3","#e1c2c0","#d8cab0","#d5adcf"],works:[{workId:1,workTitle:"제목입니다1",workDescription:"설명입니다1",workImgPath:r("4ffd")},{workId:2,workTitle:"제목입니다2",workDescription:"설명입니다2",workImgPath:r("4ffd")},{workId:3,workTitle:"제목입니다3",workDescription:"설명입니다3",workImgPath:r("4ffd")},{workId:4,workTitle:"제목입니다4",workDescription:"설명입니다4",workImgPath:r("4ffd")},{workId:5,workTitle:"제목입니다5",workDescription:"설명입니다5",workImgPath:r("4ffd")},{workId:6,workTitle:"제목입니다6",workDescription:"설명입니다6",workImgPath:r("4ffd")},{workId:7,workTitle:"제목입니다7",workDescription:"설명입니다7",workImgPath:r("4ffd")}],currentWorkPage:0,documentWidth:document.body.offsetWidth}},computed:{currentWorkItem:function(){return this.documentWidth>1250?4:this.documentWidth>950?3:this.documentWidth>650?2:1},maxWorkPage:function(){return Math.ceil(this.works.length/this.currentWorkItem)},leftArrowStyle:function(){return 0===this.currentWorkPage?{opacity:0,pointerEvents:"none"}:{}},rightArrowStyle:function(){return this.currentWorkPage===this.maxWorkPage-1?{opacity:0,pointerEvents:"none"}:{}}},methods:{resizeWorksWrap:function(){for(var t=document.getElementsByClassName("works-wrap")[0].offsetWidth,e=document.getElementsByClassName("work-item"),r=document.querySelectorAll(".select-work-wrap label"),s=0;s<e.length;s++)e[s].style.minWidth=t/this.currentWorkItem+"px";for(var i=0;i<r.length;i++)r[i].style.minWidth=t/2/this.maxWorkPage+"px"},addSliderEvent:function(){for(var t,e=this,r=document.getElementsByClassName("slider-item"),s=!1,i=0;i<r.length;i++)r[i].addEventListener("mousedown",(function(e){s=!1,t=e.clientX})),r[i].addEventListener("mousemove",(function(){s=!0})),r[i].addEventListener("mouseup",(function(r){s&&(r.clientX>t&&0!=e.currentWorkPage?e.currentWorkPage--:r.clientX<t&&e.currentWorkPage<e.maxWorkPage-1&&e.currentWorkPage++,e.movePage())}))},movePage:function(){var t=document.getElementsByClassName("works-wrap")[0].offsetWidth;this.currentWorkPage>=this.maxWorkPage&&(this.currentWorkPage=this.maxWorkPage-1),document.getElementsByClassName("works-wrap")[0].style.left=-1*t*this.currentWorkPage+"px"},moveLeftPage:function(){this.currentWorkPage--,this.movePage()},moveRightPage:function(){this.currentWorkPage++,this.movePage()},handleResize:function(){var t=this;clearTimeout(this.resizeTimer),t.resizeTimer=setTimeout((function(){t.documentWidth=document.body.offsetWidth,t.resizeWorksWrap(),t.movePage()}),t.resizeDelay)}}},B=M,J=(r("8f90"),Object(u["a"])(B,L,R,!1,null,"5fd7375c",null)),H=J.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section section--contact"},[r("h1",{staticClass:"section-title"},[t._v("contact")]),r("div",{staticClass:"contact-wrap"},[r("div",[t._m(0),r("div",{staticClass:"form-control form-inline"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSenderType,expression:"selectedSenderType"}],staticClass:"inline-item w-30p",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedSenderType=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"개인"}},[t._v("개인")]),r("option",{attrs:{value:"회사"}},[t._v("회사")])]),r("input",{staticClass:"inline-item w-left",attrs:{type:"text",name:"company",id:"company",placeholder:"회사명을 입력해주세요",disabled:"개인"===t.selectedSenderType}})]),t._m(1)]),t._m(2)]),r("button",{staticClass:"send-btn"},[t._v("send")])])},X=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-control"},[r("input",{attrs:{type:"text",name:"sender",id:"sender",placeholder:"이름을 입력해주세요"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-control"},[r("input",{attrs:{type:"text",name:"subject",id:"subject",placeholder:"제목을 입력해주세요"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-control"},[r("input",{attrs:{type:"text",name:"message",id:"message",placeholder:"메세지를 입력해주세요"}})])}],q={name:"Contact",data:function(){return{selectedSenderType:"개인"}}},Q=q,V=(r("e940"),Object(u["a"])(Q,F,X,!1,null,"e36e87ea",null)),Y=V.exports,G={name:"AppMain",components:{Introduce:D,Skill:z,Works:H,Contact:Y}},K=G,U=Object(u["a"])(K,b,W,!1,null,null,null),Z=U.exports;s["a"].use(C["a"]);var tt=[{path:"/portfolio",component:Z}],et=new C["a"]({mode:"history",routes:tt}),rt=et;s["a"].use(rt),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(y)},router:rt}).$mount("#app")},"76e0":function(t,e,r){},"85ec":function(t,e,r){},"8f90":function(t,e,r){"use strict";r("3047")},"9e4d":function(t,e,r){"use strict";r("d80a")},c0f3:function(t,e,r){"use strict";r("4ab8")},d80a:function(t,e,r){},e877:function(t,e,r){},e940:function(t,e,r){"use strict";r("2fda")}});
//# sourceMappingURL=app.8ffeb9fd.js.map