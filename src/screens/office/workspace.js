import React, { useState } from 'react';
import Flex from 'styled-Flex-component';
import styled from 'styled-components';
import { DiTrello, DiSublime, DiWordpress, DiGithub } from 'react-icons/di';
import { Link } from 'react-router-dom';

const workspace = () => {
  const Body = styled.div`padding: 0.7em;`;
  const ContainFlat = styled.div`
  padding: 1em
   width: 80%
   border-radius : 5px 
    background  : #ffe
    border : 1px grey 
  ;`;

  const ContainBar = styled.div`
     border-radius : 5px 
    background  : #ffe
    border : 1px grey 
  ;`;

  const Btn = styled.div`
    padding : 0.2em
    &:hover {
      cursor: pointer;
    }
  `;

  const List = styled.ul`padding: 1em;`;

  const [Bar, setBar] = useState(true);

  return (
    <Body>
      <div>
        <p style={{ textAlign: 'center' }}> Workspace </p>

        <div>
          {Bar ? (
            <Flex justifyCenter>
              <ContainFlat
                style={{
                  boxShadow: '0px 2px 5px grey',
                }}
              >
                <Flex justifyBetween>
                  <Btn>
                    <Link to="/sandbox">
                      <Btn>
                        <div>
                          <DiGithub style={{ fontSize: '2em' }} />
                        </div>
                      </Btn>
                    </Link>
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

                  <p
                    onClick={() => {
                      setBar(false);
                    }}
                  >
                    stand{' '}
                  </p>
                </Flex>
              </ContainFlat>
            </Flex>
          ) : (
            <ContainBar
              style={{
                boxShadow: '0px 2px 5px grey',
                float: 'right',
                paddingRght: '20px',
              }}
            >
              <Flex column>
                <List>
                  <Link to="/sandbox">
                    <Btn>
                      <div>
                        <DiGithub style={{ fontSize: '2em' }} />
                      </div>
                    </Btn>
                  </Link>

                  <br />

                  <Btn>
                    <div>
                      <DiTrello style={{ fontSize: '2em' }} />
                    </div>
                  </Btn>
                  <br />

                  <Btn>
                    <div>
                      <DiSublime style={{ fontSize: '2em' }} />
                    </div>
                  </Btn>
                  <br />

                  <Btn>
                    <div>
                      <DiWordpress style={{ fontSize: '2em' }} />
                    </div>
                  </Btn>
                  <br />

                  <p
                    onClick={() => {
                      setBar(true);
                    }}
                  >
                    sleep
                  </p>
                </List>
              </Flex>
            </ContainBar>
          )}
        </div>
      </div>
    </Body>
  );
};

export default workspace;
