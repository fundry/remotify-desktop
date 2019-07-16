import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import { FiMenu, FiSettings, FiSearch, FiMusic } from 'react-icons/fi';

const SettingNav = (props) => {
  const Search = styled.input`  
    width : 23em
    height : 5.2vh
    padding-left : 15px
    background : transparent
    border  :  0.6px solid blue 
    border-radius : 3px
  `;

  const Div = {
    background: ' #cdd ',
    padding: '1em',
    boxShadow: '0px 1px 1px rgba(0,0,0,0.1)',
  };

  return (
    <div style={Div}>
      <div>
        {props.screens == 'setting' ? (
          <Flex justifyBetween>
            <div>
              <FiMenu style={{ fontSize: '1.5em' }} />
            </div>

            <form>
              <Flex>
                <div style={{ marginRight: '20px' }}>
                  <Search placeholder="Search Settings" />
                </div>

                <div style={{ paddingTop: '10px' }}>
                  <Link to="/settings">
                    <FiSearch style={{ fontSize: '1.7em' }} />
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
