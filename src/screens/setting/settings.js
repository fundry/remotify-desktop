import React from 'react';
import styled from 'styled-components';
import Head from '../../components/head';
import Flex from 'styled-flex-component';
import { FiUser, FiLoader, FiToggleLeft } from 'react-icons/fi';
import { FixedSizeList as List } from 'react-window';

const Settings = () => {
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

  const Search = styled.input`  
    width : 80%
    height : 6.5vh
    padding-left : 15px
  `;

  return (
    <div>
      <Head />
      <div>
        <br />
        <Flex justifyCenter>
          <Search placeholder="Search Settings" />
        </Flex>
        <hr />
      </div>

      <Body>
        <List height={430} itemSize={50} itemCount={4} width="100%">
          {() => <Setting />}
        </List>
      </Body>
    </div>
  );
};
export default Settings;
