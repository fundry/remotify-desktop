import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import {
  FiPlay,
  FiVolume2,
  FiRepeat,
  FiSkipBack,
  FiSkipForward,
} from 'react-icons/fi';

const Music = styled.div``;

const Div = styled.div`padding: 1em;`;

const Btn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const controls = () => {
  return (
    <Div>
      <Flex justifyBetween>
        <Music>
          <Flex column>
            <h4> Halleluyah </h4>
            <p> Johhny Drille </p>
          </Flex>
        </Music>

        <Flex>
          <div style={{ paddingRight: '20px' }}>
            <Btn>
              <FiSkipBack style={{ fontSize: '2.2em', color: 'black' }} />
            </Btn>
          </div>
          <div style={{ paddingRight: '10px' }}>
            <Btn>
              <FiPlay
                style={{
                  fontSize: '3.5em',
                  color: 'black',
                  paddingBottom: '10px',
                }}
              />
            </Btn>
          </div>
          <div style={{ paddingLeft: '5px' }}>
            <Btn>
              <FiSkipForward style={{ fontSize: '2.2em', color: 'black' }} />
            </Btn>
          </div>
        </Flex>

        <div>
          <Flex>
            <div style={{ paddingRight: '20px' }}>
              <Btn>
                <FiRepeat style={{ fontSize: '1.5em', color: 'black' }} />
              </Btn>
            </div>
            <div>
              <Btn>
                <FiVolume2 style={{ fontSize: '1.7em', color: 'black' }} />
              </Btn>
            </div> 
          </Flex>
        </div>
      </Flex>
    </Div>
  );
};

export default controls;
