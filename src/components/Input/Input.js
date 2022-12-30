import React from 'react';
import styles from './Input.module.css';

/* 
  공통 Input 컴포넌트
*/
const Input = ({ label, value, onChangeHandler, type = 'text' }) => {
  const id = `${label}-input`;
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        value={value}
        onChange={onChangeHandler}
        type={type}
      />
    </div>
  );
};

export default Input;
