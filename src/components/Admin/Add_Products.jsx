import React, { useEffect, useState } from 'react';
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



function Add_Products() {

    const [name, setName] = useState();
    const [description, setDesc] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [stock, setStock] = useState();
    const [Productimage, setProductImages] = useState('');
    const [categoryList, SetcategoryList] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    const token = localStorage.getItem("token");
    // useEffect(()=>{
        //     if(Productimage.length<1) return;
    //     const newImageUrls = [];
    //     Productimage.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    //     setImageUrls(newImageUrls);
    
    // },Productimage);
    
    const formData = new FormData();
    const handleImageChange = (event) => {
     
        
        console.log(event.target.files);
        
        for (let i = 0; i < event.target.files.length; i++) {
            const newFile = event.target.files[i];
            formData.append('product_photo', newFile);
            
        }
        console.log(formData.getAll("product_photo"));
     }

    const handleAddProduct = async () => {
        console.log("function called");


        formData.append('name', name);
        // console.log(formData.name);
        formData.append('description', description);
        // console.log(formData.description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('stock', stock);
        // console.log(product_image);

        const token = localStorage.getItem("token");


        try {
            const response = await fetch("http://3.81.102.85:3000/product/", {
                method: 'POST',
                headers: {
                    authorization: token,
                    // 'Content-Type': 'multipart/form-data'
                },
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                alert('Product added Successfully:');
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const fetchCategories = () => {
        fetch(process.env.REACT_APP_BASE_SERVER_URL + "/category/", {
            headers: {
                Authorization: token
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                SetcategoryList(data);
                setCategory(data[0]._id);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleDropDownChange = (event) => {
        const selectedValue = event.target.value;
        setCategory(selectedValue);
        console.log(category);
    }




    return (
        <>



            <div id="main-wrapper">

                <AdminHeader />

                <AdminLeftSideBar />

                {/* <form method='post' >
                <label name="name" >Name : </label>
                    <input type='text' name="name" placeholder='type name' />

                <label name="description" >Description : </label>
                    <input type='text' name="description" placeholder='type desc' />

                <label name="price" >Price : </label>
                    <input type='number' name="price" placeholder='type price' />

                <label name="category" >Category : </label>
                    <input type='number' name="category" placeholder='type Category Id' />

                <label name="stock" >Price : </label>
                    <input type='number' name="stock" placeholder='Enter Stock' />

                <label name="product_photo" >Image : </label>
                    <input type='file' name="product_photo" placeholder='Image' />
                </form> */}


                <div className="page-wrapper">
                    <div style={{ "paddingTop": "10px" }}>
                        {/* <marquee onMouseOver="this.stop()" onMouseOut="this.start()"> <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> is the sole owner of this script. It is not suitable for personal use. And releasing it in demo version. Besides, it is being provided for free only from <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>. For any of your problems contact us on <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a> facebook group / page or message <a href="https://www.facebook.com/dev.mhrony">MH RONY</a> on facebook. Thanks for staying with <a href="https://www.youtube.com/@codecampbdofficial">Code Camp BD</a>.</marquee> */}
                    </div>

                    <div className="container-fluid">




                        <div className="row">



                            <div className="container-fluid">
                                <div className="col-lg-12" >
                                    <div className="card card-outline-primary" >
                                        <div className="card-header">
                                            <h4 className="m-b-0 text-white">Add Products By Category</h4>
                                        </div>
                                        <form encType="multipart/form-data">
                                            <div className="form-body">

                                                <hr />
                                                <div className="row p-t-20">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="control-label">product Name</label>
                                                            <input type="text" name="name" className="form-control" onChange={(e) => { setName(e.target.value) }} />

                                                            <label className="control-label">product description</label>
                                                            <input type="text" name="description" className="form-control" onChange={(e) => { setDesc(e.target.value) }} />

                                                            <label className="control-label">product price</label>
                                                            <input type="number" name="price" className="form-control" onChange={(e) => { setPrice(e.target.value) }} />

                                                            <label className="control-label">product category : </label>
                                                            {/* <input type="text" name="category" className="form-control" onChange={(e) => { setCategory(e.target.value) }} /> */}
                                                            <select  onChange={handleDropDownChange} value={category}>
                                                            {categoryList.map(cat =>
                                                                <option key={cat._id} value={cat._id}  > {cat.name} </option>)}
                                                            </select>
                                                            <hr/>

                                                            <label className="control-label">product Stock</label>
                                                            <input type="text" name="stock" className="form-control" onChange={(e) => { setStock(e.target.value) }} />

                                                            <label className="control-label">product image</label>
                                                            <input type="file"  name="product_photo" className="form-control" accept="image/*" onChange={handleImageChange}  multiple/>
                                                            {/* {imageUrls.map(imageSrc => <img src={imageSrc}/>)}
                                                            <img src={imageUrls} /> */}

                                                        </div>
                                                    </div>

                                                    {/* <div className="col-md-6">
                                                            <div className="form-group has-danger">
                                                                <label className="control-label">Image</label>
                                                                <input type="file" name="file" id="lastName" className="form-control form-control-danger" placeholder="12n" />
                                                            </div>
                                                        </div> */}

                                                </div>
                                                <div className="form-actions">
                                                    <button type="button" name="submit" className="btn btn-primary" value="Save" onClick={handleAddProduct} />
                                                    {/* <a href="/Add_categories" className="btn btn-inverse">Cancel</a> */}
                                                </div>

                                            </div>
                                        </form>
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

export default Add_Products;