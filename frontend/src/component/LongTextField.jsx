import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import './text-fild.css'

const DemoInput = styled(TextField)(({ theme }) => ({
    width: '340px',
    height: '100px',
    ...theme.typography.body2,
    borderRadius: "40px",
    margin: "6px 6px 6px 6px",
    textAlign: 'right',
    backgroundColor: '#F3F3F3',
    "& fieldset": {
        whiteSpace: "normal",
        height: '120px',
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

export default function LongTextField(name) { 
    return (
        <Box
            component="form"
            sx={{
                mt: '-15px',

                '& .MuiTextField-root': { m: 1,   width: '345px', },
            }}
            noValidate
            autoComplete="off"
        >
            <DemoInput
                className="inp"
                id="outlined-multiline-flexible"
                label={name}
                multiline
                maxRows={4}
                variant="outlined"
                InputLabelProps={{ style: { fontFamily: "vazir", color: "#9E9E9E" } }}
                inputProps={{ style: { fontFamily: "vazir", textAlign: 'right' } }}
            />
        </Box>
    );
}
