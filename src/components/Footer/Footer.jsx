import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaFacebookF, FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const style = { color: "#ef1400", fontSize: "1.5em", border: "1px solid grey", padding: "4px" }
const style2 = { color: "white", fontSize: "2.5em", border: "1px solid grey", padding: "4px" }
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer1">
            <div className="footer-content">

                <div className="col1">
                    <div className="title1">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow style={style} />
                        <div className="text1">
                            Unjha-384170 , Mehsana, Gujarat, India.
                        </div>
                    </div>
                    <div className="c-item">
                        <FaPhoneAlt style={style} />
                        <a href={`tel:${+919574519929}`}><div className="text1"> : 957 451 99 29</div></a>
                    </div>
                    <div className="c-item">
                        <FaEnvelope style={style} />
                        <a href="mailto:aniframe20@gmail.com" >
                            <div className="text1">aniframe20@gmail.com</div>
                        </a>
                    </div>
                </div>



                <div className="col1">
                    <div className="title1">Follow Us on:</div>

                    <div className="c-item">
                        <a href="https://www.facebook/aniframes.com">
                            <FaFacebookF style={style2} />
                        </a>
                        <a href="https://www.instagram.com/ani_frames20">
                            <FaInstagram style={style2} />
                        </a>
                    </div>


                </div>

                <div className="col1">
                    <div className="title1">Categories</div>
                    <span className="text1">Animes</span>
                    <span className="text1">Sitcom Frames</span>
                    <span className="text1">Custom Frames</span>
                    <span className="text1">Custom God Frames</span>
                </div>

                <div className="col1">
                    <div className="title1">Pages</div>
                    
                    <span className="text1" onClick={()=>navigate('/')}>Home</span>
                    <span className="text1" onClick={()=>navigate('/AboutUs')}>About</span>
                    <span className="text1" onClick={()=>navigate('/userorders')}>Your Orders</span>
                    <span className="text1" onClick={()=>navigate('/privacypolicy')}>Privacy Policy</span>
                    <span className="text1" onClick={()=>navigate('/returns')}>Returns</span>
                    <span className="text1" onClick={()=>navigate('/termsandconditions')}>Terms & Conditions</span>
                    <span className="text1">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text1">
                        <p>&copy; 2023 AniFrames. All Rights Reserved.</p>


                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;