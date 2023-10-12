import { useNavigate } from "react-router-dom";
import "./Category.scss";


const Category = ({categories = []}) => {
    const navigate =useNavigate();
    
    return <div className="shop-by-category">
    <div className="sec-heading">Shop By Category</div>
        <div className="categories">
            {categories?.map((item) =>(
                <div key={item._id} className="category" onClick={() => navigate(`/category/${item._id}`)}>
                    <img src={item.image} alt="" />
                    <div className="category-name">{item.name}</div>
                </div>
            ))}

        </div>    
    </div>;
};

export default Category;
