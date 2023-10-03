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
import AdminHeader from './AdminHeader';
import AdminLeftSideBar from './AdminLefSideBar';


function Add_menu ()  {
    return (
        <>

            {/* <div className="preloader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                </svg>
            </div> */}

            <div id="main-wrapper">

                <AdminHeader />

                <AdminLeftSideBar />

                <div className="page-wrapper">
                    <div style={{paddingTop:"10px",}}>
                        {/* <marquee onMouseEnter={this.stop()} onMouseOut="this.start()"> <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> is the sole owner of this script. It is not suitable for personal use. And releasing it in demo version. Besides, it is being provided for free only from <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>. For any of your problems contact us on <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> facebook group / page or message <a href="https://www.facebook.com/dev.mhrony">MH RONY</a> on facebook. Thanks for staying with <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>.</marquee> */}
                    </div>




                    <div className="container-fluid">



                        <div className="col-lg-12">
                            <div className="card card-outline-primary">
                                <div className="card-header">
                                    <h4 className="m-b-0 text-white">Add Menu</h4>
                                </div>
                                <div className="card-body">
                                    <form action='' method='post' enctype="multipart/form-data">
                                        <div className="form-body">

                                            <hr />
                                            <div className="row p-t-20">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Dish Name</label>
                                                        <input type="text" name="d_name" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group has-danger">
                                                        <label className="control-label">Description</label>
                                                        <input type="text" name="about" className="form-control form-control-danger" />
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="row p-t-20">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Price </label>
                                                        <input type="text" name="price" className="form-control" placeholder="$" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group has-danger">
                                                        <label className="control-label">Image</label>
                                                        <input type="file" name="file" id="lastName" className="form-control form-control-danger" placeholder="12n" />
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="row">








                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="control-label">Select Restaurant</label>
                                                        <select name="res_name" className="form-control custom-select" data-placeholder="Choose a Category" tabindex="1">
                                                            <option>--Select Restaurant--</option>
                                                            <option>Should be called dynamically by api</option>


                                                            {/* <?php $ssql = "select * from restaurant";
                                                $res = mysqli_query($db, $ssql);
                                                while ($row = mysqli_fetch_array($res)) {
                                                    echo ' <option value="' . $row['rs_id'] . '">' . $row['title'] . '</option>';;
                                                }

                                                ?>  */}
                                                        </select>
                                                    </div>
                                                </div>


                                                {/* <!-- manav added new category code --> */}
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="control-label">Select Category</label>
                                                        <select name="category_name" className="form-control custom-select" data-placeholder="Choose a Category" tabindex="1">
                                                            <option>--Select Category--</option>
                                                            <option>Should be called dynamically by using api</option>
                                                            {/* <?php $ssql = "select * from res_category";
                                                $res = mysqli_query($db, $ssql);
                                                while ($row = mysqli_fetch_array($res)) {
                                                    echo ' <option value="' . $row['c_id'] . '">' . $row['c_name'] . '</option>';;
                                                }

                                                ?> */}
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                        {/* </div> */}
                                        <div className="form-actions">
                                            <input type="submit" name="submit" className="btn btn-primary" value="Save" />
                                            {/* <a href="add_menu.php" className="btn btn-inverse">Cancel</a> */}
                                        </div>

                                    </form>
                                </div>


                            </div>
                        </div>
                        <div>Component to add a footer component</div>
                        {/* <?php include "include/footer.php" ?> */}
                    </div>
                </div>
            </div>
        

{/* <script src="js/lib/jquery/jquery.min.js"></script>
<script src="js/lib/bootstrap/js/popper.min.js"></script>
<script src="js/lib/bootstrap/js/bootstrap.min.js"></script>
<script src="js/jquery.slimscroll.js"></script>
<script src="js/sidebarmenu.js"></script>
<script src="js/lib/sticky-kit-master/dist/sticky-kit.min.js"></script>
<script src="js/custom.min.js"></script> */}



        </>
    );
};

export default Add_menu;
