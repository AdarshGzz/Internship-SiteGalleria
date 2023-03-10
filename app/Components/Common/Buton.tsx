import { Box } from '@mui/system'
import React from 'react'

interface Props{
  children?:React.ReactNode,
  Height?:number,
  Width?:number,
  Color?:string, 
  FontSize?:number, 
  FontWeight?:number, 
  Rounded?:number, 
  Type?: 'box' | 'bullet',
}

const Buton:React.FC<Props> = ({children,Height,Width,Color,FontSize,FontWeight,Rounded,Type}) => {

  let H: string = '50px'
  let W:string = '260px'
  let colr:string = '#6440FB'
  let fntsz:string = '15'
  let fntwt:string = '300'
  let radius:string = Type==='bullet'?'100px':Type==='box'?'20px':'2px'

  if(Height){
    H = `${Height}rem`
  }
  if(Width){
    W = `${Width}rem`
  }
  if(Color){
    colr = `${Color}`
  }
  if(FontSize){
    fntsz = `${FontSize}rem`
  }
  if(FontWeight){
    fntwt = `${FontWeight}`
  }
  if(Rounded){
    radius = `${Rounded}rem`
  }


  return (
    <div>
      <Box
        sx={{
          height:`${H}`,
          width:`${W}`,
          color:`${colr}`,
          fontSize:`${fntsz}`,
          fontWeight:`${fntwt}`,
          borderRadius:`${radius}`,
          display:'flex',
          alignItems:`center`,
          justifyContent:`center`,
          border:'2px solid',
          borderColor:`${colr}`,
          transitionDuration:`.2s`,
          cursor:'pointer',
          '&:hover': {
            color:'#fff',
            backgroundColor:`${colr}`
          },
        }}
      >
        {children}
      </Box>
    </div>
  )
}

export default Buton
