import { useNavigate } from "react-router-dom";
import "./Category.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const Category = ({ categories = [], categoriesLoading }) => {
    const navigate = useNavigate();

    return <div className="shop-by-category">
        <div className="sec-heading">Shop By Category</div>
        <div className="categories">
            {
                categoriesLoading ?
                        <div className="category-skeleton">
                        {/* <SkeletonTheme > */}
                        <span>
                    
                            <Skeleton count={8} containerClassName="flex-1"  />
                        </span>
                        {/* <span>
                    
                            <Skeleton count={8} containerClassName="flex:1"  />
                        </span> */}
                        {/* </SkeletonTheme> */}
                        </div>

                        :
                
                 categories?.map((item) => (
                        
                        
                            <>
                            <div key={item._id} className="category" onClick={() => navigate(`/category/${item._id}`)}>
                            <img src={item.image} alt="" />
                            <div className="category-name">{item.name}</div>
                            </div>
                            </>
                        
                    
                    ))
        }

        </div>
    </div>;
};

export default Category;
