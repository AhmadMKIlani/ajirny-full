//src/contact.js
import React,{useState,useEffect} from 'react' ;
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';
function SinglePage () {
const [data , setData] = useState([])
const [loading , setLoading] = useState(false)


  useEffect(()=>{
    const url = "http://localhost/ajirny-full/php/places.php"
    axios.get(url).then(response => response.data)
    .then((data) => {
      setData(data)
      setLoading(true)
     })

    }) 
  


     
 
        return (<>{
            loading && <section class="restaurant1 top" id="restaurant">
            <div class="singlepage__container flex">
               <div class="left">
                  <img src={data[0].images} alt=""/>
               </div>
               <div class="right">
                  <div class="singlename">
                     <h2>Places Name : {data[0].name}</h2>
                  </div>
                        <div class="singledesc">
                          <h2>Info about the place:</h2>
                           <p>{data[0].description}
                           </p>
                        </div>
                     <div class="singleprice">
                        <h2>Place price : <span>{data[0].price} JOD / 1 Hours</span> </h2>
                     </div>
                     <div class="singlebutton">
                 <button class="btn btn-primary" ><Link to="/reservationday" state={{place:data[0].name}}>Book For Days</Link> </button>
                 <button class="btn btn-primary"><Link to="/reservationhour" state={{place:data[0].name}}>Book For Hours</Link> </button>
                 <button class="btn btn-primary"> <Link to="/reservation" state={{place:data[0].name}}>Contact For Place</Link>  </button>

               </div>
               </div>

            </div>
         </section>
        }
           
           </> 
        )
             
      }    
export default SinglePage;
