import React, { useState } from 'react';
import styles from './AddCard.module.css';

import Input from '../Input/Input';
import Button from '../Button/Button';

const AddCard = ({ setUserList, userList }) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const buttonClickHandler = () => {
    const newUser = {
      userName,
      age,
    };
    setUserList([...userList, newUser]);
  };

  return (
    <div className={styles.container}>
      <Input
        label={'Username'}
        value={userName}
        onChangeHandler={userNameHandler}
      />
      <Input label={'Age(Years)'} value={age} onChangeHandler={ageHandler} />
      <Button text={'Add User'} onClickHandler={buttonClickHandler} />
    </div>
  );
};

export default AddCard;
