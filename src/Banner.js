import axios from './axios';
import {useEffect,useState} from 'react'
import "./Banner.css";
import requests from './Requests';




const Banner = () => {
    const[movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            console.log(request)
           
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
      
    

    },[]);
    console.log(movie)
function truncate(string,n){
    return string?.length > n ? string.substring(0,n-1)+'...':string;
}

  return( <header className="banner" style={{
    backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
  
        
        
    }}>
        <div className="banner_contents">
    <h1  className="banner_title">
        {movie?.title || movie?.original_name}
    </h1>
<div className="banne_buttons">
    <button className="banner_button">Play</button>
    <button className="banner_button">Mylist</button>
 </div>
 <h1 className="banner_description">this is a test descriptionthis is a test description
    {truncate(movie?.overview,150
    )}</h1>
</div>
<div className="banner--fadeBottom" />
        </header>
  )
      
}

export default Banner