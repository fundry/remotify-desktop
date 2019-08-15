import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const colabModal = () => {
  const Div = styled.div`padding: 1em;`;

  return (
    <Div>
      <p> INVITE PATNER </p>
      <input
        style={{
          height: '5vh',
          width: '25em',
          borderRadius: '5px',
          paddingLeft: '10px',
          border: '1px solid  #361f94 ',
        }}
        type="email"
        placeholder=" Search Tem mate "
      />
    </Div>
  );
};

export default colabModal;
