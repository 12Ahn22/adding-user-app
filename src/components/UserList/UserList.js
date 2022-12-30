import React from 'react';
import Container from '../Container/Container';
import User from './User/User';

const UserList = ({ userList }) => {
  return (
    <Container>
      {userList.map((user) => (
        <User key={user.userName} {...user} />
      ))}
    </Container>
  );
};

export default UserList;
