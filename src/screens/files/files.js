import React from 'react';
import Header from '../../components/head';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { observer, inject } from 'mobx-react';

const files = () => {
  return (
    <div>
      <Header screen="files"/>
      <h1> USER FILES SCREEN </h1>
    </div>
  );
};

// export default inject('Teststore')(observer(files));

export default files
