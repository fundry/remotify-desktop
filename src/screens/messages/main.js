import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import Header from '../../components/head';
import Official from './official/official';
import Other from './other/other';
import Overview from './overview';

import useWindowWidth from '../../styles/hook_style';

const message = () => {
  const Contain = styled.div``;

  const Hook = useWindowWidth();
  console.log(Hook);

  return (
    <Contain>
      <Header screens="messages" />

      <Flex>
        <Overview />
        <Official screenWidth={Hook} />
        <Other screenWidth={Hook} />
      </Flex>
    </Contain>
  );
};
export default message;
