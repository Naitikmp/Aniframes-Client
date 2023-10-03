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


function All_orders() {
    return (
        <>
            <AdminHeader />
            <AdminLeftSideBar />

            <div class="page-wrapper">
                <div style={{"paddingTop": "10px"}}>
                    {/* <marquee onMouseOver="this.stop()" onMouseOut="this.start()"> <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> is the sole owner of this script. It is not suitable for personal use. And releasing it in demo version. Besides, it is being provided for free only from <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>. For any of your problems contact us on <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> facebook group / page or message <a href="https://www.facebook.com/dev.mhrony">MH RONY</a> on facebook. Thanks for staying with <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>.</marquee> */}
                </div>




                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">


                            <div class="col-lg-12">
                                <div class="card card-outline-primary">
                                    <div class="card-header">
                                        <h4 class="m-b-0 text-white">All Orders</h4>
                                    </div>

                                    <div class="table-responsive m-t-40">
                                        <table id="myTable" class="table table-bordered table-striped">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th>User</th>
                                                    <th>Title</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Address</th>
                                                    <th>Status</th>
                                                    <th>Reg-Date</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                Dynamic content using Api should come!!

                                                {/* <?php
												$sql="SELECT users.*, users_orders.* FROM users INNER JOIN users_orders ON users.u_id=users_orders.u_id ";
												$query=mysqli_query($db,$sql);
												
													if(!mysqli_num_rows($query) > 0 )
														{
															echo '<td colspan="8"><center>No Orders</center></td>';
														}
													else
														{				
																	while($rows=mysqli_fetch_array($query))
																		{
																																							
																				?>
                                                            <?php
																					echo ' <tr>
																					           <td>'.$rows['username'].'</td>
																								<td>'.$rows['title'].'</td>
																								<td>'.$rows['quantity'].'</td>
																								<td>$'.$rows['price'].'</td>
																								<td>'.$rows['address'].'</td>';
																								?>
                                                            <?php 
																			$status=$rows['status'];
																			if($status=="" or $status=="NULL")
																			{
																			?>
                                                            <td> <button type="button" class="btn btn-info"><span class="fa fa-bars" aria-hidden="true"></span> Dispatch</button></td>
                                                            <?php 
																			  }
																			   if($status=="in process")
																			 { ?>
                                                            <td> <button type="button" class="btn btn-warning"><span class="fa fa-cog fa-spin" aria-hidden="true"></span> On The Way!</button></td>
                                                            <?php
																				}
																			if($status=="closed")
																				{
																			?>
                                                            <td> <button type="button" class="btn btn-primary"><span class="fa fa-check-circle" aria-hidden="true"></span> Delivered</button></td>
                                                            <?php 
																			} 
																			?>
                                                            <?php
																			if($status=="rejected")
																				{
																			?>
                                                            <td> <button type="button" class="btn btn-danger"> <i class="fa fa-close"></i> Cancelled</button></td>
                                                            <?php 
																			} 
																			?>
                                                            <?php																									
																							echo '	<td>'.$rows['date'].'</td>';
																							?>
                                                            <td>
                                                                <a href="delete_orders.php?order_del=<?php echo $rows['o_id'];?>" onclick="return confirm('Are you sure?');" class="btn btn-danger btn-flat btn-addon btn-xs m-b-10"><i class="fa fa-trash-o" style="font-size:16px"></i></a>
                                                                <?php
																								echo '<a href="view_order.php?user_upd='.$rows['o_id'].'" " class="btn btn-info btn-flat btn-addon btn-sm m-b-10 m-l-5"><i class="fa fa-edit"></i></a>
																									</td>
																									</tr>';
																					 
																						
																						
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




            {/* <?php include "include/footer.php" ?> */}

        
        </>
    )
}

export default All_orders;