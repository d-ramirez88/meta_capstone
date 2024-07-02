import LittleLemonLogo from "./Logo.svg"
import Nav from "./Nav";

function Header() {
    return(
    <header>
      <img src={LittleLemonLogo} alt="little lemon logo"></img>
      <Nav></Nav>
    </header>
    )
}

export default Header;