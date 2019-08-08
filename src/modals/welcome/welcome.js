import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import { DiTrello, DiSublime, DiWordpress, DiGithub } from 'react-icons/di';
import { inject, observer } from 'mobx-react';

const Head = styled.div`
    background : #1B1B1B
    padding : 0.1em
`;

const Button = styled.button`
  background: #0e2f5a;
  text-align: center;
  border-radius: 2px;
  height: 40px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.50em 1.5em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const Body = styled.div`padding: 1em;`;

const Login = () => {
  return (
    <Flex justifyCenter>
      <Modal
        show={true}
        style={{
          boxShadow: '0px 2px 5px grey',
          padding: '2em',
          borderRadius: '5px',
        }}
      >
        <Head style={{ boxShadow: '0px 2px 5px grey' }}>
          <p
            style={{
              textAlign: 'center',
              paddingTop: '10px',
              color: 'white',
              fontSize: '1.1em',
            }}
          >
            Welcome to Remotify
          </p>
        </Head>

        <Body>
          <div style={{ textAlign: 'center' }}>
            <p>
              Hello <b> Victory Nwani </b> , <br />
              {"You're a FrontEnd Engineer with Creatify.Inc"}
            </p>
          </div>
        </Body>

        <div style={{ padding: '1em' }}>
          <div>
            <p> Default enabled Tools </p>
            <Flex justifyBetween>
              <DiGithub style={{ fontSize: '2em' }} />
              <DiTrello style={{ fontSize: '2em' }} />
              <DiSublime style={{ fontSize: '2em' }} />
              <DiWordpress style={{ fontSize: '2em' }} />
            </Flex>
          </div>

          <div>
            <p> Role Based Tools </p>
            <Flex justifyBetween>
              <DiGithub style={{ fontSize: '2em' }} />
              <DiTrello style={{ fontSize: '2em' }} />
              <DiSublime style={{ fontSize: '2em' }} />
              <DiWordpress style={{ fontSize: '2em' }} />
            </Flex>
          </div>
        </div>

        <Flex justifyCenter>
          <div>
            <p> Sign in inorder to use your tools </p>
            <Button>
              <Flex>
                <div style={{ padding: '2px' }}>
                  <DiGithub
                    style={{ fontSize: '2.5em', paddingBottom: '7px' }}
                  />
                </div>
                <p style={{ fontSize: '0.9em'  , paddingTop: '5px' }}> Sign in With Github </p>
              </Flex>
            </Button>
          </div>
        </Flex>
        <br />
      </Modal>
    </Flex>
  );
};

export default inject('ModalStore')(observer(Login));
