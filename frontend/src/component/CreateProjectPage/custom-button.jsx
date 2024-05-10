import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple ,orange} from '@mui/material/colors';
import './custom-button.css'


const DemoButton = styled(Button)(({ theme }) => ({
    // width: 300,
<<<<<<< HEAD

    maxWidth: '220px', maxHeight: '50px', minWidth: '220px', minHeight: '50px',
=======
    maxWidth: '340px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', width:'195px',
>>>>>>> 5f60cb602bf82310d09699c4c4aa72d608f0f791
    ...theme.typography.body2,
    margin:"10px",
    paddingLeft:'10px',
    paddingTop:'50px',
    borderRadius: "12px",
    backgroundColor: "#F15F2B",
    color: "#FFFFFF",
<<<<<<< HEAD
    fontFamily:"vazir"
  }))
=======
    fontFamily:"vazir",
    fontSize:'24px',
    fontWeight:'700px',
    textAlign:'top'
}))
>>>>>>> 5f60cb602bf82310d09699c4c4aa72d608f0f791

  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: orange,
    },
  });

function CustomButton (name){
    return(
    <ThemeProvider theme={theme}>
      <DemoButton className='but' id='but1' variant="contained" color="secondary">{name}</DemoButton>
    </ThemeProvider>
)
}
export default CustomButton;