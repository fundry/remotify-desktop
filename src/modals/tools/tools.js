import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiDownload, FiMoreVertical } from 'react-icons/fi';
import { DiTrello, DiSublime, DiWordpress, DiGithub } from 'react-icons/di';
import { FixedSizeList as List } from 'react-window';

const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
});

const Cards = styled.div({
  ...autoGrid(350, 20),
  padding: '6em',
});

const Card = styled.div`padding: 1em;`;

const Btn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const tools = () => {
  const toolList = () => {
    return (
      <Cards>
        <Card style={{ boxShadow: '0px 2px 5px grey' }}>
          <div>
            <DiWordpress style={{ fontSize: '2em' }} />
          </div>
          <p style={{ textAlign: 'center' }}> WordPress </p>
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
          <div>
            <DiGithub style={{ fontSize: '2em' }} />
          </div>
          <p style={{ textAlign: 'center' }}> Github</p>
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
          <div>
            <DiWordpress style={{ fontSize: '2em' }} />
          </div>
          <p style={{ textAlign: 'center' }}> WordPress </p>
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
          <div>
            <DiWordpress style={{ fontSize: '2em' }} />
          </div>
          <p style={{ textAlign: 'center' }}> WordPress </p>
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
          <div>
            <DiGithub style={{ fontSize: '2em' }} />
          </div>
          <p style={{ textAlign: 'center' }}> Github</p>
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
          <div>
            <DiWordpress style={{ fontSize: '2em' }} />
          </div>
          <p style={{ textAlign: 'center' }}> WordPress </p>
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
      </Cards>
    );
  };

  return (
    <div>
      <p style={{ paddingLeft: '10px', textAlign: 'center' }}>
        Based on your <b> FrontEnd </b> Role
      </p>

      <List height={350} itemSize={10} itemCount={6} width="100%">
        {() => <toolList />}
      </List>
    </div>
  );
};

export default tools;
