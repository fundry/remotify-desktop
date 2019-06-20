import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import { Link } from 'react-router-dom'
import { Stream } from 'react-streams'
import { of, pipe } from 'rxjs'
import { delay, startWith } from 'rxjs/operators'
import { ProgressCircle } from 'react-desktop/windows'

// import img from '../../../assets/images/worker.jpg';
import Internet from '../../internet'

const Login = () => {
  const Div = styled.div`
    padding: 1em;
  `
  // background-image: url(${img}); .. to be used with styled-comp for adding bckgrnd img
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

  const Help = styled.button`
    background: #0e2f5a;
    text-align: right;
    border-radius: 3px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 3em;
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
        />
        <br />
      </Flex>
      <div
        style={{
          textAlign: 'center',
          margin: '2%'
        }}
      >
        <Link to="/home">
          <Button
          onClick={() => alert('boom')}
          > Login </Button> 
        </Link>
      </div>
      <br /> <br /> <br /> <br />
      <Flex justifyCenter>
        <Help> Support </Help>
        <Help> Create Team </Help>
      </Flex>
      <hr />
      <Internet />
      <ProgressCircle color='red' size={100}  style={{ textAlign : 'center'}}/>
    </Div>
  )
}

const startWithAndDelay = (message, time) =>
  pipe(
    delay(time),
    startWith({ message })
  )

const message$ = of({ any: <Login /> })

const Loader = () => {
  return <h1> Load Shit </h1>
}

export default () => (
  <div>
    <h1> welcome and image </h1>
    <Stream source={message$} pipe={startWithAndDelay('wait small' , 100)}>
      {({ any }) => <div>{any}</div>}
    </Stream>
  </div>
)
// export default login;
