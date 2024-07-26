import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import StartPage from './pages/StartPage';

import Home from './pages/Home';

import AboutUs from './pages/AboutUs';

import OurGallery from './pages/OurGallery';

import Reviews from './pages/Reviews';

import AgentLogin from './pages/AgentLogin';

import BirthdayEvents from './pages/BirthdayEvents';

import MarriageEvents from './pages/MarriageEvents';

import PartiesEvents from './pages/PartiesEvents';

import FunctionEvents from './pages/FunctionEvents';

import AdminLogin from './pages/AdminLogin';

import ImagePost from './pages/ImagePost';

import CallBooking from './pages/CallBooking';

import AgentTasks from './pages/AgentTasks';

import AvailableAgents from './pages/AvailableAgents';

// import Packages from './pages/Packages';

import AdminLandingPage from './pages/AdminLandingPage';

import Partners from './pages/Partners';

import DepartmentPartners from './pages/DepartmentPartners';

import PrivacyPolicy from './pages/PrivacyPolicy';

import TermsConditions from './pages/TermsConditions';

import Images from './pages/Images';


function App() {
  return (
   <BrowserRouter>
        <Routes>

           <Route path='/' element = { < StartPage /> } />

           <Route path='/Home' element = { < Home /> } />

           <Route path='/Privacypolicy' element = { <  PrivacyPolicy  /> } />

           <Route path='/TermsConditions' element = { < TermsConditions /> } />

           <Route  path='/Home/Adminlogin'  element= { < AdminLogin /> } />

           <Route path='/Home/Adminlogin/Adminlanding' element = { < AdminLandingPage /> } />

           <Route  path='/Home/Adminlogin/Adminlanding/ImagePost' element= { < ImagePost /> } />

           <Route  path='/Home/Adminlogin/Adminlanding/Availableagents' element= { < AvailableAgents /> } />
           
           <Route  path='/Home/Adminlogin/Adminlanding/Partners' element = { < Partners /> } />

           <Route path="/Home/Adminlogin/Adminlanding/Partners/:department" element = { < DepartmentPartners /> } />

           <Route path='/Home/AboutUs' element = { < AboutUs /> }/>

           <Route  path='/Home/OurGallery' element = { < OurGallery /> } />

           <Route  path='/Home/Reviews' element = { < Reviews /> } />

           <Route  path='/Home/Agentlogin' element = { < AgentLogin /> }/>

           <Route  path='/Home/AgentLogin/Agenttasks'  element = { < AgentTasks /> } />

           {/* <Route path="/Home/AgentLogin/Agenttasks/:eventType" element={< Images />} /> */}

           <Route path="/Home/AgentLogin/Agenttasks/:eventType/:task_id" element={<Images />} />

           <Route  path='/Home/Birthdayevents' element = { < BirthdayEvents /> } />

           <Route  path='/Home/Marriageevents' element = { < MarriageEvents /> } />
            
           <Route  path='/Home/Marriageevents/CallBooking' element = { < CallBooking /> }  />

          {/* <Route path='/Home/Marriageevents/Packages' element = { < Packages /> } /> */}
           
           <Route  path='/Home/Partiesevents' element = { < PartiesEvents /> } />

           <Route  path='/Home/Functionsevents' element = { < FunctionEvents />  } /> 

        </Routes>
   </BrowserRouter>
  );
}

export default App;