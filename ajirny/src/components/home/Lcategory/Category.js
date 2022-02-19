import React from 'react'
import "./Category.css";

const Category = () => {
  return (

  <div class=" blue grid-wrapper">
    <div class="box zone">
      <a href="index.html" className='cat-link'>
      <h2 className='cat-text'>Cat1</h2>
      <img src="imgaes/place1.jpg" alt='category1'/>
      </a>
    </div>
    <div class="box zone">
      <a href="index.html" className='cat-link'>
      <h2 className='cat-text'>Cat2</h2>
      <img src="imgaes/place2.jpg" alt='category1'/>
      </a>
      </div>
    <div class="box zone">
      <a href="index.html" className='cat-link'>
      <h2 className='cat-text'>Cat3</h2>
      <img src="imgaes/place3.jpg" alt='category1'/>
      </a>
      </div>
    <div class="box zone">
      <a href="index.html" className='cat-link'>
      <h2 className='cat-text'>Cat4</h2>
      <img src="imgaes/place4.jpg" alt='category1'/>
      </a>
      </div>
    <div class="box zone">
      <a href="index.html" className='cat-link'>
      <h2 className='cat-text'>Cat5</h2>
      <img src="imgaes/place5.jpg" alt='category1'/>
      </a>
      </div>
    <div class="box zone">
      <a href="index.html" className='cat-link'>
      <h2 className='cat-text'>Cat6</h2>
      <img src="imgaes/place6.jpg" alt='category1'/>
      </a>
      </div>
  </div>


  )
}


export default Category;