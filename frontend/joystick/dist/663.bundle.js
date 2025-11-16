"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[663],{187:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var r=a(6540),l=a(1716),n=a(3268),o=a(4459);a(6378);const c=function(){return r.createElement("div",{style:{height:"100%",width:"100%"}},r.createElement(o.O,null,r.createElement(l.zy,null),r.createElement(n.A,null)))}},8101:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(6540),l=a(7767);function n(e){let{children:t}=e,a=(0,l.zy)();return sessionStorage.getItem("token")?t:r.createElement(l.C5,{to:"/login",state:{from:a},replace:!0})}},2463:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(6540),l=a(1716),n=a(281),o=a(1612);function c(){return r.createElement(r.Fragment,null,r.createElement(l.Ah,null,r.createElement("div",null,r.createElement(l.ah,{to:"/"},r.createElement("img",{src:n.A,alt:"Logo"})),r.createElement(l.KL,null,r.createElement("input",{type:"text",placeholder:"Buscar",name:"search"}),r.createElement("button",{type:"submit"},r.createElement(o.KSO,null))),r.createElement(l.ah,{to:"/"},r.createElement(l.Vk,null,"Home")),r.createElement(l.ah,{to:"/explorar"},r.createElement(l.Vk,null,"Explorar")),r.createElement(l.ah,{to:"/biblioteca"},r.createElement(l.Vk,null,"Biblioteca"))),r.createElement("div",null,r.createElement(l.ah,{to:"/carrinho"},r.createElement(l.wg,null,r.createElement(o.AsH,null))),r.createElement(l.ah,{to:"/perfil"},r.createElement(l.wg,null,r.createElement(o.x$1,null))))))}},7730:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6540),l=a(1716),n=a(2748),o=a(7767);const c=a(8267).Ay.img`
  object-fit: contain;
  object-position: left;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
`;function i(e){const t=(0,o.Zp)();return r.createElement(l.eb,null,r.createElement(c,{src:n.A,alt:"jogo"}),r.createElement(l.Tj,null,r.createElement("h1",null,e.title),r.createElement(l.KC,null,r.createElement(l.Jg,null," ",e.genders[0]),r.createElement(l.Jg,null," ",e.genders[1]),r.createElement(l.Jg,null," ",e.genders[2])),r.createElement("h1",null,"R$",e.price,",00"),r.createElement(l.OV,{noMargin:!0,onClick:function(){t(`/detalhe-jogo/${e._id}`)}},"Comprar")))}},2612:(e,t,a)=>{a.d(t,{A:()=>m});var r=a(6540),l=a(1716),n=a(2748),o=a(8267),c=a(7767);const i=o.Ay.img`
  object-fit: contain;
  object-position: left;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
`,s=(0,o.Ay)(l.Tj)`
  text-align: start;
`;function m(e){const t=(0,c.Zp)();return r.createElement(l.sU,null,r.createElement(i,{src:n.A,alt:"jogo"}),r.createElement(s,null,r.createElement("h1",null,e.title),r.createElement(l.KC,null,r.createElement(l.Jg,null," ",e.genders[0]),r.createElement(l.Jg,null," ",e.genders[1]),r.createElement(l.Jg,null," ",e.genders[2])),r.createElement("p",null,e.description," "),r.createElement("h1",null,"R$",e.price,",00"),r.createElement(l.OV,{noMargin:!0,onClick:function(){t(`/detalhe-jogo/${e._id}`)}},"Comprar")))}},1806:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(6540),l=a(1716),n=a(2748);function o(e){return r.createElement(l.Dz,null,r.createElement(l.eb,{baixo:!0},r.createElement("img",{src:n.A,alt:"jogo"}),r.createElement(l.Tj,null,r.createElement("h1",null,e.title),r.createElement(l.OV,{noMargin:!0},"Baixar")),r.createElement("p",null,e.description)))}},6332:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(6540),l=a(7609),n=a(7767),o=a(8267),c=a(2748),i=a(2813),s=a(1716);const m=(0,o.Ay)(s.wg)`
  margin-right: 50px;
  font-size: 30px;
