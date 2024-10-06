import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/img/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We have a Vision of making better soil for Future Farming.</h1>
        <p>Vermicompost is a nutrient-rich mixture of decomposing organic matter, bedding materials, and vermicast, 
          the excreta of earthworms that
          enriches soil with essential nutrients. It improves soil structure and fertility, supporting 
          sustainable agriculture and healthy plant growth.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt='' /> </button>
      </div>
    </div>
  )
}

export default Hero
