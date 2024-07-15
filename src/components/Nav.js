import * as React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="menu">Menu</Link></li>
                <li><Link to="booking">Reservations</Link></li>
                <li><Link to="orderOnline">Order Online</Link></li>
                <li><Link to="logIn">Log In</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;