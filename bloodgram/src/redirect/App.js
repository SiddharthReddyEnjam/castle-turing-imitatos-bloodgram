import './App.css';
import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi'
import {
  BsFillDropletFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
const App = (props) => {
  const [show, setshow] = useState(false);
  return (
    <div className='user-main'>
      <div className='sub_main'>
        <p className='list-para'>
          <h5><BiUser className='list-icon' />Name</h5> <p>{props.name} </p>
          {show ? (
            <div className='contx-list'>
              <div className='list-div2'>
                <h5>
                  <BsFillGeoAltFill className='list-icon' />
                  Location
                </h5>
                <p> {props.location} </p>
                <h5>
                  <BsFillTelephoneFill className='list-icon' />
                  Contact Number{' '}
                </h5>{' '}
                <p>{props.phone}</p>
                <h5>
                  <BsFillDropletFill className='list-icon' />
                  Blood type
                </h5>{' '}
                <p>{props.blood}</p>
                <br />
                <h4 className='syn-list'>Available</h4>
              </div>
              <div className='list-img-div'>
                <img src={props.img} alt='img' className='list-img' />
              </div>
            </div>
          ) : null}
          <button
            type='submit'
            className='list-btn'
            onClick={() => setshow(!show)}
          >
            CLICK
          </button>{' '}
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default App;
