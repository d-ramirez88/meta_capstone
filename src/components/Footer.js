import LittleLemonLogo from "./Logo.svg"

function Footer() {
    return(
        <footer>
            <img src={LittleLemonLogo} alt="little lemon logo"></img>
            <div>
                <h2>Site Map</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Oder Online</a></li>
                    <li><a href="/">Log In</a></li>
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
                    <li><a href="http://www.instagram.com">Instagram</a></li>
                    <li><a href="http://www.facebook.com">Facebook</a></li>
                    <li><a href="http://www.youtube.com">Youtube</a></li>
                    <li><a href="http://www.onlyfans.com">OnlyFans</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;