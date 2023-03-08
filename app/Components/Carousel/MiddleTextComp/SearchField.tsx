import React from 'react'
import { Box, TextareaAutosize } from '@mui/material';

interface Props{
    placeholder: string;
    children: React.ReactNode;
}

const SearchField:React.FC<Props> = ({placholder,children}) => {
  return (
    <div>
          <Box
              sx={{
                  padding: '1rem',
                  width: '34rem',
                  height: '4.2rem',
                  overflow: 'hidden',
                  borderRadius: '10rem',
                  display: 'flex',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center'
              }}
          >
              <TextareaAutosize
                  maxRows={1}
                  placeholder={`${placholder}`}
                  style={{ width: '35rem', height: '4rem', display: 'flex', textAlign: 'left', alignItems: 'center', justifyContent: 'center', padding: '1.2rem', fontSize: '1rem', outline: 'none' }}
              />
              <Box
                  sx={{
                      right: '1rem',
                      height: "3rem",
                      width: '9rem',
                      borderRadius: '10rem',
                      color: '#FFFFFF',
                      backgroundColor: '#421e95',
                      padding: "1rem",
                      border: 1,
                      borderColor: '#421e95',
                      transitionDuration: '.2s',
                      cursor: 'pointer',
                      display: 'flex',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': { backgroundColor: '#f7f7f7', color: '#421e95' },
                  }}
              >
                  {children}
              </Box>

          </Box>
    </div>
  )
}

export default SearchField
