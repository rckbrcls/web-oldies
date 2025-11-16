"use strict";(self.webpackChunkjoystick=self.webpackChunkjoystick||[]).push([[898],{115:(e,t,a)=>{a.d(t,{Ah:()=>u,Dz:()=>S,HE:()=>p,Iu:()=>q,Jg:()=>E,KC:()=>h,KL:()=>m,KR:()=>b,Kg:()=>C,MG:()=>A,OV:()=>y,Tj:()=>g,Vk:()=>c,_S:()=>k,ah:()=>s,eb:()=>x,q:()=>f,rf:()=>i,sQ:()=>v,sU:()=>d,tl:()=>o,wg:()=>w,zy:()=>l});var r=a(9551),n=a(7956);const l=r.DU`
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: white;
  border: none;
  background: none;
}
`,o=r.Ay.h1`
  margin: ${e=>e.margem?"50px 0px 10px 30px":"10px"};
`,c=r.Ay.h3`
  margin: ${e=>e.margem?"10px 0px 10px 30px":"10px"};
  color: ${e=>e.cinza?"#aaa":"white"};
`,i=r.Ay.div`
  background-color: #272650;
  position: absolute;
  min-height: 100%;
  min-width: 100%;
`,s=(0,r.Ay)(n.N_)`
  text-decoration: none;
  background: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`,u=((0,r.Ay)(n.N_)`
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
`,r.Ay.nav`
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
`),m=r.Ay.div`
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
`,d=r.Ay.div`
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
`,p=r.Ay.div`
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
`,g=r.Ay.div`
  margin: 100px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`,h=r.Ay.div`
  display: flex;
  margin: 0px 0 20px;
`,E=r.Ay.div`
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
`,x=r.Ay.div`
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
`,b=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`,f=r.Ay.form`
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
`,A=r.Ay.img`
  width: 200px;
  height: 200px;
  border-radius: 500px;
  margin: 30px auto;
`,v=r.Ay.input`
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
`,k=r.Ay.textarea`
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
`,y=r.Ay.button`
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
`,w=r.Ay.button`
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
`,S=r.Ay.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,C=r.Ay.div`
  margin-top: 100px;
`,q=r.Ay.select`
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
`},405:(e,t,a)=>{e.exports=a.p+"f589addb496147338150.jpg"},432:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(2155),n=a(115),l=a(3804),o=a(8429),c=a(5596),i=a(4290);function s(){const{idJogo:e}=(0,c.g)(),[t,a]=(0,r.useState)(),[s,u]=(0,r.useState)(),[m,d]=(0,r.useState)(),[p,g]=(0,r.useState)([]),[h,E]=(0,r.useState)(),[x,b]=(0,r.useState)(),[f,A]=(0,r.useState)();return(0,r.useEffect)(()=>{i.A.get(`http://localhost:3000/games/${e}`).then(e=>{let{data:t}=e;a(t.title),u(t.description),d(t.price),g(t.genders),E(t.carousel),b(t.best),A(t.isFree)}).catch(e=>{alert(e)})},[]),r.createElement(n.rf,null,r.createElement(l.A,null),r.createElement(o.A,{title:t,description:s,price:m,genders:p,carousel:h,best:x,isFree:f,_id:e}),r.createElement(n.Kg,null))}},656:(e,t,a)=>{a.d(t,{O:()=>l});var r=a(2155);const n=r.createContext({}),l=e=>{const[t,a]=(0,r.useState)([]);return r.createElement(n.Provider,{value:{carrinho:t,setCarrinho:a}},e.children)}},2151:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(2155),n=a(3804),l=a(6355),o=a(8807),c=a(405),i=a(115),s=a(4290),u=a(9551),m=a(4622);const d=(0,u.Ay)(i.rf)`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2)
    ),
    url(${c});
  background-repeat: no-repeat;
`;function p(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{s.A.get("http://localhost:3000/games").then(e=>{let{data:a}=e;t(a)}).catch(e=>{alert(e)}),console.log(e)},[]),r.createElement(d,null,r.createElement(n.A,null),r.createElement(m.A,null,e&&e.filter(e=>!0===e.carousel).map(e=>r.createElement(m.A.Item,{key:e._id},r.createElement(o.A,{_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))),r.createElement(i.tl,{margem:!0},"Melhores Jogos"),r.createElement(i.Vk,{cinza:!0,margem:!0},"Explore os melhores projetos da plataforma"),r.createElement(i.KR,null,e.map(e=>r.createElement(l.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price}))))}},3343:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(2155),n=a(3804),l=a(6355),o=a(8807),c=a(4129),i=a(115),s=a(4290),u=a(9551),m=a(4622);const d=(0,u.Ay)(i.rf)`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2)
    ),
    url(${c.A});
  background-repeat: no-repeat;
`;function p(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{s.A.get("http://localhost:3000/games").then(e=>{let{data:a}=e;t(a)}).catch(e=>{alert(e)})},[]),r.createElement(d,null,r.createElement(n.A,null),r.createElement(m.A,null,e.filter(e=>!0===e.carousel).map(e=>r.createElement(m.A.Item,{key:e._id},r.createElement(o.A,{_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))),r.createElement(i.Dz,null,r.createElement("div",null,r.createElement(i.tl,{margem:!0},"Jogos em alta"),r.createElement(i.KR,null,e.filter(e=>!0===e.carousel).map(e=>r.createElement(l.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))),r.createElement("div",null,r.createElement(i.tl,{margem:!0},"Novidades"),r.createElement(m.A,null,e.filter(e=>!0===e.release).map(e=>r.createElement(m.A.Item,{key:e._id},r.createElement(l.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))),r.createElement(i.tl,{margem:!0},"Jogos grátis"),r.createElement(m.A,null,e.filter(e=>0===e.price).map(e=>r.createElement(m.A.Item,{key:e._id},r.createElement(l.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))))))}},3623:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(2155),n=a(3804),l=a(115),o=a(4290),c=a(5596);function i(){const[e,t]=(0,r.useState)(),[a,i]=(0,r.useState)(),s=(0,c.Zp)();return r.createElement(l.rf,null,r.createElement(n.A,null),r.createElement(l.q,{onSubmit:async function(t){t.preventDefault(),console.log(e),console.log(a),o.A.post("http://localhost:3000/users/authenticate",{email:e,password:a}).then(e=>{let{data:t}=e;console.log(t),sessionStorage.setItem("token",t.token),s("/")}).catch(e=>{alert(e)})}},r.createElement("h1",null,"Login"),r.createElement(l.sQ,{required:!0,placeholder:"Email",type:"text",value:e,onChange:e=>t(e.target.value)}),r.createElement(l.sQ,{required:!0,placeholder:"Password",type:"password",value:a,onChange:e=>i(e.target.value)}),r.createElement(l.OV,{type:"submit"},"Login"),r.createElement("p",null,"Não possui cadastro?"),r.createElement(l.ah,{to:"/cadastro"},r.createElement(l.OV,null,"Cadastro"))))}},3804:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(2155),n=a(115),l=a(8999),o=a(1929);function c(){return r.createElement(r.Fragment,null,r.createElement(n.Ah,null,r.createElement("div",null,r.createElement(n.ah,{to:"/"},r.createElement("img",{src:l,alt:"Logo"})),r.createElement(n.KL,null,r.createElement("input",{type:"text",placeholder:"Buscar",name:"search"}),r.createElement("button",{type:"submit"},r.createElement(o.KSO,null))),r.createElement(n.ah,{to:"/"},r.createElement(n.Vk,null,"Home")),r.createElement(n.ah,{to:"/explorar"},r.createElement(n.Vk,null,"Explorar")),r.createElement(n.ah,{to:"/biblioteca"},r.createElement(n.Vk,null,"Biblioteca"))),r.createElement("div",null,r.createElement(n.ah,{to:"/carrinho"},r.createElement(n.wg,null,r.createElement(o.AsH,null))),r.createElement(n.ah,{to:"/perfil"},r.createElement(n.wg,null,r.createElement(o.x$1,null))))))}},3898:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var r=a(2155),n=a(115),l=a(4183),o=a(656);const c=function(){return r.createElement("div",{style:{height:"100%",width:"100%"}},r.createElement(o.O,null,r.createElement(n.zy,null),r.createElement(l.A,null)))}},4129:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"src/assets/Cyberpunk-Multiplayer.png.webp"},4183:(e,t,a)=>{a.d(t,{A:()=>f});var r=a(2155),n=a(7956),l=a(5596),o=a(2151),c=a(9258),i=a(3623),s=a(4507),u=a(5398),m=a(5228),d=a(3343),p=a(432),g=a(4678),h=a(6951),E=a(7978),x=a(4600),b=a(9452);const f=function(){return r.createElement(n.Kd,null,r.createElement(l.BV,null,r.createElement(l.qh,{path:"/",element:r.createElement(o.A,null)}),r.createElement(l.qh,{path:"/login",element:r.createElement(i.A,null)}),r.createElement(l.qh,{path:"/cadastro",element:r.createElement(s.A,null)}),r.createElement(l.qh,{path:"/explorar",element:r.createElement(d.A,null)}),r.createElement(l.qh,{path:"/detalhe-jogo/:idJogo",element:r.createElement(p.A,null)}),r.createElement(l.qh,{path:"/cadastrar-jogo",element:r.createElement(g.A,null)}),r.createElement(l.qh,{path:"/lista-de-jogos",element:r.createElement(h.A,null)}),r.createElement(l.qh,{path:"/editar-jogo/:id",element:r.createElement(E.A,null)}),r.createElement(l.qh,{path:"/finalizar-compra",element:r.createElement(x.A,null)}),r.createElement(l.qh,{path:"/perfil/",element:r.createElement(b.A,null,r.createElement(c.A,null))}),r.createElement(l.qh,{path:"/carrinho",element:r.createElement(b.A,null,r.createElement(u.A,null))}),r.createElement(l.qh,{path:"/biblioteca",element:r.createElement(b.A,null,r.createElement(m.A,null))})))}},4208:(e,t,a)=>{e.exports=a.p+"a398388f9380c24dcd86.jpg"},4290:(e,t,a)=>{a.d(t,{A:()=>o,r:()=>l});var r=a(5485);const n=a.n(r)().create({baseURL:"http://localhost:3000"}),l=()=>{n({method:"get",url:"http://localhost:3000/users",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(e=>{n({method:"post",url:"http://localhost:3000/users/refresh-token",headers:{"x-access-token":sessionStorage.getItem("token")},data:{id:e.id}}).then(e=>{sessionStorage.setItem("token",e.data.token)}).catch(e=>{alert(e)})}).catch(e=>{alert(e)})},o=n},4481:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(2155),n=a(9564),l=a(5596),o=a(9551),c=a(7454),i=a(4290),s=a(115);const u=(0,o.Ay)(s.wg)`
  margin-right: 50px;
  font-size: 30px;
`,m=(0,o.Ay)(s.Dz)`
  align-items: center;
`;function d(e){return(0,l.Zp)(),r.createElement(m,null,r.createElement(s.eb,{baixo:!0},r.createElement("img",{src:c,alt:"jogo"}),r.createElement(s.Tj,null,r.createElement("h1",null,e.title),r.createElement(s.KC,null,r.createElement(s.Jg,null,e.genders?e.genders[0]:""),r.createElement(s.Jg,null,e.genders?e.genders[1]:""),r.createElement(s.Jg,null,e.genders?e.genders[2]:"")),r.createElement(s.tl,null,"R$",e.price))),r.createElement(u,{onClick:function(t){t.preventDefault(),i.A.delete(`http://localhost:3000/users/cart/${e._id}`,{headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{(0,i.r)(),alert("Jogo deletado")}).catch(e=>{alert(e)})}},r.createElement(n.r8o,null)))}},4507:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(2155),n=a(5596),l=a(3804),o=a(4290),c=a(115);function i(){const[e,t]=(0,r.useState)({}),a=(0,n.Zp)();return r.createElement(c.rf,null,r.createElement(l.A,null),r.createElement(c.q,{onSubmit:function(t){t.preventDefault(),o.A.post("http://localhost:3000/users",e).then(()=>{a("/")}).catch(e=>{alert(e)})}},r.createElement("h1",null,"Cadastro"),r.createElement(c.sQ,{required:!0,placeholder:"Name",type:"text",onChange:a=>t({...e,name:a.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"Username",type:"text",onChange:a=>t({...e,username:a.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"E-mail",type:"email",onChange:a=>t({...e,email:a.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"Password",type:"password",onChange:a=>t({...e,password:a.target.value})}),r.createElement(c.OV,{type:"submit"},"Cadastro"),r.createElement("p",null,"Já possui cadastro?"),r.createElement(c.ah,{to:"/login"},r.createElement(c.OV,null,"Login"))))}},4600:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(2155),n=a(5596),l=a(3804),o=(a(4481),a(4290)),c=a(115);function i(){const e=(0,n.Zp)();return r.createElement(c.rf,null,r.createElement(l.A,null),r.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,o.A)({method:"post",url:"http://localhost:3000/users/finish",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{(0,o.r)(),alert("Compra finalizada"),e("/biblioteca")}).catch(e=>{alert(e)})}},r.createElement("h1",null,"Finalizar compra"),r.createElement(c.sQ,{required:!0,placeholder:"Número do cartão",type:"number"}),r.createElement(c.sQ,{required:!0,placeholder:"CPF",type:"number"}),r.createElement(c.sQ,{required:!0,placeholder:"Nome",type:"text"}),r.createElement("label",null,"Data de validade"),r.createElement(c.sQ,{required:!0,placeholder:"Data de validade",type:"date"}),r.createElement(c.sQ,{required:!0,placeholder:"CVV",type:"number"}),r.createElement(c.ah,{to:"/"},r.createElement(c.OV,{type:"submit"},"Comprar"))))}},4678:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(2155),n=a(5596),l=a(3804),o=a(4290),c=a(115);function i(){const[e,t]=(0,r.useState)({}),a=(0,n.Zp)();return r.createElement(c.rf,null,r.createElement(l.A,null),r.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,o.A)({method:"post",url:"http://localhost:3000/games",headers:{"x-access-token":sessionStorage.getItem("token")},data:e}).then(()=>{a("/lista-de-jogos"),alert("Jogo adicionado")}).catch(e=>{alert(e)})}},r.createElement("h1",null,"Cadastro de Jogo"),r.createElement(c.sQ,{required:!0,placeholder:"Titulo",type:"text",onChange:a=>t({...e,title:a.target.value})}),r.createElement(c._S,{required:!0,placeholder:"Descrição",onChange:a=>t({...e,description:a.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"Preço",type:"number",onChange:a=>t({...e,price:a.target.value})}),r.createElement("label",null,"Mostra no carrossel?"),r.createElement(c.Iu,{required:!0,onChange:a=>t({...e,carousel:a.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement("label",null,"Mostrar nos melhores"),r.createElement(c.Iu,{required:!0,onChange:a=>t({...e,best:a.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement("label",null,"Lançamento?"),r.createElement(c.Iu,{required:!0,onChange:a=>t({...e,release:a.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement(c.OV,{type:"submit"},"Cadastrar jogo")),r.createElement(c.Kg,null))}},4941:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(2155),n=a(1929),l=a(9564),o=a(5596),c=a(9551),i=a(7454),s=a(4290),u=a(115);const m=(0,c.Ay)(u.wg)`
  margin-right: 50px;
  font-size: 30px;
`,d=(0,c.Ay)(u.Dz)`
  align-items: center;
`;function p(e){const t=(0,o.Zp)();return r.createElement(d,null,r.createElement(u.eb,{baixo:!0},r.createElement("img",{src:i,alt:"jogo"}),r.createElement(u.Tj,null,r.createElement("h1",null,e.title),r.createElement(u.KC,null,r.createElement(u.Jg,null,e.genders[0]?e.genders[0]:"teste"),r.createElement(u.Jg,null,e.genders[1]?e.genders[1]:"teste"),r.createElement(u.Jg,null,e.genders[2]?e.genders[2]:"teste")),r.createElement(u.tl,null,"R$",e.price,",00")),r.createElement("p",null,e.description)),r.createElement(m,{onClick:function(a){a.preventDefault(),s.A.delete(`http://localhost:3000/games/admin/${e._id}`,{headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{alert("Jogo deletado!"),t(0)}).catch(e=>{alert(e)})}},r.createElement(l.r8o,null)),r.createElement(u.ah,{to:`/editar-jogo/${e._id}`},r.createElement(m,null,r.createElement(n.uO9,null))))}},5228:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(2155),n=a(5596),l=a(3804),o=a(5283),c=a(4290),i=a(115);function s(){const[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)([]),[u,m]=(0,r.useState)();return(0,n.Zp)(),(0,r.useEffect)(()=>{(0,c.r)(),(0,c.A)({method:"get",url:"http://localhost:3000/users/library",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(a=>{0===e.length&&t(a.data)}).catch(e=>{alert(e)})},[]),(0,r.useEffect)(()=>{e.map(e=>{m(e),(0,c.A)({method:"get",url:`http://localhost:3000/games/${e}`}).then(t=>{u!==e&&s(e=>[...e,t.data])}).catch(e=>{alert(e)})})},[e]),r.createElement(i.rf,null,r.createElement(l.A,null),r.createElement(i.tl,{margem:!0},"Biblioteca"),r.createElement(i.KR,null,a.map(e=>r.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price,description:e.description}))),r.createElement(i.Kg,null))}},5283:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(2155),n=a(115),l=a(7454);function o(e){return r.createElement(n.Dz,null,r.createElement(n.eb,{baixo:!0},r.createElement("img",{src:l,alt:"jogo"}),r.createElement(n.Tj,null,r.createElement("h1",null,e.title),r.createElement(n.OV,{noMargin:!0},"Baixar")),r.createElement("p",null,e.description)))}},5398:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(2155),n=a(5596),l=a(3804),o=a(4481),c=a(4290),i=a(115);function s(){const[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)([]),[u,m]=(0,r.useState)(),d=(0,n.Zp)();return(0,r.useEffect)(()=>{(0,c.r)(),(0,c.A)({method:"get",url:"http://localhost:3000/users/cart",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(a=>{0===e.length&&t(a.data)}).catch(e=>{alert(e)})},[]),(0,r.useEffect)(()=>{e.map(e=>{m(e),(0,c.A)({method:"get",url:`http://localhost:3000/games/${e}`}).then(t=>{u!==e&&s(e=>[...e,t.data])}).catch(e=>{alert(e)})})},[e]),r.createElement(i.rf,null,r.createElement(l.A,null),r.createElement(i.tl,{margem:!0},"Carrinho"),r.createElement(i.KR,null,a.map(e=>r.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price}))),r.createElement(i.tl,{margem:!0},"Sub-total: R$",function(){let e=0;return a.map(t=>e+=t.price),e}()),r.createElement(i.Dz,null,r.createElement(i.ah,{to:"/finalizar-compra"},r.createElement(i.OV,{pequeno:!0,onClick:function(e){e.preventDefault(),(0,c.A)({method:"post",url:"http://localhost:3000/users/finish",headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{(0,c.r)(),alert("Compra finalizada"),d("/biblioteca")}).catch(e=>{alert(e)})}},"Finalizar compra")),r.createElement(i.OV,{pequeno:!0,onClick:function(e){e.preventDefault(),c.A.delete("http://localhost:3000/users/cart",{headers:{"x-access-token":sessionStorage.getItem("token")}}).then(()=>{(0,c.r)(),alert("Jogos deletados"),d(0)}).catch(e=>{alert(e)})}},"Esvaziar carrinho")),r.createElement(i.Kg,null))}},6355:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(2155),n=a(115),l=a(7454),o=a(5596);const c=a(9551).Ay.img`
  object-fit: contain;
  object-position: left;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
`;function i(e){const t=(0,o.Zp)();return r.createElement(n.eb,null,r.createElement(c,{src:l,alt:"jogo"}),r.createElement(n.Tj,null,r.createElement("h1",null,e.title),r.createElement(n.KC,null,r.createElement(n.Jg,null," ",e.genders[0]),r.createElement(n.Jg,null," ",e.genders[1]),r.createElement(n.Jg,null," ",e.genders[2])),r.createElement("h1",null,"R$",e.price,",00"),r.createElement(n.OV,{noMargin:!0,onClick:function(){t(`/detalhe-jogo/${e._id}`)}},"Comprar")))}},6951:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(2155),n=a(3804),l=a(4941),o=a(4290),c=a(115);function i(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(0,o.r)(),o.A.get("http://localhost:3000/games").then(e=>{let{data:a}=e;t(a)}).catch(e=>{alert(e)})},[]),r.createElement(c.rf,null,r.createElement(n.A,null),r.createElement(c.tl,{margem:!0},"Jogos da loja"),r.createElement(c.ah,{to:"/cadastrar-jogo"},r.createElement(c.OV,null,"Adicionar jogo")),r.createElement(c.KR,null,e.map(e=>r.createElement(l.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price,description:e.description}))),r.createElement(c.Kg,null))}},7454:(e,t,a)=>{e.exports=a.p+"ef71d95ee705b5d1be81.jpeg"},7978:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(2155),n=a(5596),l=a(3804),o=a(4290),c=a(115);function i(){const{id:e}=(0,n.g)(),[t,a]=(0,r.useState)({}),[i,s]=(0,r.useState)({}),u=(0,n.Zp)();return(0,r.useEffect)(()=>{o.A.get(`http://localhost:3000/games/${e}`).then(e=>{let{data:t}=e;a(t),s(t)}).catch(e=>{alert(e)})},[]),r.createElement(c.rf,null,r.createElement(l.A,null),r.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,o.A)({method:"put",url:`http://localhost:3000/games/admin/${e}`,headers:{"x-access-token":sessionStorage.getItem("token")},data:i}).then(()=>{u("/lista-de-jogos"),alert("Informações editadas")}).catch(e=>{alert(e)})}},r.createElement("h1",null,"Editar Jogo"),r.createElement(c.sQ,{required:!0,placeholder:"Titulo",type:"text",defaultValue:t.title,onChange:e=>s({...i,title:e.target.value})}),r.createElement(c._S,{required:!0,placeholder:"Descrição",defaultValue:t.description,onChange:e=>s({...i,description:e.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"Preço",type:"number",defaultValue:t.price,onChange:e=>s({...i,price:e.target.value})}),r.createElement("label",null,"Mostra no carrossel?"),r.createElement(c.Iu,{required:!0,defaultValue:t.carousel,onChange:e=>s({...i,carousel:e.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement("label",null,"Mostrar nos melhores"),r.createElement(c.Iu,{required:!0,defaultValue:t.best,onChange:e=>s({...i,best:e.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement("label",null,"Lançamento?"),r.createElement(c.Iu,{required:!0,defaultValue:t.release,onChange:e=>s({...i,release:e.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement(c.OV,{type:"submit"},"Editar jogo")),r.createElement(c.Kg,null))}},8429:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(2155),n=a(115),l=a(7454),o=a(5596),c=a(4290);function i(e){const t=sessionStorage.getItem("token"),a=(0,o.Zp)();return r.createElement(n.HE,null,r.createElement("img",{src:l,alt:"jogo"}),r.createElement(n.Tj,null,r.createElement("h1",null,e.title),r.createElement(n.KC,null,r.createElement(n.Jg,null,e.genders[0]),r.createElement(n.Jg,null," ",e.genders[1]),r.createElement(n.Jg,null," ",e.genders[2])),r.createElement("p",null,e.description),r.createElement(n.OV,{noMargin:!0,onClick:function(r){r.preventDefault(),(0,c.A)({method:"put",url:`http://localhost:3000/users/${e._id}`,headers:{"x-access-token":t}}).then(()=>{a("/carrinho")})}},"Comprar")))}},8807:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(2155),n=a(115),l=a(7454),o=a(9551),c=a(5596);const i=o.Ay.img`
  object-fit: contain;
  object-position: left;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
`,s=(0,o.Ay)(n.Tj)`
  text-align: start;
`;function u(e){const t=(0,c.Zp)();return r.createElement(n.sU,null,r.createElement(i,{src:l,alt:"jogo"}),r.createElement(s,null,r.createElement("h1",null,e.title),r.createElement(n.KC,null,r.createElement(n.Jg,null," ",e.genders[0]),r.createElement(n.Jg,null," ",e.genders[1]),r.createElement(n.Jg,null," ",e.genders[2])),r.createElement("p",null,e.description," "),r.createElement("h1",null,"R$",e.price,",00"),r.createElement(n.OV,{noMargin:!0,onClick:function(){t(`/detalhe-jogo/${e._id}`)}},"Comprar")))}},8999:(e,t,a)=>{e.exports=a.p+"65eab9749ae802cad55e.png"},9258:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(2155),n=a(5596),l=a(4208),o=a(3804),c=a(4290),i=a(115);function s(){const[e,t]=(0,r.useState)({}),[a,s]=(0,r.useState)({}),u=(0,n.Zp)();return(0,r.useEffect)(()=>{(0,c.r)(),c.A.get("http://localhost:3000/users",{headers:{"x-access-token":sessionStorage.getItem("token")}}).then(e=>{let{data:a}=e;t(a)}).catch(e=>{console.log(e)})},[]),r.createElement(i.rf,null,r.createElement(o.A,null),r.createElement(i.q,{onSubmit:function(e){e.preventDefault(),(0,c.A)({method:"put",url:"http://localhost:3000/users",headers:{"x-access-token":sessionStorage.getItem("token")},data:a}).then(()=>{(0,c.r)(),alert("Informações editadas")}).catch(e=>{alert(e)})}},r.createElement("h1",null,"Perfil"),r.createElement(i.MG,{src:l,alt:"foto de perfil"}),r.createElement(i.sQ,{placeholder:"Name",type:"text",defaultValue:e.name,onChange:e=>s({...a,name:e.target.value})}),r.createElement(i.sQ,{placeholder:"Username",type:"text",defaultValue:e.username,onChange:e=>s({...a,username:e.target.value})}),r.createElement(i.sQ,{placeholder:"E-mail",type:"email",id:"email",defaultValue:e.email,onChange:e=>s({...a,email:e.target.value})}),r.createElement(i.sQ,{placeholder:"Password",type:"text",id:"password",onChange:e=>s({...a,password:e.target.value})}),r.createElement(i.OV,{type:"submit"},"Salvar"),r.createElement(i.OV,{onClick:function(e){e.preventDefault(),sessionStorage.removeItem("token"),u("/")}},"Sair"),e.isAdmin?r.createElement(i.ah,{to:"/lista-de-jogos"},r.createElement(i.OV,null,"Lista de jogos")):r.createElement("div",null)))}},9452:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(2155),n=a(5596);function l(e){let{children:t}=e,a=(0,n.zy)();return sessionStorage.getItem("token")?t:r.createElement(n.C5,{to:"/login",state:{from:a},replace:!0})}}}]);