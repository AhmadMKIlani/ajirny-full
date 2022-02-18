import React from 'react'
import "./Landing.css";


const Landing = () => {
  return (
    <div>
      <div class="main-background">
        <div class="main-text">
            <h2>perfection</h2>
        <h1>and you are <span>invited</span></h1>
        </div>
        
    </div> 
    {/* <!-- background image ended --> */}

{/* <!-- booking secton --> */}
<div class="book-section">
    <div class="inner-book">
        <input type="text" placeholder="arrival"/>
        <input type="text" placeholder="departure"/>
        <input type="text" placeholder="choose room"/>
        <input type="text" placeholder="state"/>
        <div class="book-btn">
            <a href="#">book now</a>
        </div>
    </div>
    
</div>
{/* <!-- booking secton ended --> */}
    </div>
  
  )
}


export default Landing;
