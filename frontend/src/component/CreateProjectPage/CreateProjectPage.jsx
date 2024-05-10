import React from 'react';
import '../custom-button.css';
import '../direction';
import SwitchInput from '../switch-input';
import '../custom-button';
import {Grid , Box , Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {TextField} from "@mui/material";
import EditButton from "./ButtonEdit";
import CustomButton from "./custom-button";
<<<<<<< HEAD
import CustomButton2 from "./custom-button2";
import TextFild from './text-fild';
import CustomSeparator from './direction';
=======
import Direction from './direction'
>>>>>>> 5f60cb602bf82310d09699c4c4aa72d608f0f791
//Text input تست شد
//Switch input... تست شد
//Custom button... تست شد
//Direction...
// Default button
<<<<<<< HEAD
// const PaperStyle = {
//     backgroundColor:'rgba(255, 255, 255, 1)',
//     // top:'150px',
//     // left:'430px',
//     width:'586px',
//     height:'723px',
//     borderRadius:'30px',
//     marginLeft:'auto',
//     marginRight:'auto',
//     marginTop:'75px',
//     marginBottom:'auto'
// }
// const TitleStyle={
//     fontFamily:'vazir',
//     fontWeight:'700px',
//     fontSize:'40px',
//     color:'(70, 63, 63, 1)',
//     paddingTop: '67px',
//     marginLeft: '152px',
//     marginRight: 'auto'
// }
// const TextFieldStyle ={
//     width: '438px',
//     backgroundColor: 'rgba(243, 243, 243, 1)',
//     marginLeft:'68px',
//     borderRadius: '45px',
//     border:'none',
//     borderColor:'rgba(243, 243, 243, 1)',
//     direction:'rtl',
//     fontFamily: 'vazir',
//     marginTop: '50px'
// }
// const SwitchStyle={
//     marginLeft:'68px',
//     fontFamily:'vazir',
//     fontSize: '20px',
//     fontWeight: '500px',
//     marginTop:'50px'
// }
// const EditButtonStyle={
//     marginLeft:'68px',
//     marginTop:'50px',
//     width:'438px',
// }
function CreateProjectPage (){
    return(
        <Box my={13}>
        <Grid
        sx={{
            height: "550px",
            width: "586px",
            bgcolor: "white",
            borderRadius: "30px",
            fontSize: "36px",
            justifyContent: 'center',
            margin: "auto",
          }}
        container
        >
    
    <Typography 
      sx={{
      fontSize: "40px",
      mt: '30px',
      fontFamily: "yekan",
      }}
      > ایجاد پروژه جدید </Typography>

    <Grid>{TextFild('عنوان پروژه')}</Grid>
    <Grid sx={{marginLeft:'68px',
    fontFamily:'vazir',
    fontSize: '20px',
    fontWeight: '500px',
    marginTop:'50px'}}>
=======
const PaperStyle = {
    backgroundColor:'rgba(255, 255, 255, 1)',
    // top:'150px',
    // left:'430px',
    width:'586px',
    height:'723px',
    borderRadius:'30px',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'75px',
    marginBottom:'auto'
}
const TitleStyle={
    fontFamily:'vazir',
    fontWeight:'700px',
    fontSize:'40px',
    color:'(70, 63, 63, 1)',
    paddingTop: '67px',
    marginLeft: '160px',
    marginRight: 'auto'
}
const TextFieldStyle ={
    width: '438px',
    backgroundColor: 'rgba(243, 243, 243, 1)',
    marginLeft:'75px',
    borderRadius: '45px',
    border:'none',
    borderColor:'rgba(243, 243, 243, 1)',
    direction:'rtl',
    fontFamily: 'vazir',
    fontSize:'30px',
    marginTop: '50px'
}
const SwitchStyle={
    marginLeft:'75px',
    fontFamily:'vazir',
    fontSize: '20px',
    fontWeight: '500px',
    marginTop:'50px'
}
const EditButtonStyle={
    marginLeft:'75px',
    marginTop:'50px',
    width:'438px',
}
const CustomButtonStyle={
    width:'300px',
    backgroundColor:'blue',
    marginLeft:'68px',
    fontFamily:'vazir',
    textAlign:'top'
}
const DirectionStyle={
    marginRight:'75px',
    marginTop:'40px'
}
function CreateProjectPage (){
    return(<Paper sx={PaperStyle}>
        <Grid sx={TitleStyle}>ایجاد پروژه جدید</Grid>
        <Grid ><TextField placeholder='عنوان پروژه' sx={TextFieldStyle} /></Grid>
        <Grid sx={SwitchStyle}>
>>>>>>> 5f60cb602bf82310d09699c4c4aa72d608f0f791
            <SwitchInput sx={{
                marginRight:'10px',

            }}/>
                آیا این پروژه زیر مجموعه پروژه دیگری است؟
        </Grid>
<<<<<<< HEAD
        <EditButton
        sx={{marginLeft:'68px',
    marginTop:'50px',
    width: '440px',
    height:'50px',}}></EditButton>

    <Grid>{CustomSeparator(["khbi","khobi"])}</Grid>
    <Grid>{CustomButton2('انصراف')}</Grid>
    <Grid>{CustomButton('ایجاد')}</Grid>

    
        </Grid>
        </Box>
)
=======
        <Grid sx={EditButtonStyle}><EditButton /></Grid>
        <Grid sx={DirectionStyle}>
            <Direction arr={[1,2,3]} />
        </Grid>
        <Grid sx={{width:'438px',marginLeft:'68px',marginTop:'50px'}}>
            <CustomButton name={'انصراف'} sx={CustomButtonStyle} /> <CustomButton name={'ایجاد'} sx={CustomButtonStyle} />
        </Grid>
    </Paper>)
>>>>>>> 5f60cb602bf82310d09699c4c4aa72d608f0f791
}
export default CreateProjectPage