import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import Chart from './chart';
import Head from '../../../../components/head';
import storage from 'electron-json-storage';

const Performance = () => {
  const Body = styled.div`
    padding: 1em;
  `;

  const Uptime = styled.div`
  height : 11vh
  width : 6em
  background : grey
  color : #fff
  padding : 1em
  border-radius : 110px
   border : 1px solid grey
   padding-top : 20px
  `;

  const [Data, setData] = useState('');

  useEffect(() => {
    storage.get('details', (error, data) => {
      setData(data.name);
    });
  }, []);

  return (
    <div>
      <Head screens="performance" name={Data} />

      <Body>
        <div>
          <Flex justifyBetween>
            <Flex>
              <h5> During </h5>
              <p> drop </p>
            </Flex>

            <Flex column>
              <h5 style={{ textAlign: 'center' }}> 3pm - 9pm </h5>
              <p> Most active time of the day </p>
            </Flex>

            <Uptime
              style={{
                boxShadow: '0px 5px 7px grey',
              }}
            >
              <h6>
                15 days <br /> Uptime
              </h6>
            </Uptime>
          </Flex>
        </div>

        <div>
          <h6> USER STATS </h6>
          <Chart />
        </div>
      </Body>
    </div>
  );
};
export default Performance;
