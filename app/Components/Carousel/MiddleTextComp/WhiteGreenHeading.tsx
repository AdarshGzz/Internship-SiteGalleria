import React from 'react'
import { Box, Typography } from '@mui/material';


interface Props{
    whiteTxt:string;
    greenTxt:string;
}

const WhiteGreenHeading: React.FC<Props> = ({whiteTxt,greenTxt}) => {
  return (
    <div>
          <Box
              sx={{
                  flexWrap: 'nowrap'
              }}
          >
              <Typography
                  sx={{
                      fontSize: { xs: '2rem', sm: '2rem', md: '3rem', lg: '3rem', xl: '3rem' },
                      fontWeight: 'bold',
                      color: '#fff',
                      textAlign: 'center',

                  }}
              >
                  {whiteTxt}
              </Typography>
              <Typography
                  sx={{
                      fontSize: { xs: '2rem', sm: '2rem', md: '3rem', lg: '3rem', xl: '3rem' },
                      fontWeight: 'bold',
                      color: '#3eda1f',
                      textAlign: 'center',
                      textDecoration: 'underline'
                  }}
              >
                  {greenTxt}
              </Typography>
          </Box>
    </div>
  )
}

export default WhiteGreenHeading
