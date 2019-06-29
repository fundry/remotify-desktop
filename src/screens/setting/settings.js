import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';

const Settings = () => {
  const Div = styled.div`
    padding  : 0.5em
    background  : transparent
`;

  return (
    <Div>
      <NavBar />
      <p> Settings here </p>
    </Div>
  );
};
export default Settings;
