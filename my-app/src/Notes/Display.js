import Box from "@mui/material/Box";

export const Display = () => {

    let style = {
        bgcolor: {
            sm: 'primary.main',
            md: 'success.main',
            lg: 'error.main'
        }
    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }} >Display</h1>
            {/* BreakPoints */}

            <Box sx={{ border: 2, m: { xs: 1, sm: 2, lg: 4 }, p: { xs: 5, sm: 0 }, textAlign: 'center', ...style }} > <h2>Display - 1</h2> </Box>

            <Box m={2} p={3} border={1} sx={{ display: 'block', displayPrint: 'none' }}>
                Screen Only (Hide on print only)
            </Box>
            <Box m={2} p={3} border={1} sx={{ display: 'none', displayPrint: 'block' }}>
                Print Only (Hide on screen only)
            </Box>
            <Box component="div" sx={{ overflow: 'hidden', border: 2, m: 2, minWidth: '30%' }}>
                Not scrollable, overflow is hidden losdnjnasdmxicfvrnvie ndfuejdmedic
            </Box>
            <Box component="div" sx={{ overflow: 'auto', border: 2, m: 2 }}>
                Not scrollable, overflow is hidden losdnjnasdmxicfvrnvie ndfuejdmedic
                Not scrollable, overflow is hidden losdnjnasdmxicfvrnvie ndfuejdmedic
                Not scrollable, overflow is hidden losdnjnasdmxicfvrnvie ndfuejdmedic
                Not scrollable, overflow is hidden losdnjnasdmxicfvrnvie ndfuejdmedic
                Not scrollable, overflow is hidden losdnjnasdmxicfvrnvie ndfuejdmedic
                Not scrollable, overflow is hidden losdnjnasdmxicfvrnvie ndfuejdmedic
            </Box>
            <Box component="div" sx={{ visibility: 'visible' ,border:1 }}>
                Visible container
            </Box>
            <Box component="div" sx={{ visibility: 'hidden' ,m:4 ,border:2}}>
                Invisible container
                <h2>sdds</h2>
            </Box>
            <h3>sdsd</h3>
        </>
    );
};

