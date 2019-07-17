import React, { useState } from 'react';
import Header from '../../components/head';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import Integrations from './integrations/integration';
import { FiMusic, FiX, FiSettings, FiPlus, FiSearch } from 'react-icons/fi';

const office = () => {
  const [Tools, setTools] = useState(false);
  console.log('tools' + Tools);
  return (
    <div>
      <Header />
      <Flex justifyCenter>
        <Modal
          show={Tools}
          onHide={() => {
            closeMusic();
          }}
          style={{ paddingTop: '10%', padding: '5%' }}
        >
          <Modal.Header
            style={{ padding: '1em', textAlign: 'right', float: 'right' }}
          >
            <div
              style={{ textAlign: 'right', float: 'right' }}
              onClick={() => setTools(false)}
            >
              <FiX
                style={{
                  fontSize: '2em',
                  textAlign: 'right',
                  position: 'relative',
                  float: 'right',
                }}
              />
            </div>
          </Modal.Header>
          <Modal.Body>
            <Integrations />
          </Modal.Body>
        </Modal>{' '}
      </Flex>

      <div>
        <div style={{ textAlign: 'right ' }}>
          <Flex>
            <div
              onClick={() => {
                setTools(true);
              }}
            >
              <FiPlus
                style={{
                  fontSize: '1.5em',
                  textAlign: 'right',
                  float: 'right',
                }}
              />
            </div>
            <p style={{ paddingTop: '7px' }}> Add Tool </p>
          </Flex>
        </div>

        <div>
          <h3> User Office here </h3>
        </div>
      </div>
    </div>
  );
};

export default office;
