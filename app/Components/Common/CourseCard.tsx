import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import RatingSection from './CourseCardComp/RatingSection';
import CourseDetails from './CourseCardComp/CourseDetails';

interface Props { 
    courseLink?: string;
    courseImg?:string,
    Rating?:number,
    year?:number,
    Title?:string,
    lessons?:number,
    duration?:string,
    type?:string,
    creatorImg?:string,
    creatorName?:string,
    previousPrice?:number,
    price?:number 
}

const CourseCard: React.FC<Props> = ({courseLink,courseImg,Rating,year,Title,lessons,duration,type,creatorImg,creatorName,previousPrice,price}) => {

    let url = 'https://i.ibb.co/K2R1wTg/download-1.jpg'
    if (creatorImg){
        url = creatorImg
    }

  return (
    <div>
       <Box
        sx={{
                height: 'auto',
                width: '267px',
                border:'1px solid #EDEDED',
                borderRadius: '8px'
        }}
       
       >   
            <a href={`${!courseLink?'#':courseLink}`}>
                <Box
                sx={{
                    overflow:'hidden',
                    borderRadius:'8px 8px 0 0',
                    display:'flex',
                }}
                >
                    <img 
                            className='w-[100%] align-center overflow-clip  transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '
                          src={`${!courseImg ? 'https://i.ibb.co/K2R1wTg/download-1.jpg' : courseImg}`}
                    />
                </Box>
                <Box 
                sx={{
                    padding:'10px',
                    display:'flex',
                    flexDirection:'column',
                    gap:'10px'
                }}
                >
                      <Box>
                          <RatingSection value={!Rating ? 4.6 : Rating} year={!year?1990:year} />
                      </Box>
                      <Box>
                          <Typography
                              sx={{
                                  color: '#140342',
                                  fontSize: `17px`,
                                  fontWeight: '300',
                                  lineHeight: '30px'
                              }}
                          >
                              {`${!Title ? 'Angular - The Complete Guide (2022 Edition)' : Title}`}
                          </Typography>
                      </Box>
                      <Box>
                          <CourseDetails 
                              lessons={!lessons?6:lessons} 
                              duration={!duration?'3h 65m':duration}
                              type={!type?'Beginner':type}  
                          />
                      </Box>
                      <hr />
                      <Box
                       sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap:'50px'

                       }}
                      >
                          <Box
                              sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                              }}
                          >
                              <Box
                                  sx={{
                                      width: '30px',
                                      height: '30px',
                                      overflow: 'hidden',
                                      borderRadius: '50%',
                                      backgroundImage: `url(${url})`,
                                      backgroundSize: '100% 100%',
                                      backgroundPosition: 'center',
                                      backgroundRepeat: 'no-repeat',
                                  }}
                              />
                              <Typography
                                  sx={{
                                      color: '#4F547B',
                                      fontSize: '14px',
                                      fontWeight: 1,
                                      marginLeft: '10px'

                                  }}
                              >
                                  {!creatorName?'Ali Toofan':creatorName}
                              </Typography>
                          </Box>
                          <Box
                              sx={{
                                  display: 'flex',
                                  alignItems: 'center'

                              }}
                          >
                              <Typography
                                  sx={{
                                      color: '#4F547B',
                                      fontSize: '15px',
                                      paddingRight: '10px',
                                      textDecoration: 'line-through'
                                  }}
                              >
                                  {!previousPrice ? `$${170}` : `$${previousPrice}`}
                              </Typography>
                              <Typography
                                  sx={{
                                      color: '#140342',
                                      fontSize: '18px'
                                  }}
                              >
                                  {!price ? `$${79}` : `$${price}`}
                              </Typography>
                          </Box>
                      </Box>
                </Box>
                
            </a>
        </Box> 
     </div>
   )
 }

export default CourseCard






       
           


