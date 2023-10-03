import { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.jpg"
import "./CartItem.scss";
const CartItem = () => {
    const {cartItems,handleAddToCart,handleRemoveFromCart,handleCartProductQuantity} =useContext(Context);

    return <div className="cart-products">
        
        {cartItems.map(item => (
            <div key={item.product._id} className="cart-product">
            <div className="img-container">
                <img src={item.product.images[0]} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{item.product.name}</span>
                <MdClose className="close-btn"  onClick={() => handleRemoveFromCart(item)}/>
                <div className="quantity-buttons">
                    <span onClick={() => handleCartProductQuantity('dec',item)}>-</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => handleCartProductQuantity('inc',item)}>+</span>
                </div>
                <div className="text">
                    <span>{item.quantity}</span>
                    <span>x</span>
                    <span className="highlighted">&#8377;{item.product.price * item.quantity}</span>
                </div>
            </div>
        </div>))}

        {/* <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">product name</span>
                <MdClose className="close-btn" />
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span className="highlighted">&#8377;4567</span>
                </div>
            </div>
        </div> */}
    </div>;
};

export default CartItem;
