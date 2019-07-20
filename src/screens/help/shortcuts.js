import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiSearch } from 'react-icons/fi';
import { FixedSizeList as List } from 'react-window';

const Details = styled.p`font-size: 0.9em;`;

const Key = styled.code`
font-size  : 0.8em
    color  : blue
`;

const shortcuts = () => {
  //list of shortcuts for a virtualized window
  const Window = () => {
    return (
      <div>
        <Body>
          <Title> Music </Title>
          <Flex justifyBetween>
            <Details> Start Music Player</Details>
            <Key> Ctrl + M</Key>
          </Flex>{' '}
          <Flex justifyBetween>
            <Details> Stop Music Player</Details>
            <Key> Ctrl + S</Key>
          </Flex>{' '}
          <Flex justifyBetween>
            <Details> Exit Music Player</Details>
            <Key> Ctrl + E</Key>
          </Flex>
        </Body>{' '}
        <Body>
          <Title> Picture </Title>

          <Flex justifyBetween>
            <Details> ScreenShot View</Details>
            <Key> Ctrl + S + S</Key>
          </Flex>
        </Body>{' '}
        <Body>
          <Title> Music </Title>

          <Flex justifyBetween>
            <Details> Start Music Player</Details>
            <Key> Ctrl + M</Key>
          </Flex>
        </Body>{' '}
        <Body>
          <Title> Music </Title>

          <Flex justifyBetween>
            <Details> Start Music Player</Details>
            <Key> Ctrl + M</Key>
          </Flex>
        </Body>
      </div>
    );
  };

  const Head = styled.h4`
        text-align : center
        color  : #0e2f5a
    `;

  const Search = styled.input`  
    width : 23em
    height : 4.5vh
    padding-left : 15px
    border  :  0px  
    border-radius : 3px
  `;

  const Form = styled.form`
    padding: '0.2em',
    border-radius: '5px',
    padding-right: '10px',
    margin-right: '15px', 
`;

  const Body = styled.div`padding: 0.7em;`;

  const Title = styled.p`color: grey;`;
  return (
    <div>
      <Head> Shortcuts </Head>
      <Flex justifyCenter>
        <div
          style={{
            padding: '0.4em',
            border: '1px solid blue ',
            borderRadius: '5px',
            width: '27em',
          }}
        >
          <Form>
            <Flex>
              <div style={{ paddingTop: '5px' }}>
                <FiSearch style={{ fontSize: '1.5em' }} />
              </div>
              <Search placeholder="Search Shortcuts " />
            </Flex>
          </Form>{' '}
        </div>
      </Flex>
      <hr />
      <List height={400} itemSize={10} itemCount={4} width="100%">
        {() => <Window />}
      </List>{' '}
    </div>
  );
};

export default shortcuts;
