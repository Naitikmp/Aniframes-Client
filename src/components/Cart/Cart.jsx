import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
const Cart = ({setShowCart}) => {
    const {cartSubTotal,cartItems} =useContext(Context);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    return <div className="cart-panel">
        <div className="opac-layer" onClick={() => setShowCart(false)}></div>
        <div className="cart-content">
            <div className="cart-header">
                <div className="heading">Shopping Cart</div>
                <span className="close-btn" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>

            {!cartItems?.length && <div className="empty-cart">
                <BsCartX />
                <span>No products in the Cart</span>
                <button className="return-cta"  onClick={() => setShowCart(false)}>Return to shop</button>
            </div>}

            {!!cartItems?.length &&  <>
                <CartItem />
                <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal</span>
                    <span className="text total">&#8377;{cartSubTotal}</span>
                </div>
                <div className="button">
                {token ?  
                    <button className="checkout-cta" onClick={()=>{setShowCart(false);navigate("/Checkout") }}>CheckOut</button>
                    :
                    <button className="checkout-cta" onClick={()=>{setShowCart(false);navigate("/login") }}>Login to CheckOut</button>
                }        

                </div>
                </div>
            </>
            }
        </div>
    </div>;
};

export default Cart;
