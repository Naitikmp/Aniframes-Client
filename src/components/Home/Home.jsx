import { useEffect ,useContext} from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const {categories , setCategories ,products ,setProducts,getCartItems} =useContext(Context)

    useEffect(() => {
        getCategories();
        getProducts();
        // getCartItems();
    } , []);

    const getCategories = () =>{
        fetchDataFromApi("/category/").then((res) => {
            // console.log(res);   
            setCategories(res);
    }).catch((error) => {
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          console.error("Server Response Status:", error.response.status);
          console.error("Server Response Data:", error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("No Response Received. The request was made, but there's no response.");
        } else {
          // Something else went wrong
          console.error("Error:", error.message);
        }
      });
    }

    const getProducts = () =>{
        fetchDataFromApi("/product/").then((res) => {
            // console.log(res);
            setProducts(res);
    }).catch((error) => {
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          console.error("Server Response Status:", error.response.status);
          console.error("Server Response Data:", error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("No Response Received. The request was made, but there's no response.");
        } else {
          // Something else went wrong
          console.error("Error:", error.message);
        }
      });
    }

    return (
        <>
        <Header />  
        <div>

            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products products={products} headingText="Popular Products"/>    
            </div>
        </div>
    </div>
    {/* <Newsletter /> */}
    <Footer />
    </>
    );
};

export default Home;
