import React from 'react';
import User from './User/User';
import styles from './UserList.module.css';

const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map((user) => (
        <User key={user.userName} {...user} />
      ))}
    </div>
  );
};

export default UserList;
