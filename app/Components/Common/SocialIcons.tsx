import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Box } from '@mui/system';

interface Props{
    Facebook?:string;
    Twitter?:string;
    Instagram?:string;
    Linkedin?:string;
    color?:string;
}

const SocialIcons:React.FC<Props> = ({Facebook, Twitter, Instagram, Linkedin,color}) => {

    const iconStyle = 'p-2 cursor-pointer'

    let colr: string = 'white'
    if (color) {
        colr = color
    }


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
                  <FaFacebookF color={`${colr}`} />
              </a>
          </span>
          <span className={`${iconStyle}`}>
              <a href={`${Twitter}`}>
                  <FaTwitter color={`${colr}`} />
              </a>
          </span >
          <span className={`${iconStyle}`}>
              <a href={`${Instagram}`}>
                  <FaInstagram color={`${colr}`} />
              </a>
          </span>
          <span className={`${iconStyle}`}>
              <a href={`${Linkedin}`}>
                  <FaLinkedinIn color={`${colr}`} />
              </a>
          </span>
    </Box>
  )
}

export default SocialIcons
