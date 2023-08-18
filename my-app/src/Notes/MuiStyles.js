import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import * as React from 'react';
export const MuiStyles = () => {
    return (
        <>

        {/* How to use colors */}
        {/* --> Go to MUI and search colors  */}
        {/* import the color */}

            {/* //CSS */}
            <Box sx={{bgcolor:"red", border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Using Colors</h1>} />
        {/* //Using MUI Color */}
            <Box sx={{bgcolor:red[500] , border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Using Colors</h1>} />
            <Box sx={{bgcolor:'grey.500'  , border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Using Colors</h1>} />
            <Box sx={{bgcolor:red.A400 , border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Using Colors</h1>} />
            <Box sx={{bgcolor:red['A400'] , border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Using Colors</h1>} />
            {/* or we can directly use hexcolors */}
            <Box sx={{bgcolor:'#ff1744' , border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Using Colors</h1>} />


            {/* //USing theme pelette */}
            {/* The borderColor property can receive a string, which represents the path in the theme.palette. */}
            <Box sx={{bgcolor:'warning.main' , border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Theme Pelette</h1>} />
            <Box bgcolor={'warning.main'} sx={{ border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Theme Pelette</h1>} />
            <Box bgcolor='primary.main' sx={ {border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Theme Pelette</h1>} />
            <Box color={'secondary.main'} sx={{bgcolor:'#ff1744' , border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Theme Pelette</h1>} />
            <Box sx={{bgcolor:'info.main' , border:5 , m:2 , borderColor:`primary.main`}} children = {<h1>Theme Pelette</h1>} />
            <br></br>
            <hr></hr>
            <br></br>

        </>
    );
}; 
export default MuiStyles;