import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Routes from './routes';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
    };
  }

  render() {
    const Div = styled.div`
    padding  : 0.7em
    background  : transparent
`;

    return (
      <Div>
        <Flex>
          <div>
            <p> Home </p>
          </div>

          <Routes />
        </Flex>
      </Div>
    );
  }
}

export default NavBar;
