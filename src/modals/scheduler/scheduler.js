import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { inject, observer } from 'mobx-react';

const Scheduler = (props) => {
  const { close_modal } = props.SchedulerStore;
  const { time } = props;

  const Body = styled.div`padding: 1em;`;

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

  const Button1 = styled.button`
    background: transparent;
    text-align: right;
    border-radius: 3px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #0e2f5a;
    margin: 0 1em;
    padding: 0.25em 2em;
    font-size: 1em;
    outline: none;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Circle = styled.div`
  height : 8vh
  width : 4em
  background : grey
  color : #fff
  padding : 0.3em
  border-radius : 110px
   border : 1px solid grey
  `;

  const Time = styled.p`text-align: center;`;

  const Options = styled.div`padding-left: 20px;`;

  return (
    <Body>
      <Circle>
        <Time style={{ fontSize: '1em' }}>
          {time} 1 <br /> hours{' '}
        </Time>
      </Circle>

      <br />
      <Options>
        <Flex>
          <input type="checkbox" />

          <p> Distribute hours evenly </p>
        </Flex>
        <Flex>
          <input type="checkbox" />

          <p> Reserve weekends</p>
        </Flex>
        <br /> <br />
        <br />
        <br />
        <br />
        <Flex>
          <Button1 style={{ marginRight: '7px' }}> Remind me later </Button1>
          <Button> Save </Button>
        </Flex>
      </Options>
    </Body>
  );
};

export default inject('SchedulerStore')(observer(Scheduler));
