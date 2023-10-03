import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";

import "./SingleProduct.scss";
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import { Carousel } from "react-responsive-carousel";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { data } = useFetch('/product/byid?id=' + id);
    // console.log(data);
    const { handleAddToCart } = useContext(Context);
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };
    const decrement = () => {

        setQuantity((prevState) => {
            if (prevState === 1) return 1
            return prevState - 1
        });
    };

    if (!data) return;
    const product = data.data[0];



    return (
        <>
            <Header />
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <Carousel axis="horizontal" showArrows={true} showStatus={false} showIndicators={false} showThumbs={true} infiniteLoop={true} autoPlay={false} useKeyboardArrows={true} stopOnHover={true} swipeable={true} dynamicHeight={true} emulateTouch={true}
                                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                    hasPrev && (
                                        <button type="button" onClick={onClickHandler} title={label} style={{
                                            color:'#99abb4',
                                            position: 'absolute',
                                            zIndex: 2,
                                            top: 'calc(50% - 15px)',
                                            fontSize: '30px',
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer', left: 15
                                        }}>
                                            <i className="fa fa-angle-left" />
                                        </button>
                                    )
                                }


                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                    hasNext && (
                                        <button type="button" onClick={onClickHandler} title={label} style={{
                                            color:'#99abb4',
                                            position: 'absolute',
                                            zIndex: 2,
                                            top: 'calc(50% - 15px)',
                                            fontSize: '30px',
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer', right: 15
                                        }}>
                                            <i className="fa fa-angle-right" />
                                        </button>
                                    )
                                }




                                renderIndicator={(onClickHandler, isSelected, index, label) => {
                                    if (isSelected) {
                                        return (
                                            <li
                                            style={{
                                                width: 8,
                                                height: 8,
                                                display: 'inline-block',
                                                margin: '0 8px',
                                                background: '#000',
                                                opacity:1
                                            }}
                                                // aria-label={`Selected: ${label} ${index + 1}`}
                                                // title={`Selected: ${label} ${index + 1}`}
                                            />
                                        );
                                    }
                                    return (
                                        <li
                                            style={{
                                                background: '#fff',
                                                width: 8,
                                                height: 8,
                                                display: 'inline-block',
                                                margin: '0 8px',
                                            }}
                                            onClick={onClickHandler}
                                            onKeyDown={onClickHandler}
                                            value={index}
                                            key={index}
                                            role="button"
                                            tabIndex={0}
                                            title={`${label} ${index + 1}`}
                                            aria-label={`${label} ${index + 1}`}
                                        />
                                    );
                                }}

                            >
                                {product?.images?.map(imag => {

                                    return <img src={imag} className="carousel-images"/>

                                })}

                            </Carousel>
                            {/* <img src={product.images[0]} /> */}
                        </div>


                        <div className="right">
                            <span className="name">{product.name}</span>
                            <span className="price">&#8377;{product.price}</span>
                            <span className="desc">{product.description}</span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span onClick={decrement}>-</span>
                                    <span>{quantity}</span>
                                    <span onClick={increment}>+</span>
                                </div>
                                <button className="add-to-cart-button" onClick={() => {
                                    handleAddToCart(data.data[0], quantity);
                                    setQuantity(1);
                                }}>
                                    <FaCartPlus size={20} />
                                    Add to Cart
                                </button>
                            </div>

                            <span className="divider" />

                            <div className="info-item">
                                <span className="text-bold">
                                    Category :{' '}
                                    <span>name</span>
                                </span>
                            </div>
                            <div className="info-item">
                                <span className="text-bold">
                                    Share:
                                    <span className="social-icons">
                                        <FaFacebookF size={16} />
                                        <FaTwitter size={16} />
                                        <FaInstagram size={16} />
                                        <FaLinkedinIn size={16} />
                                        <FaPinterest size={16} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <RelatedProducts productId={id}
                        categoryId={product.category[0]._id} />
                </div>
            </div>;
            {/* <Newsletter/> */}
            <Footer />
        </>
    );
};

export default SingleProduct;
