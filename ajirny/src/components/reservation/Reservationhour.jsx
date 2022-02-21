import React, {useState} from 'react'
import './style.css'
import {useLocation} from 'react-router-dom'
function ReservationHour() {
const [email ,setEmail] = useState("")
const [phone ,setPhone]  = useState("")

const [date ,setDate] = useState("")
const [time ,setTime] = useState("")

const [hour ,setHour] = useState("")
const [dateError, setDateError] = useState(false);

const location = useLocation()
const place =location.state;
const orders=JSON.parse(localStorage.getItem('orders'));
    const saveOrder =(e)=>{
      e.preventDefault();
      const order = {
        email : email,
        phone : phone,
        date : date,
        time : time,
        hour : hour,
        place : place.place,
    
      }
   
    
      if (orders == null) {
        localStorage.setItem('orders', JSON.stringify([order]))
      }
      else {
        const filterorder = orders.filter(order => order.place === place.place);
        console.log(filterorder);
        if (filterorder.length > 0) {
          filterorder.map(contact => ((contact.date === date) ? showError() : localStorage.setItem('orders', JSON.stringify([...orders, order]))
          ))
        }
      }
    }
  const showError = () => {
    setDateError(() => true)
  }
  return (
    
    <div className="form-popup reservationHour__form" id="myForm">
      <form action="/action_page.php" className="form-container" onSubmit={saveOrder}>
        <h1>Book Place for Hours</h1>
    
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={((JSON.parse(localStorage.getItem('current-user'))).email)?(JSON.parse(localStorage.getItem('current-user'))).email:""} onChange={(e)=>setEmail(e.target.value)} required/>
    
        <label htmlFor="psw"><b>Phone</b></label>
        <input type="text" placeholder="Enter Phone" name="psw"  onChange={(e)=>setPhone(e.target.value)} required/>
       
    
        <label htmlFor="psw"><b>Numbers of hours</b></label>
        <input type="text" placeholder="Enter Numbers of hours" name="psw" onChange={(e)=>setHour(e.target.value)} required/>
     
        <label htmlFor="psw"><b>Time</b></label>
        <input type="time" step='3600' placeholder="Enter Time" name="psw" onChange={(e)=>setTime(e.target.value)} required/>
    
        <label htmlFor="psw"><b>Date</b></label>
        <input type="date" placeholder="Enter Date" name="psw" onChange={(e)=>setDate(e.target.value)} required/>
        {dateError && <p className='contact-error'>This time is not avilable, choose another one!</p>}
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
           
  )
}

export default ReservationHour