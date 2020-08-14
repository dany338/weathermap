import React, { useState, useEffect, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
/* Style Components */
import { Container } from './styled';
/* Assets */
import assets from '../../assets';
/* Hooks */
import { useWeather } from '../../infraestructure/hooks';

const Header = () => {
  const { filter, getWeatherSearchByCityRequest } = useWeather();

  const handleChangeQuery = async e => {
    const { value } = e.currentTarget;
    const { msg, err } = await getWeatherSearchByCityRequest(value);
    if(!err) {
      console.log('sin error');
    }
  };

  return (
    <Container>
      <div className="header__left">
        <Link to="/"><i className="material-icons">menu</i></Link>
        <img
          className="header__logo"
          src={assets.logo}
          alt="Movie Show Time Finder"
        />
      </div>
      <div className="header__input">
        <input onChange={(e) => handleChangeQuery(e)} placeholder="Search city" type="text" value={filter.query} name="search" />
        <i className="material-icons header__inputButton">search</i>
      </div>
      <div className="header__icons">
        <i className="material-icons header__icon">apps</i>
        <i className="material-icons header__icon">notifications</i>
        {filter.query && (<span className="header__text">{filter.query}</span>)}
        <img
          className="header__avatar"
          src={assets.defaultAvatar}
          alt="Default Avatar"
        />
      </div>
    </Container>
  )
};

export default withRouter(Header);
