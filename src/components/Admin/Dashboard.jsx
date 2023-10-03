import React from "react";

import { useNavigate } from "react-router-dom";
import "./css/lib/bootstrap/bootstrap.min.css";
import "./css/helper.css";
import "./css/style.css";
import icnImg from "./images/icn.png";
import userIcn from "./images/bookingSystem/user-icn.png";
import AdminHeader from "./AdminHeader";
import AdminLeftSideBar from "./AdminLefSideBar";

function Dashboard() {
    const navigate = useNavigate();
    return (
            <>

            
            <div id="main-wrapper">

                <AdminHeader />

                <AdminLeftSideBar />

                <div className="page-wrapper">


                    <div style={{"paddingTop": "10px"}} >
                        {/* <marquee onMouseOver="this.stop()" onMouseOut="this.start()"> <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> is the sole owner of this script. It is not suitable for personal use. And releasing it in demo version. Besides, it is being provided for free only from <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>. For any of your problems contact us on <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> facebook group / page or message <a href="https://www.facebook.com/dev.mhrony">MH RONY</a> on facebook. Thanks for staying with <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>.</marquee> */}
                    </div>

                    <div className="container-fluid">
                        <div className="col-lg-12">
                            <div className="card card-outline-primary">
                                <div className="card-header">
                                    <h4 className="m-b-0 text-white">Admin Dashboard</h4>
                                </div>
                                <div className="row">

                                    <div className="col-md-3">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-home f-s-40 "></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!
                                                        {/* <?php $sql="select * from restaurant";
												$result=mysqli_query($db,$sql); 
													$rws=mysqli_num_rows($result);
													
													echo $rws;?> */}
                                                    </h2>
                                                    <p className="m-b-0">Restaurants</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-cutlery f-s-40" aria-hidden="true"></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!

                                                        {/* <?php $sql="select * from dishes";
												$result=mysqli_query($db,$sql); 
													$rws=mysqli_num_rows($result);
													
													echo $rws;?> */}
                                                    </h2>
                                                    <p className="m-b-0">Dishes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-users f-s-40"></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!
                                                        {/* <?php $sql="select * from users";
												$result=mysqli_query($db,$sql); 
													$rws=mysqli_num_rows($result);
													
													echo $rws;?> */}
                                                    </h2>
                                                    <p className="m-b-0">Users</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-shopping-cart f-s-40" aria-hidden="true"></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!

                                                        {/* <?php $sql="select * from users_orders";
												$result=mysqli_query($db,$sql); 
													$rws=mysqli_num_rows($result);
													
													echo $rws;?> */}
                                                    </h2>
                                                    <p className="m-b-0">Total Orders</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-th-large f-s-40" aria-hidden="true"></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!

                                                        {/* <?php $sql="select * from res_category";
												$result=mysqli_query($db,$sql); 
													$rws=mysqli_num_rows($result);
													
													echo $rws;?> */}
                                                    </h2>
                                                    <p className="m-b-0">Restro Categories</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-spinner f-s-40" aria-hidden="true"></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!


                                                        {/* <?php $sql="select * from users_orders WHERE status = 'in process' ";
												$result=mysqli_query($db,$sql); 
													$rws=mysqli_num_rows($result);
													
													echo $rws;?> */}
                                                    </h2>
                                                    <p className="m-b-0">Processing Orders</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-check f-s-40" aria-hidden="true"></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!

                                                        {/* <?php $sql="select * from users_orders WHERE status = 'closed' ";
												$result=mysqli_query($db,$sql); 
													$rws=mysqli_num_rows($result);
													
													echo $rws;?> */}
                                                    </h2>
                                                    <p className="m-b-0">Delivered Orders</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-times f-s-40" aria-hidden="true"></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!

                                                        {/* <?php $sql="select * from users_orders WHERE status = 'rejected' ";
                                        $result=mysqli_query($db,$sql); 
                                            $rws=mysqli_num_rows($result);
                                            
                                            echo $rws;?> */}
                                                    </h2>
                                                    <p className="m-b-0">Cancelled Orders</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card p-30">
                                            <div className="media">
                                                <div className="media-left meida media-middle">
                                                    <span><i className="fa fa-usd f-s-40" aria-hidden="true"></i></span>
                                                </div>
                                                <div className="media-body media-text-right">
                                                    <h2>
                                                        Something dynamic using api should come!!

                                                        {/* <?php 
                                        $result = mysqli_query($db, 'SELECT SUM(price) AS value_sum FROM users_orders WHERE status = "closed"'); 
                                        $row = mysqli_fetch_assoc($result); 
                                        $sum = $row['value_sum'];
                                        echo $sum;
                                        ?> */}

                                                    </h2>
                                                    <p className="m-b-0">Total Earnings</p>
                                                </div>
                                            </div>
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

            export default Dashboard;