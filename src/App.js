import { useState } from 'react';
import AddCard from './components/AddCard/AddCard';

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div>
      <AddCard setUserList={setUserList} userList={userList} />
    </div>
  );
}

export default App;
