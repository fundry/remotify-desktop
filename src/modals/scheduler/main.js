import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { FiChevronRight } from 'react-icons/fi';

import Schedule from './scheduler';

const electron = window.require('electron');
const Renderer = require('electron').ipcRenderer;

const Scheduler = (props) => {
  const { showModal, close_modal, setHours, organized } = props.SchedulerStore;

  const Body = styled.div`padding: 1em;`;

  const Button = styled.button`
    background: #0e2f5a;
    text-align: right;
    border-radius: 3px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 2em;
    font-size: 1em;
    outline: none;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const [Time, setTime] = useState(null);

  useEffect(() => {
    Renderer.send('retrieve-details');
    Renderer.on('read-details', (event, arg) => {
      setTime(arg.hours);
      console.log(arg.hours);
    });
  }, []);

  const Hover = styled.div({
    cursor: 'pointer',
  });

  return (
    <Modal
      show={showModal}
      onHide={() => {
        close_modal();
      }}
      style={{ marginTop: '10%' }}
    >
      <Hover
        style={{
          textAlign: 'right',
          color: 'blue',
          marginRight: '15px',
        }}
        onClick={() => {
          close_modal();
        }}
      >
        <FiChevronRight style={{ fontSize: '2.5em' }} />
      </Hover>

      {!organized ? (
        <div style={{ textAlign: 'center' }}>
          <p style={{ textAlign: 'center' }}>
            You currently have a {Time} hours per week working agreement.
          </p>
          <br /> <br /> <br /> <br />
          <p style={{ textAlign: 'center' }}>
            Organize and plan your working hours.
          </p>
          <Flex justifyCenter>
            <Button
              onClick={() => {
                setHours();
              }}
            >
              Organize
            </Button>
          </Flex>
          <br />
        </div>
      ) : (
        <Schedule time={Time} />
      )}
    </Modal>
  );
};

export default inject('SchedulerStore')(observer(Scheduler));
