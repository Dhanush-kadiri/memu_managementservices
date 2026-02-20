import React, { useState } from 'react';
import axios from 'axios';
import '../Styling/CallBooking.css';




const CallBooking = () => {
  const image = localStorage.getItem('selectedImage');
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    mobile: '',
    altMobile: '',
    eventType: '',
    eventPlace: '',
    eventDate: '',
    agentName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      image: image || null
    };

    axios.post('https://memu-mongo.onrender.com/book_call', data)
      .then(response => {
        alert('Call booked successfully!');
        
      })
      .catch(error => {
        console.error('Error booking call:', error);
      });
  };

  return (
    <div className="call-booking-container">

      <h1 style={{color:'#f39c12'}}>Call Booking</h1>
      <img src={`data:image/jpeg;base64,${image}`} alt="Selected Event" />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required />
        <input type="text" name="altMobile" value={formData.altMobile} onChange={handleChange} placeholder="Alternate Mobile Number" required />
        <input type="text" name="eventType" value={formData.eventType} onChange={handleChange} placeholder="Type of Event" required />
        <input type="text" name="eventPlace" value={formData.eventPlace} onChange={handleChange} placeholder="Place of Event" required />
        <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
        <input type='text' name='agentName' value={formData.agentName} onChange={handleChange} placeholder='Agent Name (optional)' />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CallBooking;
