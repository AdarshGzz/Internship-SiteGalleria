"use client"
import React from "react";
import { useState } from "react"
import CarouselBtn from "./CarouselBtn";
import CarouselBox from "./CarouselBox";
import MiddleText from "./MiddleText";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'


const bgArray = [
    'https://www.linkpicture.com/q/bg_57.png',
    'https://i.ibb.co/tJ0z5Gk/pexels-format-1029757.jpg',
    'https://i.ibb.co/DwLR0PD/pexels-photo-3584994.webp',
]


import { Box } from '@mui/material';


const Carousel = () => {

    const [activeIdx, setActiveIdx] = useState(0)


    const updateIndex = (newIndex:number) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= bgArray.length) {
            newIndex = bgArray.length - 1;
        }
        setActiveIdx(newIndex);
    }

    const url = bgArray[activeIdx]


  return (
    <div>
          <CarouselBox url = {url}>
            <Box
             sx={{
                height: '100%',
                width: '100%',
                display:'flex',
                justifyContent:'space-between',
                alignItems: 'center',
                paddingLeft: 5,
                paddingRight: 5,
                backgroundSize:'cover',
                backgroundColor: '#732ed44d',
             }}
            >
              <CarouselBtn onclick={() => updateIndex(activeIdx - 1)}> <BsFillCaretLeftFill /> </CarouselBtn>
              <Box>
                <MiddleText/>
              </Box>
              <CarouselBtn onclick={() => updateIndex(activeIdx + 1)}> <BsFillCaretRightFill/> </CarouselBtn>
            </Box>
            
          </CarouselBox>
    </div>
  )
}

export default Carousel
