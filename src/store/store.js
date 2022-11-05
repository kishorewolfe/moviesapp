import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './movies/MoviesSlice'

export const store = configureStore({
    reducer:{movies:moviesReducer}
})