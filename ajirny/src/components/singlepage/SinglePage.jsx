//src/contact.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';
function SinglePage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const url = "http://localhost/ajirny-full/php/places.php"
    axios.get(url).then(response => response.data)
      .then((data) => {
        setData(data)
        setLoading(true)
      })

  }, [])
  return (<>{
    loading && <section className="restaurant1 top" id="restaurant">
      <div className="singlepage__container flex">
        <div className="left">
          <img src={data[0].images} alt="" />
        </div>
        <div className="right">
          <div className="singlename">
            <h2>Places Name : {data[0].name}</h2>
          </div>
          <div className="singledesc">
            <h2>Info about the place:</h2>
            <p>{data[0].description}
            </p>
          </div>
          <div className="singleprice">
            <h2>Place price : <span>{data[0].price} JOD / 1 Hours</span> </h2>
          </div>
          <div className="singlebutton">
            <button className="btn btn-primary" ><Link className="singlepage__btn" to="/reservationday" state={{ place: data[0].name }}>Book For Days</Link> </button>
            <button className="btn btn-primary"> <Link className="singlepage__btn" to="/reservation" state={{ place: data[0].name }}>Contact For Place</Link>  </button>
          </div>
        </div>

      </div>
    </section>
  }

  </>
  )

}
export default SinglePage;
