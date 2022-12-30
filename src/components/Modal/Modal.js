import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onCloseHandler }) => {
  // if (!isOpen) return <></>;

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Invalid Input</h2>
        <div className={styles.content}>
          <div>Please enter a vallid age</div>
          <Button text={'Okay'} onClickHandler={onCloseHandler} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
