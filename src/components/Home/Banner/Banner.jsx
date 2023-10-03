import "./Banner.scss";
import headphone from "../../../assets/banner-img.png";
import login_registerImg from "../../../assets/login_register.png";
import BannerImg from "../../../assets/Test images/banner_img.png"
import BannerImg1 from "../../../assets/Test images/banner_img1.png"
import BannerImg2 from "../../../assets/Test images/banner_img2.png"
import BannerImg3 from "../../../assets/Test images/banner_img3.png"
import { Carousel } from "react-responsive-carousel";
// import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Banner = () => {
    return <div className="hero-banner">
    <Carousel axis="horizontal" showArrows={true}   showStatus={false} showIndicators ={true} showThumbs={false} infiniteLoop={true} autoPlay={true} useKeyboardArrows={true}  stopOnHover={true} swipeable={true} dynamicHeight={true} emulateTouch={true} centerMode={true} centerSlidePercentage={85}
    
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                    hasPrev && (
                                        <button type="button" onClick={onClickHandler} title={label} style={{
                                            color:'white',
                                            position: 'absolute',
                                            zIndex: 2,
                                            top: 'calc(50% - 15px)',
                                            fontSize: '25px',
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer', left: 5
                                        }}>
                                            <i className="fa fa-angle-left" />
                                        </button>
                                    )
                                }


                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                    hasNext && (
                                        <button type="button" onClick={onClickHandler} title={label} style={{
                                            color:'white',
                                            position: 'absolute',
                                            zIndex: 2,
                                            top: 'calc(50% - 15px)',
                                            fontSize: '25px',
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer', right: 5
                                        }}>
                                            <i className="fa fa-angle-right" />
                                        </button>
                                    )
                                }




                                // renderIndicator={(onClickHandler, isSelected, index, label) => {
                                //     if (isSelected) {
                                //         return (
                                //             <li
                                //             style={{
                                //                 width: 8,
                                //                 height: 8,
                                //                 display: 'inline-block',
                                //                 margin: '0 8px',
                                //                 background: '#000',
                                //             }}
                                //                 aria-label={`Selected: ${label} ${index + 1}`}
                                //                 title={`Selected: ${label} ${index + 1}`}
                                //             />
                                //         );
                                //     }
                                //     return (
                                //         <li
                                //             style={{
                                //                 background: '#fff',
                                //                 width: 8,
                                //                 height: 8,
                                //                 display: 'inline-block',
                                //                 margin: '0 8px',
                                //             }}
                                //             onClick={onClickHandler}
                                //             onKeyDown={onClickHandler}
                                //             value={index}
                                //             key={index}
                                //             role="button"
                                //             tabIndex={0}
                                //             title={`${label} ${index + 1}`}
                                //             aria-label={`${label} ${index + 1}`}
                                //         />
                                //     );
                                // }}

    
    
    >
        {/* <div className="content">
            <div className="text-content">
                <h1>Sales</h1>
                <p> a complete ecommerce website from scratch,
                 In this video we will cover all important topics of
                  react js such as jsx, components, props, state,  
                  lifecycle of components.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={headphone} alt="" />
        </div> */}
        {/* <div className="content">
            <div className="text-content">
                <h1>Sales</h1>
                <p> a complete ecommerce website from scratch,
                 In this video we will cover all important topics of
                  react js such as jsx, components, props, state,  
                  lifecycle of components.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
        </div> */}
        <div className="imageBanner">
            <img className="banner-img1" src={login_registerImg} alt="" />
            </div>
        {/* <div className="content">
            <div className="text-content">
                <h1>Sales</h1>
                <p> a complete ecommerce website from scratch,
                 In this video we will cover all important topics of
                  react js such as jsx, components, props, state,  
                  lifecycle of components.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
        </div> */}
        <div className="imageBanner">
            <img className="banner-img" src={BannerImg} alt="" />
            </div>
        <div className="imageBanner">
            <img className="banner-img" src={BannerImg1} alt="" />
            </div>
        <div className="imageBanner">
            <img className="banner-img" src={BannerImg3} alt="" />
            </div>
        <div className="imageBanner">
            <img className="banner-img" src={BannerImg2} alt="" />
            </div>
        </Carousel>
    </div>;
};

export default Banner;


