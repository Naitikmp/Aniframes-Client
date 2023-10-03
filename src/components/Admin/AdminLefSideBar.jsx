import React, { useContext, useEffect, useState } from 'react';
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
import { useNavigate, Link } from 'react-router-dom';
import icnImg from "./images/icn.png";
import userIcn from "./images/bookingSystem/user-icn.png";
import { Context } from '../../utils/context';


function AdminLeftSideBar() {
    const navigate = useNavigate();
    const { activeLink, setActiveLink } = useContext(Context);


    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    useEffect(() => {
        console.log(activeLink);
    }, [activeLink])

    return (
        <div className="left-sidebar">

            <div className="scroll-sidebar">


                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="nav-devider"></li>
                        <li className="nav-label">Home</li>
                        <li>
                            <Link
                                to="/dashboard"
                                className={activeLink === '/dashboard' ? "active " : ""}
                                onClick={() => handleLinkClick('/dashboard')}
                            >
                                <i className="fa fa-tachometer"></i><span>Dashboard</span>
                            </Link>

                        </li>
                        <li className="nav-label" >Log</li>
                        <li>
                            <Link
                                to="/All_users"
                                className={activeLink === '/All_users' ? "active " : ""}
                                onClick={() => handleLinkClick('/All_users')}
                            >
                                <i className="fa fa-tachometer"></i><span>Users</span>
                            </Link>
                        </li>
                        <li className="nav-label">Products</li>
                        <li>
                            <Link
                                to="/All_Products"
                                className={activeLink === '/All_Products' ? "active " : ""}
                                onClick={() => handleLinkClick('/All_Products')}
                            >
                                <i className="fa fa-tachometer"></i><span>All Products</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/Add_categories"
                                onClick={() => handleLinkClick('/Add_categories')}

                                className={activeLink === '/Add_categories' ? "active " : ""}
                            >
                                <i className="fa fa-tachometer"></i><span>All Categories</span>
                            </Link>

                        </li>
                        <li>
                            <Link
                                to="/Add_Products"
                                className={activeLink === '/Add_Products' ? "active " : ""}
                                onClick={() => handleLinkClick('/Add_Products')}
                            >
                                <i className="fa fa-tachometer"></i><span>Add Products</span>
                            </Link>
                        </li>
                        <li className="nav-label">Menu</li>
                        <li><a href="/All_menu">All Menues</a></li>
                        <li><a href="/Add_menu">Add Menu</a></li>
                        <li> <a href="/All_orders"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>Orders</span></a></li>

                    </ul>
                </nav>

            </div>

        </div>
    )
}

export default AdminLeftSideBar;