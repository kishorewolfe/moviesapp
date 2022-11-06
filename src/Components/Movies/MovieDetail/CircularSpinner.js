import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
const CircularP = () => {
  return (
    <div> <Box sx={{ width: '100%' }}>
        <h1>...Loading</h1>
    <CircularProgress />
  </Box></div>
  )
}

export default CircularP

