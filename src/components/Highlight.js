import FeaturedCard from "./FeaturedCard"

function Highlight() {
    return (
        <section>
            <h2>This weeks specials!</h2>
            <a href="\">Reserve a table</a>
            <div>
                <FeaturedCard></FeaturedCard>
                <FeaturedCard></FeaturedCard>
                <FeaturedCard></FeaturedCard>
            </div>

        </section>
    )
}

export default Highlight;