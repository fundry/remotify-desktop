import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import Internet from '../../internet'

import { Link } from 'react-router-dom'
 
const login = () => {
  const Div = styled.div`
    padding: 1em;
  `

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
  `

  return (
    <Div>
      <Flex justifyCenter>
        <input
          type='text'
          name='code'
          placeholder=' 0000-0000-0000 '
          style={{
            width: '15em',
            height: '35px',
            borderRadius: '3px',
            fontSize: '20px',
            textAlign: 'center',
            border: '1.5px solid blue',
            padding: '5px'
          }}
        />{' '}
        <br />
      </Flex>
      <div
        style={{
          textAlign: 'center',
          margin: '2%'
        }}
      >
       <Link to="/home">   <Button> Login </Button> </Link>
      </div>{' '}
      <Flex justifyAround>
        <p> Contact Team Admin </p>{' '}
      </Flex>{' '}
      <Internet />
    </Div>
  )
}
export default login
