import React from 'react';
import styles from '../Styling/AdminLandingPage.module.css';
import { FaUser, FaPlus, FaStore, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const AdminLandingPage = () => {
  const navigate = useNavigate('')
  return (
    <div className={styles['admin-landing-container']}>
      <Link to='/Home/Adminlogin' className={styles['back-button']}>
        <FaArrowLeft />
      </Link>
      <h1 className={styles['welcome-text']}>Owner Gariki Namaskaram</h1>
      <div className={styles['icon-container']}>
        <div className={`${styles.icon} ${styles['user-icon']}`} title="Click me to view your agents">
          <FaUser onClick={(e)=>navigate('/Home/Adminlogin/Adminlanding/Availableagents')}/>
        </div>
        <div className={`${styles.icon} ${styles['plus-icon']}`} title="Add new event images">
         <FaPlus onClick={(e)=>navigate('/Home/Adminlogin/Adminlanding/Imagepost')} />
        </div>
        <div className={`${styles.icon} ${styles['shop-icon']}`} title="Know your partners">
        <FaStore onClick={(e)=>navigate('/Home/Adminlogin/Adminlanding/Partners')} />
        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;
