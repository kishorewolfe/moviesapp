import React from 'react'
import {useSelector} from 'react-redux';
import { getAllMovies ,getSpinnerState} from '../../../store/movies/MoviesSlice';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import './MovieList.scss'
import { Settings } from '../../../commans/Settings';
import CircularP from '../MovieDetail/CircularSpinner';
const MovieList = () => {
  const movies = useSelector(getAllMovies)
  const spinner = useSelector(getSpinnerState)
  console.log(spinner)
  // const shows =useSelector(getAllShows)
  console.log("THe Movies are",movies)
  let responseText = movies.Response==="True" ?(
    movies.Search.map((movie,index)=>{
     return( <MovieCard key={index} movie={movie}></MovieCard>)
    }
    
   )
  ):(<p>NO FOUND IN DB</p>)

  // let showsText = shows.Response==="True" ?(
  //   shows.Search.map((show,index)=>{
  //    return( <MovieCard key={index} movie={show}></MovieCard>)
  //   }
    
  //  )
  // ):(<p>NO FOUND IN DB</p>)


  return (
    <div className='movie__page'>
      <div className='movie_box'>
        <h1>Movies</h1>
      </div>
      <div className='movies__container'>
        {spinner && <CircularP/>}
        {!spinner && <Slider {...Settings}> {responseText}
</Slider>}
  
      </div> 
      {/* <div className='shows_box'>
        <h1>Shows</h1>
      </div>
      <div className='shows__container'>
      <Slider {...Settings}>  {showsText}</Slider>
        
      </div>  */}
      
    </div>
  )
}

export default MovieList