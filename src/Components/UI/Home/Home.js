import React, { useEffect } from 'react'
import MoviesApi from '../../../apis/MoviesApi'
import MovieDetail from '../../Movies/MovieDetail/MovieDetail'
import {MOVIE_API_KEY} from '../../../apis/MoviesApiKey'
const Home = () => {
    useEffect(()=>{
        const fetchFunc = async ()=>{
            const movieName="batman"
            const movieData = await MoviesApi.get(`?apiKey=${MOVIE_API_KEY}&s=${movieName}&type=movie`).catch((err)=>{
                console.log("err",err)
            })
            console.log(movieData)
        }
        fetchFunc()
    },[])
  return (
    <div>
        <h1>Home</h1>
        <MovieDetail/>
    </div>
  )
}

export default Home