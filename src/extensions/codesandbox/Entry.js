import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const Box = styled.div`
    background : #000
    padding : 3em
    border:  0.5px solid grey
    border-radius : 5p  x
`;

const Button = styled.button`
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
  }
`;

const Entry = () => {
  const [Auth, setAuth] = useState(false);
  return (
    <div>
      {!Auth ? (
        <Flex justifyCenter>
          <Box
            style={{
              boxShadow: '0px 2px 5px grey',
            }}
          >
            <p> Signin To CodeSandBox</p>

            <Button
              onClick={() => {
                setAuth(true);
              }}
            >
              Login Through GitHub
            </Button>
          </Box>
        </Flex>
      ) : (
        <p> CODESANDBOX </p>
      )}
    </div>
  );
};

export default Entry;
