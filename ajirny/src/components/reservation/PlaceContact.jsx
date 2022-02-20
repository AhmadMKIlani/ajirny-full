import React, {useState} from 'react'
import './style.css'
import {useLocation} from 'react-router-dom'
function Reservation() {
const [email ,setEmail] = useState("")
const [phone ,setPhone]  = useState("")

const [date ,setDate] = useState("")
const [time ,setTime] = useState("")

const location = useLocation()
const place =location.state;
    const saveOrder =(e)=>{
      e.preventDefault();
      const order = {
        email : email,
        phone : phone,
        date : date,
        time : time,
        place : place.place,
     
      }
   
      const orders=JSON.parse(localStorage.getItem('PlaceContact'));
    //const filterorder = orders.filter(order => order.place !== place.place)
     console.log(orders)
    
      if (orders == null){
        localStorage.setItem('PlaceContact', JSON.stringify([order]))
      }
      else{
        ///orders.forEach(order=>{if()})
        localStorage.setItem('PlaceContact', JSON.stringify([...orders,order]))
         
      
      }
    
    }
      
  return (
    
    <div class="form-popup" id="myForm">
      <form action="/action_page.php" class="form-container" onSubmit={saveOrder}>
        <h1>Contact Place</h1>
    
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={((JSON.parse(localStorage.getItem('current-user'))).email)?(JSON.parse(localStorage.getItem('current-user'))).email:""} onChange={(e)=>setEmail(e.target.value)} required/>
    
        <label for="psw"><b>Phone</b></label>
        <input type="text" placeholder="Enter Phone" name="psw"  onChange={(e)=>setPhone(e.target.value)} required/>
       
    
        <label for="psw"><b>Time</b></label>
        <input type="time" placeholder="Enter Time" name="psw" onChange={(e)=>setTime(e.target.value)} required/>
    
        <label for="psw"><b>Date</b></label>
        <input type="date" placeholder="Enter Date" name="psw" onChange={(e)=>setDate(e.target.value)} required/>
    
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
           
  )
}

export default Reservation