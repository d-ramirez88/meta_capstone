import {useReducer} from 'react'
import BookingForm from "./BookingForm";
function BookingPage() {
    const intializeTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes,intializeTimes)

    function updateTimes (availableTimes, action) {
        if (action.type === 'dateChange') {
            return (
                [...availableTimes, ...action.availableTimes]
            )
        }
    }

    
    function handleDateChange(date) {
        setAvailableTimes({
            type: "dateChange",
            availableTimes: ["17:00","18:00",
                "21:00","22:00"]
        })
    }

    return (
        <>
        <BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange}/>
        </>
    )
}

export default BookingPage;