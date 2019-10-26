import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { FiActivity, FiFolder, FiCalendar } from 'react-icons/fi';
import { IoIosClipboard, IoMdAlarm, IoMdBook } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import Clock from '../../components/clock';
import Head from '../../components/head';
import { Keep } from '../../extensions/';

const Home = () => {
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

  const Hover = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  // this should be controlled externally by MST later
  const [Todo, setTodo] = useState(false);

  return (
    <div>
      <Head screens="none" />

      <div style={{ paddingBottom: '10px', paddingTop: '10px', padding: '1em' }}>
        <br />
        <Flex justifyBetween>
          <div>
            <Clock />
          </div>

          <Flex column>
            <h2 style={{ textAlign: 'center' }}> Nwani Victory </h2>
            <Link to="performance">
              <Button>
                <Flex>
                  <FiActivity style={{ fontSize: '1.7em' }} />
                  <p style={{ fontSize: '1em', paddingLeft: '7px' }}>Performance</p>
                </Flex>
              </Button>
            </Link>
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

          <Flex justifyCenter>
            <div style={{ padding: '2em', width: '70%' }}>
              <Flex justifyBetween>
                <Hover
                  onClick={() => {
                    setTodo(true);
                  }}
                >
                  <FiCalendar style={{ fontSize: '3em' }} />
                </Hover>
                <Hover>
                  <IoIosClipboard style={{ fontSize: '3em' }} />
                </Hover>

                <Hover>
                  <IoMdAlarm style={{ fontSize: '3em' }} />
                </Hover>

                <Hover>
                  <IoMdBook style={{ fontSize: '3em' }} />
                </Hover>
              </Flex>
            </div>
          </Flex>

          <Keep />
        </div>
      </div>
    </div>
  );
};

export default observer(Home);
