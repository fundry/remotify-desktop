import React from 'react';
import Flex from 'styled-Flex-component';
import styled from 'styled-components';
import { DiTrello, DiSublime, DiWordpress, DiGithub } from 'react-icons/di';

const workspace = () => {
  const Body = styled.div`padding: 0.7em;`;
  const Contain = styled.div`
  padding: 1em
   width: 80%
   border-radius : 5px 
    background  : #ffe
    border : 1px grey
  ;`;

  return (
    <Body>
      <div>
        <p style={{ textAlign: 'center' }}> Workspace </p>

        <Contain
          style={{
            boxShadow: '0px 2px 5px grey',
          }}
        >
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
        </Contain>
      </div>
    </Body>
  );
};

export default workspace;
