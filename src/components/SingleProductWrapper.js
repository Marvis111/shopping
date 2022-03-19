import React from "react";
import {  Link,} from "react-router-dom";

function SingleProductWrapper({ Product }) {
 // const navigate = useNavigate();
  const PriceAfterDiscount = Product.price * (1 - Product.discount / 100);
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="single-product-wrapper">
        <div className="product-img">
          <img src={Product['img'].Front} alt="Front Image" />
          <img className="hover-img" src={Product['img'].Hover} alt="" />
          {Product.discount > 0 && (
            <div className="product-badge offer-badge">
              <span>{Product.discount}%</span>
            </div>
          )}
          {/* Feature to work on show when the product is new*/}
          {/*<div className="product-badge new-badge">
          <span>New</span>
        </div>*/}
          <div className="product-favourite">
            <a href="" className="favme fa fa-heart"></a>
          </div>
        </div>
        <div className="product-description">
          <span>{Product.brand}</span>
        
            <h6>{Product.Title}</h6>
      
          <p className="product-price" style={{ alignItems: "center" }}>
            {Product.discount > 0 && (
              <span className="old-price">${Product.price}</span>
            )}
            ${PriceAfterDiscount}
          </p>

          <div className="hover-content">
            <div className="add-to-cart-btn">
                <Link to={`/Product/${Product._id}`} className="btn essence-btn">View the Product</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductWrapper;
