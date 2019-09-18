import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import { FiX, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const main = (props) => {
  const Body = styled.div`padding: 2em;`;

  const { visible } = props;
  console.log(visible, props);
  const [Visibility, setVisibility] = useState(visible);
  console.log(Visibility);

  return (
    <Flex justifyCenter>
      <Modal
        size="lg"
        show={Visibility}
        onHide={() => setVisibility(false)}
        style={{ paddingTop: '10%', padding: '5%' }}
      >
        <Modal.Header
          style={{ padding: '1em', textAlign: 'right', float: 'right' }}
        >
          <Flex justifyBetween>
            <div
              style={{ textAlign: 'right', float: 'right' }}
              onClick={() => setVisibility(false)}
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
          <Flex justifyCenter>
            <Body>
              <h3> HEY IM REZA </h3>
            </Body>
          </Flex>
        </Modal.Body>
      </Modal>
    </Flex>
  );
};

export default main;
