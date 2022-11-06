import React from 'react'
import {useSelector} from 'react-redux';
import { getSpinnerState ,getAllShows} from '../../../store/movies/MoviesSlice';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import './ShowsList.scss'
import { Settings } from '../../../commans/Settings';
import CircularP from '../MovieDetail/CircularSpinner';

const ShowsList = () => {
  const shows =useSelector(getAllShows)
  const spinner = useSelector(getSpinnerState)

  console.log(shows)
  let showsText = shows.Response==="True" ?(
    shows.Search.map((show,index)=>{
     return( <MovieCard key={index} movie={show}></MovieCard>)
    }
    
   )
  ):(<p>NO FOUND IN DB</p>)


  return (
    <div className='movie__page'>
      <div className='movie_box'>
      </div>
      <div className='shows_box'>
        <h1>Shows</h1>
      </div>
      <div className='shows__container'>
      {spinner && <CircularP/>}
        {!spinner &&       <Slider {...Settings}>  {showsText}</Slider>
}
  
        
      </div> 
      
    </div>
  )
}

export default ShowsList