import React, { useRef } from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onCloseHandler, title, text }) => {
  const modalRef = useRef();

  if (!isOpen) return <></>;

  const backgroundClickHandler = (event) => {
    if (!modalRef.current || modalRef.current.contains(event.target)) return;
    onCloseHandler();
  };

  return (
    <div
      onClick={(event) => backgroundClickHandler(event)}
      className={styles.background}
    >
      <div ref={modalRef} className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <div>{text}</div>
          <Button text={'Okay'} onClickHandler={onCloseHandler} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
