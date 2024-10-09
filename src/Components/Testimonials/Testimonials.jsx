import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/img/next-icon.png'
import back_icon from '../../assets/img/back-icon.png'
import user_1 from '../../assets/img/nar1.jpg'
import user_2 from '../../assets/img/bhim1.jpg'
import user_3 from '../../assets/img/mena.jpg'
import user_4 from '../../assets/img/bishnu1.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = () => {
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'> 
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Nar Bahadur Hamal</h3>
                            <span>Nepalgunj,Banke, Nepal</span>
                        </div>
                    </div>
                    <p>        
                        I have used vermicompost for my plants, flowers, and vegetables at home. It has given me 
                        satisfying results and improves soil quality for future planting. Vermicompost enriches the soil 
                        with nutrients, making it more fertile.
                        </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Bhim Bahadur Bhandari</h3>
                            <span>Jhumla, Nepal</span>
                        </div>
                    </div>
                    <p>With 100,000+ high-density apple trees planted, our Vermi-Compost has been vital, 
                        improving soil health, strengthening roots, and boosting tree growth, leading to higher fruit yields 
                        with just 2 kg of compost per tree annually.
                        </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Meena KC</h3>
                            <span>Nepalgunj,Banke, Nepal</span>
                        </div>
                    </div>
                    <p>
                    Continuous use of Vermi-Compost transformed dry, infertile land into fertile, productive soil. 
                    We're now successfully growing vegetables, with the compost enriching the soil and supporting healthy crops. 
                        </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Bishnu Khanal</h3>
                            <span>Nepalgunj,Banke, Nepal</span>
                        </div>
                    </div>
                    <p>Vermiculture has completely transformed my farming experience. By raising earthworms, 
                        I turn waste into nutrient-rich compost that boosts soil health naturally. 
                        </p>
                </div>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonials
