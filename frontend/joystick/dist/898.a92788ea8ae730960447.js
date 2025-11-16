"use strict";(self.webpackChunkjoystick=self.webpackChunkjoystick||[]).push([[898],{115:(e,t,r)=>{r.d(t,{Ah:()=>p,Dz:()=>A,HE:()=>u,Iu:()=>C,Jg:()=>_,KC:()=>b,KL:()=>m,KR:()=>h,Kg:()=>S,MG:()=>x,OV:()=>y,Tj:()=>g,Vk:()=>c,_S:()=>v,ah:()=>i,eb:()=>k,q:()=>E,rf:()=>s,sQ:()=>f,sU:()=>d,tl:()=>l,wg:()=>w,zy:()=>o});var a=r(9551),n=r(7956);const o=a.DU`
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: white;
  border: none;
  background: none;
}
`,l=a.Ay.h1`
  margin: ${e=>e.margem?"50px 0px 10px 30px":"10px"};
`,c=a.Ay.h3`
  margin: ${e=>e.margem?"10px 0px 10px 30px":"10px"};
  color: ${e=>e.cinza?"#aaa":"white"};
`,s=a.Ay.div`
  background-color: #272650;
  position: absolute;
  min-height: 100%;
  min-width: 100%;
`,i=(0,a.Ay)(n.N_)`
  text-decoration: none;
  background: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`,p=((0,a.Ay)(n.N_)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`,a.Ay.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin: 20px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 5px 20px;
  }
`),m=a.Ay.div`
  display: flex;
  margin: auto 20px auto 2px;
  align-items: center;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  padding: 13px;
  height: 12px;

  input {
    font-weight: 600;
    background: none;
  }

  button {
    margin: 7px;
  }
`,d=a.Ay.div`
  max-width: 80%;
  height: 500px;
  margin: 0 auto;

  background: linear-gradient(
    180deg,
    rgba(178, 173, 210, 0.29) 0%,
    rgba(191, 182, 252, 0.05) 100%
  );
  filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(4px);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);

  border-radius: 50px;
  display: flex;

  button {
    width: 90%;
    background: linear-gradient(180deg, #005eda 0%, #9100a9 138%);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.125);
    border-radius: 56px;
  }

  p {
    color: white;
  }
`,u=a.Ay.div`
  width: 40%;
  margin: 0 auto;

  background: linear-gradient(
    180deg,
    rgba(178, 173, 210, 0.29) 0%,
    rgba(191, 182, 252, 0.05) 100%
  );
  filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(4px);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);

  border-radius: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    position: relative;
    z-index: -1;
    width: 100%;
    max-height: 40%;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
  }

  button {
    width: 90%;
    background: linear-gradient(180deg, #005eda 0%, #9100a9 138%);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.125);
    border-radius: 56px;
    margin: 10px auto 30px;
  }

  p {
    color: white;
    margin: 20px;
  }
  div {
    margin: 10px auto;
  }
`,g=a.Ay.div`
  margin: 100px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`,b=a.Ay.div`
  display: flex;
  margin: 0px 0 20px;
`,_=a.Ay.div`
  padding: 5px;
  margin: 10px;
  font-weight: 600;
  font-size: small;
  background: linear-gradient(
    180deg,
    #9a5bff 0%,
    #62006f 137.99%,
    #f800ee 138%
  );
  box-shadow: 0px 2.87425px 2.87425px rgba(0, 0, 0, 0.25);
  border-radius: 40.2395px;
`,k=a.Ay.div`
  max-width: 100%;
  width: 600px;
  height: ${e=>e.baixo?"200px":"360px"};
  margin: 20px;
  flex: 1 1 600px;
  background: #222;
  position: relative;
  align-items: center;

  background: linear-gradient(
    180deg,
    rgba(178, 173, 210, 0.29) 0%,
    rgba(191, 182, 252, 0.05) 100%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(4px);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);

  border-radius: 50px;
  display: flex;

  img {
    height: 100%;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }

  button {
    width: 100%;
    background: linear-gradient(180deg, #005eda 0%, #9100a9 138%);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.125);
    border-radius: 56px;
  }

  p {
    margin: 20px;
  }
`,h=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`,E=a.Ay.form`
  margin: 0 auto;
  width: 50%;
  border-radius: 5px;
  text-align: center;

  h1 {
    margin: 50px auto 20px;
  }

  p {
    margin: 0px auto 15px;
  }

  label {
    font-weight: 600;
  }
`,x=a.Ay.img`
  width: 200px;
  height: 200px;
  border-radius: 500px;
  margin: 30px auto;
`,f=a.Ay.input`
  background: #0b0339;
  box-shadow: 0px 2.87425px 2.87425px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.87425px);

  color: white;
  height: 25px;
  width: 100%;
  padding: 5px 0px 5px 15px;
  font-weight: 600;
  border-radius: 100px;
  margin: 7px auto;
  transition: 0.5s;

  &:hover {
    background: #0b0360;
    transform: scale(1.05);
    transition: 0.5s;
  }
`,v=a.Ay.textarea`
  background: #0b0339;
  box-shadow: 0px 2.87425px 2.87425px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.87425px);
  resize: none;
  color: white;
  height: 300px;
  width: 100%;
  padding: 15px 0px 5px 15px;
  font-weight: 600;
  border-radius: 20px;
  margin: 7px auto;
  transition: 0.5s;
  white-space: pre-wrap;
  overflow-wrap: break-word;

  &:hover {
    background: #0b0360;
    transform: scale(1.05);
    transition: 0.5s;
  }
`,y=a.Ay.button`
  background: #0b0339;
  font-weight: 600;
  margin: ${e=>e.noMargin?"0px":"20px"};
  height: 35px;
  padding: 5px 0px 5px 15px;
  border-radius: 50px;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  min-width: ${e=>e.pequeno?"300px":"80%"};
  transition: 0.5s;

  &:hover {
    background: #0b0360;
    transform: scale(1.05);
    transition: 0.5s;
  }
`,w=a.Ay.button`
  background: #0b0339;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  transition: 0.5s;
  margin: 0px 10px 0px 10px;

  &:hover {
    background: #0b0360;
    transform: scale(1.05);
    transition: 0.5s;
  }
`,A=a.Ay.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,S=a.Ay.div`
  margin-top: 100px;
`,C=a.Ay.select`
  background: #0b0339;
  box-shadow: 0px 2.87425px 2.87425px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.87425px);

  color: white;
  height: 25px;
  width: 100%;
  padding: 15px;
  font-weight: 600;
  border-radius: 100px;
  margin: 7px auto;
  transition: 0.5s;

  &:hover {
    background: #aaa;
    transform: scale(1.05);
    transition: 0.5s;
  }

  option {
    text-align: center;
    color: white;
    font-weight: bold;
  }

  option:checked {
    font-weight: bold;
    color: #eee;
    background: #0b0390;
  }
`},405:(e,t,r)=>{e.exports=r.p+"f589addb496147338150.jpg"},432:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(2155),n=r(115),o=r(3804),l=r(8429),c=r(5596),s=r(4290);function i(){const{idJogo:e}=(0,c.g)(),[t,r]=(0,a.useState)(),[i,p]=(0,a.useState)(),[m,d]=(0,a.useState)(),[u,g]=(0,a.useState)([]),[b,_]=(0,a.useState)(),[k,h]=(0,a.useState)(),[E,x]=(0,a.useState)();return(0,a.useEffect)(()=>{s.A.get(`/games/${e}`).then(e=>{let{data:t}=e;r(t.title),p(t.description),d(t.price),g(t.genders),_(t.carousel),h(t.best),x(t.isFree)}).catch(e=>{alert(e)})},[]),a.createElement(n.rf,null,a.createElement(o.A,null),a.createElement(l.A,{title:t,description:i,price:m,genders:u,carousel:b,best:k,isFree:E,_id:e}),a.createElement(n.Kg,null))}},656:(e,t,r)=>{r.d(t,{O:()=>o});var a=r(2155);const n=a.createContext({}),o=e=>{const[t,r]=(0,a.useState)([]);return a.createElement(n.Provider,{value:{carrinho:t,setCarrinho:r}},e.children)}},2151:(e,t,r)=>{r.d(t,{A:()=>u});var a=r(2155),n=r(3804),o=r(6355),l=r(8807),c=r(405),s=r(115),i=r(4290),p=r(9551),m=r(4622);const d=(0,p.Ay)(s.rf)`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2)
    ),
    url(${c});
  background-repeat: no-repeat;
