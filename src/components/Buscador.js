import React, { Component } from 'react';
import '../css/Buscador.css';

class Buscador extends Component {

  leerDatos = (e) => {
    const termino = e.target.value;

    this.props.busqueda(termino);
  }

  render() {
    return (
      <form className="buscador">
        <input className="buscador-input" type="type" placeholder="Búsqueda" onChange={this.leerDatos}/>
      </form>
    );
  }
}

export default Buscador;
