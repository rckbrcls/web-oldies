"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[187],{187:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(6540),l=n(1716),r=n(3268),o=n(7795),c=n(5757),i=n(1468);"true"===process.env.REACT_APP_USE_MOCKS&&(0,o.Q)({environment:"development"});const m=function(){return a.createElement("div",null,a.createElement(i.Kq,{store:c.M},a.createElement(l.zy,null),a.createElement(r.A,null)))}},5757:(e,t,n)=>{n.d(t,{M:()=>r});var a=n(38),l=n(6764);const r=(0,a.U1)({reducer:{counter:l.Ay}})},2463:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(1716),r=n(8027),o=n(5121);const c=function(){return a.createElement(l.Ah,null,a.createElement(l.RZ,{pequeno:!0,src:o.A,alt:"video"}),a.createElement(l.xn,null,a.createElement(l.ah,{to:"/clientes"},a.createElement(l.vU,null,a.createElement(r.YXz,null))),a.createElement(l.ah,{to:"/home"},a.createElement(l.vU,null,a.createElement(r.HiP,null))),a.createElement(l.ah,{to:"/"},a.createElement(l.vU,null,a.createElement(r.QyA,null)))))}},3436:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(1716),r=n(7767),o=n(2813);const c=function(){const[e,t]=(0,a.useState)(),[n,c]=(0,a.useState)(),[i,m]=(0,a.useState)(),[u,d]=(0,a.useState)(),s=(0,r.Zp)();return a.createElement(l.mc,null,a.createElement(l.a0,null,"Cadastro do cliente"),a.createElement(l.P9,null,"Preencha as informações abaixo"),a.createElement(l.xw,{onSubmit:function(t){t.preventDefault();const a={cnpj:e,nome:n,telefone:i,email:u};o.A.post("/cliente",a).then((()=>{s("/clientes")})).catch((e=>{alert(e)}))}},a.createElement(l.sQ,{type:"number",placeholder:"CNPJ",value:e,onChange:e=>t(e.target.value)}),a.createElement(l.sQ,{placeholder:"Nome",value:n,onChange:e=>c(e.target.value)}),a.createElement(l.sQ,{type:"number",placeholder:"Telefone",value:i,onChange:e=>m(e.target.value)}),a.createElement(l.sQ,{type:"email",placeholder:"Email",value:u,onChange:e=>d(e.target.value)}),a.createElement(l.$n,{primary:!0,type:"submit"},"Cadastrar")))}},3757:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(7767),r=n(2813),o=n(1716);const c=function(){const[e,t]=(0,a.useState)(),[n,c]=(0,a.useState)(),[i,m]=(0,a.useState)(),[u,d]=(0,a.useState)(),[s,p]=(0,a.useState)(),[g,h]=(0,a.useState)([]),E=(0,l.Zp)();return(0,a.useEffect)((()=>{r.A.get("/cliente").then((e=>{let{data:t}=e;h(t)})).catch((e=>{alert(e)}))}),[]),a.createElement(o.mc,null,a.createElement(o.a0,null,"Cadastro do vídeo"),a.createElement(o.P9,null,"Preencha as informações abaixo"),a.createElement(o.xw,{onSubmit:function(t){t.preventDefault();const a={titulo:e,briefing:n,orcamento:i,entrega:u,idCliente:s,status:"pendente"};r.A.post("/video",a).then((()=>{E("/home")})).catch((e=>{alert(e)}))}},a.createElement(o.sQ,{placeholder:"Título do Vídeo",value:e,onChange:e=>t(e.target.value)}),a.createElement(o.aQ,{placeholder:"Briefing",value:n,onChange:e=>c(e.target.value)}),a.createElement(o.sQ,{type:"number",placeholder:"Orçamento",value:i,onChange:e=>m(e.target.value)}),a.createElement(o.Mh,null,a.createElement(o.Gw,null,"Data de entrega"),a.createElement(o.sQ,{type:"date",value:u,onChange:e=>d(e.target.value)})),a.createElement(o.Iu,{onChange:e=>p(parseInt(e.target.value,10))},a.createElement("option",null),g.map((e=>a.createElement("option",{value:e.id,key:e.id},e.nome)))),a.createElement(o.$n,{primary:!0,type:"submit"},"Cadastrar")))}},9680:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(1716),r=n(2813),o=n(7767);const c=function(){const[e,t]=(0,a.useState)(),[n,c]=(0,a.useState)(),[i,m]=(0,a.useState)(),[u,d]=(0,a.useState)(),[s,p]=(0,a.useState)(),g=(0,o.Zp)();return(0,a.useEffect)((()=>{t(localStorage.getItem("ID")),c(localStorage.getItem("CNPJ")),m(localStorage.getItem("Nome")),d(localStorage.getItem("Telefone")),p(localStorage.getItem("Email"))}),[]),a.createElement(l.mc,null,a.createElement(l.a0,null,"Editar cliente"),a.createElement(l.xw,{onSubmit:function(t){t.preventDefault();const a={cnpj:n,nome:i,telefone:u,email:s};r.A.put(`/cliente/${e}`,a).then((()=>{g("/clientes")})).catch((e=>{alert(e)}))}},a.createElement(l.sQ,{type:"number",placeholder:"CNPJ",value:n,onChange:e=>c(e.target.value)}),a.createElement(l.sQ,{placeholder:"Nome",value:i,onChange:e=>m(e.target.value)}),a.createElement(l.sQ,{type:"number",placeholder:"Telefone",value:u,onChange:e=>d(e.target.value)}),a.createElement(l.sQ,{type:"email",placeholder:"Email",value:s,onChange:e=>p(e.target.value)}),a.createElement(l.$n,{primary:!0,type:"submit"},"Atualizar")))}},5945:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(1716),r=n(2813),o=n(7767);const c=function(){const[e,t]=(0,a.useState)(),[n,c]=(0,a.useState)(),[i,m]=(0,a.useState)(),[u,d]=(0,a.useState)(),[s,p]=(0,a.useState)(),[g,h]=(0,a.useState)(),[E,v]=(0,a.useState)(),[x,b]=(0,a.useState)([]),f=(0,o.Zp)();return(0,a.useEffect)((()=>{t(localStorage.getItem("ID Video")),c(localStorage.getItem("Titulo")),m(localStorage.getItem("Briefing")),d(localStorage.getItem("Orcamento")),p(localStorage.getItem("Entrega")),h(localStorage.getItem("Status")),v(localStorage.getItem("Cliente ID")),r.A.get("/cliente").then((e=>{let{data:t}=e;b(t)})).catch((e=>{alert(e)}))}),[]),console.log(E),a.createElement(l.mc,null,a.createElement(l.a0,null,"Editar vídeo"),a.createElement(l.xw,{onSubmit:function(t){t.preventDefault();const a={id:e,titulo:n,briefing:i,orcamento:u,entrega:s,status:g,idCliente:parseInt(E,10)};r.A.put(`/video/${e}`,a).then((()=>{f("/home")})).catch((e=>{alert(e)}))}},a.createElement(l.sQ,{placeholder:"Título do Vídeo",value:n,onChange:e=>c(e.target.value)}),a.createElement(l.aQ,{placeholder:"Briefing",value:i,onChange:e=>m(e.target.value)}),a.createElement(l.sQ,{type:"number",placeholder:"Orçamento",value:u,onChange:e=>d(e.target.value)}),a.createElement(l.Mh,null,a.createElement(l.Gw,null,"Data de entrega"),a.createElement(l.sQ,{type:"date",value:s,onChange:e=>p(e.target.value)})),a.createElement(l.Iu,{value:E,onChange:e=>v(parseInt(e.target.value,10))},a.createElement("option",null),x.map((e=>a.createElement("option",{value:e.id,key:e.id},e.nome)))),a.createElement(l.Iu,{value:g,onChange:e=>h(e.target.value)},a.createElement("option",{value:"Pendente"},"Pendente"),a.createElement("option",{value:"Em Produção"},"Em Produção"),a.createElement("option",{value:"Concluído"},"Concluído")),a.createElement(l.$n,{primary:!0},"Salvar")))}},9626:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(1716),r=n(5121);const o=(0,n(8267).Ay)(l.mc)`
  margin-top: 70px;
  grid-gap: 30px;

  img{
    margin-bottom: 40px;
  }