`;function u(){const[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>{i.A.get("/games").then(e=>{let{data:r}=e;t(r)}).catch(e=>{alert(e)}),console.log(e)},[]),a.createElement(d,null,a.createElement(n.A,null),a.createElement(m.A,null,e&&e.filter(e=>!0===e.carousel).map(e=>a.createElement(m.A.Item,{key:e._id},a.createElement(l.A,{_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))),a.createElement(s.tl,{margem:!0},"Melhores Jogos"),a.createElement(s.Vk,{cinza:!0,margem:!0},"Explore os melhores projetos da plataforma"),a.createElement(s.KR,null,e.map(e=>a.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price}))))}},3343:(e,t,r)=>{r.d(t,{A:()=>u});var a=r(2155),n=r(3804),o=r(6355),l=r(8807),c=r(4129),s=r(115),i=r(4290),p=r(9551),m=r(4622);const d=(0,p.Ay)(s.rf)`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2)
    ),
    url(${c.A});
  background-repeat: no-repeat;
`;function u(){const[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>{i.A.get("/games").then(e=>{let{data:r}=e;t(r)}).catch(e=>{alert(e)})},[]),a.createElement(d,null,a.createElement(n.A,null),a.createElement(m.A,null,e.filter(e=>!0===e.carousel).map(e=>a.createElement(m.A.Item,{key:e._id},a.createElement(l.A,{_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))),a.createElement(s.Dz,null,a.createElement("div",null,a.createElement(s.tl,{margem:!0},"Jogos em alta"),a.createElement(s.KR,null,e.filter(e=>!0===e.carousel).map(e=>a.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))),a.createElement("div",null,a.createElement(s.tl,{margem:!0},"Novidades"),a.createElement(m.A,null,e.filter(e=>!0===e.release).map(e=>a.createElement(m.A.Item,{key:e._id},a.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))),a.createElement(s.tl,{margem:!0},"Jogos grátis"),a.createElement(m.A,null,e.filter(e=>0===e.price).map(e=>a.createElement(m.A.Item,{key:e._id},a.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))))))}},3623:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(2155),n=r(3804),o=r(115),l=r(4290),c=r(5596);function s(){const[e,t]=(0,a.useState)(),[r,s]=(0,a.useState)(),i=(0,c.Zp)();return a.createElement(o.rf,null,a.createElement(n.A,null),a.createElement(o.q,{onSubmit:async function(t){t.preventDefault(),console.log(e),console.log(r),l.A.post("/users/authenticate",{email:e,password:r}).then(e=>{let{data:t}=e;console.log(t),sessionStorage.setItem("token",t.token),i("/")}).catch(e=>{alert(e)})}},a.createElement("h1",null,"Login"),a.createElement(o.sQ,{required:!0,placeholder:"Email",type:"text",value:e,onChange:e=>t(e.target.value)}),a.createElement(o.sQ,{required:!0,placeholder:"Password",type:"password",value:r,onChange:e=>s(e.target.value)}),a.createElement(o.OV,{type:"submit"},"Login"),a.createElement("p",null,"Não possui cadastro?"),a.createElement(o.ah,{to:"/cadastro"},a.createElement(o.OV,null,"Cadastro"))))}},3804:(e,t,r)=>{r.d(t,{A:()=>c});var a=r(2155),n=r(115),o=r(8999),l=r(1929);function c(){return a.createElement(a.Fragment,null,a.createElement(n.Ah,null,a.createElement("div",null,a.createElement(n.ah,{to:"/"},a.createElement("img",{src:o,alt:"Logo"})),a.createElement(n.KL,null,a.createElement("input",{type:"text",placeholder:"Buscar",name:"search"}),a.createElement("button",{type:"submit"},a.createElement(l.KSO,null))),a.createElement(n.ah,{to:"/"},a.createElement(n.Vk,null,"Home")),a.createElement(n.ah,{to:"/explorar"},a.createElement(n.Vk,null,"Explorar")),a.createElement(n.ah,{to:"/biblioteca"},a.createElement(n.Vk,null,"Biblioteca"))),a.createElement("div",null,a.createElement(n.ah,{to:"/carrinho"},a.createElement(n.wg,null,a.createElement(l.AsH,null))),a.createElement(n.ah,{to:"/perfil"},a.createElement(n.wg,null,a.createElement(l.x$1,null))))))}},3898:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(2155),n=r(115),o=r(4183),l=r(656);const c=function(){return a.createElement("div",{style:{height:"100%",width:"100%"}},a.createElement(l.O,null,a.createElement(n.zy,null),a.createElement(o.A,null)))}},4129:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"src/assets/Cyberpunk-Multiplayer.png.webp"},4183:(e,t,r)=>{r.d(t,{A:()=>E});var a=r(2155),n=r(7956),o=r(5596),l=r(2151),c=r(9258),s=r(3623),i=r(4507),p=r(5398),m=r(5228),d=r(3343),u=r(432),g=r(4678),b=r(6951),_=r(7978),k=r(4600),h=r(9452);const E=function(){return a.createElement(n.Kd,null,a.createElement(o.BV,null,a.createElement(o.qh,{path:"/",element:a.createElement(l.A,null)}),a.createElement(o.qh,{path:"/login",element:a.createElement(s.A,null)}),a.createElement(o.qh,{path:"/cadastro",element:a.createElement(i.A,null)}),a.createElement(o.qh,{path:"/explorar",element:a.createElement(d.A,null)}),a.createElement(o.qh,{path:"/detalhe-jogo/:idJogo",element:a.createElement(u.A,null)}),a.createElement(o.qh,{path:"/cadastrar-jogo",element:a.createElement(g.A,null)}),a.createElement(o.qh,{path:"/lista-de-jogos",element:a.createElement(b.A,null)}),a.createElement(o.qh,{path:"/editar-jogo/:id",element:a.createElement(_.A,null)}),a.createElement(o.qh,{path:"/finalizar-compra",element:a.createElement(k.A,null)}),a.createElement(o.qh,{path:"/perfil/",element:a.createElement(h.A,null,a.createElement(c.A,null))}),a.createElement(o.qh,{path:"/carrinho",element:a.createElement(h.A,null,a.createElement(p.A,null))}),a.createElement(o.qh,{path:"/biblioteca",element:a.createElement(h.A,null,a.createElement(m.A,null))})))}},4208:(e,t,r)=>{e.exports=r.p+"a398388f9380c24dcd86.jpg"},4290:(e,t,r)=>{r.d(t,{A:()=>i,r:()=>s});var a=r(5485),n=r.n(a);let o;try{o=void 0}catch(e){o=void 0}!o&&"undefined"!=typeof process&&{TERM_PROGRAM:"WarpTerminal",npm_package_devDependencies_file_loader:"^6.2.0",NODE:"/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/macos-arm64/pnpm",npm_package_dependencies_axios:"^0.27.2",INIT_CWD:"/Users/erickpatrickbarcelos/codes/portifolio/apps/joystick",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_package_devDependencies_style_loader:"^4.0.0",npm_package_dependencies_react_bootstrap:"^2.10.1",npm_package_scripts_dev:"webpack serve --config webpack.config.cjs --mode development",npm_config_registry:"https://registry.npmjs.org/",PNPM_HOME:"/Users/erickpatrickbarcelos/Library/pnpm",npm_package_dependencies_react_dom:"^18.2.0",npm_package_dependencies_nth_check:"^2.1.1",USER:"erickpatrickbarcelos",npm_package_dependencies_web_vitals:"^2.1.4",npm_package_devDependencies_webpack:"^5.94.0",npm_package_devDependencies_webpack_cli:"^5.1.4",npm_package_browserslist_development_1:"last 1 firefox version",PNPM_SCRIPT_SRC_DIR:"/Users/erickpatrickbarcelos/codes/portifolio/apps/joystick",npm_package_dependencies_react_icons:"^4.12.0",npm_package_devDependencies__babel_core:"^7.25.2",npm_package_devDependencies_webpack_dev_server:"^4.13.3",npm_package_browserslist_development_0:"last 1 chrome version",npm_package_devDependencies_babel_loader:"^9.1.3",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_package_dependencies_styled_components:"^5.3.11",npm_package_browserslist_development_2:"last 1 safari version",npm_execpath:"/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/macos-arm64/pnpm",npm_config_frozen_lockfile:"",PATH:"/Users/erickpatrickbarcelos/codes/portifolio/apps/joystick/node_modules/.bin:/snapshot/dist/node-gyp-bin:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.bin:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.bin:/snapshot/dist/node-gyp-bin:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.bin:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/bin:/opt/homebrew/opt/libpq/bin:/opt/homebrew/bin:/Users/erickpatrickbarcelos/.bun/bin:/Users/erickpatrickbarcelos/Library/pnpm:/Library/Frameworks/Python.framework/Versions/3.12/bin:/Users/erickpatrickbarcelos/.nvm/versions/node/v22.2.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:~/.dotnet/tools:/usr/local/go/bin:/Users/erickpatrickbarcelos/.cargo/bin:/Users/erickpatrickbarcelos/.local/bin:/Users/erickpatrickbarcelos/.local/bin",npm_package_browserslist_production_1:"not dead",PWD:"/Users/erickpatrickbarcelos/codes/portifolio/apps/joystick",npm_package_dependencies_bootstrap:"^5.3.2",npm_package_browserslist_production_0:">0.2%",npm_command:"run-script",npm_package_browserslist_production_2:"not op_mini all",npm_lifecycle_event:"build",npm_package_name:"joystick",npm_package_devDependencies__babel_preset_env:"^7.25.4",npm_package_devDependencies__babel_preset_react:"^7.24.7",NODE_PATH:"/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.pnpm/webpack@5.100.2_webpack-cli@5.1.4/node_modules/webpack/bin/node_modules:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.pnpm/webpack@5.100.2_webpack-cli@5.1.4/node_modules/webpack/node_modules:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.pnpm/webpack@5.100.2_webpack-cli@5.1.4/node_modules:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.pnpm/node_modules:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/macos-arm64/node_modules:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/node_modules:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/node_modules",npm_package_scripts_build:"webpack --config webpack.config.cjs --mode production",TURBO_HASH:"6800680df37692e8",npm_package_dependencies_react_router_dom:"^6.22.0",npm_package_engines_node:"18.x",npm_package_version:"0.1.0",SHLVL:"2",HOME:"/Users/erickpatrickbarcelos",npm_package_dependencies__types_node:"^20.14.9",npm_package_devDependencies_html_webpack_plugin:"^5.6.0",npm_lifecycle_script:"webpack --config webpack.config.cjs --mode production",npm_package_dependencies_react:"^18.2.0",npm_config_user_agent:"pnpm/8.15.6 npm/? node/v18.5.0 darwin arm64",npm_package_devDependencies_css_loader:"^7.1.2",COLORTERM:"truecolor",npm_node_execpath:"/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/macos-arm64/pnpm"}.VITE_API_URL&&(o={TERM_PROGRAM:"WarpTerminal",npm_package_devDependencies_file_loader:"^6.2.0",NODE:"/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/macos-arm64/pnpm",npm_package_dependencies_axios:"^0.27.2",INIT_CWD:"/Users/erickpatrickbarcelos/codes/portifolio/apps/joystick",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_package_devDependencies_style_loader:"^4.0.0",npm_package_dependencies_react_bootstrap:"^2.10.1",npm_package_scripts_dev:"webpack serve --config webpack.config.cjs --mode development",npm_config_registry:"https://registry.npmjs.org/",PNPM_HOME:"/Users/erickpatrickbarcelos/Library/pnpm",npm_package_dependencies_react_dom:"^18.2.0",npm_package_dependencies_nth_check:"^2.1.1",USER:"erickpatrickbarcelos",npm_package_dependencies_web_vitals:"^2.1.4",npm_package_devDependencies_webpack:"^5.94.0",npm_package_devDependencies_webpack_cli:"^5.1.4",npm_package_browserslist_development_1:"last 1 firefox version",PNPM_SCRIPT_SRC_DIR:"/Users/erickpatrickbarcelos/codes/portifolio/apps/joystick",npm_package_dependencies_react_icons:"^4.12.0",npm_package_devDependencies__babel_core:"^7.25.2",npm_package_devDependencies_webpack_dev_server:"^4.13.3",npm_package_browserslist_development_0:"last 1 chrome version",npm_package_devDependencies_babel_loader:"^9.1.3",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_package_dependencies_styled_components:"^5.3.11",npm_package_browserslist_development_2:"last 1 safari version",npm_execpath:"/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/macos-arm64/pnpm",npm_config_frozen_lockfile:"",PATH:"/Users/erickpatrickbarcelos/codes/portifolio/apps/joystick/node_modules/.bin:/snapshot/dist/node-gyp-bin:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.bin:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.bin:/snapshot/dist/node-gyp-bin:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.bin:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/bin:/opt/homebrew/opt/libpq/bin:/opt/homebrew/bin:/Users/erickpatrickbarcelos/.bun/bin:/Users/erickpatrickbarcelos/Library/pnpm:/Library/Frameworks/Python.framework/Versions/3.12/bin:/Users/erickpatrickbarcelos/.nvm/versions/node/v22.2.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:~/.dotnet/tools:/usr/local/go/bin:/Users/erickpatrickbarcelos/.cargo/bin:/Users/erickpatrickbarcelos/.local/bin:/Users/erickpatrickbarcelos/.local/bin",npm_package_browserslist_production_1:"not dead",PWD:"/Users/erickpatrickbarcelos/codes/portifolio/apps/joystick",npm_package_dependencies_bootstrap:"^5.3.2",npm_package_browserslist_production_0:">0.2%",npm_command:"run-script",npm_package_browserslist_production_2:"not op_mini all",npm_lifecycle_event:"build",npm_package_name:"joystick",npm_package_devDependencies__babel_preset_env:"^7.25.4",npm_package_devDependencies__babel_preset_react:"^7.24.7",NODE_PATH:"/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.pnpm/webpack@5.100.2_webpack-cli@5.1.4/node_modules/webpack/bin/node_modules:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.pnpm/webpack@5.100.2_webpack-cli@5.1.4/node_modules/webpack/node_modules:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.pnpm/webpack@5.100.2_webpack-cli@5.1.4/node_modules:/Users/erickpatrickbarcelos/codes/portifolio/node_modules/.pnpm/node_modules:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/macos-arm64/node_modules:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/node_modules:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules:/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/node_modules",npm_package_scripts_build:"webpack --config webpack.config.cjs --mode production",TURBO_HASH:"6800680df37692e8",npm_package_dependencies_react_router_dom:"^6.22.0",npm_package_engines_node:"18.x",npm_package_version:"0.1.0",SHLVL:"2",HOME:"/Users/erickpatrickbarcelos",npm_package_dependencies__types_node:"^20.14.9",npm_package_devDependencies_html_webpack_plugin:"^5.6.0",npm_lifecycle_script:"webpack --config webpack.config.cjs --mode production",npm_package_dependencies_react:"^18.2.0",npm_config_user_agent:"pnpm/8.15.6 npm/? node/v18.5.0 darwin arm64",npm_package_devDependencies_css_loader:"^7.1.2",COLORTERM:"truecolor",npm_node_execpath:"/Users/erickpatrickbarcelos/Library/pnpm/.tools/@pnpm+macos-arm64/8.15.6/node_modules/.pnpm/@pnpm+macos-arm64@8.15.6/node_modules/@pnpm/macos-arm64/pnpm"}.VITE_API_URL);const l=o||"https://joystick-api.erickbarcelos.com",c=n().create({baseURL:l}),s=()=>{c({method:"get",url:"/users",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(e=>{c({method:"post",url:"/users/refresh-token",headers:{"x-access-token":sessionStorage.getItem("token")},data:{id:e.id}}).then(e=>{sessionStorage.setItem("token",e.data.token)}).catch(e=>{alert(e)})}).catch(e=>{alert(e)})},i=c},4481:(e,t,r)=>{r.d(t,{A:()=>d});var a=r(2155),n=r(9564),o=r(5596),l=r(9551),c=r(7454),s=r(4290),i=r(115);const p=(0,l.Ay)(i.wg)`
  margin-right: 50px;
  font-size: 30px;
