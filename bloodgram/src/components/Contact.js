import React, { useState } from 'react';
import './Contact.css';
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { firstName, lastName, email, password } = formData;

  return (
    <div className='contact'>
      <h1>Please fill the Below important information</h1>
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
        <label>Contact Number</label>
        <input
          value={email}
          onChange={(e) => updateFormData(e)}
          placeholder='Valid Contact Number'
          type='email'
          name='email'
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
