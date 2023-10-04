import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import "../SignUp/bootstrap/css/bootstrap.min.css";
import "./util.css";
import iconGoogle from "../Login/images/icons/icon-google.png";
import backgroundImg from "../../assets/login_register.png";
const { REACT_APP_BASE_SERVER_URL } = process.env;

const SignUp = () => {


  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emptyUserName, setEmptyUserName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  useEffect(() => { }, [emptyUserName]);
  useEffect(() => { }, [emptyEmail]);
  useEffect(() => { }, [emptyPassword]);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    // console.log(name,email,password);
    if (!username) {
      setEmptyUserName(true);
      return false;
    }
    if (!email) {
      alert("Enter valid Email");

      // setEmptyEmail(true);
      return false;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }

    try {
      let result = await fetch(REACT_APP_BASE_SERVER_URL+"/basic/register", {
        method: "post",
        body: JSON.stringify({ username, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.status === 201) {
        // Successful registration
        localStorage.setItem("user", JSON.stringify(result));
        alert("Registration successful! Please log in.");
        navigate("/login");
      } else if (result.status === 400) {
        // Bad Request: Validation error
        const errorData = await result.json();
        alert(errorData.message || "Validation error");
      } else {
        // Handle other status codes here
        console.error("Registration error:", result.status);
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred. Please try again later.");
    }
  }

  return (

    <div className="container1">
      {/* <img className="bg" src={backgroundImg} alt="background-form-img"></img> */}

      <div className="container-login100" >
        <div className="wrap-login100 p-l-43 p-r-43 p-t-40 p-b-30">
          <form className="login100-form validate-form flex-sb flex-w" method="POST">
            <span className="login100-form-title p-b-23">
              Sign Up With
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
                UserName
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Username is required" onClick={() => { setEmptyUserName(false) }}>
              <input className="input100" type="text" name="username" value={username} placeholder="Enter Valid Uesrname" onChange={(e) => { setUserName(e.target.value) }} />
              {/* {emptyUserName && <span className="focus-input100">Enter Username</span>} */}
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Email
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Email is required" onClick={() => { setEmptyEmail(false) }}>
              <input className="input100" type="email" name="email" value={email} placeholder="Enter valid Email" onChange={(e) => { setEmail(e.target.value) }} />
              {/* {emptyEmail && <span className="focus-input100">Enter valid Email</span>} */}
            </div>

            <div className="p-t-13 p-b-9">
              <span className="txt1">
                Password
              </span>

            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required" onClick={() => { setEmptyPassword(false) }}>
              <input className="input100" type="password" name="password" value={password} placeholder="Enter valid Password" onChange={(e) => { setPassword(e.target.value) }} />
              {/* {emptyPassword && <span className="focus-input100">Enter valid Password</span>} */}
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button type="button" onClick={collectData} className="login100-form-btn" >
                Sign Up
              </button>
            </div>

            <div className="w-full text-center p-t-5">
              <span className="txt2">
                Already a member?
              </span>

              <a href="/login" className="txt2 bo1">
                Login now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>




    //     <div className="container">
    //   <h1>Sign Up</h1>
    //   <form method="POST">
    //     <div className="form-control">
    //         <input type="text"  required  onChange={(e)=>setName(e.target.value)}/>
    //         {/* <label>Enter name :</label> */}
    //         <label>
    //         <span style={{"transitionDelay" : "0ms"}} >E</span>
    //           <span style={{"transitionDelay": "50ms"}}>nt</span>
    //           <span style={{"transitionDelay" : "100ms"}}>er</span>
    //           <span style={{"transitionDelay ": "150ms"}}> </span>
    //           <span style={{"transitionDelay" : "200ms"}}>Na</span>
    //           <span style={{"transitionDelay" : "250ms"}}>m</span>
    //           <span style={{"transitionDelay" : "300ms"}}>e</span>
    //           {/* <span style={{"transitionDelay" : "350ms"}}>d</span> */}
    //     </label>
    //     </div>

    //     <div className="form-control">
    //       <input type="email" required  onChange={(e)=>setEmail(e.target.value)}/>
    //       {/* <label>Enter Email :</label> */}
    //        <label>
    //         <span style={{"transitionDelay" : "0ms"}} >E</span>
    //           <span style={{"transitionDelay": "50ms"}}>m</span>
    //           <span style={{"transitionDelay" : "100ms"}}>a</span>
    //           <span style={{"transitionDelay ": "150ms"}}>i</span>
    //           <span style={{"transitionDelay" : "200ms"}}>l</span>
    //     </label> 
    //     </div>

    //     <div className="form-control">
    //       <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
    //       {/* <label>Enter password :</label> */}
    //       <label>
    //         <span style={{"transitionDelay" : "0ms"}} >P</span>
    //           <span style={{"transitionDelay": "50ms"}}>a</span>
    //           <span style={{"transitionDelay" : "100ms"}}>s</span>
    //           <span style={{"transitionDelay ": "150ms"}}>s</span>
    //           <span style={{"transitionDelay" : "200ms"}}>w</span>
    //           <span style={{"transitionDelay" : "250ms"}}>o</span>
    //           <span style={{"transitionDelay" : "300ms"}}>r</span>
    //           <span style={{"transitionDelay" : "350ms"}}>d</span>
    //     </label>
    //     </div>

    //     {/* <div className="form-control">
    //         <input type="text" required />
    //         <label>Enter your message here :</label>
    //     </div> */}

    //     <button type="button" className="btn" onClick={collectData} >Sign Up</button>

    //     {/* <!-- <p className="text">Don't have an account? <a href="#">Register</a> </p> --> */}
    //   </form>
    // </div>


  );
};

export default SignUp;
