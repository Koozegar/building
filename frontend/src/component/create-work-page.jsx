import TextFild from "./text-fild";
// import SelectInput from "./select-input";
import CustomizedInputBase from "./AttachFileInput";
import CustomButton from "./custom-button";
import { Grid , Box , Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText, TableRow, ButtonGroup, Button} from "@mui/material";
import './login-singup.css'
import { useState } from "react";

function WorkView (){

  const [floor, setFloor] = useState('');

  const handleChange = (event) => {
    setFloor(event.target.value);
  };

    return(
    <Box my={1} >
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
            
            <Typography
            sx={{
                fontSize: "40px",
                mt: '25px',
                position: 'relative',
                fontFamily: "yekan",
                }}
            >ایجاد کار جدید</Typography>
            <Grid>{TextFild('عنوان کار')}</Grid>
            <Grid sx={{mt: '-15px'}}>{CustomButton('انتخاب پروژه')}</Grid>

            <Grid sx={{direction:'rtl',mt: '-15px'}}> 
        <FormControl fontSize='30px'  variant="filled" sx={{  m: 1.5, minWidth: 340, Height: '50px', backgroundColor: "F3F3F3" }}>
        <InputLabel id="demo-customized-select-label" color='warning' bo  sx={{width:'290px',fontFamily: 'yekan', color:'9E9E9E' }}>انتخاب طبقه</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={floor}
          label="Floor"
          onChange={handleChange}
          sx={{borderRadius: '45px',color:'9E9E9E',fontFamily: 'yekan'}}
          backgroundColor = "F3F3F3"
          color= 'warning'
          disableUnderline= 'true'
          dir="rtl"
          fontFamily= 'yekan'
        >
          <MenuItem value={1} sx={{borderRadius: '25px',borderBlockStartWidth: '12px', direction: 'rtl',fontFamily: 'yekan',color:'9E9E9E' }}>طبقه اول</MenuItem>
          <MenuItem value={2} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه دوم</MenuItem>
          <MenuItem value={3} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه سوم</MenuItem>
          <MenuItem value={4} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه چهارم</MenuItem>
          <MenuItem value={5} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه پنجم</MenuItem>
          <MenuItem value={6} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه ششم</MenuItem>
          <MenuItem value={7} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه هفتم</MenuItem>
        </Select>
        {/* <FormHelperText>طبقه ای که کار باید در آن تعریف شود را انتخاب کنید</FormHelperText> */}
      </FormControl>
            </Grid>
            <Grid sx={{mb: '-20px', mt: '-20px'}}>{TextFild('شرح مختصر کار')}</Grid>
            <Grid>{TextFild('شرح پیش نیاز')}</Grid>
            <Grid
              sx={{
                fontSize: "40px",
                mt: '-10px',
                position: 'relative',
                fontFamily: "yekan",
              
                }}
            >{CustomizedInputBase('تصویر شاخص کار')}</Grid>
                       <Grid
              sx={{
                fontSize: "40px",
                // mt: '20px',
                position: 'relative',
                fontFamily: "yekan",
              
                }}
            >{CustomizedInputBase('فایل پیوست')}</Grid>
            
            
            <ButtonGroup
            variant="contained"
            color='warning'
            sx={{margin: 'auto',borderRadius:'15px',
          }}
          
          >
            <Button sx={{width:'213px',height:'55px', borderRadius: '15px',fontFamily: 'yekan'}} href=''>انصراف</Button>
            <Button sx={{width:'213px',borderRadius: '15px',fontFamily: 'yekan'}}>ایجاد</Button>
          </ButtonGroup>

        </Grid>
    </Box>
    )}

    export default WorkView;