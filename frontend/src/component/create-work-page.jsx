import TextFild from "./text-fild";
import SelectInput from "./select-input";
import CustomizedInputBase from "./AttachFileInput";
import CustomButton from "./custom-button";
import { Grid , Box , Typography} from "@mui/material";
import './login-singup.css'

function WorkView (){
    return(
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
            
            <Typography
            sx={{
                fontSize: "40px",
                mt: '30px',
                position: 'relative',
                fontFamily: "yekan",
                }}
            >ایجاد کار جدید</Typography>
            <Grid>{TextFild('عنوان کار')}</Grid>
            <Grid>{CustomButton('انتخاب پروژه')}</Grid>
            <Grid>{SelectInput('انتخاب طبقه')}</Grid>
            <Grid>{TextFild('شرح مختصر کار')}</Grid>
            <Grid>{TextFild('شرح پیش نیاز')}</Grid>
            <Grid
              sx={{
                fontSize: "40px",
                mt: '30px',
                position: 'relative',
                fontFamily: "yekan",
              
                }}
            >{CustomizedInputBase('تصویر شاخص کار')}</Grid>
                       <Grid
              sx={{
                fontSize: "40px",
                mt: '30px',
                position: 'relative',
                fontFamily: "yekan",
              
                }}
            >{CustomizedInputBase('فایل پیوست')}</Grid>
            <Grid>{CustomButton('ایجاد')}</Grid>
            <Grid>{CustomButton('انصراف')}</Grid>

        </Grid>
    </Box>
    )}

    export default WorkView;