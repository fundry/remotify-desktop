import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { FiSend, FiSmile } from 'react-icons/fi';

const inputWindow = props => {
  const { screenWidth } = props;
  const Body = styled.div({
    padding: '0.5em',
  });

  const Input = styled.input({
    // width: !screenWidth >= 950 ? '26em' : '20em',
    width: '27em',
    height: '40px',
    borderRadius: '3px',
    fontSize: '17px',
    padding: '5px',
    paddingLeft: '15px',
    border: '0px',
  });

  const Box = styled.div({
    // width: !screenWidth >= 950 ? '30em' : '27.5em',
    width: '30em',
    height: '50px',
    border: '1px solid grey',
    padding: '0.2em',
    background: '#fff',
    borderRadius: '2px',
  });

  const Hover = styled.div({
    cursor: 'pointer',
  });

  return (
    <Body>
      <Box>
        <Flex>
          <Input placeholder="Enter Message" type="text" id="text" />

          <Flex>
            <Hover style={{ paddingRight: '5px', paddingTop: '3.5px' }}>
              <FiSmile style={{ fontSize: '1.7em', color: 'grey' }} />
            </Hover>
            <Hover style={{ paddingLeft: '5px', paddingTop: '3.5px' }}>
              <FiSend style={{ fontSize: '1.7em', color: 'black' }} />
            </Hover>
          </Flex>
        </Flex>
      </Box>
    </Body>
  );
};

export default inputWindow;
