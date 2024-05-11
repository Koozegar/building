
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './text-fild.css'
import { Grid } from '@mui/material';

const names = [
  'طبقه 5',
  'طبقه 4',
  'طبقه 3',
  'طبقه 2',
  'طبقه 1',
];

function getStyles(name, personName) {
  return {
    fontWeight:
      personName.indexOf(name) === 0
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  
  return (
    <Grid sx={{'& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
      color:'red'
    },
    }}>
        <Select sx={{
          '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
            right:'265px'
          },
          '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon': {
            right:'265px'
					},
          margin:2,
          width: 300,
          direction: 'rtl', 
          borderRadius: '50px', 
          backgroundColor: "#F3F3F3",
          color:'#9E9E9E', 
          fontFamily:'"Open Sans", vazir', 
          fontStyle: 'bold' }}
          displayEmpty
          value={personName}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return 'انتخاب طبقه';
            }

            return selected.join(', ');
          }}
        >
        
          {names.map((name) => (
            <MenuItem sx={{ 
              direction: 'ltr',
              width:70,
              border:'1px',
              borderRadius:'5px',
              fontFamily:'vazir',
              fontSize:'10px' ,
            }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
    </Grid>
  );
}