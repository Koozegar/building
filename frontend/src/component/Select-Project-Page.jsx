import { Box, Button, Container, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/CloseRounded';
import TreeView2 from './TreeView2';




const SelectProjectPage = () => {


  return (
    <Grid
      sx={{
        height: "723px",
        width: "586px",
        bgcolor: "white",
        borderRadius: "30px",
        fontSize: "36px",
      }}
      alignContent={'center'}

    >
      <Stack>
        <IconButton
        size='large'
        sx={{
          width: '50px',
          height: '50px',
          color: '#463F3F',
          left: "515px",
          top: "-105px",
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
  top: '-120px',
  position: "relative",
  textAlign: 'center',
  }}> انتخاب پروژه </Typography>

  <Container sx={{  position: "relative",
    left: '49px',
    top: '-80px',
    }} >
  <TreeView2></TreeView2>
  </Container>
  <Button variant="contained" 
    sx={{bgcolor:'rgba(241, 95, 43, 1)',
    fontSize: '24px', 
    width:'438px',
    height:'64px',
    borderRadius: '12px', 
    left: '67px',
    top: '40px',
    }}
    >
        انتخاب
        </Button>
    </Grid>
  )
}

export default SelectProjectPage
