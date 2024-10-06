import React from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Campus.css'
import gallery_1 from '../../assets/img/gall2.jpg';
import gallery_2 from '../../assets/img/gall3.jpg';
import gallery_3 from '../../assets/img/gall4.jpg';
import gallery_4 from '../../assets/img/gall1.jpg';
import white_arrow from '../../assets/img/white-arrow.png';

const Campus = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSeeMoreClick = () => {
    navigate('/gallery'); // Navigate to the Gallery page when the button is clicked
  };

  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn" onClick={handleSeeMoreClick}>
        See more here <img src={white_arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Campus
