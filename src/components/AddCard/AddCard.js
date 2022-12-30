import React, { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Container from '../Container/Container';

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
    <Container>
      <Input
        label={'Username'}
        value={userName}
        onChangeHandler={userNameHandler}
      />
      <Input label={'Age(Years)'} value={age} onChangeHandler={ageHandler} />
      <Button text={'Add User'} onClickHandler={buttonClickHandler} />
    </Container>
  );
};

export default AddCard;
