import React, { useEffect } from 'react'
import MovieDetail from '../../Movies/MovieDetail/MovieDetail'
import { useDispatch } from 'react-redux'
import { fetchMoviesAsyncThunk,fetchSeriesAsyncThunk } from '../../../store/movies/MoviesSlice'
import MovieList from '../../Movies/MovieList/MovieList'
const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(fetchMoviesAsyncThunk())
            dispatch(fetchSeriesAsyncThunk())
    },[dispatch])
  return (
    <div>
        <h1>Home</h1>
        <MovieList/>
    </div>
  )
}

export default Home