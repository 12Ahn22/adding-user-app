import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClickHandler }) => {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Button;
