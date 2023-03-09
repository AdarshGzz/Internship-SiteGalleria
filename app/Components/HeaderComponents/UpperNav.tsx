import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MailText from './UpperNavComponents/MailText';
import SocialIcons from '../Common/SocialIcons';

import Select from './UpperNavComponents/Select'


export default function UpperNav():JSX.Element {

  const toolbarStyle = {
    minHeight: '40px',
  };
  
  return (
    <div className='w-full fixed overflow-y-scroll ' >
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position='relative' >

          <Toolbar style={toolbarStyle}>

            <Box sx={{ flexGrow: 0 }} />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MailText text="(00) 242 844 39 88" />
            </Box>

            <MailText text="hello@educrat.com" />

            <Box sx={{ flexGrow: 7 }} />

            <SocialIcons/>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Select/>
            </Box>

          </Toolbar>

        </AppBar>
      </Box>

    </div>
  );
}