`,m=(0,l.Ay)(i.Dz)`
  align-items: center;
`;function d(e){return(0,o.Zp)(),a.createElement(m,null,a.createElement(i.eb,{baixo:!0},a.createElement("img",{src:c,alt:"jogo"}),a.createElement(i.Tj,null,a.createElement("h1",null,e.title),a.createElement(i.KC,null,a.createElement(i.Jg,null,e.genders?e.genders[0]:""),a.createElement(i.Jg,null,e.genders?e.genders[1]:""),a.createElement(i.Jg,null,e.genders?e.genders[2]:"")),a.createElement(i.tl,null,"R$",e.price))),a.createElement(p,{onClick:function(t){t.preventDefault(),s.A.delete(`/users/cart/${e._id}`,{headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{(0,s.r)(),alert("Jogo deletado")}).catch(e=>{alert(e)})}},a.createElement(n.r8o,null)))}},4507:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(2155),n=r(5596),o=r(3804),l=r(4290),c=r(115);function s(){const[e,t]=(0,a.useState)({}),r=(0,n.Zp)();return a.createElement(c.rf,null,a.createElement(o.A,null),a.createElement(c.q,{onSubmit:function(t){t.preventDefault(),l.A.post("/users",e).then(()=>{r("/")}).catch(e=>{alert(e)})}},a.createElement("h1",null,"Cadastro"),a.createElement(c.sQ,{required:!0,placeholder:"Name",type:"text",onChange:r=>t({...e,name:r.target.value})}),a.createElement(c.sQ,{required:!0,placeholder:"Username",type:"text",onChange:r=>t({...e,username:r.target.value})}),a.createElement(c.sQ,{required:!0,placeholder:"E-mail",type:"email",onChange:r=>t({...e,email:r.target.value})}),a.createElement(c.sQ,{required:!0,placeholder:"Password",type:"password",onChange:r=>t({...e,password:r.target.value})}),a.createElement(c.OV,{type:"submit"},"Cadastro"),a.createElement("p",null,"Já possui cadastro?"),a.createElement(c.ah,{to:"/login"},a.createElement(c.OV,null,"Login"))))}},4600:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(2155),n=r(5596),o=r(3804),l=(r(4481),r(4290)),c=r(115);function s(){const e=(0,n.Zp)();return a.createElement(c.rf,null,a.createElement(o.A,null),a.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,l.A)({method:"post",url:"/users/finish",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{(0,l.r)(),alert("Compra finalizada"),e("/biblioteca")}).catch(e=>{alert(e)})}},a.createElement("h1",null,"Finalizar compra"),a.createElement(c.sQ,{required:!0,placeholder:"Número do cartão",type:"number"}),a.createElement(c.sQ,{required:!0,placeholder:"CPF",type:"number"}),a.createElement(c.sQ,{required:!0,placeholder:"Nome",type:"text"}),a.createElement("label",null,"Data de validade"),a.createElement(c.sQ,{required:!0,placeholder:"Data de validade",type:"date"}),a.createElement(c.sQ,{required:!0,placeholder:"CVV",type:"number"}),a.createElement(c.ah,{to:"/"},a.createElement(c.OV,{type:"submit"},"Comprar"))))}},4678:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(2155),n=r(5596),o=r(3804),l=r(4290),c=r(115);function s(){const[e,t]=(0,a.useState)({}),r=(0,n.Zp)();return a.createElement(c.rf,null,a.createElement(o.A,null),a.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,l.A)({method:"post",url:"/games",headers:{"x-access-token":sessionStorage.getItem("token")},data:e}).then(()=>{r("/lista-de-jogos"),alert("Jogo adicionado")}).catch(e=>{alert(e)})}},a.createElement("h1",null,"Cadastro de Jogo"),a.createElement(c.sQ,{required:!0,placeholder:"Titulo",type:"text",onChange:r=>t({...e,title:r.target.value})}),a.createElement(c._S,{required:!0,placeholder:"Descrição",onChange:r=>t({...e,description:r.target.value})}),a.createElement(c.sQ,{required:!0,placeholder:"Preço",type:"number",onChange:r=>t({...e,price:r.target.value})}),a.createElement("label",null,"Mostra no carrossel?"),a.createElement(c.Iu,{required:!0,onChange:r=>t({...e,carousel:r.target.value})},a.createElement("option",null),a.createElement("option",{value:!0},"Sim"),a.createElement("option",{value:!1},"Não")),a.createElement("label",null,"Mostrar nos melhores"),a.createElement(c.Iu,{required:!0,onChange:r=>t({...e,best:r.target.value})},a.createElement("option",null),a.createElement("option",{value:!0},"Sim"),a.createElement("option",{value:!1},"Não")),a.createElement("label",null,"Lançamento?"),a.createElement(c.Iu,{required:!0,onChange:r=>t({...e,release:r.target.value})},a.createElement("option",null),a.createElement("option",{value:!0},"Sim"),a.createElement("option",{value:!1},"Não")),a.createElement(c.OV,{type:"submit"},"Cadastrar jogo")),a.createElement(c.Kg,null))}},4941:(e,t,r)=>{r.d(t,{A:()=>u});var a=r(2155),n=r(1929),o=r(9564),l=r(5596),c=r(9551),s=r(7454),i=r(4290),p=r(115);const m=(0,c.Ay)(p.wg)`
  margin-right: 50px;
  font-size: 30px;
