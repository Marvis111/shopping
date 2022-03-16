import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubNavBar from "../Layout/SubNavBar";
import { ProductContext } from "../Store/ProductContext";
import States from "../TestingData/States";
function Checkout() {
  const navigate = useNavigate();
  const { Cart, CartSummary, AddOrder, Orders } = useContext(ProductContext);
  console.log(Orders);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [State, setState] = useState("Tunis");
  const [Town, setTown] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const SubmitFormHandler = (e) => {
    console.log("Clicked");
    e.preventDefault();

    const NewOrder = {
      OrderID: 1,
      FirstName,
      LastName,
      State,
      Town,
      Adresse,
      Phone,
      Email,
      Cart: Cart,
      CartSummary,
      SubmittedDate: new Date(),
      Delivery: { Cheched: false, Confirm: false, Arrived: false },
    };
    AddOrder(NewOrder);
    navigate("/")
  };
  return (
    <>
      <SubNavBar />
      <form onSubmit={SubmitFormHandler} method="post">
        <div className="checkout_area section-padding-80">
          <div className="container">
            <div className="row">
              {/* Submitting order form*/}
              <div className="col-12 col-md-6">
                <div className="checkout_details_area mt-50 clearfix">
                  <div className="cart-page-heading mb-30">
                    <h5>Billing Address</h5>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="first_name">
                        First Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        value={FirstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="last_name">
                        Last Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="country">
                        Country <span>*</span>
                      </label>
                      <select
                        className="w-100"
                        id="country"
                        onChange={(e) => setState(e.target.value)}
                        required
                      >
                        {States.map((item) => (
                          <option value={item} key={States.indexOf(item)}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="city">
                        Town/City <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={Town}
                        onChange={(e) => setTown(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="street_address">
                        Address <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="street_address2"
                        value={Adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="phone_number">
                        Phone No <span>*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone_number"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="email_address">
                        Email Address <span>*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email_address"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    {/*<div className="col-12">
                      <div className="custom-control custom-checkbox d-block mb-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Terms and conitions
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox d-block mb-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck2"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          Create an accout
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox d-block">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck3"
                        >
                          Subscribe to our newsletter
                        </label>
                      </div>
                        </div>*/}
                  </div>
                </div>
              </div>
              {/* End of submitting order form*/}
              {/* Order Section */}
              <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                <div className="order-details-confirmation">
                  <div className="cart-page-heading">
                    <h5>Your Order</h5>
                    <p>The Details</p>
                  </div>
                  <ul className="order-details-form mb-4">
                    <li>
                      <span>Product</span> <span>Total</span>
                    </li>
                    {/* List of purchased products*/}
                    {Cart.map((item) => (
                      <li key={Cart.indexOf(item)}>
                        <span>{item.Title}</span>
                        <span>${item.price * (1 - item.discount / 100)}</span>
                      </li>
                    ))}
                    {/* End of List of purchased products*/}
                    <li>
                      <span>Subtotal</span> <span>${CartSummary.subtotal}</span>
                    </li>
                    {/* Shipping Frees*/}
                    <li>
                      <span>Shipping</span>{" "}
                      <span>
                        {CartSummary.Delivery === 0
                          ? "Free"
                          : CartSummary.Delivery}
                      </span>
                    </li>
                    {/* Total payement*/}
                    <li>
                      <span>Total</span> <span>${CartSummary.Total}</span>
                    </li>
                    {/* End of Total payement*/}
                    {/* */}
                  </ul>
                  {/* Type of payements section */}
                  <div id="accordion" role="tablist" className="mb-4">
                    {/* Type of payement */}
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne">
                        <h6 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="fa fa-circle-o mr-3"></i>Paypal
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin pharetra tempor so dales. Phasellus
                            sagittis auctor gravida. Integ er bibendum sodales
                            arcu id te mpus. Ut consectetur lacus.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End of Type of payement */}
                  </div>
                  {/* Ends of Type of payements section */}
                  <button type="submit" className="btn essence-btn">
                    Place Order
                  </button>
                </div>
              </div>
              {/* End of Order Section */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Checkout;
