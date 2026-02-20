// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import '../Styling/DepartmentPartners.css';

// const DepartmentPartners = () => {
//   const { department } = useParams();
//   const [partners, setPartners] = useState([]);
//   const [selectedPartner, setSelectedPartner] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchPartners();
//   }, [department]);

//   const fetchPartners = async () => {
//     try {
//       const response = await axios.get(`https://memu-mongo.onrender.com/partners?department=${department}`);
//       setPartners(response.data);
//     } catch (error) {
//       console.error('Error fetching partners:', error);
//     }
//   };

//   const handlePartnerClick = (partner) => {
//     setSelectedPartner(partner);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedPartner(null);
//   };

//   return (
//     <div className="department-partners-container">
//       <h1>{department} Department Partners</h1>
//       <div className="partners-grid">
//         {partners.map((partner) => (
//           <div key={partner.id} className="partner-card" onClick={() => handlePartnerClick(partner)}>
//             {partner.pic && ( // Check if pic is available
//               <img
//                 src={`data:image/jpeg;base64,${partner.pic}`}
//                 alt={partner.partner_name}
//                 className="partner-photo"
//               />
//             )}
//             <p>{partner.partner_name}</p>
//           </div>
//         ))}
//       </div>

//       {isModalOpen && selectedPartner && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={handleCloseModal}>&times;</span>
//             {selectedPartner.pic && ( // Check if pic is available
//               <img
//                 src={`data:image/jpeg;base64,${selectedPartner.pic}`}
//                 alt={selectedPartner.partner_name}
//                 className="modal-photo"
//               />
//             )}
//             <p>Name: {selectedPartner.partner_name}</p>
//             <p>Age: {selectedPartner.age}</p>
//             <p>Experience: {selectedPartner.experience} years</p>
//             <p>Department: {selectedPartner.department}</p>
//             <p>Address: {selectedPartner.address}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DepartmentPartners;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styling/DepartmentPartners.css';
const DepartmentPartners = () => {
  const { department } = useParams();
  const [partners, setPartners] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    fetchPartners();
  }, [department]);
  const fetchPartners = async () => {
    try {
      const response = await axios.get(`https://memu-mongo.onrender.com/partners?department=${department}`);
      setPartners(response.data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };
  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPartner(null);
  };
  return (
    <div className="department-partners-container">
      <h1>{department} Department Partners</h1>
      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card" onClick={() => handlePartnerClick(partner)}>
            {partner.pic && (
              <img
                src={`data:image/jpeg;base64,${partner.pic}`}
                alt={partner.partner_name}
                className="partner-photo"
              />
            )}
            <p>{partner.partner_name}</p>
          </div>
        ))}
      </div>
      {isModalOpen && selectedPartner && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {selectedPartner.pic && (
              <img
                src={`data:image/jpeg;base64,${selectedPartner.pic}`}
                alt={selectedPartner.partner_name}
                className="modal-photo"
              />
            )}
            <p>Name: {selectedPartner.partner_name}</p>
            <p>Age: {selectedPartner.age}</p>
            <p>Experience: {selectedPartner.experience} years</p>
            <p>Department: {selectedPartner.department}</p>
            <p>Address: {selectedPartner.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default DepartmentPartners;
