import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import './direction.css'
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import IconButton from '@mui/material/IconButton';
const ContainerStyle = {
    width:'438px',
    height:'64px',
    backgroundColor:'rgba(243, 243, 243, 1)',
    borderRadius:'45px',
    direction:'rtl',
    display: 'flex',
    alignItems: 'center',
    position:'relative',
}
const PictureStyle={
    width:'52px',
    height: '52px',
    backgroundColor: 'rgba(208, 208, 208, 1)',
    marginRight:'6px',
    borderRadius: '50%',
}
const AvatarStyle={
    width:'52px',
    height: '52px',
}
const TypographyStyle={
    fontFamily:'yekan',
    fontSize:'24px',
    fontWeight:'500px',
    marginRight: '16px',
    color:'rgba(70, 63, 63, 1)',
}
const IconStyle={
    color: 'rgba(241, 95, 43, 1)',
    width:'32px',
    height:'32px',
    position:'absolute',
    left:'0px',
    marginLeft:'20px',

}
function temp(){ // it is for onClick on icon
    console.log('clicked')
}
function ManagersRebbon(){
    return(
        <Grid sx={ContainerStyle}>
            <Grid sx={PictureStyle}><Avatar sx={AvatarStyle} alt='کاربر مورد نظر' src="D:\تصاویر\کاردان" /></Grid>
            <Typography sx={TypographyStyle}>نام کاربری مسئول مربوطه</Typography>
            <IconButton onClick={temp} sx={IconStyle} ><DeleteRoundedIcon sx={{width:'32px',height:'32px'}} /></IconButton>
        </Grid>
    )
}

export default ManagersRebbon