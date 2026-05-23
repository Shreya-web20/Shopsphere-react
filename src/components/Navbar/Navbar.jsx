import "./Navbar.css";
import { Link } from "react-router-dom";

import { useState } from "react";

import { useCart } from "../../context/CartContext";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX, 
} from "react-icons/fi";

const Navbar = () => {

    const { cart } = useCart();

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <nav className="navbar">

            {/* LOGO */}
            <div className="logo">
                <Link to="/">Shopsphere</Link>
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li>
                    <Link to="/" className="home-icon">
                    Home</Link>
                </li>

                <li>
                    <Link to="/products" className="products-icon">Products</Link>
                </li>
            </ul>

            {/* Searchbar */}
            <div className="search-box">
                <input type="text" placeholder="Search Products..."/>
                <FiSearch className="search-icon" />
            </div>

            {/* Icons */}
            <div className="nav-icons">
                <Link to="/wishlist"><FiHeart /></Link>
                <Link to="/cart" className="cart-icon"><FiShoppingCart />
                   <span>{cart.length}</span></Link>

                <button className="login-btn">Login</button>
            </div>
             
            {/* Mobile menu */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</div>
        </nav>
    )
}

export default Navbar