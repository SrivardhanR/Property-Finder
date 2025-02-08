import { useState } from "react";
import "./searchbar.scss";
import { useNavigate } from "react-router-dom";

const types = ["buy","rent"];

function SearchBar(){
    const [query,setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/list"); 
    };
    const switchType = (val) =>{
        setQuery((prev)=>({...prev,type:val}));
    }

    return (
    <div className="searchbar">
        <div className="type">
            {types.map((type)=>(
                <button
                    key = {type}
                    onClick={()=>switchType(type)}
                    className={query.type==type? "active":""}
                >
                    {type}
                </button>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
            <input 
                type = "text" 
                name="location" 
                placeholder="Enter Your Location"
                />
            <input 
                type = "number" 
                name="minprice" 
                placeholder="Min Price"
                min = {0}
                max = {10000000}
                />
            <input 
                type = "number" 
                name="maxprice" 
                placeholder="Max Price"
                min = {0}
                max = {10000000}
                />
            <button type="submit">
                <img src = "./search.png" alt = ""/>
            </button>
        </form>
    </div>
    );
}

export default SearchBar;