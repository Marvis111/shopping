import React, { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "../Store/ProductContext";
function OrdersManagement() {
  const { Orders } = useContext(ProductContext);
  const [Management, setManagement] = useState(Orders);
  return (
    <div>
      <h1>Orders Management</h1>
      
      <Table striped bordered hover className="orders-Table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>First Name</th>
            <th>State</th>
            <th>Town</th>
            <th>Adresse</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Cart</th>
            <th>Amount to pay</th>
            <th>Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {Management.map((item) => {
            return (
              <tr key={item.OrderID}>
                <td>{item.OrderID}</td>
                <td>{item.FirstName + " " + item.LastName}</td>
                <td>{item.State}</td>
                <td>{item.Town}</td>
                <td>{item.Adresse}</td>
                <td>{item.Phone}</td>
                <td>{item.Email}</td>
                <td>Modal Icon</td>
                <td>{item.CartSummary.Total}</td>
                <td>Date</td>
                <td>Delivery Icon</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default OrdersManagement;
