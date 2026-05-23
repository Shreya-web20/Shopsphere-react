import "./Cart.css"

import {useCart} from "../../context/CartContext"

const Cart = () => {

    const { cart, removeFromCart, getTotalPrice, increaseQuantity, decreaseQuantity, } = useCart();

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p className="empty">Your cart is empty</p>
            ): (
                <>
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index}><img src={item.image} alt={item.title} />

                           <div>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(item.id)}> - </button>

                                <span>{item.quantity}</span>

                                <button onClick={() => increaseQuantity(item.id)}> + </button>
                            </div>

                            <button onClick={() => removeFromCart(index)}>Remove</button>
                           </div>

                        </div>
                    ))}
                </div>

                <h3 className="total">Total: ${getTotalPrice()}</h3>
                </>
            )}
        </div>
    )
}

export default Cart