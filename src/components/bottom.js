import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import moment from 'moment';
import { ipcRenderer } from 'electron';
import { FiClock, FiCloud, FiSmile } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

const updateOnlineStatus = () => {
  ipcRenderer.send(
    'online-status-changed',
    navigator.onLine ? 'online' : 'offline'
  );
};

const bottom = (props) => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  const size = props.width;

  const Bottom = {
    backgroundColor: ' #ccc',
    paddingLeft: `${size}`,
    paddingTop: '10px',
    paddingRight: '10px',
  };

  const Hover = styled.div({
    cursor: 'pointer',
  });

  return (
    <div style={Bottom}>
      <Flex justifyBetween>
        <Hover style={{ paddingLeft: '5px' }}>
          <Link to="/files">
            <h6> 30gb Available </h6>
          </Link>
        </Hover>

        <Flex>
          <FiClock
            style={{
              fontSize: '1.3em',
              paddingTop: '20px',
              paddingRight: '10px',
            }}
          />
          <h6>{moment().format('LT')}</h6>
        </Flex>

        <Flex>
          <Hover style={{ paddingLeft: '10px' }}>
            <Flex>
              <h6 style={{ paddingRight: '10px' }}>Reza</h6>

              <FiSmile style={{ fontSize: '1.2em' }} />
            </Flex>
          </Hover>
          <Hover>
            <h6>
              {navigator.onLine ? (
                <div>
                  <FiCloud
                    style={{
                      fontSize: '1.3em',
                      paddingTop: '15px',
                      paddingRight: '10px',
                    }}
                  />
                  <span> Online </span>
                </div>
              ) : (
                <span> offline , check your Connection </span>
              )}
            </h6>{' '}
          </Hover>
        </Flex>
      </Flex>
    </div>
  );
};
export default bottom;
