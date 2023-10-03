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


function All_menu() {

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
                                        <h4 className="m-b-0 text-white">All Menu</h4>
                                    </div>


                                    <div className="table-responsive m-t-40">
                                        <table id="example23" className="display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>Restaurant</th>
                                                    <th>Dish</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                    <th>Image</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                table data dynamically using Api


                                                {/* <?php
												$sql="SELECT * FROM dishes order by d_id desc";
												$query=mysqli_query($db,$sql);
												
													if(!mysqli_num_rows($query) > 0 )
														{
															echo '<td colspan="11"><center>No Menu</center></td>';
														}
													else
														{				
																	while($rows=mysqli_fetch_array($query))
																		{
																				$mql="select * from restaurant where rs_id='".$rows['rs_id']."'";
																				$newquery=mysqli_query($db,$mql);
																				$fetch=mysqli_fetch_array($newquery);
																				
																				
																					echo '<tr><td>'.$fetch['title'].'</td>
																					
																								<td>'.$rows['title'].'</td>
																								<td>'.$rows['slogan'].'</td>
																								<td>$'.$rows['price'].'</td>
																								
																								
																								<td><div className="col-md-3 col-lg-8 m-b-10">
																								<center><img src="Res_img/dishes/'.$rows['img'].'" className="img-responsive  radius" style="max-height:100px;max-width:150px;" /></center>
																								</div></td>
																								
																							
																									 <td><a href="delete_menu.php?menu_del='.$rows['d_id'].'" className="btn btn-danger btn-flat btn-addon btn-xs m-b-10"><i className="fa fa-trash-o" style="font-size:16px"></i></a> 
																									 <a href="update_menu.php?menu_upd='.$rows['d_id'].'" className="btn btn-info btn-flat btn-addon btn-sm m-b-10 m-l-5"><i className="fa fa-edit"></i></a>
																									</td></tr>';
																					 
																						
																						
																		}	
														}
												
											
											?> */}







                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>



















                        </div>

                    </div>
                </div>
            </div>

            Footer to be included
        </div>
            
        {/* // <?php  include "include/footer.php"?> */}
        

             </>       

                    
    )
}

export default All_menu;