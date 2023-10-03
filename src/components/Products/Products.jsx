import "./Products.scss";
import Product from "./Product/Product"
const Products = ({ products,innerPage,headingText ,slice}) => {
    return (<div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products?.data?.slice(0,slice).map(item => (
                    <Product key={item._id} id={item._id} imgSrc={item.images[0]} name={item.name} price={item.price}/>

                ))}
                
            </div>

    </div>);
};

export default Products;
