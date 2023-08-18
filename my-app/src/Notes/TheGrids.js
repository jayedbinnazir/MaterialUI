import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
 export const TheGrids = () => {
    return (
        <div>
            <h2 style={{textAlign:'center'}} >GRID</h2>
            <hr></hr>
            <Container  disableGutters maxWidth='false' sx={{height:'100vh',bgcolor:'#80cbc4'}} >
                {/* Grid Container is a Row ,,, 
                it takes the full width of a container bt not the height . */}
                <Grid alignItems={'baseline'}  container alignContent='center'  bgcolor={'red'} height='50%' >
                    {/* The content inside the item will take the fullwidth of the item */}
                   <Grid item textAlign='center'  xs={12} sm={3}  bgcolor={'primary.main'}  >
                       <Paper component={Box} py={3} >1</Paper>
                   </Grid>
                   <Grid item textAlign='center'  xs={12} sm={3}  bgcolor={'secondary.main'}  >
                   <Paper component={Box} py={4} >2</Paper>
                   </Grid>
                   <Grid item textAlign='center'  xs={12} sm={3}  bgcolor={'warning.main'}  >
                   <Paper component={Box} py={5} >3</Paper>
                   </Grid>
                   <Grid item textAlign='center'  xs={12} sm={3}  bgcolor={'error.main'} >
                   <Paper component={Box} py={6} >4</Paper>
                   </Grid>
                </Grid>
            </Container>
           
        </div>
    );
};


