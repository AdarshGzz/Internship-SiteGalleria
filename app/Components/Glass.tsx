import React from 'react'
import { Box, textAlign } from '@mui/system'
import { Typography } from '@mui/material'
import Buton from './Common/Buton';
const Glass = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage:'url(https://i.ibb.co/rZ1ZDBN/bg.png)',
          height:'40rem',
          width:'100%',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center'

        }}
      >
        <Box
        sx={{
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        >
           <Typography
           sx={{
            fontSize:"30px",
            color:'#ffff',
            textAlign:'center',
            fontWeight:'bold',
           }}
           >
            Find the right learning path for you
           </Typography>
           <Typography
            sx={{
              fontSize: "15px",
              color: '#ffff',
              marginTop:'15px',
              textAlign:'center'
            }}
           >
            Match your goals to our programs, explore your options and map out your path to success.
           </Typography>
           <Box
           sx={{
            marginTop: "50px",
           }}
           >
            <Buton 
            Type='box' 
            Rounded={.4} 
            Color={'#fff'}
            Height={4}
            >Get Started Now</Buton>
           </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Glass
