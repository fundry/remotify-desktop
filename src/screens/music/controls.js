import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import {
  FiPlay,
  FiVolume2,
  FiRepeat,
  FiSkipBack,
  FiSkipForward,
  FiPause,
} from 'react-icons/fi';
import { Howl, Howler } from 'howler';

const Music = styled.div``;

const Div = styled.div`padding: 1em;`;

const Btn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const controls = () => {
  const [Play, setPlay] = useState(false);

  const playMusic = () => {
    setPlay(true);

    const sound = new Howl({
      src: ['sound.mp3'],
      volume: 2,
    });

    sound.play();

    console.log('play music fun');
  };

  return (
    <Div>
      <Flex justifyBetween>
        <Music>
          <Flex column>
            <h4> Halleluyah </h4>
            <p> Johhny Drille </p>
          </Flex>
        </Music>

        <Flex>
          <div style={{ paddingRight: '20px' }}>
            <Btn>
              <FiSkipBack style={{ fontSize: '2.2em', color: 'black' }} />
            </Btn>
          </div>

          {!Play ? (
            <Btn
              style={{ paddingRight: '10px' }}
              onClick={() => {
                playMusic();
              }}
            >
              <FiPlay
                style={{
                  fontSize: '3.5em',
                  color: 'black',
                  paddingBottom: '10px',
                }}
              />
            </Btn>
          ) : (
            <Btn
              style={{ paddingRight: '10px' }}
              onClick={() => {
                setPlay(false);
              }}
            >
              <FiPause
                style={{
                  fontSize: '3.5em',
                  color: 'black',
                  paddingBottom: '10px',
                }}
              />
            </Btn>
          )}

          <div style={{ paddingLeft: '5px' }}>
            <Btn>
              <FiSkipForward style={{ fontSize: '2.2em', color: 'black' }} />
            </Btn>
          </div>
        </Flex>

        <div>
          <Flex>
            <div style={{ paddingRight: '20px' }}>
              <Btn>
                <FiRepeat style={{ fontSize: '1.5em', color: 'black' }} />
              </Btn>
            </div>
            <div>
              <Btn>
                <FiVolume2 style={{ fontSize: '1.7em', color: 'black' }} />
              </Btn>
            </div>
          </Flex>
        </div>
      </Flex>
    </Div>
  );
};

export default controls;
