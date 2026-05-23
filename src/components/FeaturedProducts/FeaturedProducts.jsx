import "./FeaturedProducts.css"

import { useState } from "react";

import ProductCard from "../ProductCard/ProductCard"
import products from "../../data/products"

const FeaturedProducts = () => {

  const[search, setSearch] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="featured-products">
        <h2>Featured Products</h2>

        <input type="text" placeholder="Search Products..."
              value={search} onChange={(e) => setSearch(e.target.value)
              } 
              className="search-input"/>

        <div className="products-grid">
            {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
            ))}
        </div>
    </section>
  )
}

export default FeaturedProducts