import React from 'react'
import { Box, fontSize } from '@mui/system';


interface Props{
    children:React.ReactNode
    color?:string
}

const Tags:React.FC<Props> = ({children,color}) => {
  
    let colr: string = '#000000'
    if(color){
        colr = color
    }


  return (
    <div>
      <Box
        sx={{
            height:'2.4rem',
            width:'6rem',
            border:'.6px solid #0000',
            color:`${colr}`,
            borderColor: `${colr}`,
            borderRadius:'100px',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize:'13px'
        }}
      >
        {children}
      </Box>
    </div>
  )
}

export default Tags
