import React from 'react';
import styled from 'styled-components';
import Head from '../../components/head';

const Settings = () => {
  const Div = styled.div`
    padding  : 0.5em
    background  : transparent
`;

  return (
    <Div>
      <Head />
      <p> Settings here </p>
    </Div>
  );
};
export default Settings;
