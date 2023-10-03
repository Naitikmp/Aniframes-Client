import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({id , imgSrc ,name, price}) => {
    const navigate = useNavigate();
    return (<div className="product-card" onClick={() => navigate("/product/"+ id)}>
                <div className="thumbnail">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{name}</span>
                    <span className="price">&#8377;{price}</span>

                </div>

    </div>
    );
};

export default Product;
