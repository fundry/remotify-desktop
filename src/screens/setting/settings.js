import React from 'react';
import styled from 'styled-components';
import Head from '../../components/head';

const Settings = () => {
  const Body = styled.div`
    padding  : 0.5em
    background  : transparent
`;

  return (
    <div>
      <Head />
      <Body>
        <p> Settings here </p>{' '}
      </Body>
    </div>
  );
};
export default Settings;
