"use client"

import React from 'react'
import Header from './Components/Header';
import Carousel from './Components/Carousel/Carousel';
import Heading from './Components/Common/Heading';
import Buton from './Components/Common/Buton';

const Home = () => {
  return (
    <div>
          <Header />
          <Carousel />
          {/* <Heading Subheading ={'Lorem ipsum dolor sit amet, consectetur.'} >Top Students</Heading> */}
          {/* <Buton Type='bullet' >hello</Buton> */}
    </div>
  )
}

export default Home
