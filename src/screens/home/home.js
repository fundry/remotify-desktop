import React, { Component } from 'react';
import {
  MasterDetailsView,
  MasterDetailsViewItem,
  MasterDetailsViewItemMaster,
  MasterDetailsViewItemDetails,
  Text,
} from 'react-desktop/windows';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';


export default class extends Component {
  state = {
    showModal: null,
    blur: false,
  };
 
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
        <NavBar />

        <Flex justifyCenter>
          <Link to="/perf">
            <Button
              onClick={() => this.setState({ showModal: true, blur: true })}
            >
              Performance
            </Button>
          </Link>
        </Flex>
        {this.renderModal}
        <MasterDetailsView color="#cc7f29">
          {this.renderItem('Item 1', 'Content 1')}
          {this.renderItem('Item 2', 'Content 2')}
          {this.renderItem('Item 3', 'Content 3')}
        </MasterDetailsView>
      </div>
    );
  }

  renderItem(master, details) {
    return (
      <div>
        <MasterDetailsViewItem>
          <MasterDetailsViewItemMaster push>
            {master}
          </MasterDetailsViewItemMaster>
          <MasterDetailsViewItemDetails background>
            <Text padding="20px" color="white">
              {details}
            </Text>
          </MasterDetailsViewItemDetails>
        </MasterDetailsViewItem>
      </div>
    );
  }

  renderModal() {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false, blur: false })}
          style={{ paddingTop: '15%', padding: '5%' }}
        >
          <ChatModal />
        </Modal>
      </div>
    );
  }
}
