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
  border-radius: 3px;
  height: 43px;
  border: 1px solid #0e2f5a;
  color: #fff;
  padding: 0.5em 1.7em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const Body = styled.div`
  padding: 1em;
`;

const IconRole = styled.div`
padding-right : 25px
padding-left : 25px
`;

const Welcome = props => {
  const { welcomed } = props.WelcomeStore;
  return (
    <Flex justifyCenter>
      <Modal
        show={welcomed}
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
            <IconRole>
              <Flex justifyBetween>
                <DiGithub style={{ fontSize: '2em' }} />
                <DiTrello style={{ fontSize: '2em' }} />
                <DiSublime style={{ fontSize: '2em' }} />
                <DiWordpress style={{ fontSize: '2em' }} />
              </Flex>
            </IconRole>
          </div>

          <br />

          <div>
            <p> Role Based Tools </p>
            <IconRole>
              <Flex justifyBetween>
                <DiGithub style={{ fontSize: '2em' }} />
                <DiTrello style={{ fontSize: '2em' }} />
                <DiSublime style={{ fontSize: '2em' }} />
                <DiWordpress style={{ fontSize: '2em' }} />
              </Flex>
            </IconRole>
          </div>
        </div>
        <br />

        <Flex justifyCenter>
          <div>
            <p> Sign in inorder to use your tools </p>
            <Button
              onClick={() => {
                props.WelcomeStore.closeModal();
              }}
            >
              <Flex justifyBetween>
                <div>
                  <DiGithub style={{ fontSize: '2.5em' }} />
                </div>
                <p style={{ fontSize: '0.97em' }}>Sign in With Github </p>
              </Flex>
            </Button>
          </div>
        </Flex>
        <br />
      </Modal>
    </Flex>
  );
};

export default inject('WelcomeStore')(observer(Welcome));
