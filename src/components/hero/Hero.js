// ! child class --> exported to App .js
import React from 'react'
import './Hero.css'
import heroImg from '../../assets/phone.svg' 

const Hero = ({myTheme}) => {

  return (
    <section className='hero' data-theme={myTheme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Visit Vila Shop Landing Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta laboriosam illum commodi fugit, quia dolorem tenetur animi modi culpa nisi tempora nihil maxime nostrum necessitatibus pariatur nam corrupti neque.</p>

          <div className='--flex-start'>
            <button className='--btn btn-p'>Sign Up</button>
            <button className='--btn --btn-danger'>Learn More</button>
          </div>
        </div>

        <div className="hero-image --text-center">
          <img src={heroImg} alt="phone" width={200}/>
        </div>
      </div>
    </section>
  )
}

export default Hero