import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Planet } from 'react-kawaii';

const About = () => {
  const Text = styled.p`text-align: center;`;

  const Body = styled.div`padding: 0.5em;`;

  return (
    <div>
      <Flex justifyCenter>
        <Body>
          <Planet mood="happy" style={{ fontSize: '2em' }} size="7em" />
        </Body>
      </Flex>

      <Text>
        xmhbjvfjgv m,hgbrhv ,muhgrugiuuhn gbkrgku gj,bgruy jgrguy jgrhgu{' '}
      </Text>
    </div>
  );
};
export default About;
