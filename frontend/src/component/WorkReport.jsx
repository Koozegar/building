import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import './text-fild.css'

const DemoInput = styled(TextField)(({ theme }) => ({
  width: '438px',
  height: '220px',
  ...theme.typography.body2,
  borderRadius: "12px",
  textAlign: 'right',
  backgroundColor: '#F3F3F3',
  "& fieldset": {
      border: 'none'
  },
  "& label": {
      width: "100%",
      textAlign: "right",
      transformOrigin: "center",
      "&.Mui-focused": {
          transformOrigin: "center",
      }
  }
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" 
              onClick={handleClickOpen} 
              sx={{borderRadius:"12px" ,
                      width: "213px", 
                      height:"64px", 
                      fontFamily:"vazir", 
                      fontSize: "24px",
                      color:"#463F3F", 
                      marginBottom : "40px",
                      }}>
        افزودن گزارش کار
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          sx: {
            width: '542px', // ابعاد عرض
            height: '501px', // ابعاد ارتفاع
            borderRadius: "30px",
          },
          
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle fontFamily="vazir"  margin = "auto" fontSize="36px" marginTop="50px">افزودن گزارش کار
        </DialogTitle>
        <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', margin : "auto"}}>
            <DemoInput
                className="inp"
                id="outlined-multiline-flexible"
                placeholder=". وارد کنید"
                multiline
                maxRows={8}
                variant="outlined"
                InputLabelProps={{ style: { fontFamily: "vazir", color: "#9E9E9E" } }}
                inputProps={{ style: { fontFamily: "vazir", textAlign: 'right' } }}
            />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} 
                  variant="outlined" 
                  sx={{borderRadius:"12px" ,
                      backgroundColorcolor:'F3F3F3',
                      width: "213px", 
                      height:"64px", 
                      fontFamily:"vazir", 
                      fontSize: "24px",
                      marginLeft:"52px",
                      backgroundColor: "#F3F3F3",
                      color:"#9E9E9E", 
                      borderColor:"#F3F3F3",
                      marginBottom : "40px",
                      "&:hover": {
                        borderColor: "#F3F3F3"
                    },
                      }}>انصراف</Button>
          <Button type="submit" 
                  variant="contained" 
                  sx={{borderRadius:"12px",
                      width: "213px", 
                      height:"64px", 
                      fontFamily:"vazir", 
                      fontSize: "24px",
                      marginRight :"52px",
                      backgroundColor: "#F15F2B",
                      marginBottom : "40px" ,
                      "&:hover": {
                        backgroundColor: "#F15F2B", 
                    },}}>ایجاد</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
