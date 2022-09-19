import React from 'react';
import './Donaters.css';
import Slider from 'react-slick';
import ReactStarRating from 'react-star-ratings-component';

export default function Donaters() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoPlay: true,
    speed: 500,
    focusOnSelect: true,
    arrows: false,
  };
  return (
    <div class='review-section'>
      <h2 className='title'> Our Best Reviews</h2>
      <Slider {...settings} className='slider'>
        <div className='card first'>
          <img
            className='img1'
            src='https://i.seadn.io/gcs/files/676d509bbc885f3a7572512575c1312a.png?w=500&auto=format'
          />
          <h6> maiayushhoon</h6>
          <p className='review'>
            "The organization collects blood,
            <br /> much like others, but it also works to keep individuals aware
            of when there is a need for blood donations
          </p>
          <div className='star'>
            <ReactStarRating
              className='star'
              numberOfStar={5}
              numberOfSelectedStar={3}
              colorFilledStar='gold'
              colorEmptyStar='black'
              starSize='30px'
              spaceBetweenStar='10px'
              disableOnSelect={false}
              onSelectStar={(val) => {
                console.log(val);
              }}
            />
          </div>
        </div>
        <div className='card second'>
          <img
            className='img1'
            src='https://i.seadn.io/gae/-Vz79XR_l5fa7Lvn4lVwVzFAy415KQe6Pw3PMwj_NAgcG1DZ_XxDZ8ruPE8U-jxPSz9WwCc9VC4dhtFSx-qvNYw7yINFa-k6eawFVAs?w=500&auto=format'
          />
          <h6> maipratyushhoon</h6>
          <p className='review'>
            "I gave blood yesterday. It was my first <br />
            time ever. Everything was quick and smooth"
          </p>
          <div className='star'>
            <ReactStarRating
              className='star'
              numberOfStar={5}
              numberOfSelectedStar={3}
              colorFilledStar='gold'
              colorEmptyStar='black'
              starSize='30px'
              spaceBetweenStar='10px'
              disableOnSelect={false}
              onSelectStar={(val) => {
                console.log(val);
              }}
            />
          </div>
        </div>
        <div className='card third'>
          <img
            className='img1'
            src='https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?w=500&auto=format'
          />
          <h6> maisiddarthhoon</h6>
          <p className='review1'>
            "मैं ब्लडग्राम रक्त अनुरोधों का जवाब देने के लिए नियमित
            <br /> रूप से अपना रक्त दान करता हूं। जीवन बचाने में
            <br /> योगदान देने पर बहुत गर्व है!"
          </p>
          <div className='star'>
            <ReactStarRating
              className='star'
              numberOfStar={5}
              numberOfSelectedStar={3}
              colorFilledStar='gold'
              colorEmptyStar='black'
              starSize='30px'
              spaceBetweenStar='10px'
              disableOnSelect={false}
              onSelectStar={(val) => {
                console.log(val);
              }}
            />
          </div>
        </div>
        <div className='card fourth'>
          <img
            className='img1'
            src='https://img.seadn.io/files/cb2b0311e551973e857098d336637263.png?auto=format&fit=max&w=384'
          />
          <h6> maismilehoon</h6>
          <p className='review'>
            "The BloodGram helps my grandpa for
            <br /> his blood requirements after his surgery."
          </p>
          <div className='star'>
            <ReactStarRating
              className='star'
              numberOfStar={5}
              numberOfSelectedStar={3}
              colorFilledStar='gold'
              colorEmptyStar='black'
              starSize='30px'
              spaceBetweenStar='10px'
              disableOnSelect={false}
              onSelectStar={(val) => {
                console.log(val);
              }}
            />
          </div>
        </div>
        <div className='card five'>
          <img
            className='img1'
            src='https://img.seadn.io/files/2f06ffe117ec276dfd5a93711a10cba6.png?auto=format&fit=max&w=384'
          />
          <h6> maipriyankahoon</h6>
          <p className='review'>
            " We don't have to worry anymore for our emergencies.We simply
            request blood immediately get contacted by donors. "
          </p>
          <div className='star'>
            <ReactStarRating
              className='star'
              numberOfStar={5}
              numberOfSelectedStar={3}
              colorFilledStar='gold'
              colorEmptyStar='black'
              starSize='30px'
              spaceBetweenStar='10px'
              disableOnSelect={false}
              onSelectStar={(val) => {
                console.log(val);
              }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
