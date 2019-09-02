import React from 'react';
import { Modal } from 'react-bootstrap';

const Trello = (props) => {
  const { visible } = props;
  return (
    <Modal show={visible}>
      <div>
        <h1> TRELLO MODAL</h1>
      </div>
    </Modal>
  );
};

export default Trello;
