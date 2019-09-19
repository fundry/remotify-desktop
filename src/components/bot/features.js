import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { FiToggleLeft } from 'react-icons/fi';

const features = () => {
  const Text = styled.p``;

  const Item = styled.div`
    padding: 0.5em
    &:hover{
        cursor : pointer
         background : #eee
         color : #000
         border : 0.7px solid blue
         borderRadius : 5px
    }
    `;

  const Option = styled.h5`font-weight: normal;`;

  const Div = styled.div`margin: 0.3em;`;

  return (
    <Div>
      <Item>
        <Flex justifyBetween>
          <div style={{ paddingLeft: '5px' }}>
            <Option> Mood detection</Option>
            <Text> Play music stored on your machine with Remotify </Text>
          </div>
          <FiToggleLeft style={{ fontSize: '2em' }} />
        </Flex>
      </Item>
      <Item>
        <Flex justifyBetween>
          <div style={{ paddingLeft: '5px' }}>
            <Option> Junk file detection </Option>
            <Text> Play music stored on your machine with Remotify </Text>
          </div>
          <FiToggleLeft style={{ fontSize: '2em' }} />
        </Flex>
      </Item>
      <Item>
        <Flex justifyBetween>
          <div style={{ paddingLeft: '5px' }}>
            <Option> Watch notificationss </Option>
            <Text> Play music stored on your machine with Remotify </Text>
          </div>
          <FiToggleLeft style={{ fontSize: '2em' }} />
        </Flex>
      </Item>
    </Div>
  );
};
export default features;
