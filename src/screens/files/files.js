import React from 'react';
import Header from '../../components/head';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Dropdown } from 'react-bootstrap';

import { FiSearch, FiImage } from 'react-icons/fi';
import { GoFile } from 'react-icons/go';
import { MdVideoLibrary } from 'react-icons/md';

// import Videos from './videos';
// import Documents from './documents';
// import Images from './images';

const files = () => {
  const FileType = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">
            <Flex>
              <GoFile style={{ fontSize: '1.7em' }} />
              <p> Documents </p>
            </Flex>
          </Dropdown.Item>
          <Dropdown.Item href="/">
            <Flex>
              <FiImage style={{ fontSize: '1.7em' }} />
              <p> Images </p>
            </Flex>{' '}
          </Dropdown.Item>
          <Dropdown.Item href="/">
            <Flex>
              <MdVideoLibrary style={{ fontSize: '1.7em' }} />
              <p> Videos </p>
            </Flex>{' '}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const Div = styled.div`padding: 0.7em;`;

  const Button = styled.button`
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

  const Search = styled.input`  
    width : 30em
    height : 4.5vh
    text-align : center
    border  :  0px  
    border-radius : 3px
  `;

  const Form = styled.form`
    border : 0.7px solid grey 
    padding:  0.2em
    border-radius:  5px
    padding-right:  10px
    margin-right:  15px
    width : 50em    
  `;

  const statsBar = styled.div`
      background :  #000
      padding : 0.15em 
      color : #fff
    `;

  return (
    <div>
      <Header screens="files" />

      <div style={{ padding: '0.7em' }}>
        <Flex justifyCenter>
          <Form>
            <Flex justifyBetween>
              <FileType />

              <Search placeholder=" Search Files  " />
              <div style={{ paddingTop: '5px' }}>
                <FiSearch style={{ fontSize: '1.5em' }} />
              </div> 
            </Flex>
          </Form>
        </Flex>
      </div>

      <Div>
        <p> FILES DOWN HERE </p>
      </Div>

      <statsBar>
        <Flex justifyCenter>
          <p style={{ paddingLeft: '10px', fontSize: '0.85em' }}> 20gb Used </p>
          <p style={{ paddingLeft: '15px', fontSize: '0.85em' }}>
            30gb Available
          </p>
        </Flex>
      </statsBar>
    </div>
  );
};

export default files;

// export default files
