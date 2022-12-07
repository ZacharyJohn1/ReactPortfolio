import React from 'react'
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
            <LinkedIn />
            <GitHub />
            <Email />
        </div>
        <p> &copy; 2022 Zach Schroeder</p>
    </div>
  )
}

export default Footer