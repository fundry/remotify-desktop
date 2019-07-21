import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiSend } from 'react-icons/fi';

const todo = (props) => {
  const Search = styled.input`  
            width : 23em
            height : 5.2vh
            padding-left : 15px
            border  :  1px  solid blue
            border-radius : 3px
    `;

  const Form = styled.form`
            padding: '0.2em',
            border-radius: '5px',
            padding-right: '10px',
            margin-right: '15px', 
    `;

  const Hover = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;

  //   const [Edit, Editing] = useState(false);

  return (
    <div>
      {props.add ? (
        <Flex justifyCenter>
          <Form>
            <Flex>
              <Search placeholder="Add Todo" />
              <div style={{ paddingLeft: '10px' , paddingTop :  '10px'}}>
                <Hover>
                  <FiSend style={{ fontSize: '1.5em'  }} />
                </Hover>
              </div>
            </Flex>
          </Form>
        </Flex>
      ) : null}

      <div>
        <p> Some Todo Here </p>
      </div>
    </div>
  );
};

export default todo;
