import React, { useState } from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { FiSearch, FiVideo, FiList, FiUser } from 'react-icons/fi';

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
    width: 45em,
     height:  660px
  `;

  const IconBody = styled.div`
    padding : 0.3em
    padding-left : 1em
  `;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const GroupBody = styled.div`
    padding: 0.55em 1em;
    height : 43px
    &:hover {
      cursor  : hover
      border-radius : 3px
      color : #fff
      background : #361f94
   }
  `;

  const ListBody = styled.div`
    padding: 0.2em;
  `;

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
            <Flex>
              <Hover style={{ paddingRight: '5px' }}>
                <FiSearch style={{ fontSize: '1.5em' }} />
              </Hover>
              <Hover>
                <FiVideo style={{ fontSize: '1.5em' }} />{' '}
              </Hover>{' '}
            </Flex>
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
          <ListBody>
            <GroupBody>
              <Flex>
                <Hover style={{ paddingRight: '5px' }}>
                  <FiUser style={{ fontSize: '1.5em' }} />
                </Hover>
                <h6 style={{ textAlign: 'center' }}> Fundry Organization </h6>
              </Flex>
            </GroupBody>
          </ListBody>
        )}
      </Body>
    </div>
  );
};

export default Official;
