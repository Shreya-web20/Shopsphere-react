import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>Discover Your Perfect Style</h1>
                <p>Explore premium fashion collections with modern designs and exclusive deals.</p>
                <Link to="/products" className="shop-btn">Shop Now</Link>
            </div>

            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
          alt="fashion" />
            </div>
        </section>
    )
}

export default Hero