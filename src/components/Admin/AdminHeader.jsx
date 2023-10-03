import React from 'react';
import "./css/lib/bootstrap/bootstrap.min.css";
import "./css/helper.css";
import "./css/style.css";
// import "./js/lib/jquery/jquery.min.js";

import "./icons/font-awesome/css/font-awesome.min.css";
// import "./icons/simple-line-icons/css/simple-line-icons.css";
// import "./icons/weather-icons/css/weather-icons.min.css";
// import "./icons/linea-icons/linea.css";
import "./icons/themify-icons/themify-icons.css";
// import "./icons/flag-icon-css/flag-icon.min.css";
import "./icons/material-design-iconic-font/css/materialdesignicons.min.css";
import "./css/spinners.css";
import "./css/animate.css";
import icnImg from "./images/icn.png";
import userIcn from "./images/bookingSystem/user-icn.png";


function AdminHeader(){
    return (


        <div className="header">
                    <nav className="navbar top-navbar navbar-expand-md navbar-light">

                        <div className="navbar-header">
                            <a className="navbar-brand" href="/admin">

                                <span><img src={icnImg} alt="homepage" className="dark-logo" /></span>
                            </a>
                        </div>

                        <div className="navbar-collapse">
                            <ul className="navbar-nav mr-auto mt-md-0">
                            </ul>





                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={userIcn} alt="user" className="profile-pic" /></a>
                                <div className="dropdown-menu dropdown-menu-right animated zoomIn">
                                    <ul className="dropdown-user">
                                        <li><a href="logout.php"><i className="fa fa-power-off"></i> Logout</a></li>
                                    </ul>
                                </div>
                            </li>

                        </div>
                    </nav>
                </div>
    )

}

export default AdminHeader;