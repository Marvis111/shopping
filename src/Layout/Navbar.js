import { React, useState } from "react";
import { Link } from "react-router-dom";
//import { ProductContext } from "../Store/ProductContext";
import SideCart from "./SideCart";
function Header() {
  //const { Cart } = useContext(ProductContext);
  return (
    <>
      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          <nav className="classy-navbar" id="essenceNav">
            <Link to="/" className="nav-brand">
              Logo
            </Link>
            <div className="classy-navbar-toggler">
              <span className="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <div className="classy-menu">
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top"></span>
                  <span className="bottom"></span>
                </div>
              </div>

              <div className="classynav">
                <ul>
                  <li>
                    <Link to="/Shop">Shop</Link>
                    <div className="megamenu">
                      <ul className="single-mega cn-col-4">
                        <li className="title">Women's Collection</li>
                        <li>
                          <a>Dresses</a>
                        </li>
                        <li>
                          <a>Blouses &amp; Shirts</a>
                        </li>
                        <li>
                          <a>T-shirts</a>
                        </li>
                        <li>
                          <a>Rompers</a>
                        </li>
                        <li>
                          <a>Bras &amp; Panties</a>
                        </li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Men's Collection</li>
                        <li>
                          <a>T-Shirts</a>
                        </li>
                        <li>
                          <a>Polo</a>
                        </li>
                        <li>
                          <a>Shirts</a>
                        </li>
                        <li>
                          <a>Jackets</a>
                        </li>
                        <li>
                          <a>Trench</a>
                        </li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Kid's Collection</li>
                        <li>
                          <a>Dresses</a>
                        </li>
                        <li>
                          <a>Shirts</a>
                        </li>
                        <li>
                          <a>T-shirts</a>
                        </li>
                        <li>
                          <a>Jackets</a>
                        </li>
                        <li>
                          <a>Trench</a>
                        </li>
                      </ul>
                      <div className="single-mega cn-col-4">
                        <img src="img/bg-img/bg-6.jpg" alt="" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/Checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="header-meta d-flex clearfix justify-content-end">
            <div className="search-area">
              <form action="#" method="post">
                <input
                  type="search"
                  name="search"
                  id="headerSearch"
                  placeholder="Type for search"
                />
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>

            <div className="favourite-area">
              <Link to="/WishList">
                <img src="../assets/img/core-img/heart.svg" alt="WishList" />
              </Link>
            </div>

            <div className="user-login-info">
              <Link to="Login">
                <img src="../assets/img/core-img/user.svg" alt="Login" />
              </Link>
            </div>

            <div className="cart-area">
              <a id="essenceCartBtn">
                <img src="../assets/img/core-img/bag.svg" alt="ShoppingCart" />{" "}
                <span>{5}</span>
              </a>
            </div>
          </div>
        </div>
      </header>
     {/* <SideCart items={Cart} /> */}
    </>
  );
}

export default Header;
