function FeaturedCard({title, price, description, image}) {
    return(
        <>
        <article>
            <img src={image} alt="food sample"></img>
            <h4>{title}</h4>
            <h5>{price}</h5>
            <h6>{description}</h6>
            <a href="/">Order Online</a>
        </article>
        </>
    )
}
export default FeaturedCard;