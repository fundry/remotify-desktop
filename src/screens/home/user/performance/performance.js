import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Dropdown } from 'semantic-ui-react';

const Performance = () => {
  const Body = styled.div`padding: 1em;`;

  return (
    <Body>
      <div>
        <Flex justifyCenter>
          <h6> During the </h6>
          <Dropdown />
        </Flex>
      </div>

      <div>
        <h5> USER STATS </h5>
      </div>
    </Body>
  );
};
export default Performance;
