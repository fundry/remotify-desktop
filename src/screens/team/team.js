import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiMoreHorizontal, FiPlus, FiEdit2 } from 'react-icons/fi';
import Trello from 'trello-node-api';

import THead from './Head';
import Header from '../../components/head';
import Team from './teamModal';

const team = () => {
  const Div = styled.div`
    padding: 1em;
  `;

  const Card = styled.div({
    borderRadius: '3px',
    border: '0.7px solid #000',
    maxWidth: '20em',
  });

  const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
  });

  const Cards = styled.div({
    ...autoGrid(250, 20),
    padding: '2em',
  });

  const Head = styled.div({
    background: '#CCCCCC',
    color: '#000',
    padding: '0.3em',
  });

  const Body = styled.div({});

  const List = styled.div({
    padding: '0.5em',
  });

  const Bottom = styled.div`
    background : #CCCCCC
    padding : 0.1em
    padding-top : 10px
  `;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const data = [
    {
      name: 'Buy milk',
    },
    {
      name: 'Wash Cloth',
    },
    {
      name: 'Buy Chese',
    },
    {
      name: 'Clean House',
    },
  ];

  const card = [
    { name: 'My Schedule' },
    { name: 'Frontend Schedule' },
    { name: 'Backend Schedule' },
    { name: 'Ui Schedule' },
    { name: 'Ux Schedule' },
  ];

  const [Visible, setVisible] = useState(false);

  return (
    <div>
      <Header screens="team" />
      <THead />

      <Div>
        <Team visible={Visible} />
        <Cards>
          {card.map(({ name }) => (
            <Card>
              <Head>
                <Flex justifyBetween>
                  <p> {name} </p>

                  <Hover
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    <FiMoreHorizontal style={{ fontSize: '2em' }} />
                  </Hover>
                </Flex>
              </Head>

              <Body>
                {data.map(({ name }, i) => (
                  <List>
                    <Flex justifyBetween>
                      <li key={i}> {name}</li>

                      <FiEdit2 style={{ fontSize: '1. 5em' }} />
                    </Flex>
                  </List>
                ))}
              </Body>

              <Bottom>
                <Flex justifyCenter>
                  <Flex>
                    <div style={{ paddingRight: '5px' }}>
                      <FiPlus style={{ fontSize: '1.3em' }} />
                    </div>
                    <p> New Card </p>
                  </Flex>
                </Flex>
              </Bottom>
            </Card>
          ))}
        </Cards>
      </Div>
    </div>
  );
};

export default team;
