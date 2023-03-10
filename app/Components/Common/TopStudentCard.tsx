import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Tags from './TopStudentCardComp/Tags';
import Buton from './Buton';
import SocialIcons from './SocialIcons';

interface Props{
    Imgurl:string;
    color?:string;
    Name?:string;
    Profile?:string;
    Tag1?:string;
    Tag2?:string;
    Tag3?:string;
}

const TopStudentCard:React.FC<Props> = ({Imgurl,color,Name,Profile,Tag1,Tag2,Tag3}) => {

    let colr: string = '#4f547b'
    if (color) {
        colr = color
    }

  return (
    <div>
      <Box
      sx={{
        height:'397px',
        width:'330px',
        boxShadow:'0px 6px 15px 0px #404f680d',
        border:'1px solid',
        borderRadius:'8px',
        padding:'30px',
        display:'flex',
        alignItems:'center',
        gap:'2px',
        flexDirection:'column',
        justifyContent: 'center',
       
      }}
      >
        <Box
        sx={{
            height:'90px',
            width:'90px',
            borderRadius:'100px',

            overflow:'hidden',
            backgroundImage:`url(${Imgurl})`,
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
        }}
        />
        <Typography
          sx={{
                 color: '#140342',
                 fontSize:'17px',
                 marginTop:'12px'
          }}
        >
            {Name}
        </Typography>
        <Typography
                  sx={{
                      color: `${colr}`,
                      fontSize:'14px',
                      marginTop: '5px'
                  }}
        >
            {Profile}
        </Typography>
        <Box
         sx={{
          paddingTop:"12px"
         }}
        >
          <SocialIcons Facebook='#' Instagram='#' Twitter='#' Linkedin='#' color={`${colr}`}/>
        </Box>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'row',
            paddingTop:'20px',
            gap:'3px'
        }}
        >
                  <Tags color={`${colr}`}>{Tag1}</Tags>
                  <Tags color={`${colr}`}>{Tag2}</Tags>
                  <Tags color={`${colr}`}>{Tag3}</Tags>
        </Box>
       <Box
        sx={{
            marginTop:'20px'
        }}
       >
          <Buton Type='bullet'>View Profile</Buton>
       </Box>

      </Box>
    </div>
  )
}

export default TopStudentCard
