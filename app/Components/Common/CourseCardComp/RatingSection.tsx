import React from 'react'
import Rating from '@mui/material/Rating';
import {Typography,Box} from '@mui/material';

interface Props{
    value?:number;
    year?:number;
}

const RatingSection:React.FC<Props> = ({value,year}) => {

    if(!value){
        value = 1;
    }
  
    let val: number = 1
    if(value){
        val  = Math.floor(value)
    }

  return (
    <div>
          <Box
              sx={{
                  display: 'flex',
                  alignItems: 'center'
              }}
          >

              <Typography
                sx={{
                    fontSize:'14px',
                    color: '#E59819',
                    marginRight:'10px'
                }}
              >
                  {value}
              </Typography>


              <Rating name="read-only" value={val} size="small" readOnly />


              <Typography
                  sx={{
                      fontSize: '13px',
                      marginLeft: '10px',
                      color:'#4F547B'
                  }}
              >
                  {`(${year})`}
              </Typography>

          </Box>
    </div>
  )
}

export default RatingSection
