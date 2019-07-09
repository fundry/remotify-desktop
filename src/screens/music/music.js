import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Music } from '../../state/models/';
import { observer } from 'mobx-react';

const music = () => {
  const music = Music.create({ anything: 'my mula' });

  const close = () => {
    music.stop();
    console.log(music.active);
  };

  const Div = styled.div`padding: 1em;`;

  const Body = styled.div`
      padding: 1em;
      padding-bottom  :1em
      padding-top  :1em
  `;

  return (
    <Div style={{ boxShadow: '' }}>
      <Flex justifyBetween>
        <div>Music</div>

        <div>
          <p
            onClick={() => {
              close();
            }}
          >
            Close{' '}
          </p>
        </div>
      </Flex>

      <Body>PLAYER BODY</Body>
    </Div>
  );
};

export default observer(music);
