import React, { useContext } from "react";
import { PetContext } from "../App";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

export default function UsersAdmin() {
  const { profile } = useContext(PetContext);
  const navigate = useNavigate();
  const finalProfile = profile.filter((user) => user.role !== "admin");

  return (
    <div>
      <div className="users-admin px-5 py-3">
        {/* <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Product Name</td>
              <td className="text-center">Unit Price</td>
              <td>Quantity</td>
              <td className="text-center">Total Price</td>
            </tr>
          </thead>
          <tbody>
            {finalProfile.map((user) => (
              <React.Fragment key={user.id}>
                {user.orders.length > 0 ? (
                  user.orders.map((order, orderIndex) => (
                    <tr key={`${order.orderId}-${order.product}`}>
                      {orderIndex === 0 && (
                        <>
                          <th rowSpan={user.orders.length}>{user.id}</th>
                          <th
                            rowSpan={user.orders.length}
                            onClick={() =>
                              navigate(`/dashboard/users/${user.id}`)
                            }
                          >
                            {user.name}
                          </th>
                          <th rowSpan={user.orders.length}>{user.email}</th>
                        </>
                      )}
                      <th>{order.product}</th>
                      <th className="text-center">
                        {handlePrice(order.price)}
                      </th>
                      <th className="text-center">{order.quantity}</th>
                      {orderIndex === 0 && (
                        <th
                          rowSpan={user.orders.length}
                          className="text-center"
                        >
                          {handlePrice(
                            user.orders.reduce(
                              (total, order) =>
                                total + order.price * order.quantity,
                              0
                            )
                          )}
                        </th>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table> */}
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Full Name</td>
              <td>Email</td>
              <td className="ps-0">Orders</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {finalProfile.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.orders.length}</th>
                <th className="pe-0">
                  <MDBBtn
                    className="me-1"
                    color="info"
                    rounded
                    onClick={() => navigate(`/dashboard/users/${user.id}`)}
                  >
                    More Info
                  </MDBBtn>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
