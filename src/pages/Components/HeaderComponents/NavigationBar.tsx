import React from 'react'
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Icon from './NavigationBarComponents/Icon'
import { IconButton, Toolbar } from '@mui/material'
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuButton from './NavigationBarComponents/MenuButton';



const navItems = ['Home', 'About', 'Contact'];



function NavigationBar():JSX.Element {
  
  const [navBackground, setNavBackground] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100
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
      <AppBar position='sticky' color={navBackground?"transparent":"primary"} >
        <div className="flex flex-row">
          <IconButton>
            <Icon height={120} width={50}/>
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Toolbar>
            <List>
              <div className="flex flex-row">
                {navItems.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </div>
            </List>   
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {/* <MenuButton/> */}
            </Box>    
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}

export default NavigationBar
