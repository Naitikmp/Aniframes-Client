import React, { useEffect, useState } from "react";
import "./UserOrders.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { fetchDataFromApi } from "../../utils/api";


const UserOrders = () =>{

  const[orders,setOrders] =useState();

  const getOrders = () =>{
    fetchDataFromApi("/order/").then((res) => {
        // console.log(res);
        setOrders(res);
}).catch((error) => {
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      console.error("Server Response Status:", error.response.status);
      console.error("Server Response Data:", error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("No Response Received. The request was made, but there's no response.");
    } else {
      // Something else went wrong
      console.error("Error:", error.message);
    }
  });
}

useEffect(()=>{
  getOrders();
},[])
  
  // const orders = [
  //   { id: 1, product: "Product 1", quantity: 2, total: 50.00, status: "Shipped" },
  //   { id: 2, product: "Product 2", quantity: 1, total: 30.00, status: "Processing" },
  //   { id: 3, product: "Product 3", quantity: 3, total: 80.00, status: "Delivered" },
  // ];

  return (
    <>
    <Header />
    <div className="user-orders">
      <h2>Your Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order?._id}>
              <td>{order?._id}</td>
              {order.products.map((product)=>{  
                <td>
                <td>{product.product.name}</td>
              <td>{product.product.quantity}</td>
              </td>
              })}
              
              <td>{order.totalPrice}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  );
};



export default UserOrders;