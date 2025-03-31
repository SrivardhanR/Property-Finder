import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar(){
    const [open,setOpen] = useState(false);
    const user = false;
    return(
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="./logo.png" alt="Logo" />
                    <span>MCK Properties</span>
                </Link>
                <Link to="/list">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/agents">Agents</Link>
                
            </div>
            <div className="right">
            {user? (
                <div className="user">
                    <img src="/SmapleDp1.png" alt=""/>
                    <span>Srivardhan</span>
                    <Link to="/profile" className="profile">
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div>
            ):(
                <>
                <Link to="/profile">Sign In</Link>
                <Link to="/signup" className="register">Sign Up</Link>
                </>
            )}
            <div className="menuIcon">
                <img 
                src = "./menu.png" 
                alt="/"
                onClick={()=>setOpen(!open)}
                />
            </div>
            <div className={open?"menu active":"menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign Up</a>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;
