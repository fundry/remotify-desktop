import React from 'react';
import Flex from 'styled-Flex-component';
import styled from 'styled-components';
import { DiTrello, DiSublime, DiWordpress, DiGithub } from 'react-icons/di';

const workspace = () => {
  const Body = styled.div`padding: 0.7em;`;
  return (
    <Body>
      <div>
        <p> user workspace panel </p>
        <Flex justifyBetween>
          <div>
            <DiGithub style={{ fontSize: '2em' }} />
          </div>
          <div>
            <DiTrello style={{ fontSize: '2em' }} />
          </div>
          <div>
            <DiSublime style={{ fontSize: '2em' }} />
          </div>
          <div>
            <DiWordpress style={{ fontSize: '2em' }} />
          </div>
        </Flex>
      </div>
    </Body>
  );
};

export default workspace;
