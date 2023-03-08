import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function SocialIcons():JSX.Element{

    const iconStyle = 'p-2 cursor-pointer '

  return (
      <div className='flex justify-center items-center'>
          <span className={`${iconStyle}`}>
              <FaFacebookF />
          </span>
          <span className={`${iconStyle}`}>
              <FaTwitter />
          </span >
          <span className={`${iconStyle}`}>
              <FaInstagram />
          </span>
          <span className={`${iconStyle}`}>
              <FaLinkedinIn />
          </span>
      </div>
  )
}

export default SocialIcons
