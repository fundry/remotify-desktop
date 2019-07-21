import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const player = () => {
  const Div = styled.div`padding: 1em;`;
  const Song = styled.h5``;
  const Author = styled.p``;
  const Duration = styled.p``;

  return (
    <Div>
      <Flex justifyBetween>
        <Flex column>
          <Song> Halleluyah </Song> <Author> Johnny Driller </Author>
        </Flex> 
        <Duration> 3 00 </Duration>  
      </Flex>
    </Div>
  );
};

export default player;
