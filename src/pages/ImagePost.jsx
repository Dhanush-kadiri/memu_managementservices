// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import '../Styling/ImagePost.css';
// // import { FaArrowLeft } from 'react-icons/fa';
// // import styles from '../Styling/AdminLandingPage.module.css';
// // import { Link } from 'react-router-dom';
// // import { Button } from '@mui/material';
// // const ImagePost = () => {
// //   const [eventType, setEventType] = useState('');
// //   const [image, setImage] = useState(null);
// //   const [preview, setPreview] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     setImage(file);
// //     setPreview(URL.createObjectURL(file));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('event_type', eventType);
// //     formData.append('image', image);

// //     try {
// //       const response = await axios.post('http://localhost:5000/upload', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       setMessage(response.data.message); // Use response data to set the message
// //     } catch (error) {
// //       console.error('There was an error uploading the image!', error);
// //       setMessage('Failed to upload image');
// //     }
// //   };

// //   return (
// //     <div className="image-post-container">
// //       <Link to='/Home/Adminlogin/adminlanding' className={styles['back-button']}>
// //         <FaArrowLeft />
// //       </Link>
// //       <h2>Post Your Images Here</h2>
// //       <form onSubmit={handleSubmit} className="image-post-form">
// //         <input
// //           type="text"
// //           placeholder="Event Type"
// //           value={eventType}
// //           onChange={(e) => setEventType(e.target.value)}
// //           className="text-input"
// //           required
// //         />
// //           <input
// //           type="file"
// //           accept="image/*"
// //           onChange={handleImageChange}
// //           className="file-input"
// //           required
// //         />
// //         {preview && <img src={preview} alt="Preview" className="image-preview" />}
        
      
// //         <button type="submit" className="submit-button">Upload</button>
// //       </form>

// //              <Button variant='contained'>
// //                    add image for gallery
// //              </Button>

// //       {message && <p className="message"  >{message}</p>}
// //     </div>


// //   );
// // }

// // export default ImagePost;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaArrowLeft } from 'react-icons/fa';
// import styles from '../Styling/AdminLandingPage.module.css';
// import { Link } from 'react-router-dom';
// import { Button, Modal, TextField, Box } from '@mui/material';

// const ImagePost = () => {
//   const [eventType, setEventType] = useState('');
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState('');
//   const [description, setDescription] = useState('');
//   const [message, setMessage] = useState('');
//   const [openEventModal, setOpenEventModal] = useState(false);
//   const [openGalleryModal, setOpenGalleryModal] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmitEventImages = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('event_type', eventType);
//     formData.append('image', image);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage(response.data.message);
//       setOpenEventModal(false); // Close event modal after successful submission
//     } catch (error) {
//       console.error('There was an error uploading the event image!', error);
//       setMessage('Failed to upload event image');
//     }
//   };

//   const handleSubmitGallery = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('description', description);

//     try {
//       const response = await axios.post('http://localhost:5000/gallery', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage(response.data.message);
//       setOpenGalleryModal(false); // Close gallery modal after successful submission
//     } catch (error) {
//       console.error('There was an error uploading the gallery image!', error);
//       setMessage('Failed to upload gallery image');
//     }
//   };

//   const openEventModalHandler = () => {
//     setOpenEventModal(true);
//   };

//   const closeEventModalHandler = () => {
//     setOpenEventModal(false);
//   };

//   const openGalleryModalHandler = () => {
//     setOpenGalleryModal(true);
//   };

//   const closeGalleryModalHandler = () => {
//     setOpenGalleryModal(false);
//   };

//   return (
//     <div className="image-post-container">
//       <Link to='/Home/Adminlogin/adminlanding' className={styles['back-button']}>
//         <FaArrowLeft />
//       </Link>
//       <h2>Post Your Images Here</h2>

//       {/* Button to open event images modal */}
//       <Button variant='contained' onClick={openEventModalHandler}>
//         Upload Event Images
//       </Button>

//       {/* Event Images Modal */}
//       <Modal
//         open={openEventModal}
//         onClose={closeEventModalHandler}
//         aria-labelledby="event-modal-title"
//         aria-describedby="event-modal-description"
//       >
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//           <h2 id="event-modal-title">Upload Event Images</h2>
//           <form onSubmit={handleSubmitEventImages} className="image-post-form">
//             <input
//               type="text"
//               placeholder="Event Type"
//               value={eventType}
//               onChange={(e) => setEventType(e.target.value)}
//               className="text-input"
//               required
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="file-input"
//               required
//             />
//             {preview && <img src={preview} alt="Preview" className="image-preview" />}
//             <Button type="submit" variant="contained">Upload for Event Images</Button>
//           </form>
//         </Box>
//       </Modal>

