import { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import "./CheckoutItem.scss"
const CheckOutItem = () => {
    const { cartItems, handleAddToCart, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);

    return <div className="checkout-products">

        {cartItems.map(item => (
            <div key={item.product._id} className="checkout-product">
                <div className="checkout-img-container">
                    <img src={item.product.images[0]} alt="" />
                </div>
                <div className="checkout-prod-details">
                    <span className="checkout-prod-name">{item.product.name}</span>
                    <div className="checkout-btn-controls">
                        <div className="checkout-quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.quantity}</span>
                            <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                        </div>
                        <div className="checkout-text">
                            <span>{item.quantity}</span>
                            <span>x</span>
                            <span className="highlighted">&#8377;{item.product.price * item.quantity}</span>
                        </div>
                        <MdClose className="checkout-close-btn" onClick={() => handleRemoveFromCart(item)} />
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

export default CheckOutItem;
