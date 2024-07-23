import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faGuitar, faPalette, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../Styling/Partners.css';

const departments = [
  { name: 'Food', path: '/Home/Adminlogin/Adminlanding/Partners/food', icon: faUtensils },
  { name: 'Stage Decoration', path: '/Home/Adminlogin/Adminlanding/Partners/stage-decoration', icon: faPalette },
  { name: 'Band', path: '/Home/Adminlogin/Adminlanding/Partners/band', icon: faGuitar },
  { name: 'Security', path: '/Home/Adminlogin/Adminlanding/Partners/security', icon: faShieldAlt }
];

const Partners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    partner_name: '',
    age: '',
    experience: '',
    department: '',
    pic: null,
    address: ''
  });

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, pic: file });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('partner_name', formData.partner_name);
    formDataToSend.append('age', formData.age);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('pic', formData.pic);
    formDataToSend.append('address', formData.address);

    try {
      const response = await axios.post('http://localhost:5000/partners', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('New partner added:', response.data);
      setFormData({
        partner_name: '',
        age: '',
        experience: '',
        department: '',
        pic: null,
        address: ''
      });
      handleModalClose();
    } catch (error) {
      console.error('Error adding partner:', error);
    }
  };

  return (
    <div className="partners-container">
      <h1>Our Departments</h1>
      <div className="departments-grid">
        {departments.map(department => (
          <Link key={department.name} to={department.path} className="department-card">
            <div className="department-icon">
              <FontAwesomeIcon icon={department.icon} />
            </div>
            <p>{department.name}</p>
          </Link>
        ))}
      </div>
      <button className="add-partner-button" onClick={handleModalOpen}>Add Partner</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>&times;</span>
            <h2>Add Partner</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input type="text" name="partner_name" value={formData.partner_name} onChange={handleFormChange} required />
              </label>
              <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleFormChange} required />
              </label>
              <label>
                Experience:
                <input type="text" name="experience" value={formData.experience} onChange={handleFormChange} required />
              </label>
              <label>
                Department:
                <input type="text" name="department" value={formData.department} onChange={handleFormChange} required />
              </label>
              <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleFormChange} required />
              </label>
              <label>
                Picture:
                <input type="file" name="pic" onChange={handleFileChange} required />
              </label>
              <button type="submit">Add Partner</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;
