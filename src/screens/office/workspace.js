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

  const Btn = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <Body>
      <div>
        <p style={{ textAlign: 'center' }}> Workspace </p>

        <Flex justifyCenter>
          <Contain
            style={{
              boxShadow: '0px 2px 5px grey',
            }}
          >
            <Flex justifyBetween>
              <Btn>
                <div>
                  <DiGithub style={{ fontSize: '2em' }} />
                </div>
              </Btn>
              <Btn>
                <div>
                  <DiTrello style={{ fontSize: '2em' }} />
                </div>
              </Btn>
              <Btn>
                <div>
                  <DiSublime style={{ fontSize: '2em' }} />
                </div>
              </Btn>
              <Btn>
                <div>
                  <DiWordpress style={{ fontSize: '2em' }} />
                </div>
              </Btn>
            </Flex>
          </Contain>
        </Flex>
      </div>
    </Body>
  );
};

export default workspace;
