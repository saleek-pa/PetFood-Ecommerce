import React, { useContext } from "react";
import { PetContext } from "../App";

export default function UsersAdmin() {
  const { profile } = useContext(PetContext);
  const finalProfile = profile.filter((user) => user.role !== "admin");

  return (
    <div>
      <div className="users-admin px-5 py-3">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Product Name</td>
              <td>Unit Price</td>
              <td>Quantity</td>
              <td>Total Price</td>
            </tr>
          </thead>
          <tbody>
            {finalProfile.map((user) => (
              <React.Fragment key={user.id}>
                {user.orders.length > 0 ? (
                  user.orders.map((order, orderIndex) => (
                    <tr key={order.orderId}>
                      {orderIndex === 0 && (
                        <>
                          <th rowSpan={user.orders.length}>{user.id}</th>
                          <th rowSpan={user.orders.length}>{user.name}</th>
                          <th rowSpan={user.orders.length}>{user.email}</th>
                        </>
                      )}
                      <th>{order.product}</th>
                      <th className="text-center">₹{order.price}</th>
                      <th className="text-center">{order.quantity}</th>
                      {orderIndex === 0 && (
                        <th
                          rowSpan={user.orders.length}
                          className="text-center"
                        >
                          ₹
                          {user.orders.reduce(
                            (total, order) =>
                              total + order.price * order.quantity,
                            0
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
        </table>
      </div>
    </div>
  );
}
