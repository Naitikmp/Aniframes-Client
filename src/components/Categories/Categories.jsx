import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./Categories.scss";
import { fetchDataFromApi } from "../../utils/api";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Context } from "../../utils/context";
import Product from "../Products/Product/Product";
import useFetch from "../../hooks/useFetch";




const Categories = () => {
  const navigate = useNavigate();
  const { categories, setCategories, products, setProducts } = useContext(Context)


  const getCategories = () => {
    fetchDataFromApi("/category/").then((res) => {
      // console.log(res);   
      setCategories(res);
    }).catch((error) => {
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.error("Server Response Status:", error.response.status);
        console.error("Server Response Data:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No Response Received. The request was made, but there's no response.");
      } else {
        // Something else went wrong
        console.error("Error:", error.message);
      }
    });
  }

  let productData = useFetch('/product/');
  console.log(productData);
  productData = productData?.data?.data;
  console.log(productData);


  useEffect(() => {
    getCategories();
    // getProducts();
    // getCartItems();
  }, []);

  return (
    <>
      <Header />
      <div className="shop-by-category">
        <div className="sec-heading">Shop By Category</div>
        <div className="categories">



          {categories?.map((category) => {
            // Filter products for the current category
            const productsForCategory = productData?.filter((product) => product.category[0]._id === category._id);

            return (
              <div className="category-main-content" key={category?._id}>
                <div className="category-title">{category?.name}</div>
                <div className="products">
                  {productsForCategory?.map((product) => (
                    <Product
                      key={product?._id}
                      id={product?._id}
                      imgSrc={product?.images[0]}
                      name={product?.name}
                      price={product?.price}
                    />
                  ))}
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Categories;
