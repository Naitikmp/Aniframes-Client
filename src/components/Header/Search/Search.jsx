import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.jpg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import {TbSearch} from "react-icons/tb"

const Search = ({ setShowSearch }) => {
    let { data } = useFetch('/product/');
    const [searchData, setSearchData] = useState([]);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    // const productData = useFetch("/product/");

    const onChange = (e) => {
        setQuery(e.target.value);
        console.log(e.target.value);
        // console.log(tempData);
        // setShowSearch(true);
        
        
        // console.log(searchData);
    }
    
    useEffect(()=>{
        console.log(query.length);
        let tempData = data?.data?.filter(product => { return product.name.toLowerCase().includes(query.toLowerCase()) });
        setSearchData(tempData);
        if (!query.length) {
            // data = null;
            
            setSearchData(null);
        }
    },[query])




    

    return <div className="search-modal">
        <div className="form-field">
        <div className="search-icon"><TbSearch /></div>
            <input
                type="text"
                // autoFocus
                placeholder="Search for products"
                value={query}
                onChange={onChange}
            />
            <div className="search-close-icon"><MdClose onClick={() => setShowSearch(false)} /></div>
        </div>
        <div className="search-result-content">
            <div className="search-results">

                {searchData?.map(item => {

                    return (
                    <div key={item._id} className="search-result-item" onClick={() => {
                        navigate("/product/" + item._id);
                        setShowSearch(false);
                    }}>
                        <div className="img-container">
                            <img src={item.images[0]} alt="" />
                        </div>


                        <div className="prod-details">
                            <span className="name">{item.name}</span>
                            <span className="desc">{item.description}</span>
                        </div>
                    </div>
                    )

                })}

            </div>
        </div>
    </div>
};

export default Search;