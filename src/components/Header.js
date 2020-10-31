import React from "react";

import {Link} from 'react-router-dom'
import CartLinks from './Cart/CartLink'
import LoginLink from './LoginLink'
import {UserContext} from '../context/user'
export default function Header() {
  const {user,userLogout} =React.useContext(UserContext)
  return (
    <header className="header">
    
        <ul>
        <div>
          logo
        </div>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            {user.token &&
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            }
          </div>
          <div>
             <LoginLink />
            <CartLinks/>
          </div>
        </ul>

    </header>
  );
}
