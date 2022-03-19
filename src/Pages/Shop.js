import React, { useEffect,} from "react";
import SubNavBar from "../Layout/SubNavBar";
import { fetchAllProducts } from "../actions";
import { connect, } from "react-redux";
import axios from "../axios/axios";
import SingleProductWrapper from '../components/SingleProductWrapper'
function Shop({allProducts,fetchAllProducts}) {
const MinPrice = Math.min(...allProducts.Products.map((item) => item.price));
const MaxPrice = Math.max(...allProducts.Products.map((item) => item.price));
var Items = allProducts.Products
  useEffect(() => {
    async function fetchProducts(){
      try {
        const Products = await axios.get('/products');
        fetchAllProducts(Products);
      } catch (error) {
        console.log(error);
        fetchAllProducts([]);
      }
    }
    fetchProducts();

  }, []);
  return (
    <>
      <SubNavBar />
      <section className="shop_grid_area section-padding-80">
        <div className="container">
          <div className="row">
            {/* Filtering the products section */}
            <div className="col-12 col-md-4 col-lg-3">
              <div className="shop_sidebar_area">
                {/* Categories Menu*/}
                <div className="widget catagory mb-50">
                  <h6 className="widget-title mb-30">Catagories</h6>
                  <div className="catagories-menu">
                    <ul
                      id="menu-content2"
                      className="menu-content collapse show"
                    >
                      <li data-toggle="collapse" data-target="#clothing">
                        <a href="#">clothing</a>
                        <ul className="sub-menu collapse show" id="clothing">
                          <li>
                            <a href="#">All</a>
                          </li>
                          <li>
                            <button onClick={(e)=> console.log(allProducts)}
                            >
                              Bodysuits
                            </button>
                          </li>
                          <li>
                            <a href="#">Dresses</a>
                          </li>
                          <li>
                            <a href="#">Hoodies &amp; Sweats</a>
                          </li>
                          <li>
                            <a href="#">Jackets &amp; Coats</a>
                          </li>
                          <li>
                            <a href="#">Jeans</a>
                          </li>
                          <li>
                            <a href="#">Pants &amp; Leggings</a>
                          </li>
                          <li>
                            <a href="#">Rompers &amp; Jumpsuits</a>
                          </li>
                          <li>
                            <a href="#">Shirts &amp; Blouses</a>
                          </li>
                          <li>
                            <a href="#">Shirts</a>
                          </li>
                          <li>
                            <a href="#">Sweaters &amp; Knits</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        data-toggle="collapse"
                        data-target="#shoes"
                        className="collapsed"
                      >
                        <a href="#">shoes</a>
                        <ul className="sub-menu collapse" id="shoes">
                          <li>
                            <a href="#">All</a>
                          </li>
                          <li>
                            <a href="#">Bodysuits</a>
                          </li>
                          <li>
                            <a href="#">Dresses</a>
                          </li>
                          <li>
                            <a href="#">Hoodies &amp; Sweats</a>
                          </li>
                          <li>
                            <a href="#">Jackets &amp; Coats</a>
                          </li>
                          <li>
                            <a href="#">Jeans</a>
                          </li>
                          <li>
                            <a href="#">Pants &amp; Leggings</a>
                          </li>
                          <li>
                            <a href="#">Rompers &amp; Jumpsuits</a>
                          </li>
                          <li>
                            <a href="#">Shirts &amp; Blouses</a>
                          </li>
                          <li>
                            <a href="#">Shirts</a>
                          </li>
                          <li>
                            <a href="#">Sweaters &amp; Knits</a>
                          </li>
                        </ul>
                      </li>

                      <li
                        data-toggle="collapse"
                        data-target="#accessories"
                        className="collapsed"
                      >
                        <a href="#">accessories</a>
                        <ul className="sub-menu collapse" id="accessories">
                          <li>
                            <a href="#">All</a>
                          </li>
                          <li>
                            <a href="#">Bodysuits</a>
                          </li>
                          <li>
                            <a href="#">Dresses</a>
                          </li>
                          <li>
                            <a href="#">Hoodies &amp; Sweats</a>
                          </li>
                          <li>
                            <a href="#">Jackets &amp; Coats</a>
                          </li>
                          <li>
                            <a href="#">Jeans</a>
                          </li>
                          <li>
                            <a href="#">Pants &amp; Leggings</a>
                          </li>
                          <li>
                            <a href="#">Rompers &amp; Jumpsuits</a>
                          </li>
                          <li>
                            <a href="#">Shirts &amp; Blouses</a>
                          </li>
                          <li>
                            <a href="#">Shirts</a>
                          </li>
                          <li>
                            <a href="#">Sweaters &amp; Knits</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End of categories Menu*/}
                {/* Filtering by price Section */}
                <div className="widget price mb-50">
                  <h6 className="widget-title mb-30">Filter by</h6>

                  <p className="widget-title2 mb-30">Price</p>

                  <div className="widget-desc">
                    <div className="slider-range">
                      <div
                        data-min="49"
                        data-max="360"
                        data-unit="$"
                        className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                        data-value-min="49"
                        data-value-max="360"
                        data-label-result="Range:"
                      >
                        <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabIndex="0"
                        ></span>
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabIndex="0"
                        ></span>
                      </div>
                      <div className="range-price">
                        Range: ${MinPrice} - ${MaxPrice}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Of Filtering by price Section ${MinPrice} - ${MaxPrice} */}
                {/* Filtering by color Section */}
                <div className="widget color mb-50">
                  <p className="widget-title2 mb-30">Color</p>
                  <div className="widget-desc">
                    <ul className="d-flex">
                      <li>
                        <a href="#" className="color1"></a>
                      </li>
                      <li>
                        <a href="#" className="color2"></a>
                      </li>
                      <li>
                        <a href="#" className="color3"></a>
                      </li>
                      <li>
                        <a href="#" className="color4"></a>
                      </li>
                      <li>
                        <a href="#" className="color5"></a>
                      </li>
                      <li>
                        <a href="#" className="color6"></a>
                      </li>
                      <li>
                        <a href="#" className="color7"></a>
                      </li>
                      <li>
                        <a href="#" className="color8"></a>
                      </li>
                      <li>
                        <a href="#" className="color9"></a>
                      </li>
                      <li>
                        <a href="#" className="color10"></a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End of Filtering by color Section */}
                {/* Filtering by brand Section */}
                <div className="widget brands mb-50">
                  <p className="widget-title2 mb-30">Brands</p>
                  <div className="widget-desc">
                    <ul>
                      <li>
                        <a href="#">Asos</a>
                      </li>
                      <li>
                        <a href="#">Mango</a>
                      </li>
                      <li>
                        <a href="#">River Island</a>
                      </li>
                      <li>
                        <a href="#">Topshop</a>
                      </li>
                      <li>
                        <a href="#">Zara</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Filtering by brand Section */}
              </div>
            </div>
            {/* End of filter section */}
            {/* Showing the products sectio  */}
            <div className="col-12 col-md-8 col-lg-9">
              <div className="shop_grid_product_area">
                <div className="row">
                  <div className="col-12">
                    <div className="product-topbar d-flex align-items-center justify-content-between">
                      <div className="total-products">
                        <p>
                          <span>{Items.length}</span> products found
                        </p>
                      </div>
                      {/* Sorting the products section {Items.length}*/}
                      <div className="product-sorting d-flex">
                        <p>Sort by:</p>
                        <form action="#" method="get">
                          <select name="select" id="sortByselect">
                            <option value="value">Newest</option>
                            <option value="value" >
                              Price: {MaxPrice} - {MinPrice}
                            </option>
                            {
                              /** onChange={/*SortByHighest*/
                              }
                            
                            <option value="value" >
                              Price: Price: {MaxPrice} - {MinPrice}
                            </option>
                          </select>
                          <input type="submit" className="d-none" value="" />
                        </form>
                      </div>
                      {/* End of Sorting the products section*/}
                    </div>
                  </div>
                </div>
              
                <div className="row">
                   {/* The products container */
                    Items.map((item) => (
                      <SingleProductWrapper Product={item} key={item._id} />
                    ))
                 }
                </div>
                {/* End of The products container */}
              </div>
            </div>
            {/* End of showing the products section */}
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = ({allProducts}) =>({
    allProducts
})
export default connect(mapStateToProps,{
  fetchAllProducts
})(Shop);
