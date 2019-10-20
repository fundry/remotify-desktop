import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { FiSend, FiSmile } from 'react-icons/fi';

const inputWindow = () => {
  const Body = styled.div({
    padding: '0.5em',
  });

  const Input = styled.input({
    width: '25em',
    height: '40px',
    borderRadius: '3px',
    fontSize: '17px',
    padding: '5px',
    paddingLeft: '15px',
    border: '0px',
  });

  const Box = styled.div({
    width: '30em',
    height: '50px',
    border: '1px solid grey',
    padding: '0.5em',
    background: '#fff',
    borderRadius: '2px',
  });

  const Hover = styled.div({
    cursor: 'pointer',
  });

  return (
    <Body>
      <Flex justifyCenter>
        <Box>
          <Flex>
            <Input placeholder="Enter Message" type="text" id="text" />

            <Flex>
              <Hover style={{ paddingRight: '5px', paddingTop: '2px' }}>
                <FiSmile style={{ fontSize: '1.7em', color: 'grey' }} />
              </Hover>
              <Hover style={{ paddingLeft: '5px', paddingTop: '2px' }}>
                <FiSend style={{ fontSize: '1.7em', color: 'grey' }} />
              </Hover>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Body>
  );
};

export default inputWindow;
