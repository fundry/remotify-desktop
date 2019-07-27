import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import { FiX, FiPlus, FiSearch } from 'react-icons/fi';

import Header from '../../components/head';
import Workspace from './workspace';
import { Tools } from '../../modals/index';

const office = (props) => {
  const Search = styled.input`  
    width : 18em
    height : 4vh
    padding-left : 15px
    border  :  0px  
    border-radius : 3px
  `;

  const Form = styled.form`
    padding: '0.2em',
    border-radius: '5px',
    padding-right: '10px',
    margin-right: '10px', 
`;

  const Btn = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <div>
      <Header screens="office" />

      <Tools visibility={props.ModalStore.toolsModal} />

      <div>
        <div style={{ textAlign: 'right ' }}>
          <Flex>
            <Btn
              onClick={() => {
                alert('true');
              }}
            >
              <FiPlus
                style={{
                  fontSize: '1.5em',
                  textAlign: 'right',
                  float: 'right',
                }}
              />
            </Btn>
            <p style={{ paddingTop: '7px' }}> Add Tool </p>
          </Flex>
        </div>

        <div>
          <Workspace />
        </div>
      </div>
    </div>
  );
};

export default inject('ModalStore')(observer(office));
