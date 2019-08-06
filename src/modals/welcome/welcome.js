import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import { FiX } from 'react-icons/fi';

import { inject, observer } from 'mobx-react';

const Head = styled.div`
    background : #1B1B1B
    padding : 0.6em
`;

const Button = styled.button`
  background: #0e2f5a;
  text-align: center;
  border-radius: 5px;
  height: 40px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1.3em;
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const List = styled.div``;

const Body = styled.div`padding: 1em;`;

const Login = () => {
  return (
    <Flex justifyCenter>
      <Modal
        show={true}
        style={{
          padding: '2em',
          borderRadius: '5px',
        }}
      >
        <Head style={{ boxShadow: '0px 2px 5px grey' }}>
          <p style={{ textAlign: 'center', color: 'white' }}>
            Welcome to Remotify{' '}
          </p>
        </Head>

        <Body>
          <p style={{ textAlign: 'center' }}>
            Hello <b> Victory Nwani </b> ,{' '}
          </p>
          <br />

          <p> {"You're a FrontEnd Engineer with Creatify.Inc"} </p>
          <div />
        </Body>

        <Flex justifyCenter>
          <p>Please Sign in inorder to use your tools </p>
          <Button> Sign in With Github </Button>
        </Flex>
        <br />
      </Modal>
    </Flex>
  );
};

export default inject('ModalStore')(observer(Login));
