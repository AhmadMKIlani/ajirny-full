import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "./Category.css";
const Category = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('http://localhost/ajirny-full/php/categories.php');
          setData(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
  
      fetchData();
    }, []);



  return (

  <div>
    <div className=" blue grid-wrapper">

    {loading && <div>Loading</div>}
    {!loading && (
    
      <>
        {data.map(category => (<>

        
        <div className="box zone">
            <a href="index.html" className='cat-link'>
            <h2 className='cat-text'>{category.name}</h2>
            <img src={category.image} alt={category.name}/>
            </a>
        </div>
        

        </>))}
      </>
    )}

    </div>
  </div>


  )
}


export default Category;

