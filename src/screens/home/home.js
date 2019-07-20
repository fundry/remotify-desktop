import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Modal, Dropdown } from 'react-bootstrap';
import { FiActivity, FiX, FiFolder } from 'react-icons/fi';

import Clock from '../../components/clock';
import Head from '../../components/head';
import Perf from './user/performance/performance';
import Music from '../music/music';
import { Music as M } from '../../state/models/';
import { observer } from 'mobx-react';
import { onPatch } from 'mobx-state-tree';
import Shortcuts from '../help/shortcuts';

const Home = (props) => {
  const m = M.create({ anything: 'memememem' });
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
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const closeMusic = () => {
    m.stop();
    console.log(m.active);
  };

  const [Perfscreen, setPerfscreen] = useState(false);
  const [Shortcut, setShortcut] = useState(true);

  return (
    <div>
      <Head state={props.state} />

      <div
        style={{ paddingBottom: '10px', paddingTop: '10px', padding: '1em' }}
      >
        <Flex justifyCenter>
          <Modal
            size="lg"
            show={Perfscreen}
            onHide={() => setPerfscreen(false)}
            style={{ paddingTop: '10%', padding: '5%' }}
          >
            <Modal.Header
              style={{ padding: '1em', textAlign: 'right', float: 'right' }}
            >
              <div
                style={{ textAlign: 'right', float: 'right' }}
                onClick={() => setPerfscreen(false)}
              >
                <FiX
                  style={{
                    fontSize: '2em',
                    textAlign: 'right',
                    position: 'relative',
                    float: 'right',
                  }}
                />
              </div>
            </Modal.Header>
            <Modal.Body>
              <Perf />
            </Modal.Body>
          </Modal>
        </Flex>
        <br />
        <Modal
          show={Shortcut}
          onHide={() => setShortcut(false)}
          style={{
            paddingTop: '10%',
            padding: '5%',
            boxShadow: '0px 2px 5px #05156b',
          }}
        >
          <Modal.Body>
            <Shortcuts />
          </Modal.Body>
        </Modal>

        <Flex justifyBetween>
          <div>
            <Clock />
          </div>

          <Flex column>
            <h2 style={{ textAlign: 'center' }}> Nwani Victory </h2>
            <Button
              onClick={() => {
                setPerfscreen(true);
              }}
            >
              <Flex>
                <FiActivity style={{ fontSize: '1.7em' }} />
                <p style={{ fontSize: '1em', paddingLeft: '7px' }}>
                  Performancaae
                </p>
              </Flex>
            </Button>
          </Flex>

          <Flex column>
            <h2> Creatella </h2>
            <h5 stle={{ textAlign: 'right' }}> FontEnd Team</h5>
          </Flex>
        </Flex>
        <div>
          <Link to="/files">
            <FiFolder style={{ fontSize: '2em' }} />
          </Link>

          <div onClick={() => setShortcut(true)}>
            <Button> Shortcuts </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Home);
