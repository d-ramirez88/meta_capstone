import heroImage from "./restauranfood.jpg"
import { Link} from 'react-router-dom'

function Hero() {
    return(
        <section id="heroSection">
            <img src = {heroImage} alt="food example"></img>
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h3>
                    We are a family owned Mediterranean restaurant, focused on
                    tradicional recipes served with a modern twist.
                </h3>
                <Link to="booking" aria-label="Reserve a table">Reserve a table</Link>
            </article>
        </section>
    )
}

export default Hero;