`,c=function(){return a.createElement(o,null,a.createElement(l.RZ,{src:r.A,alt:"video"}),a.createElement(l.a0,null,"Faça seu Login"),a.createElement(l.xw,null,a.createElement(l.sQ,{type:"email",placeholder:"Email"}),a.createElement(l.sQ,{type:"password",placeholder:"Senha"}),a.createElement(l.ah,{to:"/home"},a.createElement(l.$n,{primary:!0},"Entrar"))))}},9026:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(2813),r=n(1716),o=n(5238);const c=function(){const[e,t]=(0,a.useState)([]),[n,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{l.A.get("/cliente").then((e=>{let{data:n}=e;t(n)})).catch((e=>{alert(e)})),l.A.get("/video").then((e=>{let{data:t}=e;c(t)})).catch((e=>{alert(e)}))}),[]);return a.createElement(r.so,null,e.map((e=>a.createElement(r.Zp,{key:e.id},a.createElement(r.Ut,null,a.createElement(r.jx,null,a.createElement(r.a0,null,n.filter((t=>t.idCliente===e.id)).sort(((e,t)=>e.entrega.split("/").reverse().join().localeCompare(t.entrega.split("/").reverse().join()))).map((e=>e.titulo))[0]),a.createElement(r.P9,null,n.filter((t=>t.idCliente===e.id)).sort(((e,t)=>e.entrega.split("/").reverse().join().localeCompare(t.entrega.split("/").reverse().join()))).map((e=>e.entrega))[0])),a.createElement(r.H3,null,a.createElement(r.ah,{to:"/editar-cliente"},a.createElement(r.vU,{onClick:()=>(e=>{let{id:t,cnpj:n,nome:a,telefone:l,email:r}=e;localStorage.setItem("ID",t),localStorage.setItem("CNPJ",n),localStorage.setItem("Nome",a),localStorage.setItem("Telefone",l),localStorage.setItem("Email",r)})(e)},a.createElement(o.EaJ,null))),a.createElement(r.vU,{onClick:()=>{return n=e.id,void l.A.delete(`/cliente/${n}`).then((()=>{l.A.get("/cliente").then((e=>{let{data:n}=e;t(n)})).catch((e=>{alert(e)}))})).catch((e=>{alert(e)}));var n}},a.createElement(o.F23,null)))),a.createElement(r.az,null,a.createElement(r.a0,null,e.nome),a.createElement(r.P9,null,e.telefone),a.createElement(r.P9,null,e.email),a.createElement(r.P9,null,e.cnpj))))))}},4899:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(2813),r=n(1716),o=n(5238);const c=function(){const[e,t]=(0,a.useState)([]),[n,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{l.A.get("/video").then((e=>{let{data:n}=e;t(n)})).catch((e=>{alert(e)})),l.A.get("/cliente").then((e=>{let{data:t}=e;c(t)})).catch((e=>{alert(e)}))}),[]);return a.createElement(r.so,null,e.sort(((e,t)=>e.entrega.split("/").reverse().join().localeCompare(t.entrega.split("/").reverse().join()))).map((e=>a.createElement(r.Zp,{key:e.id},a.createElement(r.Ut,null,a.createElement(r.jx,null,a.createElement(r.a0,null,n.filter((t=>t.id===e.idCliente)).map((e=>e.nome))),a.createElement(r.P9,null,n.filter((t=>t.id===e.idCliente)).map((e=>e.telefone)))),a.createElement(r.H3,null,a.createElement(r.ah,{to:"/editar-video"},a.createElement(r.vU,{onClick:()=>(e=>{let{id:t,titulo:n,briefing:a,orcamento:l,entrega:r,status:o,idCliente:c}=e;localStorage.setItem("ID Video",t),localStorage.setItem("Titulo",n),localStorage.setItem("Briefing",a),localStorage.setItem("Orcamento",l),localStorage.setItem("Entrega",r),localStorage.setItem("Status",o),localStorage.setItem("Cliente ID",c)})(e)},a.createElement(o.EaJ,null))),a.createElement(r.vU,{onClick:()=>{return n=e.id,void l.A.delete(`/video/${n}`).then((()=>{l.A.get("/video").then((e=>{let{data:n}=e;t(n)})).catch((e=>{alert(e)}))})).catch((e=>{alert(e)}));var n}},a.createElement(o.F23,null)))),a.createElement(r.az,null,a.createElement(r.a0,null,e.titulo),a.createElement(r.P9,null,"Entrega: ",e.entrega),a.createElement(r.P9,null,"Orçamento: R$ ",e.orcamento),a.createElement(r.P9,null,"Status: ",e.status))))))}},8241:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),l=n(1716),r=n(8027);const o=function(e){let{onde:t}=e;return a.createElement(l.ah,{to:`${t}`},a.createElement(l.vU,{primary:!0},a.createElement(r.vpL,null)))}},6368:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),l=n(1716),r=n(5238);const o=function(){return a.createElement(l.cC,null,a.createElement(l.ah,{to:"/cadastro-cliente"},a.createElement(l.vU,{primary:!0},a.createElement(r.Rzo,null))),a.createElement(l.a0,null,"Clientes"),a.createElement("p",null))}},1817:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),l=n(1716),r=n(5238);const o=function(){return a.createElement(l.cC,null,a.createElement(l.ah,{to:"/cadastro-video"},a.createElement(l.vU,{primary:!0},a.createElement(r.u8N,null))),a.createElement(l.a0,null,"Vídeos"),a.createElement("p",null))}},5321:(e,t,n)=>{function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((t=>setTimeout((()=>t({data:e})),500)))}n.d(t,{G:()=>a})},6764:(e,t,n)=>{n.d(t,{Ay:()=>u});var a=n(38),l=n(5321);const r=(0,a.zD)("counter/fetchCount",(async e=>(await(0,l.G)(e)).data)),o=(0,a.Z0)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}},extraReducers:e=>{e.addCase(r.pending,(e=>{e.status="loading"})).addCase(r.fulfilled,((e,t)=>{e.status="idle",e.value+=t.payload}))}}),{increment:c,decrement:i,incrementByAmount:m}=o.actions,u=o.reducer},7795:(e,t,n)=>{n.d(t,{Q:()=>l});var a=n(4017);function l(){let{environment:e="development"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.sA)({environment:e,seeds(e){e.db.loadData({cliente:[{id:1,cnpj:"111111111111",nome:"Erick Barcelos",telefone:"91984211088",email:"petrick_barcelos@hotmail.com"},{id:2,cnpj:"333333333333",nome:"Carlos Silva",telefone:"91984211000",email:"carlos.silva@example.com"},{id:3,cnpj:"444444444444",nome:"Maria Oliveira",telefone:"91984211333",email:"maria.oliveira@example.com"},{id:4,cnpj:"555555555555",nome:"João Fernandes",telefone:"91984211444",email:"joao.fernandes@example.com"},{id:5,cnpj:"666666666666",nome:"Ana Souza",telefone:"91984211555",email:"ana.souza@example.com"}],video:[{id:1,titulo:"Teste",briefing:"Briefing de teste para o cliente Erick Barcelos",orcamento:"21215",entrega:"2024-03-01",idCliente:1,status:"pendente"},{id:2,titulo:"Vídeo Institucional",briefing:"Vídeo institucional para a empresa de Carlos Silva",orcamento:"30000",entrega:"2024-05-10",idCliente:2,status:"concluído"},{id:3,titulo:"Vídeo Promocional",briefing:"Vídeo promocional para a nova linha de produtos de Maria Oliveira",orcamento:"45000",entrega:"2024-06-20",idCliente:3,status:"em andamento"},{id:4,titulo:"Documentário",briefing:"Documentário sobre sustentabilidade produzido para João Fernandes",orcamento:"60000",entrega:"2024-07-15",idCliente:4,status:"pendente"},{id:5,titulo:"Vídeo Educacional",briefing:"Vídeo educacional para o programa de capacitação de Ana Souza",orcamento:"25000",entrega:"2024-08-01",idCliente:5,status:"em andamento"}],gerente:{email:"gerente@example.com",senha:"senhaSegura123"}})},routes(){this.namespace="api",this.get("/cliente",(e=>e.db.cliente)),this.get("/video",(e=>e.db.video)),this.get("/gerente",(e=>e.db.gerente)),this.post("/video",((e,t)=>{let n=JSON.parse(t.requestBody);return e.db.video.insert(n)})),this.post("/cliente",((e,t)=>{let n=JSON.parse(t.requestBody);return e.db.cliente.insert(n)})),this.put("/video/:id",((e,t)=>{let n=JSON.parse(t.requestBody),a=t.params.id,l=e.db.video.find(a);return e.db.video.update(l.id,n)})),this.put("/cliente/:id",((e,t)=>{let n=JSON.parse(t.requestBody),a=t.params.id,l=e.db.cliente.find(a);return e.db.cliente.update(l.id,n)})),this.delete("/video/:id",((e,t)=>{let n=t.params.id;return e.db.video.remove(n)})),this.delete("/cliente/:id",((e,t)=>{let n=t.params.id;return e.db.cliente.remove(n)}))}})}},1728:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),l=n(8241),r=n(3436);const o=function(){return a.createElement(a.Fragment,null,a.createElement(l.A,{onde:"/clientes"}),a.createElement(r.A,null))}},313:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),l=n(8241),r=n(3757);const o=function(){return a.createElement(a.Fragment,null,a.createElement(l.A,{onde:"/home"}),a.createElement(r.A,null))}},5444:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(2463),r=n(6368),o=n(9026);const c=function(){return a.createElement(a.Fragment,null,a.createElement(l.A,null),a.createElement(r.A,null),a.createElement(o.A,null))}},8788:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),l=n(8241),r=n(9680);const o=function(){return a.createElement(a.Fragment,null,a.createElement(l.A,{onde:"/clientes"}),a.createElement(r.A,null))}},7685:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),l=n(8241),r=n(5945);const o=function(){return a.createElement(a.Fragment,null,a.createElement(l.A,{onde:"/home"}),a.createElement(r.A,null))}},7972:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(2463),r=n(1817),o=n(4899);const c=function(){return a.createElement(a.Fragment,null,a.createElement(l.A,null),a.createElement(r.A,null),a.createElement(o.A,null))}},7886:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6540),l=n(9626);const r=function(){return a.createElement(a.Fragment,null,a.createElement(l.A,null))}},7535:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(6540),l=n(1716),r=n(8267),o=n(6803);const c=(0,r.Ay)(l.mc)`
  margin: 15px auto;

  h1 {
    margin-top: -50px;
    font-size: 150px;
  }

  h4 {
    margin-top: -30px;
    font-size: 25px;
  }
  button {
    width: 30%;
  }
