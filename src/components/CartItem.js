import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Store/ProductContext";
function CartItem({ item }) {
  const { RemoveAnItemFromCart } = useContext(ProductContext);
  const paidPrice = item.price * (1 - item.discount / 100);
  const navigate = useNavigate();
  const navigationHandler = (item) => {
    navigate("/Product", { state: { ProductID: item.id } });
  };
  return (
    <div className="cart-list">
      <div className="single-cart-item">
        <button
          className="product-image default-btn"
          onClick={(item) => navigationHandler(item)}
        >
          <img
            src="assets/img/product-img/product-3.jpg"
            className="cart-thumb"
            alt=""
          />

          <div className="cart-item-desc">
            <span
              className="product-remove"
              onClick={() => RemoveAnItemFromCart(item.id)}
            >
              <i className="fa fa-close" aria-hidden="true"></i>
            </span>
            <span className="badge">{item.brand}</span>
            <h6>{item.Title}</h6>
            <p className="size">Size: {item.Size}</p>
            <p className="color">Color: {item.Color}</p>
            <p className="price">${paidPrice}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
