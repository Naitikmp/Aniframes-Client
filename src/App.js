import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Categories from "./components/Categories/Categories";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import ScrollToTop from "./scrollToTop";
import SignUp from "./components/SignUp/SignUp";
import PrivateComponent from "./components/PrivateComponent/PrivateComponent";
import Login from "./components/Login/Login";
import Add_menu from "./components/Admin/Add_menu";
import All_menu from "./components/Admin/All_menu";
import All_orders from "./components/Admin/All_orders";
import Dashboard from "./components/Admin/Dashboard";
import Add_categories from "./components/Admin/Add_categories";
import All_users from "./components/Admin/All_users";
import AboutUs from "./components/About Us/AboutUs";
import User_Details from "./components/Admin/User_Details";
import Update_category from "./components/Admin/Update_category";
import AdminLogin from "./components/Admin/AdminLogin";
import All_Products from "./components/Admin/All_Products";
import Add_Products from "./components/Admin/Add_Products";
import Update_product from "./components/Admin/Update_Product";
import CheckOut from "./components/Checkout/Checkout";
import Order from "./components/Order/Order";
import ThankYou from "./components/Order/orderConfirmation/Thankyou";
import PrivacyPolicy from "./components/Privacy Policy/PrivacyPolicy";
// import { useLocation } from "react-router-dom";


function App() {

    return (

        <BrowserRouter>
            <AppContext>
                {/* <Header /> */}
                {/* <ScrollToTop /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/thankyou" element={<ThankYou />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    {/* <Route path="/Checkout" element={<CheckOut />} /> */}
                    <Route path="/Checkout" element={<CheckOut />}/>
                    <Route element={<PrivateComponent />} >
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/Add_menu" element={<Add_menu />} />
                        <Route path="/Add_categories" element={<Add_categories />} />
                        <Route path="/Add_Products" element={<Add_Products />} />
                        <Route path="/All_Products" element={<All_Products />} />
                        <Route path="/Update_Product/:id" element={<Update_product />} />
                        <Route path="/All_menu" element={<All_menu />} />
                        <Route path="/All_orders" element={<All_orders />} />
                        <Route path="/All_users" element={<All_users />} />
                        <Route path="/user-details/:id" element={<User_Details />} />
                        <Route path="/category_update/:id" element={<Update_category />} />
                        <Route path="/admin" element={<AdminLogin />} />
                    </Route>

                </Routes>
                {/* <NewsLetter />
                <Footer /> */}
            </AppContext>
        </BrowserRouter >

    );
}

export default App;
