import Logo from "../../KhaoPio.png";

const Header = () => {
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
                </ul>
            </div>           
        </div>
    )
}
export default Header;