`,i=function(){return a.createElement(c,null,a.createElement(l._V,{src:o.A,alt:"video"}),a.createElement(l.a0,null,"404"),a.createElement(l.P9,null,"Pagina inexistente."),a.createElement(l.ah,{to:"/home"},a.createElement(l.$n,null,"Home")))}},3268:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(6540),l=n(4976),r=n(7767),o=n(1728),c=n(313),i=n(8788),m=n(7685),u=n(7886),d=n(7972),s=n(5444),p=n(7535);const g=function(){return a.createElement(l.Kd,null,a.createElement(r.BV,null,a.createElement(r.qh,{path:"/",element:a.createElement(u.A,null)}),a.createElement(r.qh,{path:"/cadastro-cliente",element:a.createElement(o.A,null)}),a.createElement(r.qh,{path:"/cadastro-video",element:a.createElement(c.A,null)}),a.createElement(r.qh,{path:"/editar-cliente",element:a.createElement(i.A,null)}),a.createElement(r.qh,{path:"/editar-video",element:a.createElement(m.A,null)}),a.createElement(r.qh,{path:"/home",element:a.createElement(d.A,null)}),a.createElement(r.qh,{path:"/clientes",element:a.createElement(s.A,null)}),a.createElement(r.qh,{path:"*",element:a.createElement(p.A,null)})))}},2813:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(7536).A.create({baseURL:"/api"})},1716:(e,t,n)=>{n.d(t,{$n:()=>p,Ah:()=>d,Gw:()=>u,H3:()=>k,Iu:()=>P,Mh:()=>x,P9:()=>m,RZ:()=>b,Ut:()=>A,Zp:()=>y,_V:()=>I,a0:()=>i,aQ:()=>v,ah:()=>o,az:()=>f,cC:()=>C,jx:()=>w,mc:()=>c,sQ:()=>E,so:()=>S,vU:()=>g,xn:()=>s,xw:()=>h,zy:()=>r});var a=n(8267),l=n(4976);const r=a.DU`
* {
  box-sizing: border-box;
  font-family: "Roboto";
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-weight: 600;
  background: #eee;
}
`,o=(0,a.Ay)(l.N_)`
  text-decoration: none;
  background: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`,c=a.Ay.div`
  text-align: center;
  width: 100%;
  margin: 0px 0;
  display: grid;
  grid-gap: 20px;
