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
            <h2>perfection</h2>
        <h1>and you are <span>invited</span></h1>
        </div>
    </div>
    <Category/>
    <Testimonials/>
    <Partners/> 
    </>
  
  )
}


export default Landing;
