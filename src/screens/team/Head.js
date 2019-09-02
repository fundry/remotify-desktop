import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { DiTrello } from 'react-icons/di';
import { TiUser } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';

const Div = styled.div({
  background: '#333333',
  padding: '0.5em',
  color: '#fff',
});

const Button = styled.div`
  background: #0e2f5a;
  text-align: right;
  border-radius: 5px;
  height: 37px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1.7em;
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
    cursor: pointer;
  }
`;

const Input = styled.input({
  padding: '0.5em',
  paddingLeft: '2em',
  width: '22em',
  height: '4vh',
  border: '0px',
  fontSize: '0.9em',
  background: 'transparent',
  color: '#fff',
});

const Box = styled.div({
  padding: '0.5em',
  border: '1px solid #361f94 ',
  borderRadius: '5px',
  height: '5vh',
});

const Hover = styled.div({
  cursor: 'pointer',
});

const Head = () => {
  const [selected, select] = useState(false);
  const [Search, setSearch] = useState(false);

  return (
    <Div>
      <Flex justifyBetween>
        <Flex>
          <Button
            style={{ background: !selected ? ' #0e2f5a' : '#fff' }}
            onClick={() => {
              select(true);
            }}
          >
            Team
          </Button>
          <Button
            style={{ background: !selected ? ' #0e2f5a' : '#fff' }}
            onClick={() => {
              select(true);
            }}
          >
            Personal
          </Button>
        </Flex>

        <DiTrello style={{ fontSize: '2em' }} />

        <div>
          <Flex>
            {!Search ? (
              <Hover
                onClick={() => {
                  setSearch(true);
                }}
              >
                <FiSearch style={{ fontSize: '1.4em' }} />
              </Hover>
            ) : (
              <Box>
                <Flex>
                  <Input placeholder="Search" />

                  <FiSearch style={{ fontSize: '1.4em' }} />
                </Flex>
              </Box>
            )}
            <TiUser style={{ fontSize: '1.5em' }} />
          </Flex>
        </div>
      </Flex>
    </Div>
  );
};

export default Head;