`,i=a.Ay.h1`
  background: none;
  color: #333;
  font-size: clamp(1em, 1em + 1vw, 1.5em);
`,m=a.Ay.h4`
  background: none;
  color: #555;
`,u=a.Ay.label`
  background: none;
  color: #555;
`,d=a.Ay.header`
  background-color: #64cac5;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-wrap: wrap;

  img {
    margin: 0px;
  }
`,s=a.Ay.nav`
  display: flex;
  background: none;

  button {
    margin: 10px;
  }
`,p=a.Ay.button`
  background: ${e=>e.primary?"#64cac5":"white"};
  color: ${e=>e.primary?"white":"#64cac5"};

  font-size: 17px;
  margin: 10px 2%;
  padding: 0.6em 2em;
  border: 0;
  border-radius: 50px;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 80%;
  transition: 0.5s;

  &:hover {
    background: #105b72c2;
    transform: scale(1.05);
    transition: 0.5s;
  }

  svg {
    background: none;
    width: 30px;
    height: 30px;
  }
`,g=a.Ay.button`
  background: ${e=>e.primary?"#64cac5":"white"};
  color: ${e=>e.primary?"white":"#64cac5"};

  margin: 2%;
  border: 0 none;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  min-width: 50px;
  min-height: 50px;
  transition: 0.5s;

  &:hover {
    background: #105b72c2;
    transform: scale(1.2);
    transition: 0.5s;
  }

  svg {
    background: none;
    width: 30px;
    height: 30px;
  }
