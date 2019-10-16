import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

import Chat from './chatWindow';
import Input from './inputWindow';

const Private = () => {
  const Head = styled.div({
    backgroundColor: 'grey',
    padding: '0.5em',
    color: '#fff',
  });

  const Body = styled.div`
    padding: 1em;
    border: 0.5px solid grey;
    height: 560px,
    width: 35em,
  `;

  return (
    <div>
      <Head style={{ boxShadow: '0px 2px 3px grey' }}>
        <p style={{ textAlign: 'center' }}> Private Messages </p>{' '}
      </Head>

      <Body>
        <Chat />
        <Input />
      </Body>
    </div>
  );
};

export default Private;
