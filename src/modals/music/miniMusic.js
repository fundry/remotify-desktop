import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import {
  FiPlayCircle,
  FiVolume2,
  FiRepeat,
  FiSkipBack,
  FiSkipForward,
  FiPauseCircle,
  FiVolumeX,
  FiX,
} from 'react-icons/fi';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Howl, Howler } from 'howler';

const miniMusicModal = props => {
  const { miniMusic } = props.MusicStore;

  const Btn = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  const Body = styled.div`
    padding: 0.5em;
  `;

  // 09019212800
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

  const MusicName = styled.p`
    font-size: 1.2em;
    font-weight: normal;
  `;

  const MusicDuration = styled.p`
    font-size: 1em;
    text-align: center;
  `;

  const Details = styled.div``;

  const MusicPreview = styled.div({
    height: '100px',
    width: '130px',
    borderRadius: '5px',
    border: '1px solid grey',
    cursor: 'grab',
  });

  const MusicPreviewLeft = styled.div({
    height: '70px',
    marginTop: '10px',
    width: '55px',
    borderRadius: '5px',
    border: '0.7px solid grey',
    cursor: 'grab',
  });

  const MusicPreviewRight = styled.div({
    height: '70px',
    marginTop: '10px',
    width: '55px',
    borderRadius: '5px',
    border: '0.7px solid grey',
    cursor: 'grab',
  });

  return (
    <Modal
      show={miniMusic}
      onhide={() => {
        props.MusicStore.CloseMusic();
      }}
      style={{ height: '52vh', width: '20em', marginTop: '25px' }}
    >
      <Modal.Header>
        <Flex justifyBetween>
          <p> Music </p>

          <Btn
            onClick={() => {
              props.MusicStore.CloseMusic();
            }}
          >
            <FiX style={{ fontSize: '1.5em' }} />
          </Btn>
        </Flex>
      </Modal.Header>

      <Flex justifyCenter>
        <Details>
          <MusicName> D-banj Shake It ft Tiwa </MusicName>
          <MusicDuration> 03:45 </MusicDuration>
        </Details>
      </Flex>

      <Flex justifyCenter>
        <Flex>
          <MusicPreviewLeft> .</MusicPreviewLeft>
          <MusicPreview>
            <h5 style={{ fontWeight: 'normal', textAlign: 'center', paddingTop: '50px' }}>SH</h5>{' '}
          </MusicPreview>
          <MusicPreviewRight>.</MusicPreviewRight>
        </Flex>
      </Flex>

      <Body>
        <Flex justifyBetween>
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
        <Flex justifyCenter>
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
              <FiPlayCircle
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
              <FiPauseCircle
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
      </Body>
    </Modal>
  );
};
export default inject('MusicStore')(observer(miniMusicModal));
