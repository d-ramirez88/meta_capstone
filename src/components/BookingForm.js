import {useState} from 'react'

function BookingForm({availableTimes, handleDateChange, handleSubmit}) {
    const [guests, setGuests] = useState(0)
    const [occasion, setOccasion] = useState("Occasion")

    const [selectedTime, setSelectedTime] = useState()
    const [date,setDate] = useState(new Date().toLocaleDateString("en-CA"))

    function handleDate(e) {
        setDate(e.target.value)
        handleDateChange(new Date(e.target.value))
    }

    const dataValid = () => {
        if (guests <= 0) {
            return true
        } else if (guests >=11) {
            return true
        } else {
            return false
        }
        
    }

    return (
        <> 
            <h1>Booking</h1>
            <form>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" aria-label="choose date" onChange={handleDate} value={date} min={new Date().toLocaleDateString("en-CA")}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " aria-label="select time" onChange={e=> setSelectedTime(e.target.value)} value={selectedTime}>
                    {availableTimes.map((time, index) => {return (<option key={index} aria-label={time}>{time}</option>)})}
                </select>
                <label htmlFor="guests">Number of guests (1 - 10)</label>
                <input type="number" min="1" max="10" id="guests" aria-label="number of guests" onChange={e=>{setGuests(e.target.value)}} value={guests}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" aria-label="Select occasion" onChange={e => setOccasion(e.target.value)} value={occasion}>
                    <option aria-label="birthday">Birthday</option>
                    <option aria-label="anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" aria-label="Make your reservation" onClick={handleSubmit} disabled={dataValid()}/>
            </form>
        </>
    )
}

export default BookingForm;