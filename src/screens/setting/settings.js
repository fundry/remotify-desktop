import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiUser, FiToggleLeft, FiLoader, FiRefreshCcw } from 'react-icons/fi';
import { FixedSizeList as List } from 'react-window';
import { Modal } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

// import useWindowWidth from '../../styles/hook_style';
import Head from '../../components/head';

const electron = window.require('electron');
const ipc = electron.ipcRenderer;

const Settings = props => {
  // virtaulized window here

  const Body = styled.div`
    padding  : 1em
    background  : transparent
`;
  const Hover = styled.div({
    cursor: 'pointer',
  });

  const Title = styled.h5`
    font-weight: normal;
  `;

  const Button = styled.button`
    background: #0e2f5a;
    text-align: right;
    border-radius: 3px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.2em 1.7em;
    font-size: 1em;
    outline: none;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Setting = () => (
    <div>
      <div>
        <Flex>
          <FiUser style={{ fontSize: '1.5em' }} />
          <Title style={{ paddingTop: '5px', paddingLeft: '10px' }}>Account and Profile</Title>
        </Flex>
        <hr />
        <div>
          <Flex justifyBetween>
            <p style={{ paddingLeft: '15px' }}>Do something</p>
            <FiToggleLeft style={{ fontSize: '2em', paddingRight: '15px' }} />
          </Flex>
        </div>
      </div>
      <div>
        <Flex>
          <FiLoader style={{ fontSize: '1.5em' }} />
          <Title style={{ paddingTop: '5px', paddingLeft: '10px' }}>
            Personalization and Customization
          </Title>
        </Flex>
        <hr />
        <div>
          <Flex justifyBetween>
            <p style={{ paddingLeft: '15px' }}>Do something</p>
            <FiToggleLeft style={{ fontSize: '2em', paddingRight: '15px' }} />
          </Flex>
        </div>
      </div>
      <div>
        <Flex>
          <FiUser style={{ fontSize: '1.5em' }} />
          <Title style={{ paddingTop: '5px', paddingLeft: '10px' }}>Account and Profile</Title>
        </Flex>
        <hr />
        <div>
          <Flex justifyBetween>
            <p style={{ paddingLeft: '15px' }}>Do something</p>
            <FiToggleLeft style={{ fontSize: '2em', paddingRight: '15px' }} />
          </Flex>
        </div>
      </div>
      <div>
        <Flex>
          <FiUser style={{ fontSize: '1.5em' }} />
          <Title style={{ paddingTop: '5px', paddingLeft: '10px' }}>Account and Profile</Title>
        </Flex>
        <hr />
        <div>
          <Flex justifyBetween>
            <p style={{ paddingLeft: '15px' }}>Do something</p>
            <FiToggleLeft style={{ fontSize: '2em', paddingRight: '15px' }} />
          </Flex>
        </div>
      </div>
    </div>
  );

  // const hooks = useWindowWidth();
  const { opened, closeModal } = props.SettingStore;
  const [Reset, setReset] = useState(false);

  {
    Reset
      ? setTimeout(() => {
          setReset(false);
        }, 3000)
      : null;
  }

  const handleReset = () => {
    setReset(true);
    ipc.send('clear-details');
  };

  return (
    <Modal
      show={opened}
      onHide={() => {
        closeModal();
      }}
      style={{ marginTop: '30px' }}
      size="lg"
    >
      <Head screens="setting" />

      <Body>
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

        {Reset ? (
          <div>
            <br />
            <Flex justifyCenter>
              <FiLoader style={{ fontSize: '3em' }} />{' '}
            </Flex>
          </div>
        ) : (
          <div>
            <List height={510} itemSize={100} itemCount={20} width="100%">
              {() => <Setting />}
            </List>

            <Flex justifyCenter>
              <Button
                onClick={() => {
                  handleReset();
                }}
              >
                <Flex>
                  <FiRefreshCcw style={{ fontSize: '1.3em' }} />
                  <p style={{ fontSize: '0.9em', paddingLeft: '7px' }}> Reset Default</p>
                </Flex>
              </Button>
            </Flex>
          </div>
        )}
      </Body>
    </Modal>
  );
};

export default inject('SettingStore')(observer(Settings));
