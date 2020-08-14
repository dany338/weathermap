import React, { useState, useEffect, useCallback, lazy } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import firebase from 'firebase';
/* Components */
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useWeather } from '../../infraestructure/hooks';
import db from '../../firebase';
// import CardWeather from '../../components/CardWeather';
const CardWeather = lazy(() => import('../../components/CardWeather'));

const Weather = () => {
  const { isLoading, data, query } = useWeather();

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <Container>
      <h2>Weather</h2>
      <div className="recommended__weather">
        {isLoading ? (
          <div style={{justifyContent: 'flex-end', width: '100%'}}>
            Loading information wait moment please...
            <SkeletonTheme color="#ccc" highlightColor="lightgray">
              <Skeleton height={600} />
            </SkeletonTheme>
          </div>
        ) : (
          <>
            {data && ( <CardWeather {...data} /> )}
          </>
        )}
      </div>
      <hr />
    </Container>
  )
};

export default Weather;
