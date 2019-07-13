import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import { FiMenu, FiSettings } from 'react-icons/fi';

const SettingNav = () => {
  const Search = styled.input`  
    width : 23em
    height : 5.2vh
    padding-left : 15px
    background : transparent
    border  :  0.5px solid blue 
    border-radius : 5px
  `;

  const Div = {
    background: ' #cdd ',
    width: '140%',
    padding: '1em',
  };

  return (
    <div style={Div}>
      <Flex>
        <div>
          <FiMenu style={{ fontSize: '1.5em' }} />
        </div>

        <div style={{ marginRight: '20px' }}>
          <Search placeholder="Search Settings" />
        </div>

        <div>
          <Link to="/settings">
            <FiSettings style={{ fontSize: '1.5em' }} />
          </Link>
        </div>
      </Flex>
    </div>
  );
};

// renders the header based on the parent component && props
// const Head =  (test) => {
//   switch (test) {
//     case (this.props.screens === 'setting' ):
//       return(<SettingNav />)
//     default:
//       break;
//   }
// }

export default SettingNav;
