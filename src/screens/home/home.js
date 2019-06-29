import React, { Component } from 'react'
import {
  MasterDetailsView,
  MasterDetailsViewItem,
  MasterDetailsViewItemMaster,
  MasterDetailsViewItemDetails,
  Text
} from 'react-desktop/windows'
import NavBar from '../../components/NavBar'


export default class extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <MasterDetailsView color='#cc7f29'  >
          {this.renderItem('Item 1', 'Content 1')}
          {this.renderItem('Item 2', 'Content 2')}
          {this.renderItem('Item 3', 'Content 3')}
        </MasterDetailsView> 
      </div>
    )
  }

  renderItem (master, details) {
    return (
      <div>
        <MasterDetailsViewItem>
          <MasterDetailsViewItemMaster push>
            {master}
          </MasterDetailsViewItemMaster>
          <MasterDetailsViewItemDetails background>
            <Text padding='20px' color='white'>
              {details}
            </Text>
          </MasterDetailsViewItemDetails>
        </MasterDetailsViewItem>
      </div>
    )
  }
}