`,d=(0,o.Ay)(s.Dz)`
  align-items: center;
`;function p(e){return(0,n.Zp)(),r.createElement(d,null,r.createElement(s.eb,{baixo:!0},r.createElement("img",{src:c.A,alt:"jogo"}),r.createElement(s.Tj,null,r.createElement("h1",null,e.title),r.createElement(s.KC,null,r.createElement(s.Jg,null,e.genders?e.genders[0]:""),r.createElement(s.Jg,null,e.genders?e.genders[1]:""),r.createElement(s.Jg,null,e.genders?e.genders[2]:"")),r.createElement(s.tl,null,"R$",e.price))),r.createElement(m,{onClick:function(t){t.preventDefault(),i.A.delete(`http://localhost:3000/users/cart/${e._id}`,{headers:{"x-access-token":sessionStorage.getItem("token")}}).then((()=>{(0,i.r)(),alert("Jogo deletado")})).catch((e=>{alert(e)}))}},r.createElement(l.r8o,null)))}},308:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(6540),l=a(1612),n=a(7609),o=a(7767),c=a(8267),i=a(2748),s=a(2813),m=a(1716);const d=(0,c.Ay)(m.wg)`
  margin-right: 50px;
  font-size: 30px;
`,p=(0,c.Ay)(m.Dz)`
  align-items: center;
