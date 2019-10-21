import React from 'react';
import { Modal } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

const miniMusicModal = props => {
  const { miniMusic } = props.ModalStore;
  return (
    <div>
      <Modal
        show={miniMusic}
        onhide={() => {
          props.CloseMusic();
        }}
      >
        <p> hey musicSource </p>
      </Modal>{' '}
    </div>
  );
};
export default inject('ModalStore')(observer(miniMusicModal));
