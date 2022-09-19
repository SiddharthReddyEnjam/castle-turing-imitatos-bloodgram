import React, { useState } from 'react';
import './Contact.css';
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    pincode: '',
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { firstName, lastName, password, pincode } = formData;

  return (
    <div className='contact' id='take'>
      <h1>Please fill the form Below</h1>
      <form className='contact-form'>
        <label>Name</label>
        <input
          value={firstName}
          onChange={(e) => updateFormData(e)}
          placeholder='First Name'
          type='text'
          name='firstName'
          required
        />
        <label>Age</label>
        <input
          value={lastName}
          onChange={(e) => updateFormData(e)}
          placeholder='Years Old'
          type='text'
          name='lastName'
          required
        />
        <label>Blood Group*</label>
        <select className='contact-select'>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>
        <label>Mobile Number</label>
        <input
          value={password}
          onChange={(e) => updateFormData(e)}
          placeholder='Valid Contact Number'
          type='number'
          name='number'
          required
        />
        <label>Area Pincode</label>
        <input
          value={pincode}
          onChange={(e) => updateFormData(e)}
          placeholder='Pincode'
          type='number'
          name='pincode'
          required
        />
        <label>City</label>
        <select className='contact-select'>
          <option>Mumbai</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Korwa</option>
          <option>Delhi</option>
          <option>Banglore</option>
          <option>Vijayawada</option>
          <option>Other</option>
        </select>
        <div className='contact-submit'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
