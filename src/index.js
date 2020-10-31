import React from "react";
import ReactDOM from "react-dom";
import {ProductProvider} from './context/products'
import {CartProvider} from './context/cart'
import {UserProvider} from './context/user'

import "./index.css";
import App from "./App";

ReactDOM.render(
    <ProductProvider>
    <CartProvider>
    <UserProvider>
         <App />
    </UserProvider>
    </CartProvider>
    </ProductProvider>
    , document.getElementById("root"));
