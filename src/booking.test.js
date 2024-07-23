import { render, screen} from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import BookingPage from "./components/BookingPage";
import {updateTimes, initializeTimez} from "./components/BookingPage"

test ('Renders the booking form label', ()=> {

    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]
    function handleDateChange(date) {
        setAvailableTimes({
            type: "dateChange",
            availableTimes: ["17:00","18:00","19:00","20:00","21:00","22:00"],
            date: date
        })
    }

    render (<BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange}/>);
    const headingElement = screen.getByText("Choose date");
    expect (headingElement).toBeInTheDocument();
})


test ('tests udpateTimes', ()=> {
    const testDate = new Date()
    const returnValue = updateTimes({id:1, type:'dateChange', date: testDate})
    expect(returnValue).toBeInstanceOf(Array)
    expect(returnValue).not.toHaveLength(0)

})

test ('tests initializeTimez', ()=> {
    const returnValue = initializeTimez()
    expect(returnValue).toBeInstanceOf(Array)
    expect(returnValue).not.toHaveLength(0)
})