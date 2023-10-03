import React, { useState, useEffect } from 'react';
import "./css/lib/bootstrap/bootstrap.min.css";
import "./css/helper.css";
import "./css/style.css";
// import "./js/lib/jquery/jquery.min.js";
import { useNavigate ,Link} from 'react-router-dom';

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
import AdminHeader from './AdminHeader';
import AdminLeftSideBar from './AdminLefSideBar';
import Login from '../Login/Login';

function All_users() {

    const token = localStorage.getItem("token");
    const [userList,setuserList] =useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            fetch(process.env.REACT_APP_BASE_SERVER_URL + "/admin/getalluser", {
                headers: {
                    Authorization: token
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setuserList(data);
                })
        } catch (error) {
            console.log('Error fetching data:', error);

        }
        
            
    }, [])


    return (
        <>
            <div id="main-wrapper">
                <AdminHeader />
                <AdminLeftSideBar />


                <div className="page-wrapper">
                    <div style={{ "paddingTop": "10px" }}>
                        {/* <marquee onMouseOver="this.stop()" onMouseOut="this.start()"> <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> is the sole owner of this script. It is not suitable for personal use. And releasing it in demo version. Besides, it is being provided for free only from <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>. For any of your problems contact us on <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> facebook group / page or message <a href="https://www.facebook.com/dev.mhrony">MH RONY</a> on facebook. Thanks for staying with <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>.</marquee> */}
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">

                                <div className="col-lg-12">
                                    <div className="card card-outline-primary">
                                        <div className="card-header">
                                            <h4 className="m-b-0 text-white">All Users</h4>
                                        </div>

                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-bordered table-striped table-hover">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Username</th>
                                                        <th>Email</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                {!userList ? <tr>Wait A minute</tr> :
                                                
                                                userList.map(user => (
                                                    
                                                    <tr key={user._id}>
                                                        <td ><Link to={`/user-details/${user._id}`}>{user._id}</Link></td>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                ))
                                                }
                                                    


                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}


export default All_users;