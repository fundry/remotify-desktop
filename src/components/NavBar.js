import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const Div = styled.div`
    padding  : 0.7em
    background  : transparent
`;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Div>
      <Flex justifyBetween>
        <div>
          <p style={{ textAlign: 'center' }}> Menu </p>
        </div>
        <div>
          <p style={{ textAlign: 'center' }}> NavBar HERE </p>
        </div>
        <div>
          <Link to="/settings">
            <p style={{ textAlign: 'center' }}> Settings</p>
          </Link>
        </div>
      </Flex>

      <hr />
    </Div>
    // eslint-disable-next-line semi
  );
};
export default NavBar;
