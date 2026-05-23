import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductCard from "./components/ProductCard/ProductCard";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { WishlistProvider } from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist/Wishlist";

import {Routes, Route} from "react-router-dom";

function App() {
  

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<FeaturedProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App
