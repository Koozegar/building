import { Box, Button, Container, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/CloseRounded';
import TreeView2 from './TreeView2';
import './login-singup.css'




const SelectProjectPage = () => {


  return (
    <Box my={1}>
    <Grid
    sx={{
        height: "723px",
        width: "586px",
        bgcolor: "white",
        borderRadius: "30px",
        fontSize: "36px",
        justifyContent: 'center',
        margin: "auto",
      }}
    container
    >
      <Stack>
        <IconButton
        size='large'
        sx={{
          width: '50px',
          height: '50px',
          color: '#463F3F',
          ml: '500px',
          mt: '10px'
          }}
        >
      <CloseIcon
      fontSize="large"
        />
    </IconButton>
     </Stack>
<Typography 
  sx={{
  fontSize: "40px",
  mt: '30px',
  position: 'absolute',
  fontFamily: "yekan",

  }}
  > انتخاب پروژه </Typography>

  <Container
  
   sx={{  
    position: "relative",
    left: '49px',
    top: '-40px',
    
  }}
     >
  <TreeView2></TreeView2>
  </Container>
  <Button variant="contained" 
    sx={{bgcolor:'rgba(241, 95, 43, 1)',
    fontSize: '24px', 
    width:'438px',
    height:'64px',
    borderRadius: '12px', 
    fontFamily: "yekan",

    }}
    >
        انتخاب
        </Button>
    </Grid>
    </Box>
  )
}

export default SelectProjectPage
