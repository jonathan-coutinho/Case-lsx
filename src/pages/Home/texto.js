
    // form pronto
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