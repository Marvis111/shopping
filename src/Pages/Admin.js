import React, { useRef, useContext, useState } from "react";
import Configure from "../Admin/Configure";
import HomeManagement from "../Admin/HomeManagement";
import OrdersManagement from "../Admin/OrdersManagement";
import ProductsManagement from "../Admin/ProductsManagement";
import { ProductContext } from "../Store/ProductContext";

function Admin(props) {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="admin-tab-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Home
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Configure
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Products Management
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Orders Management
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1 ? "tab-content  active-content" : "tab-content"
          }
        >
          <HomeManagement />
        </div>

        <div
          className={
            toggleState === 2 ? "tab-content  active-content" : "tab-content"
          }
        >
          <Configure />
        </div>

        <div
          className={
            toggleState === 3 ? "tab-content  active-content" : "tab-content"
          }
        >
          <ProductsManagement />
        </div>
        <div
          className={
            toggleState === 4 ? "tab-content  active-content" : "tab-content"
          }
        >
          <OrdersManagement />
        </div>
      </div>
    </div>
  );
}

export default Admin;
