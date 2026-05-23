import "./ProductDetails.css"

import { useParams } from "react-router-dom";

import products from "../../data/products"

import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
    const {id} = useParams()
    const {addToCart} = useCart()

    const product = products.find((item) => item.id === Number(id))

    return(
        <div className="product-details">
            <div className="product-details-img"><img src={product.image} alt={product.title}/></div>
            <div className="product-details-info">
                <h1>{product.title}</h1>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>

                <button onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
export default ProductDetails