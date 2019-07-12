import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

import Clock from '../../components/clock';
import Head from '../../components/head';
import Perf from './user/performance/performance';
import Music from '../music/music';
import { Music as M } from '../../state/models/';
import { observer } from 'mobx-react';
import { onPatch } from 'mobx-state-tree';

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

  const openMusic = () => {
    m.start();
    console.log(m.active);
  };

  const closeMusic = () => {
    m.stop();
    console.log(m.active);
  };

  return (
    <div>
      <Head state={props.state} />

      <div
        style={{ paddingBottom: '10px', paddingTop: '10px', padding: '1em' }}
      >
        <Modal
          centered
          show={m.active}
          onHide={() => {
            closeMusic();
          }}
          style={{ paddingTop: '10%', padding: '5%' }}
        >
          <Music />
        </Modal>
        <Flex justifyBetween>
          <div>
            <Clock />
          </div>

          <Flex column>
            <h2 style={{ textAlign: 'center' }}> Nwani Victory </h2>
            <Button
              onClick={() => this.setState({ showModal: true, blur: true })}
            >
              Performance
            </Button>
          </Flex>

          <Flex column>
            <h2> Creatella </h2>
            <h5 stle={{ textAlign: 'right' }}> FontEnd Team</h5>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default observer(Home);
