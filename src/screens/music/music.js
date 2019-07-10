import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Music } from '../../state/models/';
import { observer } from 'mobx-react';
import { FiMusic, FiX, FiSettings, FiPlus, FiSearch } from 'react-icons/fi';
import { WiTime9 } from 'react-icons/wi';

import List from './music.list';
import Controls from './controls';

const music = () => {
  const music = Music.create({ anything: 'my mula' });

  const close = () => {
    music.stop();
    console.log(music.active);
  };

  const Div = styled.div``;

  const Body = styled.div`
      padding: 1em;
      padding-bottom  :1em
      padding-top  :1em
  `;

  const Head = styled.div`
    background: #3a3a3a;
    padding: 0.7em;
  `;

  const Option = styled.div`
    background: #333;
    padding: 0.5em;
  `;

  const Btn = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <Div style={{ boxShadow: '' }}>
      <Head>
        <Flex justifyBetween>
          <div>
            <Flex>
              <FiMusic
                style={{
                  fontSize: '2.2em',
                  color: 'white',
                  paddingRight: '5px',
                }}
              />
              <h5
                style={{
                  color: 'white',
                  paddingTop: '5px',
                }}
              >
                Music
              </h5>
            </Flex>
          </div>

          <div
            onClick={() => {
              close();
            }}
          >
            <Btn>
              <FiX style={{ fontSize: '2em', color: 'white' }} />
            </Btn>
          </div>
        </Flex>
      </Head>
      <Option>
        <Flex justifyBetween>
          <div>
            <Flex>
              <Btn>
                <FiSettings
                  style={{
                    fontSize: '2em',
                    color: 'white',
                    paddingRight: '10px',
                    paddingTop: '3px',
                  }}
                />
              </Btn>
              <Btn>
                <WiTime9
                  style={{
                    fontSize: '2em',
                    color: 'white',
                    paddingRight: '5px',
                    paddingTop: '5px',
                  }}
                />
              </Btn>
              <Btn>
                <FiSearch
                  style={{
                    fontSize: '2em',
                    color: 'white',
                    paddingLeft: '5px',
                    paddingTop: '5px',
                  }}
                />
              </Btn>
            </Flex>
          </div>
          <Btn>
            <div>
              <Flex>
                <FiPlus
                  style={{
                    fontSize: '1.7em',
                    color: 'white',
                    paddingRight: '5px',
                  }}
                />
                <p style={{ color: 'white', paddingTop: '3px' }}> Source </p>
              </Flex>
            </div>
          </Btn>
        </Flex>
      </Option>
      <Body>
        <List />
      </Body>
      <hr />
      <Controls />
    </Div>
  );
};

export default observer(music);
