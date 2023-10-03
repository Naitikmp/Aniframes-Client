import React, { useEffect, useState } from 'react';
import "./css/lib/bootstrap/bootstrap.min.css";
import "./css/helper.css";
import "./css/style.css";
// import "./js/lib/jquery/jquery.min.js";
import { Link } from 'react-router-dom';

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
import { useNavigate } from 'react-router-dom';

function All_Products() {

    const token = localStorage.getItem("token");
    const [ProductsList, setProductsList] = useState([]);

    useEffect(() => {
        try {
            fetch("http://3.81.102.85:3000/product/", {
                method: 'GET',
                headers: {
                    Authorization: token
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    setProductsList(data.data);
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

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12" style={{ "overflow": "scroll" }}>



                            <div className="col-lg-12">
                                <div className="card card-outline-primary">
                                    <div className="card-header">
                                        <h4 className="m-b-0 text-white">All Restaurant</h4>
                                    </div>

                                    <div className="table-responsive m-t-40" style={{ "marginLeft": "200px", "overflow": "scroll" }}>
                                        <table id="example23" className="display nowrap table table-hover table-striped table-bordered" cellSpacing="0" width="100%">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Status</th>
                                                    <th>Name</th>
                                                    <th>DESC</th>
                                                    <th>Price</th>
                                                    <th>Category</th>
                                                    <th>Images</th>
                                                    <th>Stock</th>
                                                    <th>Ratings</th>
                                                    <th>reviews</th>

                                                </tr>
                                            </thead>

                                            <tbody>




                                                {!ProductsList
                                                    ?
                                                    <td colspan="11"><center>Wait A minute</center></td>
                                                    :
                                                    ProductsList.map(product => (

                                                        <tr key={product._id} >
                                                            <td><Link to={`/Update_Product/${product._id}`}>{product._id}</Link></td>
                                                            <td>{product.status.toString()}</td>
                                                            <td>{product.name}</td>
                                                            <td>{product.description}</td>
                                                            <td>{product.price}</td>
                                                            <td>{product.category[0].name}</td>
                                                            <td><div className="col-md-3 col-lg-8 m-b-10">
                                                                {product.images.map(img => (
                                                                    <center><img src={img} className="img-responsive radius" style={{ "minWidth": "150px", "minHeight": "100px", "margin": "5px" }} /></center>))}
                                                            </div></td>
                                                            <td>{product.stock}</td>
                                                            <td>{product.ratings}</td>
                                                            {/* <td>{product.reviews}</td> */}
                                                            <td>Good Product</td>
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






        </>

    )
}

export default All_Products;