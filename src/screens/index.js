import React from 'react';
import Main from './main';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

export default function index() {
  const Nav = styled.div`
    height : 5.5vh 
    padding  : 2% 
    background : black
    color  :  #fff
  `;

  const Title = styled.h3`font-size: 1.5em;`;

  const Icon = styled.h3`
    margin-left   :   0.3em
    margin-right   :   0.3em
  `;

  return (
    <div>
      <Nav>
        <Flex justifyBetween>
          <div>
            <h4> Devify </h4>
          </div>

          <div
            style={{
              textAlign: 'right ',
              marginBottom: '4%',
            }}
          >
            <Flex justifyAround>
              <Icon>
                <p> Maximize </p>
              </Icon>
              <Icon>
                <p> Minimize </p>
              </Icon>
              <Icon>
                <p> Close </p>
              </Icon>
            </Flex>
          </div>
        </Flex>
      </Nav>

      <Main />
    </div>
  );
}
