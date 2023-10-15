import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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



function Update_category(props) {

    const [name, setName] = useState();
    const [description, setDesc] = useState();
    const [categoryData, SetcategoryData] = useState([]);
    const [categoryList, SetcategoryList] = useState([]);
    const [categoryImage, SetcategoryImage] = useState();
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGUyZWUzYWVhNDUxZDk1N2Y3MDJjOGYiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im1hbmF2LmhjZTIwQHNvdC5wZHB1LmFjLmluIiwidXNlcm5hbWUiOiJtYW5hdnB0bCIsImlhdCI6MTY5MjcyNzQ3Mn0.eT55uaSYBYZ4Qe1BSAFGf3OXEFZgmg98sjlPeUGqmAg';



    const { id } = useParams();

    const UpdateCategory = async () => {


        // console.log(process.env.REACT_APP_BASE_SERVER_URL + "/category/?id="+extractedUserId);
        const formData = new FormData();
            formData.append("name",name);
            formData.append("description",description);
            formData.append("category_photo",categoryImage);

        try {

            let result = await fetch(process.env.REACT_APP_BASE_SERVER_URL+"/category/?id=" + id, {
                method: 'PUT',
                headers: {
                    authorization: token,
                    // 'Content-Type': 'application/json'
                },
                body: formData

            });
            if (result.ok) {
                alert("Category Updated Successfully!");
                fetchCategories();
            }
            else {
                alert("Error Updating Category!")
            }
        }
        catch (error) {
            alert(error);
        }

    }

    const fetchCategoryData = () => {
        fetch(process.env.REACT_APP_BASE_SERVER_URL+"/category/byid?id=" + id, {
            headers: {
                Authorization: token
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                SetcategoryData(data);
                setName(data.name);
                setDesc(data.description);
                SetcategoryImage(data.image)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const fetchCategories = () => {
        fetch(process.env.REACT_APP_BASE_SERVER_URL+"/category/", {
            headers: {
                Authorization: token
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                SetcategoryList(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        fetchCategoryData();
        fetchCategories();

    }, []);

    const handleDeleteCategory = async (categoryId) => {
        
        try {
            let result = await fetch(process.env.REACT_APP_BASE_SERVER_URL + `/category/?id=${categoryId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: token,
                },
            });

            if (result.ok) {
                alert("Category Deleted Successfully!");
                fetchCategories(); // Fetch updated category list after deletion
            } else {
                alert("Error Deleting Category!");
            }
        } catch (error) {
            alert(error);
        }
    }






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



                            <div className="container-fluid">





                                <div className="col-lg-12">
                                    <div className="card card-outline-primary">
                                        <div className="card-header">
                                            <h4 className="m-b-0 text-white">Update Products Category</h4>
                                        </div>
                                        <form action='' method='post' enctype="multipart/form-data">
                                            <div className="form-body">

                                                <hr />
                                                <div className="row p-t-20">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="control-label">Category</label>
                                                            <input type="text" name="name" className="form-control" onChange={(e) => { setName(e.target.value) }} defaultValue={categoryData.name} />
                                                        </div>
                                                    </div>

                                                    {/* <div className="col-md-6">
                                                            <div className="form-group has-danger">
                                                                <label className="control-label">Image</label>
                                                                <input type="file" name="file" id="lastName" className="form-control form-control-danger" placeholder="12n" />
                                                            </div>
                                                        </div> */}

                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="control-label">Description</label>
                                                            <input type="text" name="description" className="form-control" onChange={(e) => { setDesc(e.target.value) }} defaultValue={categoryData.description} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="control-label">Update Image</label>
                                                            <input type="file" name="description" className="form-control" onChange={(e) => { SetcategoryImage(e.target.files[0]) }}  />
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="form-actions">
                                                    <button type="button" name="submit" className="btn btn-primary" value="Update" onClick={UpdateCategory} />
                                                    {/* <a href="/Add_categories" className="btn btn-inverse">Cancel</a> */}
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12">


                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Listed Categories</h4>

                                        <div className="table-responsive m-t-40" style={{ textAlign: "center" }}>
                                            <table id="myTable" className="table table-bordered table-hover table-striped" >
                                                <thead className="thead-dark">
                                                    <tr>

                                                        <th>Category ID</th>
                                                        <th>Category Name</th>

                                                        <th>Description</th>
                                                        <th>Image</th>

                                                        <th colSpan="2">Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {!categoryList ? <tr>Wait A minute</tr> :

                                                        categoryList.map(category => (

                                                            <tr key={category._id}>
                                                                <td>{category._id}</td>
                                                                <td>{category.name}</td>
                                                                <td>{category.description}</td>
                                                                <td><center><img src={category.image} className="img-responsive radius" style={{"minWidth":"150px","minHeight":"100px","margin":"5px"}} /></center></td>
                                                                <td><button onClick={() => handleDeleteCategory(category._id)}>Delete</button></td>

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

export default Update_category;