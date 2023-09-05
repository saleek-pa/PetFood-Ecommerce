import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Details.css";
import "../Styles/Home.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { PetContext } from "../App";

export default function Details() {
  const { id } = useParams();
  const { productDetails, loginStatus, cart, setCart } = useContext(PetContext);

  const addToCart = (newItem) => {
    let itemExists = cart.filter((item) => item.id === newItem.id);

    if (itemExists.length === 0) {
      setCart([...cart, newItem]);
    }
  };

  return (
    <>
      <div className="details d-flex flex-column flex-md-row align-items-center pb-3">
        <div className="w-100 w-md-50 d-flex justify-content-center align-items-center">
          <img src={productDetails[id - 1].src} alt="Product-img" />
        </div>
        <div className="d-flex flex-column w-100 w-md-50 text-black me-5 ms-5">
          <h1 className="fw-bold mb-3">{productDetails[id].name}</h1>
          <h4 className="fw-bold mb-3">₹{productDetails[id].price}</h4>
          <hr />
          <p className="mt-3 text-muted mb-4">
            {productDetails[id].description}
          </p>
          <div className="d-flex align-items-center gap-3">
            <div>
              <MDBBtn
                rounded
                color="dark"
                className="det-button"
                onClick={() => {
                  if (loginStatus) {
                    addToCart(productDetails[id - 1]);
                  } else {
                    alert("Sign in to your account");
                  }
                }}
              >
                Add to Cart
              </MDBBtn>
            </div>
            <div>
              <MDBBtn
                rounded
                className="det-button"
                style={{ backgroundColor: "#ed6335" }}
              >
                Buy Now
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}