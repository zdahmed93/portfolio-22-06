import React from 'react'
import devImage from '../images/photo-2.png'

function Home() {
  return (
    <div>
      <img src="/images/photo-1.jpg" alt="Profile photo" width="200px" />
      <p>Hello my name is Ahmed. I am a Web Developer.</p>
      <img src={devImage} alt="Web Image" width="40%" />
    </div>
  )
}

export default Home