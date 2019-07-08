import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import moment from 'moment';
import { ipcRenderer } from 'electron';

const Bottom = styled.div`
  background-color: #ccc;
  padding: 0.5em;
`;

const updateOnlineStatus = () => {
  ipcRenderer.send(
    'online-status-changed',
    navigator.onLine ? 'online' : 'offline'
  );
};

const bottom = () => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  return (
    <Bottom>
      <Flex justifyBetween>
        <div>
          <h3> Something </h3>
        </div>

        <div>
          <h6>{moment().format('LT')} </h6>
        </div>
      
    <div>
          <h6>
            {navigator.onLine ? (
              'Online , Connection established.'
            ) : (
              <span> offline , check your Connection </span>
            )}
          </h6>
        </div>
      </Flex>
    </Bottom>
  );
};
export default bottom;
