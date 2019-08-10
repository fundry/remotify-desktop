import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const Greet = styled.h2`text-align: center;`;

const Body = styled.div`padding: 1em;`;

const Break = styled.p`font-size: 1.3em;`;

const Div = styled.div`
    padding : 0.5em
    padding-top : 15px
`;

const breakpoint = () => {
  return (
    <Div>
      <Greet>Good Morning Victory.</Greet>

      <Flex justifyCenter>
        <Body>
          <Break> Your last breakpoints </Break>
          <div>
              <ul> Drink A very Black Tea </ul>
              <ul> Drink A very Black Tea </ul>
              <ul> Drink A very Black Tea </ul>
              <ul> Drink A very Black Tea </ul>
              <ul> Drink A very Black Tea </ul>
              <ul> Drink A very Black Tea </ul>
          </div>
        </Body>
      </Flex>
    </Div>
  );
};

export default breakpoint;
