import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const main = (props) => {
  const Body = styled.div`padding: 2em;`;

  //   const { visibility } = props;
  return (
    <Flex justifyCenter>
      <Body>
        <h3> HEY IM REZA </h3>
      </Body>
    </Flex>
  );
};

export default main;
