import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/Product_List';
import Details from './components/Details.js';
import Cart from './components/Cart.js';
import Default from './components/Default.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </React.Fragment>
    );
  }
}

export default App;
