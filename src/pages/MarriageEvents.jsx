// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import '../Styling/MarriageEvents.css';
// // import axios from 'axios';

// // const MarriageEvents = () => {
// //   const [images, setImages] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/images?event_type=marriage')
// //       .then(response => {
// //         setImages(response.data.images);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching images:', error);
// //       });
// //   }, []);

// //   const handleImageClick = (image) => {
// //     localStorage.setItem('selectedImage', image.image_data);
// //     navigate('/Home/Marriageevents/Packages');
// //   };

// //   return (
// //     <div className="marriage-events-container">
// //       <nav className="navbar">
      
// //         <div className="nav-links">
// //           <Link to='/Home/AboutUs'> <button className="nav-button">About Us</button></Link>
// //           <Link to='/Home/OurGallery'> <button className="nav-button">Our Gallery</button></Link>
// //           <Link to='/Home/Reviews'> <button className="nav-button">Reviews</button></Link>
// //         </div>
// //       </nav>

// //       <h1 className="page-title">Available at our Company</h1>

// //       <div className="event-blocks">
// //         {images.map((image) => (
// //           <div
// //             className="event-block"
// //             key={image.id}
// //             style={{ backgroundImage: `url(data:image/jpeg;base64,${image.image_data})` }}
// //             onClick={() => handleImageClick(image)}
// //           >
// //             <div className="hover-message">Click to book your call</div>
// //           </div>
// //         ))}
// //         <div className="event-block coming-soon">
// //           <div className="message">New ones are coming soon............</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MarriageEvents;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../Styling/MarriageEvents.css';
// import axios from 'axios';
// import { Button } from '@mui/material';

// const MarriageEvents = () => {
//   const [images, setImages] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:5000/images?event_type=marriage')
//       .then(response => {
//         setImages(response.data.images);
//       })
//       .catch(error => {
//         console.error('Error fetching images:', error);
//       });
//   }, []);

//   const handleImageClick = (image) => {
//     localStorage.setItem('selectedImage', image.image_data);
//     navigate('/Home/Marriageevents/Packages');
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUploadImageClick = () => {
//     if (!selectedFile) {
//       alert('Please select a file first!');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', selectedFile);
//     formData.append('event_type', 'marriage');

//     axios.post('http://localhost:5000/upload', formData)
//       .then(response => {
//         window.location.reload();
//       })
//   };

//   return (
//     <div className="marriage-events-container">
//       <nav className="navbar">
//         <div className="nav-links">
//           <Link to='/Home/AboutUs'> <button className="nav-button">About Us</button></Link>
//           <Link to='/Home/OurGallery'> <button className="nav-button">Our Gallery</button></Link>
//           <Link to='/Home/Reviews'> <button className="nav-button">Reviews</button></Link>
//         </div>
//       </nav>

//       <h1 className="page-title">Available at our Company</h1>

//       <div className="event-blocks">
//         {images.map((image) => (
//           <div
//             className="event-block"
//             key={image.id}
//             style={{ backgroundImage: `url(data:image/jpeg;base64,${image.image_data})` }}
//             onClick={() => handleImageClick(image)}
//           >
//             <div className="hover-message">Click to book your call</div>
//           </div>
//         ))}
//         <div className="event-block coming-soon">
//           <div className="message">New ones are coming soon............</div>
//         </div>
//       </div>

//       <div className="upload-image-container">
       
//         <Button className="upload-image-button" onClick={handleUploadImageClick} variant='contained'  >
//            <input type="file" onChange={handleFileChange} />
//           Upload Your Own Image
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default MarriageEvents;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/MarriageEvents.css';
import axios from 'axios';
import { Button, Modal, Box, Typography } from '@mui/material';

const MarriageEvents = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/images?event_type=marriage')
      .then(response => {
        setImages(response.data.images);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);
  const handleSkip = () => {
    localStorage.removeItem('selectedImage'); // Clear the selected image from local storage
    navigate('/Home/Marriageevents/CallBooking');
  };
  

  const handleImageClick = (image) => {
    localStorage.setItem('selectedImage', image.image_data);
    navigate('/Home/Marriageevents/CallBooking');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadImageClick = () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('event_type', 'marriage');

    axios.post('http://localhost:5000/upload', formData)
      .then(response => {
        setOpen(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error uploading image:', error);
        alert('Failed to upload image');
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
    setPreview(null);
  };

  

  return (
    <div className="marriage-events-container">
    

      <h1 className="page-title">Available at our Company</h1>

      <div className="event-blocks">
        {images.map((image) => (
          <div
            className="event-block"
            key={image.id}
            style={{ backgroundImage: `url(data:image/jpeg;base64,${image.image_data})` }}
            onClick={() => handleImageClick(image)}
          >
            <div className="hover-message">Click to book your call</div>
          </div>
        ))}
        <div className="event-block coming-soon">
          <div className="message">New ones are coming soon............</div>
        </div>
      </div>

      <div className="upload-image-container">
        <Button className="upload-image-button" onClick={handleOpen} variant='contained'>
          Upload Your Own Image
        </Button>
      </div>
      <div className="upload-image-container" style={{margin:20}}>
        <Button className="upload-image-button" onClick={handleSkip} variant='contained'>
           skip this section 
        </Button>
      </div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box">
          <Typography id="modal-title" variant="h6" component="h2">
            Upload Your Own Image
          </Typography>
          <input type="file" onChange={handleFileChange} />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt=" Preview" />
            </div>
          )}
          <Button onClick={handleUploadImageClick} variant='contained'>
            Upload
          </Button>
          <Button onClick={handleClose} variant='contained' color="secondary">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MarriageEvents;
