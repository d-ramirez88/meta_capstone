import {useState} from 'react'

function BookingForm({availableTimes, handleDateChange}) {
    const [guests, setGuests] = useState(0)
    const [occasion, setOccasion] = useState("Occasion")

    const [selectedTime, setSelectedTime] = useState()
    const [date,setDate] = useState("01/01/2001")

    function handleDate(e) {
        setDate(e.target.value)
        handleDateChange(e.target.value)
    }

    return (
        <form style={{display: "grid", maxWidth: 200+"px", gap: 20+"px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleDate} value={date}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={e=> setSelectedTime(e.target.value)} value={selectedTime}>
                {availableTimes.map((time, index) => {return (<option key={index}>{time}</option>)})}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={e=>{setGuests(e.target.value)}} value={guests}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={e => setOccasion(e.target.value)} value={occasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default BookingForm;