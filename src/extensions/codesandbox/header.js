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
  const Div = {
    background: ' #cdd ',
    padding: '0.3em',
  };

  const Collaborate = styled.div`
    background: #0e2f5a;
    text-align: right;
    border-radius: 3px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 2em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Title = styled.p`
    padding-top  :  10px
    padding-left  :  10px
  `;

  return (
    <div style={Div}>
      <Flex justifyBetween>
        <Title> CodeSandBox </Title>

        <Flex>
          <Collaborate> Collaborate </Collaborate>

          <Link to="/settings">
            <IoIosCall style={{ fontSize: '1.5em' }} />
          </Link>

          <Link to="/settings">
            <IoMdVideocam style={{ fontSize: '1.5em' }} />
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default inject('ModalStore')(observer(SettingNav));