`,h=a.Ay.form`
  padding: 10px;
  margin: 0 auto;
  background: #eee;
  width: 40%;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
`,E=a.Ay.input`
  border-radius: 50px;
  padding: 10px;
  border: 0 none;
  background: #eee;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 80%;
  margin: 10px 2%;
  transition: 0.5s;

  &:hover {
    background: #ddd;
    transform: scale(1.05);
    transition: 0.5s;
  }
`,v=a.Ay.textarea`
  border-radius: 10px;
  padding: 10px;
  border: 0 none;
  background: #eee;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 80%;
  height: 100px;
  margin: 10px 2%;
  resize: none;
  transition: 0.5s;

  &:hover {
    background: #ddd;
    transform: scale(1.05);
    transition: 0.5s;
  }
`,x=a.Ay.div`
  margin: 10px 0;
`,b=a.Ay.img`
  width: ${e=>e.pequeno?"5%":"10%"};
  width: ${e=>e.pequeno?"70px":"115px"};

  margin: auto;
  background: #64cac5;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.5);
  display: block;
  transition: 0.5s;

  &:hover {
    transform: rotate(0.3turn);
    transition: 0.5s;
  }
`,f=a.Ay.div`
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 30px;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.5s;
`,A=a.Ay.div`
  border-radius: 30px;
  padding: 30px;
  width: 100%;
  height: 7.5em;
  bottom: 0;
  position: absolute;
  background: none;
  display: flex;
  justify-content: space-between;

  h1 {
    color: #eee;
  }

  h4 {
    color: #ddd;
  }
