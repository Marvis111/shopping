import React, { useState, useContext } from "react";
import { ProductContext } from "../Store/ProductContext";
function ProductsManagement() {
  const { Products } = useContext(ProductContext);
  return (
    <>
      <h1>Products Management</h1>
      {/* Section to add product */}
      {/* Show all Products in form of table*/}
    </>
  );
}

export default ProductsManagement;
