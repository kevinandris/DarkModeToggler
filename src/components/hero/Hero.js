import React from 'react'
import './Hero.css'
import heroImg from '../../assets/phone.svg' 

const Hero = () => {

  return (
    <section className='hero'>
      <div className="container">
        <div className="hero-text">
          <h1>Visit Vila Shop Landing Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta laboriosam illum commodi fugit, quia dolorem tenetur animi modi culpa nisi tempora nihil maxime nostrum necessitatibus pariatur nam corrupti neque.</p>
        </div>

        <div>
          <button>Learn More</button>
          <button>Sign Up</button>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="phone" width={170}/>
        </div>
      </div>
    </section>
  )
}

export default Hero