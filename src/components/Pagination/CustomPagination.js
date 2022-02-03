
import { createMuiTheme } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { ThemeProvider } from '@mui/styles';
import React from 'react';

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({setPage,numOfPages=10}) => {
    const handleChange=(page)=>{
        setPage(page)
        window.scroll(0,0)
    }
    return (
        <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:10}}>
            <ThemeProvider theme={darkTheme}>
            <Pagination onChange={(e)=>handleChange(e.target.textContent)} count={numOfPages} hidePrevButton hideNextButton color='primary' 
            />
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination;