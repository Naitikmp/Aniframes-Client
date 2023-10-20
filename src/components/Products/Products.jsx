import "./Products.scss";
import Product from "./Product/Product"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = ({ products, innerPage, headingText, slice, productsLoading }) => {
    return (<div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}

        {productsLoading ?
            <div className="products-skeleton">
                <span>

                    <Skeleton count={8} containerClassName="flex:1" />
                </span>
            </div>
            :

            <div className="products">


                {products?.data?.slice(0, slice).map(item => (

                    <Product key={item._id} id={item._id} imgSrc={item.images[0]} name={item.name} price={item.price} />

                ))}

            </div>
        }

    </div>);
};

export default Products;
