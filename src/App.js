import './App.scss';
import React from 'react';

import {Routes,Route} from 'react-router-dom'
import Home from './Components/UI/Home/Home';
import MovieDetail from './Components/Movies/MovieDetail/MovieDetail';
import PageNotFound from './Components/UI/PageNotFound/PageNotFound';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movieDetails/:imdbId' element={<MovieDetail/>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>

  
    </div>
  );
}

export default App;
