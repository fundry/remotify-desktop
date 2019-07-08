import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';
import { Stream } from 'react-streams';
import { of, pipe } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';
import { ProgressCircle } from 'react-desktop/windows';
import { onPatch } from 'mobx-state-tree';

// import img from '../../../assets/images/worker.jpg';
import Bottom from '../../components/bottom';
import { Auth } from '../../state/models/';
import { observer } from 'mobx-react';

const electron = window.require('electron');
const ipc = electron.ipcRenderer;
const auth = Auth.create({ is_loggedIn : undefined  }) // experimental to try Onptach

onPatch(auth, (patch) => {
  console.log(patch);
});

const Login = () => {
  const Div = styled.div`padding: 1em;`;
  // background-image: url(${img});
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
  `;

  return (
    <Div>
      <Flex>
        <img
          src={
            'https://res.cloudinary.com/dkfptto8m/image/upload/v1561061164/Fundry/worker.jpg'
          }
          style={{ maxWidth: '50%', maxheight: '50vh', height: '40vh' }}
        />
        <div>
          <Flex justifyCenter>
            <input
              type="text"
              name="code"
              placeholder=" 0000-0000-0000 "
              style={{
                width: '15em',
                height: '35px',
                borderRadius: '3px',
                fontSize: '20px',
                textAlign: 'center',
                border: '1.5px solid blue',
                padding: '5px',
              }}
            />
            <br />
          </Flex>
          <div
            style={{
              textAlign: 'center',
              margin: '2%',
            }}
          >
            <Button
              onClick={() => {
                Auth.login_user;

                ipc.send('authenticated');
              }}
            >
              Login
            </Button>
          </div>
          <br /> <br /> <br /> <br />
          <Flex justifyCenter>
            <Help> Support </Help>
            <Help> Create Team </Help>
          </Flex>
          <hr />
          <Bottom />
        </div>
      </Flex>
    </Div>
  );
};

// const startWithAndDelay = (message, time) =>
//   pipe(delay(time), startWith({ message }));

// const message$ = of({ any: <Login /> });

// // const Loader = () => {
// //   return <ProgressCircle color='red' size={100} style={{ textAlign: 'center' }} />;
// // };

// export default () => (
//   <div>
//     <Stream source={message$} pipe={startWithAndDelay('.', 1000)}>
//       {({ any }) => <div>{any}</div>}
//     </Stream>
//   </div>
// );

export default observer(Login);
