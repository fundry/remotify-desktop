// this contain many if statements which would later be written as Switches
import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import {
  FiMenu,
  FiSettings,
  FiSearch,
  FiMusic,
  FiPlus,
  FiArrowLeft,
  FiX,
} from 'react-icons/fi';
import { IoMdVideocam, IoIosCall } from 'react-icons/io';
import { GoKey } from 'react-icons/go';
import { observer, inject } from 'mobx-react';

const SettingNav = (props) => {
  console.log(props.ModalStore.MusicModal);
  console.log(props.ModalStore.toolsModal);

  const Btn = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  const Search = styled.input`  
    width : 23em'
    height : 4.5vh
    padding-left : 15px
    background : transparent
    border  :  0px
    border-radius : 3px
  `;

  const Div = {
    background: ' #cdd ',
    padding: '0.5em',
    width: '100%',
    boxShadow: '0px 2px 3px grey',
  };

  const Screen = styled.h5`
  padding-top : 15px
  padding-left: 15px
  ;
  `;

  const IconBody = styled.div`
    border: 0.5px solid black
    padding: 0.5em
    border-radius: 2.5px
    padding-right: 5px
    margin-right : 15px
  `;

  return (
    <div style={Div}>
      {props.screens == 'setting' ? (
        <Flex justifyBetween>
          <Screen> Setting</Screen>
          <form
            style={{
              border: '1px solid black',
              padding: '0.2em',
              borderRadius: '5px',
              paddingRight: '10px',
              marginRight: '15px',
            }}
          >
            <Flex>
              <Search placeholder="Search Settings" />

              <div style={{ paddingTop: '5px' }}>
                <Link to="/settings">
                  <FiSearch style={{ fontSize: '1.5em' }} />
                </Link>
              </div>
            </Flex>
          </form>
        </Flex>
      ) : null}

      {props.screens == 'music' ? (
        <Flex justifyBetween>
          <div style={{ color: 'blue' }}>
            <Flex>
              <FiMusic
                style={{
                  fontSize: '1.8em',
                  paddingRight: '5px',
                }}
              />
              <h6
                style={{
                  paddingTop: '5px',
                }}
              >
                Music
              </h6>
            </Flex>
          </div>

          <Btn>
            <FiSettings style={{ fontSize: '1.8em', color: 'blue' }} />
          </Btn>
        </Flex>
      ) : null}

      {props.screens == 'musicModal' ? (
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
      ) : null}

      {props.screens == 'team' ? (
        <Flex justifyBetween>
          <Screen> Team </Screen>
          <IconBody>
            <Flex>
              <div style={{ paddingTop: '5px' }}>
                <Link to="/settings">
                  <IoIosCall style={{ fontSize: '1.5em' }} />
                </Link>

                <Link to="/settings">
                  <IoMdVideocam style={{ fontSize: '1.5em' }} />
                </Link>
              </div>
            </Flex>
          </IconBody>
        </Flex>
      ) : null}

      {props.screens == 'files' ? (
        <Flex justifyBetween>
          <div style={{ paddingTop: '5px' }}>
            <Link to="/">
              <FiArrowLeft style={{ fontSize: '1.5em' }} />
            </Link>
          </div>

          <Screen> Files </Screen>

          <IconBody>
            <div style={{ paddingTop: '2.5px', paddingRight: '10px' }}>
              <Flex>
                <div style={{ paddingRight: '7px' }}>
                  <Link to="/">
                    <GoKey style={{ fontSize: '1.5em' }} />
                  </Link>
                </div>

                <Link to="/settings">
                  <FiSettings style={{ fontSize: '1.5em' }} />
                </Link>
              </Flex>
            </div>
          </IconBody>
        </Flex>
      ) : null}

      {props.screens == 'performance' ? (
        <Flex justifyBetween>
          <div style={{ paddingTop: '5px' }}>
            <Link to="/">
              <FiArrowLeft style={{ fontSize: '1.5em' }} />
            </Link>
          </div>

          <Screen> Performance | Nwani Victory </Screen>

          <IconBody>
            <Flex>
              <div style={{ paddingTop: '5px' }}>
                <Link to="/settings">
                  <FiSettings style={{ fontSize: '1.5em' }} />
                </Link>
              </div>
            </Flex>
          </IconBody>
        </Flex>
      ) : null}

      {props.screens == 'office' ? (
        <Flex justifyBetween>
          <Screen>WorkSpace</Screen>

          <IconBody>
            <Flex>
              <Link to="/settings">
                <FiPlus style={{ fontSize: '1.5em' }} />
              </Link>

              <div style={{ paddingRight: '10px' }}>
                <p>Add Tool </p>
              </div>
            </Flex>
          </IconBody>
        </Flex>
      ) : null}

      {props.screens == 'messages' ? (
        <Flex justifyBetween>
          <Screen> Messages </Screen>

          <IconBody>
            <Flex>
              <div style={{ paddingTop: '5px' }}>
                <Link to="/settings">
                  <IoIosCall style={{ fontSize: '1.5em' }} />
                </Link>

                <Link to="/settings">
                  <FiSearch style={{ fontSize: '1.5em' }} />
                </Link>
              </div>
            </Flex>
          </IconBody>
        </Flex>
      ) : null}

      {props.screens == 'none' ? (
        <Flex justifyBetween>
          <div>
            <FiMenu style={{ fontSize: '1.5em' }} />
          </div>

          <Flex>
            <div style={{ paddingRight: '1em' }}>
              <Link to="/music">
                <FiMusic style={{ fontSize: '1.5em' }} />
              </Link>
            </div>

            <div style={{ paddingRight: '1.5em' }}>
              <Link to="/settings">
                <FiSettings style={{ fontSize: '1.5em' }} />
              </Link>
            </div>
          </Flex>
        </Flex>
      ) : null}
    </div>
  );
};

export default inject('ModalStore')(observer(SettingNav));
