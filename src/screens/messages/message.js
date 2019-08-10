import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';

import './app.css';
import Header from '../../components/head';

const TITLE_MAP = {
  a: 'Left Window',
  b: 'Top Right Window',
  c: 'Bottom Right Window',
  new: 'New Window',
};

const message = () => {
  return (
    <div>
      <Header screens="messages" />
      <h1> messages screen </h1>
      <div id="app">
        <Mosaic
          renderTile={(id, path) => (
            <MosaicWindow
              path={path}
              createNode={() => 'new'}
              title={TITLE_MAP[id]}
            >
              <h1>{TITLE_MAP[id]}</h1>
            </MosaicWindow>
          )}
          initialValue={{
            direction: 'row',
            first: 'a',
            second: {
              direction: 'column',
              first: 'b',
              second: 'c',
            },
          }}
        />
      </div>
    </div>
  );
};
export default message;
