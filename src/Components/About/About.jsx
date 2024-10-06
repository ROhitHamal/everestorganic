import React from 'react'
import './About.css'
import about_img from '../../assets/img/about3.jpeg'
import play_icon from '../../assets/img/play-icon2.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-section'>
        <div className="about-left">
          <img src={about_img} alt='' className='about-img' />
          <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
          <h3>About Company</h3>
          <h2>Nuturing Soil for Better Crops Tomorrow</h2>
          <p>At Everest Organic Agro Farm, we have been committed to promoting sustainable agricultural
             practices through Vermiculture for over 5 years. Established in 2074 BS (2017 AD), our farm 
             has become a trusted name in producing high-quality Vermi-Compost and providing Earthworms to 
             farmers and agricultural enthusiasts.We believe in empowering farmers by offering not only the
             best organic fertilizers but also the knowledge and resources to adopt eco-friendly farming methods. </p>

          <p>We have supplied Vermi-Compost to over 1,000 farmers and helped more than 500 farmers and entrepreneurs start Vermiculture
           by providing earthworms and training, promoting sustainable agriculture.</p>
        
        </div>
      </div>


      <div className="additional-content">
        <h3>Our Production Capacity:</h3>
        <p><b>Vermi-Compost:</b> We produce up to 150 tons of high-quality Vermi-Compost annually, ensuring a consistent supply for farmers 
          and agricultural enthusiasts seeking to improve soil health and productivity.</p>

        <p><b>Earthworms:</b> We also have the capacity to produce and distribute 10-15 quintals of earthworms per year, supporting farmers 
          and entrepreneurs looking to start or expand their own Vermiculture operations.
        </p>

        <h3>Why Choose Vermiculture?</h3>
        <p>Vermiculture is a sustainable method that transforms organic waste into nutrient-rich vermi-compost through the natural process of 
          earthworm digestion. This all-natural fertilizer enhances soil health, improves crop yields, and reduces the need for chemical inputs. 
          By adopting Vermiculture, farmers contribute to environmental sustainability, reduce landfill waste, and benefit from a cost-effective, 
          chemical-free solution for long-term agricultural success. </p>

          <p>This approach not only promotes eco-friendly practices but also supports a circular economy, aligning with the principles of 
            sustainable farming.</p>
            
            <h3>Our Commitment to Farmers</h3>
            <p>At Everest Organic Agro Farm, we’re not just producers; we are educators. We offer tailored training sessions for 
              farmers who want to adopt Vermiculture. These sessions cover everything from preparing organic waste to nurturing 
              earthworms, and harvesting compost. Our goal is to equip farmers with the knowledge and tools they need to enhance 
              their productivity while promoting sustainable agricultural practices.</p>

              <h3>Looking Forward</h3>
              <p>As we continue to grow, our mission remains the same: to provide sustainable farming solutions that benefit both the 
                environment and our communities. By choosing Vermiculture, 
                you are not only improving your soil but also playing a part in protecting the planet.</p>
      </div>
    </div>
  )
}

export default About
