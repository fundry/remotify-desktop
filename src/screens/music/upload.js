import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiCloud } from 'react-icons/fi';

// electron to trigger native file path
const Renderer = require('electron').ipcRenderer;
Renderer.on('selectred-directory', (event, path) => {
  console.log(path);
});

const Upload = () => {
  const Div = styled.div`padding: 0.5em;`;

  const Item = styled.div`
    padding: 1em
    cursor: pointer
    &:hover{
        cursor : pointer
         background : #eee
         color : #000
         border : 0.7px solid blue
         borderRadius : 5px
    }
    `;

  const Option = styled.h5``;

  const Text = styled.p``;
  return (
    <Div>
      <Item
        onClick={() => {
          Renderer.send('open-file-dialog');
        }}
      >
        <Flex>
          <FiCloud style={{ fontSize: '2em' }} />

          <div style={{ paddingLeft: '15px' }}>
            <Option> Play from local machine </Option>
            <Text> Play music stored on your machine with Remotify </Text>
          </div>
        </Flex>
      </Item>
      <Item
        onClick={() => {
          Renderer.send('open-file-dialog');
        }}
      >
        <Flex>
          <FiCloud style={{ fontSize: '2em' }} />

          <div style={{ paddingLeft: '15px' }}>
            <Option> Connect to external music Provider </Option>
            <Text>
              Connect and play music from external music providers wihin your
              region{' '}
            </Text>
          </div>
        </Flex>
      </Item>
      <Item
        onClick={() => {
          Renderer.send('open-file-dialog');
        }}
      >
        <Flex>
          <FiCloud style={{ fontSize: '2em' }} />

          <div style={{ paddingLeft: '15px' }}>
            <Option> Stream music </Option>
            <Text> upload your personal music from pc </Text>
          </div>
        </Flex>
      </Item>
    </Div>
  );
};

export default Upload;
