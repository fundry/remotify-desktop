import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import Tools from './tools';
import { FiX, FiSearch } from 'react-icons/fi';

const toolsModal = (props) => {
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
  const [expand, expanded] = useState(false);
  console.log(props.visibility);
  return (
    <div>
      <Flex justifyCenter>
        <Modal
          show={props.visibility}
          onHide={() => {
            setTools(false);
            expanded(false);
          }}
          style={{ paddingTop: '20%', padding: '5%' }}
        >
          <div style={{ padding: '1em' }}>
            <Flex justifyBetween>
              <Btn
                onClick={() => {
                  setTools(false), expanded(false);
                }}
              >
                <FiX
                  style={{
                    fontSize: '2em',
                  }}
                />
              </Btn>

              {expand ? (
                <div
                  style={{
                    padding: '0.4em',
                    border: '1px solid blue ',
                    borderRadius: '5px',
                    width: '20em',
                  }}
                >
                  <Form>
                    <Flex>
                      <Btn style={{ paddingTop: '5px' }}>
                        <FiSearch style={{ fontSize: '1.3em' }} />
                      </Btn>
                      <Search placeholder=" Find Tools" />
                    </Flex>
                  </Form>
                </div>
              ) : (
                <Btn
                  onClick={() => {
                    expanded(true);
                  }}
                >
                  <FiSearch style={{ fontSize: '1.3em' }} />
                </Btn>
              )}
            </Flex>
          </div>

          <div style={{ padding: '1em' }}>
            <Tools />
          </div>
        </Modal>
      </Flex>
    </div>
  );
};

export default toolsModal;
