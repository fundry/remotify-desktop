import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiDownload, FiMoreVertical } from 'react-icons/fi';

// ===== this block generates an error with my old babel ====
/*
const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
});

const Card = styled.div({
  ...autoGrid(350, 20),
  padding: '6em',
});
 */

const Card = styled.div`padding: 1em;`;

const Btn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const tools = () => {
  return (
    <div>
      <p style={{ paddingLeft: '10px' }}>Based on your FrontEnd Role</p>

      <Flex justifyBetween>
        <Card style={{ boxShadow: '0px 2px 5px grey' }}>
          <p> WordPress </p>
          <div style={{ padding: '1em' }}>
            <Flex justifyBetween>
              <Btn>
                <FiDownload style={{ fontSize: '1.1em' }} />
              </Btn>

              <Btn>
                <FiMoreVertical style={{ fontSize: '1.1em' }} />
              </Btn>
            </Flex>
          </div>
        </Card>
        <Card style={{ boxShadow: '0px 2px 5px grey' }}>
          <p> WordPress </p>
          <div style={{ padding: '1em' }}>
            <Flex justifyBetween>
              <Btn>
                <FiDownload style={{ fontSize: '1.1em' }} />
              </Btn>

              <Btn>
                <FiMoreVertical style={{ fontSize: '1.1em' }} />
              </Btn>
            </Flex>
          </div>
        </Card>
        <Card style={{ boxShadow: '0px 2px 5px grey' }}>
          <p> WordPress </p>
          <div style={{ padding: '1em' }}>
            <Flex justifyBetween>
              <Btn>
                <FiDownload style={{ fontSize: '1.1em' }} />
              </Btn>

              <Btn>
                <FiMoreVertical style={{ fontSize: '1.1em' }} />
              </Btn>
            </Flex>
          </div>
        </Card>
      </Flex>
    </div>
  );
};

export default tools;
