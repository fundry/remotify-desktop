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
} from 'react-icons/fi';
import { IoMdArrowBack, IoMdVideocam, IoIosCall } from 'react-icons/io';
import { observer, inject } from 'mobx-react';

const SettingNav = (props) => {
  console.log(props.ModalStore.MusicModal);
  console.log(props.ModalStore.toolsModal);

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
  };

  return (
    <div style={Div}>
      {props.screens == 'setting' ? (
        <Flex justifyBetween>
          <div>
            <FiMenu style={{ fontSize: '1.7em' }} />
          </div>

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
      {props.screens == 'team' ? (
        <Flex justifyBetween>
          <div>
            <FiMenu style={{ fontSize: '1.7em' }} />
          </div>

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
              <div style={{ paddingTop: '5px' }}>
                <Link to="/settings">
                  <IoIosCall style={{ fontSize: '1.5em' }} />
                </Link> 

                <Link to="/settings">
                  <IoMdVideocam style={{ fontSize: '1.5em' }} />
                </Link>
              </div>
            </Flex>
          </form>
        </Flex>
      ) : null}
      {props.screens == 'files' ? (
        <Flex justifyBetween>
          <div style={{ paddingTop: '5px' }}>
            <Link to="/">
              <FiArrowLeft style={{ fontSize: '1.7em' }} />
            </Link>
          </div>

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
              <div style={{ paddingTop: '5px' }}>
                <Link to="/settings">
                  <FiSettings style={{ fontSize: '1.5em' }} />
                </Link>
              </div>
            </Flex>
          </form>
        </Flex>
      ) : null}
      {props.screens == 'office' ? (
        <Flex justifyBetween>
          <div style={{ paddingTop: '5px' }}>
            <Link to="/">
              <IoMdArrowBack style={{ fontSize: '1.7em' }} />
            </Link>
          </div>

          <form
            style={{
              border: '1px solid black',
              padding: '0.2em',
              borderRadius: '5px',
              paddingRight: '10px',
              marginRight: '15px',
            }}
          >
            <div style={{ paddingTop: '5px' }}>
              <Flex>
                <Link to="/settings">
                  <FiPlus style={{ fontSize: '1.5em' }} />
                </Link>

                <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  <p>Add Tool </p>
                </div>
              </Flex>
            </div>
          </form>
        </Flex>
      ) : null}
      {props.screens == 'messages' ? (
        <Flex justifyBetween>
          <div>
            <FiMenu style={{ fontSize: '1.7em' }} />
          </div>

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
              <div style={{ paddingTop: '5px' }}>
                <Link to="/settings">
                  <IoIosCall style={{ fontSize: '1.5em' }} />
                </Link>

                <Link to="/settings">
                  <FiSearch style={{ fontSize: '1.5em' }} />
                </Link>
              </div>
            </Flex>
          </form>
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
