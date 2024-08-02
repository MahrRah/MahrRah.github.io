(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2648)}])},2648:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var o=n(5893),i=n(7294),r=n(5029),a=n(2466),l=n(8263),s=n(8828),c=n(3324),d=n(8733),u=n(252);let h=Object.freeze({Home:"home",About:"about"});var m=n(9477),p=n(2453),x=e=>{let{p:t,color:n="#E8E6E6",initialMinRadius:r=.1,initialMaxRadius:l=5.5,minYAngle:s=80,maxYAngle:c=100,minOpacity:d=0,maxOpacity:h=1,opacityIncrement:x=.01,rotationSpeed:f=.01,gravityMin:g=.3,gravityMax:v=1,gravityDuration:y=19e3,resetDistance:w=.1}=e,j=(0,i.useRef)(null),b=(0,i.useRef)((0,p.C)(r,l,Math.random())),E=(0,i.useRef)((0,p.C)((0,u.H)(s),(0,u.H)(c),Math.random())),C=(0,i.useMemo)(()=>{let e=(0,u.H)(360)*t,n=new m.Vector3;return n.setFromSphericalCoords(b.current,E.current,e),n},[t]),A=(0,i.useMemo)(()=>{let e=(b.current-r)/(l-r);return(0,p.C)(d,h,e)},[b,r,l,d,h]),M=(0,i.useRef)({value:A}),S="\n    varying float vAlpha;\n    void main() {\n      vec3 transformed = position;\n      float distance = length(position);\n      vAlpha = 1.0 - distance / ".concat(l.toFixed(1),";\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n    }\n  "),k=(0,i.useMemo)(()=>new m.ShaderMaterial({uniforms:{color:{value:new m.Color(n)},opacity:M.current},vertexShader:S,fragmentShader:"\n    uniform vec3 color;\n    uniform float opacity;\n    varying float vAlpha;\n    void main() {\n      gl_FragColor = vec4(color, opacity * vAlpha);\n    }\n  ",transparent:!0}),[n]);return(0,i.useLayoutEffect)(()=>{j.current.position.copy(C),M.current.value=d},[C,d]),(0,a.C)(e=>{let{clock:t}=e,n=t.getElapsedTime(),o=(0,p.C)(v,g,n/y),i=j.current.position.length();j.current.position.setLength(i*o*.99),j.current.position.applyAxisAngle(new m.Vector3(0,1,0),f),M.current.value=Math.min(h,M.current.value+x),j.current.position.length()<w&&(j.current.position.copy(C),M.current.value=A),k.uniforms.opacity.value=M.current.value}),(0,o.jsxs)("mesh",{ref:j,children:[(0,o.jsx)("sphereGeometry",{args:[.01,10]}),(0,o.jsx)("primitive",{object:k,attach:"material"})]})},f=e=>{let{p:t,radius:n=.05,color:r="#FFFFFF",initialMinRadius:l=2,initialMaxRadius:s=3.5,minYAngle:c=80,maxYAngle:d=100,minDistance:h=1,maxDistance:x=.3,distanceDuration:f=1e7,rotationSpeed:g=.01}=e,v=(0,i.useRef)(null),y=(0,i.useRef)((0,p.C)(l,s,Math.random())),w=(0,i.useRef)((0,p.C)((0,u.H)(c),(0,u.H)(d),Math.random())),j=(0,i.useMemo)(()=>{let e=(0,u.H)(360)*t,n=new m.Vector3;return n.setFromSphericalCoords(y.current,w.current,e),n},[t]);(0,i.useLayoutEffect)(()=>{v.current.position.copy(j)},[j]),(0,a.C)(e=>{let{clock:t}=e,n=t.getElapsedTime(),o=(0,p.C)(h,x,n/f),i=v.current.position.length();v.current.position.setLength(i*o),v.current.position.applyAxisAngle(new m.Vector3(0,1,0),g)});let b=(0,i.useMemo)(()=>new m.ShaderMaterial({vertexShader:"\n      varying float vAlpha;\n      void main() {\n        vec3 transformed = position;\n        float distance = length(position);\n        vAlpha = 1.0 - distance;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n      }\n    ",fragmentShader:"\n      varying float vAlpha;\n      uniform vec3 color;\n      void main() {\n        gl_FragColor = vec4(color, vAlpha);\n      }\n    ",uniforms:{color:{value:new m.Color(r)}},transparent:!0}),[r]);return(0,o.jsxs)("mesh",{ref:v,children:[(0,o.jsx)("icosahedronGeometry",{args:[n,2]}),(0,o.jsx)("primitive",{attach:"material",object:b})]})},g=e=>{let{color:t="#000000",radius:n=.5}=e;return(0,o.jsxs)("mesh",{"rotation-x":.35,children:[(0,o.jsx)("sphereGeometry",{args:[n,32]}),(0,o.jsx)("meshLambertMaterial",{color:t})]})},v=n(9326),y=e=>{let{colors:t=["#2F302E","#5F6263","#2b404c","#4D4636","#6A6151","#8C7746","#BCCEE2","#202422"],colorBlackhole:n="#000000",colorAccretion:i="#E8E6E6"}=e,r=(e,t,n,i,r)=>Array.from({length:e},(a,l)=>(0,o.jsx)(f,{radius:t,p:(0,v.Y)(0,e,l),color:r,initialMinRadius:n,initialMaxRadius:i,minYAngle:80,maxYAngle:100,minDistance:1,maxDistance:.3,distanceDuration:1e8,rotationSpeed:.001},l));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{color:n,radius:.5}),Array.from({length:400},(e,t)=>(0,o.jsx)(x,{p:(0,v.Y)(0,400,t),color:i,initialMinRadius:.01,initialMaxRadius:3,minYAngle:85,maxYAngle:95,minOpacity:1e-4,maxOpacity:1,opacityIncrement:.1,rotationSpeed:.01,gravityMin:.01,gravityMax:1,gravityDuration:1e7,resetDistance:.6},t)),r(100,.05,2,3.5,t[0]),r(100,.01,2,3.5,t[1]),r(200,.02,2,4.5,t[2]),r(200,.03,2,4.5,t[3]),r(200,.03,2,4.5,t[4]),r(100,.01,2,4.5,t[5]),r(100,.01,2,4.5,t[6]),r(100,.3,2,4.5,t[7])]})},w=e=>{let{numStars:t=200,colors:n,colorBlackhole:r,colorAccretion:l}=e,s=(0,a.A)(e=>e.gl);return(0,i.useLayoutEffect)(()=>s.setPixelRatio(window.devicePixelRatio)),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(y,{numStars:t,colors:n,colorBlackhole:r,colorAccretion:l})})},j=n(5588),b=n(5098);let E=e=>({position:"fixed",top:0,left:0,width:"100%",background:"#000000",padding:"1rem",display:e?"none":"block",transition:"display 0.3s ease",textAlign:"center"}),C={fontFamily:"lemon-milk",color:"#E8E6E6",marginLeft:"100px",marginTop:"-40px",fontSize:"25px",textAlign:"left"},A=(0,b.Z)(j.Z)({width:50,height:50,marginBottom:-20});var M=e=>{let{isHidden:t}=e;return(0,o.jsxs)("div",{style:E(t),children:[(0,o.jsx)(A,{alt:"User Avatar",src:"/logo.png"}),(0,o.jsxs)("h1",{style:C,children:[" ","Coding, coffee, and a sprinkle of stardust!"]})]})},S=n(1054),k=n(6583);let H={navigation:e=>({position:"fixed",bottom:0,right:0,width:"auto",height:"100vh",display:e?"flex":"none",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",padding:"1rem",gap:"0.5rem"}),button:{fontSize:"25px",fontFamily:"lemon-milk",color:"#E8E6E6",width:"120px",borderColor:"#E8E6E6",borderRadius:28,backgroundColor:"#000000"},upButton:{fontSize:"15px",fontFamily:"lemon-milk",color:"#E8E6E6",width:"120px",alignContent:"baseline"}};var F=e=>{let{isVisible:t=!0,currentPage:n=h.Home,setPage:i}=e;return(0,o.jsxs)("div",{style:H.navigation(t),children:[(0,o.jsx)(S.Z,{variant:"outlined",sx:H.button,onClick:()=>i(h.About),children:"About"}),(0,o.jsx)(S.Z,{variant:"outlined",sx:H.button,href:"https://dev.to/mahrrah",children:"Blog"}),n!=h.Home&&(0,o.jsx)("div",{children:(0,o.jsx)(S.Z,{variant:"text",sx:H.upButton,startIcon:(0,o.jsx)(k.Z,{}),onClick:()=>i(h.Home),children:"Back Up"})})]})};let R={position:"fixed",bottom:"50%",left:0,transform:"translate(15px, 50%)",width:"50vw",backgroundColor:"black",color:"white",padding:"30px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",zIndex:1,boxShadow:"10px 0px 50px 5px #151716"},_={textAlign:"left",hight:"100vh"},z={margin:"0 0 10px 0",fontSize:"24px",fontFamily:"lemon-milk"},L={textAlign:"center"},B={marginTop:"20px",fontSize:"15px",fontFamily:"lemon-milk",color:"#CEBE9C",borderColor:"#CEBE9C",borderRadius:28},I={margin:"0",fontSize:"16px",textAlign:"justify"},P=(0,b.Z)(j.Z)({width:150,height:150,marginBottom:20});var Z=()=>(0,o.jsxs)("div",{style:R,children:[(0,o.jsx)(P,{alt:"User Avatar",src:"/avatar.jpg"}),(0,o.jsxs)("div",{style:_,children:[(0,o.jsx)("h1",{style:z,children:"About Me"}),(0,o.jsx)("p",{style:I,children:"Hi there, I am Mahra, a Software Engineer at Microsoft with a background in astrophysics. Basically, a physics nerd who has lost her way in the world of tech. I used to analyze emissions from galaxies containing active supermassive black holes. Now I work on various cloud-based solutions as part of one of many Microsoft ISE teams. These range from cloud to edge-based applications for manufacturing use cases to LLM-based code generation solutions."}),(0,o.jsx)("div",{style:L,children:(0,o.jsx)(S.Z,{variant:"outlined",sx:B,href:"mailto:mahra.rah@gmail.com",children:"Contact Me"})})]})]});let D={position:"relative",width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"},T={height:"800vh",alignContent:"baseline"},Y={height:"30vh",width:"100%",position:"fixed",top:0,left:0,zIndex:-1},V={position:"fixed",top:"50%",left:0,width:"100%",transform:"translateY(-50%)"},N=()=>{let{scrollYProgress:e}=(0,l.v)(),t=(0,s.H)(e,[0,.5],[-(.9*window.innerWidth),.01*window.innerWidth]);return(0,o.jsx)(c.E.div,{style:{...V,x:t},children:(0,o.jsx)(Z,{})})};function O(e){let{shouldScroll:t}=e,{scrollYProgress:n}=(0,l.v)(),o=(0,s.H)(n,[0,1],[1e-5,(0,u.H)(180)]),i=(0,s.H)(n,[0,1],[10,5]),r=(0,d.r)();(0,a.C)(e=>{let{camera:t}=e;t.position.setFromSphericalCoords(i.get(),o.get(),1e-4*r.get()),t.updateProjectionMatrix(),t.lookAt(0,-2,0)})}var G=()=>{let[e,t]=(0,i.useState)(!1),[n,a]=(0,i.useState)(!1),[l,s]=(0,i.useState)(h.Home),[c,d]=(0,i.useState)(!0),[u,m]=(0,i.useState)([0,0,0]),p=()=>{let e=window.scrollY||document.documentElement.scrollTop;t(e>0),a(e>window.innerHeight),s(e>window.innerHeight?h.About:h.Home)};return(0,i.useEffect)(()=>(window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)}),[]),(0,o.jsxs)("div",{style:T,children:[(0,o.jsx)(M,{isHidden:e}),(0,o.jsx)("div",{style:Y,children:(0,o.jsx)("div",{style:D,children:(0,o.jsxs)(r.Xz,{gl:{antialias:!0},children:[(0,o.jsx)(O,{shouldScroll:c}),(0,o.jsx)("ambientLight",{intensity:.01}),(0,o.jsx)(w,{})]})})}),(0,o.jsx)(F,{isVisible:n,currentPage:l,setPage:e=>{s(e),d(!1),m([0,-1,0]),e===h.Home?(window.scroll({top:0,left:0,behavior:"smooth"}),d(!0)):e===h.About&&window.scroll({top:document.body.scrollHeight/2,left:0,behavior:"smooth"})}}),l==h.About&&n&&(0,o.jsx)(N,{})]})}}},function(e){e.O(0,[737,393,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);