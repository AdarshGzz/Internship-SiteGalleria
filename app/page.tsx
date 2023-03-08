"use client"

import React from 'react'
import Header from './Components/Header';
import Carousel from './Components/Carousel/Carousel';
import Heading from './Components/Common/Heading';

const Home = () => {
  return (
    <div>
          <Header />
          <Carousel />
          <Heading Subheading ={'Lorem ipsum dolor sit amet, consectetur.'} >Top Students</Heading>

    </div>
  )
}

export default Home
