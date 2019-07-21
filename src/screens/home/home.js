import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Modal, Dropdown } from 'react-bootstrap';
import { FiActivity, FiX, FiFolder } from 'react-icons/fi';

import Clock from '../../components/clock';
import Head from '../../components/head';
import Perf from './user/performance/performance';
import { Music as M } from '../../state/models/';
import { observer } from 'mobx-react';
import { Todo as Todos } from '../../components/index';

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

  // this should be controlled externally by MST later
  const [allTodo, addTodo] = useState(false);
  const [Todo, setTodo] = useState(false);
  // ==

  const [Perfscreen, setPerfscreen] = useState(false);
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

        <div>
          <Modal
            show={Todo}
            onHide={() => setTodo(false)}
            style={{ paddingTop: '10%', padding: '5%' }}
          >
            <div style={{ padding: '1em' }}>
              <Flex justifyBetween>
                <div
                  style={{ textAlign: 'right', float: 'right' }}
                  onClick={() => setTodo(false)}
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

                <h5> Todo </h5>

                <Button onClick={() => addTodo(true)}> Add </Button>
              </Flex>
            </div>

            <div>
              <Todos add={allTodo} />
            </div>
          </Modal>
        </div>
        <br />
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
                  Performancae
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
          <div>
            <Button
              onClick={() => {
                setTodo(true);
              }}
            >
              Todo
            </Button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Home);
