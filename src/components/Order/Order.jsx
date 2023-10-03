import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";
// import CheckOutItem from "./CheckoutItem/CheckoutItem";
// import "./ShippingDetails/ShippingDetails.scss"
// import "./Checkout.scss";
import Header from "../Header/Header";
// import ShippingDetails from "./ShippingDetails/ShippingDetails";
import Footer from "../Footer/Footer";
import { fetchDataFromApi } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import './Order.scss';
const Order = () => {
  const { cartSubTotal, cartItems } = useContext(Context);
  const [showAddressAdd, setShowAddressAdd] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);
  
  // const AddressData = fetchDataFromApi('/adress');
  // const [addressData, setAddressData] = useState([]);
  const {addressField} = useContext(Context);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    // Try to get the addressField from localStorage
    const storedAddressField = localStorage.getItem('addressField');

    if (storedAddressField) {
      try {
        const parsedAddressField = JSON.parse(storedAddressField);
        setShippingAddress(parsedAddressField);
      } catch (error) {
        console.error("Error parsing addressField from localStorage:", error);
      }
    }
  }, []);
  
  // const getAddressData = async () => {
  //   await fetchDataFromApi("/address/").then((res) => {
  //     //   console.log(res);
  //     setAddressData(res);
  //   })
  // }
  console.log(cartItems);
  // console.log(addressData);
  console.log(shippingAddress);
 
  const [selectedMethod, setSelectedMethod] = useState('cod');

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const[orderProducts,setOrderProducts] = useState([]);
    const totalPrice = cartSubTotal;
    const status = "pending";
    const address = shippingAddress?._id;
  const placeOrder = async() =>{
    const newOrderProducts = cartItems.map(item => ({
      "product": item.product._id,
      "quantity": item.quantity,
    }));
    const products = newOrderProducts;

    setOrderProducts(newOrderProducts)
    console.log(orderProducts);
    
    console.log(JSON.stringify({products,totalPrice,status,address}));
    try {

      let result = await fetch("http://3.81.102.85:3000/order", {
        method: 'post',
        body:JSON.stringify({products,totalPrice,status,address}),
        headers: {
          authorization: token,
          'Content-Type':'application/json'
        }
      });
      if (result.ok) {
        alert("order placed successfully");
        navigate("/thankyou");
        console.log("Order placed Successfully");
      }

      else {
        alert("Failed to place order");
        console.error(result);
      }
    } catch (error) {
      console.error('Login error:', error);
    }




  }
  console.log(orderProducts);

  return (


    <>
      <Header />
      <div className="order-content">
        <h1>Your order</h1>
        <div className="order-details">
          <div className="order-details-headings">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          {cartItems?.length > 0 ? (
            cartItems.map(item => {
              return (
                <div className="order-details-text" key={item.product._id}>
                  <span>{item.product.name}<span className="quantity-order-details">x{item.quantity}</span></span>

                  <span>{item.product.price}</span>
                </div>
              )
            })

          ) : (
            <p>Please wait Cart is Loading...</p>
          )}

          <div className="order-details-text">
            <span className="order-subtotal">Subtotal</span>
            <span className="order-subtotal-text">&#8377;{cartSubTotal}</span>
          </div>


          <div className="address-order">
            <h1>Shipping Address</h1>
            <div className="address-data-field">Full Name : <span className="address-data-field-data">{shippingAddress?.fullName}</span></div>
            
            <div className="address-data-field">Address : <span className="address-data-field-data">{shippingAddress?.street}</span></div>
            
            <div className="address-data-field">City : <span className="address-data-field-data">{shippingAddress?.city}</span></div>
            
            <div className="address-data-field">State : <span className="address-data-field-data">{shippingAddress?.state}</span></div>
            
            <div className="address-data-field">Pincode : <span className="address-data-field-data">{shippingAddress?.zipCode}</span></div>
            
            <div className="address-data-field">Phone : <span className="address-data-field-data">{shippingAddress?.phone}</span></div>
          </div>

          <div className="payment-method">

            <h1>Select a Payment Method</h1>
            <div>
              <label>
                <input
                  type="radio"
                  value="cod"
                  checked={selectedMethod === 'cod'}
                  onChange={handleMethodChange}
                />
                Cash on Delivery (COD)
                {selectedMethod === 'cod' && (<div className="order-tooltip order-fadeIn">Pay with cash upon Delivery</div>)}
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="other"
                  checked={selectedMethod === 'other'}
                  onChange={handleMethodChange}
                />
                Other Payment Method
                {selectedMethod === 'other' && (<div className="order-tooltip order-fadeIn">Pay with Other Payment Method</div>)}
              </label>
            </div>
          </div>


        </div>

        <button className="order-button" onClick={placeOrder}>
          Place Order
        </button>


      </div>

      <Footer />
    </>
  )


};

export default Order;





// Fetch and set the shipping address here, or you can use your own logic

//   useEffect(() => {
//     // Fetch and set the shipping address here, e.g., from an API
//     const fetchShippingAddress = async () => {
//       try {
//         const response = await fetch("/api/shippingAddress");
//         const data = await response.json();
//         setShippingAddress(data);
//       } catch (error) {
//         console.error("Error fetching shipping address:", error);
//       }
//     };

//     fetchShippingAddress();
//   }, []);


