import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import { FiMenu, FiSettings, FiSearch, FiMusic } from 'react-icons/fi';

const SettingNav = (props) => {
  const Search = styled.input`  
    width : 23em
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
      <div>
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
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default SettingNav;
