import {useReducer, useEffect} from 'react'
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "../scripts/external"


export function updateTimes (availableTimes, action) {

    if (action.type === 'dateChange') {
        const newTimes = fetchAPI(action.date)
        return (
            [...newTimes]
        )
    }
}

export function initializeTimez() {
    const newTimes = fetchAPI(new Date())
    return (
        [...newTimes]
    )
}

function BookingPage() {
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes,initializeTimez())
    
    function handleDateChange(date) {
        setAvailableTimes({
            type: "dateChange",
            availableTimes: ["17:00","18:00","19:00","20:00","21:00","22:00"],
            date: date
        })
    }

    return (
        <>
        <BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange}/>
        </>
    )
}

export default BookingPage;