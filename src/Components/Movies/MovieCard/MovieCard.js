import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MovieCard.scss'
import {Link} from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <>
    <Link to={`/movieDetails/${movie.imdbID}`}>
    <Card sx={{ maxWidth: 640 }} className="card-item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image={movie.Poster}
          alt={movie.Type}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
     
    </>
  )
}

export default MovieCard