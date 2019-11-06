import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiSearch, FiX, FiCheck } from 'react-icons/fi';
import { FaRegCopy as FiCopy } from 'react-icons/fa'; // am lazy ... i use alias
import { inject, observer } from 'mobx-react';
import { Modal } from 'react-bootstrap';

const Keys = props => {
  const Div = styled.div`
    padding: 0.5em;
  `;

  const Text = styled.p`
    padding: 1em;
  `;

  const Clipboard = styled.div`
    height : 5vh
    border : 1px solid black
    border-radius : 2px
    padding : 0.5em
    width : 25em
    font-size : 1em
  `;

  const Hover = styled.div`
    padding-left  : 20px
    &:hover {
      cursor: pointer;
    }
  `;

  const Head = styled.div`
  padding: 0.5em
  background : #000
  color : #fff
`;

  const Request = styled.p`
    color : blue
    text-align : center
    &:hover {
      cursor: pointer;
    }
  `;

  const Input = styled.input({
    width: '22em',
    height: '5vh',
    paddingLeft: '10px',
    backgroundColor: 'transparent',
    border: '1px solid black',
    borderRadius: '2px',
    fontSize: '1em',
  });

  const { showKey, closeKey } = props.StorageStore;
  const [Find, setFind] = useState(false);
  const [Req, setReq] = useState(false);

  return (
    <Modal
      style={{ paddingTop: '7%' }}
      show={showKey}
      onHide={() => {
        closeKey();
      }}
    >
      <Head>
        <Flex justifyBetween>
          <p style={{ paddingLeft: '15px' }}> Credentials </p>

          <div
            onClick={() => {
              closeKey();
            }}
          >
            <FiX style={{ fontSize: '1.5em' }} />
          </div>
        </Flex>
      </Head>

      {/* REQUEST CREDENTIAL */}
      <div style={{ padding: '0.3em', borderBottomWidth: '3px', borderBottomColor: 'black' }}>
        {!Req ? (
          <Request
            onClick={() => {
              setReq(true);
            }}
          >
            Request Credential{' '}
          </Request>
        ) : (
          <Flex justifyCenter>
            <br />
            <Input placeholder="Credential name" />

            <Hover
              onClick={() => {
                setReq(false);
              }}
              style={{ paddingLeft: '20px' }}
            >
              <FiCheck style={{ fontSize: '1.57em' }} />
            </Hover>

            <Hover
              style={{ paddingLeft: '10px' }}
              onClick={() => {
                setReq(false);
              }}
            >
              <FiX style={{ fontSize: '1.57em' }} />
            </Hover>
          </Flex>
        )}
      </div>

      {/* find CREDENTIAL */}
      <div style={{ padding: '0.3em', borderBottomWidth: '3px', borderBottomColor: 'black' }}>
        {!Find ? (
          <div style={{ paddingRight: '20px', paddingLeft: '20px' }}>
            <Flex justifyBetween>
              <p style={{ fontSize: '0.9em' }}> 5 Available Credentials </p>

              <Hover
                onClick={() => {
                  setFind(true);
                }}
              >
                <FiSearch style={{ fontSize: '1.3em' }} />
              </Hover>
            </Flex>
          </div>
        ) : (
          <Flex justifyCenter>
            <Input placeholder="Credential name" />

            <Hover
              onClick={() => {
                setFind(false);
              }}
              style={{ paddingLeft: '20px' }}
            >
              <FiCheck style={{ fontSize: '1.5em' }} />
            </Hover>

            <Hover
              style={{ paddingLeft: '10px' }}
              onClick={() => {
                setFind(false);
              }}
            >
              <FiX style={{ fontSize: '1.5em' }} />
            </Hover>
          </Flex>
        )}
      </div>

      <Div>
        <div style={{ paddingLeft: '10px' }}>
          <Flex>
            <Clipboard>
              Contentful Password -<i>********* </i>{' '}
            </Clipboard>

            <Hover style={{ paddingLeft: '10px', paddingTop: '5px' }}>
              <FiCopy style={{ fontSize: '1.5em' }} />
            </Hover>
          </Flex>
        </div>
      </Div>
    </Modal>
  );
};

export default inject('StorageStore')(observer(Keys));
