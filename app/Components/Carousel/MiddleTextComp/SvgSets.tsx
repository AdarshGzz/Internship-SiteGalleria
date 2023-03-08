import React from 'react'
import { Box, Typography} from '@mui/material';

interface Props{
    title: string,
    subtitle: string,
    children:React.ReactNode
}

const SvgSets:React.FC<Props> = ({title,subtitle,children}) => {
  return (
    <div>
          <Box
              sx={{
                //   height:'4rem',
                //   width:'14rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
          >
             <Box>
                {children}
             </Box>
              <Typography
                  sx={{
                      color: '#ffffffde',
                      fontSize: '1.2rem',
                      paddingTop: '.7rem'
                  }}
              >
                  {title}
              </Typography>
              <Typography
                  sx={{
                      color: '#ffffffde',
                      fontSize: '.9rem',
                      paddingTop: '.3rem',
                      flexWrap:'wrap'
                  }}
              >
                  {subtitle}
              </Typography>

          </Box>
    </div>
  )
}

export default SvgSets
