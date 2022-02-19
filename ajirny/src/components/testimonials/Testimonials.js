import React from 'react'
import "./Testimonials.css";

const Testimonials = () => {
  return (
<div class="testimonial-slider">
  <ul class="slider">
    <li>
      <div class="testimonial-slider-content">
        <q>This is the first quote in your slider!</q>
        <p class="source">- Paul C, TX</p>
      </div>
    </li>
    <li>
      <div class="testimonial-slider-content">
        <q>Here is the second one, this is awesome!</q>
        <p class="source">- Ella M, TX</p>
      </div>
    </li>
    <li>
      <div class="testimonial-slider-content">
        <q>Next, the third quote - AMAZING!</q>
        <p class="source">- Blaine B, TX</p>
      </div>
    </li>
    <li>
      <div class="testimonial-slider-content">
        <q>This is the last quote, I can't believe how well this worked!</q>
        <p class="source">- Guillermo O, TX</p>
      </div>
    </li>
  </ul>
</div>

  )
}


export default Testimonials;
