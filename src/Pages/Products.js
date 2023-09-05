import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { PetContext } from "../App";

function Products() {
  const { productDetails } = useContext(PetContext);
  const slicedData = productDetails.slice(0, 8);

  const navigate = useNavigate()
  return (
    <>
      <section className="products d-flex flex-column align-items-center">
        <h1 className="mt-5 text-black fw-bolder">
          <span>Best</span> Seller
        </h1>

        <MDBContainer fluid className="my-5">
          <MDBRow className="d-flex flex-wrap justify-content-center pb-0 ms-5 me-5 h-50">
            {slicedData.map(value => (
              <MDBCol
                xl="3"
                lg="4"
                md="4"
                sm="6"
                className="mb-3"
                key={value.id}
                onClick={() => navigate(`/products/${value.id}`)}
              >
                <MDBCard className="text-black">
                  <MDBCardImage
                    src={value.src}
                    position="top"
                    alt="product-image"
                  />
                  <MDBCardBody>
                    <div className="text-center">
                      <MDBCardTitle className="fw-bold">
                        {value.name}
                      </MDBCardTitle>
                    </div>
                    <p
                      className="text-center fw-bolder fs-5"
                      style={{ color: "#ed2335" }}
                    >
                      ₹{value.price}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default Products;
