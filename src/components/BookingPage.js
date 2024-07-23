import {useReducer} from 'react'
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "../scripts/external"
import { useNavigate } from 'react-router-dom';


export function updateTimes (state, action) {
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