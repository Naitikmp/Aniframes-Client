import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./bootstrap/css/bootstrap.min.css";
import "./util.css";
import iconGoogle from "../Login/images/icons/icon-google.png";
import backgroundImg from "../../assets/login_register.png";
import { Context } from "../../utils/context";
import swal from 'sweetalert'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const { REACT_APP_BASE_SERVER_URL } = process.env;



const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const {getCartItems} = useContext(Context);
  useEffect(() => { }, [error]);
  useEffect(() => { }, [errorPass]);

  const handleLogin = async () => {
    if (!email) {
      setError(true);
      return false;
    }
    if (!password) {
      setErrorPass(true);
      return false;
    }

    try {
      const result = await fetch(REACT_APP_BASE_SERVER_URL+"/basic/login", {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (result.status === 200) {
        // Successful login, process data
        const data = await result.json();
        const token = data.token;
        const role = data.role;
        const setTokenInLocalStorage = new Promise((resolve) => {
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          resolve();
        });
  
        // Wait for the token to be set in localStorage before proceeding
        await setTokenInLocalStorage;
        await getCartItems();
        swal( {title: "Logged in",
        text: "Successfully logged in! Happy Shopping frames",
        icon: "success",
        });

        if (role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } 
      else if (result.status === 401) {
        // Unauthorized: Incorrect credentials
        const errorData = await result.json();
        // setError(true);
        swal( {title: "Unsuccessful login",
        text: "Please  enter correct Email and Password",
        icon: "error",
        dangerMode: true,});
        // alert(errorData.message + "!\nPlease  enter correct Email and Password!");
      } 
      else if (result.status === 400) {
        // Bad Request: Validation error
        const errorData = await result.json();
        setError(true);
        alert(errorData.message || "Validation error");
      }
      else {
        console.error('Login error:', result.status);
        const errorData = await result.json();
        // setError(true);
        alert(errorData.message);
      }
    } 
    
    catch (error) {
      swal( {title: "Error login",
        text: "please check your network!",
        icon: "error",
        dangerMode: true,});
      console.error('Login error:', error);
      // alert("please check your network!")
      // setError(true); // Handle network errors or other exceptions
    }
  };


  // const myfunc = ()=>{
  //   setError(false); 
  //   // console.log(error);
  // }









  return (
    <>
    <Header />
    <div className="container1" >
      
      {/* <img className="bg" src={backgroundImg} alt="background-form-img"></img> */}
      <div className="container-login100" >
        <div className="wrap-login100 p-l-77 p-r-77 p-t-55 p-b-33">
          <form className="login100-form validate-form flex-sb flex-w" method="POST">
            <span className="login100-form-title p-b-53">
              Log In With
            </span>

            <a href="#" className="btn-face m-b-20">
              <i className="fa fa-facebook-official"></i>
              Facebook
            </a>

            <a href="#" className="btn-google m-b-20">
              <img src={iconGoogle} alt="GOOGLE" />
              Google
            </a>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Email
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Username is required" onClick={() => { setError(false) }}>
              <input className="input100" type="email" name="email" value={email} placeholder="Enter valid Email"onChange={(e) => { setEmail(e.target.value); }} />
              {/* {error ? <span className="focus-input100" >Enter valid Email***</span> : <span ></span>} */}
            </div>

            <div className="p-t-13 p-b-9">
              <span className="txt1">
                Password
              </span>

              <a href="#" className="txt2 bo1 m-l-5">
                Forgot?
              </a>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required" onClick={() => { setErrorPass(false) }}>
              <input className="input100" type="password" name="password" value={password} placeholder="Enter valid Password" onChange={(e) => { setPassword(e.target.value) }} />
              {/* {errorPass ? <span className="focus-input100">Password is required***</span> : <span></span>} */}
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button type="button" onClick={handleLogin} className="login100-form-btn" >
                Sign In
              </button>
            </div>

            <div className="w-full text-center p-t-55">
              <span className="txt2">
                Not a member?
              </span>

              {/* <a  onClick={()=>navigate('/signup')} className="txt2 bo1">
                Sign up now
              </a> */}
              <button onClick={()=>navigate('/signup')} className="txt2 bo1">Sign Up Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>


<Footer />

</>


  );
};

export default Login;