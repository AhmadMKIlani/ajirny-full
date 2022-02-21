import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../category/Category.css";


const SingleCat = () => {
  const [loading, setLoading] = useState(true);
  const [catid, setCatId] = useState(0);
  const [places, setPlaces] = useState([]);

  const storePlace = (id) => {
    localStorage.setItem("placeId", id);
  }
  useEffect(() => {
    setCatId(localStorage.getItem("subCategoryId"))
    const fetchData = async () => {
      setLoading(true);
      try {

        if (catid !== 0) {
          const { data: response } = await axios.get(`http://localhost/ajirny-full/php/singleCat.php?catid=${catid}`);
          setPlaces(response);
          console.log(response);
        }
      } catch (error) {
        console.error(error.message);

      }
      setLoading(false);
    }

    fetchData();
  }, [catid]);



  return (

    <div>

      <div className=" blue grid-wrapper">

        {loading && <div>Loading</div>}
        {!loading && (

          <>
            {places.map(place => (<>
              <Link to='/single' onClick={() => storePlace(place.place_id)}>
                <h2 className='cat-text'>{places[0].name}</h2>
                <div className="box zone">
                    <h2 className='cat-text'>{place.place_name}</h2>
                    <img src={place.image} alt={place.name} />
                </div>
              </Link>
            </>))}
          </>
        )}

      </div>
    </div>


  )
}


export default SingleCat;

