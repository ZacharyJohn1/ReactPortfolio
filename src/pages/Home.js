import React from 'react'

import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hello, My Name is Zachary</h2>
        <div className='info'><p>I'm a Front End Developer who loves to learn</p>
        </div>
        </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          Front-End
        </ol>
      </div>
      
      <div className='skills'>
        <h1>Languages</h1>
        <ol className='list'>
          Javascript
        </ol>
      </div>
    </div>
  )
}

export default Home