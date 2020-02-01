import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Spotify from '../spotify';

ReactModal.setAppElement('#root');

const Modal: React.FC<{ isOpen: boolean; setLoading: Function }> = props => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const enter = () => {
    Spotify.redirect();
    closeModal();
    props.setLoading(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: '#BBA64B'
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2>Для продолжения, пожалуйста, войдите в Spotify</h2>
      <button style={{ margin: '1rem auto' }} onClick={enter}>
        ВОЙТИ
      </button>
    </ReactModal>
  );
};

export default Modal;
