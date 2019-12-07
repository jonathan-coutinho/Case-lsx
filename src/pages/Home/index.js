import React, { Component } from 'react';
import "./styles.css"
import api from "../../service/api"
import {Link} from "react-router-dom"

class Home extends Component {
  state = {
    nome:"jonathan",
    email:"",
    cargo:"",
    loading : false,
  }
  handleChange = ({target}) => {

    this.setState ({[target.name] : target.value})
}

saveUser = async () => {
  const {nome, cargo, email} = this.state
  this.setState ({loading:true})

  try{

      const response = await api.post ("/home" , {nome,cargo,email})
      console.log (response.data)
      this.setState ({loading:false})

      return this.props.history.push(`/persona/${response.data.user._id}`)

  }catch (err){
      if (err.status === 401) {
        if (err.data.user) {
           return this.props.history.push(`/persona/${err.data.user._id}`)
        }
      }
      this.setState ({loading:false})
  }
}


  render () {   
   return (
    <div className="home">
      <div className ="jumbotron mb-0"> 
       <div className ="miniContainer ml-4">        
        <h1 className ="display-3">Automação de Marketing</h1>    
        <h2 className = "h3"> Saiba como aplicar a Automação de Marketing usando as soluções da Resultados Exponenciais </h2>
        <div className ="teste">
        <button type="button" className="btn btn-danger btn-lg">Inscreva-se Grátis»</button>
        </div>
        </div> 

        <img className="img1" alt ="imagem automação marketing" src ="https:academiadamarca.com.br/wp-content/uploads/2017/04/00-automacao.jpg"></img>
        </div>
        <div className="container2">
         <div className="row mb-5 pt-3 ml-1 mr-0">
           <div className="col-md-4 border-right border-dark">            
            <h2>O que é Automação de Marketing
            </h2>
            <p>Automação de Marketing é o uso de tecnologia para automatizar ações e processos de marketing, reduzir trabalhos manuais e aumentar a eficiência das ações.
            </p>
            <button className ="btn btn-secondary">Ver detalhes »</button>
            </div>
            <div className="col-md-4 border-right border-dark">            
            <h2>Por que usar Automação de Marketing
            </h2>
            <p>A adoção de uma ferramenta de automação de marketing vem para colaborar em atividades rotineiras e de controle no processo de atração, nutrição e retenção de clientes, visando amplificar conversão do funil comercial.
            </p>
            <button className ="btn btn-secondary">Ver detalhes »</button>
            </div>
            <div className="col-md-4 pr-0">            
            <h2>Dicas de Automação de sucesso
            </h2>
            <p>Dicas para iniciar a automação de marketing em sua empresa agora mesmo.
            </p>
            <button className ="btn btn-secondary">Ver detalhes »</button>
            </div>
         </div>
        <div className ="row mb-5 mr-0">
          <div className ="col-6"> <img className = "img2" alt ="imagem automação marketing" src ="https://blog.microexato.com.br/wp-content/uploads/2019/03/adults-analysis-brainstorming-1661004-542x390.jpg"></img></div>
          <div className ="card">
            <div className ="teste2">
            <div className ="card-header text-center text-white h4">Quero receber o material</div>
            </div>
            <form className ="myForm">
           <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nome</label>
             <input
             name = "nome"
             onChange={this.handleChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Joaquim Teixeira"></input>
            <small id="emailHelp" className="form-text text-muted">Insira seu nome</small>
           </div>
           <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
                <input
                 name ="email"
                 onChange ={this.handleChange}
                 type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            <small id="emailHelp" className="form-text text-muted">Insira seu e-mail</small>
           </div> 
           <div className="form-group">
            <label htmlFor="exampleInputEmail1">Cargo</label>
             <input
             name = "cargo"
             onChange={this.handleChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Joaquim Teixeira"></input>
            </div>
           <div className ="d-flex justify-content-center">
           <Link to ="User" type="submit" className="btn btn-danger btn-lg" onClick={this.saveUser}>
                {this.state.loading? (<div class="spinner-border" role="status">
             </div>) : "Cadastre-se"}        
             </Link>
           </div>
           </form>
          </div>
        </div>
        </div>
         <div className ="card-deck">
          <div className ="card2">
             <div className ="card-header">
               <h4 className ="my-0 font-weight-normal">Basic</h4>
               </div>
            <div>
             <div className="card-body">
               <h1 className="card-title pricing-card-title">R$ 369<small className="text-muted">/ mês</small></h1>
               <ul className="list-unstyled mt-3 mb-4">
                 <li>Análises do funil de Marketing e Vendas</li>
                 <li>Análise de palavras-chave by SEMRush</li>
                 <li>Gestão de contatos (com marcação de oportunidades e vendas)</li>
                 <li>+ 30 modelos de Email Marketing  </li>
                 <li>Editor de Landing Pages drag’n’drop</li>
                 <li>Automação de Marketing Basic</li>
                 <li>Integrações via Zapier</li>
               </ul>
               <button type="button" className="btn btn-lg btn-block btn-primary">Assine já »</button>
             </div>
             </div>
           </div>
             <div className="card3">
                <div className="card-header">
                 <h4 className="my-0 font-weight-normal">Pro</h4>
                </div>
               <div className="card-body">
                 <h1 className="card-title pricing-card-title">R$ 769<small className="text-muted">/ mês</small></h1>
                 <ul className="list-unstyled mt-3 mb-4">
                 <li>-Funcionalidades do Plano Basic mais:</li>
                 <li>Automação de Marketing com editor visual e ações condicionais                  </li>
                 <li>Lead Tracking</li>
                 <li>Lead Scoring</li>
                 <li>Teste A/B em Email e Landing Pages</li>
                 <li>Integrações ilimitadas</li>
                 <li>Apoio Consultivo</li>
                 </ul>
                 <button type="button" className="btn btn-lg btn-block btn-primary">Assine já »</button>
                </div>
             </div>
           <div className="card4">
               <div className="card-header">
               <h4 className="my-0 font-weight-normal">Enterprise</h4>
               </div>
               <div className="card-body ">
                 <h1 className="card-title pricing-card-title  mb-5">R$1989<small className="text-muted">/ mês</small></h1>
                 <ul className="list-unstyled mt-3 mb-5">
                 <li>-Funcionalidades do Plano Pro mais:</li>
                 <li>Marketing BI</li>
                 <li>Relatórios Personalizados</li>
                 <li>Usuários ilimitados</li>
                 </ul>
                 <button type="button" className="btn btn-lg btn-block btn-primary">Assine já »</button>
               </div>
             </div>
           </div>
          <footer className="container text-center text-white mp-5 mt-2">
          <h4>© Resultados Exponenciais 2019</h4>
          </footer>
        </div>


        
   );
  }
} 
export default Home;


