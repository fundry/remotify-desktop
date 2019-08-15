import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import { IoMdArrowBack, IoMdVideocam, IoIosCall } from 'react-icons/io';
import { Modal } from 'react-bootstrap';

import Colabs from './colabModal';

const Header = (props) => {
  const Header = styled.div` 
    background:  #cdd  
    padding: 0.2em 
  `;

  const Collaborate = styled.div`
    background: #0e2f5a;
    text-align: right;
    border-radius: 7px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.20em 1.6em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Title = styled.p`
  font-size : 1.15em
    padding-top  :  10px
    padding-left  :  10px
  `;

  const Actions = styled.div`  
  background:  #000
  color:  #fff
  padding: 0.2em 
  `;

  const [Colab, setColab] = useState(false);

  return (
    <div>
      <Modal style={{ textAlign: 'right', paddingTop: '5%' }} show={Colab}>
        <div>
          <p
            onClick={() => {
              setColab(false);
            }}
          >
            Close{' '}
          </p>
        </div>

        <Colabs />
      </Modal>

      <Header>
        <Flex justifyBetween>
          <Title> CodeSandBox </Title>

          <Flex>
            <Collaborate onClick={() => setColab(true)}>
              Collaborate{' '}
            </Collaborate>

            <Link to="/settings">
              <IoIosCall style={{ fontSize: '1.5em' }} />
            </Link>

            <Link to="/settings">
              <IoMdVideocam style={{ fontSize: '1.5em' }} />
            </Link>
          </Flex>
        </Flex>
      </Header>

      <Actions>
        <Flex justifyBetween>
          <div>Some shit here 1</div>
          <div>
            <h6> Sandbox name / project name </h6>
          </div>
          <div>Some shit here 3</div>
        </Flex>
      </Actions>
    </div>
  );
};

export default Header;
