import { useState } from 'react';
import AddCard from './components/AddCard/AddCard';
import UserList from './components/UserList/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div>
      <AddCard setUserList={setUserList} userList={userList} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
