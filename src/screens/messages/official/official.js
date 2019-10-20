import React, { useState } from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { FiSearch, FiVideo, FiList } from 'react-icons/fi';

import Chat from './chatWindow';
import Input from './inputWindow';

const Official = () => {
  const Head = styled.div({
    backgroundColor: '#361f94',
    padding: '0.5em',
    color: '#fff',
  });

  const Body = styled.div`
    padding: 1em
    border : 0.5px solid grey
    height: 560px,
    width: 40em,
  `;

  const IconBody = styled.div`
    cursor : pointer
    padding : 0.3em
    padding-left : 1em
  `;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const [List, setList] = useState(false);
  return (
    <div>
      <Head style={{ boxShadow: '0px 2px 3px grey' }}>
        <Flex justifyBetween>
          <Hover
            onClick={() => {
              setList(true);
            }}
          >
            <FiList style={{ fontSize: '1.5em' }} />{' '}
          </Hover>
          <p style={{ textAlign: 'center' }}> Official </p>{' '}
          <IconBody>
            <FiSearch style={{ fontSize: '1.5em' }} />

            <FiVideo style={{ fontSize: '1.5em' }} />
          </IconBody>
        </Flex>
      </Head>{' '}
      <Body>
        {List ? (
          <div>
            <Chat />
            <Input />
          </div>
        ) : (
          <div>
            <p> LIST OF GROUP MESSAGES </p>
          </div>
        )}
      </Body>
    </div>
  );
};

export default Official;
