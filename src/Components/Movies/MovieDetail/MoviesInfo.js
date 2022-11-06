import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './MoviesInfo.scss'
const MoviesInfo = ({movie}) => {
    //  BoxOffice

  return (
    <div className='moviesInfo'>    <List sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemText
        primary="Director
        "
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body1"
              color="text.primary"
            >
                   {movie.Director}
            </Typography>
         
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
    
      <ListItemText
        primary="Actors"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {movie.Actors}
            </Typography>
           
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemText
        primary="Language"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
               {movie.Language}
            </Typography>
          
          </React.Fragment>
        }
      />
    </ListItem>

    <ListItem alignItems="flex-start">
      <ListItemText
        primary="Genre"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
               {movie.Genre}
            </Typography>
          
          </React.Fragment>
        }
      />
    </ListItem>

    <ListItem alignItems="flex-start">
      <ListItemText
        primary="Released"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
               {movie.Released}
            </Typography>
          
          </React.Fragment>
        }
      />
    </ListItem>


    <ListItem alignItems="flex-start">
      <ListItemText
        primary="BoxOffice"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
               {movie.BoxOffice}
            </Typography>
          
          </React.Fragment>
        }
      />
    </ListItem>
  </List></div>
  )
}

export default MoviesInfo