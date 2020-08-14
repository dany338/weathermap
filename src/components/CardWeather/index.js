import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { GoogleMap, Marker } from 'react-google-maps';
/* Style Components */
import { Container } from './styled';
/* Constants */
import { BASE_PATH_IMG } from '../../infraestructure/config/const';

const CardWeather = ({ id, name, coord, weather, main }) => {
  const { main: title, description, icon } = weather[0];
  const { temp, temp_min, temp_max, humidity, pressure } = main;
  const { lon: lng, lat } = coord;

  return (
    <Container id={id}>
      <img
        className="weather__thumbnail"
        src={`${BASE_PATH_IMG}${icon}@2x.png`}
        alt="Weather Find"
      />
      <div className="weather__info">
        <img
          className="weather__avatar"
          src={icon ? (`${BASE_PATH_IMG}${icon}@2x.png`) : ('https://via.placeholder.com/150.png')}
          alt="Movie Show Time Finder"
        />
        <div className="weather__text">
          <h4>{`Temp: ${temp} • Min: ${temp_min} • Max: ${temp_max} • Humidity: ${humidity} • Pressure ${pressure}`}</h4>
          <p>{`Main: ${title} • Description: ${description}`}</p>
          <p>{name}</p>
        </div>
      </div>
      <div className="weather__map">
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat, lng }}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      </div>
    </Container>
  )
};

CardWeather.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  coord: PropTypes.shape({
    lon: PropTypes.number,
    lat: PropTypes.number
  }).isRequired,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      main: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
  main: PropTypes.shape({
    temp: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
  }).isRequired,
};

export default withRouter(CardWeather);
