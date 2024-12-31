import SearchBar from "../../components/searchBar/SearchBar";
import "./homepage.scss";

function HomePage(){
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                    <p>
                    Explore a wide range of properties tailored to your needs. Whether you’re looking to buy, sell, or rent, our intuitive platform makes the process simple and stress-free. Discover your perfect home with detailed listings, advanced search filters, and expert guidance every step of the way.
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                    <div>
                        <h1>20+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div>
                        <h1>100+</h1>
                        <h2>Awards Gained</h2>
                    </div>
                    <div>
                        <h1>2000+</h1>
                        <h2>Properties Sold</h2>
                    </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="./bg.png" alt=""/>
            </div>
        </div>
    );
}

export default HomePage;