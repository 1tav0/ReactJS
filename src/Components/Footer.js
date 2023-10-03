import React from 'react';
import './Footer.css';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  const dateYear = new Date().getFullYear();
  return (
    <div className='footer__wrapper'>
      <div className="footer__child">
        Copyright <CopyrightIcon className='icon'/> {dateYear}
      </div>
    </div>
  )
}

export default Footer