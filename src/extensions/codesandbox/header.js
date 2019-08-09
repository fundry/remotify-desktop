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
    </div>
  );
};

export default inject('ModalStore')(observer(SettingNav));
