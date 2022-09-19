import React from 'react';
import img1 from '../assets/blood.png';
import '../components/Aboutus.css';

function Aboutwork() {
  return (
    <div className='wrapper'>
      <div className='row'>
        <div className='img_section'>
          <img src={img1} alt='blood' />
        </div>
        <div className='content'>
          <h1>About Us</h1>
          <h2>We love what we do!</h2>
          <h4>What is BloodGram? </h4>
          <p>
            Bloodgram is a platform which is doing extremely noble deed in
            getting blood to the needy.
          </p>
          <h4>How it works?</h4>
          <p>
            We envision that every person receives blood as soon as possible no
            matter where they are.We're building a virtual army of grantees who
            can be traced and contacted for those in need of blood.{' '}
          </p>
          <h4>Our vision and mission!</h4>
          <p>
            Our mission is to ensure that all vulnerable people are protected as
            best as we can, as a non-profit foundation. We envision that every
            person receives blood as soon as possible no matter where they are.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutwork;
