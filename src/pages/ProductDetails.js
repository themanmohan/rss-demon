import React from "react";
import Loading from '../components/Loading'

import {useParams,useHistory} from 'react-router-dom'
import {ProductContext} from '../context/products'
import {CartContext} from '../context/cart'

export default function ProductDetails() {

    let { id } = useParams();
    const history=useHistory()
    const {products}=React.useContext(ProductContext)
    const {addCart}=React.useContext(CartContext)
    
 
    
      if(products.length===0){
            return  <Loading />
    }
     const product= products.find(data=>data.id===parseInt(id))

    const  {
      title,image:{url},price,description
    }=product

    
    
  return (
    <section className="single-product">
       <img src={`http://localhost:1337${url}`} alt={title} className="single-product-image" />
       <article >
       
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button className="btn btn-primary btn-block" onClick={()=>{
            addCart(product)
            history.push('/cart')
          }}>Add to Cart</button>
       </article>
    </section>
  );
}
