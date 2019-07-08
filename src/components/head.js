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
    background  : #cdd 
    width   : 100%
    padding   : 1.5em
`;

    return (
      <Div>
        <Flex justifyBetween>
          <div>
            <FiMenu style={{ fontSize: '2.5em'  }} />
          </div>

          <div>
            <Link to="/settings">
              <FiSettings style={{ fontSize: '2.5em'  }} />
            </Link>
          </div>
        </Flex>
      </Div>
    );
  }
}

export default NavBar;
