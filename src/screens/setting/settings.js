import React from 'react';
import styled from 'styled-components';
import VerticalNav from '../../components/VerticalNav';

const Settings = () => {
  const Div = styled.div`
    padding  : 0.5em
    background  : transparent
`;

  return (
    <Div>
      <VerticalNav />
      <p> Settings here </p>
    </Div>
  );
};
export default Settings;
