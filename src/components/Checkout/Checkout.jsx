import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";
import CheckOutItem from "./CheckoutItem/CheckoutItem";
import "./ShippingDetails/ShippingDetails.scss"
import "./Checkout.scss";
import Header from "../Header/Header";
import ShippingDetails from "./ShippingDetails/ShippingDetails";
import Footer from "../Footer/Footer";
import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cartSubTotal, cartItems } = useContext(Context);
    const [showAddressAdd, setShowAddressAdd] = useState(false);
    const [addressData, setAddressData] = useState([]);
    const { addressField, setAddressField } = useContext(Context);

    // const token = localStorage.getItem('token');
    const navigate = useNavigate();

    // Function to get address data from localStorage
    const getAddressDataFromLocalStorage = () => {
        const storedAddressField = localStorage.getItem('addressField');
        if (storedAddressField) {
            setAddressField(JSON.parse(storedAddressField));
        }
    }

    // Function to save addressField to localStorage
    const saveAddressFieldToLocalStorage = (value) => {
        localStorage.setItem('addressField', JSON.stringify(value));
    }

    const getAddressData = async () => {
        await fetchDataFromApi("/address/").then((res) => {
            setAddressData(res);
            console.log(addressData);
            if (!addressField && res.length > 0) {
                setAddressField(res[0]); // Set the first address if addressField is not set
            }
        });
    }

    useEffect(() => {
        getAddressDataFromLocalStorage(); // Get addressField from localStorage
        getAddressData();
    }, []);

    useEffect(() => {
        if (addressField) {
            saveAddressFieldToLocalStorage(addressField); // Save addressField to localStorage when it changes
        }
    }, [addressField]);

    
    return (

        <>
            <Header />
            <div className="checkout-panel">
                {/* <div className="opac-layer" onClick={() => setShowCart(false)}></div> */}
                <div className="checkout-content">
                    <div className="checkout-header">
                        <div className="checkout-heading">Shopping Cart</div>
                        {/* <span className="close-btn" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span> */}
                    </div>



                    {!!cartItems?.length && <>
                        <CheckOutItem />
                        <div className="checkout-footer">
                            <div className="checkout-subtotal">
                                <span className="checkout-text">Subtotal</span>
                                <span className="checkout-text checkout-total">&#8377;{cartSubTotal}</span>
                            </div>
                            {/* <div className="button">
                    <button className="checkout-cta">CheckOut</button>
                </div> */}
                        </div>

                    </>
                    }
                    <div className="Shipping-header">
                        <h1>Shipping Details :</h1>

                        <div className="address-content">
                            {/* {addressData.map(adr=>{
                            return(
                            <div><label className="address-radio-field"><input type="radio"  name="address" value={adr._id} onChange={(e)=>{setAddressField(e.target.value);console.log(addressField)}} className="input-radio"/>Street  :  {adr.street}<br/>Name : {adr.fullName}<br/>City : {adr.city}<br/>Pincode : {adr.zipCode}</label></div>
                   
                            )
                        })} */}


                            {addressData?.map((adr) => {
                                return (
                                    <div key={adr._id}>
                                        <label className={`address-radio-field ${adr._id === addressField._id ? 'selected-address' : ''}`}>
                                            <input
                                                type="radio"
                                                name="address"
                                                value={adr}
                                                onChange={(e) => {
                                                    console.log(adr);
                                                    // console.log(JSON.stringify(addressField, null, 2));

                                                    setAddressField(adr);
                                                    console.log(addressField._id);
                                                }}
                                                className="input-radio"
                                                // Set checked to true for the first element
                                                checked={adr._id === addressField._id}
                                                
                                            />
                                            <div className="address-description">
                                                Street: {adr.street}<br />
                                                Name: {adr.fullName}<br />
                                                City: {adr.city}<br />
                                                Pincode: {adr.zipCode}
                                            </div>
                                        </label>
                                    </div>
                                );
                            })}


                        </div>


                    </div>
                    <button onClick={() => setShowAddressAdd(!showAddressAdd)} className="Add-Address-button">
                        Add new Address
                    </button>
                    {showAddressAdd && <ShippingDetails getAddressData={getAddressData} setShowAddressAdd={setShowAddressAdd} />}
                    {addressField ? <button className="Add-Address-button" onClick={() => navigate('/order')}>
                                            Order Now!
                            </button>

                            :

                            <div></div>
                    }

                    
                </div>
            </div>
            <Footer />
        </>
    )


};

export default Checkout;
