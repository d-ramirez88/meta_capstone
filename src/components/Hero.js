import heroImage from "./restauranfood.jpg"

function Hero() {
    return(
        <section id="heroSection">
            <img src = {heroImage} alt="food example"></img>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h3>
                    We are a family owned Mediterranean restaurant, focused on
                    tradicional recipes served with a modern twist.
                </h3>
                <a href="\">Reserve a table</a>
            </div>
        </section>
    )
}

export default Hero;