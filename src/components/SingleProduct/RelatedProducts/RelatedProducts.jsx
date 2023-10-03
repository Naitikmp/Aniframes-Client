import Products from "../../Products/Products"
import { useEffect ,useContext} from "react";

import { fetchDataFromApi } from "../../../utils/api";
import { Context } from "../../../utils/context";
import useFetch from "../../../hooks/useFetch";
import Product from "../../Products/Product/Product";
// import { useEffect } from "react";
const RelatedProducts = ({productId,categoryId}) => {

    let productData =useFetch('/product/');

    productData = productData?.data?.data;
    console.log(productData);
    console.log(useFetch('/product/'));

    productData = productData?.filter((product)=> product.category[0]._id === categoryId);
    console.log(productData);

   
    // const product = data.data;
    // console.log(product);
    return (
        <div className="related-products">
        <div className="sec-heading">Related Products</div>
  
        <div className="products">
                {productData?.slice(0,4)?.map(item => (
                    <Product key={item._id} id={item._id} imgSrc={item.images[0]} name={item.name} price={item.price}/>
                    

                ))}
                
            </div>
    </div>
    )
};

export default RelatedProducts;
