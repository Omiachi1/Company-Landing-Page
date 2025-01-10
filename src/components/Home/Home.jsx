import React from 'react'
import './Home.css'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'


const Home = () => {
  return (
    <div className='home' id='home'>
      <h1>VirtualR build tools <span>for <br/> developers</span></h1>
      <p>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. <br /> Get started today and turn your imagination into immersive reality!</p>
      <div className='home-btn'>
        <button className='str-f'>Start for free</button>
        <button className='doc'>Documentaion</button>
      </div>
      <div className="home-videos">
            <video autoPlay={true} loop={true} muted={true}>
              <source src={video1}/>
            </video>
            <video autoPlay={true} loop={true} muted={true}>
              <source src={video2}/>
            </video>
      </div>
    </div>
  )
}

export default Home
