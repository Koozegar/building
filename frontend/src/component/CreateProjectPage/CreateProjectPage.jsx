import React from 'react';
import '../custom-button.css';
import '../direction';
import SwitchInput from '../switch-input';
import '../custom-button';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {TextField} from "@mui/material";
import EditButton from "./ButtonEdit";
import CustomButton from "./custom-button";
import Direction from './direction'
//Text input تست شد
//Switch input... تست شد
//Custom button... تست شد
//Direction...
// Default button
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
            <SwitchInput sx={{
                marginRight:'10px',

            }}/>
                آیا این پروژه زیر مجموعه پروژه دیگری است؟
        </Grid>
        <Grid sx={EditButtonStyle}><EditButton /></Grid>
        <Grid sx={DirectionStyle}>
            <Direction arr={[1,2,3]} />
        </Grid>
        <Grid sx={{width:'438px',marginLeft:'68px',marginTop:'50px'}}>
            <CustomButton name={'انصراف'} sx={CustomButtonStyle} /> <CustomButton name={'ایجاد'} sx={CustomButtonStyle} />
        </Grid>
    </Paper>)
}
export default CreateProjectPage