`;function u(e){const t=(0,o.Zp)();return r.createElement(p,null,r.createElement(m.eb,{baixo:!0},r.createElement("img",{src:i.A,alt:"jogo"}),r.createElement(m.Tj,null,r.createElement("h1",null,e.title),r.createElement(m.KC,null,r.createElement(m.Jg,null,e.genders[0]?e.genders[0]:"teste"),r.createElement(m.Jg,null,e.genders[1]?e.genders[1]:"teste"),r.createElement(m.Jg,null,e.genders[2]?e.genders[2]:"teste")),r.createElement(m.tl,null,"R$",e.price,",00")),r.createElement("p",null,e.description)),r.createElement(d,{onClick:function(a){a.preventDefault(),s.A.delete(`http://localhost:3000/games/admin/${e._id}`,{headers:{"x-access-token":sessionStorage.getItem("token")}}).then((()=>{alert("Jogo deletado!"),t(0)})).catch((e=>{alert(e)}))}},r.createElement(n.r8o,null)),r.createElement(m.ah,{to:`/editar-jogo/${e._id}`},r.createElement(d,null,r.createElement(l.uO9,null))))}},976:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6540),l=a(1716),n=a(2748),o=a(7767),c=a(2813);function i(e){const t=sessionStorage.getItem("token"),a=(0,o.Zp)();return r.createElement(l.HE,null,r.createElement("img",{src:n.A,alt:"jogo"}),r.createElement(l.Tj,null,r.createElement("h1",null,e.title),r.createElement(l.KC,null,r.createElement(l.Jg,null,e.genders[0]),r.createElement(l.Jg,null," ",e.genders[1]),r.createElement(l.Jg,null," ",e.genders[2])),r.createElement("p",null,e.description),r.createElement(l.OV,{noMargin:!0,onClick:function(r){r.preventDefault(),(0,c.A)({method:"put",url:`http://localhost:3000/users/${e._id}`,headers:{"x-access-token":t}}).then((()=>{a("/carrinho")}))}},"Comprar")))}},6303:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(6540),l=a(7767),n=a(2463),o=a(1806),c=a(2813),i=a(1716);function s(){const[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)([]),[m,d]=(0,r.useState)();return(0,l.Zp)(),(0,r.useEffect)((()=>{(0,c.r)(),(0,c.A)({method:"get",url:"http://localhost:3000/users/library",headers:{"x-access-token":sessionStorage.getItem("token")}}).then((a=>{0===e.length&&t(a.data)})).catch((e=>{alert(e)}))}),[]),(0,r.useEffect)((()=>{e.map((e=>{d(e),(0,c.A)({method:"get",url:`http://localhost:3000/games/${e}`}).then((t=>{m!==e&&s((e=>[...e,t.data]))})).catch((e=>{alert(e)}))}))}),[e]),r.createElement(i.rf,null,r.createElement(n.A,null),r.createElement(i.tl,{margem:!0},"Biblioteca"),r.createElement(i.KR,null,a.map((e=>r.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price,description:e.description})))),r.createElement(i.Kg,null))}},9827:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6540),l=a(7767),n=a(2463),o=a(2813),c=a(1716);function i(){const[e,t]=(0,r.useState)({}),a=(0,l.Zp)();return r.createElement(c.rf,null,r.createElement(n.A,null),r.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,o.A)({method:"post",url:"http://localhost:3000/games",headers:{"x-access-token":sessionStorage.getItem("token")},data:e}).then((()=>{a("/lista-de-jogos"),alert("Jogo adicionado")})).catch((e=>{alert(e)}))}},r.createElement("h1",null,"Cadastro de Jogo"),r.createElement(c.sQ,{required:!0,placeholder:"Titulo",type:"text",onChange:a=>t({...e,title:a.target.value})}),r.createElement(c._S,{required:!0,placeholder:"Descrição",onChange:a=>t({...e,description:a.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"Preço",type:"number",onChange:a=>t({...e,price:a.target.value})}),r.createElement("label",null,"Mostra no carrossel?"),r.createElement(c.Iu,{required:!0,onChange:a=>t({...e,carousel:a.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement("label",null,"Mostrar nos melhores"),r.createElement(c.Iu,{required:!0,onChange:a=>t({...e,best:a.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement("label",null,"Lançamento?"),r.createElement(c.Iu,{required:!0,onChange:a=>t({...e,release:a.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement(c.OV,{type:"submit"},"Cadastrar jogo")),r.createElement(c.Kg,null))}},9232:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6540),l=a(7767),n=a(2463),o=a(2813),c=a(1716);function i(){const[e,t]=(0,r.useState)({}),a=(0,l.Zp)();return r.createElement(c.rf,null,r.createElement(n.A,null),r.createElement(c.q,{onSubmit:function(t){t.preventDefault(),o.A.post("http://localhost:3000/users",e).then((()=>{a("/")})).catch((e=>{alert(e)}))}},r.createElement("h1",null,"Cadastro"),r.createElement(c.sQ,{required:!0,placeholder:"Name",type:"text",onChange:a=>t({...e,name:a.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"Username",type:"text",onChange:a=>t({...e,username:a.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"E-mail",type:"email",onChange:a=>t({...e,email:a.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"Password",type:"password",onChange:a=>t({...e,password:a.target.value})}),r.createElement(c.OV,{type:"submit"},"Cadastro"),r.createElement("p",null,"Já possui cadastro?"),r.createElement(c.ah,{to:"/login"},r.createElement(c.OV,null,"Login"))))}},3709:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(6540),l=a(7767),n=a(2463),o=a(6332),c=a(2813),i=a(1716);function s(){const[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)([]),[m,d]=(0,r.useState)(),p=(0,l.Zp)();return(0,r.useEffect)((()=>{(0,c.r)(),(0,c.A)({method:"get",url:"http://localhost:3000/users/cart",headers:{"x-access-token":sessionStorage.getItem("token")}}).then((a=>{0===e.length&&t(a.data)})).catch((e=>{alert(e)}))}),[]),(0,r.useEffect)((()=>{e.map((e=>{d(e),(0,c.A)({method:"get",url:`http://localhost:3000/games/${e}`}).then((t=>{m!==e&&s((e=>[...e,t.data]))})).catch((e=>{alert(e)}))}))}),[e]),r.createElement(i.rf,null,r.createElement(n.A,null),r.createElement(i.tl,{margem:!0},"Carrinho"),r.createElement(i.KR,null,a.map((e=>r.createElement(o.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price})))),r.createElement(i.tl,{margem:!0},"Sub-total: R$",function(){let e=0;return a.map((t=>e+=t.price)),e}()),r.createElement(i.Dz,null,r.createElement(i.ah,{to:"/finalizar-compra"},r.createElement(i.OV,{pequeno:!0,onClick:function(e){e.preventDefault(),(0,c.A)({method:"post",url:"http://localhost:3000/users/finish",headers:{"x-access-token":sessionStorage.getItem("token")}}).then((()=>{(0,c.r)(),alert("Compra finalizada"),p("/biblioteca")})).catch((e=>{alert(e)}))}},"Finalizar compra")),r.createElement(i.OV,{pequeno:!0,onClick:function(e){e.preventDefault(),c.A.delete("http://localhost:3000/users/cart",{headers:{"x-access-token":sessionStorage.getItem("token")}}).then((()=>{(0,c.r)(),alert("Jogos deletados"),p(0)})).catch((e=>{alert(e)}))}},"Esvaziar carrinho")),r.createElement(i.Kg,null))}},6553:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(6540),l=a(1716),n=a(2463),o=a(976),c=a(7767),i=a(2813);function s(){const{idJogo:e}=(0,c.g)(),[t,a]=(0,r.useState)(),[s,m]=(0,r.useState)(),[d,p]=(0,r.useState)(),[u,g]=(0,r.useState)([]),[h,x]=(0,r.useState)(),[E,f]=(0,r.useState)(),[v,b]=(0,r.useState)();return(0,r.useEffect)((()=>{i.A.get(`http://localhost:3000/games/${e}`).then((e=>{let{data:t}=e;a(t.title),m(t.description),p(t.price),g(t.genders),x(t.carousel),f(t.best),b(t.isFree)})).catch((e=>{alert(e)}))}),[]),r.createElement(l.rf,null,r.createElement(n.A,null),r.createElement(o.A,{title:t,description:s,price:d,genders:u,carousel:h,best:E,isFree:v,_id:e}),r.createElement(l.Kg,null))}},7065:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6540),l=a(7767),n=a(2463),o=a(2813),c=a(1716);function i(){const{id:e}=(0,l.g)(),[t,a]=(0,r.useState)({}),[i,s]=(0,r.useState)({}),m=(0,l.Zp)();return(0,r.useEffect)((()=>{o.A.get(`http://localhost:3000/games/${e}`).then((e=>{let{data:t}=e;a(t),s(t)})).catch((e=>{alert(e)}))}),[]),r.createElement(c.rf,null,r.createElement(n.A,null),r.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,o.A)({method:"put",url:`http://localhost:3000/games/admin/${e}`,headers:{"x-access-token":sessionStorage.getItem("token")},data:i}).then((()=>{m("/lista-de-jogos"),alert("Informações editadas")})).catch((e=>{alert(e)}))}},r.createElement("h1",null,"Editar Jogo"),r.createElement(c.sQ,{required:!0,placeholder:"Titulo",type:"text",defaultValue:t.title,onChange:e=>s({...i,title:e.target.value})}),r.createElement(c._S,{required:!0,placeholder:"Descrição",defaultValue:t.description,onChange:e=>s({...i,description:e.target.value})}),r.createElement(c.sQ,{required:!0,placeholder:"Preço",type:"number",defaultValue:t.price,onChange:e=>s({...i,price:e.target.value})}),r.createElement("label",null,"Mostra no carrossel?"),r.createElement(c.Iu,{required:!0,defaultValue:t.carousel,onChange:e=>s({...i,carousel:e.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement("label",null,"Mostrar nos melhores"),r.createElement(c.Iu,{required:!0,defaultValue:t.best,onChange:e=>s({...i,best:e.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement("label",null,"Lançamento?"),r.createElement(c.Iu,{required:!0,defaultValue:t.release,onChange:e=>s({...i,release:e.target.value})},r.createElement("option",null),r.createElement("option",{value:!0},"Sim"),r.createElement("option",{value:!1},"Não")),r.createElement(c.OV,{type:"submit"},"Editar jogo")),r.createElement(c.Kg,null))}},8:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(6540),l=a(2463),n=a(7730),o=a(2612),c=a(1762),i=a(1716),s=a(2813),m=a(8267),d=a(9441);const p=(0,m.Ay)(i.rf)`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2)
    ),
    url(${c.A});
  background-repeat: no-repeat;
