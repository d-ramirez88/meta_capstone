import Hero from "./Hero";
import Highlight from "./Highlight";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingPage from "./BookingPage";
import { Route, Routes } from 'react-router-dom'

function Main() {
    return(
        <main>
            <Routes>
                <Route path="/" element={<Hero />}></Route>
                <Route path="/menu" element={<Highlight />}></Route>
                <Route path="/testimonials" element={<Testimonials />}></Route>
                <Route path="/about" element={
                    <>
                        <About />
                        <Testimonials />
                    </>}>
                </Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    )
}

export default Main;