import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MoviesApi from '../../../src/apis/MoviesApi'

import {MOVIE_API_KEY} from '../../../src/apis/MoviesApiKey'
const initialState={
    movies:{},
    shows:{},
    allMS:{},
    spinner:false
}
export const fetchMoviesAsyncThunk = createAsyncThunk("movies/fetchMoviesAsyncThunk",async (movieName)=>{
    const movieData = await MoviesApi.get(`?apiKey=${MOVIE_API_KEY}&s=${movieName}&type=movie`).catch((err)=>{
        console.log("err",err)
    })
    return movieData.data;
})
export const fetchSeriesAsyncThunk = createAsyncThunk("movies/fetchSeriesAsyncThunk",async (seriesName)=>{
  
    const movieData = await MoviesApi.get(`?apiKey=${MOVIE_API_KEY}&s=${seriesName}&type=series`).catch((err)=>{
        console.log("err",err)
    })
    return movieData.data;
})
export const fetchMandSAsyncThunk = createAsyncThunk("movies/fetchMandSAsyncThunk",async (id)=>{
    const response = await MoviesApi.get(`?apiKey=${MOVIE_API_KEY}&i=${id}&Plot=full`).catch((err)=>{
        console.log("err",err)
    })
    return response.data;
})


const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addmovies:(state,{payload})=>{
            state.movies=payload
        },
        removeMorSstate:(state)=>{
            state.allMS={};
        }
    },
    extraReducers:{
        [fetchMoviesAsyncThunk.pending]:(state)=>{
           return{...state,spinner:true}
        },
        [fetchMoviesAsyncThunk.fulfilled]:(state,{payload})=>{
            console.log("Fetched")
            return {...state,movies:payload,spinner:false}

        },
        [fetchMoviesAsyncThunk.rejected]:()=>{
            console.log("Failed")
        },
        [fetchSeriesAsyncThunk.fulfilled]:(state,{payload})=>{
            return{...state,shows:payload}
        },
        [fetchMandSAsyncThunk.fulfilled]:(state,{payload})=>{
            return{...state,allMS:payload}
        }
    }
})

export const {removeMorSstate} =movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export const getAllShows =(state)=>state.movies.shows;
export const getBothMorS =(state)=>state.movies.allMS;
export const getSpinnerState=(state)=>state.movies.spinner;
export default movieSlice.reducer ;