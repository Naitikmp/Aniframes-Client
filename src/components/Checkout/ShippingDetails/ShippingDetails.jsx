import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../../../utils/context";
import "./ShippingDetails.scss"
const ShippingDetails = ({getAddressData ,setShowAddressAdd}) => {

  const [fullName,setFullName] =useState();
  const [street,setStreet] =useState();
  const [city,setCity] =useState();
  const [state,setState] =useState();
  const [country,setCountry] =useState('India');
  const [zipCode,setZipCode] =useState();
  const [phone,setPhone] =useState();
  const token = localStorage.getItem('token');  
  const {addressField, setAddressField} =useContext(Context);


  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can perform validation here if needed
    console.log(fullName);
    console.log(street);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(zipCode);
    console.log(phone);
    console.log(JSON.stringify({fullName,street,city,state,country,zipCode,phone}));
    // onSubmit(formData);

    
  
      try {
        // console.log(process.env.REACT_APP_BASE_SERVER_URL);
        // console.log(process.env.REACT_APP_STRIPE_APP_KEY);
        let result = await fetch("http://3.81.102.85:3000/address/",{
            method:'POST',
            body:JSON.stringify({fullName,street,city,state,country,zipCode,phone}),
            headers: {
              'Content-Type': 'application/json',
              authorization: token
            }
            
          });
          if(result.ok){
            getAddressData();
            // setAddressField(result.)
            setShowAddressAdd(false);
          }
          // result =await result.json();
          // console.warn(result);
          else{
            console.error(result);
            alert(result.message);
          }
      } catch (error) {
        console.error('Login error:', error);
      }
    };




  return (
      <>
      <div className='Shipping-content'>
            <h2 className='Shipping-header'>Shipping Details</h2>
            
      <form onSubmit={handleSubmit} className='Shipping-form'>
        <div className="Shipping-form-group">
          <label htmlFor="firstName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            placeholder="Enter Full Name!"
            title="Please enter a valid Full Name !"
            onChange={(e)=>{setFullName(e.target.value)}}
            required
          />
        </div>
        <div className="Shipping-form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            value={street}
            placeholder="Enter your Street Address"
            title="Please enter a valid street field !"
            onChange={(e)=>{setStreet(e.target.value)}}
            required
          />
        </div>
        <div className="Shipping-form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            placeholder="Enter Your City Name!"
            title="Please enter a valid City Name !"
            onChange={(e)=>{setCity(e.target.value)}}
            required
          />
        </div>
        <div className="Shipping-form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            placeholder="Enter State Name!"
            title="Please enter a valid State Name !"
            onChange={(e)=>{setState(e.target.value)}}
            required
          />
        </div>
        <div className="Shipping-form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            // defaultValue="India"
            
            title="Please enter a valid Country Name !"
            onChange={(e)=>{setCountry(e.target.value)}}
            required
          />
        </div>
        
        <div className="Shipping-form-group">
          <label htmlFor="zipCode">Enter Pin Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={zipCode}
            pattern="[0-9]{6}"
            placeholder="Enter 6-digit Pin code!"
            title="Please enter a 6-digit Pin Code !"
            onChange={(e)=>{setZipCode(e.target.value)}}
            required
          />
        </div>
        <div className="Shipping-form-group">
          <label htmlFor="phone">Enter Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit phone number"
            title="Please enter a 10-digit phone number"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            required
          />
        </div>

    

        
        <button type="submit">Add Shipping Details</button>
      </form>
      </div>
    </>
  );
};

export default ShippingDetails;
