import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useNavigate } from 'react-router-dom';
import gallery_1 from '../../assets/gallery/galley1.jpg';
import gallery_2 from '../../assets/gallery/galley2.jpg';
import gallery_3 from '../../assets/gallery/galley3.jpg';
import gallery_4 from '../../assets/gallery/galley4.jpg';
import gallery_5 from '../../assets/gallery/galley5.jpg';
import gallery_6 from '../../assets/gallery/galley6.jpg';
import gallery_7 from '../../assets/gallery/galley7.jpg';
import gallery_8 from '../../assets/gallery/galley8.jpg';
import gallery_9 from '../../assets/gallery/galley9.jpg';
import gallery_10 from '../../assets/gallery/galley10.jpg';
import gallery_11 from '../../assets/gallery/galley11.jpg';
import gallery_12 from '../../assets/gallery/galley12.jpg';
import gallery_13 from '../../assets/gallery/galley13.jpg';
import gallery_14 from '../../assets/gallery/galley14.jpg';
import gallery_15 from '../../assets/gallery/galley15.jpg';
import gallery_16 from '../../assets/gallery/galley16.jpg';
import gallery_17 from '../../assets/gallery/galley17.jpg';
import gallery_18 from '../../assets/gallery/galley18.jpg';
import gallery_19 from '../../assets/gallery/galley19.jpg';
import gallery_20 from '../../assets/gallery/galley20.jpg';
import gallery_21 from '../../assets/gallery/galley21.jpg';
import gallery_22 from '../../assets/gallery/galley22.jpg';
import gallery_23 from '../../assets/gallery/galley23.jpg';
import gallery_24 from '../../assets/gallery/galley24.jpg';
import gallery_25 from '../../assets/gallery/galley25.jpg';
import gallery_26 from '../../assets/gallery/galley26.jpg';
import gallery_27 from '../../assets/gallery/galley27.jpg';
import gallery_28 from '../../assets/gallery/galley28.jpg';
import gallery_29 from '../../assets/gallery/galley29.jpg';
import gallery_30 from '../../assets/gallery/galley30.jpg';
import gallery_31 from '../../assets/gallery/galley31.jpg';
import gallery_32 from '../../assets/gallery/galley32.jpg';
import gallery_33 from '../../assets/gallery/galley33.jpg';
import gallery_34 from '../../assets/gallery/galley34.jpg';
import './Gallery.css';

const images = [
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
  gallery_7,
  gallery_8,
  gallery_9,
  gallery_10,
  gallery_11,
  gallery_12,
  gallery_13,
  gallery_14,
  gallery_15,
  gallery_16,
  gallery_17,
  gallery_18,
  gallery_19,
  gallery_20,
  gallery_21,
  gallery_22,
  gallery_23,
  gallery_24,
  gallery_25,
  gallery_26,
  gallery_27,
  gallery_28,
  gallery_29,
  gallery_30,
  gallery_31,
  gallery_32,
  gallery_33,
  gallery_34,

];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close the full-screen image overlay
  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  // Function to go back to the homepage
  const goBackToHome = () => {
    navigate('/');
  };

  // Handle scroll to show/hide header based on scroll direction
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false); // Hide header when scrolling down
    } else {
      setShowHeader(true);  // Show header when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="gallery-page">
      {/* Fixed Header */}
      <div className={`fixed-header ${showHeader ? 'visible' : 'hidden'}`}>
        <div className="company-name">
          <span>E</span>verest <span>O</span>rganic <span>A</span>gro <span>F</span>arm
        </div>
        <button className="go-back-btn" onClick={goBackToHome}>
          Go Back
        </button>
      </div>

      {/* Gallery Container */}
      <div className="gallery-container">
        <h1>Our Gallery</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                style={{ width: '100%', display: 'block', borderRadius: '8px', cursor: 'pointer' }}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Full-screen Image Overlay */}
        {selectedImage && (
          <div className="overlay" onClick={handleCloseOverlay}>
            <img
              src={selectedImage}
              alt="Full view"
              className="full-image"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
            <button className="close-btn" onClick={handleCloseOverlay}>
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
