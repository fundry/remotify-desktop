import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
            <p style={{ textAlign: 'center' }}> Menu </p>
          </div>
          <div>
            <div style={{ marginLeft: 15 }}>
              <h5 style={{ fontSize: 14, color: 'black' }}>{day}</h5>
              <h5 style={{ fontSize: 18, color: 'black' }}>{date}</h5>
            </div>
          </div>
          <div>
            <Link to="/settings">
              <p style={{ textAlign: 'center' }}> Settings</p>
            </Link>
          </div>
        </Flex>

        <hr />
      </Div>
    );
  }
}

export default NavBar;
