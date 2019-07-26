import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

const Shortcut = (props) => {
  const Header = styled.div`padding: 0.5em;`;
  const Button = styled.button`
    background: #0e2f5a;
    text-align: right;
    border-radius: 5px;
    height: 37px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 1.7em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;
  const Head = styled.h5`
  padding-right : 15px
  color  : #0e2f5a
  `;

  const { ShortcutModal } = props.ModalStore;

  return (
    <div>
      <Modal
        show={props.visibility}
        onHide={() => {}}
        style={{
          paddingTop: '10%',
          padding: '5%',
          boxShadow: '0px 2px 5px grey',
        }}
      >
        <Header>
          <Flex justifyBetween>
            <Button onClick={() => {}}>Close</Button>
            <p> {ShortcutModal} </p>
            <Head> Shortcuts </Head>
          </Flex>
        </Header>

        <Modal.Body>
          <Shortcut />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default inject('ModalStore')(observer(Shortcut));
