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
            <a href='https://github.com/ZacharyJohn1' target='_blank'>
            <GitHub />
            </a>
            <a href="mailto:zschroeder34@gmail.com" target='_blank'>
            <Email />
            </a>
        </div>
        <p> &copy; 2022 Zach Schroeder</p>
    </div>
  )
}

export default Footer