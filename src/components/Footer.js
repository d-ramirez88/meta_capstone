import LittleLemonLogo from "./Logo.svg"
import { Link} from 'react-router-dom'

function Footer() {
    return(
        <footer>
            <img src={LittleLemonLogo} alt="little lemon logo"></img>
            <div>
                <h2>Site Map</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="menu">Menu</Link></li>
                    <li><Link to="reserve">Reservations</Link></li>
                    <li><Link to="orderOnline">Oder Online</Link></li>
                    <li><Link to="logIn">Log In</Link></li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <p>Address</p>
                <p>+1-234-567-8901</p>
                <p>none@none.com</p>
            </div>
            <div>
                <h2>Social</h2>
                <ul>
                    <li><Link to="http://www.instagram.com" reloadDocument>Instagram</Link></li>
                    <li><Link to="http://www.facebook.com" reloadDocument>Facebook</Link></li>
                    <li><Link to="http://www.youtube.com" reloadDocument>Youtube</Link></li>
                    <li><Link to="http://www.onlyfans.com" reloadDocument>OnlyFans</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;