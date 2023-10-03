import React from 'react';
import './Footer.css';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  const dateYear = new Date().getFullYear();
  return (
    <div className='footer__wrapper'>
        <p>Copyright <CopyrightIcon className='icon'/>{dateYear}</p>
    </div>
  )
}

export default Footer