import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Dropdown } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

import { Keys } from '../../modals';
import Header from '../../components/head';

import { FiSearch, FiImage, FiUploadCloud, FiX } from 'react-icons/fi';
import { GoFile } from 'react-icons/go';
import { MdVideoLibrary } from 'react-icons/md';

// electron to trigger native file path
const Renderer = require('electron').ipcRenderer;
Renderer.on('selectred-directory', (event, path) => {
  console.log(path);
});

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};

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

const File = () => {
  const Upload = styled.button`
    background: #1a1c28;
    text-align: right;
    border-radius: 30px;
    height: 40px;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 2em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Button = styled.button`
    background: #850909;
    text-align: right;
    border-radius: 10px;
    height: 40px;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 2em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${(props) => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    margin: 1.5em;
    border-radius: 10px;
    transition: border .24s ease-in-out;
  `;

  const Browse = styled.button`
    background: #1a1c28;
    text-align: right;
    border-radius: 30px;
    height: 40px;
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

  const [upload, uploading] = useState(false);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: 'image/*' });

  return (
    <div>
      <Header screens="files" />
      <Keys />
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

      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        {!isDragActive ? (
          <div>
            {' '}
            <div>
              {upload ? (
                <div style={{ textAlign: 'center' }}>
                  <Button
                    onClick={() => {
                      uploading(false);
                    }}
                  >
                    <Flex>
                      <FiX style={{ fontSize: '1.7em' }} />
                      <p style={{ paddingLeft: '15px' }}> Cancel</p>
                    </Flex>
                  </Button>

                  <div>
                    <p> SELECT OR DRAG FILES TO UPLOAD </p>{' '}
                  </div>

                  <Browse
                    onClick={() => {
                      Renderer.send('open-file-dialog');
                    }}
                  >
                    Browse local files
                  </Browse>
                </div>
              ) : (
                <div style={{ textAlign: 'center', paddingTop: '30px' }}>
                  <p>Your storage is currently empty.</p>

                  <Flex justifyCenter>
                    <p> Use the </p>
                    <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                      <FiUploadCloud style={{ fontSize: '1.5em' }} />
                    </div>
                    <p> button to upload files into your storage . </p>
                  </Flex>

                  <p> You can drag 'n' drop files to upload </p>
                </div>
              )}
            </div>
            <div>
              {!upload ? (
                <Upload
                  style={{ textAlign: 'right' }}
                  onClick={() => {
                    uploading(true);
                  }}
                  style={{ boxShadow: '0px 2px 5px grey' }}
                >
                  <FiUploadCloud style={{ fontSize: '1.5em' }} />
                </Upload>
              ) : null}
            </div>{' '}
          </div>
        ) : (
          <p> Drop File </p>
        )}
      </Container>
    </div>
  );
};

export default File;
