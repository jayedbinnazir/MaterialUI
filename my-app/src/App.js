import Box from '@mui/material/Box';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Boxs } from './Notes/Boxs';
import { Continent } from './Notes/Continent';
import { Display } from './Notes/Display';
import MuiStyles from './Notes/MuiStyles';
import { TheGrids } from './Notes/TheGrids';
function App() {
  return (

    <>
      <Box component='nav'
           display='flex'
           gap={3}
           bgcolor='#5d4037'
           p={2}
           flexWrap='wrap'
           sx={{
             justifyContent:{
               xs:'center',
               md:'flex-start'
             }
             
           }}
           
          >
        <NavLink to='/' ><p style={{color:"#eceff1",fontWeight:'bolder'}} >Box</p></NavLink>
        <NavLink to='/muistyles' ><p style={{color:"#eceff1",fontWeight:'bolder'}} >MuiStyles</p></NavLink>
        <NavLink to='/display' ><p style={{color:"#eceff1",fontWeight:'bolder'}} >Display</p></NavLink>
        <NavLink to='/grid' ><p style={{color:"#eceff1",fontWeight:'bolder'}} >Grids</p></NavLink>
        <NavLink to='/container' ><p style={{color:"#eceff1",fontWeight:'bolder'}} >Container</p></NavLink>
      </Box>
 
      <Box>
      <Routes>
        <Route path='/' element={<Boxs/>} />
        <Route path='/muistyles' element={<MuiStyles/>} />
        <Route path='/display' element={<Display/>} />
        <Route path='/grid' element={<TheGrids/>} />
        <Route path='/container' element={<Continent/>} />
      </Routes>
      </Box>
    </>
    
  );
}

export default App;
