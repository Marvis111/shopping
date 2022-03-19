import { useContext } from "react";
//import HomeProductWrapper from "../components/HomeProductWrapper";
//import SingleProductWrapper from "../components/SingleProductWrapper";
//import { ProductContext } from "../Store/ProductContext";
//import Products from "../TestingData/Products";
function Home() {
  //const { HomeProducts } = useContext(ProductContext);
  return (
    <>
      {/* Collections section*/}
      <section
        className="welcome_area bg-img background-overlay"
        style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="hero-content">
                <h6>asoss</h6>
                <h2>New Collection</h2>
                <a className="btn essence-btn">view collection</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Collections section section*/}
      {/* Showing our products section*/}
      <div className="top_catagory_area section-padding-80 clearfix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-2.jpg)" }}
              >
                <div className="catagory-content">
                  <a>Clothing</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-3.jpg)" }}
              >
                <div className="catagory-content">
                  <a>Shoes</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-4.jpg)" }}
              >
                <div className="catagory-content">
                  <a>Accessories</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of showing our products section*/}
      {/* Global Sales section*/}
      <div className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="cta-content bg-img background-overlay"
                style={{ backgroundImage: "url(assets/img/bg-img/bg-5.jpg)" }}
              >
                <div className="h-100 d-flex align-items-center justify-content-end">
                  <div className="cta--text">
                    <span>
                      <h6>-60%</h6>
                    </span>

                    <h2>Global Sale</h2>
                    <a className="btn essence-btn">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of global sales section*/}
      {/* Popular products section*/}
      <section className="new_arrivals_area section-padding-80 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="popular-products-slides owl-carousel">
                {/*<HomeProductWrapper Product={Products[0]} />
                <HomeProductWrapper Product={Products[0]} />
  <HomeProductWrapper Product={Products[0]} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of popular products section*/}
      {/* Brands section*/}
      <div className="brands-area d-flex align-items-center justify-content-between">
        <div className="single-brands-logo">
          <img src="assets/img/core-img/brand1.png" alt="" />
        </div>
      </div>
      {/* End Of Brands section*/}
    </>
  );
}

export default Home;
