// import React from 'react';
// import { Button } from '@mui/material';
// import '../Styling/StartPage.css';
// import { useNavigate } from 'react-router-dom';
// import truck from '../images/output-onlinegiftools (2).gif';
// import logo  from '../images/memu logo.jpg'
// import man from '../images/waving.gif'
// import Type from './Type';


// const StartPage = () => {
//   const navigate = useNavigate();
  

//   return (
    
//     <div className='title'>
//     <div className="container">
//       <h1 className="subtitle-top">Myem Welcomes You</h1>
//       <img src={truck} alt="" className='truck'/>
//       <img src={logo} alt="" className='title' />
//       <Type/>
//       <img src={man} alt="" className='man' onClick={(e)=>navigate('/Home/Adminlogin')} />
//       <Button 
//         className="styled-button" 
//         variant="contained" 
//         color="primary"  
//         onClick={(e) => navigate('/Home')}
//       >  
//         Continue Here to Go  
//       </Button> 
//     </div>
//     </div>
//   );
// }

// export default StartPage;




import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Styling/StartPage.css';
import truck from '../images/output-onlinegiftools (2).gif';
import logo from '../images/memu_logo-removebg-preview.png';
import { FaRegHandPointRight } from "react-icons/fa";

const StartPage = () => {
  const [showTruck, setShowTruck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showTruck) {
      const timer = setTimeout(() => {
        navigate('/Home');
      }, 7800); // Adjust the duration to match the length of your GIF in milliseconds

      return () => clearTimeout(timer);
    }
  }, [showTruck, navigate]);

  const handleButtonClick = () => {
    setShowTruck(true);
  };

  return (
    <div className='title'>
      {showTruck ? (
        <div className="truck-container">
          <img src={truck} alt="Loading" className="truck-gif" />
        </div>
      ) : (
        <div className="container">
          <h1 className="subtitle-top">Myem Welcomes You</h1>
          <img src={logo} alt="" className='title' onClick={(e)=>navigate('/Home/Adminlogin')} />
          <h1 className='subtitle-bottom'> Makes Events Memorable For U</h1>
          <Button 
            className="styled-button" 
            variant="contained" 
            color="primary"  
            onClick={handleButtonClick}
            style={{height:50, width:250}}
          >  
            Continue Here to Go  
            <FaRegHandPointRight className="hand"/>
          </Button> 
          
        </div>
      )}
    </div>
  );
}

export default StartPage;

