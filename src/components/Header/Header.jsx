import { useEffect, useState, useContext } from "react";
import { useNavigate ,Link} from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgOverflow, CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import { stack as Menu } from 'react-burger-menu'

import SignUp from "../SignUp/SignUp";


import "./Header.scss";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const {setCartItems} = useContext(Context);

    const navigate = useNavigate();
    const { cartCount } = useContext(Context);
    const { activeLink, setActiveLink } = useContext(Context);
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    const auth = localStorage.getItem('token');

    const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        localStorage.clear();
        setCartItems([]);
        navigate("/");
    }
    }

    // constructor (props) {
    //     super(props)
    //     this.state = {
    //       menuOpen: false
    //     }
    //   }

    const [menuOpen, setMenuOpen] = useState(false);
    function handleOnOpen() {
        setMenuOpen(true);
        console.log(activeLink);
        document.body.style.overflow = "hidden";

    }
    function handleOnClose() {
        setMenuOpen(false);
        console.log(menuOpen);
        document.body.style.overflow = "scroll";
    }

    function closeMenu() {
        console.log(menuOpen);
        setMenuOpen(false);
        // this.setState({menuOpen: false})
    }

    function handleActiveLink(link) {
        setActiveLink(link);
        closeMenu();
    }
    

    return (
        <>
            <header className="main-header">
                <div className="header-upper-plate">Flat 10% off on products !!<div>Limited time offer</div></div>
                <div className="header-content" >
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/AboutUs")}>About</li>
                        <li onClick={() => navigate("/category/1")}>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>AniFrames</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} className="mediumDeviceYetShowing" />
                        <AiOutlineHeart className="mediumDeviceYetShowing" />
                        <span className="cart-icon mediumDeviceYetShowing" onClick={() => setShowCart(true)} >
                            <CgShoppingCart />


                            {!!cartCount && <span>{cartCount}</span>}
                        </span>

                        {auth ? <span onClick={() => { logout(); navigate("/") }} className="header-login">Logout</span> : <span onClick={() => navigate("/login")} className="header-login">LogIn</span>}

                        {/* <span onClick={()=>{navigate("/login")}}>Login</span> */}

                        <Menu right noOverlay={false} disableAutoFocus className={"hmb-menu"} isOpen={menuOpen} onOpen={handleOnOpen} onClose={handleOnClose}>
                                
                            <div className="menu-heading">AniFrames</div>   
                            <div className="menu-heading-addontext">Light up your walls</div>                             

                            <Link
                                to="/"
                                className={activeLink === '/' ? "active menu-item" : "menu-item"}
                                onClick={() => handleActiveLink("/")}
                            >
                                Home
                            </Link>
                            <Link
                                to="/category"
                                className={activeLink === '/category' ? "active menu-item" : "menu-item"}
                                onClick={() => handleActiveLink("/category")}
                            >
                                Categories
                            </Link>
                            <Link
                                to="/AboutUs"
                                className={activeLink === '/AboutUs' ? "active menu-item" : "menu-item"}
                                onClick={() => handleActiveLink("/AboutUs")}
                            >
                                AboutUs
                            </Link>
                            {auth ? <span onClick={() => { handleOnClose(); logout(); navigate("/") }}>Logout</span> : <span onClick={() => { handleOnClose(); navigate("/login") }}>LogIn</span>}

                            {/* <a id="home" className={activeLink === '/' ? "active menu-item" : "menu-item"} href="/" onClick={() => handleActiveLink("/")}>Home</a> */}
                            {/* <a id="about" className={activeLink === '/AboutUs' ? "active menu-item" : "menu-item"} href="/AboutUs" onClick={() => handleActiveLink("/AboutUs")}>About</a> */}
                            {/* <a id="categories" className={activeLink === '/category' ? "active menu-item" : "menu-item"} href="/category" onClick={() => handleActiveLink('/category')}>Categories</a> */}

                        </Menu>
                    </div>

                </div>


            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
