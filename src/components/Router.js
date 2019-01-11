import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Navegacion from './Navegacion';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import SingleProducto from './SingleProducto';
import Error from './Error';
import infoProductos from '../datos/datos.json';

class Router extends Component {

  state = {
    productos: [],
    terminoBuscar: ''
  }

  componentWillMount(){
      this.setState({
        productos: infoProductos
      });
  }

  busquedaProducto = (busqueda) => {
    if(busqueda.length > 3) {
      this.setState({
        terminoBuscar: busqueda
      });
    } else {
      this.setState({
        terminoBuscar: ''
      });
    }
  }

  render() {
    let productos = [...this.state.productos];
    let busqueda = this.state.terminoBuscar;
    let resultado;

    if(busqueda !== ''){
      resultado = productos.filter(producto => (
        producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
      ));
    } else {
      resultado = this.state.productos;
    }

    return (

      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />
          <Switch>
            <Route exact path="/" render={() => (
              <Productos
                productos={resultado}
                busquedaProducto={this.busquedaProducto} />
            )}/>
            <Route exact path="/nosotros" component={Nosotros}/>
            <Route exact path="/productos" render={() => (
              <Productos
                productos={resultado}
                busquedaProducto={this.busquedaProducto} />
            )}/>
            <Route exact path="/producto/:productoId" render={(props) => {
              let productoId = props.location.pathname.replace('/producto/', '');
              return (
                <SingleProducto producto={this.state.productos[productoId]} />
              );
            }}/>
            <Route exact path="/contacto" component={Contacto}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
