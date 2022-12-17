import React from 'react';
import Style from '../info/Home.module.css';
import me from '../img/me.jpg';
import classNames from 'classnames';
import EmojiBullet from "../info/EmojiBullet";
import {Box} from "@mui/material";
import {info} from "../info/info";
import "../styles/Home.css"
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <div className='homelinks'>
        <a href="https://www.linkedin.com/in/zachary-schroeder-513852112/" target='_blank'>
        <LinkedIn />
        </a>
            <a href='https://github.com/ZacharyJohn1' target='_blank'>
            <GitHub />
            </a>
            <a href="mailto:zschroeder34@gmail.com">
            <Email />
            </a>
        </div>
         </Box>
      </Box>
   )
}