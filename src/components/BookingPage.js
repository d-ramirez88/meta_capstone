import {useReducer, useEffect} from 'react'
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "../scripts/external"
import { useNavigate } from 'react-router-dom';


export function updateTimes (action) {

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
    const navigate = useNavigate()

    function handleDateChange(date) {
        setAvailableTimes({
            type: "dateChange",
            availableTimes: ["17:00","18:00","19:00","20:00","21:00","22:00"],
            date: date
        })
    }

    function submitForm(data) {
            if (submitAPI(data)) {
                navigate("/bconfirmation")
            }
        }

    return (
        <>
        <BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange} handleSubmit={submitForm}/>
        </>
    )
}

export default BookingPage;