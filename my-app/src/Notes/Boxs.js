import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import * as React from 'react';
import { Home } from '../Home';
export const Boxs = () => {
  return (

    //using Box  -->  
    //ByDefault the box is div
    <>
      {/* Box_Prop-->
        -> children--> {node/'text'}/'text' -->Render Function(dnn't understand) or node */}

        <Box border={2} m={3} children='Jayed' />
        <Box border={2} m={3} children={'Jayed'} />
        <Box border={2} m={3} children={<h3>Jayed</h3> } />
        {/* <Box border={2} m={3} children={()=><h3>function</h3>} /> not recognised */}

{/*           
            component --> 'string_node_name'
                      --> {'nodename'} 
                      --> {()=>MUI component/Our component / whole html element}
            //The root Node . Transform the Box and render component or element how we want  */}

        <Box border={2} m={2} bgcolor='red' p={1} component='h3' children='button' />
        <Box border={2} m={2} bgcolor='red' p={1} component={'p'} children='button' />
        {/* note that: styles r not applied by the box while rendereing any component or whole element by a function */}
        <Box border={2} m={2} bgcolor='red' p={1} component={()=><Button variant='contained' children='MBTN' />}  />
        <Box component={()=><Button variant='contained'>MBTM2</Button>}  />
        <Box border={2} m={2} bgcolor='red' p={1} component={()=><Home/>}  />
        <Box border={2} m={2} bgcolor='red' p={1} component={()=><button>Our custom btn</button>}  />
        {/* styles r applied whhen we only transform node without funtion */}
        <Box border={2} m={2} bgcolor='red' p={2} component='button' children='Our custom btn2'  />

      

      

        {/* we can directly use system_properties as props */}
        <Box m={1} border={3} color='purple' children={<h2>Directly Used SystemProps</h2>} />

        {/* Can use any valid css value(of course in string) instead of using direct value xmple-border */}
        <Box m={1} border={'2px dashed black'} color='purple' children={<h2>Directly Used SystemProps</h2>} />

        {/* sx --> it acpts a js object , the object contains all system_properties 
                & valid CSS values	
        Accepts all system properties, as well as any valid CSS properties.
              -->{} 
                 system_properties acpts- value / or 'string if it is a css value or themePelette(discuss it later)'  */}
        
        <Box  sx = {{margin:"16px", border:2 , color:"blueviolet",bgcolor:red[500]}}  children={<h2>SX Used SystemProps</h2>} />
        

        
    </>
    
  );
}


