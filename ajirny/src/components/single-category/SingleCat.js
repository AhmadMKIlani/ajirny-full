import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "../category/Category.css";


const SingleCat = () => {
    const [loading, setLoading] = useState(true);
    const [catid,setCatId] = useState(0);
    const [places, setPlaces] = useState([]);
  
    useEffect(() => {
      setCatId(localStorage.getItem("subCategoryId"))  
      const fetchData = async () =>{
        setLoading(true);
        try {
         
            if(catid !== 0){
                const {data: response} = await axios.get(`http://localhost/ajirny-full/php/singleCat.php?catid=${catid}`);
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
           
        <h2 className='cat-text'>{places[0].place_name}</h2>   
        <div className="box zone">
            <a href="index.html" className='cat-link'>
            <h2 className='cat-text'>{place.name}</h2>
            
            <img src={place.image} alt={place.name}/>
           
            </a>
        </div>
        

        </>))}
      </>
    )}

    </div>
  </div>


  )
}


export default SingleCat;

