import aboutImage from "./Mario and Adrian b.jpg"

function About() {
    return (
        <section id="about">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Located in the heart of Chicago, this 
                    family owned restaurant is an oasis of 
                    flavor and refreshments for all. 
                    Bringing the traditional with the contemporary, 
                    Mario and Adrian are serving smiles and joy to the 
                    midwest. 
                </p>
            </div>
            <img src={aboutImage} alt="Mario and Adrian" />
        </section>
    )
}

export default About;