`,d=(0,c.Ay)(p.Dz)`
  align-items: center;
`;function u(e){const t=(0,l.Zp)();return a.createElement(d,null,a.createElement(p.eb,{baixo:!0},a.createElement("img",{src:s,alt:"jogo"}),a.createElement(p.Tj,null,a.createElement("h1",null,e.title),a.createElement(p.KC,null,a.createElement(p.Jg,null,e.genders[0]?e.genders[0]:"teste"),a.createElement(p.Jg,null,e.genders[1]?e.genders[1]:"teste"),a.createElement(p.Jg,null,e.genders[2]?e.genders[2]:"teste")),a.createElement(p.tl,null,"R$",e.price,",00")),a.createElement("p",null,e.description)),a.createElement(m,{onClick:function(r){r.preventDefault(),i.A.delete(`/games/admin/${e._id}`,{headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{alert("Jogo deletado!"),t(0)}).catch(e=>{alert(e)})}},a.createElement(o.r8o,null)),a.createElement(p.ah,{to:`/editar-jogo/${e._id}`},a.createElement(m,null,a.createElement(n.uO9,null))))}},5228:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(2155),n=r(5596),o=r(3804),l=r(5283),c=r(4290),s=r(115);function i(){const[e,t]=(0,a.useState)([]),[r,i]=(0,a.useState)([]),[p,m]=(0,a.useState)();return(0,n.Zp)(),(0,a.useEffect)(()=>{(0,c.r)(),(0,c.A)({method:"get",url:"/users/library",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(r=>{0===e.length&&t(r.data)}).catch(e=>{alert(e)})},[]),(0,a.useEffect)(()=>{e.map(e=>{m(e),(0,c.A)({method:"get",url:`/games/${e}`}).then(t=>{p!==e&&i(e=>[...e,t.data])}).catch(e=>{alert(e)})})},[e]),a.createElement(s.rf,null,a.createElement(o.A,null),a.createElement(s.tl,{margem:!0},"Biblioteca"),a.createElement(s.KR,null,r.map(e=>a.createElement(l.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price,description:e.description}))),a.createElement(s.Kg,null))}},5283:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(2155),n=r(115),o=r(7454);function l(e){return a.createElement(n.Dz,null,a.createElement(n.eb,{baixo:!0},a.createElement("img",{src:o,alt:"jogo"}),a.createElement(n.Tj,null,a.createElement("h1",null,e.title),a.createElement(n.OV,{noMargin:!0},"Baixar")),a.createElement("p",null,e.description)))}},5398:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(2155),n=r(5596),o=r(3804),l=r(4481),c=r(4290),s=r(115);function i(){const[e,t]=(0,a.useState)([]),[r,i]=(0,a.useState)([]),[p,m]=(0,a.useState)(),d=(0,n.Zp)();return(0,a.useEffect)(()=>{(0,c.r)(),(0,c.A)({method:"get",url:"/users/cart",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(r=>{0===e.length&&t(r.data)}).catch(e=>{alert(e)})},[]),(0,a.useEffect)(()=>{e.map(e=>{m(e),(0,c.A)({method:"get",url:`/games/${e}`}).then(t=>{p!==e&&i(e=>[...e,t.data])}).catch(e=>{alert(e)})})},[e]),a.createElement(s.rf,null,a.createElement(o.A,null),a.createElement(s.tl,{margem:!0},"Carrinho"),a.createElement(s.KR,null,r.map(e=>a.createElement(l.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price}))),a.createElement(s.tl,{margem:!0},"Sub-total: R$",function(){let e=0;return r.map(t=>e+=t.price),e}()),a.createElement(s.Dz,null,a.createElement(s.ah,{to:"/finalizar-compra"},a.createElement(s.OV,{pequeno:!0,onClick:function(e){e.preventDefault(),(0,c.A)({method:"post",url:"/users/finish",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{(0,c.r)(),alert("Compra finalizada"),d("/biblioteca")}).catch(e=>{alert(e)})}},"Finalizar compra")),a.createElement(s.OV,{pequeno:!0,onClick:function(e){e.preventDefault(),c.A.delete("/users/cart",{headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{(0,c.r)(),alert("Jogos deletados"),d(0)}).catch(e=>{alert(e)})}},"Esvaziar carrinho")),a.createElement(s.Kg,null))}},6355:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(2155),n=r(115),o=r(7454),l=r(5596);const c=r(9551).Ay.img`
  object-fit: contain;
  object-position: left;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
