import React from 'react';
import List_of_user_set from './List_of_user_set';
import App from './App';

const final = () => {
  return (
    <div>
      {List_of_user_set.map((value, index) => {
        return (
          <App
            img={value.img}
            name={value.name}
            location={value.location}
            phone={value.phone}
            blood={value.blood}
          />
        );
      })}
      <div className='goto'>
        <h3>Search for Blood Bank </h3>
        <a href='#'>Click Here</a>
      </div>
    </div>
  );
};

export default final;
