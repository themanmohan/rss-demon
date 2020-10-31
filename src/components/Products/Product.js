import React from "react";
import {Link} from 'react-router-dom'
export default function Product({id,title,image,price}) {
 
   const url=image.url
   
  return (
      <article className="product">
          <div className="img-container">
             <img src={`http://localhost:1337${url}`} alt={title} />
             <Link to={`product/${id}`} className="btn btn-primary product-link">Details</Link>
          </div>
          <div className="product-footer">
            <p className="product-title">{title}</p>
            <p className="product-price">Price:-{price}</p>
          </div>
      </article>
  );
}
