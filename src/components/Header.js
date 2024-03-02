import { headerlogo } from "../utilities/constants";
const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src={headerlogo} className="logopic"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart image</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;