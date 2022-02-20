//src/contact.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function SinglePage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const url = "http://localhost/php/places.php"
    axios.get(url).then(response => response.data)
      .then((data) => {
        setData(data)
        setLoading(true)
      })

  })
  return (<>{
    loading && <section class="restaurant top" id="restaurant">
      <div class="container flex">


        <div class="left">

          <img src={data[0].images} alt="" />
        </div>
        <div class="right">
          <div class="text">
            <h2>{data[0].name}</h2>


          </div>
          <div class="accordionWrapper">
            <div class="accordionItem open">
              <div class="accordionItemContent">
                <p>{data[0].description}
                </p>
              </div>
            </div>
            <div class="accordionItem close">
              <h2 class="accordionIHeading">{data[0].price}</h2>
              <div class="accordionItemContent">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

  }

  </>
  )

}
export default SinglePage;