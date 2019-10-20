import React, { useState } from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { FiUser, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import posed from 'react-pose';
// import { FixedSizeList as List } from 'react-window';

const Overview = () => {
  const [Drop, setDrop] = useState(false);

  const Content = posed.div({
    closed: { height: 0 },
    open: { height: 'auto' },
  });

  const Body = styled.div({
    padding: '0.5em',
    height: '635px',
    width: '20em',
    border: '1px solid grey',
  });

  const Contain = styled(Content)({
    // overflow: 'hidden',
    fontSize: '18px',
    paddingLeft: '0.5em',
  });

  const Head = styled.div({
    backgroundColor: '#000',
    padding: '0.5em',
    color: '#fff',
  });

  const Message = styled.div`
    padding: 0.4em 0.7em;
    &:hover {
      cursor  : hover
      border-radius : 3px
      color : #fff
      background : #361f94
   }
  `;

  const Text = styled.p`
    font-size : 1em
    padding-left : 20px
  `;

  const Title = styled.p`
    font-weight: bold;
  `;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  return (
    <div>
      <Head style={{ boxShadow: '0px 2px 3px grey' }}> Official </Head>

      <Body>
        <Contain pose={Drop === 0 ? 'open' : 'closed'}>
          <Flex column>
            <Hover
              onClick={() => {
                setDrop(Drop === 0 ? false : 0);
              }}
            >
              <Flex>
                {Drop ? (
                  <FiChevronUp style={{ fontSize: '1.5em' }} />
                ) : (
                  <FiChevronDown style={{ fontSize: '1.5em' }} />
                )}
                <Title style={{ paddingLeft: '0.75em' }}> Official </Title>{' '}
              </Flex>
            </Hover>
            <Message>
              <Flex>
                <FiUser style={{ fontSize: '1.7em' }} />

                <Text> I want to talk to you urgently. </Text>
              </Flex>
            </Message>

            <Message>
              <Flex>
                <FiUser style={{ fontSize: '1.7em' }} />

                <Text> I want to talk to you urgently. </Text>
              </Flex>
            </Message>
          </Flex>
        </Contain>
        <br /> <br />
        <Contain>
          <Flex column>
            <Title> Private </Title>
            <Message>
              <Flex>
                <FiUser style={{ fontSize: '1.7em' }} />

                <Text> I want to talk to you urgently. </Text>
              </Flex>
            </Message>{' '}
            <Message>
              <Flex>
                <FiUser style={{ fontSize: '1.7em' }} />

                <Text> I want to talk to you urgently. </Text>
              </Flex>
            </Message>
          </Flex>
        </Contain>
      </Body>
    </div>
  );
};

export default Overview;
