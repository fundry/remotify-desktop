import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FiX } from 'react-icons/fi';

const Trello = (props) => {
  const { visible } = props;
  const [Visbility, setVisibility] = useState(visible);
  return (
    <Modal show={Visbility}>
      <Modal.Header>
        <div
          onClick={() => {
            setVisibility(false);
          }}
        >
          <FiX style={{ fontSize: '1.5em' }} />
        </div>
      </Modal.Header>

      <div>
        <h1> TRELLO MODAL</h1>
      </div>
    </Modal>
  );
};

export default Trello;
