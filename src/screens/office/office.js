import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import Header from '../../components/head';
import Workspace from './workspace';
import { Tools } from '../../modals/index';

const office = (props) => {
  return (
    <div>
      <Header screens="office" />

      <Tools visibility={props.ModalStore.toolsModal} />

      <div>
        <div>
          <Workspace />
        </div>
      </div>
    </div>
  );
};

export default inject('ModalStore')(observer(office));
