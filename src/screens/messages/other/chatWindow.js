import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

import { FixedSizeList as List } from 'react-window';

const chatWindow = () => {
  const Mock = [
    { message: 'Hi' },
    { message: 'Hey' },
    { message: 'Howdy' },
    { message: 'Who' },
    { message: 'Hello' },
  ];

  const Messages = () => (
    <div>
      {' '}
      {Mock.map(({ message }) => (
        <ul> {message} </ul>
      ))}{' '}
    </div>
  );

  const Body = styled.div({
    padding: '0.5em',
  });

  return (
    <Body>
      <List height={550} itemSize={50} itemCount={20} width="25em">
        {() => <Messages />}
      </List>
    </Body>
  );
};

export default chatWindow;
