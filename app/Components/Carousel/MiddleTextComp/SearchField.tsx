import React from 'react'
import { Box, TextareaAutosize } from '@mui/material';

interface Props{
    placeholder: string;
    children: React.ReactNode;
}

const SearchField:React.FC<Props> = ({placeholder,children}) => {
  return (
    <div>
          <Box
              sx={{
                  padding: '1rem',
                  width: { xs: '22rem', sm: '25rem', md: '30rem', lg: '32rem', xl: '34rem' },
                  height: { xs: '3rem', sm: '3rem', md: '4.2rem', lg: '4.2rem', xl: '4.2rem' },
                  overflow: 'hidden',
                  borderRadius: '10rem',
                  display: 'flex',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border:'3px',
                  borderColor:'#fff',
              }}
          >
              <TextareaAutosize
                  maxRows={1}
                  placeholder={`${placeholder}`}
                  style={{ width: '35rem', height: '4rem', display: 'flex', textAlign: 'left', alignItems: 'center', justifyContent: 'center', padding: '1.2rem', fontSize: '1rem', outline: 'none' }}
              />
              <Box
                  sx={{
                      right: '1rem',
                      height: "3rem",
                      width: '9rem',
                      borderRadius: '10rem',
                      color: '#FFFFFF',
                      backgroundColor: '#6440FB',
                      padding: "1rem",
                      border: 2,
                      borderColor: '#6440FB',
                      transitionDuration: '.2s',
                      cursor: 'pointer',
                      display: {xs:'none' ,sm: 'none', md: 'flex' },
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': { backgroundColor: '#f7f7f7', color: '#6440FB' },
                  }}
              >
                  {children}
              </Box>

          </Box>
          <Box
              sx={{
                  marginTop:'1rem',
                  right: '1rem',
                  height: "3rem",
                  width: { xs: '22rem', sm: '25rem' },
                  borderRadius: '10rem',
                  color: '#FFFFFF',
                  backgroundColor: '#6440FB',
                  border: 2,
                  borderColor: '#6440FB',
                  transitionDuration: '.2s',
                  cursor: 'pointer',
                  display: { xs: 'flex',  sm: 'flex', md: 'none' },
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { backgroundColor: 'transparent', color: '#6440FB' },
              }}
          >
            {children}

          </Box>
    </div>
  )
}

export default SearchField
