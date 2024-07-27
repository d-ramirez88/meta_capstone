function TestimonialEntry({rating, name, comments}) {
    function printStars(number) {
        let stars = ""
        for (let i=0; i< number; i++){
            stars += "❤"
        }
        return stars
    }

    return(
        <article>
            <h2>{printStars(rating)}</h2>
            <h3>{name}</h3>
            <p>{comments}</p>
        </article>
    )
}

export default TestimonialEntry;