//       {/* Button to open gallery images modal */}
//       <Button variant='contained' onClick={openGalleryModalHandler}>
//         Upload Gallery Images
//       </Button>

//       {/* Gallery Images Modal */}
//       <Modal
//         open={openGalleryModal}
//         onClose={closeGalleryModalHandler}
//         aria-labelledby="gallery-modal-title"
//         aria-describedby="gallery-modal-description"
//       >
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//           <h2 id="gallery-modal-title">Upload Gallery Images</h2>
//           <form onSubmit={handleSubmitGallery} className="image-post-form">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="file-input"
//               required
//             />
//             {preview && <img src={preview} alt="Preview" className="image-preview" />}
//             <TextField
//               label="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               fullWidth
//               multiline
//               rows={4}
//               sx={{ mb: 2 }}
//             />
//             <Button type="submit" variant="contained">Upload for Gallery</Button>
//           </form>
//         </Box>
//       </Modal>

//       {/* Display message */}
//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// }

// export default ImagePost;


import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import styles from '../Styling/AdminLandingPage.module.css';
import { Link } from 'react-router-dom';
import { Button, Modal, TextField, Box } from '@mui/material';
import '../Styling/ImagePost.css'

const ImagePost = () => {
  const [eventType, setEventType] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [openEventModal, setOpenEventModal] = useState(false);
  const [openGalleryModal, setOpenGalleryModal] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmitEventImages = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('event_type', eventType);
    formData.append('image', image);

    try {
      const response = await axios.post('https://memu-mongo.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setOpenEventModal(false); // Close event modal after successful submission
    } catch (error) {
      console.error('There was an error uploading the event image!', error);
      setMessage('Failed to upload event image');
    }
  };

  const handleSubmitGallery = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);

    try {
      const response = await axios.post('https://memu-mongo.onrender.com/gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setOpenGalleryModal(false); // Close gallery modal after successful submission
    } catch (error) {
      console.error('There was an error uploading the gallery image!', error);
      setMessage('Failed to upload gallery image');
    }
  };

  const openEventModalHandler = () => {
    setOpenEventModal(true);
  };

  const closeEventModalHandler = () => {
    setOpenEventModal(false);
  };

  const openGalleryModalHandler = () => {
    setOpenGalleryModal(true);
  };

  const closeGalleryModalHandler = () => {
    setOpenGalleryModal(false);
  };

  return (
    <div className="image-post-container">
      <Link to='/Home/Adminlogin/adminlanding' className={styles['back-button']}>
        <FaArrowLeft />
      </Link>
      <h2>Post Your Images Here</h2>

      <div className="buttons-container">
        {/* Button to open event images modal */}
        <Button className="upload-button" variant='contained' onClick={openEventModalHandler}>
          Upload Event Images
        </Button>

        {/* Button to open gallery images modal */}
        <Button className="upload-button" variant='contained' onClick={openGalleryModalHandler}>
          Upload Gallery Images
        </Button>
      </div>

      {/* Event Images Modal */}
      <Modal
        open={openEventModal}
        onClose={closeEventModalHandler}
        aria-labelledby="event-modal-title"
        aria-describedby="event-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <h2 id="event-modal-title">Upload Event Images</h2>
          <form onSubmit={handleSubmitEventImages} className="image-post-form">
            <input
              type="text"
              placeholder="Event Type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="text-input"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
              required
            />
            {preview && <img src={preview} alt="Preview" className="image-preview" />}
            <Button type="submit" variant="contained">Upload for Event Images</Button>
          </form>
        </Box>
      </Modal>

      {/* Gallery Images Modal */}
      <Modal
        open={openGalleryModal}
        onClose={closeGalleryModalHandler}
        aria-labelledby="gallery-modal-title"
        aria-describedby="gallery-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <h2 id="gallery-modal-title">Upload Gallery Images</h2>
          <form onSubmit={handleSubmitGallery} className="image-post-form">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
              required
            />
            {preview && <img src={preview} alt="Preview" className="image-preview" />}
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained">Upload for Gallery</Button>
          </form>
        </Box>
      </Modal>

      {/* Display message */}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default ImagePost;
