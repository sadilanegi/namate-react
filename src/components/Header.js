import { useState } from "react";
import Logo from "../../KhaoPio.png";

const Header = () => {

    const [btnName,setBtnName] = useState("Login");
    console.log("Header Rendered");     //the component is rendered again whenever the state variable is changed and 
                                        //new variable is create that is why the value of variable after being const is updated anyways. 
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={()=>{
                        btnName == "Login"?
                        setBtnName("Logout")
                        :
                        setBtnName("Login");

                    }}
                    >
                    {btnName}
                    </button>
                </ul>
            </div>           
        </div>
    )
}
export default Header;