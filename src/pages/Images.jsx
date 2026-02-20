import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styling/MarriageEvents.css';

const Images = () => {
  const { eventType, task_id } = useParams(); // Get both eventType and task_id from URL parameters
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get('email');

  useEffect(() => {
    // Print the task_id to the console
    console.log('Task ID:', task_id);
  }, [task_id]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://memu-mongo.onrender.com/images?event_type=${eventType}`);
        setImages(response.data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [eventType]);

  const handleImageClick = async (image) => {
    try {
      await axios.post('https://memu-mongo.onrender.com/book_call', {
        image: image.image_data, 
        task_id: task_id  
      });
    
      alert('Your selected image has been updated for the task.');
      navigate(`/Home/AgentLogin/Agenttasks?email=${email}`)
    } catch (error) {
      console.error('Error posting image:', error);
      alert('Error updating the image. Please try again.');
    }
  };
  
  return (
    <div className="marriage-events-container">
      <h1 className='page-title'>{eventType} Images</h1>
      <div className="event-blocks">
        {images.map((image) => (
          <div key={image.id} className="event-block" onClick={() => handleImageClick(image)}>
            <img src={`data:image/jpeg;base64,${image.image_data}`} alt={`Event ${eventType}`} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
