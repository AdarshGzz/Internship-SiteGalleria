import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


export default function UpperNav() {

  const toolbarStyle = {
    minHeight: '40px',
  };



  return (
    <div className=" fixed overflow-y-scroll">
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
          <Toolbar style={toolbarStyle}>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            </Box>

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
