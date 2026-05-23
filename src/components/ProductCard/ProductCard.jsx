import "./ProductCard.css"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

import { FiHeart } from "react-icons/fi";

import { FaHeart } from "react-icons/fa";

const ProductCard = ({product}) => {
    const { addToCart } = useCart();

    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const isWishlisted = wishlist.some((item) => item.id === product.id)

    return(
        <div className="product-card">

            <button className="wishlist-btn" onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}>
                {isWishlisted ? <FaHeart /> : <FiHeart />}
            </button>


            <Link to={`/product/${product.id}`} className="product-link">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="product-info">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </div>
            </Link>
            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>

            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
        </div>
    )
}

export default ProductCard