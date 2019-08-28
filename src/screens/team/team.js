import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiMoreHorizontal, FiPlus, FiEdit2 } from 'react-icons/fi';

import Header from '../../components/head';

const team = () => {
  const Div = styled.div`padding: 1em;`;

  const Card = styled.div({
    borderRadius: '3px',
    border: '1px solid #000',
    maxWidth: '25em',
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
  `;

  const data = [
    {
      1: {
        name: 'Buy milk',
      },
      2: {
        name: 'Wash Cloth',
      },
      3: {
        name: 'Buy Chese',
      },
      4: {
        name: 'Clean House',
      },
    },
  ];

  console.log(data);
  return (
    <div>
      <Header screens="team" />

      <Div>
        <Card>
          <Head>
            <Flex justifyBetween>
              <p> My Schedule </p>
              <FiMoreHorizontal style={{ fontSize: '2em' }} />
            </Flex>
          </Head>

          <Body>
            {data.map(( {name}, i) => (

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
                <div style={{ paddingRight: '10px' }}>
                  <FiPlus style={{ fontSize: '1.3em' }} />
                </div>
                <p> New Card </p>
              </Flex>
            </Flex>
          </Bottom>
        </Card>
      </Div>
    </div>
  );
};

export default team;
