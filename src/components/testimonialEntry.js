function TestimonialEntry({rating, name, comments}) {
    return(
        <article>
            <h2>Rating = {rating}</h2>
            <h3>{name}</h3>
            <p>{comments}</p>
        </article>
    )
}

export default TestimonialEntry;