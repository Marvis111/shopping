import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { ProductContext } from "../Store/ProductContext";
function Cart({ items }) {
  const { CartSummary } = useContext(ProductContext);
  return (
    <>
      {/* Click to make side cart dissapear */}
      <div className="cart-bg-overlay"></div>
      {/* Side cart it self */}
      <div className="right-side-cart-area">
        <div className="cart-button">
          <a href="" id="rightSideCart">
            <img src="assets/img/core-img/bag.svg" alt="" />
            <span>{items.length}</span>
          </a>
        </div>
        {/* The items bought */}
        <div className="cart-content d-flex">
          <div className="cart-list">
            {items.map((item) => (
              <CartItem item={item} key={items.indexOf(item)} />
            ))}
          </div>
          {/*  Cart Summary */}
          <div className="cart-amount-summary">
            <h2>Summary</h2>
            <ul className="summary-table">
              <li>
                <span>subtotal:</span> <span>${CartSummary.subtotal}</span>
              </li>
              <li>
                <span>delivery:</span>{" "}
                <span>
                  {CartSummary.Delivery === 0 ? "Free" : CartSummary.Delivery}
                </span>
              </li>
              <li>
                <span>discount:</span> <span>-{CartSummary.Discount}%</span>
              </li>
              <li>
                <span>total:</span> <span>${CartSummary.Total}</span>
              </li>
            </ul>
            <div className="checkout-btn mt-100">
              <a href="/Checkout" className="btn essence-btn">
                Check Out
              </a>
            </div>
          </div>
        </div>

        {/* End of Side cart */}
      </div>
    </>
  );
}

export default Cart;
