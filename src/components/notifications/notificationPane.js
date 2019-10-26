import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { inject, observer } from 'mobx-react';

const Body = styled.div`
  padding: 1em;
`;

const notificationPane = props => {
  const { show } = props.NotificationStore;
  console.log(show, 'notificationPane');
  return (
    <div>
      {show ? (
        <Body>
          <p> notificaion here </p>
          <button
            onClick={() => {
              props.NotificationStore.ClosePane();
            }}
          >
            close
          </button>
        </Body>
      ) : null}
    </div>
  );
};

export default inject('NotificationStore')(observer(notificationPane));
