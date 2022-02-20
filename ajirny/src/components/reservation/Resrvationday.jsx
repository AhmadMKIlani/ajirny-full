import React, {useState} from 'react'
import './style.css'
import {useLocation} from 'react-router-dom'
function Reservationday() {
const [email ,setEmail] = useState("")
const [phone ,setPhone]  = useState("")
const [date ,setDate] = useState("")
const [day ,setDay] =useState("")
const location = useLocation()
const place =location.state;
console.log(place)
    const saveOrder =(e)=>{
      e.preventDefault();
      const order = {
        email : email,
        phone : phone,
        date : date,
        day : day,
        place:place.place,
    
      }
   

      const orders=JSON.parse(localStorage.getItem('orders'));
      if (orders == null){
        localStorage.setItem('orders', JSON.stringify([order]))
      }
      else{
        localStorage.setItem('orders', JSON.stringify([...orders,order]))
    
      }}
  return (
    
    <div class="form-popup" id="myForm">
      <form action="/action_page.php" class="form-container" onSubmit={saveOrder}>
        <h1>Contact Place</h1>
    
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={((JSON.parse(localStorage.getItem('current-user'))).email)?(JSON.parse(localStorage.getItem('current-user'))).email:""} onChange={(e)=>setEmail(e.target.value)} required/>
    
        <label for="psw"><b>Phone</b></label>
        <input type="text" placeholder="Enter Phone" name="psw"  onChange={(e)=>setPhone(e.target.value)} required/>
       

       <label for="psw"><b>Numbers of days</b></label>
        <input type="text" placeholder="Enter Numbers of days" name="psw" onChange={(e)=>setDay(e.target.value)} required/>
    
        <label for="psw"><b>Date</b></label>
        <input type="date" placeholder="Enter Date" name="psw" onChange={(e)=>setDate(e.target.value)} required/>
    
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
           
  )
}

export default Reservationday