`;function s(e){const t=(0,l.Zp)();return a.createElement(n.eb,null,a.createElement(c,{src:o,alt:"jogo"}),a.createElement(n.Tj,null,a.createElement("h1",null,e.title),a.createElement(n.KC,null,a.createElement(n.Jg,null," ",e.genders[0]),a.createElement(n.Jg,null," ",e.genders[1]),a.createElement(n.Jg,null," ",e.genders[2])),a.createElement("h1",null,"R$",e.price,",00"),a.createElement(n.OV,{noMargin:!0,onClick:function(){t(`/detalhe-jogo/${e._id}`)}},"Comprar")))}},6951:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(2155),n=r(3804),o=r(4941),l=r(4290),c=r(115);function s(){const[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(0,l.r)(),l.A.get("/games").then(e=>{let{data:r}=e;t(r)}).catch(e=>{alert(e)})},[]),a.createElement(c.rf,null,a.createElement(n.A,null),a.createElement(c.tl,{margem:!0},"Jogos da loja"),a.createElement(c.ah,{to:"/cadastrar-jogo"},a.createElement(c.OV,null,"Adicionar jogo")),a.createElement(c.KR,null,e.map(e=>a.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price,description:e.description}))),a.createElement(c.Kg,null))}},7454:(e,t,r)=>{e.exports=r.p+"ef71d95ee705b5d1be81.jpeg"},7978:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(2155),n=r(5596),o=r(3804),l=r(4290),c=r(115);function s(){const{id:e}=(0,n.g)(),[t,r]=(0,a.useState)({}),[s,i]=(0,a.useState)({}),p=(0,n.Zp)();return(0,a.useEffect)(()=>{l.A.get(`/games/${e}`).then(e=>{let{data:t}=e;r(t),i(t)}).catch(e=>{alert(e)})},[]),a.createElement(c.rf,null,a.createElement(o.A,null),a.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,l.A)({method:"put",url:`/games/admin/${e}`,headers:{"x-access-token":sessionStorage.getItem("token")},data:s}).then(()=>{p("/lista-de-jogos"),alert("Informações editadas")}).catch(e=>{alert(e)})}},a.createElement("h1",null,"Editar Jogo"),a.createElement(c.sQ,{required:!0,placeholder:"Titulo",type:"text",defaultValue:t.title,onChange:e=>i({...s,title:e.target.value})}),a.createElement(c._S,{required:!0,placeholder:"Descrição",defaultValue:t.description,onChange:e=>i({...s,description:e.target.value})}),a.createElement(c.sQ,{required:!0,placeholder:"Preço",type:"number",defaultValue:t.price,onChange:e=>i({...s,price:e.target.value})}),a.createElement("label",null,"Mostra no carrossel?"),a.createElement(c.Iu,{required:!0,defaultValue:t.carousel,onChange:e=>i({...s,carousel:e.target.value})},a.createElement("option",null),a.createElement("option",{value:!0},"Sim"),a.createElement("option",{value:!1},"Não")),a.createElement("label",null,"Mostrar nos melhores"),a.createElement(c.Iu,{required:!0,defaultValue:t.best,onChange:e=>i({...s,best:e.target.value})},a.createElement("option",null),a.createElement("option",{value:!0},"Sim"),a.createElement("option",{value:!1},"Não")),a.createElement("label",null,"Lançamento?"),a.createElement(c.Iu,{required:!0,defaultValue:t.release,onChange:e=>i({...s,release:e.target.value})},a.createElement("option",null),a.createElement("option",{value:!0},"Sim"),a.createElement("option",{value:!1},"Não")),a.createElement(c.OV,{type:"submit"},"Editar jogo")),a.createElement(c.Kg,null))}},8429:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(2155),n=r(115),o=r(7454),l=r(5596),c=r(4290);function s(e){const t=sessionStorage.getItem("token"),r=(0,l.Zp)();return a.createElement(n.HE,null,a.createElement("img",{src:o,alt:"jogo"}),a.createElement(n.Tj,null,a.createElement("h1",null,e.title),a.createElement(n.KC,null,a.createElement(n.Jg,null,e.genders[0]),a.createElement(n.Jg,null," ",e.genders[1]),a.createElement(n.Jg,null," ",e.genders[2])),a.createElement("p",null,e.description),a.createElement(n.OV,{noMargin:!0,onClick:function(a){a.preventDefault(),(0,c.A)({method:"put",url:`/users/${e._id}`,headers:{"x-access-token":t}}).then(()=>{r("/carrinho")})}},"Comprar")))}},8807:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(2155),n=r(115),o=r(7454),l=r(9551),c=r(5596);const s=l.Ay.img`
  object-fit: contain;
  object-position: left;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
