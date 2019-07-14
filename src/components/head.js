import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import { FiMenu, FiSettings, FiSearch } from 'react-icons/fi';

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
    width: '140%',
    padding: '1em',
  };

  console.log(props);

  return (
    <div style={Div}>
      <div>
        {props.screens == 'setting' ? (
          <Flex>
            <div>
              <FiMenu style={{ fontSize: '1.5em' }} />
            </div>

            <form>
              <Flex>
                <div style={{ marginRight: '20px' }}>
                  <Search placeholder="Search Settings" />
                </div>

                <div>
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

            <div style={{ paddingRight: '18em' }}>
              <Link to="/settings">
                <FiSettings style={{ fontSize: '1.5em' }} />
              </Link>
            </div>
          </Flex>
        )}
      </div>
    </div>
  );
};

export default SettingNav;
