import React, { useState } from 'react';
import styled from 'styled-components';
import Head from '../../components/head';
import Flex from 'styled-flex-component';
import { FiUser, FiLoader, FiToggleLeft } from 'react-icons/fi';
import { FixedSizeList as List } from 'react-window';
import useWindowWidth from '../../styles/hook_style';

const electron = window.require('electron');
const ipc = electron.ipcRenderer;

const Settings = () => {
  // virtaulized window here
  const Setting = () => (
    <div>
      <div>
        <Flex>
          <FiUser style={{ fontSize: '2em' }} />
          <h4 style={{ paddingTop: '5px', paddingLeft: '10px' }}>Account and Profile</h4>
        </Flex>
        <hr />
        <div>
          <Flex justifyBetween>
            <p style={{ paddingLeft: '15px' }}>Do something</p>
            <FiToggleLeft style={{ fontSize: '3em', paddingRight: '15px' }} />
          </Flex>
        </div>
      </div>
      <div>
        <Flex>
          <FiLoader style={{ fontSize: '2em' }} />
          <h4 style={{ paddingTop: '5px', paddingLeft: '10px' }}>
            Personalization and Customization
          </h4>
        </Flex>
        <hr />
        <div>
          <Flex justifyBetween>
            <p style={{ paddingLeft: '15px' }}>Do something</p>
            <FiToggleLeft style={{ fontSize: '3em', paddingRight: '15px' }} />
          </Flex>
        </div>
      </div>
      <div>
        <Flex>
          <FiUser style={{ fontSize: '2em' }} />
          <h4 style={{ paddingTop: '5px', paddingLeft: '10px' }}>Account and Profile</h4>
        </Flex>
        <hr />
        <div>
          <Flex justifyBetween>
            <p style={{ paddingLeft: '15px' }}>Do something</p>
            <FiToggleLeft style={{ fontSize: '3em', paddingRight: '15px' }} />
          </Flex>
        </div>
      </div>
      <div>
        <Flex>
          <FiUser style={{ fontSize: '2em' }} />
          <h4 style={{ paddingTop: '5px', paddingLeft: '10px' }}>Account and Profile</h4>
        </Flex>
        <hr />
        <div>
          <Flex justifyBetween>
            <p style={{ paddingLeft: '15px' }}>Do something</p>
            <FiToggleLeft style={{ fontSize: '3em', paddingRight: '15px' }} />
          </Flex>
        </div>
      </div>
    </div>
  );

  const Body = styled.div`
    padding  : 1em
    background  : transparent
`;

  const hooks = useWindowWidth();
  const [text, setText] = useState('');
  const [Message, setMessage] = useState('');

  const Read = () => {
    ipc.send('retrieve-storage', text);
    ipc.on('read-storage', (event, arg) => {
      setMessage(arg.name);
    });
  };

  const Hover = styled.div({
    cursor: 'pointer',
  });

  return (
    <div>
      <Head screens="setting" />

      <Flex>
        <input placeholder="name" type="text" onChange={e => setText(e.target.value)} />

        <button
          onClick={() => {
            ipc.send('test-storage', text);
          }}
        >
          SEND TEST TEXT{' '}
        </button>
        <button
          onClick={() => {
            Read();
          }}
        >
          READ FROM STORAGE
        </button>

        <p>{Message} </p>
      </Flex>

      <Body>
        <div>
          <div style={{ marginLeft: '2em', marginRight: '2em' }}>
            <Flex justifyBetween>
              <Hover>
                <Flex>
                  <FiUser style={{ fontSize: '1.3em' }} />
                  <h6 style={{ paddingTop: '2px', paddingLeft: '10px' }}>Accounts</h6>
                </Flex>
              </Hover>
              <Hover>
                <Flex>
                  <FiUser style={{ fontSize: '1.3em' }} />
                  <h6 style={{ paddingTop: '2px', paddingLeft: '10px' }}>Personalize</h6>
                </Flex>
              </Hover>
              <Hover>
                <Flex>
                  <FiUser style={{ fontSize: '1.3em' }} />
                  <h6 style={{ paddingTop: '2px', paddingLeft: '10px' }}>Files</h6>
                </Flex>
              </Hover>
              <Hover>
                <Flex>
                  <FiUser style={{ fontSize: '1.3em' }} />
                  <h6 style={{ paddingTop: '2px', paddingLeft: '10px' }}>Team</h6>
                </Flex>
              </Hover>{' '}
            </Flex>
          </div>
          <hr />

          <List height={510} itemSize={100} itemCount={20} width="100%">
            {() => <Setting />}
          </List>
        </div>
      </Body>
    </div>
  );
};
export default Settings;
