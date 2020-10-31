import React from "react";
import ProductList from './ProductList'
import {ProductContext} from '../../context/products'
export default function FeaturedProducts() {
  const {loading, products,featuredProduct}=React.useContext(ProductContext)

  return <ProductList products={featuredProduct} />;
}
