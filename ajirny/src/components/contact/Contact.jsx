import React, {useState} from 'react'
import './contact.css'
// import { useForm } from "react-hook-form";
import axios from 'axios';

function Contact() {

    const [ {name, email, message} , setContact ] = useState ({name : "" , email:"" , message: ""})

     const onSubmit = (e) => {
     e.preventDefault();
        let formData = new FormData();
      formData.append('name', name)
      formData.append('email', email)
      formData.append('message', message)

    axios.post('http://localhost/ajirny-full/php/contact.php',formData)
    .then(res=> console.log(res))
    .catch(error => {
      console.log(error.response)
  });
   
     }

     const formValuesHandler = (e) => {
        setContact( (preState) => {
         return (
            { ...preState , [e.target.name] : e.target.value }  
         )
        } )
      }


      

  return (
    <div className="container">
      <div class="contact-bar">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Surkhet, NP12</div>
          <div className="text-two">Birendranagar 06</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">codinglab@gmail.com</div>
          <div className="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div className="right-side"  >
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#"  onClick={onSubmit} >
        <div className="input-box">
          <input type="text" placeholder="Enter your name" name="name" onChange={formValuesHandler} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" name="email" onChange={formValuesHandler} />
        </div>
        <div className="input-box message-box">
          <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message" name="message" onChange={formValuesHandler} ></textarea>
        </div>
        <div >
          <button type="subit" className="contact-button" >
          Send Now
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Contact