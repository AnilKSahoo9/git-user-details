(this["webpackJsonpgit-user-details"]=this["webpackJsonpgit-user-details"]||[]).push([[0],{189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),l=(a(75),a(63)),i=a(64),c=a(12),u=a(69),p=a(68),m=(a(76),a(24)),d=a(5),h=a.n(d),E=a(14),f=a(15),b=a.n(f),g=[],v=function(e,t,a){return function(){var n=Object(E.a)(h.a.mark((function n(r){var o,s,l;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={"Content-Type":"text/plain"},n.next=3,b.a.get("https://api.github.com/repos/".concat(e,"/").concat(t,"/commits?sort=updated"),{headers:o});case 3:s=n.sent,g[a]=s.data.length,l=g.reduce((function(e,t){return e+t}),0),r({type:"RECEIVE_COMMIT_DETAILS",data:l});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(E.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://github-contributions-api.now.sh/v1/".concat(e));case 2:n=t.sent,r=n.data.years,a({type:"RECEIVE_CONTRIBUTION_DETAILS",data:r}),console.log(r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=a(16),w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleUserInput=function(e){n.props.getUser(e)},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.handleUserInput=n.handleUserInput.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"handleSubmit",value:function(e){this.props.getData(this.props.userInput,e),this.props.getRepos(this.props.userInput)}},{key:"render",value:function(){var e=this.props.repos.map((function(e){return e.language})).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{}),t=this.props.repos.map((function(e){return e.stargazers_count})).reduce((function(e,t){return e+t}),0),a=this.props.repos.map((function(e){return e.forks_count})).reduce((function(e,t){return e+t}),0),r={labels:["Followers","Following"],datasets:[{backgroundColor:["#0074D9","#FF4136"],data:[this.props.followers,this.props.following]}]},o={labels:["Total Repos","Total Stars","Total Forks"],datasets:[{label:"Data Visualized",backgroundColor:["#0074D9","#FF4136","#2ECC40"],data:[this.props.repos.length,t,a]}]},s={labels:this.props.contributions.map((function(e){return e.year})),datasets:[{label:"Data Visualized",backgroundColor:["#0074D9","#FF4136","#2ECC40","#FF851B","#7FDBFF","#B10DC9","#FFDC00","#001f3f","#39CCCC","#01FF70","#85144b","#F012BE","#3D9970","#111111","#AAAAAA"],data:this.props.contributions.map((function(e){return e.total}))}]},l={labels:Object.keys(e),datasets:[{backgroundColor:["#0074D9","#FF4136","#2ECC40","#FF851B","#7FDBFF","#B10DC9","#FFDC00","#001f3f","#39CCCC","#01FF70","#85144b","#F012BE","#3D9970","#111111","#AAAAAA"],data:Object.values(e)}]};return n.createElement("div",{className:"main-container"},n.createElement("div",{className:"navbar"},"~ : Github User Details : ~"),n.createElement("div",{className:"search"},n.createElement("form",{onSubmit:this.handleSubmit},n.createElement("input",{type:"text",placeholder:"Enter User Name",onChange:this.handleUserInput}),n.createElement("button",{type:"submit"},"Fetch Details"))),n.createElement("div",{className:"result-container"},n.createElement("div",{className:"user-details"},n.createElement("img",{className:"user-photo",alt:this.props.fullName,src:this.props.profileUrl}),n.createElement("div",{className:"details"},n.createElement("div",null,"User Name: ",this.props.userId),n.createElement("div",null,"Full Name: ",this.props.fullName),n.createElement("div",null,"Bio: ",this.props.bio),n.createElement("div",null,"Location: ",this.props.location),n.createElement("div",null,"Website: ",this.props.website),n.createElement("div",null,"Company: ",this.props.company),n.createElement("div",null,"Total no. of commits: ",this.props.totalCommit),n.createElement("div",null,"Link to ",n.createElement("a",{href:this.props.githubUrl},"GitHub Profile")))),n.createElement("div",{className:"all-chart"},n.createElement("div",null,"~ : Data Visualization : ~"),n.createElement("div",{className:"chart"},n.createElement("div",{className:"chart1"},n.createElement(C.a,{data:r,options:{title:{display:!0,text:"Followers vs Following",fontSize:20},legend:{display:!0,position:"right"}}})),n.createElement("div",{className:"chart2"},n.createElement(C.a,{data:o,options:{title:{display:!0,text:"Total Repo ~ Total Stars ~ Total Forks",fontSize:20},legend:{display:!0,position:"right"}}})),n.createElement("div",{className:"chart3"},n.createElement(C.a,{data:s,options:{title:{display:!0,text:"No. of Contributions per year",fontSize:20},legend:{display:!0,position:"right"}}})),n.createElement("div",{className:"chart4"},n.createElement(C.a,{data:l,options:{title:{display:!0,text:"No. of Languages used per repository",fontSize:20},legend:{display:!0,position:"right"}}})))),n.createElement("div",{className:"repo-content"},n.createElement("div",null,"~ : Repository Details : ~"),n.createElement("div",{className:"repo-details"},this.props.repos.map((function(e,t){return n.createElement("div",{className:"repo"},n.createElement("li",{key:t},n.createElement("a",{href:e.html_url},e.name),n.createElement("h3",null,e.description),n.createElement("h3",null,"Forks: ",e.forks_count),n.createElement("h3",null,"Stars: ",e.stargazers_count),n.createElement("h3",null,"Open Issues: ",e.open_issues)))}))))))}}]),a}(n.Component),y={getUser:function(e){return{type:"REQUEST_USER_DETAILS",event:e}},getData:function(e,t){return function(){var a=Object(E.a)(h.a.mark((function a(n){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,b.a.get("https://api.github.com/users/".concat(e));case 3:r=a.sent,n({type:"RECEIVE_USER_DETAILS",data:r.data,event:t}),n(I(e));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},getRepos:function(e){return function(){var t=Object(E.a)(h.a.mark((function t(a){var n,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.github.com/users/".concat(e,"/repos?sort=updated"));case 2:for(n=t.sent,a({type:"RECEIVE_REPO_DETAILS",data:n.data}),r=n.data.map((function(e){return e.name})),o=0;o<r.length;o++)a(v(e,r[o],o));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},F=Object(m.b)((function(e){return{userInput:e.userInput,userId:e.userId,profileUrl:e.profileUrl,emailId:e.emailId,fullName:e.fullName,followers:e.followers,following:e.following,bio:e.bio,location:e.location,website:e.website,company:e.company,githubUrl:e.githubUrl,repos:e.repos,totalCommit:e.totalCommit,contributions:e.contributions}}),y)(w),D=a(13),N=a(9),O={userInput:"",userId:"",profileUrl:"",emailId:"",fullName:"",followers:0,following:0,bio:"",location:"",website:"",company:"",githubUrl:"",repos:[],totalCommit:0,contributions:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_USER_DETAILS":return Object(N.a)({},e,{userInput:t.event.target.value});case"RECEIVE_USER_DETAILS":return Object(N.a)({},e,{userId:t.data.login,profileUrl:t.data.avatar_url,emailId:t.data.email,fullName:t.data.name,followers:t.data.followers,following:t.data.following,bio:t.data.bio,location:t.data.location,website:t.data.blog,company:t.data.company,githubUrl:t.data.html_url});case"RECEIVE_REPO_DETAILS":return Object(N.a)({},e,{repos:t.data});case"RECEIVE_COMMIT_DETAILS":return Object(N.a)({},e,{totalCommit:t.data});case"RECEIVE_CONTRIBUTION_DETAILS":return Object(N.a)({},e,{contributions:t.data});default:return e}},_=a(67),U=Object(D.c)(S,Object(D.a)(_.a));var T=function(){return n.createElement(m.a,{store:U},n.createElement("div",null,n.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a(189)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.88008666.chunk.js.map