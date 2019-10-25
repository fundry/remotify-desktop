import React from 'react';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import { FiX, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Features from './features';
import About from './about';

const main = props => {
  const { show } = props.BotStore;
  console.log(show, 'bot');
  return (
    <Flex justifyCenter>
      <Modal
        size="lg"
        show={show}
        onHide={() => props.BotStore.closeModal()}
        style={{ paddingTop: '10%', padding: '3%' }}
      >
        <Modal.Header style={{ padding: '0.5em' }}>
          <Flex justifyBetween>
            <div onClick={() => props.BotStore.closeModal()}>
              <FiX
                style={{
                  fontSize: '2em',
                }}
              />
            </div>

            <h4 style={{ fontWeight: 'normal' }}>Reza</h4>

            <Link to="/settings">
              <FiSettings
                style={{
                  fontSize: '2em',
                }}
              />
            </Link>
          </Flex>
        </Modal.Header>
        <Modal.Body>
          <About />
          <Features />
        </Modal.Body>
      </Modal>
    </Flex>
  );
};

export default inject('BotStore')(observer(main));
