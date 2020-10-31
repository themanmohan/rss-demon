import React from "react";
import Product from './Product'
import Headline from '../Headline'
export default function ProductList({products}) {
  
  return (
    <section className="section">
      <h2 className="section-title"><Headline title="products" /></h2>
      <div className="products-center">
        {products.map(item=>{
          return <Product key={item.id} {...item}  />
        })}
      </div>
    </section>
  );
}
