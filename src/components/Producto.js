import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Producto extends Component {
  render() {
    const {imagen, nombre, precio, id} = this.props.infoProducto
    return (
      <li>
        <img src={`img/${imagen}.png`} alt={nombre} />
        <p>{nombre} <span>$ {precio}</span></p>
        <Link to={`/producto/${id}`} className="btn">Más información</Link>
      </li>
    );
  }
}

export default Producto;
