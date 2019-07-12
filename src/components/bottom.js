import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import moment from 'moment';
import { ipcRenderer } from 'electron';
import { FiClock, FiCloud } from 'react-icons/fi';

import { observer } from 'mobx-react'

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

  return (
    <div style={Bottom}>
      <Flex justifyBetween>
        <div>
          <h6> Something </h6>
        </div>

        <Flex>
          <FiClock
            style={{
              fontSize: '1.3em',
              paddingTop: '20px',
              paddingRight: '10px',
            }}
          />
          <h6>
            {moment().format('LT')} , {size}
          </h6>
        </Flex>

        <Flex>
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
          </h6>
        </Flex>
      </Flex>
    </div>
  );
};
export default bottom;
