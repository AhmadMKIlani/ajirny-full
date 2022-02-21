import React from 'react'
import { Partners } from '../partners/Partners';
import Testimonials from '../testimonials/Testimonials';
import "./Landing.css";
import Category from './Lcategory/Category';


const Landing = () => {

 
  return (
    <>
    <div class="main-background">
        <div class="main-text">
            <div className='landing__layout'>
            <h2>Perfection</h2>
            <h1>And you are <span>invited</span></h1>
            <div className='landing__buttons'>
              <button>Book Place for days</button>
              <button>Contact us for meeting</button>
            </div>
            </div>
        </div>
    </div>
    <Category/>
    <Testimonials/>
    <Partners/> 
    </>
  
  )
}


export default Landing;
