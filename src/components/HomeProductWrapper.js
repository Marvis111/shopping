import React from "react";
import { useNavigate } from "react-router-dom";
function HomeProductWrapper({ Product }) {
  const navigate = useNavigate();
  const NavigationHandler2 = (Product) => {
    navigate("/Product", { state: { ProductID: Product.id } });
  };
  return (
    <div className="single-product-wrapper">
      <div className="product-img">
        <img src={Product.img.Front} alt="" />
        <img
          className="hover-img"
          src={Product.img.Hover}
          alt={Product.brand}
        />
        <div className="product-favourite">
          <a className="favme fa fa-heart"></a>
        </div>
      </div>
      <div className="product-description">
        <span>{Product.brand}</span>
        <a href="single-product-details.html">
          <h6>{Product.Title}</h6>
        </a>
        <p className="product-price">${Product.price}</p>

        <div className="hover-content">
          <div className="add-to-cart-btn">
            <button
              className="btn essence-btn"
              onClick={(Product) => NavigationHandler2(Product)}
            >
              View The Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeProductWrapper;
