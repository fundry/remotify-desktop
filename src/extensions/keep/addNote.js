import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiPlus, FiX, FiClock } from 'react-icons/fi';

const addNote = () => {
  // some app-states
  const notes = useState({});
  const [note, setNote] = useState(false);

  const InputBox = styled.div({
    height: '6vh',
    width: '30em',
    padding: '0.3em',
    background: '#fff',
    borderRadius: '10px',
  });

  const Input = styled.input({
    height: '5.5vh',
    width: '23em',
    padding: '0.5em',
    borderWidth: '0px',
  });

  const Head = styled.div`
    background : black 
    padding : 1em
    color : white
    padding-bottom : 20px
    height  : 10vh
    border-radius : 20px
  `;

  const List = styled.div`
  padding : 0.5em
  border  : 1px solid black
  border-radius  : 10px
  `;

  const Text = styled.p``;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const Time = styled.div`
    padding: 0.4em
    text-align: right
    border : 0.5px  solid black
    border-radius : 10px
    `;

  return (
    <div>
      <Head>
        {note ? (
          <InputBox>
            <Flex>
              <Input placeholder="Add Note" />

              <Hover
                onClick={() => {
                  setNote(false);
                }}
              >
                <FiX
                  style={{
                    fontSize: '1.2em',
                    color: '#000',
                  }}
                />
              </Hover>
            </Flex>
          </InputBox>
        ) : (
          <Flex justifyBetween>
            <p> Google Keep </p>{' '}
            <Hover
              onClick={() => {
                setNote(true);
              }}
            >
              <FiPlus style={{ fontSize: '1.7em' }} />
            </Hover>
          </Flex>
        )}

        <p
          style={{
            textAlign: 'center',
            color: 'white',
          }}
        >
          17 unread{' '}
        </p>
      </Head>
      <br />
      <List>
        <Text> Buy Coffee </Text>

        <Time>
          <Flex justifyBetween>
            <p> Tomorrow</p>

            <Hover>
              <FiClock style={{ fontSize: '1em' }} />
            </Hover>
          </Flex>
        </Time>
      </List>
    </div>
  );
};

export default addNote;
