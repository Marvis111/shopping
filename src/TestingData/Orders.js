import TestingCart from "./TestingCart";
const Orders = [
  {
    OrderID: 1,
    FirstName: "iskander",
    LastName: "Dakkem",
    State: "Mednine",
    Town: "Mednine nord",
    Adresse: "Route de elaba km 1",
    Phone: "50478112",
    Email: "alex.scirocco.1@gmail.com",
    Cart: TestingCart,
    CartSummary: {
      subtotal: 250,
      Delivery: 15,
      Discount: 0,
      Total: 265,
    },
    SubmittedDate: new Date(),
    Delivery: { Cheched: false, Confirm: false, Arrived: false },
  },
];
export default Orders;
