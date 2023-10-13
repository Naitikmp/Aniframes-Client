import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import "./orderConfirmation.scss";
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60); // Set the initial countdown time in seconds

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, countdown * 1000); // Redirect to the homepage after the countdown time in milliseconds

    const timerInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Update the countdown every second

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(timerInterval);
    };
  }, [countdown, navigate]);

  window.onpopstate = function (event) {
    // Check the current page's URL to determine the behavior
    if (window.location.pathname === '/thankyou') {
      // Handle the back button press on the Thank You page
      navigate('/');
    }
  };


  return (
    <>
      <Header />
      <div className='confirm-content'>
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been successfully placed.</p>
        <p>You will be redirected to the homepage in {countdown} seconds.</p>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
