import React, { useState, useEffect, useCallback } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import firebase from 'firebase';
/* Components */
import CardMovie from '../../components/CardWeather';
import ModalSubscribe from '../../components/ModalSubscribe';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useWeather } from '../../infraestructure/hooks';
import db from '../../firebase';

const modalRoot = document.getElementById('modal-root');
const customStyles = {
  overflowY: 'auto',
};

const Weather = () => {
  const [ processing, setProcessing ] = useState(false);
  const [ visible, setVisible ] = useState(false);
  const [ movieSelected, setMovieSelected ] = useState(null);
  const { isLoading, data, query, getWeatherSearchByCityRequest } = useWeather();

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleOpenModal = (e, id, title, image) => {
    e.preventDefault();
    setVisible(true);
    setMovieSelected({ moviedb_id: id, name: title, moviedb_image: image });
    db.collection('movies').add({
      movie_id: id,
      movie_title: title,
      uid: 1,
      date: Date.now(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    e.stopPropagation();
  };

  const load = useCallback(async () => {
    await getWeatherSearchByCityRequest(1);
  }, [getWeatherSearchByCityRequest]);

  useEffect(() => {
    if(!processing) {
      load();
      setProcessing(true);
    }
  }, [load, processing]);

  return (
    <Container>
      <h2>Recommended</h2>
      <div className="recommended__movies">
        {!processing ? (
          <div style={{justifyContent: 'flex-end', width: '100%'}}>
            Loading information wait moment please...
            <SkeletonTheme color="#f42f6391" highlightColor="#444">
              <Skeleton height={34} />
            </SkeletonTheme>
          </div>
        ) : (
          <>
            {data.map((movie) => <CardMovie key={`movie-${movie.id}`} {...movie} onOpenModal={handleOpenModal} /> )}
          </>
        )}
      </div>
      <hr />
      <ModalSubscribe visible={visible} onClose={handleCloseModal} movie={movieSelected} />
    </Container>
  )
};

export default Weather;
