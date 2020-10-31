import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

import Alert from './components/Alert'

export default function App() {
  return( 
    
  <Router>
  <Header />
  <Alert />
  <Switch>
    <Route exact path="/" >
    <Home />
    </Route>
    <Route path="/about" >
    <About />
    </Route>
    <Route path="/cart" >
    <Cart />
    </Route>
    <Route path="/login" >
    <Login />
    </Route>
    <Route exact path="/products" >
    <Products />
    </Route>
    <Route path="/product/:id" >
    <ProductDetails />
    </Route>
    <PrivateRoute path="/checkout" >
    <Checkout />
    </PrivateRoute>
    <Route path="*" >
    <Error />
    </Route>
    </Switch>
  </Router>
  )
}
