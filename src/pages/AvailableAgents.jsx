import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styling/AvailableAgents.css';

const AvailableAgents = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const response = await axios.get('https://memu-mongo.onrender.com/agents');
      setAgents(response.data.agents);
    } catch (error) {
      console.error('Error fetching agents:', error);
    }
  };

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
  };

  const handleCloseModal = () => {
    setSelectedAgent(null);
  };

  return (
    <div className="available-agents-container">
      <h1>Agents available at our company</h1>
      <div className="agents-grid">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card" onClick={() => handleAgentClick(agent)}>
            <img src={`data:image/jpeg;base64,${agent.profile_photo}`} alt={agent.full_name} className="agent-photo" />
            <p>{agent.full_name}</p>
          </div>
        ))}
      </div>
      {selectedAgent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedAgent.full_name}</h2>
            <p>Email Address: {selectedAgent.email_address}</p>
            <p>Father's Name: {selectedAgent.fathers_name}</p>
            <p>Age: {selectedAgent.age}</p>
            <p>Profession: {selectedAgent.profession}</p>
            <p>Full Address: {selectedAgent.full_address}</p>
            <p>Password: {selectedAgent.desired_password}</p>
            {selectedAgent.aadhar_card && <img src={`data:image/jpeg;base64,${selectedAgent.aadhar_card}`} alt="Aadhar Card" className="document-photo" />}
            {selectedAgent.pan_card && <img src={`data:image/jpeg;base64,${selectedAgent.pan_card}`} alt="PAN Card" className="document-photo" />}
            {selectedAgent.other_govt_id && <img src={`data:image/jpeg;base64,${selectedAgent.other_govt_id}`} alt="Other Govt ID" className="document-photo" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableAgents;
