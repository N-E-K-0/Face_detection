(this.webpackJsonpfacerecog=this.webpackJsonpfacerecog||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/brain.a27f9a25.png"},32:function(e,a,t){e.exports=t(81)},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(14),r=t.n(o),i=(t(37),t(7)),l=t(8),c=t(10),m=t(9),u=(t(38),function(e){var a=e.onRouteChange;return s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return a("signIn")},className:"f3 link dim black underline pointer padding"},"Sign Out"))}),p=t(29),h=t.n(p),d=t(30),g=t.n(d),b=(t(39),function(){return s.a.createElement("div",{className:"ma4 mt0"},s.a.createElement(h.a,{className:"Tilt shadow-2",options:{max:75},style:{height:120,width:120}},s.a.createElement("div",{className:"Tilt-inner pa3 "},s.a.createElement("img",{src:g.a,alt:"logo"}))))}),f=(t(40),function(e){var a=e.onInputChange,t=e.onButtonSubmit;return s.a.createElement("div",{className:"ma4 mt0"},s.a.createElement("p",{className:"f3 padding"},"Let's do some magic! Shall we?"),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form center pa4 br3 shadow-3"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:a}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-red",onClick:t},"Detect"))))}),w=t(31),E=t.n(w),v=t(15),N=t.n(v),C=(t(78),function(e){var a=e.imageUrl,t=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputImage",src:a,alt:"",width:"500px",height:"auto"}),s.a.createElement("div",{className:"bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})))}),y=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http:///localhost:3000/signIn",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={onEmailChange:"",onPasswordChange:""},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 shadow-3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 center pa2"},s.a.createElement("main",{className:"pa4 black-80 "},s.a.createElement("div",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),t}(s.a.Component),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){fetch("http:///localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 shadow-3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 center pa2"},s.a.createElement("main",{className:"pa4 black-80 "},s.a.createElement("div",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"name",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(s.a.Component),S=(t(79),t(80),new N.a.App({apiKey:"8fb32017da154d1ab5c4fd7bbb192ff0"})),I={particles:{number:{value:150,density:{enable:!0,value_area:800}}}},j={input:"",imageUrl:"",box:{},route:"signIn",user:{id:"",name:"",email:"",joined:""}},R=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).loadUser=function(a){e.setState({user:{id:a.id,name:a.name,email:a.email,joined:a.joined}})},e.calculateFaceLocation=function(e){var a=e.outputs[0].data.regions[0].region_info.bounding_box,t=document.getElementById("inputImage"),n=Number(t.width),s=Number(t.height);return{leftCol:a.left_col*n,topRow:a.top_row*s,rightCol:n-a.right_col*n,bottomRow:s-a.bottom_row*s}},e.displayfaceBox=function(a){e.setState({box:a})},e.onInputChange=function(a){e.setState({input:a.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),S.models.predict(N.a.FACE_DETECT_MODEL,e.state.input).then((function(a){return e.displayfaceBox(e.calculateFaceLocation(a))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(a){e.setState({route:a})},e.state=j,e}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E.a,{className:"particles",params:I}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(u,{onRouteChange:this.onRouteChange}),s.a.createElement(b,null),s.a.createElement(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),s.a.createElement(C,{box:this.state.box,imageUrl:this.state.imageUrl})):"signIn"===this.state.route?s.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(k,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.34eda42d.chunk.js.map