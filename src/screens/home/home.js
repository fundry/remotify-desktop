import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

import Clock from '../../components/clock';
import VerticalNavBar from '../../components/VerticalNav';
import Perf from './user/performance/performance';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: null,
      blur: false,
    };
  }

  render() {
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

    return (
      <div>
        <VerticalNavBar />
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false, blur: false })}
          style={{ paddingTop: '10%', padding: '5%', backgroundColor: 'red' }}
        >
          <Perf />
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
        <div />
      </div>
    );
  }
}
