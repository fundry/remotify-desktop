import React, { useState } from 'react';
import Header from '../../components/head';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Modal } from 'react-bootstrap';
import Integrations from './integrations/integration';
import { FiX, FiPlus, FiSearch } from 'react-icons/fi';
import Workspace from './workspace'

const office = () => {
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

  const [Tools, setTools] = useState(false);
  const [expand, expanded] = useState(false);

  return (
    <div>
      <Header screens ="none"/>
      <Flex justifyCenter>
        <Modal
          show={Tools}
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
                      <Search placeholder="Search Shortcuts " />
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
            <Integrations />
          </div>
        </Modal>
      </Flex>

      <div>
        <div style={{ textAlign: 'right ' }}>
          <Flex>
            <Btn
              onClick={() => {
                setTools(true);
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

export default office;
