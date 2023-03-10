"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Icon from './NavigationBarComponents/Icon'
import { IconButton, Toolbar } from '@mui/material'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import MenuButton from './NavigationBarComponents/MenuButton';
import { HiShoppingCart } from 'react-icons/hi'
import { RiSearchLine } from 'react-icons/ri'

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

// bg - [url(${ backgroundArray[activeIdx]})] 

const itemsArray: string[] = ['history', 'menu', 'home'];




function NavigationBar():JSX.Element {
  
  const [navBackground, setNavBackground] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 5
      if (show) {
        setNavBackground(false)
      } else {
        setNavBackground(true)
      }
    }
      document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <div>
      <AppBar 
        position='sticky' 
        color={navBackground?"transparent":"primary"} 
        sx={navBackground ? { bgcolor: '#1403400', boxShadow: 0, height: '70px' } : { bgcolor: '#140342', boxShadow: 0, height: '70px' }}
      >
        <div className="flex flex-row">
          <IconButton>
            <Icon height={120} width={50}/>
          </IconButton>
          <Box sx={{ flexGrow: .9 }} />
          <Toolbar>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <List
                sx={{ display: 'flex' ,flexGrow:1}}
              >
                <MenuButton title="Course" items={itemsArray} />
                <MenuButton title="Course" items={itemsArray} />
                <MenuButton title="Course" items={itemsArray} />
                <MenuButton title="Course" items={itemsArray} />
              </List>   
            </Box>    
              <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGap:'10px' }}>
                <div>
                  <RiSearchLine 
                    size="25px"
                    color="#ffffff"
                    style={{ paddingLeft: '10px' }}
                    />
                </div>
                <div>
                  <HiShoppingCart
                    size="25px"
                    color="#ffffff" 
                    style={{ paddingLeft: '10px' }}
                  />
                </div>
              </List>
            <Box sx={{ display: { xs: 'none',sm:'flex', md: 'flex' } }}>
              <Link href="#" underline="hover" sx={{padding:"15px" ,color: '#ffffff'}}>
                Log in
              </Link>
              <Button
                variant="contained"
                sx={
                  {
                  boxShadow: 0 ,
                  border: 1,
                  borderColor: '#fff',
                  color: "#ffff",
                  borderRadius: 10 ,
                  ":hover": {
                    bgcolor: "#ffff",
                    color: "#140342",
                    boxShadow: 0 ,
                    border: 1,
                    borderColor: '#ffff'
                  }
                }}
              >
                My Button
              </Button>
            </Box>  
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}

export default NavigationBar