`;function u(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{s.A.get("http://localhost:3000/games").then((e=>{let{data:a}=e;t(a)})).catch((e=>{alert(e)}))}),[]),r.createElement(p,null,r.createElement(l.A,null),r.createElement(d.A,null,e.filter((e=>!0===e.carousel)).map((e=>r.createElement(d.A.Item,{key:e._id},r.createElement(o.A,{_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price}))))),r.createElement(i.Dz,null,r.createElement("div",null,r.createElement(i.tl,{margem:!0},"Jogos em alta"),r.createElement(i.KR,null,e.filter((e=>!0===e.carousel)).map((e=>r.createElement(n.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price}))))),r.createElement("div",null,r.createElement(i.tl,{margem:!0},"Novidades"),r.createElement(d.A,null,e.filter((e=>!0===e.release)).map((e=>r.createElement(d.A.Item,{key:e._id},r.createElement(n.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price}))))),r.createElement(i.tl,{margem:!0},"Jogos grátis"),r.createElement(d.A,null,e.filter((e=>0===e.price)).map((e=>r.createElement(d.A.Item,{key:e._id},r.createElement(n.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price}))))))))}},9905:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6540),l=a(7767),n=a(2463),o=(a(6332),a(2813)),c=a(1716);function i(){const e=(0,l.Zp)();return r.createElement(c.rf,null,r.createElement(n.A,null),r.createElement(c.q,{onSubmit:function(t){t.preventDefault(),(0,o.A)({method:"post",url:"http://localhost:3000/users/finish",headers:{"x-access-token":sessionStorage.getItem("token")}}).then((()=>{(0,o.r)(),alert("Compra finalizada"),e("/biblioteca")})).catch((e=>{alert(e)}))}},r.createElement("h1",null,"Finalizar compra"),r.createElement(c.sQ,{required:!0,placeholder:"Número do cartão",type:"number"}),r.createElement(c.sQ,{required:!0,placeholder:"CPF",type:"number"}),r.createElement(c.sQ,{required:!0,placeholder:"Nome",type:"text"}),r.createElement("label",null,"Data de validade"),r.createElement(c.sQ,{required:!0,placeholder:"Data de validade",type:"date"}),r.createElement(c.sQ,{required:!0,placeholder:"CVV",type:"number"}),r.createElement(c.ah,{to:"/"},r.createElement(c.OV,{type:"submit"},"Comprar"))))}},7972:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(6540),l=a(2463),n=a(7730),o=a(2612),c=a(6527),i=a(1716),s=a(2813),m=a(8267),d=a(9441);const p=(0,m.Ay)(i.rf)`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2)
    ),
    url(${c.A});
  background-repeat: no-repeat;
