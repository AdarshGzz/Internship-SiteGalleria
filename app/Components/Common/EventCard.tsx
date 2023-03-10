import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import { BsCalendarWeek } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import Buton from './Buton';


const EventCard: React.FC = () => {

  let url = 'https://i.ibb.co/K2R1wTg/download-1.jpg'

  // { xs: '120vh', sm: '120vh', md: '115vh', lg: '100vh', xl: '100vh' }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          //   alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 6px 15px 0px #404f680d',
        }}
      >
        <Box
          sx={{
            height: '375px',
            width: '510px',
            backgroundImage: `url(${url})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            // position: 'absolute',
            height: '95px',
            width: '480px',
            backgroundColor: '#fff',
            boxShadow: '0px 6px 15px 0px #404f680d',
            borderRadius: '10px',
            marginTop: '-1.8rem',
            marginLeft: '.9rem',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: '10px'
            
          }}
        >
          <Box
          sx={{
            padding:'20px',

          }}
          >

            <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: '#140342',
                  }}
                >
                  Summer School 2022
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  paddingTop: '15px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4f547b',
                    }}
                  >
                    <BsCalendarWeek />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4f547b',
                    }}
                  >
                    6 April 2022
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4f547b',
                    }}
                  >
                    <MdLocationOn />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4f547b',
                    }}
                  >
                    london, Uk
                  </Typography>
                </Box>
              </Box>
            </Box>

          </Box>


          <Box>
            <Buton Type='bullet' Width={6} Height={3} FontWeight={400} >Buy</Buton>
          </Box>


        </Box>

      </Box>
    </div>
  )
}

export default EventCard

         