`,i=(0,l.Ay)(n.Tj)`
  text-align: start;
`;function p(e){const t=(0,c.Zp)();return a.createElement(n.sU,null,a.createElement(s,{src:o,alt:"jogo"}),a.createElement(i,null,a.createElement("h1",null,e.title),a.createElement(n.KC,null,a.createElement(n.Jg,null," ",e.genders[0]),a.createElement(n.Jg,null," ",e.genders[1]),a.createElement(n.Jg,null," ",e.genders[2])),a.createElement("p",null,e.description," "),a.createElement("h1",null,"R$",e.price,",00"),a.createElement(n.OV,{noMargin:!0,onClick:function(){t(`/detalhe-jogo/${e._id}`)}},"Comprar")))}},8999:(e,t,r)=>{e.exports=r.p+"65eab9749ae802cad55e.png"},9258:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(2155),n=r(5596),o=r(4208),l=r(3804),c=r(4290),s=r(115);function i(){const[e,t]=(0,a.useState)({}),[r,i]=(0,a.useState)({}),p=(0,n.Zp)();return(0,a.useEffect)(()=>{(0,c.r)(),c.A.get("/users",{headers:{"x-access-token":sessionStorage.getItem("token")}}).then(e=>{let{data:r}=e;t(r)}).catch(e=>{console.log(e)})},[]),a.createElement(s.rf,null,a.createElement(l.A,null),a.createElement(s.q,{onSubmit:function(e){e.preventDefault(),(0,c.A)({method:"post",url:"/users",headers:{"x-access-token":sessionStorage.getItem("token")},data:r}).then(()=>{(0,c.r)(),alert("Informações editadas")}).catch(e=>{alert(e)})}},a.createElement("h1",null,"Perfil"),a.createElement(s.MG,{src:o,alt:"foto de perfil"}),a.createElement(s.sQ,{placeholder:"Name",type:"text",defaultValue:e.name,onChange:e=>i({...r,name:e.target.value})}),a.createElement(s.sQ,{placeholder:"Username",type:"text",defaultValue:e.username,onChange:e=>i({...r,username:e.target.value})}),a.createElement(s.sQ,{placeholder:"E-mail",type:"email",id:"email",defaultValue:e.email,onChange:e=>i({...r,email:e.target.value})}),a.createElement(s.sQ,{placeholder:"Password",type:"text",id:"password",onChange:e=>i({...r,password:e.target.value})}),a.createElement(s.OV,{type:"submit"},"Salvar"),a.createElement(s.OV,{onClick:function(e){e.preventDefault(),sessionStorage.removeItem("token"),p("/")}},"Sair"),e.isAdmin?a.createElement(s.ah,{to:"/lista-de-jogos"},a.createElement(s.OV,null,"Lista de jogos")):a.createElement("div",null)))}},9452:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(2155),n=r(5596);function o(e){let{children:t}=e,r=(0,n.zy)();return sessionStorage.getItem("token")?t:a.createElement(n.C5,{to:"/login",state:{from:r},replace:!0})}}}]);