import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const NavBar = () => {
  const Div = styled.div`
    padding  : 1em
    background  : transparent
`

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Div>
      <Flex justifyBetween>
        <p style={{ textAlign: 'center' }}> Menu </p>
        <p style={{ textAlign: 'center' }}> NavBar HERE </p>
        <p style={{ textAlign: 'center' }}> Settings</p>
      </Flex>

      <hr />
    </Div>
    // eslint-disable-next-line semi
  )
}
export default NavBar
