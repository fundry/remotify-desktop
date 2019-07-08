import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FiMenu, FiSettings } from 'react-icons/fi';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      currentDate: new Date(),
      markedDate: moment(new Date()).format('YYYY-MM-DD'),

      showModal: null,
      blur: false,
    };
  }

  render() {
    const Div = styled.div`
    padding  : 0.7em
    background  : transparent 
`;

    const today = this.state.currentDate;
    const day = moment(today).format('dddd');
    const date = moment(today).format('MMMM D, YYYY');

    return (
      <Div>
        <Flex justifyBetween>
          <div>
            <FiMenu style={{ fontSize: '25px', padding: '0.5em' }} />
          </div>

          <div>
            <Link to="/settings">
              <FiSettings style={{ fontSize: '25px', padding: '0.5em' }} />
            </Link>
          </div>
        </Flex>

        <hr />
      </Div>
    );
  }
}

export default NavBar;
