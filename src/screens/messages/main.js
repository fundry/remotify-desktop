import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import Header from '../../components/head';
import Official from './official/official';
import Private from './private/private';
import Overview from './overview';

const message = () => {
  const Body = styled.div`
    padding: 1em;
  `;

  return (
    <div>
      <Header screens="messages" />

      <Flex>
        <Overview />
        <Official />
        <Private />
      </Flex>
    </div>
  );
};
export default message;
