import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { observer, inject } from 'mobx-react';

import Header from '../../components/head';
import List from './music.list';
import Controls from './controls';
import UploadMusic from './upload';

const music = () => {
  const Div = styled.div``;

  const Body = styled.div`
      padding: 1em;
      padding-bottom : 0.5em
      padding-top : 0.5em
  `;

  const Option = styled.div`
    background: #333;
    padding-left: 0.5em;
    padding-right: 0.5em;
  `;

  const Btn = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;
  const [Upload, setUpload] = useState(false);

  const Add = styled.div({
    height: '7vh',
    width: '7em',
    borderRadius: '15px',
    color: '#fff',
    background: '#0e2f5a',
  });

  return (
    <Div>
      <Header screens="music" />

      {!Upload ? (
        <Option>
          <Flex justifyBetween>
            <Btn
              onClick={() => {
                setUpload(true);
              }}
            >
              <Flex>
                <FiPlus
                  style={{
                    fontSize: '1.7em',
                    color: 'white',
                    paddingRight: '5px',
                  }}
                />
                <p style={{ color: 'white', paddingTop: '2px' }}> Source </p>
              </Flex>
            </Btn>

            <Flex>
              <Btn>
                <FiSearch
                  style={{
                    fontSize: '1.6em',
                    color: 'white',
                    paddingLeft: '5px',
                    paddingTop: '5px',
                  }}
                />
              </Btn>
            </Flex>
          </Flex>
        </Option>
      ) : null}

      {!Upload ? (
        <div>
          <Body>
            <List />
          </Body>
          <hr />
          <Controls />
        </div>
      ) : (
        <UploadMusic />
      )}
    </Div>
  );
};

export default inject('MusicStore')(observer(music));
