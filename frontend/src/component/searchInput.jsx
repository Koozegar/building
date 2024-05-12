import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import Select, { components } from 'react-select';
import './custom-button.css';
import '@fontsource/roboto/700.css';
import Grid from "@mui/material/Unstable_Grid2";
const SelectInput = ({ placeholder,array }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleSelectChange = (newValue) => {
        setSelectedValue(newValue);
    };

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <SearchIcon style={{ fontSize: '30px', color: '#9E9E9E' }} />
            </components.DropdownIndicator>
        );
    };

    const customComponents = {
        DropdownIndicator,
        IndicatorSeparator: () => null, // برای حذف جداکننده
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '415px',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            marginRight: '10px',
            itemAlign: 'left',
            color: '#9E9E9E',
            fontFamily: 'vazir'
        }),
        menu: (provided) => ({//این کادر کلی باز شونده رو کنترل می‌کنه
            marginRight: '10px',
            ...provided,
            width: '430px',
            height: '0px',
            backgroundColor: 'rgba(208, 208, 208, 1)',
            borderRadius: '15px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            color: '#9E9E9E',
            fontFamily: 'vazir'

        }),
        option: (provided, state) => ({//این هم دونه دونهٔ آیتم‌ها رو کنترل می‌کنه
            ...provided,
            width: '410px',
            height: '40px',
            backgroundColor: state.isSelected ? 'rgba(241, 95, 43, 1)' : '#F3F3F3',
            color: state.isSelected ? 'white' : '#9E9E9E',
            '&:hover': {
                backgroundColor: 'lightgray',
            },
            borderRadius: '15px',
            marginRight: '5px',
            marginTop: '3px',
            borderBottom: '1px #9E9E9E solid',
            fontFamily: 'vazir',
            display: 'flex',
            alignItems: 'center',
        }),
    };

    return (
        <Grid dir='rtl' style={{
            userSelect: 'none',
            width: "438px",
            height: "64px",
            borderRadius: "45px",
            backgroundColor: "#F3F3F3",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: 'vazir',
            fontSize: '24px',
            color: '#9E9E9E',
            fontWeight: 500
        }}>
            <Select
                options = {array.map((item,index)=>{console.log(item,'----------',index); return{value:`${index+1}`,label:`${item}`}})}
                // options={[
                //     { value: "1", label: "طبقه اول" },
                //     { value: "2", label: "طبقه دوم" },
                //     { value: "3", label: "طبقه سوم" },
                //     { value: "4", label: "طبقه چهارم" },
                //     { value: "5", label: "طبقه پنجم" },
                //     { value: "6", label: "طبقه ششم" },
                //     { value: "7", label: "طبقه هفتم" },
                // ]}
                menuIsOpen={menuIsOpen}
                onMenuOpen={() => setMenuIsOpen(true)}
                onMenuClose={() => setMenuIsOpen(false)}
                components={{ ...customComponents }}
                value={selectedValue}
                onChange={handleSelectChange}
                placeholder={placeholder}
                styles={customStyles}
            />
        </Grid>
    );
};

export default SelectInput;
