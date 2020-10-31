import React from "react";
import {FaAngleUp,FaAngleDown} from 'react-icons/fa'
import {CartContext} from '../../context/cart'
export default function CartItem({id,title,price,image,amount}) {
 
  const {Increase,Decrease,ClearCart,Remove}=React.useContext(CartContext)
  
  return (
       <article className="cart-item">
          <img src={`http://localhost:1337${image}`} alt={title}/>
          <div>
            <h4>{title}</h4>
            <h5>${price}</h5>
            <button className="cart-btn remove-btn"
            onClick={()=>{Remove(id)}}
            >remove</button>
          </div>
          <div>
          <button className="cart-btn amount-btn"
          onClick={()=>{Increase(id)}}
          >
          <FaAngleUp />
          </button>
          <p className="item-amount">{amount}</p>
           <button className="cart-btn amount-btn"
           onClick={()=>{Decrease(id,amount)}}
          >
          <FaAngleDown />
          </button>
          </div>
       </article>

  );
}
