import React, { useState, createContext, useReducer } from "react";
import Products from "../TestingData/Products";
import TestingCart from "../TestingData/TestingCart";
import Orders from "../TestingData/Orders";
const InitialState = {
  Products: Products, //All the products
  Cart: TestingCart, //The shopping cart items + Qty for later versions
  Orders: Orders,
  //[], //The orders made
};

export const ProductContext = createContext(InitialState);

function ProductsProvider(props) {
  const StudentTesting = InitialState.Students;
  console.log(StudentTesting);
  const [Products, setProducts] = useState(InitialState.Products);
  const CurrentID = Products[Products.length - 1].id;
  const [Cart, setCart] = useState(InitialState.Cart);
  const [Orders, setOrders] = useState(InitialState.Orders);
  const CartSummary = {
    subtotal: 0,
    Delivery: 0,
    Discount: 0,
    Total: 0,
  };
  Cart.forEach((item) => {
    CartSummary.subtotal += item.price * (1 - item.discount / 100);
  });
  CartSummary.Total = CartSummary.subtotal + CartSummary.Delivery;
  //const [HomeProducts, setHomeProducts] = useState(InitialState.HomeProducts);
  const RemoveAnItemFromCart = (ItemID) => {
    setCart(Cart.filter((item) => item.id !== ItemID));
  };
  const AddAnItemToTheCart = (Item) => {
    setCart([...Cart, Item]);
  };
  const addProduct = (Item) => {
    setProducts([...Products, Item]);
  };
  const AddOrder = (NewOrder) => {
    setOrders([...Orders, NewOrder]);
  };
  return (
    <ProductContext.Provider
      value={{
        Cart,
        Products,
        RemoveAnItemFromCart,
        AddAnItemToTheCart,
        addProduct,
        CurrentID,
        CartSummary,
        AddOrder,
        Orders,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;
