import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Store/ProductContext";
function Product() {
  // Item: FrontImage, BackImage, [ Array of other images ], Name, Title, Brand, Price, Discount, Description, [Sizes], [Colors],
  const { AddAnItemToTheCart, Products } = useContext(ProductContext);
  const { productID } = useParams(),
  itemID = parseInt(productID);
  const [item, setItem] = useState({
    id: "",
    brand: "",
    Gender: "",
    Category: "",
    Title: "",
    Description: "",
    price: 0,
    discount: 0,
    img: {
      Front: "",
      Hover: "",
      Other: [],
    },
    Size: [],
    Colors: [],
  });

  useEffect(() => {
    const CurrentItemID = itemID;
    const searchedProduct = Products.filter((item) => item.id === CurrentItemID);
    setItem(searchedProduct[0]);
    console.log(item)
  }, [itemID, Products]);
  return (
    <>
      <section className="single_product_details_area d-flex align-items-center">
        <div className="single_product_thumb clearfix">
          <div className="product_thumbnail_slides owl-carousel">
            {item['img'].Other.map((elem) => (
              <img
                src={elem}
                alt={item.brand}
                key={item['img'].Other.indexOf(elem)}
              />
            ))}
          </div>
        </div>
        <div className="single_product_desc clearfix">
          <span>{item.brand}</span>
          <a>
            <h2>{item.title}</h2>
          </a>
          <p className="product-price">
            <span className="old-price">${item.price}</span> ${item.price - item.discount/100 * item.price}
          </p>
          <p className="product-desc">{item.Description}</p>
          <form className="cart-form clearfix" method="post">
            <div className="select-box d-flex mt-50 mb-30">
              <select name="select" id="productSize" className="mr-5">
                <option value="value">Size: XL</option>
                <option value="value">Size: X</option>
                <option value="value">Size: M</option>
                <option value="value">Size: S</option>
              </select>
              <select name="select" id="productColor">
                <option value="value">Color: Black</option>
                <option value="value">Color: White</option>
                <option value="value">Color: Red</option>
                <option value="value">Color: Purple</option>
              </select>
            </div>

            <div className="cart-fav-box d-flex align-items-center">
              <button
                type="submit"
                name="addtocart"
                value="5"
                className="btn essence-btn"
              >
                Add to cart
              </button>

              <div className="product-favourite ml-4">
                <a href="#" className="favme fa fa-heart"></a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Product;
