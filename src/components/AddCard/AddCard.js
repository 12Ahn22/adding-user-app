import React, { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Container from '../Container/Container';

const AddCard = ({ setUserList, userList, openModal }) => {
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

    // 유효성 검사
    // 빈값 검사
    if (userName.trim().length === 0 || age.trim().length === 0) {
      openModal('Empty Input', 'Please enter a input');
      return;
    }

    // 나이 검사
    const numberAge = Number(age);
    if (Number.isNaN(numberAge) || numberAge < 0) {
      openModal('Invalid Age', 'Please enter a valid age');
      return;
    }

    setUserList([...userList, newUser]);
    setUserName('');
    setAge('');
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
