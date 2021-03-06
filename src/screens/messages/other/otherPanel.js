import React, { useState } from 'react';
import styled from 'styled-components';
import { FiInbox } from 'react-icons/fi';
import Flex from 'styled-flex-component';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Members from './members/list';
import Chat from './chatWindow';
import Input from './inputWindow';

const Private = props => {
  const { screenWidth } = props;
  const [Switch, setSwitch] = useState(false);

  const Head = styled.div({
    backgroundColor: 'grey',
    padding: '0.5em',
    color: '#fff',
  });

  const Body = styled.div({
    padding: ' 1em',
    height: '660px',
    border: '0.5px solid grey',
    width: !screenWidth >= 950 ? '27em' : '27em',
  });

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const { chatMembers } = props.MessageStore;
  return (
    <div>
      <Head style={{ boxShadow: '0px 2px 3px grey' }}>
        <Flex justifyBetween>
          {Switch ? <p> Private Messages </p> : <p> Chat List </p>}

          <Hover
            onClick={() => {
              setSwitch(true);
            }}
          >
            <FiInbox style={{ fontSize: '1.5em' }} />
          </Hover>
        </Flex>
      </Head>

      <Body>
        {chatMembers ? (
          <Members />
        ) : (
          <div>
            {Switch ? (
              <Members />
            ) : (
              <div>
                <Chat />
                <Input screenWidth={screenWidth} />
              </div>
            )}
          </div>
        )}
      </Body>
    </div>
  );
};

Private.PropTypes = {
  screenWidth: PropTypes.number,
  props: PropTypes.number,
};

export default inject('MessageStore')(observer(Private));
