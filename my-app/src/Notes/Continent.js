import { Container } from "@mui/material";

export const Continent = () => {
    return (
        <div>
            <h1 style={{ textAlign:'center' }} >Container</h1>
            <hr></hr>

            {/* div or container has no height by default ,, content er height niye ney */}
            {/* height amra define kore dite pare */}
            <Container maxWidth={'false'} disableGutters sx={{ bgcolor: '#cfe8fc',height:'500px'}}   >
               
                    <h1>The Fluid Container</h1>
                
            </Container>
        </div>
    );
};

