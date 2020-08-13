import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useWeather } from '../../infraestructure/hooks';
/* Constants */
import { BASE_PATH_IMG } from '../../infraestructure/config/const';

const CardWeather = ({ id, poster_path, backdrop_path, title, release_date, vote_count, vote_average, genre_ids, onOpenModal }) => {

  return (
    <Container to={`/movie/${id}`}>
      {!processing ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#ccc" highlightColor="lightgray">
            <Skeleton width={270} height={270} />
          </SkeletonTheme>
        </div>
      ) : (
        <>
          <img
            className="movie__thumbnail"
            src={`${BASE_PATH_IMG}/w500${poster_path}`}
            alt="Movie Show Time Finder"
          />
          <div className="movie__info">
            <img
              className="movie__avatar"
              src={backdrop_path ? (`${BASE_PATH_IMG}/w500${backdrop_path}`) : ('https://via.placeholder.com/150.png')}
              alt="Movie Show Time Finder"
            />
            <div className="video__text">
              <h4>{title} •</h4>
              <p>{title} •</p>
              <div className="movie__subscriptions" onClick={(e) => onOpenModal(e, id, title, `${BASE_PATH_IMG}/w500${backdrop_path}`)}>
                <h4>Subscribe</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  )
};

CardWeather.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_count: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};

CardWeather.defaultProps = {
  backdrop_path: 'https://via.placeholder.com/150.png',
};

export default withRouter(CardWeather);
