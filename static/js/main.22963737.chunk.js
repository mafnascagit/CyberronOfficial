(this["webpackJsonpcyberron-technologies"]=this["webpackJsonpcyberron-technologies"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/office.1ac08e26.jpg"},22:function(e,t,n){e.exports=n.p+"static/media/tunnel.731eff7d.jpg"},23:function(e,t,n){e.exports=n.p+"static/media/city.71d8cc1d.jpg"},26:function(e,t,n){e.exports=n(46)},31:function(e,t,n){e.exports=n.p+"static/media/main.2a540009.jpg"},32:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/cyber.35ae3963.jpg"},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(19),r=n.n(i),o=n(2),l=n(3),s=n(5),u=n(4),m=n(6),d=n(14),b=n(10),h=n(7),f=Object(h.a)(),v=(n(31),n(32),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Card city"},c.a.createElement("div",{className:"title"},"View Services")),c.a.createElement("div",{className:"Card phone"},c.a.createElement("div",{className:"title"},"Become a Member")),c.a.createElement("div",{className:"Card office"},c.a.createElement("div",{className:"title"},"Our Founders")))}}]),t}(a.Component)),p=n(21),E=n.n(p),O=n(22),j=n.n(O),g=(n(33),n(23)),y=n.n(g),N=(n(34),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={cards:[{id:1,title:"View Services",img:"".concat(y.a)},{id:2,title:"Become a Member",img:"".concat(j.a)},{id:3,title:"Our Leaders",img:"".concat(E.a)}]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Directory"},c.a.createElement(v,null),";"))}}]),t}(a.Component)),C=(n(35),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,isMobile:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.screen.width<=700&&(this.setState({isMobile:!0}),f.push("/CyberronOfficial/#/mobileUnderContruction"))}},{key:"render",value:function(){return this.state.isMobile?null:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"LandingPage"},c.a.createElement("div",{className:"banner"},c.a.createElement("h1",null,"Innovate. Think. Believe. Cyberron."),c.a.createElement("button",{className:"exploreButton"},"Innovate Here")),c.a.createElement(N,null)))}}]),t}(a.Component)),k=(n(36),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"NavBar"},c.a.createElement("div",{className:"companyName"},"Cyberron | Global"),c.a.createElement("div",{className:""}),c.a.createElement("div",{className:"navButtons"},c.a.createElement("button",null,"Sign Up"),c.a.createElement("button",null,"Login"))))}}]),t}(a.Component)),M=(n(37),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!1,legalLinks:[{id:1,name:"Terms & Conditions"},{id:2,name:"Privacy Notice"},{id:3,name:"Cookie Policy"}]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"copyright"},"\xa9 2019 Cyberron Technologies | All Rights Reserved. | Innovating the World"),c.a.createElement("div",{className:"legalNav"},this.state.legalLinks.map((function(e){return c.a.createElement("span",{key:e.id,className:"link-item"},e.name)}))),c.a.createElement("div",{className:"invcore"},"Powered By: InvisionCore LLC"))}}]),t}(a.Component)),w=(n(38),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={isLoading:!1,isMobile:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isMobile",value:function(){window.screen.width>700&&this.setState({isMobile:!0})}},{key:"componentDidMount",value:function(){console.log("Component Mounted : MobileUnderContruction"),this.isMobile()}},{key:"render",value:function(){return this.state.isMobile?(f.push("/CyberronOfficial/#/"),null):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"MobileUnderConstruction"},c.a.createElement("h1",{className:"mobileMessage"},"Oh no!"),c.a.createElement("h1",{className:"mobileMessage"},"Our mobile webpage is under construction - Please check back later!")))}}]),t}(a.Component)),L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={isLoading:!1,isAuthenticated:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Component has mounted: Portal")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),c.a.createElement(d.a,{history:f},c.a.createElement(b.d,null,c.a.createElement(b.b,{exact:!0,path:"/",component:C}),c.a.createElement(b.b,{exact:!0,path:"/mobileUnderContruction",component:w}),this.state.isAuthenticated?c.a.createElement(b.a,{to:"/adminPage"}):c.a.createElement(b.a,{to:"/"}))),c.a.createElement(M,null))}}]),t}(a.Component);n(44),n(45);r.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.22963737.chunk.js.map