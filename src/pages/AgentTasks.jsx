// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Styling/AgentTasks.css';  // Make sure to create a CSS file for styling

// const AgentTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [editingField, setEditingField] = useState({});
//   const [updatedTask, setUpdatedTask] = useState({});
//   const searchParams = new URLSearchParams(window.location.search);
//   const agentEmail = searchParams.get('email'); 
//   const [agentProfile, setAgentProfile] = useState({});
//   const [selectedTask, setSelectedTask] = useState(null);

//   useEffect(() => {
//     const fetchAgentProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/agent_profile', {
//           params: { email: agentEmail }
//         });
//         setAgentProfile(response.data);
//       } catch (error) {
//         console.error('Error fetching agent profile', error);
//       }
//     };

//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/tasks', {
//           params: { email: agentEmail }
//         });
//         setTasks(response.data.tasks);
//       } catch (error) {
//         console.error('Error fetching tasks', error);
//       }
//     };

//     fetchAgentProfile();
//     fetchTasks();
//   }, [agentEmail]);

//   const handleEdit = (task) => {
//     setUpdatedTask({
//       booking_status: task.booking_status !== '--' ? task.booking_status : '',
//       negotiated_amount: task.negotiated_amount !== '--' ? task.negotiated_amount : '',
//       event_status: task.event_status !== '--' ? task.event_status : '',
//       payment_status: task.payment_status !== '--' ? task.payment_status : '',
//       payment_proof: task.payment_proof ? task.payment_proof : null
//     });
//     setEditingField({});
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedTask((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setUpdatedTask((prev) => ({
//         ...prev,
//         payment_proof: reader.result.split(',')[1]
//       }));
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.post('http://localhost:5000/update_task', {
//         id,
//         ...updatedTask
//       });
//       setTasks(prevTasks =>
//         prevTasks.map(task =>
//           task.id === id ? { ...task, ...updatedTask } : task
//         )
//       );
//       setSelectedTask(null);
//     } catch (error) {
//       console.error('Error updating task', error);
//     }
//   };

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//     handleEdit(task);
//   };

//   const handleCloseModal = () => {
//     setSelectedTask(null);
//   };

//   const handleFieldEdit = (field) => {
//     setEditingField((prev) => ({
//       ...prev,
//       [field]: true
//     }));
//   };


//   return (
//     <div className="agent-tasks-container">
//       <img 
//         src={`data:image/jpeg;base64,${agentProfile.profile_photo}`} 
//         alt="Profile" 
//         className="profile-photo" 
//         style={{height:100, width:100, borderRadius:50}}
//       /> 
//       <span>
//         <p>{agentProfile.full_name}</p>
//         <span>
//           <h1>Tasks You Have to Be Done</h1>
//         </span>
//       </span>
//       <div className="tasks-grid">
//         {tasks.map((task) => (

//           <div key={task.id} className="task-card" onClick={() => handleTaskClick(task)}>
//             <img src={`data:image/jpeg;base64,${task.image_data}`} alt={task.event_type} className="task-photo"  />
//             <p>{task.event_type}</p>
//             <div className="task-status-icon">
//               {task.booking_status === 'rejected' || task.booking_status === 'cancelled' ? (
//                 <span className="status-icon cancelled">❌ Cancelled</span>
//               ) : task.payment_proof ? (
//                 <span className="status-icon completed">✅ Completed</span>
//               ) : (
//                 <>
//                   {!task.booking_status && !task.negotiated_amount && !task.event_status && !task.payment_status && !task.payment_proof ? (
//                     <span className="status-icon not-defined">❓ Not Defined</span>
//                   ) : (
//                     <span className="status-icon processing">🔄 Processing</span>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedTask && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={handleCloseModal}>&times;</span>

//             <h2>{selectedTask.name}</h2>
//             <p>ID: {selectedTask.id}</p>
//             <p>Customer Age: {selectedTask.age}</p>
//             <p>Customer's Address: {selectedTask.address}</p>
//             <p>Customer's Mobile: {selectedTask.mobile}</p>
//             <p>Alt Mobile: {selectedTask.alt_mobile}</p>
//             <p>Event Type: {selectedTask.event_type}</p>
//             <p>Event location: {selectedTask.event_place}</p>
//             <p>Event Date: {selectedTask.event_date}</p>
//             <p>Price: {selectedTask.price}</p>
//             <p>Package: {selectedTask.package}</p>
//             <div className="modal-field">
//               <p>Booking Status: {selectedTask.booking_status}</p>
//               <button onClick={() => handleFieldEdit('booking_status')}>Change Status</button>
//               {editingField.booking_status && (
//                 <input
//                   type="text"
//                   name="booking_status"
//                   value={updatedTask.booking_status}
//                   onChange={handleChange}
//                 />
//               )}
//             </div>
//             <div className="modal-field">
//               <p>Negotiated Amount: {selectedTask.negotiated_amount}</p>
//               <button onClick={() => handleFieldEdit('negotiated_amount')}>Change Amount</button>
//               {editingField.negotiated_amount && (
//                 <input
//                   type="number"
//                   name="negotiated_amount"
//                   value={updatedTask.negotiated_amount}
//                   onChange={handleChange}
//                 />
//               )}
//             </div>
//             <div className="modal-field">
//               <p>Event Status: {selectedTask.event_status}</p>
//               <button onClick={() => handleFieldEdit('event_status')}>Change Status</button>
//               {editingField.event_status && (
//                 <input
//                   type="text"
//                   name="event_status"
//                   value={updatedTask.event_status}
//                   onChange={handleChange}
//                 />
//               )}
//             </div>
//             <div className="modal-field">
//               <p>Payment Status: {selectedTask.payment_status}</p>
//               <button onClick={() => handleFieldEdit('payment_status')}>Change Status</button>
//               {editingField.payment_status && (
//                 <input
//                   type="text"
//                   name="payment_status"
//                   value={updatedTask.payment_status}
//                   onChange={handleChange}
//                 />
//               )}
//             </div>
//             <div className="modal-field">
//               <p>Payment Proof:</p>
//               {selectedTask.payment_proof ? (
//                 <img src={`data:image/jpeg;base64,${selectedTask.payment_proof}`} alt="Payment Proof" />
//               ) : (
//                 <p>No proof provided</p>
//               )}
//               <button onClick={() => handleFieldEdit('payment_proof')}>Change Proof</button>
//               {editingField.payment_proof && (
//                 <input type="file" name="payment_proof" onChange={handleFileChange} />
//               )}
//             </div>
//             <button onClick={() => handleUpdate(selectedTask.id)}>Apply Changes</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AgentTasks;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styling/AgentTasks.css';
import { Button } from '@mui/material';
import { Modal, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const AgentTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingField, setEditingField] = useState({});
  const [updatedTask, setUpdatedTask] = useState({});
  const searchParams = new URLSearchParams(window.location.search);
  const agentEmail = searchParams.get('email');
  const [agentProfile, setAgentProfile] = useState({});
  const [selectedTask, setSelectedTask] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [description, setDescription] = useState('');
  const [setMessage] = useState('');
  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  const [showEventTypes, setShowEventTypes] = useState(false);
  const navigate = useNavigate();



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
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

  const openGalleryModalHandler = () => {
    setOpenGalleryModal(true);
  };

  const closeGalleryModalHandler = () => {
    setOpenGalleryModal(false);
  };


  useEffect(() => {
    const fetchAgentProfile = async () => {
      try {
        const response = await axios.get('https://memu-mongo.onrender.com/agent_profile', {
          params: { email: agentEmail }
        });
        setAgentProfile(response.data);
      } catch (error) {
        console.error('Error fetching agent profile', error);
      }
    };

    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://memu-mongo.onrender.com/tasks', {
          params: { email: agentEmail }
        });
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    fetchAgentProfile();
    fetchTasks();
  }, [agentEmail]);

  const handleEdit = (task) => {
    setUpdatedTask({
      package: task.package !== '--' ? task.package : '',
      booking_status: task.booking_status !== '--' ? task.booking_status : '',
      negotiated_amount: task.negotiated_amount !== '--' ? task.negotiated_amount : '',
      event_status: task.event_status !== '--' ? task.event_status : '',
      payment_status: task.payment_status !== '--' ? task.payment_status : '',
      payment_proof: task.payment_proof ? task.payment_proof : null
    });
    setEditingField({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUpdatedTask((prev) => ({
        ...prev,
        payment_proof: reader.result.split(',')[1]
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.post('http://localhost:5000/update_task', {
        id,
        ...updatedTask
      });
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === id ? { ...task, ...updatedTask } : task
        )
      );
      setSelectedTask(null);
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    handleEdit(task);
    setDownloaded(false);  // Reset the download status
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setDownloading(false);  // Reset the downloading status
    setDownloaded(false);   // Reset the downloaded status
  };

  const handleFieldEdit = (field) => {
    setEditingField((prev) => ({
      ...prev,
      [field]: true
    }));
  };

  const handleDownloadImage = async (imageData, fileName) => {
    setDownloading(true);
    setDownloaded(false);
    try {
      const link = document.createElement('a');
      link.href = `data:image/jpeg;base64,${imageData}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloaded(true);
      setDownloading(false);
    } catch (error) {
      console.error('Error downloading image', error);
      setDownloading(false);
    }
  };

  return (
    <>
      <div className="agent-tasks-container">
        <img
          src={`data:image/jpeg;base64,${agentProfile.profile_photo}`}
          alt="Profile"
          className="profile-photo"
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />

        <span>
          <p>{agentProfile.full_name}</p>
          <span>
            <h1 style={{ color: ' #f39c12' }}>Tasks You Have to Be Done</h1>
          </span>
        </span>
        <div className="tasks-grid">
          {tasks.map((task) => (

            <div key={task.id} className="task-card" onClick={() => handleTaskClick(task)}>
              <img src={`data:image/jpeg;base64,${task.image_data}`} alt={task.event_type} className="task-photo" />
              <p>{task.event_type}</p>
              <div className="task-status-icon">
                {!task.booking_status && !task.negotiated_amount && !task.event_status && !task.payment_status && !task.payment_proof ? (
                  <span className="status-icon not-defined">❓ Not Defined</span>
                ) : task.booking_status === 'rejected' || task.booking_status === 'cancelled' ? (
                  <span className="status-icon cancelled">❌ Cancelled</span>
                ) : task.payment_proof ? (
                  <span className="status-icon completed">✅ Completed</span>
                ) : (
                  <span className="status-icon processing">🔄 Processing</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedTask && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>

              <h2>{selectedTask.name}</h2>

              <p>ID: {selectedTask.id}</p>
              <img src={`data:image/jpeg;base64,${selectedTask.image_data}`} alt={selectedTask.event_type} style={{height:'25%',width:'100%'}} />
              <div>
              {/* <button onClick={() => setShowEventTypes(true)}>Upload /Change Image</button> */}
              <button onClick={() => setShowEventTypes((prev) => !prev)}>Upload /Change Image</button>
              {showEventTypes && (
                <div>
                  <Button onClick={() => navigate(`/Home/AgentLogin/Agenttasks/birthday/${selectedTask.id}?email=${agentEmail}`)}>Birthdays</Button>
                  <Button onClick={() => navigate(`/Home/AgentLogin/Agenttasks/marriage/${selectedTask.id}?email=${agentEmail}`)}>Marriages</Button>
                  <Button onClick={() => navigate(`/Home/AgentLogin/Agenttasks/partie/${selectedTask.id}?email=${agentEmail}`)}>Parties</Button>
                  <Button onClick={() => navigate(`/Home/AgentLogin/Agenttasks/function/${selectedTask.id}?email=${agentEmail}`)}>Functions</Button>

                </div>
              )}</div>
              <p>Customer Age: {selectedTask.age}</p>
              <p>Customer's Address: {selectedTask.address}</p>
              <p>Customer's Mobile: {selectedTask.mobile}</p>
              <p>Alt Mobile: {selectedTask.alt_mobile}</p>
              <p>Event Type: {selectedTask.event_type}</p>
              <p>Event location: {selectedTask.event_place}</p>
              <p>Event Date: {selectedTask.event_date}</p>
              <div className="modal-field">
                <p>Package: {selectedTask.package}</p>
                <button onClick={() => handleFieldEdit('package')}>Change Status</button>
                {editingField.package && (
                  <input
                    type="text"
                    name="package"
                    value={updatedTask.package}
                    onChange={handleChange}
                  />
                )}
              </div>
              <div className="modal-field">
                <p>Booking Status: {selectedTask.booking_status}</p>
                <button onClick={() => handleFieldEdit('booking_status')}>Change Status</button>
                {editingField.booking_status && (
                  <input
                    type="text"
                    name="booking_status"
                    value={updatedTask.booking_status}
                    onChange={handleChange}
                  />
                )}
              </div>
              <div className="modal-field">
                <p>Negotiated Amount: {selectedTask.negotiated_amount}</p>
                <button onClick={() => handleFieldEdit('negotiated_amount')}>Change Amount</button>
                {editingField.negotiated_amount && (
                  <input
                    type="number"
                    name="negotiated_amount"
                    value={updatedTask.negotiated_amount}
                    onChange={handleChange}
                  />
                )}
              </div>
              <div className="modal-field">
                <p>Event Status: {selectedTask.event_status}</p>
                <button onClick={() => handleFieldEdit('event_status')}>Change Status</button>
                {editingField.event_status && (
                  <input
                    type="text"
                    name="event_status"
                    value={updatedTask.event_status}
                    onChange={handleChange}
                  />
                )}
              </div>
              <div className="modal-field">
                <p>Payment Status: {selectedTask.payment_status}</p>
                <button onClick={() => handleFieldEdit('payment_status')}>Change Status</button>
                {editingField.payment_status && (
                  <input
                    type="text"
                    name="payment_status"
                    value={updatedTask.payment_status}
                    onChange={handleChange}
                  />
                )}
              </div>
              <div className="modal-field">
                <p>Payment Proof:</p>
                {selectedTask.payment_proof ? (
                  <img src={`data:image/jpeg;base64,${selectedTask.payment_proof}`} alt="Payment Proof" />
                ) : (
                  <p>No proof provided</p>
                )}
                <button onClick={() => handleFieldEdit('payment_proof')}>Change Proof</button>
                {editingField.payment_proof && (
                  <input type="file" name="payment_proof" onChange={handleFileChange} />
                )}
              </div>
              <button onClick={() => handleUpdate(selectedTask.id)}>Apply Changes</button>
              <div className="download-section">
                <Button
                  onClick={() => handleDownloadImage(selectedTask.image_data, `${selectedTask.event_type}.jpg`)}
                  disabled={downloading}
                  variant='contained'
                >
                  {downloading ? 'Downloading...' : 'Download Image'}
                </Button>
                {downloaded && <span className="download-complete">✅</span>}
              </div>
            </div>
          </div>
        )}

      </div>
      <div className='gallery-upload-button'>
        <Button variant='contained' onClick={openGalleryModalHandler} >
          Upload Images to gallery
        </Button></div>

      {/* Gallery Images Modal */}
      <Modal
        open={openGalleryModal}
        onClose={closeGalleryModalHandler}
        aria-labelledby="gallery-modal-title"
        aria-describedby="gallery-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <h2 id="gallery-modal-title">Upload Gallery Images</h2>
          <form onSubmit={handleSubmitGallery} className="gallery-upload-form">
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

    </>
  );
};

export default AgentTasks;
