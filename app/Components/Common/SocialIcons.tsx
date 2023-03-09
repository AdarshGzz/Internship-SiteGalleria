import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';

interface Props{
    Facebook?:string;
    Twitter?:string;
    Instagram?:string;
    LinkedinIn?:string;
}

const SocialIcons:React.FC<Props> = ({Facebook, Twitter, Instagram, LinkedinIn}) => {

    const iconStyle = 'p-2 cursor-pointer '

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
          <span className={`${iconStyle}`}>
              <a href={`${Facebook}`}>
                  <FaFacebookF />
              </a>
          </span>
          <span className={`${iconStyle}`}>
              <a href={`${Twitter}`}>
                  <FaTwitter />
              </a>
          </span >
          <span className={`${iconStyle}`}>
              <a href={`${Instagram}`}>
                  <FaInstagram />
              </a>
          </span>
          <span className={`${iconStyle}`}>
              <a href={`${LinkedinIn}`}>
                  <FaLinkedinIn />
              </a>
          </span>
    </Box>
  )
}

export default SocialIcons