`;function u(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{s.A.get("http://localhost:3000/games").then((e=>{let{data:a}=e;t(a)})).catch((e=>{alert(e)})),console.log(e)}),[]),r.createElement(p,null,r.createElement(l.A,null),r.createElement(d.A,null,e&&e.filter((e=>!0===e.carousel)).map((e=>r.createElement(d.A.Item,{key:e._id},r.createElement(o.A,{_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price}))))),r.createElement(i.tl,{margem:!0},"Melhores Jogos"),r.createElement(i.Vk,{cinza:!0,margem:!0},"Explore os melhores projetos da plataforma"),r.createElement(i.KR,null,e.map((e=>r.createElement(n.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,description:e.description,price:e.price})))))}},5654:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6540),l=a(2463),n=a(308),o=a(2813),c=a(1716);function i(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(0,o.r)(),o.A.get("http://localhost:3000/games").then((e=>{let{data:a}=e;t(a)})).catch((e=>{alert(e)}))}),[]),r.createElement(c.rf,null,r.createElement(l.A,null),r.createElement(c.tl,{margem:!0},"Jogos da loja"),r.createElement(c.ah,{to:"/cadastrar-jogo"},r.createElement(c.OV,null,"Adicionar jogo")),r.createElement(c.KR,null,e.map((e=>r.createElement(n.A,{key:e._id,_id:e._id,title:e.title,genders:e.genders,price:e.price,description:e.description})))),r.createElement(c.Kg,null))}},7886:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6540),l=a(2463),n=a(1716),o=a(2813),c=a(7767);function i(){const[e,t]=(0,r.useState)(),[a,i]=(0,r.useState)(),s=(0,c.Zp)();return r.createElement(n.rf,null,r.createElement(l.A,null),r.createElement(n.q,{onSubmit:async function(t){t.preventDefault(),console.log(e),console.log(a),o.A.post("http://localhost:3000/users/authenticate",{email:e,password:a}).then((e=>{let{data:t}=e;console.log(t),sessionStorage.setItem("token",t.token),s("/")})).catch((e=>{alert(e)}))}},r.createElement("h1",null,"Login"),r.createElement(n.sQ,{required:!0,placeholder:"Email",type:"text",value:e,onChange:e=>t(e.target.value)}),r.createElement(n.sQ,{required:!0,placeholder:"Password",type:"password",value:a,onChange:e=>i(e.target.value)}),r.createElement(n.OV,{type:"submit"},"Login"),r.createElement("p",null,"Não possui cadastro?"),r.createElement(n.ah,{to:"/cadastro"},r.createElement(n.OV,null,"Cadastro"))))}},9201:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(6540),l=a(7767),n=a(9546),o=a(2463),c=a(2813),i=a(1716);function s(){const[e,t]=(0,r.useState)({}),[a,s]=(0,r.useState)({}),m=(0,l.Zp)();return(0,r.useEffect)((()=>{(0,c.r)(),c.A.get("http://localhost:3000/users",{headers:{"x-access-token":sessionStorage.getItem("token")}}).then((e=>{let{data:a}=e;t(a)})).catch((e=>{console.log(e)}))}),[]),r.createElement(i.rf,null,r.createElement(o.A,null),r.createElement(i.q,{onSubmit:function(e){e.preventDefault(),(0,c.A)({method:"put",url:"http://localhost:3000/users",headers:{"x-access-token":sessionStorage.getItem("token")},data:a}).then((()=>{(0,c.r)(),alert("Informações editadas")})).catch((e=>{alert(e)}))}},r.createElement("h1",null,"Perfil"),r.createElement(i.MG,{src:n.A,alt:"foto de perfil"}),r.createElement(i.sQ,{placeholder:"Name",type:"text",defaultValue:e.name,onChange:e=>s({...a,name:e.target.value})}),r.createElement(i.sQ,{placeholder:"Username",type:"text",defaultValue:e.username,onChange:e=>s({...a,username:e.target.value})}),r.createElement(i.sQ,{placeholder:"E-mail",type:"email",id:"email",defaultValue:e.email,onChange:e=>s({...a,email:e.target.value})}),r.createElement(i.sQ,{placeholder:"Password",type:"text",id:"password",onChange:e=>s({...a,password:e.target.value})}),r.createElement(i.OV,{type:"submit"},"Salvar"),r.createElement(i.OV,{onClick:function(e){e.preventDefault(),sessionStorage.removeItem("token"),m("/")}},"Sair"),e.isAdmin?r.createElement(i.ah,{to:"/lista-de-jogos"},r.createElement(i.OV,null,"Lista de jogos")):r.createElement("div",null)))}},4459:(e,t,a)=>{a.d(t,{O:()=>n});var r=a(6540);const l=r.createContext({}),n=e=>{const[t,a]=(0,r.useState)([]);return r.createElement(l.Provider,{value:{carrinho:t,setCarrinho:a}},e.children)}},3268:(e,t,a)=>{a.d(t,{A:()=>v});var r=a(6540),l=a(4976),n=a(7767),o=a(7972),c=a(9201),i=a(7886),s=a(9232),m=a(3709),d=a(6303),p=a(8),u=a(6553),g=a(9827),h=a(5654),x=a(7065),E=a(9905),f=a(8101);const v=function(){return r.createElement(l.Kd,null,r.createElement(n.BV,null,r.createElement(n.qh,{path:"/",element:r.createElement(o.A,null)}),r.createElement(n.qh,{path:"/login",element:r.createElement(i.A,null)}),r.createElement(n.qh,{path:"/cadastro",element:r.createElement(s.A,null)}),r.createElement(n.qh,{path:"/explorar",element:r.createElement(p.A,null)}),r.createElement(n.qh,{path:"/detalhe-jogo/:idJogo",element:r.createElement(u.A,null)}),r.createElement(n.qh,{path:"/cadastrar-jogo",element:r.createElement(g.A,null)}),r.createElement(n.qh,{path:"/lista-de-jogos",element:r.createElement(h.A,null)}),r.createElement(n.qh,{path:"/editar-jogo/:id",element:r.createElement(x.A,null)}),r.createElement(n.qh,{path:"/finalizar-compra",element:r.createElement(E.A,null)}),r.createElement(n.qh,{path:"/perfil/",element:r.createElement(f.A,null,r.createElement(c.A,null))}),r.createElement(n.qh,{path:"/carrinho",element:r.createElement(f.A,null,r.createElement(m.A,null))}),r.createElement(n.qh,{path:"/biblioteca",element:r.createElement(f.A,null,r.createElement(d.A,null))})))}},2813:(e,t,a)=>{a.d(t,{A:()=>o,r:()=>n});var r=a(2505);const l=a.n(r)().create({baseURL:"http://localhost:3000"}),n=()=>{l({method:"get",url:"http://localhost:3000/users",headers:{"x-access-token":sessionStorage.getItem("token")}}).then((e=>{l({method:"post",url:"http://localhost:3000/users/refresh-token",headers:{"x-access-token":sessionStorage.getItem("token")},data:{id:e.id}}).then((e=>{sessionStorage.setItem("token",e.data.token)})).catch((e=>{alert(e)}))})).catch((e=>{alert(e)}))},o=l},1716:(e,t,a)=>{a.d(t,{Ah:()=>m,Dz:()=>S,HE:()=>u,Iu:()=>j,Jg:()=>x,KC:()=>h,KL:()=>d,KR:()=>f,Kg:()=>C,MG:()=>b,OV:()=>k,Tj:()=>g,Vk:()=>c,_S:()=>A,ah:()=>s,eb:()=>E,q:()=>v,rf:()=>i,sQ:()=>w,sU:()=>p,tl:()=>o,wg:()=>y,zy:()=>n});var r=a(8267),l=a(4976);const n=r.DU`
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
`,s=(0,r.Ay)(l.N_)`
  text-decoration: none;
  background: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`,m=((0,r.Ay)(l.N_)`
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
`),d=r.Ay.div`
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
`,p=r.Ay.div`
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
`,u=r.Ay.div`
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
`,x=r.Ay.div`
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
`,E=r.Ay.div`
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
`,f=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`,v=r.Ay.form`
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
`,b=r.Ay.img`
  width: 200px;
  height: 200px;
  border-radius: 500px;
  margin: 30px auto;
`,w=r.Ay.input`
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
`,A=r.Ay.textarea`
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
`,k=r.Ay.button`
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
`,y=r.Ay.button`
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
`,j=r.Ay.select`
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
`},1762:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"src/assets/Cyberpunk-Multiplayer.png.webp"},281:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"src/assets/controle-de-video-game.png"},2748:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"src/assets/jogo.jpeg"},6527:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"src/assets/lastofus.jpg"},9546:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"src/assets/perfil.jpg"},3385:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"},5782:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"},4718:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"},7154:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"},8734:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e"},5372:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"},7249:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e"},1262:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},7830:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},6690:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},5932:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"},1144:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},5531:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},7115:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},4274:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"},5419:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e"},6366:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},2247:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},8487:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"}}]);