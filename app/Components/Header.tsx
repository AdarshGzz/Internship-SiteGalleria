import React from 'react'
import UpperNav from './HeaderComponents/UpperNav'
import NavigationBar from './HeaderComponents/NavigationBar'


function Header():JSX.Element {
  return (
    <div className="flex flex-col sticky  z-10">
        <div className='relative'>
            <UpperNav />
        </div>
        <div className="fixed w-full mt-10 float-right" >
            <NavigationBar />
            {/* <Sample/> */}
        </div>
    </div>
  )
}

export default Header
