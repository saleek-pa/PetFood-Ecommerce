import React, { useContext } from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { PetContext } from "../App";
import "../Styles/Reg-Login.css";

function Registration() {
  const { profile, setProfile } = useContext(PetContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.fullName.value.trim() === "" ||
      e.target.email.value.trim() === "" ||
      e.target.password.value.trim() === ""
    ) {
      alert("Enter All the Inputs");
    } else {
      const UserID = profile.length
      const FullName = e.target.fullName.value;
      const Email = e.target.email.value;
      const Password = e.target.password.value;
      setProfile([
        ...profile,
        { id: UserID, name: FullName, email: Email, password: Password, orders: [] },
      ]);
      navigate("/login");
    }
  };

  return (
    <MDBContainer className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-3 text-black">Create an account</h1>
        <MDBInput
          wrapperClass="mb-4 p-1"
          label="Full Name"
          name="fullName"
          id="form1"
          type="text"
          required
        />
        <MDBInput
          wrapperClass="mb-4 p-1"
          label="Email Address"
          name="email"
          id="form2"
          type="email"
          required
        />
        <MDBInput
          wrapperClass="mb-4 p-1"
          label="Password"
          name="password"
          id="form3"
          type="password"
          required
        />

        <MDBBtn type="submit" className="mb-4 w-100" color="black">
          Create Account
        </MDBBtn>

        <div className="pointer text-center">
          <p>
            Already have an account?{" "}
            <span
              className="text-dark fw-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </MDBContainer>
  );
}

export default Registration;
