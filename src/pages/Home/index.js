import React, { Component } from 'react';
import "./styles.css"
import api from "../../service/api"
import {Link} from "react-router-dom"

class Home extends Component {
  state = {
    nome:"jonathan",
    email:"",
    telefone:"",
    loading : false,
  }
  handleChange = ({target}) => {

    this.setState ({[target.name] : target.value})
}

saveUser = async () => {
  const {nome, telefone, email} = this.state
  this.setState ({loading:true})

  try{

      const response = await api.post ("/" , {nome,telefone,email})
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
      <h1 className ="logo">Resultados Exponenciais</h1>
      <div className ="myContainer">      
        <h2 className = "h3 font-weight-normal"> Baixe agora o ebook gratuito <strong>Automação de Marketing </strong></h2>
        <Link to="User" className="btn btn-primary">Começar</Link>
        </div>
        <h3 className="chamada">Como a Automação de Marketing pode melhorar nos resultados do seu negócio?</h3>
        <ul className="myList">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
        </ul> 
      <h4>Alunos procurando um motivo pra continuarem vivos</h4>
      <h5>Por que final de período de uma faculdade é capaz de destruir um homem</h5>

    </div>
  );
}
}
  
export default Home;
