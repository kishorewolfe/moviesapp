import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import './SearchBar.scss'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMoviesAsyncThunk, fetchSeriesAsyncThunk } from '../../../store/movies/MoviesSlice';


export default function SearchBar() {
    const nameRef= useRef();
    const dispatch = useDispatch()
    const submitHandler =(e)=>{
        e.preventDefault();
        const inputValue = nameRef.current.value;
        console.log(inputValue)
        dispatch(fetchMoviesAsyncThunk(inputValue))
        dispatch(fetchSeriesAsyncThunk(inputValue))



    }
  return (
    <Container className="searchBar__container">
         <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Search of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <form>
        <input  label="Search Movies or Series" id="fullWidth" ref={nameRef}/>
        <Button size="contained" color="success" onClick={submitHandler}>Search</Button>

        </form>

      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Container>
   
  );
}
