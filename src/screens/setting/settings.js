import React from 'react';
import styled from 'styled-components';
import Head from '../../components/head';
import Flex from 'styled-flex-component';
import { FiUser, FiLoader, FiToggleLeft } from 'react-icons/fi';
import { FixedSizeList as List } from 'react-window';
import useWindowWidth from '../../styles/hook_style';

const Settings = () => {
  // virtaulized window here
  const Setting = () => {
    return (
      <div>
        <div>
          <Flex>
            <FiUser style={{ fontSize: '2em' }} />
            <h4 style={{ paddingTop: '5px', paddingLeft: '10px' }}>
              Account and Profile
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
            <h4 style={{ paddingTop: '5px', paddingLeft: '10px' }}>
              Account and Profile
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
            <h4 style={{ paddingTop: '5px', paddingLeft: '10px' }}>
              Account and Profile
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
      </div>
    );
  };

  const Body = styled.div`
    padding  : 1em
    background  : transparent
`;

  const hooks = useWindowWidth();

  return (
    <div>
      <Head screens={'setting'} />

      <Body>
        {hooks >= 700 ? (
          <div>
            {' '}
            <List height={460} itemSize={50} itemCount={4} width="100%">
              {() => <Setting />}
            </List>{' '}
          </div>
        ) : (
          <div>
            <div style={{ marginLeft: '2em', marginRight: '2em' }}>
              <Flex justifyBetween>
                <Flex>
                  <FiUser style={{ fontSize: '1.3em' }} />
                  <h6 style={{ paddingTop: '2px', paddingLeft: '10px' }}>
                    Account
                  </h6>
                </Flex>

                <Flex>
                  <FiUser style={{ fontSize: '1.3em' }} />
                  <h6 style={{ paddingTop: '2px', paddingLeft: '10px' }}>
                    Account
                  </h6>
                </Flex>

                <Flex>
                  <FiUser style={{ fontSize: '1.3em' }} />
                  <h6 style={{ paddingTop: '2px', paddingLeft: '10px' }}>
                    Account
                  </h6>
                </Flex>

                <Flex>
                  <FiUser style={{ fontSize: '1.3em' }} />
                  <h6 style={{ paddingTop: '2px', paddingLeft: '10px' }}>
                    Account
                  </h6>
                </Flex>
              </Flex>
            </div>
            <hr />
            <List height={460} itemSize={50} itemCount={4} width="100%">
              {() => <Setting />}
            </List>{' '}
          </div>
        )}
      </Body>
    </div>
  );
};
export default Settings;
