import React, { Component } from 'react';
import "./styles.css"
import {Link} from "react-router-dom"
import api from "../../service/api"
import logo from "./assets/logo.jpeg"

class UserForm extends Component {

    state = {
        nome: "jonathan",
        email: "",
        cargo: "",
        loading: false,
    }

    handleChange = ({target}) => {

        this.setState ({[target.name] : target.value})
    }

    saveUser = async () => {
        const {nome, cargo, email} = this.state
        this.setState ({loading:true})

        try{

            const response = await api.post ("/user" , {nome,cargo,email})
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
 
    render() {
        return (
          <div className ="myUser">
            <div className ="jumbotronUser"> 
       <div className ="miniContainer ml-4">        
        <h1 className ="display-3"><strong>Resultados Exponenciais</strong></h1>    
        <h2 className = "h3UserForm"> Saiba como aplicar a Automação de Marketing usando as soluções da Resultados Exponenciais</h2>
        <div className="myContainer">
              <h1 className="header">Criar um novo Usuário</h1>
              <h3 className="myControlUser">Queremos saber quem você é...</h3>
          <div className ="testeForm">   
         <form className={"myForm"}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><strong>Qual o seu nome?</strong></label>
             <input
             name = "nome"
             onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Joaquim Teixeira"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><strong>Qual o seu email?</strong></label>
                <input
                 name ="email"
                 onChange ={this.handleChange}
                 type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div> 
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1"><strong>Qual seu cargo?</strong></label>
            <select className="form-control" id="exampleFormControlSelect1" name = "cargo" onChange = {this.handleChange}>
             <option ></option>
              <option>CEO</option>
              <option>Jornalista</option>
              <option>Engenheiro</option>
              <option>Estudante</option>
              <option>Outros</option>
            </select>
          </div>  
          <footer className="mySpacingContainerUser">
            {/* <Link to ="/" type="submit" className="btn btn-primary btn-lg">Voltar</Link>

            <Link to ="/persona" type="submit" className="btn btn-primary btn-lg">Avançar</Link> */}
            <Link to ="/" className="btn btn-primary btn-lg">Voltar</Link> 
            <button type="submit" className="btn btn-primary btn-lg" onClick={this.saveUser}>
                {this.state.loading? (<div className="spinner-border" role="status">
             </div>) : "Avançar"}       
             </button>
            
            </footer>
        </form>
        <img className="img12" alt ="imagem gerador de personas" src ={logo}></img>
        </div>
        </div>
        </div> 


        </div>
          </div>
          );
    }
}

export default UserForm;