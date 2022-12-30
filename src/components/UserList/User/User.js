import React from 'react';
import styles from './User.module.css';

const User = ({ userName, age }) => {
  return (
    <div className={styles.user}>
      {userName} ({age} years old)
    </div>
  );
};

export default User;
