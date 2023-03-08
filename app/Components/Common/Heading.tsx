import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
interface Props{
    Subheading ?: string,
    Size?: number,
    children:React.ReactNode
}

const Heading:React.FC<Props> = ({Subheading,Size, children}) => {
   
  let fS :number
  if(Size){
      fS = Size
  }
  else{
      fS = 1.875
  }
    
  return (
    <div>
      <Box
        sx={{
            display:'flex',
            flexDirection:'column'
        }}
      >
        <Typography
          sx={{
            color:'#140342',
            fontSize:`${fS}rem`,
            fontWeight:'700',
            lineHeight:'30px'
          }}
        >
            {children}
        </Typography>
        <Box>
            <Typography
            sx={{
                color:'#4F547B',
                marginTop:'10px',
                fontSize:`15px`,
                lineHeight:'30px'
            }}
            >
                {Subheading}
            </Typography>
        </Box>    
      </Box>
    </div>
  )
}

export default Heading
