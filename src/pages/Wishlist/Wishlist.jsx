import "./wishlist.css";

import { useWishlist }
from "../../context/WishlistContext";

const Wishlist = () => {

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  return (

    <div className="wishlist-page">

      <h2>My Wishlist</h2>

      {
        wishlist.length === 0 ? (

          <p>No products in wishlist</p>

        ) : (

          <div className="wishlist-products">

            {
              wishlist.map((item) => (

                <div
                  key={item.id}
                  className="wishlist-card"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <h3>{item.title}</h3>

                  <p>${item.price}</p>

                  <button
                    onClick={() =>
                      removeFromWishlist(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>
              ))
            }

          </div>
        )
      }

    </div>
  );
};

export default Wishlist;