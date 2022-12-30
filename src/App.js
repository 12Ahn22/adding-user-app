import { useState } from 'react';
import AddCard from './components/AddCard/AddCard';
import Modal from './components/Modal/Modal';
import UserList from './components/UserList/UserList';

function App() {
  const [userList, setUserList] = useState([{ userName: 'ayo', age: '30' }]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState({
    title: '',
    text: '',
  });
  const closeModalClickHandler = () => {
    setIsOpen(false);
  };

  const openModal = (title, text) => {
    setModalMsg({
      title,
      text,
    });
    setIsOpen(true);
  };

  return (
    <div>
      <AddCard
        setUserList={setUserList}
        userList={userList}
        openModal={openModal}
      />
      <UserList userList={userList} />

      <Modal
        isOpen={isOpen}
        {...modalMsg}
        onCloseHandler={closeModalClickHandler}
      />
    </div>
  );
}

export default App;
