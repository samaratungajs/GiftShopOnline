import React from 'react'
import ProductCard from "../productCard/ProductCard";
import "./priceRange.css";

export default function ProductCardGrp({products}) {
  return (
    <div className="row">
       {products.map((p)=>(
                <ProductCard proc={p}/>
               ))}
    </div>
  )
}

