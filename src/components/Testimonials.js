import TestimonialEntry from "./testimonialEntry";

function Testimonials() {
    const testimonials = [
        {
            id:1,
            rating: 3,
            name: "Lynda",
            comments: `Good recipes in a family environment, 
                        this is a great place if you want to try
                        something different.`
        },
        {
            id: 2,
            rating: 5,
            name: "Marcos",
            comments: `I can see why this is the best restaurant,
                        in town, the hosts are nice and patient with 
                        their guests and the food is amazing.`
        },
        {
            id: 3,
            rating: 4, 
            name: "Juan",
            comments: `Good bread and amazing service.`
        }
    ]
    return (
        <section id="testimonials">
            {testimonials.map((review) => {
                return (
                    <TestimonialEntry key={review.id} {...review}></TestimonialEntry>
                )
            })}
        </section>
    )
}

export default Testimonials;