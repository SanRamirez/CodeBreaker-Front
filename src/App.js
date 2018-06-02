import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RequestService from './requestService'

class App extends Component {
  constructor(){
    super()
    this.state = {
      numero: 0,
      resultado: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let input = event.target.id
    let number = event.target.value;
    this.setState({[input]: number});
  }

  handleSubmit(event){
    let number = this.state.numero
    RequestService.getRequest(number)
    .then((data => {
      if(typeof data !== 'undefined'){
        this.setState({
          resultado: data.resultado
        }) 
      }
    }))
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Santiago y Alejandro - Codebreaker</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <p className="App-intro">
          <label>
            <input id="numero" type="number" onChange={this.handleChange} placeholder="Numero" 
            min="1" max="9999" required/>
            <button type="submit" >Adivinar</button>
          </label>
        </p>
        <p>{this.state.resultado}</p>
        </form>
      </div>
    );
  }
}

export default App;
