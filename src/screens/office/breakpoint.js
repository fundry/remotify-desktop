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

      <Body>
        <Break> Your last breakpoints </Break>
        <div>
          <ol>
            <ul> Drink Tea </ul>
            <ul> Drink Tea </ul>
            <ul> Drink Tea </ul>
            <ul> Drink Tea </ul>
            <ul> Drink Tea </ul>
          </ol>
        </div>
      </Body>
    </Div>
  );
};

export default breakpoint;
