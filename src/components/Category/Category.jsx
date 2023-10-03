import { useParams } from "react-router-dom";
import "./Category.scss";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import Product from "../Products/Product/Product"


const Category = () => {
    
    const {id} =useParams();
    const {data} =useFetch('/category/byid?id='+id);
    let productData =useFetch('/product/');

    productData = productData?.data?.data;
    console.log(productData);
    console.log(useFetch('/product/'));

    productData = productData?.filter((product)=> product.category[0]._id === id);
    console.log(productData);
    
    return (

        <>
        <Header/>
        <div className="category-main-content">
            <div className="category-title">
                {data?.name}
            </div>
            <div className="products">
                {productData?.map(item => (
                    <Product key={item._id} id={item._id} imgSrc={item.images[0]} name={item.name} price={item.price}/>
                    

                ))}
                
            </div>
        </div>
        <Newsletter />
        <Footer />
        </>
    )
};

export default Category;
