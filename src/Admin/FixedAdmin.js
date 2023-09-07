import React, { useContext } from "react";
import { PetContext } from "../App";
import { MDBIcon } from "mdb-react-ui-kit";
import HomeAdmin from "./HomeAdmin";
import UsersAdmin from "./UsersAdmin";
import ProductsAdmin from "./ProductsAdmin";
import AddProductAdmin from "./AddProductAdmin";
import EditProductAdmin from "./EditProductAdmin";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/Admin.css";
import UserDetailsAdmin from "./UserDetailsAdmin";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active dashboard sections based on the current URL
  const isDashboard = location.pathname.endsWith("/dashboard");
  const isUsers = location.pathname.endsWith("/users");
  const isProducts = location.pathname.endsWith("/products");
  const isAddProducts = location.pathname.endsWith("add-products");
  const isUserDetails = location.pathname.startsWith("/dashboard/users/");
  const isEditProducts = location.pathname.startsWith("/dashboard/products/");

  const { loginStatus, setLoginStatus, name } = useContext(PetContext);

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <ul>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
          >
            <MDBIcon fas icon="cubes" />
            <span>Dashboard</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard/users");
            }}
          >
            <MDBIcon fas icon="user" />
            <span>Users</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard/products");
            }}
          >
            <MDBIcon fas icon="list-ul" />
            <span>Products</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard/add-products");
            }}
          >
            <MDBIcon fas icon="plus" />
            <span>Add Product</span>
          </li>
        </ul>
      </aside>

      <main className="content">
        <div className="content-main-box">
          <div className="admin-header">
            <h2>{name}</h2>
            {/* <div className="search-box-admin">
              <MDBIcon fas icon="search" className="search-icon-admin" />
              <input type="text" placeholder="Search..." disabled />
            </div> */}
            <div
              href=""
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setLoginStatus(false);
                navigate("/login");
              }}
            >
              <MDBIcon fas icon="sign-out-alt" color="dark" />
              <span className="text-black">Log Out</span>
            </div>
          </div>
          {loginStatus && (
            <>
              {isDashboard && <HomeAdmin />}
              {isUsers && <UsersAdmin value={isUsers} />}
              {isProducts && <ProductsAdmin value={isProducts} />}
              {isAddProducts && <AddProductAdmin />}
              {isEditProducts && <EditProductAdmin />}
              {isUserDetails && <UserDetailsAdmin />}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
