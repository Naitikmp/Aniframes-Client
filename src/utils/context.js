import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDataFromApi } from "./api";
export const Context = createContext();
const { REACT_APP_BASE_SERVER_URL } = process.env;


const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [addressField, setAddressField] = useState();

  const token = localStorage.getItem('token');

  const getCartItems = () => {
    fetchDataFromApi("/cart/").then((res) => {
      // console.log(res);
      setCartItems(res.cart);
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

  const addToCart = async (productId, quantity) => {
    try {

      let result = await fetch(REACT_APP_BASE_SERVER_URL+"/cart/?productId=" + productId + '&quantity=' + quantity, {
        method: 'post',
        // body:JSON.stringify({email,password}),
        headers: {
          authorization: token
          //   'Content-Type':'application/json'
        }
      });
      if (result.ok) {
        getCartItems();
        console.log("added product to cart");
      }

      else {
        console.error(result);
        alert(result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  const increaseProductQuantity = async (productId) => {
    try {

      let result = await fetch(REACT_APP_BASE_SERVER_URL+"/cart/increase?productId=" + productId, {
        method: 'put',
        // body:JSON.stringify({email,password}),
        headers: {
          authorization: token
          //   'Content-Type':'application/json'
        }
      });
      if (result.ok) {
        getCartItems();
        console.log("incremented product quantity to cart");
      }

      else {
        console.error(result);
        alert(result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  const decreaseProductQuantity = async (productId) => {
    try {

      let result = await fetch(REACT_APP_BASE_SERVER_URL+"/cart/decrease?productId=" + productId, {
        method: 'put',
        // body:JSON.stringify({email,password}),
        headers: {
          authorization: token
          //   'Content-Type':'application/json'
        }
      });
      if (result.ok) {
        getCartItems();
        console.log("decremented product quantity to cart");
      }

      else {
        console.error(result);
        alert(result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  const deleteProductFromCart = async (productId) => {
    try {

      let result = await fetch(REACT_APP_BASE_SERVER_URL+"/cart/deleteproduct?productId=" + productId, {
        method: 'DELETE',
        // body:JSON.stringify({email,password}),
        headers: {
          authorization: token
          //   'Content-Type':'application/json'
        }
      });
      if (result.ok) {
        getCartItems();
        console.log("deleted product from cart");
      }

      else {
        console.error(result);
        alert(result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // getCartItems();
    let count = 0;
    cartItems?.map((item) => count += item.quantity);
    setCartCount(count);
    let subTotal = 0;
    cartItems?.map(item => subTotal += item?.product?.price * item.quantity);
    // console.log(subTotal);
    setCartSubTotal(subTotal);
  }, [cartItems]);

  useEffect(() => {
    if(token){
    getCartItems();
    }
  }, [])

  const handleAddToCart = (product, quantity) => {
    if (token) {
      // User is logged in, make API call to add to cart
      addToCart(product._id, quantity);
    } else {
      // User is not logged in, manage cart items locally
      const itemIndex = cartItems.findIndex((item) => item.product._id === product._id);

      if (itemIndex !== -1) {
        // Item already exists in the cart, update its quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].quantity += quantity;
        setCartItems(updatedCartItems);
      } else {
        // Item doesn't exist in the cart, add it
        const newItem = {
          product,
          quantity
        };
        setCartItems([...cartItems, newItem]);
      }
    }
  };


  const handleRemoveFromCart = (product) => {
    if (token) {
      // User is logged in, make an API call to remove the product from the cart
      deleteProductFromCart(product.product._id);
    } else {
      // User is not logged in, manage cart items locally
      const updatedCartItems = cartItems.filter((item) => item.product._id !== product.product._id);
      setCartItems(updatedCartItems);
    }
  };
  

  const handleCartProductQuantity = async (type, product) => {
    if (token) {
      // User is logged in, make API call to update quantity
      if (type === "inc") {
        await increaseProductQuantity(product.product._id);
      } else if (type === 'dec' && product.quantity>1) {
        console.log(product.product._id);
        await decreaseProductQuantity(product.product._id );
      }
      getCartItems();
    } else {
      // User is not logged in, manage cart items locally
      const updatedCartItems = [...cartItems];
      const itemIndex = updatedCartItems.findIndex((item) => item.product._id === product.product._id);

      if (itemIndex !== -1) {
        if (type === "inc") {
          updatedCartItems[itemIndex].quantity += 1;
        } else if (type === "dec" && updatedCartItems[itemIndex].quantity > 1) {
          updatedCartItems[itemIndex].quantity -= 1;
        }
        setCartItems(updatedCartItems);
      }
    }
  };


  return <Context.Provider
    value={{
      categories,
      setCategories,
      products,
      setProducts,
      cartItems,
      setCartItems,
      cartCount,
      setCartCount,
      cartSubTotal,
      setCartSubTotal,
      handleAddToCart,
      handleRemoveFromCart,
      handleCartProductQuantity,
      activeLink,
      setActiveLink,
      addressField,
      setAddressField,
      getCartItems
    }}>{children}</Context.Provider>
};

export default AppContext;