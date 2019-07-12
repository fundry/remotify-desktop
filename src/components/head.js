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
    const padding = this.props.state ? '6.5em' : '11.5em';
    const Div = {
      background: ' #cdd ',
      width: '140%',
      padding: '1em',
    };
    console.log(this.props.state);

    return (
      <div style={Div}>
        <Flex justifyBetween>
          <div>
            <FiMenu style={{ fontSize: '1.5em' }} />
          </div>

          <div>
            <Link to="/settings">
              <FiSettings style={{ fontSize: '1.5em' }} />
            </Link>
          </div>
        </Flex>
      </div>
    );
  }
}

export default NavBar;
