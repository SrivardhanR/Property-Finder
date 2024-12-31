import "./searchbar.scss";

function SearchBar(){
    return (
    <div className="">
        <div className="type">
            <button>Buy</button>
            <button>Sell</button>
        </div>
        <form>
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
            <button>
                <img src = "./search.png" alt = ""/>
            </button>
        </form>
    </div>
    );
}

export default SearchBar;