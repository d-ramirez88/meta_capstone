import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./components/BookingForm";
import BookingPage from "./components/BookingPage";
import {updateTimes, initializeTimez} from "./components/BookingPage"


const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]
function handleDateChange(date) {
    setAvailableTimes({
        type: "dateChange",
        availableTimes: ["17:00","18:00","19:00","20:00","21:00","22:00"],
        date: date
    })
}
test ('Renders the booking form label', ()=> {
    render (<BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange}/>);
    const headingElement = screen.getByText("Choose date");
    expect (headingElement).toBeInTheDocument();
})


test ('tests udpateTimes', ()=> {
    const testDate = new Date()
    const returnValue = updateTimes([0,0,0],{id:1, type:'dateChange', date: testDate})
    expect(returnValue).toBeInstanceOf(Array)
    expect(returnValue).not.toHaveLength(0)

})

test ('tests initializeTimez', ()=> {
    const returnValue = initializeTimez()
    expect(returnValue).toBeInstanceOf(Array)
    expect(returnValue).not.toHaveLength(0)
})

test ('invalid input when guests are zero ', () => {
    render (<BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange}/>);
    const guestsNumber = screen.getByLabelText('Number of guests')
    const submitButton = screen.getByDisplayValue('Make Your reservation')

    userEvent.clear(guestsNumber)
    userEvent.type(guestsNumber,'0')
    expect(guestsNumber.value).toBe('0')
    expect(submitButton).toBeDisabled()

    userEvent.clear(guestsNumber)
    userEvent.type(guestsNumber,'4')
    expect(guestsNumber.value).toBe('4')
    expect(submitButton).not.toBeDisabled()

    userEvent.clear(guestsNumber)
    userEvent.type(guestsNumber,'45')
    expect(guestsNumber.value).toBe('45')
    expect(submitButton).toBeDisabled()
})