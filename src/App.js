import React, { useState } from 'react';
import './styles/modal.css';
import Modal from './components/Modal.js'

function App() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (e) => {
    setShowModal(true);
  }

  const handleCloseModal = (e) => {
    if (e.target.classList.contains('close-modal')) {
      setShowModal(false)
    }
  }

  return (
    <div className="container --center-all --100vh close-modal">
      {showModal ? <Modal closeModal={handleCloseModal} /> : null}
      <div className="profile-image">
        <img src="https://i.ibb.co/VmHC81P/monkeyboy-1.jpg" alt="" />
        <h1>Modal Profile</h1>
        <p>Click Button Below</p>
        <button onClick={handleShowModal} className="modal-btn">Open Modal</button>
      </div>
    </div>
  );
}

export default App;
