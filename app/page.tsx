"use client"

import React from 'react'
import Header from './Components/Header';
import Carousel from './Components/Carousel/Carousel';
import Heading from './Components/Common/Heading';
import Buton from './Components/Common/Buton';
import TopStudentCard from './Components/Common/TopStudentCard';
import CourseCard from './Components/Common/CourseCard';
import EventCard from './Components/Common/EventCard';
import PopularCourse from './Components/PopularCourse';
import Dropdown from './Components/Common/Dropdown';

const Home = () => {
  return (
    <div>
          <Header />
          <Carousel />
          {/* <Heading Subheading ={'Lorem ipsum dolor sit amet, consectetur.'} >Top Students</Heading> */}
          {/* <Buton Type='bullet' >hello</Buton> */}
          
      {/* <TopStudentCard Imgurl='https://i.ibb.co/K2R1wTg/download-1.jpg' /> */}
          {/* <CourseCard/> */}
         {/* <EventCard/> */}
         <PopularCourse/>

         {/* <Dropdown optionArray={['1','3']}>Filter</Dropdown> */}
         
    </div>
  )
}

export default Home
