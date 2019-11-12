import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { inject, observer } from 'mobx-react';

const Scheduler = props => {
  const { close_modal } = props.SchedulerStore;

  const Body = styled.div`
    padding: 1em;
  `;

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
    outline: none;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  return (
    <Body>
      <p> organize and plan your working hours </p>
    </Body>
  );
};

export default inject('SchedulerStore')(observer(Scheduler));
