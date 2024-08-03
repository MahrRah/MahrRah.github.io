(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1466)}])},1466:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ea}});var n=i(5893),o=i(7294),r=i(5029),a=i(2466),l=i(8263),s=i(8828),c=i(8733),d=i(252);let h=Object.freeze({Home:"home",About:"about",Footer:"footer"});var x=i(9477),m=i(2453),p=e=>{let{p:t,color:i="#E8E6E6",initialMinRadius:r=.1,initialMaxRadius:l=5.5,minYAngle:s=80,maxYAngle:c=100,minOpacity:h=0,maxOpacity:p=1,opacityIncrement:u=.01,rotationSpeed:f=.01,gravityMin:g=.3,gravityMax:v=1,gravityDuration:y=19e3,resetDistance:j=.1}=e,w=(0,o.useRef)(null),b=(0,o.useRef)((0,m.C)(r,l,Math.random())),E=(0,o.useRef)((0,m.C)((0,d.H)(s),(0,d.H)(c),Math.random())),A=(0,o.useMemo)(()=>{let e=(0,d.H)(360)*t,i=new x.Vector3;return i.setFromSphericalCoords(b.current,E.current,e),i},[t]),C=(0,o.useMemo)(()=>{let e=(b.current-r)/(l-r);return(0,m.C)(h,p,e)},[b,r,l,h,p]),M=(0,o.useRef)({value:C}),k="\n    varying float vAlpha;\n    void main() {\n      vec3 transformed = position;\n      float distance = length(position);\n      vAlpha = 1.0 - distance / ".concat(l.toFixed(1),";\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n    }\n  "),R=(0,o.useMemo)(()=>new x.ShaderMaterial({uniforms:{color:{value:new x.Color(i)},opacity:M.current},vertexShader:k,fragmentShader:"\n    uniform vec3 color;\n    uniform float opacity;\n    varying float vAlpha;\n    void main() {\n      gl_FragColor = vec4(color, opacity * vAlpha);\n    }\n  ",transparent:!0}),[i]);return(0,o.useLayoutEffect)(()=>{w.current.position.copy(A),M.current.value=h},[A,h]),(0,a.C)(e=>{let{clock:t}=e,i=t.getElapsedTime(),n=(0,m.C)(v,g,i/y),o=w.current.position.length();w.current.position.setLength(o*n*.99),w.current.position.applyAxisAngle(new x.Vector3(0,1,0),f),M.current.value=Math.min(p,M.current.value+u),w.current.position.length()<j&&(w.current.position.copy(A),M.current.value=C),R.uniforms.opacity.value=M.current.value}),(0,n.jsxs)("mesh",{ref:w,children:[(0,n.jsx)("sphereGeometry",{args:[.01,10]}),(0,n.jsx)("primitive",{object:R,attach:"material"})]})},u=e=>{let{p:t,radius:i=.05,color:r="#FFFFFF",initialMinRadius:l=2,initialMaxRadius:s=3.5,minYAngle:c=80,maxYAngle:h=100,minDistance:p=1,maxDistance:u=.3,distanceDuration:f=1e7,rotationSpeed:g=.01}=e,v=(0,o.useRef)(null),y=(0,o.useRef)((0,m.C)(l,s,Math.random())),j=(0,o.useRef)((0,m.C)((0,d.H)(c),(0,d.H)(h),Math.random())),w=(0,o.useMemo)(()=>{let e=(0,d.H)(360)*t,i=new x.Vector3;return i.setFromSphericalCoords(y.current,j.current,e),i},[t]);(0,o.useLayoutEffect)(()=>{v.current.position.copy(w)},[w]),(0,a.C)(e=>{let{clock:t}=e,i=t.getElapsedTime(),n=(0,m.C)(p,u,i/f),o=v.current.position.length();v.current.position.setLength(o*n),v.current.position.applyAxisAngle(new x.Vector3(0,1,0),g)});let b=(0,o.useMemo)(()=>new x.ShaderMaterial({vertexShader:"\n      varying float vAlpha;\n      void main() {\n        vec3 transformed = position;\n        float distance = length(position);\n        vAlpha = 1.0 - distance;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n      }\n    ",fragmentShader:"\n      varying float vAlpha;\n      uniform vec3 color;\n      void main() {\n        gl_FragColor = vec4(color, vAlpha);\n      }\n    ",uniforms:{color:{value:new x.Color(r)}},transparent:!0}),[r]);return(0,n.jsxs)("mesh",{ref:v,children:[(0,n.jsx)("icosahedronGeometry",{args:[i,2]}),(0,n.jsx)("primitive",{attach:"material",object:b})]})},f=e=>{let{color:t="#000000",radius:i=.5}=e;return(0,n.jsxs)("mesh",{"rotation-x":.35,children:[(0,n.jsx)("sphereGeometry",{args:[i,32]}),(0,n.jsx)("meshLambertMaterial",{color:t})]})},g=i(9326),v=e=>{let{colors:t=["#2F302E","#5F6263","#2b404c","#4D4636","#6A6151","#8C7746","#BCCEE2","#202422"],colorBlackhole:i="#000000",colorAccretion:o="#E8E6E6"}=e,r=(e,t,i,o,r)=>Array.from({length:e},(a,l)=>(0,n.jsx)(u,{radius:t,p:(0,g.Y)(0,e,l),color:r,initialMinRadius:i,initialMaxRadius:o,minYAngle:80,maxYAngle:100,minDistance:1,maxDistance:.3,distanceDuration:1e8,rotationSpeed:.001},l));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{color:i,radius:.5}),Array.from({length:400},(e,t)=>(0,n.jsx)(p,{p:(0,g.Y)(0,400,t),color:o,initialMinRadius:.01,initialMaxRadius:3,minYAngle:85,maxYAngle:95,minOpacity:1e-4,maxOpacity:1,opacityIncrement:.1,rotationSpeed:.01,gravityMin:.01,gravityMax:1,gravityDuration:1e7,resetDistance:.6},t)),r(100,.05,2,3.5,t[0]),r(100,.01,2,3.5,t[1]),r(200,.02,2,4.5,t[2]),r(200,.03,2,4.5,t[3]),r(200,.03,2,4.5,t[4]),r(100,.01,2,4.5,t[5]),r(100,.01,2,4.5,t[6]),r(100,.3,2,4.5,t[7])]})},y=e=>{let{numStars:t=200,colors:i,colorBlackhole:r,colorAccretion:l}=e,s=(0,a.A)(e=>e.gl);return(0,o.useLayoutEffect)(()=>s.setPixelRatio(window.devicePixelRatio)),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(v,{numStars:t,colors:i,colorBlackhole:r,colorAccretion:l})})},j=i(5588),w=i(5098);let b={position:"fixed",top:0,left:0,width:"100%",padding:"1rem",display:"block",transition:"display 0.3s ease",textAlign:"center"},E={fontFamily:"lemon-milk",color:"#E8E6E6",marginLeft:"70px",marginTop:"-41px",fontSize:"23px",textAlign:"left"},A=(0,w.Z)(j.Z)({width:50,height:50,marginBottom:-20});var C=()=>(0,n.jsxs)("div",{style:b,children:[(0,n.jsx)(A,{alt:"User Avatar",src:"/logo.png"}),(0,n.jsxs)("h1",{style:E,children:[" ","The Byte Life of Mahra..."]})]}),M=i(3324),k=e=>{let{scrollRange:t,opacityRange:i}=e,{scrollYProgress:o}=(0,l.v)(),r=(0,s.H)(o,t,i);return(0,n.jsx)(M.E.div,{style:{opacity:r},children:(0,n.jsx)(C,{})})},R=i(8163);let S={position:"fixed",bottom:"50%",left:0,transform:"translate(15px, 50%)",width:"50vw",backgroundColor:"black",color:"white",padding:"30px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",zIndex:1,boxShadow:"10px 0px 50px 5px #151716"},H={textAlign:"left",hight:"100vh"},F={margin:"0 0 10px 0",fontSize:"24px",fontFamily:"lemon-milk"},_={textAlign:"center"},z={marginTop:"20px",fontSize:"15px",fontFamily:"lemon-milk",color:"#CEBE9C",borderColor:"#CEBE9C",borderRadius:28},L={margin:"0",fontSize:"16px",textAlign:"justify",textJustify:"inter-word"},Z=(0,w.Z)(j.Z)({width:150,height:150,marginBottom:20});var I=()=>(0,n.jsxs)("div",{style:S,children:[(0,n.jsx)(Z,{alt:"User Avatar",src:"/avatar.jpg"}),(0,n.jsxs)("div",{style:H,children:[(0,n.jsx)("h1",{style:F,children:"About Me"}),(0,n.jsx)("p",{style:L,children:"Hi there, I am Mahra, a Software Engineer at Microsoft with a background in astrophysics. Basically, a physics nerd who has lost her way in the world of tech. I used to analyze emissions from galaxies containing active supermassive black holes. Now I work on various cloud-based solutions as part of one of many Microsoft ISE teams. These range from cloud to edge-based applications for manufacturing use cases to LLM-based code generation solutions."}),(0,n.jsx)("div",{style:_,children:(0,n.jsx)(R.Z,{variant:"outlined",sx:z,href:"mailto:mahra.rah@gmail.com",children:"Contact Me"})})]})]});let T={position:"fixed",top:"50%",left:0,width:"100%",transform:"translateY(-50%)"};var B=e=>{let{scrollRange:t,xMovementRange:i}=e,{scrollYProgress:o}=(0,l.v)(),r=(0,s.H)(o,t,i);return(0,n.jsx)(M.E.div,{style:{...T,x:r},children:(0,n.jsx)(I,{})})},P=i(6583);let Y={navigation:{position:"fixed",bottom:0,right:0,width:"auto",height:"100vh",display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",padding:"1rem",gap:"0.5rem"},button:{fontSize:["20px","20px","25px"],fontFamily:"lemon-milk",color:"#E8E6E6",width:["90px","90px","120px"],borderColor:"#E8E6E6",borderRadius:28,backgroundColor:"#000000"},upNavigation:{position:"fixed",right:0,bottom:"1rem",display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center"},upButtonStyles:{fontSize:"15px",fontFamily:"lemon-milk",color:"#E8E6E6",display:"flex",right:"1rem",position:"fixed",bottom:["3rem","3rem","1rem"]}};var D=e=>{let{currentPage:t=h.Home,setPage:i}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:Y.navigation,children:[(0,n.jsx)(R.Z,{variant:"outlined",sx:Y.button,onClick:()=>i(h.About),children:"About"}),(0,n.jsx)(R.Z,{variant:"outlined",sx:Y.button,href:"https://dev.to/mahrrah",children:"Blog"})]}),t!=h.Home&&(0,n.jsx)("div",{style:Y.upNavigation,children:(0,n.jsx)(R.Z,{variant:"text",sx:Y.upButtonStyles,startIcon:(0,n.jsx)(P.Z,{}),onClick:()=>i(h.Home),children:"Back Up"})})]})},N=e=>{let{scrollRange:t,opacityRange:i,currentPage:o,setPage:r}=e,{scrollYProgress:a}=(0,l.v)(),c=(0,s.H)(a,t,i);return(0,n.jsx)(M.E.div,{style:{opacity:c},children:(0,n.jsx)(D,{currentPage:o,setPage:r})})},V=i(3367),O=i(2303),W=i(9645),X=i(3122);let G={footer:{position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"80%",maxWidth:"650px",background:"black",padding:"0.5rem 1rem",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",boxShadow:"10px 0px 50px 5px #151716",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"opacity 0.3s ease, visibility 0.3s ease"},paragraph:{fontFamily:"lemon-milk",color:"#E8E6E6",fontSize:"10px",display:"flex",alignItems:"left",alignText:"left",margin:"0 auto"},icon:{color:"#E8E6E6",fontSize:"20px"}};var U=()=>(0,n.jsxs)("div",{style:G.footer,children:[(0,n.jsx)("div",{style:G.parentDiv,children:(0,n.jsx)("p",{style:G.paragraph,children:" \xa9 2024 Mahra Rahimi "})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(V.Z,{sx:G.icon,size:"small",href:"https://github.com/MahrRah",target:"_blank",children:(0,n.jsx)(O.Z,{})}),(0,n.jsx)(V.Z,{sx:G.icon,size:"small",href:"https://www.linkedin.com/in/tamararahimi/",target:"_blank",children:(0,n.jsx)(W.Z,{})}),(0,n.jsx)(V.Z,{sx:G.icon,size:"small",href:"mailto:mahra.rah@gmail.com",target:"_blank",children:(0,n.jsx)(X.Z,{})})]})]});let J={position:"fixed",bottom:0,left:"50%",transform:"translateY(-50%)"};var q=e=>{let{scrollRange:t,yMovementRange:i}=e,{scrollYProgress:o}=(0,l.v)(),r=(0,s.H)(o,t,i);return(0,n.jsx)(M.E.div,{style:{...J,y:r},children:(0,n.jsx)(U,{})})};let K={position:"fixed",top:0,left:0,padding:"1rem",display:"block",textAlign:"center",top:"50%",left:0,width:"50%",transform:"translateY(-50%)"},Q={fontFamily:"lemon-milk",color:"#E8E6E6",marginLeft:"70px",marginTop:"-41px",fontSize:"15px",textAlign:"right"};var $=()=>(0,n.jsx)("div",{style:K,children:(0,n.jsx)("h1",{children:(0,n.jsxs)("pre",{style:Q,children:[" ",".. with coding, coffee,\n and a sprinkle of stardust!"]})})});let ee={position:"fixed",top:"10%",left:0,width:"100%",transform:"translateY(-50%)"};var et=e=>{let{scrollRange:t,xMovementRange:i,opacityRange:o}=e,{scrollYProgress:r}=(0,l.v)(),a=(0,s.H)(r,t,i),c=(0,s.H)(r,t,o);return(0,n.jsx)(M.E.div,{style:{...ee,x:a,opacity:c},children:(0,n.jsx)($,{})})};let ei={position:"relative",width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"},en={height:"2000vh"},eo={height:"30vh",width:"100%",position:"fixed",top:0,left:0,zIndex:-1};function er(){let{scrollYProgress:e}=(0,l.v)(),t=(0,s.H)(e,[0,1],[1e-5,(0,d.H)(180)]),i=(0,s.H)(e,[0,1],[10,5]),n=(0,c.r)();(0,a.C)(e=>{let{camera:o}=e;o.position.setFromSphericalCoords(i.get(),t.get(),1e-4*n.get()),o.updateProjectionMatrix(),o.lookAt(0,-2,0)})}var ea=()=>{let[e,t]=(0,o.useState)(h.Home),i=()=>{(window.scrollY||document.documentElement.scrollTop)>window.innerHeight?t(h.About):t(h.Home)};return(0,o.useEffect)(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),(0,n.jsxs)("div",{style:en,children:[(0,n.jsx)("div",{style:eo,children:(0,n.jsx)("div",{style:ei,children:(0,n.jsxs)(r.Xz,{gl:{antialias:!0},children:[(0,n.jsx)(er,{}),(0,n.jsx)("ambientLight",{intensity:.01}),(0,n.jsx)(y,{})]})})}),(0,n.jsx)(k,{scrollRange:[0,.2,1],opacityRange:[1,0,0]}),(0,n.jsx)(et,{scrollRange:[0,.1,.2,1],xMovementRange:["100%","30%","30%","100%"],opacityRange:[.2,1,1,.2]}),(0,n.jsx)(N,{scrollRange:[0,.4,1],opacityRange:[0,1,1],currentPage:e,setPage:e=>{t(e),e===h.Home?window.scroll({top:0,left:0,behavior:"smooth"}):e===h.About&&window.scroll({top:15*window.innerHeight,left:0,behavior:"smooth"})}}),e===h.About&&(0,n.jsx)(B,{scrollRange:[.5,.7,.8,1],xMovementRange:[-(.9*window.innerWidth),.01*window.innerWidth,.01*window.innerWidth,-(.9*window.innerWidth)]}),(0,n.jsx)(q,{scrollRange:[0,.9,.9,1],yMovementRange:[1e3,1e3,0,0]})]})}}},function(e){e.O(0,[737,946,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);