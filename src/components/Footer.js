import React from 'react'
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
        <a href="https://www.linkedin.com/in/zachary-schroeder-513852112/" target='_blank'>
        <LinkedIn />
        </a>
            
            <GitHub />
            <Email />
        </div>
        <p> &copy; 2022 Zach Schroeder</p>
    </div>
  )
}

export default Footer