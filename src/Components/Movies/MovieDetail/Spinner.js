import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const Spinner = () => {
  return (
    <div> <Box sx={{ width: '100%' }}>
        <h1>...Loading</h1>
    <LinearProgress />
  </Box></div>
  )
}

export default Spinner

