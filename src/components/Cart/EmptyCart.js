import React from "react";
import {Link} from 'react-router-dom'
export default function EmptyCart() {
  return (
    <section className="empty-cart section">
         <h1>Empty ....</h1>
         <Link className="btn btn-primary" to="/products">fill it</Link>
    </section>
  );
}
