(this["webpackJsonpcyberron-technologies"]=this["webpackJsonpcyberron-technologies"]||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/office.1ac08e26.jpg"},21:function(e,t,n){e.exports=n.p+"static/media/tunnel.731eff7d.jpg"},22:function(e,t,n){e.exports=n.p+"static/media/city.71d8cc1d.jpg"},27:function(e,t,n){e.exports=n(48)},32:function(e,t,n){e.exports=n.p+"static/media/main.2a540009.jpg"},33:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/cyber.35ae3963.jpg"},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(18),r=n.n(c),o=n(2),l=n(3),s=n(5),u=n(4),m=n(6),d=n(24),b=n(10),h=n(7),v=Object(h.a)(),f=(n(32),n(33),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Card city"},i.a.createElement("div",{className:"title"},"View Services")),i.a.createElement("div",{className:"Card phone"},i.a.createElement("div",{className:"title"},"Become a Member")),i.a.createElement("div",{className:"Card office"},i.a.createElement("div",{className:"title"},"Our Founders")))}}]),t}(a.Component)),p=n(20),g=n.n(p),E=n(21),j=n.n(E),O=(n(34),n(22)),y=n.n(O),N=(n(35),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={cards:[{id:1,title:"View Services",img:"".concat(y.a)},{id:2,title:"Become a Member",img:"".concat(j.a)},{id:3,title:"Our Leaders",img:"".concat(g.a)}]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Directory"},i.a.createElement(f,null),";"))}}]),t}(a.Component)),C=n(23),k=n.n(C),L=(n(37),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,isMobile:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.state.isLoading&&this.activateLoader(),window.screen.width<=700&&(this.setState({isMobile:!0}),v.push("/#/mobileUnderContruction"))}},{key:"activateLoader",value:function(){var e=this;return setTimeout((function(){e.setState({isLoading:!1})}),4e3)}},{key:"render",value:function(){return this.state.isMobile?null:i.a.createElement(i.a.Fragment,null,this.state.isLoading?i.a.createElement("div",{className:"pageLoader"},i.a.createElement("h1",{className:"loading"},"Loading"),i.a.createElement("div",null,i.a.createElement(k.a,{size:120,spinnerColor:"#333",spinnerWidth:2,visible:!0}))):i.a.createElement("div",{className:"LandingPage"},i.a.createElement("div",{className:"banner"},i.a.createElement("h1",null,"Innovate. Think. Believe. Cyberron."),i.a.createElement("button",{className:"exploreButton"},"Innovate Here")),i.a.createElement(N,null)))}}]),t}(a.Component)),M=(n(38),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"NavBar"},i.a.createElement("div",{className:"companyName"},"Cyberron | Global"),i.a.createElement("div",{className:""}),i.a.createElement("div",{className:"navButtons"},i.a.createElement("button",null,"Sign Up"),i.a.createElement("button",null,"Login"))))}}]),t}(a.Component)),w=(n(39),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!1,legalLinks:[{id:1,name:"Terms & Conditions"},{id:2,name:"Privacy Notice"},{id:3,name:"Cookie Policy"}]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"copyright"},"\xa9 2019 Cyberron Technologies | All Rights Reserved. | Innovating the World"),i.a.createElement("div",{className:"legalNav"},this.state.legalLinks.map((function(e){return i.a.createElement("span",{key:e.id,className:"link-item"},e.name)}))),i.a.createElement("div",{className:"invcore"},"Powered By: InvisionCore LLC"))}}]),t}(a.Component)),x=(n(40),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={isLoading:!1,isMobile:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isMobile",value:function(){window.screen.width>700&&this.setState({isMobile:!0})}},{key:"componentDidMount",value:function(){console.log("Component Mounted : MobileUnderContruction"),this.isMobile()}},{key:"render",value:function(){return this.state.isMobile?(v.push("/"),null):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"MobileUnderConstruction"},i.a.createElement("h1",{className:"mobileMessage"},"Oh no!"),i.a.createElement("h1",{className:"mobileMessage"},"Our mobile webpage is under construction - Please check back later!")))}}]),t}(a.Component)),B=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={isLoading:!1,isAuthenticated:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Component has mounted: Portal")}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(M,null),i.a.createElement(d.a,{history:v},i.a.createElement(b.d,null,i.a.createElement(b.b,{exact:!0,path:"/landing",component:L}),i.a.createElement(b.b,{exact:!0,path:"/mobileUnderContruction",component:x}),i.a.createElement(b.a,{from:"/",to:"/landing"}))),i.a.createElement(w,null))}}]),t}(a.Component);n(46),n(47);r.a.render(i.a.createElement(B,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8a767239.chunk.js.map