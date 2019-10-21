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
  FiVolumeX,
} from 'react-icons/fi';
import { Howl, Howler } from 'howler';
import { set } from 'mobx';

const Music = styled.div``;

const Div = styled.div`
  padding: 1em;
`;

const Btn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const controls = () => {
  // music control states ========>>
  const [Play, setPlay] = useState(false);
  const [Mute, setMute] = useState(false);

  const sound = new Howl({
    src: [require('./sound.mp3')],
    volume: 2,
  });

  const playMusic = () => {
    setPlay(true);

    sound.play();
    // setTimeout(() => {
    //   sound.pause();
    // }, 5500);
  };

  const pauseMusic = () => {
    sound.pause();
    setPlay(false);
  };

  const muteMusic = () => {
    setMute(false);
    sound.mute();
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
          <Btn style={{ paddingRight: '20px' }}>
            <FiSkipBack style={{ fontSize: '2.2em', color: 'black' }} />
          </Btn>

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
                pauseMusic();
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

          <Btn style={{ paddingLeft: '5px' }}>
            <FiSkipForward style={{ fontSize: '2.2em', color: 'black' }} />
          </Btn>
        </Flex>

        <div>
          <Flex>
            <Btn style={{ paddingRight: '20px' }}>
              <FiRepeat style={{ fontSize: '1.5em', color: 'black' }} />
            </Btn>
            <div>
              {!Mute ? (
                <Btn
                  onClick={() => {
                    setMute(true);
                  }}
                >
                  <FiVolume2 style={{ fontSize: '1.7em', color: 'black' }} />
                </Btn>
              ) : (
                <Btn
                  onClick={() => {
                    muteMusic();
                  }}
                >
                  <FiVolumeX style={{ fontSize: '1.7em', color: 'black' }} />
                </Btn>
              )}
            </div>
          </Flex>
        </div>
      </Flex>
    </Div>
  );
};

export default controls;
