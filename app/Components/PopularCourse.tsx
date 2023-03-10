import React from 'react'
import { Box } from '@mui/system'
import Heading from './Common/Heading';
import { Typography } from '@mui/material';
import Dropdown from './Common/Dropdown';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CourseCard from './Common/CourseCard';
import Buton from './Common/Buton';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const PopularCourse:React.FC = () => {
  return (
    <div>
        <Box
         sx={{
            height: 'auto',
            width:'100%',
            padding:'70px',
         }}
        >
            <Box
            sx={{
                display:'flex',
                // alignItems:'center',
                justifyContent:'space-between',
                flexDirection: { xs: 'column', md: 'column', lg: 'row' }
                
            }}
            >
                  <Box
                   sx={{
                    paddingBottom:'15px'
                   }}
                  >
                      <Heading
                          Subheading='10,000+ unique online course list designs'
                      >
                          Our Most Popular Courses
                      </Heading>
                  </Box>
                  <Box
                  sx={{
                    display:'flex',
                    alignItems:'center',
                    gap:'15px'
                  }}
                  >
                    <Typography>
                        Filter By :
                    </Typography>
                    <Dropdown optionArray={['1','3']}>Category</Dropdown>
                    <Dropdown optionArray={['1','3']}>Rating</Dropdown>
                    <Dropdown optionArray={['1','3']}>Difficulty</Dropdown>
                  </Box>
            </Box>
            <Box
            sx={{
                paddingTop:'50px',
                display:'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems:'center'
            }}
            >
                  <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={{ xs: 2, md: 3 ,lg:5 }} columns={{ xs: 1, sm: 8, md: 12,lg: 20 }}>
                          {Array.from(Array(8)).map((_, index) => (
                              <Grid xs={1} sm={4} md={4} lg={5} key={index}>
                                <CourseCard/>
                              </Grid>
                          ))}
                      </Grid>
                  </Box>
                  <Box
                  sx={{
                    paddingTop:'30px'
                  }}
                  >
                        <Buton Rounded={.6} Type='box'>View All Courses</Buton>
                </Box>
            </Box>
           

             
         

        </Box>
      
    </div>
  )
}

export default PopularCourse