`,y=a.Ay.div`
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  margin: 20px;
  flex: 1 1 400px;
  min-width: 340px;
  min-height: 200px;
  background: #222;
  position: relative;

  &:hover {
    ${f} {
      transform: translateY(-7em);
      transition: 0.5s;
    }
  }
`,S=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px
  background: none;
  margin: 0 auto;
`,C=(0,a.Ay)(c)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`,w=a.Ay.div`
  background: none;
`,k=a.Ay.div`
  background: none;
  display: flex;

  button {
    margin: 5px;
    width: 50px;
    height: 50px;
  }
`,I=a.Ay.img`
  margin: 0 auto;
  width: 400px;
  height: 400px;
`,P=a.Ay.select`
  border-radius: 50px;
  padding: 10px;
  border: 0 none;
  background: #eee;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 80%;
  margin: 10px 2%;
  transition: 0.5s;
  font-size: 15px;

  &:hover {
    background: #ddd;
    transform: scale(1.05);
    transition: 0.5s;
  }

  option {
    text-align: center;
    color: black;
    font-weight: bold;
    
  }

  option:checked {
    font-weight: bold;
    color: #eee;
    background: #555;
  }
  
`},6803:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"src/assets/error-404.png"},5121:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"src/assets/fotografo.png"}}]);