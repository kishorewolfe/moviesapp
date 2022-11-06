import React, { useEffect ,useState} from 'react'
import MovieDetail from '../../Movies/MovieDetail/MovieDetail'
import { useDispatch } from 'react-redux'
import { fetchMoviesAsyncThunk,fetchSeriesAsyncThunk } from '../../../store/movies/MoviesSlice'
import MovieList from '../../Movies/MovieList/MovieList'
import ShowsList from '../../Movies/Shows/ShowsList'
import { Button } from '@mui/material'
import SearchBar from '../../Search/SearchBar/SearchBar'
const Home = () => {
  const [first, setfirst] = useState(false)
  const clickHandler =()=>{
    setfirst(false)
  }
  const movieHandler =()=>{
    setfirst(true)
  }
    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(fetchMoviesAsyncThunk())
            dispatch(fetchSeriesAsyncThunk())
    },[dispatch])
  return (
    <div>
        <h1>Home</h1>
        <div style={{margin:"20px"}}>
<SearchBar/>
        </div>
        <Button variant="contained" onClick={clickHandler}>SHows</Button> &nbsp;
        <Button variant="contained" onClick={movieHandler}>Movies</Button>

        {first && <MovieList/> }
        {!first &&<ShowsList/> }


       
    </div>
  )
}

export default Home