(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{141:function(e,n,t){"use strict";t.r(n);var r,a,s,i,c,o,u,l,d=t(0),p=t.n(d),b=t(19),f=t.n(b),j=t(164),x=t(10),O=t(163),h=t(2),g=function(e){var n=p.a.useState({value:"game"}),t=Object(x.a)(n,2),r=t[0],a=t[1];return Object(h.jsx)(O.a,{size:"s",items:Object(h.jsx)(O.a.Items,{align:"center",design:"primary",onChange:function(e,n){return a({value:n})},value:r.value,children:[{value:"game",label:"\u0418\u0433\u0440\u0430"}].map((function(e){var n=e.value,t=e.label;return Object(h.jsx)(O.a.Item,{value:n,label:t},n)}))})})},y=t(8),m=t(160),v=t(13),I=new m.a,w=function(){I.warning({title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",message:"API \u0441\u0442\u0430\u043b\u043e \u043f\u043b\u043e\u0445\u043e"})},C=function(e){I.success({message:"\u0412\u044b \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438: ".concat(Object(v.convertNumberToString)(e)),delay:1200})},k=function(e){I.warning({message:"\u0412\u044b \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0438: -".concat(Object(v.convertNumberToString)(e)),delay:1200})},P=t(26),V=(P.debounce((function(e){e()}),250,{leading:!0}),P.debounce((function(e){e()}),50,{leading:!0}),t(50)),L=t.n(V),S=function(e,n){return L()(e,n)},B=["nose1.png","nose2.png","nose3.png","nose4.png","nose5.png","nose6.png","nose7.png"],z=["mouth1.png","mouth2.png","mouth3.png","mouth4.png","mouth5.png","mouth6.png","mouth7.png"],M=["eye1.png","eye2.png","eye3.png","eye4.png","eye5.png","eye6.png","eye7.png"],E=["eb1.png","eb2.png","eb3.png","eb4.png","eb5.png","eb6.png","eb7.png"],G=["\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","\u0431\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439","\u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440","\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c","\u0432\u043e\u0435\u043d\u043d\u044b\u0439","\u0432\u0440\u0430\u0447","\u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440","\u0433\u043b\u0430\u0432\u0432\u0440\u0430\u0447","\u0434\u0432\u043e\u0440\u043d\u0438\u043a","\u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440","\u0438\u043d\u0436\u0435\u043d\u0435\u0440","\u043a\u0430\u0441\u0441\u0438\u0440","\u043a\u043e\u043f\u0438\u0440\u0430\u0439\u0442\u0435\u0440","\u043c\u0430\u0440\u043a\u0435\u0442\u043e\u043b\u043e\u0433","\u043c\u0435\u0434\u0431\u0440\u0430\u0442","\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440","\u043d\u0430\u0443\u0447\u043d\u044b\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a","\u043e\u0445\u0440\u0430\u043d\u043d\u0438\u043a","\u043f\u0435\u043a\u0430\u0440\u044c","\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c","\u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c","\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442","\u0440\u0435\u043a\u0442\u043e\u0440","\u0440\u0438\u044d\u043b\u0442\u043e\u0440","\u0441\u0432\u0430\u0440\u0449\u0438\u043a","\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u041c\u0412\u0414","\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c","\u0441\u0442\u0443\u0434\u0435\u043d\u0442","\u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c","\u0444\u0440\u0438\u043b\u0430\u043d\u0441\u0435\u0440","\u044e\u0440\u0438\u0441\u0442"],R=function(){var e={eyebrowsIndex:S(0,E.length-1),eyesIndex:S(0,M.length-1),noseIndex:S(0,B.length-1),mouthIndex:S(0,z.length-1)},n=S(11e3,3e5),t=S(1,11)<=4?18*n:n*S(6,9),r=10*n>t?-.01*t:.01*t;return{eyebrows:E[e.eyebrowsIndex],eyes:M[e.eyesIndex],nose:B[e.noseIndex],mouth:z[e.mouthIndex],avatar:"".concat(e.eyebrowsIndex,"-").concat(e.eyesIndex,"-").concat(e.noseIndex,"-").concat(e.mouthIndex),profession:G[S(0,30)],salary:n,amount:t,profit:r}},N=function(e){var n=e.split("-");return{eyebrows:E[parseInt(n[0])],eyes:M[parseInt(n[1])],nose:B[parseInt(n[2])],mouth:z[parseInt(n[3])]}},T=t(1),X=T.e.div(r||(r=Object(y.a)(["\nwidth: 152px;\nheight: 152px;\nposition: absolute;\n\nborder-radius: 50%;\ncursor: pointer;\n\n&:hover {\n  background: #FED500;\n  transform: rotate(-2deg);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 20px 0px;\n}\nuser-select: none;\n"]))),A=T.e.img(a||(a=Object(y.a)(["\nwidth: 128px;\nheight: 128px;\ntop: 12px;\nleft: 12px;\nposition: absolute;\nuser-select: none;\n"]))),F=T.e.div(s||(s=Object(y.a)(["\nwidth: 200px;\nposition: absolute;\npadding: 4px;\nuser-select: none;\ntext-align: center;\nline-height: 1.2;\nfont-weight: 700;\ntext-shadow: 2px 2px 2px #fff;\n"]))),D="/demogame/img/game-assets/faces",H=function(e){e.x&&e.y||console.error("err",e);var n=!!e.isVisible,t=e.string?N(e.string):R(),r={display:n?"block":"none"};return e.x&&e.y&&(r.x=e.x,r.y=e.y),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(X,{style:{left:e.x||"unset",top:e.y||"unset",display:n?"block":"none"},onMouseDown:function(){e.onClick&&e.onClick(e.index)},children:[Object(h.jsx)(A,{alt:"",src:"".concat(D,"/face.png")}),Object(h.jsx)(A,{alt:"",src:"".concat(D,"/").concat(t.eyebrows)}),Object(h.jsx)(A,{alt:"",src:"".concat(D,"/").concat(t.eyes)}),Object(h.jsx)(A,{alt:"",src:"".concat(D,"/").concat(t.nose)}),Object(h.jsx)(A,{alt:"",src:"".concat(D,"/").concat(t.mouth)})]}),Object(h.jsx)(F,{style:{left:e.x-20,top:e.y+145,display:n?"block":"none"},children:e.profession})]})},J=T.e.div(i||(i=Object(y.a)(["\nwidth: 152px;\nheight: 152px;\nposition: absolute;\n\nborder-radius: 50%;\n\n\nuser-select: none;\n"]))),q=T.e.img(c||(c=Object(y.a)(["\nwidth: 96px;\nheight: 96px;\ntop: 12px;\nleft: 12px;\nposition: absolute;\nuser-select: none;\n\n"]))),_=T.e.div(o||(o=Object(y.a)(["\nwidth: 160px;\nposition: absolute;\npadding: 4px;\nuser-select: none;\n\nfont-size:12px;\ntext-align: center;\nline-height: 1.15;\nfont-weight: 700;\ntext-shadow: 2px 2px 2px #fff;\n\n"]))),K="/demogame/img/game-assets/faces",Q=function(e){var n=e.string?N(e.string):R();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(J,{style:{left:e.x,top:e.y},onClick:function(){e.onClick&&e.onClick(e.index)},children:[Object(h.jsx)(q,{alt:"",src:"".concat(K,"/face.png")}),Object(h.jsx)(q,{alt:"",src:"".concat(K,"/").concat(n.eyebrows)}),Object(h.jsx)(q,{alt:"",src:"".concat(K,"/").concat(n.eyes)}),Object(h.jsx)(q,{alt:"",src:"".concat(K,"/").concat(n.nose)}),Object(h.jsx)(q,{alt:"",src:"".concat(K,"/").concat(n.mouth)})]}),Object(h.jsxs)(_,{style:{left:e.x-0,top:e.y+105},children:[e.profession,Object(h.jsx)("br",{}),"\u043a\u0440\u0435\u0434\u0438\u0442: ",Object(v.convertNumberToString)(e.amount),"\u20bd",Object(h.jsx)("br",{}),"\u0417\u043f: ",Object(v.convertNumberToString)(e.salary),"\u20bd"]})]})},U=T.e.div(u||(u=Object(y.a)(["\nwidth: 152px;\nheight: 152px;\nposition: absolute;\n\nborder-radius: 50%;\n\ntransform: rotate(-5deg);\nuser-select: none;\ntop: 570px;\nleft: 0px;\n"]))),W=T.e.img(l||(l=Object(y.a)(["\nwidth: 96px;\nheight: 96px;\nposition: absolute;\nuser-select: none;\n\n"]))),Y=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(U,{style:{left:e.x},children:Object(h.jsx)(W,{alt:"",src:"".concat("/demogame/img/game-assets/","/bag.png")})})})},Z=t(161),$=t(167),ee=t(168),ne=t(172),te=t(170),re=t(166),ae=t(3),se=t.n(ae),ie=t(6),ce=t(4),oe=t(7),ue=t(9),le=t.n(ue);var de,pe,be="https://api.raiffeisen.ru/openapi-100-opn/rest/gamecontroller",fe=function(e){var n,t;return(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data)?null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data:null===e||void 0===e?void 0:e.data},je=function(e){return!!e&&(200===e.status||302===e.status)},xe=function(){var e=Object(ie.a)(se.a.mark((function e(n,t){var r,a,s,i,c;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null,i=void 0,e.prev=2,e.next=5,n();case 5:s=e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),s=e.t0.response,i=e.t0;case 12:return!(c={isOk:je(s),body:fe(s),url:null===(r=s)||void 0===r||null===(a=r.config)||void 0===a?void 0:a.url,error:i}).isOk&&t&&t(c),e.abrupt("return",c);case 15:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n,t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(ie.a)(se.a.mark((function e(n){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe((function(){return le.a.post("".concat(be,"/create-player"),n)}),w);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),he=function(){var e=Object(ie.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe((function(){return le.a.get("".concat(be,"/get-players"))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(ie.a)(se.a.mark((function e(n){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe((function(){return le.a.post("".concat(be,"/confirm-lead?leadId=").concat(n))}),w);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ye=function(){var e=Object(ie.a)(se.a.mark((function e(n){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe((function(){return le.a.post("".concat(be,"/create-lead"),n)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),me=function(){var e=Object(ie.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe((function(){return le.a.get("".concat(be,"/get-confirmed-leads"))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(ie.a)(se.a.mark((function e(n){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe((function(){return le.a.get("".concat(be,"/get-not-confirmed-leads?playerId=").concat(n))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(ie.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe((function(){return le.a.get("".concat(be,"/clear-game"))}),w);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){return[Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1}),Object(ce.a)(Object(ce.a)({},R()),{},{isVisible:!1})]},Ce=Object(oe.c)({currentPage:"rules",setCurrentPage:Object(oe.b)((function(e,n){e.currentPage=n})),bagX:0,setBagX:Object(oe.b)((function(e,n){e.bagX=n})),avatars:we(),hideAvatar:Object(oe.b)((function(e,n){e.avatars[n]&&(e.avatars[n].isVisible=!1)})),regenerateAvatats:Object(oe.b)((function(e,n){var t=we(),r=[];e.avatars.forEach((function(e,n){e.isVisible?e.isVisible=!1:r.push(n)}));for(var a=S(2,6),s=0;s<a;s++){var i=S(0,r.length-1),c=r[i];t[c]&&(t[c].isVisible=!0),r.splice(i,1)}e.avatars=t})),leadPositions:[],hiddenLeadIds:[],catchedIds:[],catchLeadId:Object(oe.b)((function(e,n){-1===e.catchedIds.indexOf(n)&&(e.catchedIds.push(n),e.leadPositions.find((function(e){return e.leadId===n})).x=-400);ge(n)})),updateLeadPosition:Object(oe.b)((function(e,n){var t=n.leadId,r=e.leadPositions.find((function(e){return e.leadId===t}));if(r){var a=r.speed+r.y;a>=540?(e.hiddenLeadIds.push(t),e.leadPositions=e.leadPositions.filter((function(e){return e.leadId!==t}))):r.y=a}else-1===e.catchedIds.indexOf(t)&&-1===e.hiddenLeadIds.indexOf(t)&&e.leadPositions.push(n)})),playerIds:[],playerById:{},scoreByPlayerId:{},confirmedLeadIds:[],confirmedLeadById:{},myConfrimedLeadIds:[],nonConfirmedLeadIds:[],nonConfirmedLeadById:{},isReady:!1,player:null,getState:Object(oe.e)((function(e,n,t){return t.getState()})),setGameIsReady:Object(oe.b)((function(e,n){e.isReady=!0})),setGameIsNotReady:Object(oe.b)((function(e,n){e.avatars=we(),e.leadPositions=[],e.bagX=0,e.hiddenLeadIds=[],e.catchedIds=[],e.isReady=!1,e.player=null,e.playerIds=[],e.playerById={},e.scoreByPlayerId={},e.confirmedLeadIds=[],e.confirmedLeadById={},e.myConfrimedLeadIds=[],e.nonConfirmedLeadIds=[],e.nonConfirmedLeadById={}})),setPlayer:Object(oe.b)((function(e,n){e.player=n})),setPlayers:Object(oe.b)((function(e,n){var t=[],r={};n.forEach((function(e){var n=e.playerId;t.push(n),r[n]=e})),e.playerIds=t,e.playerById=r})),setConfirmedLeads:Object(oe.b)((function(e,n){var t,r,a=[],s={},i=[],c=null===(t=e.player)||void 0===t?void 0:t.playerId,o=null===(r=e.player)||void 0===r?void 0:r.playerGroup;n.forEach((function(e){var n=e.leadId;a.push(n),s[n]=e,(1===o&&e.fromPlayerId===c||2===o&&e.toPlayerId===c)&&i.push(n)})),e.playerIds=a,e.playerById=s,e.myConfrimedLeadIds=i})),setNonConfirmedLeads:Object(oe.b)((function(e,n){var t=[],r={};n.forEach((function(e){var n=e.leadId;t.push(n),r[n]=Object(ce.a)({},e)})),e.nonConfirmedLeadIds=t,e.nonConfirmedLeadById=r})),startGame:Object(oe.e)(function(){var e=Object(ie.a)(se.a.mark((function e(n,t,r){var a;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setGameIsNotReady(),e.next=3,Oe(t);case 3:if((a=e.sent).isOk){e.next=6;break}return e.abrupt("return");case 6:return n.setPlayer(a.body),e.abrupt("return",a.body);case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()),loadPlayers:Object(oe.e)(function(){var e=Object(ie.a)(se.a.mark((function e(n,t,r){var a;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he();case 2:if(!(a=e.sent).isOk){e.next=6;break}return n.setPlayers(a.body),e.abrupt("return",a.body);case 6:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()),loadConfirmedLeads:Object(oe.e)(function(){var e=Object(ie.a)(se.a.mark((function e(n,t,r){var a;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:(a=e.sent).isOk&&(n.setConfirmedLeads(a.body),n.calculatePlayersScore());case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()),loadNonConfirmedLeads:Object(oe.e)(function(){var e=Object(ie.a)(se.a.mark((function e(n,t,r){var a;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve(r.getState().player.playerId);case 2:(a=e.sent).isOk&&n.setNonConfirmedLeads(a.body);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()),calculatePlayersScore:Object(oe.b)((function(e,n){var t={};e.confirmedLeadIds.forEach((function(n){var r=e.confirmedLeadById[n];if(r){var a=r.fromPlayerId,s=r.toPlayerId,i=e.playerById[a],c=e.playerById[s];if(i&&c){var o=0,u=r.profit;r.profit>0&&(o=5e3),t[a]?t[a]=t[a]+o:t[a]=o,t[s]?t[s]=t[s]+u:t[s]=u}}})),e.scoreByPlayerId=t})),clearGame:Object(oe.e)(function(){var e=Object(ie.a)(se.a.mark((function e(n,t,r){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie();case 2:n.setGameIsNotReady();case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())}),ke=Object(oe.d)(),Pe=ke.useStoreActions,Ve=ke.useStoreState,Le=(ke.useStore,Pe),Se=Ve,Be=T.e.div(de||(de=Object(y.a)(["\nmargin-top:32px;\n"]))),ze=function(e){var n=Le((function(e){return e})).setCurrentPage;return Object(h.jsx)(Be,{children:Object(h.jsxs)($.a.Row,{children:[Object(h.jsx)($.a.Col,{size:2}),Object(h.jsx)($.a.Col,{size:8,children:Object(h.jsx)(ee.a,{header:Object(h.jsxs)(ne.a,{design:"vertical",size:"s",children:[Object(h.jsx)(ee.a.Title,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 Open API Demo Game!"}),Object(h.jsx)(ee.a.Subtitle,{style:{fontSize:"140%"},children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b"})]}),footer:Object(h.jsx)(ne.a,{justifyContent:"flex-end",children:Object(h.jsxs)(te.a,{onClick:function(){n("create-player")},design:"accent",size:"xl",children:["\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",Object(h.jsx)(Z.a,{})]})}),children:Object(h.jsxs)($.a.Row,{children:[Object(h.jsx)($.a.Col,{size:3,children:Object(h.jsx)(H,{x:void 0,y:void 0,isVisible:!0})}),Object(h.jsxs)($.a.Col,{size:9,children:[Object(h.jsxs)(re.b,{style:{fontSize:"120%",lineHeight:1.5,marginBottom:16},children:["\u0412\u0441\u0435 \u0438\u0433\u0440\u043e\u043a\u0438 \u0434\u0435\u043b\u044f\u0442\u0441\u044f \u043d\u0430 \u0434\u0432\u0435 \u0433\u0440\u0443\u043f\u043f\u044b: ",Object(h.jsx)("b",{children:"\u043b\u0438\u0434\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b"})," \u0438 ",Object(h.jsx)("b",{children:"\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u043f\u043e \u0432\u044b\u0434\u0430\u0447\u0435"}),"."]}),Object(h.jsxs)(re.b,{style:{fontSize:"120%",lineHeight:1.5,marginBottom:16},children:[Object(h.jsx)("b",{children:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043b\u0438\u0434\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432"})," - \u043f\u0440\u0438\u0432\u043b\u0435\u0447\u044c \u0432 \u0411\u0430\u043d\u043a \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043b\u0438\u0434\u043e\u0432 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0435\u0434\u0438\u0442."]}),Object(h.jsxs)(re.b,{style:{fontSize:"120%",lineHeight:1.5,marginBottom:16},children:[Object(h.jsx)("b",{children:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430 \u043f\u043e \u0432\u044b\u0434\u0430\u0447\u0435"})," - \u0432\u044b\u0434\u0430\u0442\u044c \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432 \u0431\u043b\u0430\u0433\u043e\u043d\u0430\u0434\u0435\u0436\u043d\u044b\u043c \u0437\u0430\u0435\u043c\u0449\u0438\u043a\u0430\u043c, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u0431\u043b\u0430\u0433\u043e\u043d\u0430\u0434\u0435\u0436\u043d\u044b\u043c."]})]})]})})}),Object(h.jsx)($.a.Col,{size:2})]})})},Me=t(14),Ee=t(162),Ge=t(165),Re=t(169),Ne=T.e.div(pe||(pe=Object(y.a)(["\nmargin-top:32px;\n"])));var Te,Xe,Ae=function(e){var n,t,r=Le((function(e){return e})),a=r.setCurrentPage,s=r.startGame,i=p.a.useState({name:"",group:(n=1,t=10,Math.floor(Math.random()*(t-n+1)+n)>=4?"2":"1")}),c=Object(x.a)(i,2),o=c[0],u=c[1],l=p.a.useState({name:"",group:""}),d=Object(x.a)(l,2),b=d[0],f=d[1],j=function(){var e=Object(ie.a)(se.a.mark((function e(){var n,t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=O("name"),t=O("group"),f({name:n,group:t}),n||t){e.next=8;break}return e.next=6,s({playerName:o.name,playerGroup:parseInt(o.group)});case 6:e.sent&&a("game-".concat(o.group));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e,n){var t=void 0!==n?n:o[e];if("name"===e){if(!t||t.trim().length<2){var r="\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",a=Object(ce.a)(Object(ce.a)({},b),{},Object(Me.a)({},e,r));return f(a),r}f(Object(ce.a)(Object(ce.a)({},b),{},Object(Me.a)({},e,"")))}else if("group"===e)return f(Object(ce.a)(Object(ce.a)({},b),{},Object(Me.a)({},e,""))),""},g=function(e,n){var t=Object(ce.a)(Object(ce.a)({},o),{},Object(Me.a)({},e,n));u(t)};return Object(h.jsx)(Ne,{children:Object(h.jsxs)($.a.Row,{children:[Object(h.jsx)($.a.Col,{size:2}),Object(h.jsx)($.a.Col,{size:8,children:Object(h.jsx)(ee.a,{header:Object(h.jsxs)(ne.a,{design:"vertical",size:"s",children:[Object(h.jsx)(ee.a.Title,{children:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"}),Object(h.jsx)(ee.a.Subtitle,{style:{fontSize:"140%"},children:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u0441\u0435\u0431\u0435 \u043d\u0438\u043a, \u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0437\u0430 \u043a\u043e\u0433\u043e \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0433\u0440\u0430\u0442\u044c"})]}),footer:Object(h.jsx)(ne.a,{justifyContent:"flex-end",children:Object(h.jsxs)(te.a,{onClick:j,design:"accent",size:"xl",children:["\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443",Object(h.jsx)(Ee.a,{})]})}),children:Object(h.jsx)($.a.Row,{children:Object(h.jsxs)($.a.Col,{size:8,children:[Object(h.jsxs)(Ge.a,{size:"m",style:{marginBottom:16},children:[Object(h.jsx)(Ge.a.Label,{required:!0,children:"\u0418\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430"}),Object(h.jsxs)(Ge.a.Content,{children:[Object(h.jsx)(Re.a,{value:o.name,onBlur:function(){return O("name")},onChange:function(e){O("name",e.target.value),g("name",e.target.value)}}),b.name&&Object(h.jsx)(Ge.a.Message,{color:"critical",children:b.name})]})]}),Object(h.jsx)(Re.a,{onChange:function(e){O("group",e.target.value),g("group",e.target.value)},value:o.group,style:{width:"40px",border:"0px",opacity:"0.1"}})]})})})}),Object(h.jsx)($.a.Col,{size:2})]})})},Fe=t(16),De=T.e.div(Te||(Te=Object(y.a)(["\nmargin: 0 auto;\nwidth: 1280px;\nheight: calc(720px - 49px);\n\nbackground-position: 0 -15px;\nposition: relative;\nz-index: 1;\n\n&::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: .8;\n  z-index: -1;\n  background: url('/demogame/img/game-assets/mall_bg.png');\n}\n"]))),He=function(e){var n=Se((function(e){return e})),t=(n.player,n.avatars),r=Le((function(e){return e})),a=(r.setCurrentPage,r.startGame,function(){var e=Se((function(e){return e})),n=e.player,t=e.avatars,r=Le((function(e){return e})),a=(r.setCurrentPage,r.startGame,r.loadPlayers),s=r.regenerateAvatats,i=r.hideAvatar,c=p.a.useState(!1),o=Object(x.a)(c,2),u=o[0],l=o[1],d=Object(Fe.a)("/sounds/theme.mp3",{volume:.01,onend:function(){l(!1)}}),b=Object(x.a)(d,2),f=b[0];b[1].stop,p.a.useEffect((function(){return function(){}}),[]);var j=p.a.useRef(null);p.a.useEffect((function(){var e=setTimeout((function(){j.current=setInterval((function(){s()}),1500)}),1e3);return function(){e&&clearTimeout(e),j.current&&clearInterval(j.current)}}),[]);var O=Object(Fe.a)("/sounds/catch.mp3",{volume:.5,interrupt:!0}),h=Object(x.a)(O,1)[0],g=p.a.useState(0),y=Object(x.a)(g,2),m=y[0],v=y[1];return{playingMusic:u,setPlayingMusic:l,playTheme:f,avatars:t,onClick:function(){var e=Object(ie.a)(se.a.mark((function e(r){var s,c,o,u;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(),i(r),c=t[r],e.next=5,a();case 5:if(o=(o=e.sent).filter((function(e){return 2===e.playerGroup})),u=null,!(null===(s=o)||void 0===s?void 0:s.length)){e.next=12;break}return m>=o.length?(u=o[0].playerId,v(1)):(u=o[m].playerId,v(m+1)),e.next=12,ye({fromPlayerId:n.playerId,toPlayerId:u,salary:c.salary,amount:c.amount,profit:c.profit,avatar:c.avatar,profession:c.profession,confirmed:!1});case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}()),s=a.playingMusic,i=a.setPlayingMusic,c=a.playTheme,o=a.onClick;return Object(h.jsx)(De,{onClick:function(e){s||(i(!0),c())},children:t.length>=11&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(H,{onClick:o,index:0,profession:t[0].profession,isVisible:t[0].isVisible,x:20,y:140}),Object(h.jsx)(H,{onClick:o,index:1,profession:t[1].profession,isVisible:t[1].isVisible,x:230,y:160}),Object(h.jsx)(H,{onClick:o,index:2,profession:t[2].profession,isVisible:t[2].isVisible,x:420,y:140}),Object(h.jsx)(H,{onClick:o,index:3,profession:t[3].profession,isVisible:t[3].isVisible,x:650,y:160}),Object(h.jsx)(H,{onClick:o,index:4,profession:t[4].profession,isVisible:t[4].isVisible,x:1090,y:160}),Object(h.jsx)(H,{onClick:o,index:5,profession:t[5].profession,isVisible:t[5].isVisible,x:20,y:470}),Object(h.jsx)(H,{onClick:o,index:6,profession:t[6].profession,isVisible:t[6].isVisible,x:230,y:380}),Object(h.jsx)(H,{onClick:o,index:7,profession:t[7].profession,isVisible:t[7].isVisible,x:410,y:480}),Object(h.jsx)(H,{onClick:o,index:8,profession:t[8].profession,isVisible:t[8].isVisible,x:630,y:450}),Object(h.jsx)(H,{onClick:o,index:9,profession:t[9].profession,isVisible:t[9].isVisible,x:880,y:430}),Object(h.jsx)(H,{onClick:o,index:10,profession:t[10].profession,isVisible:t[10].isVisible,x:1090,y:480})]})})},Je=[20,130,240,350,460,570,680,790,900,1010,1120],qe=function(e,n){return t=e.x,r=e.y,a=e.x+96,s=e.y+96,i=560,c=n+96,o=666,!(a<n||t>c||r>o||s<i);var t,r,a,s,i,c,o},_e=function(){var e=Se((function(e){return e})),n=e.bagX,t=(e.player,e.leadPositions,e.nonConfirmedLeadIds,e.nonConfirmedLeadById,e.catchedIds),r=Le((function(e){return e})),a=r.getState,s=(r.setCurrentPage,r.startGame,r.updateLeadPosition),i=r.loadNonConfirmedLeads,c=r.setBagX,o=r.catchLeadId,u=p.a.useRef(null),l=p.a.useRef(null),d=p.a.useState(!1),b=Object(x.a)(d,2),f=b[0],j=b[1],O=p.a.useState(!1),h=Object(x.a)(O,2),g=(h[0],h[1]),y=Object(Fe.a)("/sounds/catch.mp3",{volume:.5,interrupt:!0,onend:function(){g(!1)}}),m=Object(x.a)(y,1)[0],v=Object(Fe.a)("/sounds/theme.mp3",{volume:.01,onend:function(){j(!1)}}),I=Object(x.a)(v,2),w=I[0],P=(I[1].stop,function(){var e=a(),n=e.bagX,t=e.nonConfirmedLeadIds,r=e.nonConfirmedLeadById;e.leadPositions.forEach((function(e){qe(e,n)&&(e.profit>=0?C(e.profit):e.profit<0&&k(e.profit),o(e.leadId),g(!1))})),t.forEach((function(e){s(function(e,n){var t=S(0,Je.length-1);return{leadId:e,y:-100,x:Je[t],speed:S(10,35),profit:n}}(e,r[e].profit))}))});p.a.useEffect((function(){return l.current=setInterval((function(){P()}),250),function(){clearInterval(l.current)}}),[]),p.a.useEffect((function(){return u.current=setInterval(Object(ie.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:case"end":return e.stop()}}),e)}))),1e3),function(){clearInterval(u.current)}}),[]);return{onMouseMove:function(e){var r=a(),s=r.leadPositions,i=r.nonConfirmedLeadById;f||(console.log("playingMusic",f),j(!0),w()),s.forEach((function(e){var r=qe(e,n);if(console.log("isIntersect",r,e),r){i[e.leadId];e.profit>=0?C(e.profit):e.profit<0&&k(e.profit),o(e.leadId),-1===t.indexOf(e.leadId)&&(g(!0),m())}})),e.pageX<=1190&&c(e.pageX)},bagX:n}},Ke=T.e.div(Xe||(Xe=Object(y.a)(['\nmargin: 0 auto;\nwidth: 1280px;\nheight: calc(720px - 49px);\n\nbackground-position: 0 -15px;\nposition: relative;\nz-index: 1;\n\n&::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  z-index: -1;\n  background: #E6F6F8;\n}\n']))),Qe=function(e){var n=Se((function(e){return e})),t=(n.player,n.leadPositions),r=(n.nonConfirmedLeadIds,n.nonConfirmedLeadById),a=Le((function(e){return e})),s=(a.setCurrentPage,a.startGame,_e()),i=s.bagX,c=s.onMouseMove;return Object(h.jsx)("div",{style:{width:"100%",height:"100%"},onMouseMove:c,children:Object(h.jsxs)(Ke,{children:[Object(h.jsx)(Y,{x:i}),t.map((function(e){var n=r[e.leadId];return e&&n?Object(h.jsx)(Q,{id:n.leadId,string:n.avatar,profession:n.profession,salary:n.salary,amount:n.amount,x:e.x,y:e.y},n.leadId):null}))]})})};var Ue=function(){var e=Se((function(e){return e})).currentPage;return Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{}),"rules"===e&&Object(h.jsx)(ze,{}),"create-player"===e&&Object(h.jsx)(Ae,{}),"game-1"===e&&Object(h.jsx)(He,{}),"game-2"===e&&Object(h.jsx)(Qe,{}),Object(h.jsx)(j.a,{service:I,limit:3,valign:"top",align:"right"})]})},We=t(173);le.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",f.a.render(Object(h.jsx)(p.a.StrictMode,{children:Object(h.jsx)(We.a,{children:Object(h.jsx)(oe.a,{store:Ce,children:Object(h.jsx)(Ue,{})})})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.7767a467.chunk.js.map