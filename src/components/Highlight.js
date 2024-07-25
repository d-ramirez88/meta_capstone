import FeaturedCard from "./FeaturedCard"
import greekSaladImg from "./greek salad.jpg"
import bruschettaImg from "./bruchetta.svg"
import lemonImg from "./lemon dessert.jpg"
import { Link} from 'react-router-dom'




function Highlight() {
    const featuredItems = [
        {
            id: 1,
            title: "Greek Salad",
            price: '$12.99',
            description:    `The famous greek salad of crispy
                            lettuce, peppers, olives and our 
                            Chicago style feta cheese, garnished
                            with crunchy garlic and rosemary 
                            croutons.`,
            image: greekSaladImg
        },
        {
            id: 2,
            title: "Bruschetta",
            price: '$5.99',
            description:    `Our Bruschetta is made from grilled 
                            bread that has been smeared with garlic 
                            and seasoned with salt and olive oil.`,
            image: bruschettaImg
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: '$5.00',
            description:    `This comes straight from grandma’s 
                            recipe book, every last ingredient has 
                            been sourced and is as authentic as can 
                            be imagined.`,
            image: lemonImg
        }
    ]
    
    return (
        <section id="highlights">
            <h2>This weeks specials!</h2>
            <Link to="reserve" aria-label="Reserve a table">Reserve a table</Link>
            <div id="highlightList">
                {featuredItems.map((featuredItem) => {
                    return <FeaturedCard key={featuredItem.id} {...featuredItem}></FeaturedCard>
                    })}
            </div>
        </section>
    )
}

export default Highlight;